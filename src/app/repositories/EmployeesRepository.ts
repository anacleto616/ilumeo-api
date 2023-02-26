import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EmployeesRepository {
  async findById(id: string) {
    const row = await prisma.employee.findUnique({
      where: { id }
    });

    return row;
  }
}

export default new EmployeesRepository();
