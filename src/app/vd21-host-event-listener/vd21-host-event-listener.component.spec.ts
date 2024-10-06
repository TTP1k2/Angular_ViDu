import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd21HostEventListenerComponent } from './vd21-host-event-listener.component';

describe('Vd21HostEventListenerComponent', () => {
  let component: Vd21HostEventListenerComponent;
  let fixture: ComponentFixture<Vd21HostEventListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd21HostEventListenerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd21HostEventListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
