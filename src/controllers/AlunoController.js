const alunoService = require("../services/AlunoService");

class AlunoController {
    async findUnique(request, response) {
        try {
            const { id } = request.params;
            const aluno = await alunoService.findUnique(id);
            return response.status(200).json(aluno);
        } catch (error) {
            const statusCode = error.statusCode || 500;
            return response.status(statusCode).json({ error: error.message });
        }
    }
    async update(request, response) {
        try {
            const { id } = request.params;
            const aluno = await alunoService.update(id, request.body);
            return response.status(200).json({ aluno });
        } catch (error) {
            const statusCode = error.statusCode || 500;
            return response.status(statusCode).json({ error: error.message });
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params;
            await alunoService.delete(id);
            return response.status(204).end();
        } catch (error) {
            const statusCode = error.statusCode || 500;
            return response.status(statusCode).json({ error: error.message });
        }
    }
}

module.exports = new AlunoController();