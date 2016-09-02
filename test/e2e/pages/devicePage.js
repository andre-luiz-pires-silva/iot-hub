var devicePage = function() {

  this.openPage = function() {
    browser.get('http://localhost:3000/#/device');
  };

  this.sendName = function(name) {
    element(by.model('device.name')).sendKeys(name);
  };

  this.sendIp = function(ip) {
    element(by.model('device.ip')).sendKeys(ip);
  };

  this.sendDescription = function(description) {
    element(by.model('device.description')).sendKeys(description);
  };

  this.save = function() {
    element(by.id('save_button')).click();
  };

  this.checkSucess = function() {
    browser.wait(function() {
      // Neste ponto, precisaria pensar numa forma de verificar o Toast.
        return element(by.id('save_button')).isDisplayed();
    }, 10000);
  };
}
module.exports = devicePage;
