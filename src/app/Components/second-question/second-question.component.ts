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
  JsonObject;
  showJson = false;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {}
  addComponents() {
    this.count = this.count + 1;
    this.service.getValue(this.count);
    this.userComponets.push('HEllo');
  }
  getJson() {
    this.showJson = !this.showJson;
    this.JsonObject = this.service.sendJsonObject();
  }
}
