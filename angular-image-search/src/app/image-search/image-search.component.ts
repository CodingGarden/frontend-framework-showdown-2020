import { Component, OnInit } from '@angular/core';
import { ImageApiService, APIResult, ImageResult } from '../image-api.service';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  searchTerm = '';
  loading = false;
  images: string[] = [];

  constructor(private imageAPIService: ImageApiService) { }

  ngOnInit(): void {}

  formSubmitted() {
    this.images = [];
    this.loading = true;
    this.imageAPIService.getImages(this.searchTerm)
      .subscribe((images: string[]) => {
        this.images = images;
        this.loading = false;   
      });
  }

}
