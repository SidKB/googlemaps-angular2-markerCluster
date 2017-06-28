import { Component, OnInit} from '@angular/core';
import {Http, HttpModule} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string = 'My first AGM project by Siddhartha';
  lat: number = 19.5860;
  lng: number = 84.6897;
  zoom: number = 5;
  
  points: any[] = []; 
  
  constructor(private http: Http) {}

  public ngOnInit(){
    this.http.get("assets/points.json").subscribe(data => {
      this.points = data.json(); 
    });
  }
}
