import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { FormsModule } from '@angular/forms';
import { RawViewerComponent } from './pages/raw-viewer/raw-viewer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DetailsComponent } from './pages/details/details.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InfoComponent } from './pages/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { SCTTMComponent } from './pages/specials/sct-tm/sct-tm.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        EditProjectComponent,
        RawViewerComponent,
        HomeComponent,
        MenuBarComponent,
        DetailsComponent,
        SettingsComponent,
        InfoComponent,
        FooterComponent,
        RedirectComponent,
        AchievementsComponent,
        SCTTMComponent,
        ArticleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
