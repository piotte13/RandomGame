import * as _ from "lodash";

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

  public setDickLength(){
    let maxLen: number;

    switch(true){
      case (window.innerWidth < 400): maxLen = 15; break;
      case (window.innerWidth < 500): maxLen = 25; break;
      case (window.innerWidth < 600): maxLen = 30; break;
      case (window.innerWidth < 650): maxLen = 40; break;
      case (window.innerWidth < 700): maxLen = 50; break;
      case (window.innerWidth < 990): maxLen = 58; break;
      case (window.innerWidth < 1200): maxLen = 80; break;
      default: maxLen = 103;
    }

    let score = _.random(1, maxLen);

    this._dick = "8";

    for(let i = 0 ; i < score ; i++){
      this._dick += "=";
    }
    this._dick += "D";
  }

}
