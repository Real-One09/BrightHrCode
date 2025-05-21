const { When, Then, Given, } = require('@cucumber/cucumber')
const { POOManager } = require('../../pageobjects/POOManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const { EmployePage } = require('../../pageobjects/EmployePage');
const { LoginPage } = require('../../pageobjects/LoginPage');



Given('I login to BrightHR application with valid data {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
    const loginPage = this.pooManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

});


When('I fill in the form with valid data {string} {string} {string} {string} {string} {string}', { timeout: 100 * 1000 }, async function (firstname, lastname, EmailAddress, Mobile, startDate, JobTitle) {

    this.employePage = this.pooManager.getEmployePage();
    await this.employePage.navigateToemployeeAddPanal();
    await this.employePage.ValidDetail(firstname, lastname, EmailAddress, Mobile, startDate, JobTitle,);
    await this.employePage.saveaddNewEmployeeButton();
    await this.employePage.verifyEmployeIsSubmitted();
});


Then('Verify that that both employees are displayed with the submitted details {string} {string}', async function (firstname, lastname) {
    this.employePage = this.pooManager.getEmployePage();
    await this.employePage.isEmployeeDisplayed(firstname, lastname);

});