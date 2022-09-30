import { NgModule } from '@angular/core';

import { TodayRoutingModule } from './today-routing.module';

import { TodayComponent } from './today.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [TodayRoutingModule,CommonModule,NzButtonModule,FormsModule,NzTableModule],
  declarations: [TodayComponent],
  exports: [TodayComponent]
})
export class TodayModule { }
