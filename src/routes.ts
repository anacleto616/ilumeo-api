import { Router } from 'express';
import PointControlHistoricController from './app/controllers/PointControlHistoricController';

const router = Router();

router.get('/point-control-historic/:employeeId', PointControlHistoricController.index);

export default router;
