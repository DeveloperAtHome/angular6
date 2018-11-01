import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public Person: object = {
    firstName: 'Giannis',
    lastName: 'Antetokounmpo',
    age: '23'
  };

  public comment = '';
  public showComments : boolean = false;
  constructor() {
  /*comment123*/
   }

  ngOnInit() {
  }

  postComment() {
    this.showComments = true;
  }

}
