import { TestBed } from '@angular/core/testing';

import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});