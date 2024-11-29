import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureComponentModule2RoutingModule } from './feature-component-module-2-routing.module';
import { FeatureComponentModule2Component } from './feature-component-module-2.component';


@NgModule({
  declarations: [
    FeatureComponentModule2Component
  ],
  imports: [
    CommonModule,
    FeatureComponentModule2RoutingModule
  ]
})
export class FeatureComponentModule2Module { }
