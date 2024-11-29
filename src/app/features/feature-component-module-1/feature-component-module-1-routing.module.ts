import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponentModule1Component } from './feature-component-module-1.component';

const routes: Routes = [{ path: '', component: FeatureComponentModule1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureComponentModule1RoutingModule { }
