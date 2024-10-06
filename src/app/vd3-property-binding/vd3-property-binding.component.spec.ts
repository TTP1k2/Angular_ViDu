import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd3PropertyBindingComponent } from './vd3-property-binding.component';

describe('Vd3PropertyBindingComponent', () => {
  let component: Vd3PropertyBindingComponent;
  let fixture: ComponentFixture<Vd3PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd3PropertyBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd3PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
