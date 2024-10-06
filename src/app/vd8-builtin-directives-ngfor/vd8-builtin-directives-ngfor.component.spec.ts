import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd8BuiltinDirectivesNgforComponent } from './vd8-builtin-directives-ngfor.component';

describe('Vd8BuiltinDirectivesNgforComponent', () => {
  let component: Vd8BuiltinDirectivesNgforComponent;
  let fixture: ComponentFixture<Vd8BuiltinDirectivesNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd8BuiltinDirectivesNgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd8BuiltinDirectivesNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
