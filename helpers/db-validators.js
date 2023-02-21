const Role = require("../models/role");
const Usuario = require("../models/usuarios");


const esRoleValido = async (rol = "") => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol){
        throw new Error(`El ${ rol } no esta registrado en la base de datos`)
    }
}

const emailExiste = async (correo = "") => {
    console.log(correo);
    const existeEmail = await Usuario.findOne({ correo }); //({ correo: correo })
    if (existeEmail){
        throw new Error(`El mail ${correo} ya existe`)
    }
};


module.exports = {
    esRoleValido,
    emailExiste
};
