import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
   {
//     path: 'nsm', component: NsmComponent
//    },
//    {     path: 'rsm', component: RsmComponent   },
//   {
//     path: 'sm', component: SmComponent   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {

}
