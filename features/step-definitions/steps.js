const { Given, When, Then } = require('@wdio/cucumber-framework');

const homepageUrl = `https://www.newegg.com/`;

Given("I am on the newegg home page", async() => {
  await browser.url(homepageUrl);
});

Then("I close the promo banner if it appears", async() => {
  try {
    // Is it better to use the impliit waiting period or try to explicitly wait less time?
    const closeButton = await $('div.modal-content > button.close');
    await expect(closeButton).toExist();
    await (closeButton).click();
  } catch {
    console.log("Promo banner did not appear.");
  }
});

When('As a user I type the word {string} in the search bar', async(searchText) => {
  const searchBarSelector = 'div.header2021-search-box > input';
  const searchBar = await $(searchBarSelector);
  await searchBar.setValue(searchText);
});

Then('I click the search button', async() => {
  const searchButtonSelector = 'div.header2021-search-button > button';
  await $(searchButtonSelector).click();
});

Then("I can see that at least one item appears as a search result", async() => {
  const item = await $('div.item-cells-wrap > div.item-cell');
  await expect(item).toExist();
});

When('I open the {string} tab', async(tabTitle) => {
  const tabSelector = `a[title="${tabTitle}"].header2021-portal > span`;
  await $(tabSelector).click();
});

Then("I click on the Internet shop logo in the header", async() => {
  const logoSelector = 'a.header2021-logo-img > img';
  await $(logoSelector).click();
});

Then("I can see that the newegg home page opened", async() => {
  await expect(browser).toHaveUrl(homepageUrl);
});