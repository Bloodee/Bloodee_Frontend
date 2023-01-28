import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const Main_API = "http://localhost:8080/api/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private token: TokenStorageService) {
  }

  getUserData(): Observable<any> {
    return this.http.get(Main_API + 'user/get', httpOptions);
  }
  getProvince(): Observable<any> {
    return this.http.get(Main_API + 'province/get', httpOptions);
  }
  getDistrict(province_id: number): Observable<any> {
    return this.http.get(Main_API + 'district/get/' + province_id, httpOptions);
  }
  getSubDistrict(district_id: number): Observable<any> {
    return this.http.get(Main_API + 'subdistrict/get/' + district_id, httpOptions);
  }
  getNode(): Observable<any> {
    return this.http.get(Main_API + 'node/get', httpOptions);
  }

  // Post Reserve
  postReserve(
    czid: string,
    pname: string,
    fname: string,
    mname: string,
    sname: string,
    dob: Date,
    weight: number,
    subdistrict_id: number,
    addr: string,
    sex : string,
    mobile: string,
    email: string,
    occupation: string,
    old_pname: string,
    old_fname: string,
    old_sname: string,
    old_mname: string,
    q1: boolean | null,
    q2: boolean | null,
    q3: boolean | null,
    q4: boolean | null,
    q5: boolean | null,
    q6: boolean | null,
    q7: boolean | null,
    q8: boolean | null,
    q9: boolean | null,
    q10: boolean | null,
    q11: boolean | null,
    q12: boolean | null,
    q13: boolean | null,
    q14: boolean | null,
    q15: boolean | null,
    q16: boolean | null,
    q17: boolean | null,
    q18: boolean | null,
    q19: boolean | null,
    q20: boolean | null,
    q21: boolean | null,
    q22: boolean | null,
    q23: boolean | null,
    q24: boolean | null,
    q25: boolean | null,
    q26: boolean | null,
    q27: boolean | null,
    q28: boolean | null,
    q29: boolean | null,
    q30: boolean | null,
    q31: boolean | null,
    q32: boolean | null,
    q33: boolean | null,
    q34: boolean | null,
    q35: boolean | null,
    q36: boolean | null,
    q37: boolean | null,
    q_5_detail: string,
    q_7_detail: string,
  ): Observable<any> {
    return this.http.post(Main_API + 'reserve/create', {
      czid,
      pname,
      fname,
      mname,
      sname,
      dob,
      weight,
      subdistrict_id,
      addr,
      sex,
      mobile,
      email,
      occupation,
      old_pname,
      old_fname,
      old_sname,
      old_mname,
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      q11,
      q12,
      q13,
      q14,
      q15,
      q16,
      q17,
      q18,
      q19,
      q20,
      q21,
      q22,
      q23,
      q24,
      q25,
      q26,
      q27,
      q28,
      q29,
      q30,
      q31,
      q32,
      q33,
      q34,
      q35,
      q36,
      q37,
      q_5_detail,
      q_7_detail,
    }, httpOptions)
  }
}
