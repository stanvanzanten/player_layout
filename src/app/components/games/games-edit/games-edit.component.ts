import { Component, OnInit, Input } from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { Game } from 'src/app/models/game.model';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { ClubsComponent } from '../../clubs/clubs.component';
import { AuthService } from 'src/app/services/auth.service';
import { ClubsDetailComponent } from '../../clubs/clubs-detail/clubs-detail.component';
import { GamesComponent } from '../games.component';
import { GamesDetailComponent } from '../games-detail/games-detail.component';
import { Time } from '@angular/common';

@Component({
  selector: 'app-games-edit',
  templateUrl: './games-edit.component.html',
  styleUrls: ['./games-edit.component.css']
})
export class GamesEditComponent implements OnInit {
  
  @Input() showMePartially: boolean;
  @Input() game: Game
  selectedGame: Game;
  emptyGame: Game;
  gameEdit;
  gameNewDate = new Date;
  gameNewLocation = '';
  gameNewStartTime = new Date;
  gameNewEndTime = new Date;
  gameNewClubs: [Club];
  clubs: [];
  submitted = false;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _gamesComp: GamesComponent,
    private _authService: AuthService,
    private _gamesDetailComp: GamesDetailComponent

  ) { }

  ngOnInit() {
    this._backendService.getClubs()
      .subscribe(
        res => {
          this.clubs = res
        },
        err => {
          console.log(err)
        }
      )
  }

  onSelect(game: Game) {
    this.selectedGame = game;
    console.log(game);
  }

  editGame() {
    this.submitted = true
    if (this._authService.loggedIn) {
      this.gameEdit = new Game(this.game._id, this.gameNewDate, this.gameNewLocation, this.gameNewStartTime, this.gameNewEndTime, this.gameNewClubs)
      this._backendService.editGame(this.gameEdit, this.game._id)
        .subscribe(
          res => {
            this._gamesComp.refreshGames();
            this._gamesDetailComp.removeSelectedGame();
            this._gamesComp.removeSelectedGame();
            console.log(res)
          },
          err => console.log(err)
        )
    }
  }

  cancel() {
    this._gamesDetailComp.removeSelectedGame();
  }
}