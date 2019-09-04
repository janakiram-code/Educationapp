import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableHtmlComponent } from './reusable-html.component';

describe('ReusableHtmlComponent', () => {
  let component: ReusableHtmlComponent;
  let fixture: ComponentFixture<ReusableHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
