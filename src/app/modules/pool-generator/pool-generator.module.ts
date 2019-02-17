import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PoolGeneratorComponent } from './pool-generator.component';

const routes: Routes = [
  {
    path: '',
    component: PoolGeneratorComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: [PoolGeneratorComponent]
})
export class PoolGeneratorModule { }
