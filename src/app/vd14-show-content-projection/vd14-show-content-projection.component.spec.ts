import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd14ShowContentProjectionComponent } from './vd14-show-content-projection.component';

describe('Vd14ShowContentProjectionComponent', () => {
  let component: Vd14ShowContentProjectionComponent;
  let fixture: ComponentFixture<Vd14ShowContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd14ShowContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd14ShowContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
