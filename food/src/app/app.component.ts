import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  time = new Date().toLocaleString();
  ngOnInit() {
      setInterval(()=>{
        this.time = new Date().toLocaleString();
      },1000)
  }
}
