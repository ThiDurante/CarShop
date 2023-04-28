import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Car from '../Classes/Car';
import AbstractODM from './AbstractODM';

export default class CarODM extends AbstractODM<ICar> {
  constructor() {
    super('Car', new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, { toJSON: { transform: (doc, ret) => {
      const modifiedRet = { ...ret }; 
      modifiedRet.id = modifiedRet._id; 
      delete modifiedRet._id;
      return modifiedRet;
    } } }));
  }

  async create(car: Car): Promise<ICar> {
    return this.model.create({ ...car });
  }

  async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  async updateById(id: string, car: Car): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(id, car, { new: true });
  }
}