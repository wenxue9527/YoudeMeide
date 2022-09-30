import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NameslistRoutingModule } from './nameslist-routing.module';

import { NameslistComponent } from './nameslist.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {CommonModule} from '@angular/common';
@NgModule({
  imports: [NameslistRoutingModule,HttpClientModule,CommonModule,NzButtonModule,NzTableModule],
  declarations: [NameslistComponent],
  exports: [NameslistComponent]
})
export class NameslistModule { }
