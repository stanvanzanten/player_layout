import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

  @Injectable({
    providedIn: 'root'
  })
  
export class GamesComponent implements OnInit {

  games = []
  id: number;
  selectedGame: Game;
  @Input() importGame: Game;
  searchGame: string;
  emptyGame: Game;


  constructor(private _backendService: BackendService, private authService: AuthService) { }

  ngOnInit() {
    return this._backendService.getGames()
      .subscribe(
        res => this.games = res,
        err => console.log(err)
      )

  }

  refreshGames() {
    return this._backendService.getGames()
      .subscribe(
        res => this.games = res,
        err => console.log(err)
      )
  }

  onSelect(game: Game): void {
    this.selectedGame = game
  }

  onEditItem(id: number) {
    console.log("dit id klik je aan : " + id);
    this._backendService.getGameById(id);
  }

  isPopGame(game: Game) {
    if (this.importGame === undefined) return true;
    var listname = game.location
    var searchname = this.searchGame
    console.log(listname + searchname)
    if (listname.includes(searchname)) {
      this.refreshGames();
      return true;
    } else return false;
  }

  removeSelectedGame(): void {
    this.selectedGame = this.emptyGame;
  }
}