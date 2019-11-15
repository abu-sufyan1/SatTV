import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBaseComponent } from './subscribe-base.component';

describe('SubscribeBaseComponent', () => {
  let component: SubscribeBaseComponent;
  let fixture: ComponentFixture<SubscribeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
