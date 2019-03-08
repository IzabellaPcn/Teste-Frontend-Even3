import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostReadsComponent } from './most-reads.component';

describe('MostReadsComponent', () => {
  let component: MostReadsComponent;
  let fixture: ComponentFixture<MostReadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostReadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
