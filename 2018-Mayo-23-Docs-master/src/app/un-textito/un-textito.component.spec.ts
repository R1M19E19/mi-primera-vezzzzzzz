import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnTextitoComponent } from './un-textito.component';

describe('UnTextitoComponent', () => {
  let component: UnTextitoComponent;
  let fixture: ComponentFixture<UnTextitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnTextitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnTextitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
