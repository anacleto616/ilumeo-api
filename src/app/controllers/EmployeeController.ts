import { Request, Response } from 'express';
import EmployeesRepository from '../repositories/EmployeesRepository';

class EmployeeController {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async show(request: Request, response: Response): Promise<void | Record<string, any>> {
    const { id } = request.params;

    const employee = await EmployeesRepository.findById(id);

    if (!employee) {
      return response.status(404).json({ error: 'Employee not found.' });
    }

    response.json(employee);
  }
}

export default new EmployeeController();
