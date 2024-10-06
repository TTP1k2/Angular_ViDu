import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd15BuiltinPipesComponent } from './vd15-builtin-pipes.component';

describe('Vd15BuiltinPipesComponent', () => {
  let component: Vd15BuiltinPipesComponent;
  let fixture: ComponentFixture<Vd15BuiltinPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd15BuiltinPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd15BuiltinPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
