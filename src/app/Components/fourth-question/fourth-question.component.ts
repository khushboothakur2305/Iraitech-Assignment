import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-question',
  templateUrl: './fourth-question.component.html',
  styleUrls: ['./fourth-question.component.scss'],
})
export class FourthQuestionComponent implements OnInit {
  constructor() {}
  Value;
  ngOnInit(): void {}
  addItem(data) {
    this.Value = data;
  }
}
