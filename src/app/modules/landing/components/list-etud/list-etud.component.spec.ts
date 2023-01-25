import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudComponent } from './list-etud.component';

// @ts-ignore
describe('ListEtudComponent', () => {
  let component: ListEtudComponent;
  let fixture: ComponentFixture<ListEtudComponent>;
// @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// @ts-ignore
  it('should create', () => {// @ts-ignore
    expect(component).toBeTruthy();
  });
});
