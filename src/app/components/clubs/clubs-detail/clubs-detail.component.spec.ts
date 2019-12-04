import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../services/auth.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClubsDetailComponent } from './clubs-detail.component';
import { PlayersComponent } from '../../players/players.component';
import { Club } from '../../../models/club.model';
import { asyncData } from 'src/app/testing/async-observable-helpers';
import { BackendService } from 'src/app/services/backend.service';

describe('ClubsDetailComponent', () => {
  let component: ClubsDetailComponent;
  let fixture: ComponentFixture<ClubsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClubsDetailComponent,
        PlayersComponent
      ],
      imports: [RouterTestingModule, RouterModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        AuthService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display stub hero\'s name', () => {
  //   expect(page.nameDisplay.textContent).toBe(hdsSpy.testClub.name);
  // });

  // it('should have a minimum of one button on the page', () => {
  //   const buttons = fixture.debugElement.queryAll(By.css('button'))
  //   expect(buttons.length >= 1).toBeTruthy();
  // });

  // it('should be a Edit button as the first button on the page', () => {
  //   const linkDes = fixture.debugElement.query(By.css('button'));
  //   const nativeAnchor: HTMLButtonElement = linkDes[0].nativeElement;
  //   expect(nativeAnchor.textContent).toBe('Edit')
  // });
});
