import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
  icons = [
    'assets/Finder.webp',
    'assets/Launchpad.webp',
    'assets/Safari.webp',
    'assets/Messages.webp',
    'assets/Mail.webp',
    'assets/Maps.webp',
    'assets/Photos.webp',
    'assets/FaceTime.webp',
    'assets/Calendar.webp',
    'assets/Contacts.webp',
    'assets/Reminders.webp',
    'assets/Notes.webp',
    'assets/TV.webp',
    'assets/Music.webp',
    'assets/Podcasts.webp',
    'assets/News.webp',
    'assets/AppStore.webp',
    'assets/Settings.webp',
    '',
    'assets/Folder.webp',
    'assets/Trash.webp',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.icons, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit(): void {}
}
