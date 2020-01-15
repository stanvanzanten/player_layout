import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCreateComponent } from './games-create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('GamesCreateComponent', () => {
  let component: GamesCreateComponent;
  let fixture: ComponentFixture<GamesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesCreateComponent ],
      imports: [RouterTestingModule, RouterModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
