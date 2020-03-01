const home = require('./possehome')
class PosseLogin {
    enterusername(user){
        browser
        .element(by.model('email'))
        .sendKeys(user)
        return this
    }
    enterpassword(password){
        browser
        .element(by.model('password'))
        .sendKeys(password)
        return this
    }
    clickonsignin(){
        browser
        .element(by.buttonText('Sign in'))
        .click()
        return new home.PosseHomePage()

    }

}

exports.posseloginpage=PosseLogin