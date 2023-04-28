import { Model, Schema, model, models } from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model<T>;
  constructor(private name: string, private schema: Schema) {
    this.model = models[name] || model(name, schema);
  }
}