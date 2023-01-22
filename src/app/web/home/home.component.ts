import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carousel_text: {
    title: string,
    description: string,
    subDescription: string
  }[] | [] = [
      {
        title: "Welcome to Bloodee",
        description: "For New User Please Register",
        subDescription: "Thank For Visiting Our Website"
      },
      {
        title: "Welcome to Bloodee2",
        description: "For New User Please Register2",
        subDescription: "Thank For Visiting Our Website2",
      },
      {
        title: "Welcome to Bloodee3",
        description: "For New User Please Register3",
        subDescription: "Thank For Visiting Our Website3",
      }
    ];
  carousel: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
