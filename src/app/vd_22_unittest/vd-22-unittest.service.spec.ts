import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Vd22UnittestService } from './vd-22-unittest.service';

describe('Vd22UnittestService', () => {
  let service: Vd22UnittestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClientTesting(),  // Sử dụng provideHttpClientTesting thay cho HttpClientTestingModule
        Vd22UnittestService
      ],
    });
    service = TestBed.inject(Vd22UnittestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
