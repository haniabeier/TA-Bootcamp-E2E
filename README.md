# TA-Bootcamp-E2E

bootcamp.feature file contains 2 scenarios to test <https://www.newegg.com>:
1. "Search bar"
2. "Internet shop logo button"

To run those tests, first you need to run `yarn install` to install all dependencies.

To run tests for both scenarios please type `yarn test` or `yarn wdio` into the terminal and wait for the results.

If you want to run just one of these tests, you can use tags and run:
`yarn test --cucumberOpts.tagExpression='@search'`
or:
`yarn test --cucumberOpts.tagExpression='@logo'`

# Example test run results

```
 "spec" Reporter:
------------------------------------------------------------------
[chrome 108.0.5359.71 windows #0-0] Running: chrome (v108.0.5359.71) on windows
[chrome 108.0.5359.71 windows #0-0] Session ID: e899f4aee169b0fdf86984bc0d4b5842
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] » \features\bootcamp.feature
[chrome 108.0.5359.71 windows #0-0] Bootcamp E2E
[chrome 108.0.5359.71 windows #0-0] Testing newegg page
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] Search bar
[chrome 108.0.5359.71 windows #0-0]    ✓ Given I am on the newegg home page
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I close the promo banner if it appears
[chrome 108.0.5359.71 windows #0-0]    ✓ When As a user I type the word "Windows" in the search bar
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I click the search button
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I can see that at least one item appears as a search result
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] Internet shop logo button
[chrome 108.0.5359.71 windows #0-0]    ✓ Given I am on the newegg home page
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I close the promo banner if it appears
[chrome 108.0.5359.71 windows #0-0]    ✓ When I open the "Today's Best Deals" tab
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I click on the Internet shop logo in the header
[chrome 108.0.5359.71 windows #0-0]    ✓ Then I can see that the newegg home page opened
[chrome 108.0.5359.71 windows #0-0]
[chrome 108.0.5359.71 windows #0-0] 10 passing (35.9s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:39
```
