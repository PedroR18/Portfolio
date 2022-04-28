import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.time = this.capitalizeDate(
      moment(new Date()).format('ddd d MMM h:mm')
    );
  }

  ngOnInit(): void {}
}
