import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd4StyleBindingVaClassBindingComponent } from './vd4-style-binding-va-class-binding.component';

describe('Vd4StyleBindingVaClassBindingComponent', () => {
  let component: Vd4StyleBindingVaClassBindingComponent;
  let fixture: ComponentFixture<Vd4StyleBindingVaClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd4StyleBindingVaClassBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd4StyleBindingVaClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
