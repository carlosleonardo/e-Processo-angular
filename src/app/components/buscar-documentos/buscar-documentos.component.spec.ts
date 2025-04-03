import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDocumentosComponent } from './buscar-documentos.component';

describe('BuscarDocumentosComponent', () => {
  let component: BuscarDocumentosComponent;
  let fixture: ComponentFixture<BuscarDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
