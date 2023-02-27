import { PrismaClient } from '@prisma/client';
import { EmployeeType } from '../types/EmployeeType';

const prisma = new PrismaClient();

class EmployeesRepository {
  async findAll(): Promise<EmployeeType[]> {
    const row = await prisma.employee.findMany();

    return row;
  }

  async findById(id: string): Promise<EmployeeType | null> {
    const row = await prisma.employee.findUnique({
      where: { id }
    });

    return row;
  }

  async findByEmployeeCode(employeeCode: string): Promise<EmployeeType | null> {
    const row = await prisma.employee.findUnique({
      where: { employee_code: employeeCode }
    });

    return row;
  }
}

export default new EmployeesRepository();
