const { response } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../models/usuarios");




const usuariosGet = (req, res) => {
    const { q, nombre = "No Name", apikey, page = "1" } = req.query;
    res.status(200).json({
        msg:`get API - controlador`,
        q,
        nombre,
        apikey,
        page
    });
};


const usuariosPut = (req, res) => {
    const { id } = req.params.id;
    const { password, google, ...resto } = req.body;
    res.status(201).json({
        msg:`put API - controllers`,
        id
    });
};


const usuariosPost = async (req, res) => {


    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, password, rol});

    //Verificar correo

    //Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );
    //Guardar en BD
    await usuario.save();
    
    res.status(200).json({
        msg:`post API - controllers`,
        usuario
    });
};


const usuariosDelete = (req, res) => {
    res.status(200).json({
        msg:`delete API - controllers`
    });
};


const usuariosPatch = (req, res) => {
    res.status(200).json({
        msg:`patch API - controllers`
    });
};




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};
