const { Given, When, Then, AfterAll } = require('@cucumber/cucumber')
const { Builder, By, Key, until, WebElement } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();


Given('I am on the Orange HRM page', { timeout: 120 * 1000 }, async function () {
  await driver.manage().deleteAllCookies();
  await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I input username with {string}', async function (usernameTerm) {
  await driver.wait(until.elementLocated(By.name('username')))
  await driver.findElement(By.name('username')).sendKeys(usernameTerm);
});

When('I input password with {string}', async function (passwordTerm) {
  await driver.findElement(By.name('password')).sendKeys(passwordTerm);
});

When('I click button Login', async function () {
  await driver.findElement(By.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')).click();
});

Then('The page should contain {string}', async function (resultTerm) {
  const d = new Date();
  if (resultTerm === 'Dashboard') {
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[7]/a/span')))
    const title = await driver.findElement(By.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[7]/a/span')).getText();
    expect(title).to.equal(resultTerm)
  } else {
    await driver.wait(until.elementLocated(By.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p')))
    const title = await driver.findElement(By.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p')).getText();
    expect(title).to.equal(resultTerm)
  }
});

AfterAll(async function () {
  await driver.quit();
});