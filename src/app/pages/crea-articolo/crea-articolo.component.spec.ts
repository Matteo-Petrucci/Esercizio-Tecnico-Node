import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaArticoloComponent } from './crea-articolo.component';

describe('CreaArticoloComponent', () => {
  let component: CreaArticoloComponent;
  let fixture: ComponentFixture<CreaArticoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaArticoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaArticoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
