import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Clientbill } from '../models/clientbill'
import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";
import { ErrorHandlerService } from "./error-handler.service";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ClientbillService {
  private url = "http://localhost:3000/clientbill";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }


  fetchAll(): Observable<Clientbill[]>{
    return this.http
      .get<Clientbill[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Clientbill[]>("fetchAll", []))
      );
  }
  createPost(
    formData: Partial<Clientbill>,
    userId: Pick<User, "id">
  ): Observable<Clientbill> {
    return this.http
      .post<Clientbill>(
        this.url,
        { clientname: formData.clientname, Totalamount: formData.Totalamount, pending: formData.Pending,user: userId },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Clientbill>("createPost"))
      );
  }

}
