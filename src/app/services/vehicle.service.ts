import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseURL = "http://localhost:1234";

  constructor(private http: HttpClient) { }

  // list(): Observable<BillingCycle[]> {
  //   return this.http.get<BillingCycle[]>(this.baseURL);
  // }
  // create(cycle: BillingCycle): Observable<BillingCycle> {
  //   return this.http.post<BillingCycle>(this.baseURL, cycle);
  // }
}
