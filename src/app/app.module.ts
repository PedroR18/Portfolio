import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DockComponent } from './dock/dock.component';
import { DockIconComponent } from './dock-icon/dock-icon.component';
import { SearchComponent } from './search/search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InfoComponent } from './info/info.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    DockComponent,
    DockIconComponent,
    SearchComponent,
    InfoComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
