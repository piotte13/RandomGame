import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-game',
  templateUrl: './dice-game.component.html',
  styleUrls: ['./dice-game.component.css']
})
export class DiceGameComponent implements OnInit {

  public dices: Array<number>;
  public possibleNumberOfDiceChoice: Array<number> = [1,2,3,4,5,6];

  constructor() {
    this.dices = new Array();
    console.log(this.possibleNumberOfDiceChoice);
  }

  ngOnInit() {
  }

  public roll(nb: number){
    this.dices = new Array();
    for(let i = 0; i < nb ; i++){
      this.dices.push(Math.round((Math.random() * 5)+1));
    }
  }


}
