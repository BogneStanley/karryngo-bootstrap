import { Routes } from '@angular/router';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { UserPageComponent } from './user-page/user-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { BrokerPageComponent } from './broker-page/broker-page.component';

export const routes: Routes = [
  {
    path: 'driver-info',
    component: DriverInfoComponent,
  },
  {
    path: 'users',
    component: UserPageComponent,
  },
  {
    path: 'owner',
    component: OwnerPageComponent,
  },

  {
    path: '',
    redirectTo: 'driver-info',
    pathMatch: 'full',
  },
];
