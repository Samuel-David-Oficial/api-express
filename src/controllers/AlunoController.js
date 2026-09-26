const alunoService = require("../services/AlunoService");

class AlunoController {
    async findMany(request, response) {
        try {
            const { page = 1, pageSize = 10, orderBy = "id", order, tipoordenacao } = request.query;
            const sortOrder = order || tipoordenacao || "asc";

            const result = await alunoService.findMany(page, pageSize, orderBy, sortOrder);
            return response.status(200).json(result);
        } catch (error) {
            const statusCode = error.statusCode || 500;
            return response.status(statusCode).json({ error: error.message });
        }
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