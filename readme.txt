// run karma tests
karma start config/karma.config.js

// e2e tests
webdriver-manager start (http://localhost:4444/wd/hub)
protractor config/protractor.js
