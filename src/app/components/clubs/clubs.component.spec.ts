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
import { ClubsComponent } from './clubs.component';
import { Club } from '../../models/club.model';
import { asyncData } from 'src/app/testing/async-observable-helpers';
import { BackendService } from 'src/app/services/backend.service';

describe('ClubsComponent', () => {
  let component: ClubsComponent;
  let fixture: ComponentFixture<ClubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClubsComponent
      ],
      imports: [RouterTestingModule, RouterModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        AuthService
        // { provide: BackendService, useClass: ClubServiceSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 1 unordered list item', () => {
    const unorderedList = fixture.debugElement.queryAll(By.css('ul'));
    expect(unorderedList.length <= 1).toBeTruthy();
  });

  // class ClubServiceSpy {
  //   testClub: Club = { _id: "testId", name: 'Test Club', foundingyear: 1959, funds: 12, logo: 'TestLogo' };

  //   getClub = jasmine.createSpy('getClub').and.callFake(
  //     () => asyncData(Object.assign({}, this.testClub))
  //   );
  // }
  // let hdsSpy: ClubServiceSpy;

  // it('should have called `getClub`', () => {
  //   expect(hdsSpy.getClub.calls.count()).toBe(1, 'getClub called once');
  // });

});
