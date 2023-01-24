import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfComponent } from './list-prof.component';
// @ts-ignore
describe('ListProfComponent', () => {
  let component: ListProfComponent;
  let fixture: ComponentFixture<ListProfComponent>;

  // @ts-ignore
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// @ts-ignore
  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
