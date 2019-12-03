import { Component, OnInit, Input, ViewChild, Injectable } from '@angular/core';
import { Club } from 'src/app/models/club.model';
import { BackendService } from 'src/app/services/backend.service';
import { AuthService } from 'src/app/services/auth.service';
import { ClubsComponent } from '../clubs.component';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubsDetailComponent } from '../clubs-detail/clubs-detail.component';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-clubs-edit',
  templateUrl: './clubs-edit.component.html',
  styleUrls: ['./clubs-edit.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ClubsEditComponent implements OnInit {
  
  @Input() showMePartially: boolean;
  @Input() club: Club 
  selectedClub: Club;
  emptyClub: Club;
  clubEdit;
  clubNewName = '';
  clubNewYear = 0;
  clubNewFunds = 0;
  clubNewLogo = '';
  clubNewPlayers : [Player];
  players: [];

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _clubsComp: ClubsComponent,
    private _authService: AuthService,
    private _clubsDetailComp: ClubsDetailComponent
    
    ) { }

  ngOnInit() {
    this._backendService.getPlayers()
    .subscribe(
      res => {
        this.players = res
      },
      err => {
        console.log(err)
      }
    )  }

  onSelect(club:Club) {
    this.selectedClub = club;
    console.log(club);
  }

  editClub() {
    if (this._authService.loggedIn) {
    this.clubEdit = new Club( this.club._id, this.clubNewName, this.clubNewYear, this.clubNewFunds, this.clubNewLogo, this.clubNewPlayers)
    this._backendService.editClub(this.clubEdit, this.club._id )
    .subscribe(
      res => {
        this._clubsComp.refreshClubs();
        this._clubsDetailComp.removeSelectedClub();
        this._clubsComp.removeSelectedClub();
        console.log(res)},
      err => console.log(err)
    )}
    }
  
    cancel() {
      this._clubsDetailComp.removeSelectedClub();
    }
}
