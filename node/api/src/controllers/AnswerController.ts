import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
  // http://localhost:3333/answers/10?u=3ddaba88-1e64-456a-9cc0-9d29ada8d2b9
  /**
   * Route Params => Parametros que compõe a rota
   * routes.get("/answers/:value")
   *
   * Query Params => Busca, Paginação, não obrigatórios
   * ?chave=valor
   */
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUsersRepository.findOne({
      id: String(u),
    });

    if (!surveyUser) {
      throw new AppError("Survey User does not exists!");
    }

    surveyUser.value = Number(value);

    await surveysUsersRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export { AnswerController };
