exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.sleep(1000);
    browser.driver.findElement(by.id('login_field')).sendKeys('andreluizpiressilva@gmail.com');
    browser.driver.findElement(by.id('password')).sendKeys('asd7829sjk');
    browser.driver.findElement(by.name('commit')).click();
  }
};
