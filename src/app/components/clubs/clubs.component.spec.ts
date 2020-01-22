import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../services/auth.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, ReplaySubject, from, of, range, Observer } from 'rxjs';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClubsComponent } from './clubs.component';
import { Club } from '../../models/club.model';
import { asyncData } from 'src/app/testing/async-observable-helpers';
import { BackendService } from 'src/app/services/backend.service';

describe('ClubsComponent', () => {
  let component: ClubsComponent;
  let fixture:ComponentFixture<ClubsComponent>;

  const mockData = [
    {
      _id: 1,
      name: 'Arsenal',
      foundingyear: 1963,
      funds: 23,
      logo: 'TestingImage'
    }
  ];

  let clubServiceSpy : { getClubs: jasmine.Spy, onSelect: jasmine.Spy }

  beforeEach(async(() => {

    clubServiceSpy = jasmine.createSpyObj('ClubService', ['getClubs', 'onSelect'])

    TestBed.configureTestingModule({
      declarations: [
        ClubsComponent
      ],
      imports: [RouterTestingModule, RouterModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        AuthService,
        { provide: BackendService, useValue: clubServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ClubsComponent);
    component = fixture.componentInstance;
  }));

  afterEach(() => {
    fixture.destroy()
  })

  it('should create', async () => {
    clubServiceSpy.getClubs.and.returnValue(of([]))
    
    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.clubs.length).toBe(0)
    })
  });

  it('should display a correct list of clubs', () => {
    clubServiceSpy.getClubs.and.returnValue(of([mockData, mockData]))

     fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.clubs.length).toBe(2)
      expect(component.clubs[0].name).toBe('Arsenal')
      expect(component.clubs[0]._id.toString()).toEqual('1')
     })
  });

  it('should show one selected club', () => {
    clubServiceSpy.onSelect(mockData)

    fixture.whenStable().then(() => {
      fixture.detectChanges()
      expect(component).toBeTruthy()
      expect(component.clubs.length).toBe(1)
      expect(component.clubs[0]._id.toString()).toEqual('1')
    })
  })

  it('should show 1 unordered list item', () => {
    const unorderedList = fixture.debugElement.queryAll(By.css('ul'));
    expect(unorderedList.length <= 1).toBeTruthy();
  });
});
