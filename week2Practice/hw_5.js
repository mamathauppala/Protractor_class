import { browser, ExpectedConditions, By, $$ } from "protractor"

let ec = browser.ExpectedConditions

describe('Posse Homework TC',()=>{

    it('Wishlist',async()=>{

        login()

        browser.wait(ec.titleIs('Posse'),50000)

        expect(await browser.getTitle()).toBe('Posse')

        let firstRestaurantEl = browser.$$('.placeNameLink').get(0)

        let wishListEl = browser.$$('.userActionButton.wishlist:first-of-type').get(0)

        expect(firstRestaurantEl.isPresent()).toBe(true)

        let restName = await firstRestaurantEl.getText()

        console.log(`First Restaurant Name: ${restName}`)

        browser.actions().mouseMove(firstRestaurantEl).perform()

        browser.sleep(5000)

        expect(wishListEl.isPresent()).toBe(true)

        wishListEl.click()

        browser.sleep(5000)

        browser.element(By.partialLinkText('PRANAVKARTHIK KAMALASEKARAN')).click()
        
        browser.element(By.linkText('Wishlist')).click()

        browser.wait(ec.titleContains('Pranavkarthik'),50000)

        let restNameInWlEl = browser.$('span.storeName')
        
        expect(restNameInWlEl.isPresent()).toBe(true)

        let restNameInWl =await restNameInWlEl.getText()
        
        expect(restNameInWl).toBe(restName)

        let noOfHearts = await browser.$('span.icon.heart').getText()

        console.log(`No Of Hearts: ${noOfHearts}`)

        let color = await browser.$('.userActionButton.wishlist.hasWished').getCssValue('color')

        expect(color).toBe('rgba(71, 174, 193, 1)')

    })

    xit('WishlistTC2',async()=>{

        login()

        browser.wait(ec.titleIs('Posse'),50000)

        expect(await browser.getTitle()).toBe('Posse')

        let RestaurantEl = browser.$$('.placeNameLink')

        let resMap = RestaurantEl.map(async (ele,i)=>{

            return{

                index: i,

                restName: await ele.getText()

            }


        });

        console.log(`The Restaurant Names: `);

        (await resMap).forEach(ele => {

            console.log("\n"+ele.restName)
            
        });

    })

})

async function login(){

    browser.manage().window().maximize()

    browser.get('https://posse.com/')

    browser.manage().timeouts().implicitlyWait(50000)

    browser.element(By.linkText('LOG IN')).click()

    browser.wait(ec.titleIs('Posse - Sign in'),50000)

    expect(await browser.getTitle()).toBe('Posse - Sign in')

    browser.element(By.model('email')).sendKeys('pranavkarthik2005@gmail.com')
    
    browser.element(By.model('password')).sendKeys('Kamal5pari!')   

    browser.element(By.model('staySignedIn')).click()
        
    browser.element(By.buttonText('Sign in')).click()

}