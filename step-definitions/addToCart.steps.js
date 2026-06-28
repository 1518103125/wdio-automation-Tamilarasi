const { Given, When, Then } = require('@wdio/cucumber-framework');
const addToCartPage = require('../pages/sauceAddToCart.page');
const { default: LoginPage } = require('../pages/login.page');
const loginPage = new LoginPage();

Given('I launch the SauceDemo site in the browser', async () => {
    await loginPage.open();  
});

When('I enter username as {string} and password as {string}', async (username, password) => {
    await addToCartPage.enterUsername(username);
    await addToCartPage.enterPassword(password);
});

When('I click on the login button', async () => {
    await addToCartPage.clickLogin();
});

When('I add {string} to the cart', async (productName) => {
    await addToCartPage.clickProductOpen();
    const isDisplayed = await addToCartPage.isProductNameDisplayed();
    expect(isDisplayed).toBe(true);
    await addToCartPage.clickAddToCart();
    const isRemoved = await addToCartPage.isRemoveButtonDisplayed();
    expect(isRemoved).toBe(true);
});

When('I click on the cart icon', async () => {
    await addToCartPage.clickCartIcon();
});

When('I add Multiple products to the cart', async () => {
    await addToCartPage.clickLapBag();
    await addToCartPage.clickLabsOnesie();
    await addToCartPage.clickBoltTshirt();
});

When('I navigate to the cart page', async () => {
    await addToCartPage.clickCartButton();
});

When('check the products in the cart', async () => {
    const isDisplayed = await addToCartPage.isCartProductDisplayed();
    expect(isDisplayed).toBe(true);
});

Then('I should see the badge number on the cart icon {string}', async (expectedBadgeNumber) => {
    const badgeText = await addToCartPage.getBadgeNumberText();
    expect(badgeText).toBe(expectedBadgeNumber);
});

When('I should see {string} in the carts', async (productName) => {
    const isDisplayed = await addToCartPage.isCartProductDisplayed();
    expect(isDisplayed).toBe(true);
});

When('I should see the checkout button', async () => {
    const clicked = await addToCartPage.clickCheckoutButton();
    expect(clicked).toBe(true);
});

When('I enter the first name as {string}, last name as {string} and postal code as {string}', async (firstName, lastName, postalCode) => {
    await addToCartPage.enterFirstName(firstName);
    await addToCartPage.enterLastName(lastName);
    await addToCartPage.enterPostalCode(postalCode);
});

When('I click on the continue button', async () => {
    await addToCartPage.clickContinueButton();
});

When('I click on the finish button', async () => {
    await addToCartPage.clickFinishPurchase();
});

Then('I should see the message {string}', async (message) => {
    const isDisplayed = await addToCartPage.isThankYouPageDisplayed();
    expect(isDisplayed).toBe(true);
});