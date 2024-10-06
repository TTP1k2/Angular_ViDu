import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd13ViewchildViewchildrenComponent } from './vd13-viewchild-viewchildren.component';

describe('Vd13ViewchildViewchildrenComponent', () => {
  let component: Vd13ViewchildViewchildrenComponent;
  let fixture: ComponentFixture<Vd13ViewchildViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd13ViewchildViewchildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd13ViewchildViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
