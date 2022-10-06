const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name:  String,
  edad: String
},{versionKey:false});

// Crear el modelo
const User = mongoose.model("User", userSchema,"userasss");

module.exports = User