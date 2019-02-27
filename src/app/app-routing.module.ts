import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NsmComponent} from './nsm/nsm.component';
import {RsmComponent} from './rsm/rsm.component';
import { SmComponent } from './sm/sm.component';


const routes: Routes = [
  {
    path: 'nsm', component: NsmComponent
  },
  {
    path: 'rsm', component: RsmComponent
  },
  {
    path: 'sm', component: SmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
