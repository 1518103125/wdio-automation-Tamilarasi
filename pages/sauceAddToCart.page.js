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
        this.lapBag = "//button[@id='add-to-cart-sauce-labs-backpack']";
        this.labsOnesie = "//button[@id='add-to-cart-sauce-labs-onesie']";
        this.boltTshirt = "//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']";
        this.cartButton = "//a[@class='shopping_cart_link']";
        this.badgeNumber = "//a[@class='shopping_cart_link']/span[@class='shopping_cart_badge']";
        this.checkOutButton = "//button[contains(text(), 'Checkout')]";
        this.firstName = "//input[@name='firstName']";
        this.lastName = "//input[@name='lastName']";
        this.pinCode = "//input[@name='postalCode']";
        this.continueButton = "//input[@name='continue']";
        this.textInPricePage = "//div[contains(text(), 'Price Total')]";
        this.finishPurchase = "//button[contains(text(), 'Finish')]";
        this.thankYouPage = "//h2[contains(text(), 'Thank you for your order!')]";
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
    }

    async clickLapBag() {
        await $(this.lapBag).waitForClickable({ timeout: 5000 });
        await $(this.lapBag).click();
        console.log('Backpack added to cart');
    }

    async clickLabsOnesie() {
        await $(this.labsOnesie).waitForClickable({ timeout: 5000 });
        await $(this.labsOnesie).click();
        console.log('Onesie added to cart');
    }

    async clickBoltTshirt() {
        await $(this.boltTshirt).waitForClickable({ timeout: 5000 });
        await $(this.boltTshirt).click();
        console.log('Bolt T-Shirt added to cart');
    }

    async clickCartButton() {
        await $(this.cartButton).waitForClickable({ timeout: 5000 });
        await $(this.cartButton).click();
        console.log('Cart button clicked');
        await $(this.cartProduct).waitForDisplayed({ timeout: 5000 });
    }

    async getBadgeNumberText() {
        await $(this.badgeNumber).waitForDisplayed({ timeout: 5000 });
        return await $(this.badgeNumber).getText();
    }

    async clickCheckoutButton() {
        await $(this.checkOutButton).waitForClickable({ timeout: 5000 });
        await $(this.checkOutButton).click();
        console.log('Checkout button clicked');
        return true;
    }

    async enterFirstName(firstName) {
        await $(this.firstName).setValue(firstName);
    }

    async enterLastName(lastName) {
        await $(this.lastName).setValue(lastName);
    }

    async enterPostalCode(pinCode) {
        await $(this.pinCode).setValue(pinCode);
    }

    async clickContinueButton() {
        await $(this.continueButton).click();
        console.log('Continue button clicked');
    }

    async isPriceTotalDisplayed() {
        return await $(this.textInPricePage).isDisplayed();
    }

    async clickFinishPurchase() {
        await $(this.finishPurchase).click();
        console.log('Finish purchase clicked');
    }

    async isThankYouPageDisplayed() {
        await $(this.thankYouPage).waitForDisplayed({ timeout: 5000 });
        return await $(this.thankYouPage).isDisplayed();
    }
}

module.exports = new AddToCart();