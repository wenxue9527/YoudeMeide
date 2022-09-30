import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {NameslistService} from '../../services/nameslist.service';
interface ItemData {
  id: number;
  name: string;
  gender: number;
  phone: number;
  email: number;
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {


  constructor(public http:HttpClient,private names:NameslistService) { }
  userkey ="";
  passwordkey="";
  genderkey ="";
  phonekey ="";
  emailkey ="";
  gender = 0;
  phone = 0;
  email = 0;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();
  selectData:ItemData[] = [];
  count(){
    let gender = 0;
    let phone = 0;
    let email = 0;
    this.listOfData.forEach(item=>{
      gender += item.gender
      phone += item.phone
      email += item.email
    })
    this.gender = gender
    this.phone = phone
    this.email = email
  }
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    console.log(id)
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    if(checked){
      this.selectData.push(this.names.todaynameslist[ this.names.todaynameslist.findIndex(item=>item.id==id) ])
    }else{
      let idx = this.selectData.findIndex(item=>item.id==id)
      this.selectData.splice(idx,1)
    }
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
  insert(){

    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    var api3 = "http://127.0.0.1:8080/users/reg";
    this.http.post(api3+"?username="+this.userkey+"&password="+this.passwordkey+"&gender="+this.genderkey+"&phone="+this.phonekey+"&email="+this.email,httpOptions).subscribe((response:any)=>{
      this.listOfData = this.names.getNameslist();
      this.ngOnInit();
      
    })
    alert("create success");
  }
  search(){

    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    var api4 = "http://127.0.0.1:8080/users/findbyuser";
    this.http.post(api4+"?username="+this.userkey,httpOptions).subscribe((response:any)=>{
      this.userkey=response.username;
      this.passwordkey=response.password;
      this.genderkey=response.gender;
      this.phonekey=response.phone;
      this.emailkey=response.email;
      
    })
    alert("find success");
  }
  remove(){
    this.selectData.forEach(ite=>{
      // let idx = this.names.todaynameslist.findIndex(item=>item.id==ite.id)
      this.names.todaynameslist =  this.names.todaynameslist.filter(item=>item.id!=ite.id)
    })
    this.listOfData = [...this.names.todaynameslist]
    this.selectData = []
    this.count()
  }
  ngOnInit(): void {
    this.listOfData = this.names.todaynameslist
    this.count()
  }

}
