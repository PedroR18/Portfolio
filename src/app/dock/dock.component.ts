import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
  iconsFull = [
    'assets/Finder.webp',
    'assets/Launchpad.webp',
    'assets/Safari.webp',
    'assets/Messages.webp',
    'assets/Mail.webp',
    'assets/Photos.webp',
    'assets/FaceTime.webp',
    'assets/Calendar.webp',
    'assets/Contacts.webp',
    'assets/TV.webp',
    'assets/Music.webp',
    'assets/AppStore.webp',
    'assets/Settings.webp',
    '',
    'assets/Folder.webp',
    'assets/Trash.webp',
  ];

  iconsMd = [
    'assets/Finder.webp',
    'assets/Launchpad.webp',
    'assets/Safari.webp',
    'assets/Messages.webp',
    'assets/Mail.webp',
    'assets/Photos.webp',
    'assets/FaceTime.webp',
    'assets/AppStore.webp',
    'assets/Settings.webp',
    '',
    'assets/Folder.webp',
    'assets/Trash.webp',
  ];

  iconsSm = [
    'assets/Finder.webp',
    'assets/Safari.webp',
    'assets/Messages.webp',
    'assets/Mail.webp',
    'assets/Photos.webp',
    'assets/FaceTime.webp',
    'assets/AppStore.webp',
    'assets/Settings.webp',
  ];

  activeIcons =
    window.innerWidth > 1050
      ? this.iconsFull
      : window.innerWidth > 800
      ? this.iconsMd
      : this.iconsSm;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.activeIcons, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 1050) {
      this.activeIcons = this.iconsFull;
    } else if (window.innerWidth > 800) {
      this.activeIcons = this.iconsMd;
    } else if (window.innerWidth > 600) {
      this.activeIcons = this.iconsSm;
    }
  }

  ngOnInit(): void {}
}
