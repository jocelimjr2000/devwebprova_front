import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './view/vehicle/list/list.component';
import { CreateComponent } from './view/vehicle/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'vehicle/list',
    component: ListComponent
  },
  {
    path: 'vehicle/create',
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
