module.exports = {
    PORT: process.env.PORT || 3001,
    DB: process.env.DB || 'mongodb://root:toor@localhost:27018/clientes_db?authSource=admin'
}