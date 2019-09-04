import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttandanceComponent } from './student-attandance.component';

describe('StudentAttandanceComponent', () => {
  let component: StudentAttandanceComponent;
  let fixture: ComponentFixture<StudentAttandanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAttandanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
