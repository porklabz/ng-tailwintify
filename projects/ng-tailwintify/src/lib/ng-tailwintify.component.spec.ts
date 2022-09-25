import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTailwintifyComponent } from './ng-tailwintify.component';

describe('NgTailwintifyComponent', () => {
  let component: NgTailwintifyComponent;
  let fixture: ComponentFixture<NgTailwintifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTailwintifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTailwintifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
