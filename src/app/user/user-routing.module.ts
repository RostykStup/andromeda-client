import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {CartComponent} from './cart/cart.component';
import {OrderMakingComponent} from './order-making/order-making.component';
import {UserOrdersComponent} from './user-orders/user-orders.component';
import {UserOrderDataComponent} from './user-order-data/user-order-data.component';
import {OrderFeedbackComponent} from './order-feedback/order-feedback.component';
import {AddressesManageComponent} from './addresses-manage/addresses-manage.component';
import {NotificationPageComponent} from './notification-page/notification-page.component';
import {FavoriteAdvertisementsComponent} from './favorite-advertisements/favorite-advertisements.component';
import {ViewHistoryComponent} from './view-history/view-history.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SettingsPageComponent} from './settings-page/settings-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {
        path: '', component: MainPageComponent
      },
      {
        path: 'notifications', component: NotificationPageComponent
      },
      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'make-order', component: OrderMakingComponent
      },
      {
        path: 'orders', component: UserOrdersComponent
      },
      {
        path: 'order-data', component: UserOrderDataComponent
      },
      {
        path: 'leave-feedback', component: OrderFeedbackComponent
      },
      {
        path: 'addresses', component: AddressesManageComponent
      },
      {
        path: 'saved', component: FavoriteAdvertisementsComponent
      },
      {
        path: 'views', component: ViewHistoryComponent
      },
      {
        path: 'profile', component: UserProfileComponent
      },
      {
        path: 'settings', component: SettingsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }