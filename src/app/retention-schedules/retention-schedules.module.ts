import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetentionSchedulesRoutingModule } from './retention-schedules-routing.module';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RetentionSchedulesRoutingModule
  ]
})
export class RetentionSchedulesModule { }
