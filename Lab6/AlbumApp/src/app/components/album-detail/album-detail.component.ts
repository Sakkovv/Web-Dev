import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  albumId!: number;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbum(this.albumId).subscribe(data => {
      this.album = data;
      this.editedTitle = data.title;
    });
  }

  save(): void {
    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumsService.updateAlbum(this.albumId, updatedAlbum).subscribe(() => {
      this.album.title = this.editedTitle;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  goToPhotos(): void {
    this.router.navigate(['/albums', this.albumId, 'photos']);
  }
}
