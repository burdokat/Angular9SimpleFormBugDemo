import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorepageComponent } from './explorepage/explorepage.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'explore', component: ExplorepageComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
