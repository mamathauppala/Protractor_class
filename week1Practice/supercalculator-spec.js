const driver=require('protractor')
describe('super calculator', () =>{
    it('get the title', async() => {
        driver.browser.get('http://juliemr.github.io/protractor-demo/')
        let title=await driver.browser.getTitle()
        console.log(title)   
        driver.element(driver.by.model('first'))
                .sendKeys('5')
    //   let value = await driver.element(driver.by.model('first')).getAttribute('value')          
    //   console.log(value)
        console.log(await driver.element(driver.by.model('first')).getAttribute('value'))
        driver.element(driver.by.cssContainingText('option',"*")).click()        
        driver.element(driver.by.model('second'))
                .sendKeys('6')
        console.log(await driver.element(driver.by.model('second')).getAttribute('value'))        
        driver.element(driver.by.buttonText('Go!'))
                .click()
        console.log(await driver.element(driver.by.binding('latest')).getText())
        expect(driver.element(driver.by.binding('latest')).getText()).toBe('30')

    })


})