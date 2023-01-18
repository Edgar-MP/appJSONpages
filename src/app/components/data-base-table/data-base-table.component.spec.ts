import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBaseTableComponent } from './data-base-table.component';

describe('DataBaseTableComponent', () => {
  let component: DataBaseTableComponent;
  let fixture: ComponentFixture<DataBaseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBaseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBaseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
