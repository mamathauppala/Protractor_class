const posloginPage = require('../pages/posselogin')
const posslogin = new posloginPage.posseloginpage()
import { browser, by, element } from "protractor";

describe('TC002', () => { // suite
    beforeAll(() => { // b4 suite

        browser.get("http://posse.com/")
        browser.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(30000)
        browser.manage().deleteAllCookies()
        browser.element(by.linkText('LOG IN')).click()
        let ec = browser.ExpectedConditions;
        let element1 = element(by.model('email'))
        browser.wait(ec.presenceOf(element1), 5000)
    })

    it('Login page Test', () => { // @test
        posslogin.enterusername('uppalamamatha@gmail.com')
             .enterpassword('Mammu@4322')
            .clickonsignin()
            .verifyTitle('Posse')                

    })
})