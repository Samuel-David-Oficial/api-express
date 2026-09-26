const alunoService = require("../services/AlunoService");

class AlunoController{
    findMany(request, response){
        const alunos = alunoService.findMany();
        return response.status(200).json({alunos});
    }

    create(request, response){
        const aluno = alunoService.create(request.body);

        if(!aluno){
            response.status(400).json({error: "Nome e Email são obrigatórios"});
        }

        return response.status(201).json({aluno});
    }

    delete(request, response){
        const {id} = request.params;

        const aluno = alunoService.delete(id);

        if(!aluno){
            response.status(404).json({error: "Aluno não encontrado"});
        }

        return response.status(204).end();
    }
}

module.exports = new AlunoController();