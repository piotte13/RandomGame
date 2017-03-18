import * as _ from "lodash";

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

  constructor(){
    this._value = null;
    this._image = "";
  }

  public roll(): void {
    this._value = _.random(1,6);
    this._image = PATH_TO_ASSET + "dice-" + this._value.toString() + ".jpg";
  }

}
