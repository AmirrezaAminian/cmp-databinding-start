import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddComponent } from './odd.component';

describe('OddComponent', () => {
  let component: OddComponent;
  let fixture: ComponentFixture<OddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OddComponent]
    });
    fixture = TestBed.createComponent(OddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
