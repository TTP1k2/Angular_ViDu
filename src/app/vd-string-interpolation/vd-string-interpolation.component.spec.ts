import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdStringInterpolationComponent } from './vd-string-interpolation.component';

describe('VdStringInterpolationComponent', () => {
  let component: VdStringInterpolationComponent;
  let fixture: ComponentFixture<VdStringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VdStringInterpolationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VdStringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
