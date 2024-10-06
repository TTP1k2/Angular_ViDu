import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd5EventBindingComponent } from './vd5-event-binding.component';

describe('Vd5EventBindingComponent', () => {
  let component: Vd5EventBindingComponent;
  let fixture: ComponentFixture<Vd5EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd5EventBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd5EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
