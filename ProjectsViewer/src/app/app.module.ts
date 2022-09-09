import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { FormsModule } from '@angular/forms';
import { RawViewerComponent } from './components/raw-viewer/raw-viewer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProjectComponent,
    RawViewerComponent,
    HomeComponent,
    MenuBarComponent,
    DetailsComponent
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
