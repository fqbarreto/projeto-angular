import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      filmes: [
        {
          id: 1,
          name: 'Se beber, não case',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          rate: '8'
        },
        {
          id: 2,
          name: 'Se beber, não case',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          rate: '8'
        },
        {
          id: 3,
          name: 'Se beber, não case',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          price: '8'
        }
      ]
    };
  }
}