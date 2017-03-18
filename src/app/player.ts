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
    let maxLen = 103;
    if(window.innerWidth < 700) maxLen = 50;
    else if(window.innerWidth < 990) maxLen = 58;
    else if(window.innerWidth < 1200) maxLen = 80;
    let score = _.random(1, maxLen);

    this._dick = "8";

    for(let i = 0 ; i < score ; i++){
      this._dick += "=";
    }
    this._dick += "D";
  }

}
