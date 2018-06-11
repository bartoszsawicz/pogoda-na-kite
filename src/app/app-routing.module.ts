import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SpotBrowsingComponent } from './spot-browsing/spot-browsing.component';

const routes: Routes = [
  {path: 'spot/:id', component: SpotBrowsingComponent},
  { path: '', redirectTo: 'spot/1', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
