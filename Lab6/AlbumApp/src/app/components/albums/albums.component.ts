import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // При загрузке компонента — запрос на сервер
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  openAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
