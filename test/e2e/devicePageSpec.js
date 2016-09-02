describe('Cadastro de Device', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000/#/device');
  });

  it('Deve cadastrar um Device', function() {
    var randomV = Math.floor((Math.random() * 10000000) + 1);
    var deviceName = 'name ' + randomV;
    var deviceIp = 'ip' + randomV;
    var deviceDescription = 'description ' + randomV;
    element(by.model('device.name')).sendKeys(deviceName);
    element(by.model('device.ip')).sendKeys(deviceIp);
    element(by.model('device.description')).sendKeys(deviceDescription);
    element(by.id('save_button')).click();

    browser.wait(function() {
      // Neste ponto, precisaria pensar numa forma de verificar o Toast.
        return element(by.id('save_button')).isDisplayed();
    }, 10000);
  });

});
