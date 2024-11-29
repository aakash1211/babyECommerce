import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'feature1', pathMatch: 'full' },
  { path: 'feature1', loadChildren: () => import('./features/feature-component-module-1/feature-component-module-1.module').then(m => m.FeatureComponentModule1Module) },
  { path: 'feature2', loadChildren: () => import('./features/feature-component-module-2/feature-component-module-2.module').then(m => m.FeatureComponentModule2Module) },
  { path: '**', redirectTo: '' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
