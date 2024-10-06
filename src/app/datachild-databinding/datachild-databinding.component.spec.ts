import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatachildDatabindingComponent } from './datachild-databinding.component';

describe('DatachildDatabindingComponent', () => {
  let component: DatachildDatabindingComponent;
  let fixture: ComponentFixture<DatachildDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatachildDatabindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatachildDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
