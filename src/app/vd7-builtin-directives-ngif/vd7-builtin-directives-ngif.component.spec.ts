import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd7BuiltinDirectivesNgifComponent } from './vd7-builtin-directives-ngif.component';

describe('Vd7BuiltinDirectivesNgifComponent', () => {
  let component: Vd7BuiltinDirectivesNgifComponent;
  let fixture: ComponentFixture<Vd7BuiltinDirectivesNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd7BuiltinDirectivesNgifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd7BuiltinDirectivesNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
