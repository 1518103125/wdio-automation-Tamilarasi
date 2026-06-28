class AddToCart {
    constructor() {
        this.username = "//input[@placeholder='Username' and @name='user-name']";
        this.password = "//input[@placeholder='Password' and @type='password']";
        this.loginButton = "//input[@type='submit' and @id='login-button']";
        this.productOpen = "//a/div[contains(text(),'Sauce Labs Backpack')]";
        this.productName = "//div[contains(text(),'Sauce Labs Backpack')]";
        this.addToCart = "//button[contains(text(),'Add to cart')]";
        this.removeButton = "//button[contains(text(),'Remove')]";
        this.cartIcon = "//a[@data-test='shopping-cart-link']";
        this.cartProduct = "//a[@data-test='item-4-title-link']";
    }

    async enterUsername(username) {
        await $(this.username).setValue(username);
    }

    async enterPassword(password) {
        await $(this.password).setValue(password);
    }

    async clickLogin() {
        await $(this.loginButton).click();
        console.log('Login button clicked');
    }

    async clickProductOpen() {
        await $(this.productOpen).click();
        console.log('Product open clicked');
    }

    async isProductNameDisplayed() {
        return await $(this.productName).isDisplayed();
    }

    async clickAddToCart() {
        await $(this.addToCart).click();
        console.log('Add to cart button clicked');
    }

    async isRemoveButtonDisplayed() {
        return await $(this.removeButton).isDisplayed();
    }

    async clickCartIcon() {
        await $(this.cartIcon).click();
        console.log('Cart icon clicked');
    }

    async isCartProductDisplayed() {
        return await $(this.cartProduct).isDisplayed();
        console.log('Cart product displayed successfully');  }
}

module.exports = new AddToCart();