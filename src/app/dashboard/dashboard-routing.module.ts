import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  HomeboardComponent
} from './homeboard/homeboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeboardComponent,
  },
  {
    path: 'sale',
    component: HomeboardComponent
  },
  {
    path: 'samsung',
    component: HomeboardComponent
  },
  {
    path: 'apple',
    component: HomeboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
