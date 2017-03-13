import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  private players: Array<Player>;

  public constructor(){
    this.players = new Array<Player>();
    this.players.push(new Player("Jeremie", this.calculateDickLength()));
    this.players.push(new Player("Charles", this.calculateDickLength()));
    this.players.push(new Player("Maxime", this.calculateDickLength()));
    this.players.push(new Player("Jean", this.calculateDickLength()));
    this.players.push(new Player("Shelsea", this.calculateDickLength()));
    console.log(this.players[4].dick);
  }


  calculateDickLength(){
    let score = Math.random() * 100;
    let result = "8";

    for(let i = 0 ; i < score ; i++){
      result += "=";
    }
    result += "D";
    return result;
  }

  populatePlayersDick(){
    for(let i = 0;  i < this.players.length; i++){
        this.players[i].dick = this.calculateDickLength();
    }
  }

  shuffle(){
      this.populatePlayersDick();
  }
}

class Player {
  public name: string;
  public dick: string;

  public constructor(name, dick){
    this.name = name;
    this.dick = dick;
  }
}