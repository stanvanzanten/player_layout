import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Player } from '../../../models/player.model';
import { PlayersComponent } from '../players.component';

@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.component.html',
  styleUrls: ['./players-detail.component.css']
})
export class PlayersDetailComponent implements OnInit {

  @Input() player: Player 
  selectedPlayer: Player;
  emptyPlayer: Player;
  showVar: boolean = false;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _playersComp: PlayersComponent,
    private authService: AuthService) { }

  ngOnInit() {
  }

  onSelect(player:Player) {
    this.selectedPlayer = player;
    console.log(player);
  }

  removeSelectedPlayer(): void {
    this.selectedPlayer = this.emptyPlayer;
  }

  toggleChild(){
    this.showVar = !this.showVar;
}

  deletePlayer() {
    this._backendService.deletePlayer(this.player._id)
    .subscribe(
      res => {
        this._playersComp.refreshPlayers();
        this._playersComp.removeSelectedPlayer();
        console.log(res)},
      err => console.log(err)
    )
  }
}
