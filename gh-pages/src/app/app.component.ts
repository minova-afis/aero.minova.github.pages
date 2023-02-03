import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarkdownLoaderService } from './markdown-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gh-pages';

  constructor(private markdownLoader: MarkdownLoaderService) {}
}
