const driver=require('protractor')
describe('buttons automation leaf ground',()=>{

    it('button',async ()=>{
        driver.browser.waitForAngularEnabled(false)
        driver.browser.get('http://www.leafground.com/pages/Button.html')
        driver.browser.manage().window().maximize()
        driver.browser.manage().timeouts().implicitlyWait(30000)
        driver.browser.manage().deleteAllCookies()
        let poselement=driver.element(driver.by.buttonText('Get Position'))
        console.log(await poselement.getText())
        let loc= await poselement.getLocation()
        console.log(loc.x)
        console.log(loc.y)       

        let colorElement=driver.$('#color')
        console.log(await colorElement.getText())
        let cssvalue =await colorElement.getCssValue('color')
        console.log(cssvalue)

        let sizeele=driver.$('#size')
        console.log(await (await sizeele.getSize()).height)
        console.log(await (await sizeele.getSize()).width)
        

        

    })
})