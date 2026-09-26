const alunos = require("../models/alunoModel");
const prisma = require("../prisma");
class AlunoService {
    async findMany(page = 1, pageSize = 10, orderBy = "id", order = "asc") {
        const pageNum = Number(page) || 1;
        const sizeNum = Number(pageSize) || 10;

        const validOrder = ["asc", "desc"].includes(String(order).toLowerCase())
            ? String(order).toLowerCase()
            : "asc";

        const skip = (pageNum - 1) * sizeNum;
        const take = sizeNum;

        const [alunos, total] = await Promise.all([
            prisma.aluno.findMany({
                skip,
                take,
                orderBy: { [orderBy]: validOrder }
            }),
            prisma.aluno.count()
        ]);

        return { alunos, total };
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