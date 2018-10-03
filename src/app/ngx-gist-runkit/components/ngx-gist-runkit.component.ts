import { ViewChild, Component, AfterViewInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxGistRunkitService } from '../services/ngx-gist-runkit.service';

@Component({
  selector: 'app-ngx-gist-runkit',
  templateUrl: './ngx-gist-runkit.component.html',
})
export class NgxGistRunkitComponent implements AfterViewInit {
  @ViewChild('runKit') embed;
  @Input() gistId = undefined;
  @Input() gistFileName = undefined;

  constructor(
    private http: HttpClient,
    private ngxGistRunkitService: NgxGistRunkitService
  ) {}
  notebook: any;
  ngAfterViewInit() {
    if (
      window['RunKit'] &&
      this.gistId !== undefined &&
      this.gistFileName !== undefined
    ) {
      const runKit = window['RunKit'];
      this.fetchGithubGist(runKit, this.gistId, this.gistFileName);
    } else {
      this.ngxGistRunkitService.loadScript().subscribe((gistData: any) => {
        const runKit = window['RunKit'];
        this.fetchGithubGist(runKit, this.gistId, this.gistFileName);
      });
    }
  }

  public createNotebook(runKit, data) {
    this.notebook = window['RunKit'].createNotebook({
      element: this.embed.nativeElement,
      source: data
    });
  }

  public fetchGithubGist(runKit, gistId, fileName) {
    this.http
      .get('https://api.github.com/gists/' + gistId)
      .subscribe(response => {
        if (response) {
          this.createNotebook(runKit, response['files'][fileName].content);
        }
      });
  }
}
