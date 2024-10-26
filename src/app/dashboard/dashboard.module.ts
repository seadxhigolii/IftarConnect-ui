import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { DashboardComponent } from './dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NotificationsModule,
    InputTextModule,
    RouterModule,
    LayoutModule
  ]
})
export class DashboardModule { }
