/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import EmployeesRepository from '../repositories/EmployeesRepository';

class EmployeeController {
  async index(request: Request, response: Response): Promise<void | Record<string, any>> {
    const employees = await EmployeesRepository.findAll();

    response.json(employees);
  }

  async show(request: Request, response: Response): Promise<void | Record<string, any>> {
    const { id } = request.params;

    const employee = await EmployeesRepository.findById(id);

    if (!employee) {
      return response.status(404).json({ error: 'Employee not found.' });
    }

    response.json(employee);
  }

  async access(request: Request, response: Response): Promise<void | Record<string, any>> {
    const { employee_code } = request.body;

    if (!employee_code) {
      return response.status(400).json({ error: 'Employee code is required.' });
    }

    const employee = await EmployeesRepository.findByEmployeeCode(employee_code);

    if (!employee) {
      return response.status(404).json({ error: 'Employee not found.' });
    }

    response.status(200).json({ message: 'Employee access successfully.'});
  }
}

export default new EmployeeController();
