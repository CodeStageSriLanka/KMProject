import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { DocviewerRoutingModule } from './docviewer-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocviewerRoutingModule,
    NgxDocViewerModule
  ]
})
export class DocviewerModule { }
