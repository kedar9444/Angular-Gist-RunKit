import { NgModule } from '@angular/core';
import { NgxGistRunkitComponent } from './components/ngx-gist-runkit.component';
import { NgxGistRunkitService } from './services/ngx-gist-runkit.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [NgxGistRunkitComponent],
  providers: [NgxGistRunkitService],
  exports: [
    NgxGistRunkitComponent
  ]
})
export class NgxGistRunkitModule { }
