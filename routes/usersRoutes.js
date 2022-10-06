const express = require('express');
const router = express.Router();

const Userscontrol = require('../controllers/usersController');

//MOSTRAR TODOS LOS USER (GET)
router.get('/', Userscontrol.mostrar)

//CREAR USERS (POST)
router.post('/crear', Userscontrol.crear)

//CREAR USERS (POST)
router.post('/editar', Userscontrol.editar)

//CREAR USERS (DELET)
router.get('/borrar/:id', Userscontrol.borrar)

module.exports = router;