var DevicePage = new require('./pages/devicePage');

describe('Cadastro de Device', function() {

  var page = new DevicePage();

  beforeEach(function() {
    page.openPage();
  });

  it('Deve cadastrar um Device', function() {
    var randomV = Math.floor((Math.random() * 10000000) + 1);
    var deviceName = 'name ' + randomV;
    var deviceIp = 'ip' + randomV;
    var deviceDescription = 'description ' + randomV;
    page.sendName(deviceName);
    page.sendIp(deviceIp);
    page.sendDescription(deviceDescription);
    page.save();
    // page.checkSucess();
  });

});
