import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFundingComponent } from './filter-funding.component';

describe('FilterFundingComponent', () => {
  let component: FilterFundingComponent;
  let fixture: ComponentFixture<FilterFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
