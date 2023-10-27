const db = require('../models');
const Cliente = db.clientes;
const Op = db.Sequelize.Op;

// Crear y guardar cliente
exports.create = (req, res) => {
    if (!req.body.Nombre) {
        res.status(400).send({
            message: 'El contenido del nombre no puede estar vacío'
        });
        return;
    }

    const cliente = {
        Nombre: req.body.Nombre,
        Apellidos: req.body.Apellidos,
        Razon_social: req.body.Razon_social,
        Direccion: req.body.Direccion,
        Nit: req.body.Nit,
        // Otros campos que desees añadir
    };

    Cliente.create(cliente)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error al crear el cliente en la base de datos'
            });
        });
};

// Consultar los clientes por nombre o todos
exports.findAll = (req, res) => {
    const nombre = req.query.Nombre;
    var condition = nombre ? { Nombre: { [Op.iLike]: `%${nombre}%` } } : null;

    Cliente.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Error al obtener los clientes'
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encuentra el cliente con ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener el cliente con ID=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Cliente.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Cliente actualizado correctamente'
                });
            } else {
                res.send({
                    message: `No se puede actualizar el cliente con ID: ${id}, o no existe`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar el cliente con ID=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Cliente.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Cliente eliminado correctamente'
                });
            } else {
                res.send({
                    message: `El cliente con ID: ${id} no existe`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el cliente con ID=" + id
            });
        });
};
