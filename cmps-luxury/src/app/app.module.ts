import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './core/page/page.component';

@NgModule({
  declarations: [AppComponent, PageComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
