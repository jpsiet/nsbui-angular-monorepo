import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashoverrideService {

  constructor(private http:HttpClient) { }
  data = [{"name":"Select State","value":"","district":[]},{"name":"Maharashtra","value":"MA","district":[{"name":"Aurangabad","value":"AB"},{"name":"Bhandara","value":"Bhandara"},{"name":"Amravati","value":"Amravati"},{"name":"Akola","value":"Akola"},{"name":"Buldhana","value":"Buldhana"}]},{"name":"Uttar Pradesh","value":"UP","district":[{"name":"Agra","value":"AG"},{"name":"Gorakhpur","value":"GKP"},{"name":"Badaun","value":"Badaun"},{"name":"Chitrakoot","value":"Chitrakoot"},{"name":"Ghaziabad","value":"Ghaziabad"}]},{"name":"Bihar","value":"BH","district":[{"name":"Bhagalpur","value":"BG"},{"name":"Arwal","value":"Arwal"},{"name":"Bhojpur","value":"Bhojpur"},{"name":"Gaya","value":"Gaya"},{"name":"Kaimur","value":"Kaimur"}]}];

  getStateAndListData(){
    return this.data;
  }
}
