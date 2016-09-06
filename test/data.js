var MongoClient = require('mongodb').MongoClient;

var devices = [
  {ip: "1.1.1.1", name: 'Device1', description: 'Description1'},
  {ip: "2.2.2.2", name: 'Device2', description: 'Description2'},
  {ip: "3.3.3.3", name: 'Device3', description: 'Description3'},
];

MongoClient.connect('mongodb://127.0.0.1:27017/iot_test',
function(erro, db) {
  if(erro) throw err;
  db.dropDatabase(function(err) {
    if(err) return console.log(err);
    console.log('Banco apagado com sucesso')
    db.collection('devices').insert(devices,
      function(err, inserted) {
        if(err) return console.log(err);
        console.log('Banco populado com sucesso')
        process.exit(0);
      });
    });
  }
);
