import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponentModule1Component } from './feature-component-module-1.component';

describe('FeatureComponentModule1Component', () => {
  let component: FeatureComponentModule1Component;
  let fixture: ComponentFixture<FeatureComponentModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureComponentModule1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureComponentModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
