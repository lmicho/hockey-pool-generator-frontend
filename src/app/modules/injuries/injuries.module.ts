import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InjuriesComponent } from './injuries.component';

const routes: Routes = [
  {
    path: '',
    component: InjuriesComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: [InjuriesComponent]
})
export class InjuriesModule { }
