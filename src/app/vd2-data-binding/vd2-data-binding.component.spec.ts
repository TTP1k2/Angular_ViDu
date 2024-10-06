import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd2DataBindingComponent } from './vd2-data-binding.component';

describe('Vd2DataBindingComponent', () => {
  let component: Vd2DataBindingComponent;
  let fixture: ComponentFixture<Vd2DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd2DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd2DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
