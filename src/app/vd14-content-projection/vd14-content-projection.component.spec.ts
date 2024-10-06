import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd14ContentProjectionComponent } from './vd14-content-projection.component';

describe('Vd14ContentProjectionComponent', () => {
  let component: Vd14ContentProjectionComponent;
  let fixture: ComponentFixture<Vd14ContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd14ContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd14ContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
