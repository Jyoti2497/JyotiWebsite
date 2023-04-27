import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAllComponent } from './visitor-all.component';

describe('VisitorAllComponent', () => {
  let component: VisitorAllComponent;
  let fixture: ComponentFixture<VisitorAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
