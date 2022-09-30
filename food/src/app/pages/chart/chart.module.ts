import { NgModule } from '@angular/core';

import { ChartRoutingModule } from './chart-routing.module';

import { ChartComponent } from './chart.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [ChartRoutingModule,NzTableModule,CommonModule,NzButtonModule],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
