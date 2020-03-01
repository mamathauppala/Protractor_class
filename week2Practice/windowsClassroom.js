const driver=require('protractor')
describe('windows handles',()=>{

    it('window test handles',async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.manage().deleteAllCookies()
        let prm = driver.browser.getWindowHandle()
        console.log(await browser.getTitle())
        let frame=driver.element(driver.by.name('iframeResult'))
        driver.browser.switchTo().frame(frame.getWebElement())
        driver.element(driver.by.buttonText('Try it')).click()
        let windows=await driver.browser.getAllWindowHandles()
        console.log(windows)
        driver.browser.switchTo().window(windows[1])
        console.log(await browser.getTitle())



    })
})