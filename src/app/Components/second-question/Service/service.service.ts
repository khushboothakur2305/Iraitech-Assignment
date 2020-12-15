import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  MainObject = [];

  constructor() {}
  getValue(Index) {
    if (this.MainObject.length > 0) {
      this.MainObject.map((res) => {
        if (res.key != `X{Index}`) {
          this.MainObject.push({
            key: `X${Index}`,
            value: [],
          });
        }
      });
    }
    if (this.MainObject.length == 0) {
      this.MainObject.push({
        key: `X${Index}`,
        value: [],
      });
    }
  }
  getyValue(index, data) {
    this.MainObject[index].value.push(data);
  }
}
