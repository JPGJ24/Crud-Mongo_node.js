const mongoose = require('mongoose');

const url = `mongodb+srv://Strider:heEnBCdrwsfRy8ga@primer-proyecto.nsjv5mz.mongodb.net/test`

mongoose.connect(url);

const db = mongoose.connection
db.on('error', console.error.bind(console, 'ERROR AL CONECTAR MONGO'));
db.once('open', function callback(){
    console.log('CONECTADO A MONGO......')
});

module.exports = db
