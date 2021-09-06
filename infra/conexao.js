const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'SEU-HOST',
    port: 3306,
    user: 'SEU-USER',
    password: 'SUA-SENHA',
    database: 'SEU-BANCO'
})

module.exports = conexao
