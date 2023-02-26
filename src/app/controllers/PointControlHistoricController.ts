import { Request, Response } from 'express';
import PointControlHistoricsRepository from '../repositories/PointControlHistoricsRepository';
import { PointControlHistoricType } from '../types/PointControlHistoricType';
import toHoursAndMinutes from '../utils/toHoursAndMinutes';

class PointControlHistoricController {
  public async index(request: Request, response: Response): Promise<void> {
    const { employeeId } = request.params;

    const pointControlHistoric = await PointControlHistoricsRepository.findAllEmployeeById(employeeId);

    const pointControlHistoricFormatted = pointControlHistoric.map((pointControl) => ({
      ...pointControl,
      day_worked: new Intl.DateTimeFormat('pt-BR').format(pointControl.day_worked),
      worked_hours: toHoursAndMinutes(pointControl.worked_hours)
    }));

    response.json(pointControlHistoricFormatted);
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
