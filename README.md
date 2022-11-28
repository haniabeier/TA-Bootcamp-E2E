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