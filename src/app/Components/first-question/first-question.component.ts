import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss'],
})
export class FirstQuestionComponent implements OnInit {
  constructor() {}
  NumberEntered = false;
  Result;
  Index;
  ngOnInit(): void {}
  OnSubmit(form: NgForm) {
    this.NumberEntered = true;
    this.Index = form.value.seriesNumber;
    if (this.Index % 2 == 0) {
      this.Result = this.Index * this.Index - 1;
    } else {
      this.Result = this.Index * this.Index + 1;
    }
    console.log(form.value.seriesNumber);
  }
}
