import { Component } from '@angular/core';
import { Dice6f } from "../dice6f"

@Component({
  selector: 'app-dice-game',
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.css']
})
export class DiceGameComponent {

  public dices: Array<Dice6f>;
  public quantityOfDices: number;
  public possibleNumberOfDiceChoice: Array<number> = [1,2,3,4,5,6];

  constructor() {
    this.dices = new Array();
    this.quantityOfDices = 0;
  }

  public setQuantity(nb: number){
    this.quantityOfDices = nb;
  }

  public rollDices(){
    this.dices = new Array();
    for(let i = 0; i < this.quantityOfDices ; i++){
      let d = new Dice6f();
      d.roll();
      this.dices.push(d);
    }
  }
}
