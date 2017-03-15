export class Player {
  private _name: string;
  private _dick: string;

  get name(): string {
    return this._name;
  }

  get dick(): string {
    return this._dick;
  }

  set dick(value: string) {
    this._dick = value;
  }

  public constructor(name){
    this._name = name;
    this._dick = "";
  }
}
