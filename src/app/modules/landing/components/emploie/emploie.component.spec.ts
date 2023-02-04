import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploieComponent } from './emploie.component';

describe('EmploieComponent', () => {
  let component: EmploieComponent;
  let fixture: ComponentFixture<EmploieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
