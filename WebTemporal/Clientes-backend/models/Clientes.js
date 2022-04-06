const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        //unique: true,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;