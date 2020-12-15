import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-ycomponent',
  templateUrl: './ycomponent.component.html',
  styleUrls: ['./ycomponent.component.scss'],
})
export class YComponentComponent implements OnInit {
  @Input() mainComponet: string;

  constructor(private service: ServiceService) {}
  index;
  userData = [];
  ngOnInit(): void {}
  onAdd(data) {
    console.log(data);
    console.log(this.mainComponet);
    this.service.getyValue(this.mainComponet, data);
  }
}
