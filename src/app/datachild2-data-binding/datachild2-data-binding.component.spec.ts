import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datachild2DataBindingComponent } from './datachild2-data-binding.component';

describe('Datachild2DataBindingComponent', () => {
  let component: Datachild2DataBindingComponent;
  let fixture: ComponentFixture<Datachild2DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Datachild2DataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datachild2DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
