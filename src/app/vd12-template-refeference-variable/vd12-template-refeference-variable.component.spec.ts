import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd12TemplateRefeferenceVariableComponent } from './vd12-template-refeference-variable.component';

describe('Vd12TemplateRefeferenceVariableComponent', () => {
  let component: Vd12TemplateRefeferenceVariableComponent;
  let fixture: ComponentFixture<Vd12TemplateRefeferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd12TemplateRefeferenceVariableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd12TemplateRefeferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
