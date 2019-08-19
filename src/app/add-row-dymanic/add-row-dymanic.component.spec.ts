import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRowDymanicComponent } from './add-row-dymanic.component';

describe('AddRowDymanicComponent', () => {
  let component: AddRowDymanicComponent;
  let fixture: ComponentFixture<AddRowDymanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRowDymanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRowDymanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
