import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.buyValue = vehicle.buyValue;
    this.status = vehicle.status ? vehicle.status : false;
  }
}