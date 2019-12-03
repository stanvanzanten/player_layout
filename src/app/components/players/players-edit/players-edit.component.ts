import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { PlayersComponent } from '../players.component';
import { AuthService } from 'src/app/services/auth.service';
import { PlayersDetailComponent } from '../players-detail/players-detail.component';
import { Club } from 'src/app/models/club.model';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})
export class PlayersEditComponent implements OnInit {

  @Input() showMePartially: boolean;
  @Input() player: Player 
  selectedPlayer: Player;
  emptyPlayer: Player;
  clubs: [];
  playerEdit;
  playerNewFirstname = '';
  playerNewLastname = '';
  playerNewAge = 0;
  playerNewLength = 0;
  playerNewWeight = 0;
  playerNewImage = '';
  playerNewClub = new Club('','',0,0,'');
  

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _playersComp: PlayersComponent,
    private _authService: AuthService,
    private _playersDetailComp: PlayersDetailComponent
    
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

  onSelect(player:Player) {
    this.selectedPlayer = player;
    console.log(player);
  }

  editPlayer() {
    if (this._authService.loggedIn) {
    this.playerEdit = new Player( this.player._id, this.playerNewFirstname, this.playerNewLastname, this.playerNewAge, this.playerNewLength, this.playerNewWeight, this.playerNewImage, this.playerNewClub)
    this._backendService.editPlayer(this.playerEdit, this.player._id )
    .subscribe(
      res => {
        this._playersComp.refreshPlayers();
        this._playersDetailComp.removeSelectedPlayer();
        this._playersComp.removeSelectedPlayer();
        console.log(res)},
      err => console.log(err)
    )}
    }
  
    cancel() {
      this._playersDetailComp.removeSelectedPlayer();
    }

}
