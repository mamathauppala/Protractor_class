class PosseHomePage {
    verifyTitle(title) {
        expect(browser.getTitle()).toBe(title)
        return this;
    }
    

}
exports.PosseHomePage = PosseHomePage