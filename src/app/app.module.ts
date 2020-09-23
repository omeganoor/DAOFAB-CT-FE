import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildListComponent } from './child-list/child-list.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ParentListComponent,
    ChildListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
