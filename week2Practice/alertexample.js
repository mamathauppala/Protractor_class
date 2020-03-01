const driver=require('protractor')
describe('alert class word',()=>{

    it('alert',async ()=>{
        //driver.browser.ignoreSynchronization=true
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.manage().deleteAllCookies();
        let title=await driver.browser.getTitle()
        console.log(title)
        let frame=driver.element(driver.by.name('iframeResult'))
        driver.browser.switchTo().frame(frame.getWebElement())
        driver.element(driver.by.buttonText('Try it')).click();
        let alert=driver.browser.switchTo().alert()
        alert.sendKeys('Mamatha')
         alert.accept()
         let text=await driver.element(driver.by.id('demo')).getText()
         console.log(text)


    })
})