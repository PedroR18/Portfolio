import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
  icons = [
    'assets/Finder.png',
    'assets/Launchpad.png',
    'assets/Safari.png',
    'assets/Messages.png',
    'assets/Mail.png',
    'assets/Maps.png',
    'assets/Photos.png',
    'assets/FaceTime.png',
    'assets/Calendar.png',
    'assets/Contacts.png',
    'assets/Reminders.png',
    'assets/Notes.png',
    'assets/TV.png',
    'assets/Music.png',
    'assets/Podcasts.png',
    'assets/News.png',
    'assets/AppStore.png',
    'assets/Settings.png',
    '',
    'assets/Folder.png',
    'assets/Trash.png',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.icons, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit(): void {}
}
