import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-question',
  templateUrl: './third-question.component.html',
  styleUrls: ['./third-question.component.scss'],
})
export class ThirdQuestionComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  show;
  MobileNumber = [
    {
      name: 'phoneNumber1',
      number: '',
    },
  ];
  onChange(event, index) {
    this.MobileNumber[index].number = event.target.value;
  }
  AddNumberField() {
    const count = this.MobileNumber.length;
    count + 1;
    this.MobileNumber.push({
      name: 'phoneNumber' + count,
      number: '',
    });
  }
  deleteFiled(i) {
    this.MobileNumber.splice(i, 1);
  }
  showDetails() {
    this.show = !this.show;
    console.log(this.MobileNumber);
  }
}
