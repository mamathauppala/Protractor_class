const driver=require('protractor')
describe('Webtable learning',()=>{

    it('webtable leaf ground',async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://www.leafground.com/pages/table.html')
        driver.browser.manage().window().maximize()
        driver.browser.manage().deleteAllCookies()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        let table=driver.element(driver.by.id('table_id'))
        let rows=table.all(driver.by.tagName('tr'))
        let rowscount=await rows.count()
        console.log(rowscount)        
        
        for(let i=1;i<rowscount;i++){
            let cols=rows.get(i)
            let td=cols.all(driver.by.tagName('td'))
            let value=await td.get(0).getText()
            console.log(value)
            if(value==='Learn to interact with Elements')
            td.get(2).click()


            
        }

    })
})