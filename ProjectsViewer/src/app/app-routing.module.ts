import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { RawViewerComponent } from './components/raw-viewer/raw-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'raw',
    component: RawViewerComponent,
  },
  {
    path: 'page/:id',
    component: DetailsComponent,
  },
  {
    path: 'offlinePage/:oid',
    component: DetailsComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
