import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoadComponent} from './load/load.component';
import {KonversionComponent} from './konversion/konversion.component';
import {ArchiveComponent} from './archive/archive.component';
import {VisualisationComponent} from './visualisation/visualisation.component';
import {HbdfListComponent} from './archive/hbdf-list/hbdf-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'load', component: LoadComponent},
  { path: 'conversion', component: KonversionComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'archive/hbdfs', component: HbdfListComponent },
  { path: 'visualisation', component: VisualisationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
