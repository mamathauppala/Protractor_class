const driver=require('protractor')
describe('Web driver concept',()=>{
    it('web table',async()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.manage().deleteAllCookies()
        //driver.element(driver.by.id('chkSelectDateOnly')).click()
        driver.$('#chkSelectDateOnly').click()
        let table=driver.element(by.css('#divTrainsList > table.DataTable.TrainList.TrainListHeader'))
        let rows=table.all(driver.by.tagName('tr'))
        let rowcnt=rows.count()
        console.log(rows)

    })

})