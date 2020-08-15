import { Component, OnInit } from '@angular/core';
import { ImageApiService, APIResult, ImageResult } from '../image-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  searchTerm = '';
  loading = false;
  images$: Observable<string[]>;

  constructor(private imageAPIService: ImageApiService) { }

  ngOnInit(): void {}

  formSubmitted() {
    this.loading = true;
    this.images$ = this.imageAPIService.getImages(this.searchTerm);
    this.images$.subscribe((images: string[]) => {
        this.loading = false;   
      });
  }

}
