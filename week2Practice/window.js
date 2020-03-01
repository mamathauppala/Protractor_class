const driver=require('protractor')
describe('windows suite',()=>{

    it('window test case',async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://leafground.com/pages/Window.html')
        driver.browser.manage().window().maximize()
        driver.browser.manage().deleteAllCookies()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        let primarywindow=driver.browser.getWindowHandle()
        let title =await driver.browser.getTitle()
        console.log(title)
        driver.element(driver.by.buttonText('Open Home Page')).click()
        let windows=await driver.browser.getAllWindowHandles()
        console.log(windows)
        driver.browser.switchTo().window(windows[1])
        let title1 =await driver.browser.getTitle()
        console.log(title1)
        driver.browser.switchTo().window(primarywindow)
        driver.browser.close()
        let windows1=await driver.browser.getAllWindowHandles()
        console.log(windows1.length)

    })
})