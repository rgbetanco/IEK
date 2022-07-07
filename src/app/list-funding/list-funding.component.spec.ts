import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFundingComponent } from './list-funding.component';

describe('ListFundingComponent', () => {
  let component: ListFundingComponent;
  let fixture: ComponentFixture<ListFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
