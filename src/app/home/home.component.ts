import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  forecasts;
  latitude: number;
  longitude: number;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  getForecast() {
    this.dataService
      .getData(this.latitude, this.longitude)
      .subscribe((response: any) => {
        console.log('this is the first response', response.properties.periods);
        this.forecasts = response.properties.periods;
      });
  }
}
