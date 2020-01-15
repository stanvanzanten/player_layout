import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlayersComponent } from './players.component';
import { BackendService } from 'src/app/services/backend.service';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  const mockData = [
    {
      _id: 1,
      firstname: 'Stan',
      lastname: 'van Zanten',
      age: 21,
      length: 184,
      weight: 72,
      imageLink: 'TestImage',
      club: ''
    }
  ];

  let playerServiceSpy: { getPlayers: jasmine.Spy }


  beforeEach(async(() => {

    playerServiceSpy = jasmine.createSpyObj('PlayerService', ['getPlayers'])

    TestBed.configureTestingModule({
      declarations: [
        PlayersComponent
      ],
      imports: [RouterTestingModule, RouterModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        AuthService,
        {provide: BackendService, useValue: playerServiceSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy()
  })


  it('should create', async () => {
    playerServiceSpy.getPlayers.and.returnValue(of([]))

    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.players.length).toBe(0)
    })
  });

  it('should display a correct list of users', () => {
    playerServiceSpy.getPlayers.and.returnValue(of([mockData, mockData]))

    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.players.length).toBe(2)
      expect(component.players[0].firstname).toBe('Stan')
      expect(component.players[0]._id.toString()).toEqual('1')
    })
  });
  
});
