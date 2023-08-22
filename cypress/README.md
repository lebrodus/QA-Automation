 Cypress project
 npm init -y //initilise a new a npm package with default values without asking any question
 npm -i init  //To create your package.json
 npm install cypress --save-dev //to install cypress and save the version in package.json

what is cypress test runner
* Run node_modules/.bin/cypress open
   * cypress.config.js will be added to your project
* Create your page objects  [https://youtu.be/uJApT71B0ZQ]
   * POM - elements in each webpage are stored in a class
*   You can parameterize your tests using fixtures, CSV files, JSON files, or JavaScript objects1.
*   you add your env:{}
* in cypress your file.js is called a spec.
* don't forget to specify the specpattern in cypress.cofig.js file
* describe - a testsuite
* it - testcases inside testsuites. env: {
    url: 'https://www.rahulshettyacademy.com',
    urlbook: 'https://automationintesting.online/'
  },
* cy.visit() : to visit a url
* ./node_modules/.bin/cypress run --spec "cypress/integration/examples/test1.js"   // runs a single test(spec) in headless mode
* ./node_modules/.bin/cypress run --spec "cypress/integration/examples/test1.js" --env="the url"   // add env url
* ./node_modules/.bin/cypress run --headed --spec "cypress/integration/examples/test1.js" //runs a single test(spec) in headed mode
* ./node_modules/.bin/cypress run --browser firefox  --spec "cypress/integration/examples/test1.js" //run using firefox
* you put all your test data in fixtures.
* reusable methods are written in support folder

# Locators

* Cypress only support css selectors
* you can use any attribute in the element like so - tagname[attr=value] e.g input[type='submit']

* Cypress is easy for debugging
  * you can easily see what happened with screenshots and error messages.

* Parent child chaining 
* cy.get('.products').find('.product').eq(2).                      //1. We are in the parent .2 we are in the children
* cypress automatically handle popups and alerts
* handling child tabs in cypress
* to work on a child window. 
  - You can remove the target attribute
  - You can directly the url of the child page and visit it .
