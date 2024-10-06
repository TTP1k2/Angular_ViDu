import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd6TwoWaysBindingComponent } from './vd6-two-ways-binding.component';

describe('Vd6TwoWaysBindingComponent', () => {
  let component: Vd6TwoWaysBindingComponent;
  let fixture: ComponentFixture<Vd6TwoWaysBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd6TwoWaysBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd6TwoWaysBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
