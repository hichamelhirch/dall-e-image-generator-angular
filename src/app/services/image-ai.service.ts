import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {RequestImage} from "../model/image-request";
import {Observable} from "rxjs";
import {Image} from "../model/image-response";

@Injectable({
  providedIn: 'root'
})
export class ImageAIService {

  private dallEApiURL = "https://api.openai.com/v1"

  private bearerToken = "<your-api-key>";
  private organisation = '<your-org>'

  constructor(private http: HttpClient) {
  }

  public fetchImageByPrompt(requestImage: RequestImage): Observable<HttpResponse<Image>> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.bearerToken}`)
      .set('OpenAI-Organization', this.organisation);
    return this.http.post<Image>(`${this.dallEApiURL}/images/generations`, requestImage, {headers, observe: "response"});
  }
}
