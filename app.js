const express = require('express')
const app = express();
const db = require('./db')
const router = require('./routes/usersRoutes');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json(router))
app.use(express.static('public'))
app.use(router);

app.get('/', function (req, res) {
  res.send('hola mundo ')
})

app.listen(3000, () => {
  console.log('!Server en marcha en http://localhost:3000')
})