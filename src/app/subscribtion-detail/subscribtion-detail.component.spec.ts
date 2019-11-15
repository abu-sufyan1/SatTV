import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribtionDetailComponent } from './subscribtion-detail.component';

describe('SubscribtionDetailComponent', () => {
  let component: SubscribtionDetailComponent;
  let fixture: ComponentFixture<SubscribtionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribtionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribtionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
