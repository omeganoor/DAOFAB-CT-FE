import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildListComponent } from './child-list/child-list.component';

const routes: Routes = [
  { path: '', component: ParentListComponent },
  { path: 'childs/:parentId', component: ChildListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
