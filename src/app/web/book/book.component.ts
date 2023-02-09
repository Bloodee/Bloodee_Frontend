import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  form: {
    selectedDate: Date,
    node: string
  } =
    {
      selectedDate: new Date(),
      node: '',
    }
  startdate: Date = new Date();
  dateFilter = (date: Date): boolean => {
    // Not Before Today and Not Saturday and Sunday
    const day = date.getDay();
    return day !== 0 && day !== 6 && date > this.startdate;
  }

  nodes: {
    id: number,
    location_name: string,
  }[] = [];
  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.callNode();
    this.callData();
  }
  callNode() {
    this.userService.getNode().subscribe({
      next: (data) => {
        this.nodes = data.node.map((item: {
          id: number,
          location_name: string,
          url: string,
          description: string
        }) => {
          return {
            id: item.id,
            location_name: item.location_name
          }
        })

      }
    })
  }

  callData() {
    this.userService.getBooking().subscribe(
      {
        next: (data) => {
          this.form.selectedDate =
            new Date(data.booking[0].booking_date);
          this.form.node =
            data.booking[0].node_id;
        }

      }
    )
  }

  onSelect(event: any) {
    console.log(event);
    this.form.selectedDate = event;
  }
  book() {
    console.log("book");
    this.userService.updateBooking(
      this.form.node,
      this.form.selectedDate
    ).subscribe({
      next: (data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Appointment Created',
          showConfirmButton: true,
        }).then(() => {
          this.router.navigateByUrl('/que');
        })
      }
    })

  }
}
