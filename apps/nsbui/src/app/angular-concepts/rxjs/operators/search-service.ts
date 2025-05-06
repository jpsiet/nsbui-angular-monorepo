import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchData($serachTerm: Observable<string>, dobounceTime: any = 400) {

   return  $serachTerm.pipe(debounceTime(400),distinctUntilChanged(),switchMap((data)=> this.getSearchData(data)))

  }

  getFireBaseCall(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }

  getSearchData(searchterm = 'a') {
    let wikipedia =
      'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=15&srsearch=';
    wikipedia += searchterm;
    let obs: Observable<any> = this.http.get(wikipedia);
    // JUST to show case how we can delay service to explain the operaotr
    if (searchterm.length === 1002) {
      obs = obs.pipe(delay(3000));
    }
    return obs;
  }
}
