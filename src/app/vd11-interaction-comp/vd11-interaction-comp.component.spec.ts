import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd11InteractionCompComponent } from './vd11-interaction-comp.component';

describe('Vd11InteractionCompComponent', () => {
  let component: Vd11InteractionCompComponent;
  let fixture: ComponentFixture<Vd11InteractionCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd11InteractionCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd11InteractionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
