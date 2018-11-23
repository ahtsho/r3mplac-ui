import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduSearchComponent } from './edu-search.component';

describe('EduSearchComponent', () => {
  let component: EduSearchComponent;
  let fixture: ComponentFixture<EduSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
