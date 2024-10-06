import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd19ReactiveformFormarrayComponent } from './vd19-reactiveform-formarray.component';

describe('Vd19ReactiveformFormarrayComponent', () => {
  let component: Vd19ReactiveformFormarrayComponent;
  let fixture: ComponentFixture<Vd19ReactiveformFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd19ReactiveformFormarrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd19ReactiveformFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
