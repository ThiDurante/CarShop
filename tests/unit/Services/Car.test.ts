import sinon from 'sinon';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import ICar from '../../../src/Interfaces/ICar';

describe('CarService tests', function () {
  afterEach(function () {
    sinon.restore();
  });
  const car: ICar = {
    model: 'Fusca',
    year: 1969,
    color: 'red',
    status: true,
    buyValue: 10000,
    doorsQty: 2,
    seatsQty: 4,
  };
  const service = new CarService(new CarODM());

  it('should return a car', async function () {
    sinon.stub(CarODM.prototype, 'create').resolves(car);
    const result = await service.create(car);

    expect(result).to.be.deep.equal(car);
  });
  it('should return a list of cars', async function () {
    sinon.stub(CarODM.prototype, 'getAll').resolves([car]);
    const result = await service.getAll();

    expect(result).to.be.deep.equal([car]);
  });
  it('should return a car by id', async function () {
    sinon.stub(CarODM.prototype, 'findById').resolves(car);
    const result = await service.findById('123');

    expect(result).to.be.deep.equal(car);
  });
  it('should update a car by id', async function () {
    sinon.stub(CarODM.prototype, 'updateById').resolves(car);
    const result = await service.updateById('123', car);

    expect(result).to.be.deep.equal(car);
  });
});
