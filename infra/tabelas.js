class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarRegistro()
    }

    criarRegistro() {
        const sql = 'CREATE TABLE IF NOT EXISTS Registro (id int NOT NULL AUTO_INCREMENT,' + 
            'nome varchar(50) NOT NULL, email varchar(50), senha varchar(20) NOT NULL,' +
             ' PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Registro criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas