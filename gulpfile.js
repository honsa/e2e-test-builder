const { series, parallel, watch, src, dest } = require('gulp');
const replace = require('gulp-replace');
var zip = require('gulp-zip');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const fs = require('fs');

function createNgBuildTask(app, shouldWatch, isProduction) {
  console.log('building ' + (shouldWatch ? ' and watching ' : '') + app);
  var args = ['build', app, '--vendor-chunk=false', '--output-hashing=none', '--aot=true'];
  if (shouldWatch) {
    args.push('--watch');
  }
  if (isProduction) {
    args.push('--prod');
  }

  const ngBuild = function () {
    return spawn(process.platform === "win32" ? "ng.cmd" : "ng", args, { stdio: 'inherit' });
  }

  ngBuild.displayName = 'ng ' + args.join(' ');

  return ngBuild;
}

function pack() {
  try {
    fs.unlinkSync('build.zip');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
  return src(['build/**/*', '!**/*.db', '!background/index.html', '!content/index.html'])
    .pipe(zip('build.zip'))
    .pipe(dest('./'));
}

function copyAssets() {
  return src('assets/**/*').pipe(dest('build/assets/'));
}

function buildManifest(isProduction) {
  const runtimeScript = isProduction ? 'runtime-es2015.js' : 'runtime.js';
  const polyfillsScript = isProduction ? 'polyfills-es2015.js' : 'polyfills-es5.js';
  const mainScript = isProduction ? 'main-es2015.js' : 'main.js';
  return function () {
    const pack = JSON.parse(fs.readFileSync('./package.json'));
    return src('src/manifest.json')
      .pipe(replace('{{package.version}}', pack.version))
      .pipe(replace('{{defaultIcon}}', 'assets/icon-c@32.png'))
      .pipe(replace('"{{icons}}"', '{ ' + [16, 32, 48, 128, 256, 512].map((size) => `"${size}" : "assets/icon-c@${size}.png"`).join(', ') + ' }'))
      .pipe(replace('{{runtimeScript}}', runtimeScript))
      .pipe(replace('{{polyfillsScript}}', polyfillsScript))
      .pipe(replace('{{mainScript}}', mainScript))
      .pipe(dest('build/'));
  };
}

function buildIoProxy() {
  return exec("mvn package", { cwd: 'src/io' });
}

const ioProxy = series(
  buildIoProxy,
  parallel(
    () => src("src/io/target/ioproxy-1.0.jar").pipe(dest("host")),
    () => src("src/io/target/ioproxy-1.0.jar").pipe(dest("host-win"))
  )
);

exports['io-proxy'] = ioProxy;

exports.manifest = series(
  buildManifest(true)
);

exports.dev = series(
  parallel(copyAssets, buildManifest(false)),
  parallel(
    createNgBuildTask('background', true),
    createNgBuildTask('content', true),
    createNgBuildTask('ui', true),
    function watchManifest() { watch(['src/manifest.json', 'package.json'], buildManifest) },
    function watchIoProxy() { watch('src/io/src/**/*', ioProxy) }
  )
);

exports.build = series(
  parallel(copyAssets, buildManifest(true)),
  parallel(
    createNgBuildTask('background'),
    createNgBuildTask('content'),
    createNgBuildTask('ui')
  )
);

exports.release = series(
  parallel(copyAssets, buildManifest(true)),
  parallel(
    createNgBuildTask('background', false, true),
    createNgBuildTask('content', false, true),
    createNgBuildTask('ui', false, true)
  ),
  pack
);