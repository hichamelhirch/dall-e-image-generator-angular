import {Component, OnInit} from '@angular/core';
import {ImageAIService} from "../../services/image-ai.service";
import {RequestImage} from "../../model/image-request";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-image-ai',
  standalone: true,
  imports: [],
  templateUrl: './image-ai.component.html',
  styleUrl: './image-ai.component.scss'
})
export class ImageAIComponent implements OnInit{
  public generateImage='';
  constructor(private imageAIService:ImageAIService) {
  }
  ngOnInit(): void {
    const requestIamge:RequestImage={
      prompt:' A cute cat',
      n:1,
      size: '256x256'
    }
    this.imageAIService
      .fetchImageByPrompt(requestIamge)
      .pipe(
        map(resp=>resp.body),
        map(image=>image!.data),
        filter(images=>images.length!=0)
      )
      .subscribe(images=>{
        this.generateImage=images[0].url;
      });

  }

}
