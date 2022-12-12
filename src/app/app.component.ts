import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  data:  any;
  

  constructor (private http:HttpClient) {

  }
   getDate() 
   {
              this.http.get('https://fakestoreapi.com/products?limit=5')
             
             //this.http.get('https://localhost:3002/appointdata/getappointdetails')
              .subscribe((data) => {
                this.data = data
              }

              )
   }
  
}
