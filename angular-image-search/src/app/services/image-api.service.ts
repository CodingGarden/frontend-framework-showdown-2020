import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Image } from '../models/image.model';

const API_URL = 'https://nature-image-api.now.sh/search?q=';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  constructor(private http: HttpClient) { }

  getImages(searchTerm: string): Observable<Image[]> {
    return this.http.get<any>(`${API_URL}${searchTerm}`).pipe(
      map(res => res.images)
    );
  }
}
