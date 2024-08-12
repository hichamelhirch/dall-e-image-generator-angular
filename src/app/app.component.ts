import { Component } from '@angular/core';
import { ImageAIComponent } from './components/image-ai/image-ai.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ImageAIComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dall-e-http-client';
}
