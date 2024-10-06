import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd18ReactiveformBindingwithhtmlComponent } from './vd18-reactiveform-bindingwithhtml.component';

describe('Vd18ReactiveformBindingwithhtmlComponent', () => {
  let component: Vd18ReactiveformBindingwithhtmlComponent;
  let fixture: ComponentFixture<Vd18ReactiveformBindingwithhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd18ReactiveformBindingwithhtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd18ReactiveformBindingwithhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
