import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesEditComponent } from './games-edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GamesEditComponent', () => {
  let component: GamesEditComponent;
  let fixture: ComponentFixture<GamesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesEditComponent ],
      imports: [RouterTestingModule, RouterModule, HttpModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [
        AuthService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
