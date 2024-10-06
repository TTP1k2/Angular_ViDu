import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd17HttpclientHttprequestmethodComponent } from './vd17-httpclient-httprequestmethod.component';

describe('Vd17HttpclientHttprequestmethodComponent', () => {
  let component: Vd17HttpclientHttprequestmethodComponent;
  let fixture: ComponentFixture<Vd17HttpclientHttprequestmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vd17HttpclientHttprequestmethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vd17HttpclientHttprequestmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
