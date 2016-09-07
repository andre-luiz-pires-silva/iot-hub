# IoT Hub

[![Build Status](https://travis-ci.org/andre-luiz-pires-silva/iot-hub.svg?branch=master)](https://travis-ci.org/andre-luiz-pires-silva/iot-hub)

## Run server

To start server, run the following commands
```
cd iot
sh scripts/server.sh
```
The application will be available at http://localhost:3000

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
