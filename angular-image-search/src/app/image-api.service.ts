import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'https://nature-image-api.now.sh/search?q=';

export interface ImageResult {
  image: string;
}

export interface APIResult {
  images: ImageResult[];
}

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  constructor(private http: HttpClient) { }

  getImages(searchTerm): Observable<string[]> {
    return this.http.get<APIResult>(`${API_URL}${searchTerm}`)
      .pipe(map(({ images }) => images.map(({ image }: ImageResult) => image)));
  }
}
