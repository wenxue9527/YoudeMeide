import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import {NameslistService} from '../../services/nameslist.service';

interface ItemData {
  id: number;
  name: string;
  gender: number;
  phone: number;
  email: number;
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private names:NameslistService) { }
  listOfData:ItemData[]=[]
  gender=0;
  phone=0;
  email=0;
  ngOnInit() {
    this.listOfData = this.names.todaynameslist
    this.initCharts()
  }
  initCharts() {
    const ec = echarts as any;
    const lineChart = ec.init(document.getElementById('pieChart'));
    let gender = 0;
    let phone = 0;
    let email = 0;
    this.listOfData.forEach(item=>{
      gender += item.gender
      phone += item.phone
      email += item.email
    })
    console.log(11,phone)
    const option = {
      title: {
        text: '营养含量',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: gender, name: 'gender' },
            { value: phone, name: 'phone' },
            { value: email, name: 'email' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    lineChart.setOption(option);

  }
}
