import mongoosee from 'mongoose';
import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private motorcycleService: MotorcycleService;

  constructor(motorcycleService: MotorcycleService) {
    this.motorcycleService = motorcycleService;
  }

  async create(req: Request, res: Response): Promise<Response | void> {
    const motorcycle = await this.motorcycleService.create(req.body);
    res.status(201).json(motorcycle);
  }

  async getAll(req: Request, res: Response): Promise<Response | void> {
    const motorcycles = await this.motorcycleService.getAll();
    res.status(200).json(motorcycles);
  }

  async findById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    if (!mongoosee.Types.ObjectId.isValid(id)) {
      return res.status(422)
        .json({ message: 'Invalid mongo id' });
    }
    const motorcycle = await this.motorcycleService.findById(id);
    if (!motorcycle) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }
    return res.status(200).json(motorcycle);
  }

  async updateById(req: Request, res: Response): Promise<Response | void> {
    const { id } = req.params;
    if (!mongoosee.Types.ObjectId.isValid(id)) {
      return res.status(422)
        .json({ message: 'Invalid mongo id' });
    }
    const motorcycle = await this.motorcycleService.updateById(id, req.body);
    if (!motorcycle) {
      return res.status(404).json({ message: 'Motorcycle not found' });
    }
    return res.status(200).json(motorcycle);
  }
}