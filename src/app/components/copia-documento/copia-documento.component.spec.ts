import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiaDocumentoComponent } from './copia-documento.component';

describe('CopiaDocumentoComponent', () => {
  let component: CopiaDocumentoComponent;
  let fixture: ComponentFixture<CopiaDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopiaDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopiaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
