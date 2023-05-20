import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comonets/header/header.component';
import { FooterComponent } from './comonets/footer/footer.component';
import { AboutComponent } from './components/page/about/about.component';
import { HomeComponent } from './components/page/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, AboutComponent, HomeComponent, NewMomentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
