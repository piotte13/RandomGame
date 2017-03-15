const PATH_TO_ASSET = "../../assets/" ;

export class Dice6f {
  private _value: number;
  private _image: string;

  get value(): number {
    return this._value;
  }

  get image(): string {
    return this._image;
  }

  constructor(value: number) {
    this._value = value;
    this._image = PATH_TO_ASSET + "dice-" + this._value.toString() + ".jpg";
  }
}
