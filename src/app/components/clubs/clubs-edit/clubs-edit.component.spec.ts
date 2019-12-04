import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';
import { ClubsEditComponent } from './clubs-edit.component';
import { By } from '@angular/platform-browser';


describe('ClubsEditComponent', () => {
  let component: ClubsEditComponent;
  let fixture: ComponentFixture<ClubsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClubsEditComponent
      ],
      imports: [RouterTestingModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule 
      ],
      providers:[AuthService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
