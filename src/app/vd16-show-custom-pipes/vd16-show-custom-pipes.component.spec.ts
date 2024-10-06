import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd16ShowCustomPipesComponent } from './vd16-show-custom-pipes.component';

describe('Vd16ShowCustomPipesComponent', () => {
  let component: Vd16ShowCustomPipesComponent;
  let fixture: ComponentFixture<Vd16ShowCustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd16ShowCustomPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd16ShowCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
