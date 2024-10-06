import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd11InputOutputCompComponent } from './vd11-input-output-comp.component';

describe('Vd11InputOutputCompComponent', () => {
  let component: Vd11InputOutputCompComponent;
  let fixture: ComponentFixture<Vd11InputOutputCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd11InputOutputCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd11InputOutputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
