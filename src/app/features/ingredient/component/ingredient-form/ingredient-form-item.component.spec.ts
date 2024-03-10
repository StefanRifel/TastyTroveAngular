import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientFormItemComponent } from './ingredient-form-item.component';

describe('IngredientFormComponent', () => {
  let component: IngredientFormItemComponent;
  let fixture: ComponentFixture<IngredientFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientFormItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngredientFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
