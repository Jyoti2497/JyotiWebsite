import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMenteeComponent } from './add-new-mentee.component';

describe('AddNewMenteeComponent', () => {
  let component: AddNewMenteeComponent;
  let fixture: ComponentFixture<AddNewMenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMenteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
