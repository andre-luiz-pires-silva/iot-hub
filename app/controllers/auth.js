module.exports = function() {

  var controller = {};

  controller.checkAuth = function verificaAutenticacao(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.status('401').json('Não autorizado');
    }
  }
  

  return controller;
};
