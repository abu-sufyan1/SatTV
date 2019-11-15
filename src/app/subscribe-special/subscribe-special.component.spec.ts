import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeSpecialComponent } from './subscribe-special.component';

describe('SubscribeSpecialComponent', () => {
  let component: SubscribeSpecialComponent;
  let fixture: ComponentFixture<SubscribeSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
