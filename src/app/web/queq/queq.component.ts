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

  form: {
    prefix: string,
    fname: string,
    lname: string,
    czid: string,
    dob: Date | null,
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
      dob: null,
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
  form2: {
    q_1: boolean | null,
    q_2: boolean | null,
    q_3: boolean | null,
    q_4: boolean | null,
    q_5: boolean | null,
    q_6: boolean | null,
    q_7: boolean | null,
    q_8: boolean | null,
    q_9: boolean | null,
    q_10: boolean | null,
    q_11: boolean | null,
    q_12: boolean | null,
    q_13: boolean | null,
    q_14: boolean | null,
    q_15: boolean | null,
    q_16: boolean | null,
    q_17: boolean | null,
    q_18: boolean | null,
    q_19: boolean | null,
    q_20: boolean | null,
    q_21: boolean | null,
    q_22: boolean | null,
    q_23: boolean | null,
    q_24: boolean | null,
    q_25: boolean | null,
    q_26: boolean | null,
    q_27: boolean | null,
    q_28: boolean | null,
    q_29: boolean | null,
    q_30: boolean | null,
    q_31: boolean | null,
    q_32: boolean | null,
    q_33: boolean | null,
    q_34: boolean | null,
    q_35: boolean | null,
    q_36: boolean | null,
    q_37: boolean | null,
    q_5_detail: string,
    q_7_detail: string,
  } = {
      q_1: null,
      q_2: null,
      q_3: null,
      q_4: null,
      q_5: null,
      q_6: null,
      q_7: null,
      q_8: null,
      q_9: null,
      q_10: null,
      q_11: null,
      q_12: null,
      q_13: null,
      q_14: null,
      q_15: null,
      q_16: null,
      q_17: null,
      q_18: null,
      q_19: null,
      q_20: null,
      q_21: null,
      q_22: null,
      q_23: null,
      q_24: null,
      q_25: null,
      q_26: null,
      q_27: null,
      q_28: null,
      q_29: null,
      q_30: null,
      q_31: null,
      q_32: null,
      q_33: null,
      q_34: null,
      q_35: null,
      q_36: null,
      q_37: null,
      q_5_detail: '',
      q_7_detail: ''
    };
  provinces: {
    id: number,
    name_th: string,
    name_en: string,
  }[] = [];
  districts: {
    id: number,
    name_th: string,
    name_en: string,
  }[] = [];
  subdistricts: {
    id: number,
    name_th: string,
    name_en: string,
  }[] = [];
  nodes: {
    id: number,
    location_name: string,
  }[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.calldata();
    this.callProvince();
    this.callNode();
  }

  // call province from api
  callProvince() {
    this.userService.getProvince().subscribe({
      next: (data) => {
        this.provinces = data.province
      }
    })
  }
  callDistrict() {
    this.userService.getDistrict(this.form.province ? this.form.province : 0).subscribe({
      next: (data) => {
        this.districts = data.district
      }
    })
  }
  callSubDistrict() {
    this.userService.getSubDistrict(this.form.district ? this.form.district : 0).subscribe({
      next: (data) => {
        this.subdistricts = data.subdistrict
      }
    })
  }
  // call data from api
  calldata() {
    this.userService.getUserData().subscribe({
      next: (data) => {
      }
    })
  }
  // get node
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
  tick() {
    if (this.form2.q_1 != null && this.form2.q_2 != null && this.form2.q_3 != null && this.form2.q_4 != null && this.form2.q_5 != null && this.form2.q_6 != null && this.form2.q_7 != null && this.form2.q_8 != null && this.form2.q_9 != null && this.form2.q_10 != null && this.form2.q_11 != null && this.form2.q_12 != null && this.form2.q_13 != null && this.form2.q_14 != null && this.form2.q_15 != null && this.form2.q_16 != null && this.form2.q_17 != null && this.form2.q_18 != null && this.form2.q_19 != null && this.form2.q_20 != null && this.form2.q_21 != null && this.form2.q_22 != null && this.form2.q_23 != null && this.form2.q_24 != null && this.form2.q_25 != null && this.form2.q_26 != null && this.form2.q_27 != null && this.form2.q_28 != null && this.form2.q_29 != null && this.form2.q_30 != null && this.form2.q_31 != null && this.form2.q_32 != null && this.form2.q_33 != null && this.form2.q_34 != null && this.form2.q_35 != null && this.form2.q_36 != null && this.form2.q_37 != null) {
      return true;
    } else {
      return false;
    }
  }

  firstpagenext(stepper: MatStepper, form: NgForm) {
    form.form.markAllAsTouched();
    if (form.valid) {
      if (this.form.sex == '1') {
        this.form2.q_10 = false
        this.form2.q_11 = false
        this.form2.q_12 = false
      }
      stepper.next();
    }
  }
  // step next for form2
  next(stepper: MatStepper) {
    if (this.tick()) {
      stepper.next();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาตอบคำถามให้ครบถ้วน',
        showConfirmButton: false,
      })
    }
  }

}
