import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Partner } from "../models/maerketingpartner";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";
import { JsonConvert } from 'json2typescript';

@Injectable({
  providedIn: 'root'
})
export class MarketingPartnersService {
  private url = "http://localhost:3000/marketingpartner";


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };


  constructor(private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { 

    }
    fetchAll(): Observable<Partner[]> {
      return this.http
        .get<Partner[]>(this.url, { responseType: "json" })
        .pipe(
          catchError(this.errorHandlerService.handleError<Partner[]>("fetchAll", []))
        );
    }

    createPost(
      formData: Partial<Partner>,
      userId: Pick<User, "id">
    ): Observable<Partner> {
      return this.http
        .post<Partner>(
          this.url,
          { companyname: formData.companyname, tenure: formData.tenure, sponsorship: formData.sponsorship, email: formData.email,user: userId },
          this.httpOptions
        )
        .pipe(
          catchError(this.errorHandlerService.handleError<Partner>("createPost"))
        );
    }
}
