import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupEtudComponent } from './group-etud.component';

describe('GroupEtudComponent', () => {
  let component: GroupEtudComponent;
  let fixture: ComponentFixture<GroupEtudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupEtudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
