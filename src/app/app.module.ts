import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { MaterialModule } from './material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameItemScrollerComponent } from './components/game-item-scroller/game-item-scroller.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ApiService } from './shared/services/api.service';
import { TestDirectiveDirective } from './shared/directives/test-directive.directive';
import { SamplePipePipe } from './shared/pipes/sample-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SearchBarComponent,
    GameItemComponent,
    GameItemScrollerComponent,
    TestDirectiveDirective,
    SamplePipePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    SearchBarComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
