import { Component, OnInit } from '@angular/core';
import { ServiceService } from './Service/service.service';

@Component({
  selector: 'app-second-question',
  templateUrl: './second-question.component.html',
  styleUrls: ['./second-question.component.scss'],
})
export class SecondQuestionComponent implements OnInit {
  userComponets = [];
  count = -1;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {}
  addComponents() {
    this.count = this.count + 1;
    console.log(this.count);
    this.service.getValue(this.count);
    this.userComponets.push('HEllo');
  }
}
