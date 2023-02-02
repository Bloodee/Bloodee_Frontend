import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-queq',
  templateUrl: './queq.component.html',
  styleUrls: ['./queq.component.scss']
})
export class QueqComponent implements OnInit {
  showed_data: {
    node_name: string,
    booking_date: Date,
  } = {
      node_name: '',
      booking_date: new Date(),
    }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.callData();
  }

  callData() {
    this.userService.getBooking().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.showed_data.node_name = data.booking[0].node.location_name;
          this.showed_data.booking_date = data.booking[0].booking_date;
        }
      }
    )
  }

}
