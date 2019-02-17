import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameItemScrollerComponent } from './components/game-item-scroller/game-item-scroller.component';
import { HomeComponent } from './modules/home/home.component';

import { ApiService } from './shared/services/api.service';
import { TestDirectiveDirective } from './shared/directives/test-directive.directive';
import { SamplePipePipe } from './shared/pipes/sample-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    GameItemComponent,
    GameItemScrollerComponent,
    TestDirectiveDirective,
    SamplePipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
