import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEtudiantComponent } from './landing-etudiant.component';

describe('LandingEtudiantComponent', () => {
  let component: LandingEtudiantComponent;
  let fixture: ComponentFixture<LandingEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
