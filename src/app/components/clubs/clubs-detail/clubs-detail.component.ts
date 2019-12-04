import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Club } from 'src/app/models/club.model';
import { ClubsComponent } from '../clubs.component';

@Component({
  selector: 'app-clubs-detail',
  templateUrl: './clubs-detail.component.html',
  styleUrls: ['./clubs-detail.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ClubsDetailComponent implements OnInit {

  @Input() club: Club 
  selectedClub: Club;
  emptyClub: Club;
  showVar: boolean = false;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _clubsComp: ClubsComponent,
    private authService: AuthService
    
    ) { }

  ngOnInit() {
  }

  onSelect(club:Club) {
    this.selectedClub = club;
    console.log(club);
  }

  removeSelectedClub(): void {
    this.selectedClub = this.emptyClub;
  }

  toggleChild(){
    this.showVar = !this.showVar;
}
  
  deleteClub() {
    this._backendService.deleteClub(this.club._id)
    .subscribe(
      res => {
        this._clubsComp.refreshClubs();
        this._clubsComp.removeSelectedClub();
        console.log(res)},
      err => console.log(err)
    )
  }

  cancel() {
    this._clubsComp.removeSelectedClub();
  }
}