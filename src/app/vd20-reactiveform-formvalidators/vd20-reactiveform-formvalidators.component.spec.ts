import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd20ReactiveformFormvalidatorsComponent } from './vd20-reactiveform-formvalidators.component';

describe('Vd20ReactiveformFormvalidatorsComponent', () => {
  let component: Vd20ReactiveformFormvalidatorsComponent;
  let fixture: ComponentFixture<Vd20ReactiveformFormvalidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd20ReactiveformFormvalidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd20ReactiveformFormvalidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
