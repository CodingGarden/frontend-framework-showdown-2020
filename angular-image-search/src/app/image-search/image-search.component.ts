import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageApiService } from '../services/image-api.service';
import { Image } from '../models/image.model';

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  loading = false;
  images: Image[];

  constructor(private imageAPIService: ImageApiService) { }

  ngOnInit(): void { }

  formSubmitted(searchForm: NgForm) {
    this.loading = true;
    const searchTerm = searchForm.value.searchTerm;

    this.imageAPIService.getImages(searchTerm)
      .subscribe((images: Image[]) => {
        this.images = images;
        this.loading = false;
      });
  }

}
