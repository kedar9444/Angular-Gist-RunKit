import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxGistRunkitModule } from './ngx-gist-runkit/ngx-gist-runkit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGistRunkitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
