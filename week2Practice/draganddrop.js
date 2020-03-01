
 import { browser ,element,by} from "protractor";

function draganddrop(){
    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/droppable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)
    let drag=element(by.id('draggable'))
    let drop=element(by.id('droppable'))
    browser.actions().dragAndDrop(drag,drop).perform()
    browser.sleep(5000)
    
}

function droppable(){

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/draggable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)
    let drag=element(by.id('draggable'))
    /*
    let elelocation=await drop.getLocation()
    let xValue=await elelocation.x
    let yValue=await elelocation.y
    */
    browser.actions().dragAndDrop(drag, {x:100, y:100}).perform()
}

async function sortable(){

    browser.waitForAngularEnabled(false)
    browser.get('https://jqueryui.com/sortable/')
    browser.manage().window().maximize()
    browser.manage().timeouts().implicitlyWait(30000)
    browser.manage().deleteAllCookies()
    browser.switchTo().frame(0)
    let item1=element(by.xpath("//ul[@class='ui-sortable']/li[1]"))
    let item4=element(by.xpath("//ul[@class='ui-sortable']/li[4]"))
    let location =await item4.getLocation()
    let xValue=await location.x
    let yValue=await location.y

    browser.actions().dragAndDrop(item1,{x:xValue,y:yValue}).perform()

}

describe('actions suit',()=>{

    xit('drag and drop',()=>{
        draganddrop()      
    
    })
    xit('drop',()=>{
        droppable();
        
    })
    it('sort',async()=>{
        sortable()
        browser.sleep(4000)
    })
})