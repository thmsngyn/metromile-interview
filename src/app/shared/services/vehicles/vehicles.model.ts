export class Vehicle {
  public id: string;
  public name: string;

  public constructor(init?: Partial<Vehicle>) {
    Object.assign(this, init);
  }
}
