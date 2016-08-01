// app/routes/device.js
function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status('401').json('Não autorizado');
  }
}

module.exports = function(app) {

  var controller = app.controllers.device;

  app.route('/devices')
    .get(verificaAutenticacao, controller.getDevices)
    .post(verificaAutenticacao, controller.saveDevice);

  app.route('/devices/:id')
    .get(verificaAutenticacao, controller.getDevice)
    .delete(verificaAutenticacao, controller.deleteDevice);

};
