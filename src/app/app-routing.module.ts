import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pool-generator',
    loadChildren: './modules/pool-generator/pool-generator.module#PoolGeneratorModule'
  },
  {
    path: 'stats',
    loadChildren: './modules/stats/stats.module#StatsModule'
  },
  {
    path: 'standings',
    loadChildren: './modules/standings/standings.module#StandingsModule'
  },
  {
    path: 'schedule',
    loadChildren: './modules/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'players',
    loadChildren: './modules/players/players.module#PlayersModule'
  },
  {
    path: 'injuries',
    loadChildren: './modules/injuries/injuries.module#InjuriesModule'
  },
  {
    path: 'teams',
    loadChildren: './modules/teams/teams.module#TeamsModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
