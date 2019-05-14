import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbdfListComponent } from './hbdf-list.component';

describe('HbdfListComponent', () => {
  let component: HbdfListComponent;
  let fixture: ComponentFixture<HbdfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbdfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbdfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
