import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureComponentModule1RoutingModule } from './feature-component-module-1-routing.module';
import { FeatureComponentModule1Component } from './feature-component-module-1.component';


@NgModule({
  declarations: [
    FeatureComponentModule1Component
  ],
  imports: [
    CommonModule,
    FeatureComponentModule1RoutingModule
  ]
})
export class FeatureComponentModule1Module { }
