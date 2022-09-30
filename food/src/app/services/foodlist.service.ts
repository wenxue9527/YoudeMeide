import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface ItemData {
  id: any;
  name: string;
  gender: any;
  phone: any;
  email: any;
}

@Injectable({
  providedIn: 'root'
})
export class NameslistService {
  public list:ItemData[]=[];
  constructor(public http:HttpClient) { }
  getNameslist(){
    this.list=[];
    let api = "http://127.0.0.1:8080/users/findusers";
    this.http.get(api).subscribe((response:any)=>{
      //console.log(response);
      for (let index = 0; index < response.length; index++) {
        const element = response[index];
        let names:ItemData = {
          id:index,
          name:element.username,
          gender:element.gender,
          phone:element.phone,
          email:element.email
        }
        this.list.push(names);
       // console.log(this.list);
      }
      
      //console.log(this.list);
    })
   // console.log(this.list);
   //this.list=[...this.list]
   let nameslist: ItemData[] =
   // return this.list;
   [
      {"id":0,"name":"Tim","gender":null,"phone":null,"email":null},
      {"id":1,"name":"Tom","gender":null,"phone":null,"email":null},
      {"id":2,"name":"Wang","gender":null,"phone":null,"email":null},
      {"id":3,"name":"lili","gender":null,"phone":null,"email":null},
      {"id":4,"name":"cat","gender":null,"phone":null,"email":null},
      {"id":5,"name":"mike","gender":null,"phone":null,"email":null},
      {"id":6,"name":"mike123","gender":null,"phone":null,"email":null},
      {"id":7,"name":"test_0null","gender":null,"phone":null,"email":null},
      {"id":8,"name":"","gender":null,"phone":null,"email":null},
      {"id":9,"name":"test00","gender":null,"phone":null,"email":null},
      {"id":10,"name":"axas","gender":null,"phone":null,"email":null},
      {"id":11,"name":"sdsd","gender":null,"phone":null,"email":null},
      {"id":12,"name":"qwq","gender":null,"phone":null,"email":null},
      {"id":13,"name":"ewc","gender":null,"phone":null,"email":null},
      {"id":14,"name":"www","gender":null,"phone":null,"email":null},
      {"id":15,"name":"test002","gender":null,"phone":null,"email":null},
      {"id":16,"name":"test004","gender":null,"phone":null,"email":null},
  ];
  return nameslist;
  }
  todaynameslist:ItemData[] = [];
  
}
