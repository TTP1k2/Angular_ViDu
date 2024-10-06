import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd16CustomPipesComponent } from './vd16-custom-pipes.component';

describe('Vd16CustomPipesComponent', () => {
  let component: Vd16CustomPipesComponent;
  let fixture: ComponentFixture<Vd16CustomPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd16CustomPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd16CustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
