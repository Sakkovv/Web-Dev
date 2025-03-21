import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`)
      .subscribe((data: any) => {
        this.photos = data;
      });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
