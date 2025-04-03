import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCopiarComponent } from './botao-copiar.component';

describe('BotaoCopiarComponent', () => {
  let component: BotaoCopiarComponent;
  let fixture: ComponentFixture<BotaoCopiarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCopiarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCopiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
