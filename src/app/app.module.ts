import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoadComponent } from './load/load.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { KonversionComponent } from './konversion/konversion.component';
import { ArchiveComponent } from './archive/archive.component';
import { HbdfListComponent } from './archive/hbdf-list/hbdf-list.component';
import { HbdfServiceService } from 'src/app/service/hbdf-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoadComponent,
    VisualisationComponent,
    KonversionComponent,
    ArchiveComponent,
    HbdfListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
