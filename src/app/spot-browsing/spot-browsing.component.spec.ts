import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotBrowsingComponent } from './spot-browsing.component';

describe('SpotBrowsingComponent', () => {
  let component: SpotBrowsingComponent;
  let fixture: ComponentFixture<SpotBrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotBrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
