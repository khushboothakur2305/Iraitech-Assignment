import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.scss'],
})
export class FourthComponentComponent implements OnInit {
  @Input() sendData: string;

  constructor() {}

  ngOnInit(): void {}
}
