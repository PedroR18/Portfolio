import { Component, OnInit } from '@angular/core';

interface Icon {
  name: string;
  img: string;
}

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit {
  icons: Icon[] = [
    { name: 'Finder', img: 'assets/Finder.png' },
    { name: 'Launchpad', img: 'assets/Launchpad.png' },
    { name: 'Browser', img: 'assets/Safari.png' },
    { name: 'Messages', img: 'assets/Messages.png' },
    { name: 'Mail', img: 'assets/Mail.png' },
    { name: 'Maps', img: 'assets/Maps.png' },
    { name: 'Photos', img: 'assets/Photos.png' },
    { name: 'Facetime', img: 'assets/FaceTime.png' },
    { name: 'Calendar', img: 'assets/Calendar.png' },
    { name: 'Contacts', img: 'assets/Contacts.png' },
    { name: 'Reminders', img: 'assets/Reminders.png' },
    { name: 'Notes', img: 'assets/Notes.png' },
    { name: 'TV', img: 'assets/TV.png' },
    { name: 'Music', img: 'assets/Music.png' },
    { name: 'Podcasts', img: 'assets/Podcasts.png' },
    { name: 'News', img: 'assets/News.png' },
    { name: 'App Store', img: 'assets/AppStore.png' },
    { name: 'Settings', img: 'assets/Settings.png' },
    { name: 'divider', img: '' },
    { name: 'Folder', img: 'assets/Folder.png' },
    { name: 'Trash', img: 'assets/Trash.png' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
