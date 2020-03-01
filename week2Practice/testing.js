const driver=require('protractor')
import { browser, ExpectedConditions } from "protractor"

describe('Testing clarendo TIM login',()=>{
    it('login',async ()=>{
        driver.browser.get('https://timwebapp-clarendo-staging.azurewebsites.net/#/login')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.$$('button[aria-label="Language"]').click()
        driver.browser.$$('span[translate="TOOLBAR.ENGLISH"]').click()
        driver.browser.element(driver.by.model('vm.form.userName')).sendKeys("mamathastaging")
        driver.browser.element(driver.by.model('vm.form.password')).sendKeys("Mammu@4322")
        await driver.$$('button[ng-click="vm.Login()"]').click()
        let title=driver.browser.getTitle()
        console.log(title)
        let status=(title==='instrumentbräda'||title==='Dashboard')
        expect(status).toBe(true)
       

    })

})