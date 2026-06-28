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

Then('I should see {string} in the carts', async (productName) => {
    const isDisplayed = await addToCartPage.isCartProductDisplayed();
    expect(isDisplayed).toBe(true);
});