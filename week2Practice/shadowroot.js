const driver=require('protractor')
describe('shadow suit',()=>{

    it('test',async()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://bugs.chromium.org/p/chromium/issues/list')
        driver.browser.manage().window().maximize()
        driver.browser.manage().deleteAllCookies()
        driver.browser.manage().timeouts().implicitlyWait(30000)
       // driver.element(driver.by.id('searchq')).sendKeys('1039101')

    })
})