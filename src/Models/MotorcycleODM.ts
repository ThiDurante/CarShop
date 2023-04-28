import { Schema } from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Classes/Motorcycle';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super('Motorcycle', new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    }, { toJSON: { transform: (doc, ret) => {
      const modifiedRet = { ...ret }; 
      modifiedRet.id = modifiedRet._id; 
      delete modifiedRet._id;
      return modifiedRet;
    } }, 
    }));
  }

  async create(motorcycle: Motorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<IMotorcycle | null> {
    return this.model.findById(id);
  }

  async updateById(id: string, motorcycle: Motorcycle): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(id, motorcycle, { new: true });
  }
}