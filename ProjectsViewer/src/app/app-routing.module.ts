import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { RawViewerComponent } from './pages/raw-viewer/raw-viewer.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { SCTTMComponent } from './pages/specials/sct-tm/sct-tm.component';
import { ArticleComponent } from './pages/article/article.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/article/info' },
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
    },
    {
        path: 'special/sct-tm',
        component: SCTTMComponent,
    },
    {
        path: 'article',
        component: ArticleComponent,
    },
    {
        path: 'article/info',
        component: InfoComponent,
    },
    {
        path: 'article/:name',
        component: ArticleComponent,
    },
    {
        path: '**',
        component: SCTTMComponent,
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
