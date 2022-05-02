import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DockComponent } from './dock/dock.component';
import { DockIconComponent } from './dock-icon/dock-icon.component';
import { SearchComponent } from './search/search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainWindowComponent } from './main-window/main-window.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DockComponent,
    DockIconComponent,
    SearchComponent,

    MainWindowComponent,
    ProjectShowcaseComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
