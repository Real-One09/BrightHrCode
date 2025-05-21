
const { Before, After, AfterStep, BeforeStep, Status } = require('@cucumber/cucumber')
const { POOManager } = require('../../pageobjects/POOManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Before(async function () {
    
    const browser = await playwright.chromium.launch({
        headless: true
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pooManager = new POOManager(this.page);

});


AfterStep(async function ({ result }) {
    
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: './screenshots' });
    }
});



After(async function () {
    console.log("All test case done");
});













