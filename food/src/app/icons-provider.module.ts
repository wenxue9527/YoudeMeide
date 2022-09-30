import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  PieChartOutline,
  FieldTimeOutline,
  BarsOutline
} from '@ant-design/icons-angular/icons';
const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, 
  FormOutline,PieChartOutline,
  FieldTimeOutline,
  BarsOutline

];

@NgModule({
  imports: [NzIconModule],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
