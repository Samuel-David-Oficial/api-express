const ApiError = require('./ApiError');

class AlunoInvalidoError extends ApiError {
    constructor(message = "Dados do aluno inválidos") {
        super(message, 400);
    }
}
module.exports = AlunoInvalidoError;