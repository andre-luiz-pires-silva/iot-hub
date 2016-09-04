# IoT Hub

[![Build Status](https://travis-ci.org/andre-luiz-pires-silva/iot-hub.svg?branch=master)](https://travis-ci.org/andre-luiz-pires-silva/iot-hub)

## Karma tests

To run with default browser
```
karma start config/karma.config.js
```

To run with PhantomJS2 (without visual interface)
```
karma start config/karma.config.js --single-run --browsers PhantomJS2
```

## e2e tests

To start server
```
webdriver-manager start (http://localhost:4444/wd/hub)
```

To run tests
```
protractor config/protractor.js
```
