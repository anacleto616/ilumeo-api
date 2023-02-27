import prisma from '../libraries/prisma';
import { PointControlHistoricType } from '../types/PointControlHistoricType';

class PointControlHistoricsRepository {
  public async findAllEmployeeById(employeeId: string): Promise<PointControlHistoricType[]> {
    const rows = await prisma.employeePointControlHistory.findMany({
      where: { employeeId },
      orderBy: { day_worked: 'desc' }
    });

    return rows;
  }

  public async create(
    { day_worked, employeeId, worked_hours }: PointControlHistoricType
  ): Promise<PointControlHistoricType> {
    const row = await prisma.employeePointControlHistory.create({
      data: {
        employeeId,
        day_worked,
        worked_hours
      }
    });

    return row;
  }
}

export default new PointControlHistoricsRepository();
