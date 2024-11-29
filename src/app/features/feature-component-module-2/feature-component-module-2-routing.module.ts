import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponentModule2Component } from './feature-component-module-2.component';

const routes: Routes = [{ path: '', component: FeatureComponentModule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureComponentModule2RoutingModule { }
