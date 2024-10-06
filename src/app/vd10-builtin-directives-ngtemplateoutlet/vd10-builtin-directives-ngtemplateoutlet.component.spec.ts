import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd10BuiltinDirectivesNgtemplateoutletComponent } from './vd10-builtin-directives-ngtemplateoutlet.component';

describe('Vd10BuiltinDirectivesNgtemplateoutletComponent', () => {
  let component: Vd10BuiltinDirectivesNgtemplateoutletComponent;
  let fixture: ComponentFixture<Vd10BuiltinDirectivesNgtemplateoutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd10BuiltinDirectivesNgtemplateoutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd10BuiltinDirectivesNgtemplateoutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
