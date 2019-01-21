import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameItemScrollerComponent } from './components/game-item-scroller/game-item-scroller.component';

import { ApiService } from './shared/services/api.service';
import { TestDirectiveDirective } from './shared/directives/test-directive.directive';
import { SamplePipePipe } from './shared/pipes/sample-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GameItemComponent,
    GameItemScrollerComponent,
    TestDirectiveDirective,
    SamplePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
