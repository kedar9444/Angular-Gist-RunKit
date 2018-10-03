import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGistRunkitComponent } from './ngx-gist-runkit.component';

describe('NgxGistRunkitComponent', () => {
  let component: NgxGistRunkitComponent;
  let fixture: ComponentFixture<NgxGistRunkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGistRunkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGistRunkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
