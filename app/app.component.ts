import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Какие-то люди';
  peopleArr: {status: string, code: number,
    total: number, data: {id: number, firstname: string, lastname: string}[]
  } = {
    "status": "OK",
    "code": 200,
    "total": 100,
    "data": [
      {
        "id": 1,
        "firstname": "Shayna",
        "lastname": "Will"
    }, {
        "id": 2,
        "firstname": "Lonzo",
        "lastname": "Metz"
    }, {
        "id": 3,
        "firstname": "Ronny",
        "lastname": "Stroman"
        }
    ]
  };
  deleteById(id: number){
    this.peopleArr.data.splice(id, 1)
  }
}
