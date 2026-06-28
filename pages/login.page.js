class LoginPage {
    get url() {
        return 'https://www.saucedemo.com';
    }

    async open() {
        await browser.url(this.url);
        console.log('Sauce Page Launched');
    }
}

module.exports = { default: LoginPage };