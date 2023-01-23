import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})
export class DonorComponent implements OnInit {
  form: {
    prefix: string,
    fname: string,
    lname: string,
    czid: string,
    dob: Date,
    sex: string,
    weight: number | null,
    address: string,
    province: number | null,
    district: number | null,
    subdistrict: number | null,
    mobile: string,
    email: string,
    occupation: string,
    old_prefix: string,
    old_fname: string,
    old_lname: string,
  } = {
      prefix: "",
      fname: "",
      lname: "",
      czid: "",
      dob: new Date(),
      sex: "",
      weight: null,
      address: "",
      province: null,
      district: null,
      subdistrict: null,
      mobile: "",
      email: "",
      occupation: "",
      old_prefix: "",
      old_fname: "",
      old_lname: "",
    }
  constructor() { }

  ngOnInit(): void {
  }

}
