import { Router } from 'express';
import CarService from '../Services/CarService';
import CarODM from '../Models/CarODM';
import CarController from '../Controllers/CarController';

const carRouter = Router();

const carODM = new CarODM();
const carService = new CarService(carODM);
const carController = new CarController(carService);

carRouter.get('/', (req, res) => carController.getAll(req, res));
carRouter.post('/', (req, res) => carController.create(req, res));
carRouter.put('/:id', (req, res) => carController.updateById(req, res));
carRouter.get('/:id', (req, res) => carController.findById(req, res));

export default carRouter;