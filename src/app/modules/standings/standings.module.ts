import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StandingsComponent } from './standings.component';

const routes: Routes = [
  {
    path: '',
    component: StandingsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [StandingsComponent]
})
export class StandingsModule { }

