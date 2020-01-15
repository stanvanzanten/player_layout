import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Player } from '../../models/player.model';
import { BackendService } from '../../services/backend.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class PlayersComponent implements OnInit {

  players = []
  id: number;
  selectedPlayer: Player;
  @Input() importPlayer: Player;
  searchPlayer: string;
  emptyPlayer: Player;

  constructor(
    private _backendService: BackendService, private authService: AuthService
  ) { }

  ngOnInit() {
    return this._backendService.getPlayers()
      .subscribe(
        res => this.players = res,
        err => console.log(err)
      )
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player
  }

  refreshPlayers() {
    return this._backendService.getPlayers()
      .subscribe(
        res => this.players = res,
        err => console.log(err)
      )
  }

  onEditItem(id: number) {
    console.log("dit id klik je aan : " + id);
    this._backendService.getPlayerById(id);
  }

  isPopPlayer(player: Player) {
    if (this.importPlayer === undefined) return true;
    var listname = player.firstname
    var searchname = this.searchPlayer
    console.log(listname + searchname)
    if (listname.includes(searchname)) {
      this.refreshPlayers();
      return true;
    } else return false;
  }

  removeSelectedPlayer(): void {
    this.selectedPlayer = this.emptyPlayer;
  }
}
