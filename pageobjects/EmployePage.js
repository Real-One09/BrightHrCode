const { test, expect } = require('@playwright/test');
const { strict } = require('assert');


class EmployePage {

    constructor(page) {

        this.page = page;
        this.employeeTab = page.locator('text=Employee');
        this.addEmployeeButton = page.locator('text=Add Employee');
        this.firstNameInput = page.locator('input[name="firstName"]');
        this.lastNameInput = page.locator('input[name="lastName"]');
        this.emailInput = page.locator('input[name="email"]');
        this.phoneNumberInput = page.locator('#phoneNumber');
        this.startDateInput = page.locator('#startDate');
        this.jobTitleSelect = page.locator('#jobTitle');
        this.sendEmailButton = page.getByLabel("registrationEmail");
        this.userAddEmployeeButton = page.locator('//button[text()="Add employee"]')
        this.saveNewEmployeeButton = page.locator("button[type='submit']");
        this.userEmployeesTab = page.locator("//div[@title='Employees']");
        this.datePickerElement = page.getByLabel('Select date');
        this.userDaysInMonth = page.locator('//div[contains(@class,"DayPicker-Day")]');
        this.listOfEmployee = page.locator('.text-base');
        this.employeeSuccessMessage = page.locator('.text-lg');

    }




    async addEmployeeButton() {

        await this.userAddEmployeeButton.click();

    }


    async ValidDetail(firstname, lastname, EmailAddress, Mobile, startDate, JobTitle) {

        await this.addEmployeeButton.click();
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.emailInput.fill(EmailAddress);
        await this.phoneNumberInput.fill(Mobile);
        await this.calenderValidations(startDate);
        await this.jobTitleSelect.type(JobTitle);

    }

    async saveaddNewEmployeeButton() {

       await this.saveNewEmployeeButton.click();

    }

    async verifyEmployeIsSubmitted() {
        for (let successMessage of await this.employeeSuccessMessage.all()) {
            if (await successMessage.innerText('h1', { strict: true }) === "Success! New employee added") {
                expect(successMessage).toBeTruthy();
                break;
            }
        }
    }


    async calenderValidations(startDate) {


        await this.page.getByTestId('input-selector').click();
        for (const day of await this.userDaysInMonth.all()) {
            if (await day.getAttribute('aria-label') === startDate) {
                await day.click();
                break;
            }
        }
    }


    async navigateToemployeeAddPanal() {

        await this.userEmployeesTab.click();

    }



    async isEmployeeDisplayed(firstname, lastname) {

        for (let data of await this.listOfEmployee.all()) {
            if (await data.innerText() === (firstname + lastname)) {
                await data.getByText(firstname + lastname).isVisible();
                expect(bool).toBeTruthy();
            }
        }

    }
}
module.exports = { EmployePage };