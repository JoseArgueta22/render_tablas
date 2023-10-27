module.exports = {
    HOST: "postgres://jose:ZDxoR2c8TaGiqBi0z6CRqp5Mi6DTxBFw@dpg-cksoau6nfb1c73ci6cj0-a.oregon-postgres.render.com/pruebabd",
    USER: "jose",
    PASSWORD: "ZDxoR2c8TaGiqBi0z6CRqp5Mi6DTxBFw",
    DB: "pruebabd",
    PORT:"5432",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};