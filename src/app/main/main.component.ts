import { Person } from './../models/Person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public currentUser: Person;
  public comments: string[];
  public showComments: boolean;
  public currentComment: string;
  constructor() {

   }

  ngOnInit() {
    this.currentUser = new Person('Nikola', 'Vujkovic', 24);
    this.comments = [];
    this.showComments = false;
    this.currentComment = '';
  }

  public addComment(): void {
    this.comments.push(this.currentComment);
    this.currentComment = '';
    this.showComments = true;
  }

}
