import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { FlatGridComponent } from './flat-grid/flat-grid.component';
import { NGXCKFilterPipe, NGXCkGridModule } from 'ngx-ck-grid';
@NgModule({
  declarations: [AppComponent, TreeGridComponent, FlatGridComponent],
  imports: [BrowserModule, NGXCkGridModule],
  providers: [NGXCKFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
