const driver=require('protractor')
describe('Learn alert& frames', ()=>{

    it('frame',async()=>{
        driver.browser.get('https://docs.angularjs.org/api/ng/service/$window')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        let frame=driver.element(by.name('example-window-service'))
        driver.browser.switchTo().frame(frame.getWebElement())
        let name='mamatha'
        let inputbox=driver.element(driver.by.model('greeting'))
        inputbox.clear()
        inputbox.sendKeys(name)
        driver.element(driver.by.buttonText('ALERT')).click();
        let alert=driver.browser.switchTo().alert();
        console.log(await alert.getText())
        alert.accept()
    })
})