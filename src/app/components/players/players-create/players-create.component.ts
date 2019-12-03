import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
  styleUrls: ['./players-create.component.css']
})
export class PlayersCreateComponent implements OnInit {

  playerCreateData = {};
  displayresult = {};
  showResultBox;
  clubs: [];

  constructor(
    private _backendService: BackendService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showResultBox = false;
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

  createPlayer() {
      this._backendService.createPlayer(this.playerCreateData)
        .subscribe(
          res => {
            console.log(res)
            this.displayresult = {
              result: "success",
              message: "Player was created succesfully"
            };
          },
          err => console.log(err)
        )
        this._backendService.getPlayers();
      }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }

}
