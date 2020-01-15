import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { GamesComponent } from '../games.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})

  @Injectable({
    providedIn: 'root'
  })
export class GamesDetailComponent implements OnInit {

  @Input() game: Game
  selectedGame: Game;
  emptyGame: Game;
  showVar: boolean = false;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _gamesComp: GamesComponent,
    private authService: AuthService

  ) { }

  ngOnInit() {
  }

  onSelect(game: Game) {
    this.selectedGame = game;
    console.log(game);
  }

  removeSelectedGame(): void {
    this.selectedGame = this.emptyGame;
  }

  toggleChild() {
    this.showVar = !this.showVar;
  }

  deleteGame() {
    this._backendService.deleteGame(this.game._id)
      .subscribe(
        res => {
          this._gamesComp.refreshGames();
          this._gamesComp.removeSelectedGame();
          console.log(res)
        },
        err => console.log(err)
      )
  }

  cancel() {
    this._gamesComp.removeSelectedGame();
  }
}