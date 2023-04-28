import Car from '../Classes/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private carModel: CarODM;

  constructor(carModel: CarODM) {
    this.carModel = carModel;
  }

  public async create(body: ICar): Promise<ICar> {
    const car = new Car(body);
    return this.carModel.create(car);
  }

  public async getAll(): Promise<ICar[]> {
    return this.carModel.getAll();
  }

  async findById(id: string): Promise<ICar | null> {
    return this.carModel.findById(id);
  }

  async updateById(id: string, body: ICar): Promise<ICar | null> {
    const car = new Car(body);
    return this.carModel.updateById(id, car);
  }
}