import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentName2Component } from './component-name2.component';

describe('ComponentName2Component', () => {
  let component: ComponentName2Component;
  let fixture: ComponentFixture<ComponentName2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentName2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentName2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
