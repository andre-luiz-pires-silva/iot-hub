var DevicesPage = new require('./pages/devicesPage');

describe('Página principal', function() {

  var page = new DevicesPage();

  beforeEach(function() {
    page.openPage();
  });

  it('Deve estar logado', function() {
    page.getLoggedUser().then(function(texto) {
      expect(texto.trim().length).toBeGreaterThan(0);
    });
  });

});
