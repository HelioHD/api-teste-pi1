const conexao = require('../infra/conexao')

class Registro {
    adiciona(registro, res) {

     
            const sql = 'INSERT INTO registro SET ?'
            conexao.query(sql, registro, (erro, resultados) => {
                if(erro) {
                    console.log(erro)
                    res.status(400).json(erro)
                } else {
                    console.log(resultados)
                    res.status(200).json(resultados)
                }
            })
    
    }
 
    lista(res) {
        const sql = 'SELECT * FROM registro'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(resultados)
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM registro WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const registro = resultados[0]
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(registro)
                res.status(200).json(registro)
            }
        })
    }

    altera(id, valores, res) {
     
        const sql = 'UPDATE registro SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log({
                    ...valores,
                    id
                })
                res.status(200).json({
                    ...valores,
                    id
                })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM registro WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(id)
                res.status(200).json({
                    id
                })
            }
        })
    }
 }

module.exports = new Registro