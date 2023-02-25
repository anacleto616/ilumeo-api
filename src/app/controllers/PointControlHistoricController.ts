import { Request, Response } from 'express';
import PointControlHistoricsRepository from '../repositories/PointControlHistoricsRepository';
import { PointControlHistoricType } from '../types/PointControlHistoricType';

class PointControlHistoricController {
  public async index(request: Request, response: Response): Promise<void> {
    const { employeeId } = request.params;

    const pointControlHistoric = await PointControlHistoricsRepository.findAllById(employeeId);

    response.json(pointControlHistoric);
  }

  public async store(request: Request, response: Response): Promise<void> {
    const {
      day_worked,
      employeeId,
      worked_hours
    }: PointControlHistoricType = request.body;

    const pointControlHistoric = await PointControlHistoricsRepository.create({
      day_worked,
      employeeId,
      worked_hours,
    });

    response.json(pointControlHistoric);
  }
}

export default new PointControlHistoricController();
