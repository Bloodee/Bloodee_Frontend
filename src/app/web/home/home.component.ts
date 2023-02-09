import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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
  homeshow: number = 1;
  carousel: number = 0;
  check_register: boolean = false;
  check_appointment: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.callRegister();
    this.callAppoint();
  }

  callRegister() {
    this.userService.getReserve().subscribe({
      next: data => {
        var reserve_date = new Date(data.reserve.created_at);
        var today = new Date();
        var yesterday = new Date(today.setDate(today.getDate() - 1));
        if (data.status && reserve_date > yesterday) {
          this.check_register = true;
        }
      }
    })
  }


  callAppoint() {
    this.userService.getBooking().subscribe({
      next: data => {
        var book_date = new Date(data.booking[0].booking_date);
        if (data.status && book_date > new Date()) {
          this.check_appointment = true;
        }

      }
    })
  }

}
