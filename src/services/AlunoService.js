const alunos = require("../models/alunoModel");

class AlunoService{
    findMany(){
        return alunos;
    }

    create(aluno){
        const {nome, email} = aluno;

        if(!nome || !email){
            return null;
        }

        const novoAluno = {
            id: alunos[alunos.length-1].id + 1,
            nome, email
        };

        alunos.push(novoAluno);

        return novoAluno;
    }

    delete(id){

        const alunoIndex = alunos.findIndex((a)=> a.id === parseInt(id));

        if(alunoIndex == -1){
            return null;
        }

        const [aluno] = alunos.splice(alunoIndex, 1);

        return aluno;
    }
}

module.exports = new AlunoService();