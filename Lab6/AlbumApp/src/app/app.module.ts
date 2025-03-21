// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Импорт главного компонента
import { AppComponent } from './app.component';

// Импортируем AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

// Импортируем наши компоненты
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

// Если используете сервис, достаточно чтобы он был в @Injectable({ providedIn: 'root' })
// или прописан в providers массива
import { AlbumsService } from './services/albums.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumPhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule  // <-- Подключаем маршрутизацию
  ],
  providers: [
    // Если нужно явно прописать сервис (обычно достаточно providedIn: 'root')
    // AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 