
import { browser, element } from "protractor";
import { Given, Then, When } from "cucumber";

        Given('Launch Leaftaps URL', async function () {
            browser.waitForAngularEnabled (false);
           await browser.get('http://leaftaps.com/opentaps/control/main');
         });

         When('Enter Username {string}',async function (string) {
            await element(by.id('username')).sendKeys(string)
         });

         When('Enetr Password {string}', async function (string) {
            await element(by.id('password')).sendKeys(string)
         });

         Then('Click Login Button',async function () {
            await  element(by.className('decorativeSubmit')).click();
         });

         Then('Click Logout',async function () {
            await  element(by.css('[value="Logout"]')).click();
         })

         Then('Print UserName',async function () {
            console.log(await element(by.tagName('h2')).getText());
         })






	
