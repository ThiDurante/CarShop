import { Request, Response } from 'express';
import mongoose from 'mongoose';
import CarService from '../Services/CarService';

export default class CarController {
  private carService: CarService;

  constructor(carService: CarService) {
    this.carService = carService;
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const cars = await this.carService.getAll();
    res.status(200).json(cars);
  } 

  async create(req: Request, res: Response): Promise<void> {
    const car = await this.carService.create(req.body);
    res.status(201).json(car);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const checkId = mongoose.Types.ObjectId.isValid(id);
    if (!checkId) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const car = await this.carService.findById(id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    return res.status(200).json(car);
  }

  async updateById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const checkId = mongoose.Types.ObjectId.isValid(id);
    if (!checkId) {
      return res.status(422).json({ message: 'Invalid mongo id' });
    }
    const car = await this.carService.updateById(id, req.body);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    return res.status(200).json(car);
  }
}