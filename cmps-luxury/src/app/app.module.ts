import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PageComponent } from './core/page/page.component';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
