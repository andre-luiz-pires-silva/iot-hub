var devicesPage = function() {

  this.openPage = function() {
    browser.get('http://localhost:3000/#/devices');
  };

  this.getLoggedUser = function() {
    return element(by.id('usuario-logado')).getText();
  };

}
module.exports = devicesPage;
