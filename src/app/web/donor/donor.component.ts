import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

// Page สำหรับ ลงทะเบียนบริจาคเลือด ล่วงหน้า (Reserve Donor) ยังไม่จองคิว

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.scss']
})

export class DonorComponent implements OnInit {
  form: {
    pname: string,
    fname: string,
    mname: string,
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
    old_pname: string,
    old_fname: string,
    old_mname: string,
    old_lname: string,
  } = {
      pname: "",
      fname: "",
      mname: '',
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
      old_pname: "",
      old_fname: "",
      old_mname: "",
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
    node: string,
    package_id: string,
    approve: boolean,
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
      q_7_detail: '',
      node: '',
      package_id: '0',
      approve: false,
    };
  bloodCenter: {
    id: number,
    name: string,
  }[] = []
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
  package_list: {
    id: number,
    name: string,
    price: number,
    full_price: number,
    checked: boolean
  }[] = []
  total_price: number = 0;
  constructor(private router: Router, private userService: UserService,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.calldata();
    this.callProvince();
    this.callNode();
    this.callHealth();
    this.callReserve();
    if (!this.tokenService.isSignIn()) {
      this.router.navigate(['/login']);
    }
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
        this.form.pname = data.userdata.pname
        this.form.fname = data.userdata.fname
        this.form.mname = data.userdata.mname
        this.form.lname = data.userdata.sname
        this.form.czid = data.userdata.czid
        this.form.dob = data.userdata.dob
        this.form.sex = data.userdata.sex.toString();
        this.form.weight = data.userdata.weight
        this.form.address = data.userdata.addr
        this.form.province = data.userdata.subdistricts.districts.provinces.id;
        this.form.district = data.userdata.subdistricts.districts.id;
        this.form.subdistrict = data.userdata.subdistricts.id;
        this.form.mobile = data.userdata.mobile
        this.form.email = data.userdata.email
        this.form.occupation = data.userdata.occupation
        this.form.old_pname = data.userdata.old_pname
        this.form.old_fname = data.userdata.old_fname
        this.form.old_mname = data.userdata.old_mname
        this.form.old_lname = data.userdata.old_lname
        // wait after set province
        setTimeout(() => {
          this.callDistrict();
          this.callSubDistrict();
        }, 1000);
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

  callHealth() {
    this.userService.getHealthCheck().subscribe({
      next: (data) => {
        this.package_list = data.healthchecklists.map((item: {
          id: number,
          healthcheck_name: string,
          healthcheck_price: number,
          healthcheck_fullprice: number,
        }) => {
          return {
            id: item.id,
            name: item.healthcheck_name,
            price: item.healthcheck_price,
            full_price: item.healthcheck_fullprice,
            checked: false
          }
        })
      }
    })
  }

  callReserve() {
    // getReserve
    this.userService.getReserve().subscribe({
      next: (data) => {
        this.form2.q_1 = data.reserve.q1
        this.form2.q_2 = data.reserve.q2
        this.form2.q_3 = data.reserve.q3
        this.form2.q_4 = data.reserve.q4
        this.form2.q_5 = data.reserve.q5
        this.form2.q_6 = data.reserve.q6
        this.form2.q_7 = data.reserve.q7
        this.form2.q_8 = data.reserve.q8
        this.form2.q_9 = data.reserve.q9
        this.form2.q_10 = data.reserve.q10
        this.form2.q_11 = data.reserve.q11
        this.form2.q_12 = data.reserve.q12
        this.form2.q_13 = data.reserve.q13
        this.form2.q_14 = data.reserve.q14
        this.form2.q_15 = data.reserve.q15
        this.form2.q_16 = data.reserve.q16
        this.form2.q_17 = data.reserve.q17
        this.form2.q_18 = data.reserve.q18
        this.form2.q_19 = data.reserve.q19
        this.form2.q_20 = data.reserve.q20
        this.form2.q_21 = data.reserve.q21
        this.form2.q_22 = data.reserve.q22
        this.form2.q_23 = data.reserve.q23
        this.form2.q_24 = data.reserve.q24
        this.form2.q_25 = data.reserve.q25
        this.form2.q_26 = data.reserve.q26
        this.form2.q_27 = data.reserve.q27
        this.form2.q_28 = data.reserve.q28
        this.form2.q_29 = data.reserve.q29
        this.form2.q_30 = data.reserve.q30
        this.form2.q_31 = data.reserve.q31
        this.form2.q_32 = data.reserve.q32
        this.form2.q_33 = data.reserve.q33
        this.form2.q_34 = data.reserve.q34
        this.form2.q_35 = data.reserve.q35
        this.form2.q_36 = data.reserve.q36
        this.form2.q_37 = data.reserve.q37
        this.form2.q_5_detail = data.reserve.q_5_detail
        this.form2.q_7_detail = data.reserve.q_7_detail
        console.log(data);
        console.log(data.reserve.user_healthcheck_selection_user_healthcheck_selection_reserve_idToreserve_id);
        this.package_list.forEach((item: {
          id: number,
          name: string,
          price: number,
          full_price: number,
          checked: boolean
        }) => {
          data.reserve.user_healthcheck_selection_user_healthcheck_selection_reserve_idToreserve_id.map((item2: {
            lab_select: number
          }) => {
            if (item.id == item2.lab_select) {
              item.checked = true
            }
          })
        })
        this.update_price();
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
  update_price() {
    this.total_price = this.package_list.filter((item: {
      id: number,
      name: string,
      price: number,
      checked: boolean
    }) => item.checked).reduce((total: number, item: {
      id: number,
      name: string,
      price: number,
      checked: boolean
    }) => total + item.price, 0);
  }

  firstpagenext(stepper: MatStepper, form: NgForm) {
    form.form.markAllAsTouched();
    if (form.valid) {
      if (this.form.sex == '1') {
        this.form2.q_10 = false;
        this.form2.q_11 = false;
        this.form2.q_12 = false;
      }
      stepper.next();
    }
  }
  // step next for form2
  next(stepper: MatStepper) {
    if (this.tick()) {
      window.scrollTo(0, 0);
      stepper.next();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please Answer All Question',
        showConfirmButton: false,
      })
    }
  }
  next2(stepper: MatStepper) {
    if (this.form2.node) {
      window.scrollTo(0, 0);
      stepper.next();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please Choose Blood Donation Center',
        showConfirmButton: false,
      })
    }
  }
  confirmed() {
    // form var for send to api
    if (this.form2.approve == true) {
      this.userService.postReserve(
        this.form.czid,
        this.form.pname,
        this.form.fname,
        this.form.mname,
        this.form.lname,
        this.form.dob ? this.form.dob : new Date(),
        this.form.weight ? this.form.weight : 0,
        this.form.subdistrict ? this.form.subdistrict : 0,
        this.form.address,
        this.form.sex,
        this.form.mobile,
        this.form.email,
        this.form.occupation,
        this.form.old_pname,
        this.form.old_fname,
        this.form.old_lname,
        this.form.old_mname,
        this.form2.q_1 ? this.form2.q_1 : false,
        this.form2.q_2 ? this.form2.q_2 : false,
        this.form2.q_3 ? this.form2.q_3 : false,
        this.form2.q_4 ? this.form2.q_4 : false,
        this.form2.q_5 ? this.form2.q_5 : false,
        this.form2.q_6 ? this.form2.q_6 : false,
        this.form2.q_7 ? this.form2.q_7 : false,
        this.form2.q_8 ? this.form2.q_8 : false,
        this.form2.q_9 ? this.form2.q_9 : false,
        this.form2.q_10 ? this.form2.q_10 : false,
        this.form2.q_11 ? this.form2.q_11 : false,
        this.form2.q_12 ? this.form2.q_12 : false,
        this.form2.q_13 ? this.form2.q_13 : false,
        this.form2.q_14 ? this.form2.q_14 : false,
        this.form2.q_15 ? this.form2.q_15 : false,
        this.form2.q_16 ? this.form2.q_16 : false,
        this.form2.q_17 ? this.form2.q_17 : false,
        this.form2.q_18 ? this.form2.q_18 : false,
        this.form2.q_19 ? this.form2.q_19 : false,
        this.form2.q_20 ? this.form2.q_20 : false,
        this.form2.q_21 ? this.form2.q_21 : false,
        this.form2.q_22 ? this.form2.q_22 : false,
        this.form2.q_23 ? this.form2.q_23 : false,
        this.form2.q_24 ? this.form2.q_24 : false,
        this.form2.q_25 ? this.form2.q_25 : false,
        this.form2.q_26 ? this.form2.q_26 : false,
        this.form2.q_27 ? this.form2.q_27 : false,
        this.form2.q_28 ? this.form2.q_28 : false,
        this.form2.q_29 ? this.form2.q_29 : false,
        this.form2.q_30 ? this.form2.q_30 : false,
        this.form2.q_31 ? this.form2.q_31 : false,
        this.form2.q_32 ? this.form2.q_32 : false,
        this.form2.q_33 ? this.form2.q_33 : false,
        this.form2.q_34 ? this.form2.q_34 : false,
        this.form2.q_35 ? this.form2.q_35 : false,
        this.form2.q_36 ? this.form2.q_36 : false,
        this.form2.q_37 ? this.form2.q_37 : false,
        this.form2.q_5_detail,
        this.form2.q_7_detail,
        // health package
        [{ id: parseInt(this.form2.package_id) }]

      ).subscribe({
        next: (data) => {
          if (data.status) {
            Swal.fire({
              icon: 'success',
              title: 'Thank you',
              text: 'Please present your ID card at the counter',
              showConfirmButton: true,
            }).then(() => {
              this.router.navigate(['/'])
            })
          }
        },
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please Approve',
        showConfirmButton: false,
      })
    }
  }

}
