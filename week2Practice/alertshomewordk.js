const driver=require('protractor')
describe('Test suite for alert concept',()=>{

    it('Alert',async()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://www.leafground.com/pages/Alert.html')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)

        driver.element(driver.by.buttonText('Alert Box')).click();
        let alert1=await driver.browser.switchTo().alert()
        console.log(await alert1.getText())
         alert1.accept()
        
        driver.element(driver.by.buttonText('Confirm Box'))
                .click()
         let alert2=await driver.browser.switchTo().alert()
         console.log(await alert2.getText())
         alert2.accept()  
         
         driver.element(driver.by.buttonText('Prompt Box')).click()

         let alert3=await driver.browser.switchTo().alert()
         console.log(await alert3.getText())
         alert3.sendKeys('Mamatha')
         alert3.accept()

         driver.element(driver.by.buttonText('Line Breaks?')).click()

         let alert4=await driver.browser.switchTo().alert()
         console.log(await alert4.getText())
         alert4.accept()

         driver.element(driver.by.buttonText('Sweet Alert')).click()
         driver.element(driver.by.buttonText('OK')).click()


    })
})