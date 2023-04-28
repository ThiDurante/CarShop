import sinon from 'sinon';
import { expect } from 'chai';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('MotorcycleService tests', function () {
  afterEach(function () {
    sinon.restore();
  });
  const motorcycle: IMotorcycle = {
    model: 'x60',
    year: 1969,
    color: 'red',
    status: true,
    buyValue: 10000,
    engineCapacity: 100,
    category: 'Street',
  };
  const service = new MotorcycleService(new MotorcycleODM());

  it('should return a motorcycle', async function () {
    sinon.stub(MotorcycleODM.prototype, 'create').resolves(motorcycle);
    const result = await service.create(motorcycle);

    expect(result).to.be.deep.equal(motorcycle);
  });
  it('should return a list of motorcycles', async function () {
    sinon.stub(MotorcycleODM.prototype, 'getAll').resolves([motorcycle]);
    const result = await service.getAll();

    expect(result).to.be.deep.equal([motorcycle]);
  });
  it('should return a motorcycle by id', async function () {
    sinon.stub(MotorcycleODM.prototype, 'findById').resolves(motorcycle);
    const result = await service.findById('123');

    expect(result).to.be.deep.equal(motorcycle);
  });
  it('should update a motorcycle by id', async function () {
    sinon.stub(MotorcycleODM.prototype, 'updateById').resolves(motorcycle);
    const result = await service.updateById('123', motorcycle);

    expect(result).to.be.deep.equal(motorcycle);
  });
});