import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonversionComponent } from './konversion.component';

describe('KonversionComponent', () => {
  let component: KonversionComponent;
  let fixture: ComponentFixture<KonversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
