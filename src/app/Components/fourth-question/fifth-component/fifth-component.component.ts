import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fifth-component',
  templateUrl: './fifth-component.component.html',
  styleUrls: ['./fifth-component.component.scss'],
})
export class FifthComponentComponent implements OnInit {
  @Output() iteamName = new EventEmitter<string>();
  onChnage(event) {
    // this.service.setVaribale(this.TextTransfered);
    this.iteamName.emit(event.target.value);
    console.log('Hello');
  }
  constructor() {}

  ngOnInit(): void {}
}
