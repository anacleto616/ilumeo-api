import { EmployeePointControlHistory, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PointControlHistoricsRepository {
  public async findAllById(employeeId: string): Promise<EmployeePointControlHistory[]> {
    const rows = await prisma.employeePointControlHistory.findMany({
      where: { employeeId },
      orderBy: { day_worked: 'desc' }
    });

    return rows;
  }
}

export default new PointControlHistoricsRepository();
