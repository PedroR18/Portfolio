import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment/moment';
import 'moment/locale/pt';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  time: string[];

  capitalizeDate(str: string): string[] {
    let sentence: string[] = [];

    str.split(' ').forEach((word) => {
      const lower = word.toLowerCase();
      sentence.push(word.charAt(0).toUpperCase() + lower.slice(1));
    });

    return sentence;
  }

  @Output() windowStatusEmitter = new EventEmitter<string>();

  setWindowStatus(str: string) {
    this.windowStatusEmitter.emit(str);
  }

  @Output() notificationEmitter = new EventEmitter<boolean>();

  showNotification() {
    this.notificationEmitter.emit(true);
    setTimeout(() => this.notificationEmitter.emit(false), 5000);
  }

  constructor() {
    this.time = this.capitalizeDate(
      moment(new Date()).format('ddd D MMM h:mm')
    );
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = this.capitalizeDate(
        moment(new Date()).format('ddd D MMM H:mm')
      );
    }, 10000);
  }
}
