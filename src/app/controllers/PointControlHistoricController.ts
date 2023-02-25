import { Request, Response } from 'express';
import PointControlHistoricsRepository from '../repositories/PointControlHistoricsRepository';

class PointControlHistoricController {
  async index(request: Request, response: Response) {
    const { employeeId } = request.params;

    const pointControlHistoric = await PointControlHistoricsRepository.findAllById(employeeId);

    response.json(pointControlHistoric);
  }
}

export default new PointControlHistoricController();
