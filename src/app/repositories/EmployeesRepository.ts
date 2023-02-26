import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EmployeesRepository {
  async findAll() {
    const row = await prisma.employee.findMany();

    return row;
  }

  async findById(id: string) {
    const row = await prisma.employee.findUnique({
      where: { id }
    });

    return row;
  }

  async findByEmployeeCode(employeeCode: string) {
    const row = await prisma.employee.findUnique({
      where: { employee_code: employeeCode }
    });

    return row;
  }
}

export default new EmployeesRepository();
