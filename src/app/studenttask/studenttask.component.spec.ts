import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenttaskComponent } from './studenttask.component';

describe('StudenttaskComponent', () => {
  let component: StudenttaskComponent;
  let fixture: ComponentFixture<StudenttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
