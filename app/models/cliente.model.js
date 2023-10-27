module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('cliente', {
        Nombre: {
            type: Sequelize.STRING
        },
        Apellidos: {
            type: Sequelize.STRING
        },
        Razon_social: {
            type: Sequelize.STRING
        },
        Direccion: {
            type: Sequelize.STRING
        },
        Nit: {
            type: Sequelize.STRING
        },
        // Otros campos que desees añadir
    });

    return Cliente;
};
