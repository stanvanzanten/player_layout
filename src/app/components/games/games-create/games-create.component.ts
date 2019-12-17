import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-create',
  templateUrl: './games-create.component.html',
  styleUrls: ['./games-create.component.css']
})
export class GamesCreateComponent implements OnInit {

  gameCreateData = {};
  clubs: [];
  displayresult = {};
  showResultBox;

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

  createGame() {
    this._backendService.createGame(this.gameCreateData)
      .subscribe(
        res => {
          console.log(res)
          this.displayresult = {
            result: "success",
            message: "Game was created succesfully"
          };
        },
        err => console.log(err)
      )
    this._backendService.getGames();
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
