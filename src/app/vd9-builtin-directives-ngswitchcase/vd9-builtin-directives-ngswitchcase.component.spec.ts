import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd9BuiltinDirectivesNgswitchcaseComponent } from './vd9-builtin-directives-ngswitchcase.component';

describe('Vd9BuiltinDirectivesNgswitchcaseComponent', () => {
  let component: Vd9BuiltinDirectivesNgswitchcaseComponent;
  let fixture: ComponentFixture<Vd9BuiltinDirectivesNgswitchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd9BuiltinDirectivesNgswitchcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd9BuiltinDirectivesNgswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
