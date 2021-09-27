import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const testData = [
      { id: 1, name: 'test1' },
      { id: 1, name: 'test1' },
    ];
    return {testData};
  }
}
