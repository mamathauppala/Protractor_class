const driver=require('protractor')
describe('Posse', () =>{
    it('login', async() => {
        driver.browser.get('http://posse.com/')
        let title=await driver.browser.getTitle()
        console.log(title)
        driver.element(driver.by.linkText('LOG IN')).click();
        driver.element()

    });

});