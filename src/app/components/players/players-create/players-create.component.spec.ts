import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';
import { PlayersCreateComponent } from './players-create.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PlayersCreateComponent', () => {
  let component: PlayersCreateComponent;
  let fixture: ComponentFixture<PlayersCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayersCreateComponent
      ],
      imports: [RouterTestingModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule
      ],
      providers: [AuthService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
