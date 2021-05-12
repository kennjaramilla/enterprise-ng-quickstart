import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProcessListComponent } from './process-list/process-list.component';
import { DesignerComponent } from './designer/designer.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { NotAllowedComponent } from './error/not-allowed/not-allowed.component';

const appRoutes: Routes = [
  { path: '', component: ProcessListComponent },
  { path: 'designer/:id/:name', component: DesignerComponent },
  { path: 'not-allowed', component: NotAllowedComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
