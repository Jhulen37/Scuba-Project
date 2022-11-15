import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  APPID = 'YXR5H5-QX2K6238HE';
  constructor(private http: HttpClient) {}
  getData(lat, long) {
    return this.http.get(
      `https://api.weather.gov/gridpoints/PAH/${lat},${long}/forecast`
    );
  }
}
