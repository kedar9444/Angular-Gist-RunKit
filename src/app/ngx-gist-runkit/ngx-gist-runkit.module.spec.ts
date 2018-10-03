import { NgxGistRunkitModule } from './ngx-gist-runkit.module';

describe('NgxGistRunkitModule', () => {
  let ngxGistRunkitModule: NgxGistRunkitModule;

  beforeEach(() => {
    ngxGistRunkitModule = new NgxGistRunkitModule();
  });

  it('should create an instance', () => {
    expect(ngxGistRunkitModule).toBeTruthy();
  });
});
