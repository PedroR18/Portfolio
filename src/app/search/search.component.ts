import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() windowEmitter = new EventEmitter<string>();

  openWindow() {
    this.windowEmitter.emit('window');
  }

  constructor() {}

  ngOnInit(): void {}
}
