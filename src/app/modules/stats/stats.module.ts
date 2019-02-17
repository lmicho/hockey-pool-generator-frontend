import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './stats.component';

const routes: Routes = [
  {
    path: '',
    component: StatsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
