// PTOR:start
// File was generated by Selenium Protractor
var TEST_CASE = {
  "items": [
    {
      "type": "comment",
      "value": "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create"
    },
    {
      "type": "command",
      "command": "disableSynchronization"
    },
    {
      "type": "command",
      "command": "open",
      "locator": "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create",
      "value": ""
    },
    {
      "command": "waitForElementPresent",
      "locator": "css=body .summary",
      "value": "",
      "type": "command"
    },
    {
      "type": "command",
      "command": "assertLocation",
      "locator": "",
      "value": "http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create"
    },
    {
      "type": "command",
      "command": "storeLocation",
      "value": "url"
    },
    {
      "type": "command",
      "command": "echoLocation"
    },
    {
      "type": "command",
      "command": "store",
      "locator": "51",
      "value": "number"
    },
    {
      "type": "command",
      "command": "assertNot",
      "locator": "${url}",
      "value": "foo"
    },
    {
      "type": "command",
      "command": "assert",
      "locator": "51",
      "value": "${number}"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li a",
      "value": ""
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "",
      "value": "document.querySelector('h3').id = 'test-id';"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=p:nth-child(7) .keyword:nth-child(2)",
      "value": "element.innerHTML = '<span e2e-tag=\"foo\"><select class=\"test\"><option value=\"1\">value 1</option><option value=\"2\">value 2</option><option value=\"3\">Foo 3</option></select></span>';"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "id=test-id",
      "value": "element.style.border='1px solid red';"
    },
    {
      "type": "command",
      "command": "select",
      "locator": "css=[e2e-tag=\"foo\"] select",
      "value": "regexpi:foo"
    },
    {
      "type": "command",
      "command": "select",
      "locator": "css=[e2e-tag=\"foo\"] select",
      "value": "index=0"
    },
    {
      "type": "command",
      "command": "assertAttribute",
      "locator": "css=[e2e-tag=\"foo\"] select@class",
      "value": "test"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "setTimeout(function(){document.querySelector('h1').style.display = 'none'},1000);",
      "value": ""
    },
    {
      "type": "command",
      "command": "waitForNotVisible",
      "locator": "css=h1",
      "value": "5000"
    },
    {
      "type": "command",
      "command": "store",
      "value": "summary",
      "locator": "css=.summary"
    },
    {
      "type": "command",
      "command": "mouseDownRight",
      "locator": "${summary}",
      "value": ""
    },
    {
      "type": "command",
      "command": "mouseUpRightAt",
      "locator": "${summary}",
      "value": "20,50"
    },
    {
      "type": "command",
      "command": "store",
      "locator": "123",
      "value": "data.abc"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(2) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertNotCookieByName",
      "locator": "_referrer_og",
      "value": "2"
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=.toc li:nth-child(3) a",
      "value": "element.click()"
    },
    {
      "type": "command",
      "command": "store",
      "locator": "title",
      "value": "titleProp"
    },
    {
      "type": "command",
      "command": "echoEval",
      "locator": "document.${titleProp}",
      "value": ""
    },
    {
      "type": "comment",
      "value": "foo"
    },
    {
      "type": "command",
      "command": "storeEval",
      "locator": "document.title",
      "value": "title"
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${title}",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(4) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${data.abc ||'123'}",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(6) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li:nth-child(7) a",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertText",
      "locator": "css=.toc li a:contains('Grow ')",
      "value": "Grow a flex item X times as big as other flex items"
    },
    {
      "type": "command",
      "command": "echoText",
      "locator": "css=.toc li a:contains('Center')",
      "value": ""
    },
    {
      "type": "command",
      "command": "eval",
      "locator": "css=.cta:nth-child(5)",
      "value": "element.onclick = ()=>{alert('clicked')}"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.cta:nth-child(5)",
      "value": ""
    },
    {
      "type": "command",
      "command": "assertAlert",
      "locator": "",
      "value": "clicked"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.toc li a",
      "value": ""
    },
    {
      "type": "command",
      "command": "sleep",
      "locator": "",
      "value": "500"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": ""
    },
    {
      "type": "command",
      "command": "storeCssCount",
      "locator": "css=input",
      "value": "data.count"
    },
    {
      "type": "command",
      "command": "assertCssCount",
      "locator": "css=input",
      "value": "<6"
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${data.count}",
      "value": ""
    },
    {
      "type": "comment",
      "value": "should skip commands until next comment if there are more than 6 fields"
    },
    {
      "type": "command",
      "command": "breakIf",
      "locator": "${data.count}",
      "value": ">6"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.sketching",
      "value": ""
    },
    {
      "type": "command",
      "command": "type",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": ""
    },
    {
      "type": "command",
      "command": "sendKeys",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": "test@example.com${KEY_ENTER}"
    },
    {
      "type": "comment",
      "value": "should run commands until next comment (and after) if there are less than 6 or 6 fields"
    },
    {
      "type": "command",
      "command": "continueIf",
      "locator": "${data.count}",
      "value": "<=6"
    },
    {
      "type": "command",
      "command": "click",
      "locator": "css=.sketching",
      "value": ""
    },
    {
      "type": "command",
      "command": "type",
      "locator": "css=.sketching .email input[name=\"fields[email]\"]",
      "value": "test@example.com"
    },
    {
      "type": "comment",
      "value": "should work with legacy format continueIf/breakIf format"
    },
    {
      "type": "command",
      "command": "continueIf",
      "locator": "",
      "value": "data.count > 5"
    },
    {
      "type": "command",
      "command": "echo",
      "locator": "${data.count}",
      "value": ""
    }
  ],
  "title": "cheatsheet",
  "baseUrl": "http://google.com"
};
// PTOR:end

