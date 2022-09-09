import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { RawViewerComponent } from './components/raw-viewer/raw-viewer.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'page/:pageNumber',
    component: HomeComponent,
  },
  {
    path: 'r/:pageNumber',
    component: RedirectComponent,
  },
  {
    path: 'r',
    component: RedirectComponent,
  },
  {
    path: 'r/p/:page',
    component: RedirectComponent,
  },
  {
    path: 'raw',
    component: RawViewerComponent,
  },
  {
    path: 'project/:id',
    component: DetailsComponent,
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
  },
  {
    path: 'offlineProject/:oid',
    component: DetailsComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
