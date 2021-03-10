import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                //<app-root>
  templateUrl: './app.component.html', //kimin componenti olduğunu belirten yer
  styleUrls: ['./app.component.css']   //css lerini koydupumuz yer
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Halil Fatih Çayır"
  
}
