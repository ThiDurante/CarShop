import Motorcycle from '../Classes/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private motorcycleODM: MotorcycleODM;

  constructor(motorcycleODM: MotorcycleODM) {
    this.motorcycleODM = motorcycleODM;
  }

  public async create(body: IMotorcycle): Promise<IMotorcycle> {
    const motorcycle = new Motorcycle(body);
    return this.motorcycleODM.create(motorcycle);
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.motorcycleODM.getAll();
  }

  async findById(id: string): Promise<IMotorcycle | null> {
    return this.motorcycleODM.findById(id);
  }

  async updateById(id: string, body: IMotorcycle): Promise<IMotorcycle | null> {
    const motorcycle = new Motorcycle(body);
    return this.motorcycleODM.updateById(id, motorcycle);
  }
}