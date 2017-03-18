import { Component } from '@angular/core';
import { Player } from "../player"
import * as _ from "lodash";


@Component({
  selector: 'app-phallus-length-game',
  templateUrl: './phallus-length-game.component.html',
  styleUrls: ['./phallus-length-game.component.css']
})
export class PhallusLengthGameComponent{

  private players: Array<Player>;
  public animate: boolean = false;
  public audio;

  constructor() {
    this.players = new Array<Player>();
    this.players.push(new Player("Jeremie"));
    this.players.push(new Player("Charles"));
    this.players.push(new Player("Maxime"));
    this.players.push(new Player("Jean"));
    this.players.push(new Player("Roxane"));
    this.audio = new Audio();
    this.audio.src = "../../assets/growing_sound_effect.mp3"
    this.audio.load();
  }

  protected populatePlayersDick(){
    this.audio.play();
    this.animate = !this.animate;
    _.map(this.players, (p: Player) => p.setDickLength());
    _.delay(() => {this.animate = true;}, 5);
  }

  public addPlayer(name){
    if(name.length > 0) this.players.push(new Player(name));
  }

  public deletePlayer(player: Player){
    _.remove(this.players, player);
  }
}
