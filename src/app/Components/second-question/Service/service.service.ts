import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  MainObject = [];

  constructor() {}
  getValue(Index) {
    if (this.MainObject.length <= Index) {
      this.MainObject.push({
        key: `X${Index}`,
        value: [],
      });
    }
  }
  getyValue(index, data) {
    this.MainObject[index].value.push(data);
  }

  sendJsonObject() {
    return this.MainObject;
  }
}
