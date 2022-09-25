import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatTableModule} from  '@angular/material/table';

import { ReportRoutingModule } from './report-routing.module';
import { UserComponent } from './user/user.component';

console.warn("report module loaded")
@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatTableModule
  ]
})
export class ReportModule { }
