import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RequiredNativeClientVersion } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
    const path = parseInt(window.localStorage.nativeClientVersion, 10) === RequiredNativeClientVersion ? 'home' : 'install';
    this.router.navigateByUrl(path);
    // register this window with background page (in case window is reloaded)
    chrome.runtime.getBackgroundPage((page) => {
      page.$registerUiWindow(window);
    });
  }

}
