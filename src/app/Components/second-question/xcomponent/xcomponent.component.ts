import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-xcomponent',
  templateUrl: './xcomponent.component.html',
  styleUrls: ['./xcomponent.component.scss'],
})
export class XComponentComponent implements OnInit {
  constructor() {}
  @Input() componentCount;
  ycomponents = [];
  ngOnInit(): void {}
  addYComponents() {
    this.ycomponents.push('Hello');
  }
}
