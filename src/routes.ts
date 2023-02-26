import { Router } from 'express';
import EmployeeController from './app/controllers/EmployeeController';
import PointControlHistoricController from './app/controllers/PointControlHistoricController';

const router = Router();

router.get('/point-control-historic/:employeeId', PointControlHistoricController.index);
router.post('/point-control-historic', PointControlHistoricController.store);

router.get('/employee/:id', EmployeeController.show);

export default router;
