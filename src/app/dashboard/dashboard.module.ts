import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsModule } from './notifications/notifications.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
     ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NotificationsModule,
    LayoutModule,
    DashboardComponent,    
    FormsModule,
    InputTextModule
  ]
})
export class DashboardModule { }
