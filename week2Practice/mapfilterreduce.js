import { browser, element, by } from "protractor";

async function mapconcept() {
    browser.waitForAngularEnabled(false)
    browser.get('https://erail.in/trains-between-stations/new-delhi-NDLS/mumbai-central-BCT')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    element(by.id('chkSelectDateOnly')).click()
    //$('#chkSelectDateOnly').click()
    let table = element(by.css('#divTrainsList > table.DataTable.TrainList.TrainListHeader'))
    let rows = table.all(by.tagName('tr'))
    let myMap = rows.map(async (ele, i) => {
        let td = ele.$$('td')
        return {
            index: i,
            trainnumber: await td.get(0).getText(),
            trainname: await td.get(1).getText()
        }
    });
    let a = (await myMap).filter((ele, index) => {
        return ele.trainnumber.startsWith('2')
    })
    a.forEach(ele => {
        console.log(ele)
    })

}

function jquerytest(){

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)

    let rows=element(by.xpath('//ul[@id="sortable"]'))
    rows.$$('li').map(async(ele, i)=>{
        console.log(await ele.getText())

    })
    // let myMap=rows.map((ele,i)=>{
    //     let values=ele.$$('li')
    //     console.log(values)
                
    // });

}

describe('Map concept', () => {

    xit('train map', async () => {
        await mapconcept()
    })

    it('jquery map',  () => {
        jquerytest()
    })
})