// Do not modify anything below as changes will be lost!

'use strict'
module.exports = (function(config, data) {

    var url, number, summary, titleProp, title;

    describe('cheatsheet', function() {

        it('http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create', function() {

            browser.ignoreSynchronization = true;
            browser.get(`http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create`);
            browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css(`body .summary`))), 2000,`waitForElementPresent|css=body .summary|`);
            browser.getCurrentUrl().then(function (_value) {
                expect(_value).toEqual(`http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create`,`assertLocation||http://www.sketchingwithcss.com/samplechapter/cheatsheet.html#create`);
                browser.getCurrentUrl().then(function (_value) {
                    url = _value;
                    browser.getCurrentUrl().then(function (_value) {
                        console.info(_value);
                        number = 51;
                        expect(url).not.toEqual(`foo`,`assertNot|${url}|foo`);
                        expect(51).toEqual(number,`assert|51|${number}`);
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li a`)).getWebElement());
                        element(by.css(`.toc li a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li a|`); });

                        browser.executeScript(`document.querySelector('h3').id = 'test-id';`);
                        browser.executeScript(`var element = arguments[0];element.innerHTML = '<span e2e-tag="foo"><select class="test"><option value="1">value 1</option><option value="2">value 2</option><option value="3">Foo 3</option></select></span>';`,element(by.css(`p:nth-child(7) .keyword:nth-child(2)`)).getWebElement());
                        browser.executeScript(`var element = arguments[0];element.style.border='1px solid red';`,element(by.id(`test-id`)).getWebElement());
                        element(by.css(`[e2e-tag="foo"] select`)).element(by.cssContainingText('option',`regexpi:foo`)).click();
                        element(by.css(`[e2e-tag="foo"] select`)).element(by.css(`option:nth-child(1)`)).click();
                        element(by.css(`[e2e-tag="foo"] select`)).getAttribute("class").then(function (_value) {
                            expect(_value).toEqual(`test`,`assertAttribute|css=[e2e-tag="foo"] select|test`);
                            browser.executeScript(`setTimeout(function(){document.querySelector('h1').style.display = 'none'},1000);`);
                            browser.wait(protractor.ExpectedConditions.invisibilityOf(element(by.css(`h1`))), 5000,`waitForNotVisible|css=h1|5000`);
                            summary = element(by.css(`.summary`));
                            browser.executeScript('arguments[0].scrollIntoView(false);', summary.getWebElement());
                            browser.actions().mouseMove(summary).mouseDown(2).perform().then(function(){},function(err){ fail(err+"\ncommand: "+`mouseDownRight|${summary}|`); });

                            browser.executeScript('arguments[0].scrollIntoView(false);', summary.getWebElement());
                            browser.actions().mouseMove(summary, { x: 20, y: 50 }).mouseUp(2).perform().then(function(){},function(err){ fail(err+"\ncommand: "+`mouseUpRightAt|${summary}|20,50`); });

                            data.abc = 123;
                            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(2) a`)).getWebElement());
                            element(by.css(`.toc li:nth-child(2) a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li:nth-child(2) a|`); });

                            element(by.xpath(`_referrer_og`)).getAttribute("cookieByName").then(function (_value) {
                                expect(_value).not.toEqual(`2`,`assertNotCookieByName|_referrer_og|2`);
                                browser.executeScript(`var element = arguments[0];element.click()`,element(by.css(`.toc li:nth-child(3) a`)).getWebElement());
                                titleProp = `title`;
                                browser.executeAsyncScript('arguments[arguments.length - 1](' + `document.${titleProp}` + ')').then(function (_value) {
                                    console.info(_value);
                                });

                            });

                        });

                    });

                });

            });

        });

        it('foo', function() {

            browser.executeAsyncScript('arguments[arguments.length - 1](' + `document.title` + ')').then(function (_value) {
                title = _value;
                console.info(`${title}`);
                browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(4) a`)).getWebElement());
                element(by.css(`.toc li:nth-child(4) a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li:nth-child(4) a|`); });

                console.info(`${data.abc ||'123'}`);
                browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(6) a`)).getWebElement());
                element(by.css(`.toc li:nth-child(6) a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li:nth-child(6) a|`); });

                browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li:nth-child(7) a`)).getWebElement());
                element(by.css(`.toc li:nth-child(7) a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li:nth-child(7) a|`); });

                element(by.cssContainingText(`.toc li a`, `Grow `)).getText().then(function (_value) {
                    expect(_value).toEqual(`Grow a flex item X times as big as other flex items`,`assertText|css=.toc li a:contains('Grow ')|Grow a flex item X times as big as other flex items`);
                    element(by.cssContainingText(`.toc li a`, `Center`)).getText().then(function (_value) {
                        console.info(_value);
                        browser.executeScript(`var element = arguments[0];element.onclick = ()=>{alert('clicked')}`,element(by.css(`.cta:nth-child(5)`)).getWebElement());
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.cta:nth-child(5)`)).getWebElement());
                        element(by.css(`.cta:nth-child(5)`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.cta:nth-child(5)|`); });

                        expect(browser.switchTo().alert().getText()).toEqual(`clicked`,`assertAlert||clicked`);
                        browser.switchTo().alert().accept();
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.toc li a`)).getWebElement());
                        element(by.css(`.toc li a`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.toc li a|`); });

                        browser.sleep(500);
                        browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.sketching .email input[name="fields[email]"]`)).getWebElement());
                        element(by.css(`.sketching .email input[name="fields[email]"]`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.sketching .email input[name="fields[email]"]|`); });

                        element.all(by.css(`input`)).count().then(function (_value) {
                            data.count = _value;
                            element.all(by.css(`input`)).count().then(function (_value) {
                                expect(_value).toBeLessThan(6,`assertCssCount|css=input|<6`);
                                console.info(`${data.count}`);
                            });

                        });

                    });

                });

            });

        });

        it('should skip commands until next comment if there are more than 6 fields', function() {

            if (data.count>6) {
                return;
            }
            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.sketching`)).getWebElement());
            element(by.css(`.sketching`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.sketching|`); });

            element(by.css(`.sketching .email input[name="fields[email]"]`)).clear();

            element(by.css(`.sketching .email input[name="fields[email]"]`)).sendKeys('');
            element(by.css(`.sketching .email input[name="fields[email]"]`)).sendKeys(`test@example.com${protractor.Key.Enter}`);
        });

        it('should run commands until next comment (and after) if there are less than 6 or 6 fields', function() {

            if (!(data.count<=6)) {
                return;
            }
            browser.executeScript('arguments[0].scrollIntoView(false);', element(by.css(`.sketching`)).getWebElement());
            element(by.css(`.sketching`)).click().then(function(){},function(err){ fail(err+"\ncommand: "+`click|css=.sketching|`); });

            element(by.css(`.sketching .email input[name="fields[email]"]`)).clear();

            element(by.css(`.sketching .email input[name="fields[email]"]`)).sendKeys(`test@example.com`);
        });

        it('should work with legacy format continueIf/breakIf format', function() {

            if (!(data.count > 5)) {
                return;
            }
            console.info(`${data.count}`);
        });

    });

});
