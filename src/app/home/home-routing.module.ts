import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribePage } from '../subscribe/subscribe.page';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'subscribe',
    component: SubscribePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
