import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponentModule2Component } from './feature-component-module-2.component';

describe('FeatureComponentModule2Component', () => {
  let component: FeatureComponentModule2Component;
  let fixture: ComponentFixture<FeatureComponentModule2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureComponentModule2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureComponentModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
