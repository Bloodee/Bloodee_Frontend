import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueqComponent } from './queq.component';

describe('QueqComponent', () => {
  let component: QueqComponent;
  let fixture: ComponentFixture<QueqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
