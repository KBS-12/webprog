import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeDatatableComponent } from './new-recipe-datatable.component';

describe('NewRecipeDatatableComponent', () => {
  let component: NewRecipeDatatableComponent;
  let fixture: ComponentFixture<NewRecipeDatatableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRecipeDatatableComponent]
    });
    fixture = TestBed.createComponent(NewRecipeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
