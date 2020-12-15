import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
@Component({
  selector: 'app-xcomponent',
  templateUrl: './xcomponent.component.html',
  styleUrls: ['./xcomponent.component.scss'],
})
export class XComponentComponent implements OnInit {
  constructor(private service: ServiceService) {}
  @Input() componentCount;
  ycomponents = [];
  ngOnInit(): void {}
  addYComponents() {
    console.log(this.componentCount);
    this.service.getValue(this.componentCount);
    this.ycomponents.push('Hello');
  }
}
