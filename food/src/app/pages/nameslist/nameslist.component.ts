import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef,ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {NameslistService} from '../../services/nameslist.service';
interface ItemData {
  id: any;
  name: string;
  gender: any;
  phone: any;
  email: any;
}

@Component({
  selector: 'app-nameslist',
  templateUrl: './nameslist.component.html',
  styleUrls: ['./nameslist.component.css']
})
export class NameslistComponent implements OnInit {


  constructor(public http:HttpClient,private names:NameslistService,private changeDetectorRef: ChangeDetectorRef) { 
  }
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: ItemData[] = [];
  setOfCheckedId = new Set<number>();
  selectData:ItemData[] = [];
  username:string="";

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
      this.selectData.push(this.listOfData[id])
    }else{
      let idx = this.selectData.findIndex(item=>item.id==id)
      this.selectData.splice(idx,1)
    }
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
    if(value){
      this.selectData = this.listOfData
    }else{
      this.selectData = []
    }
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
  add(){
    this.selectData.forEach(ite=>{
      let idx = this.names.todaynameslist.findIndex(item=>item.id==ite.id)
      if(idx<0){
        this.names.todaynameslist.push(ite)
      }
    })
    // this.names.todaynameslist = this.selectData;
  }
  delete(name:any){
    const httpOptions={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    var api2 = "http://127.0.0.1:8080/users/delete";
    this.http.post(api2+"?username="+name,httpOptions).subscribe((response:any)=>{
      this.listOfData = this.names.getNameslist();
      this.ngOnInit();
      alert(name)
    })
    
  }

  ngOnInit(): void {
    this.listOfData = this.names.getNameslist();
    this.listOfData = this.names.list;
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();
  }

}
