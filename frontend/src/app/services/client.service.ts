import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Client } from "../models/client";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";
import { JsonConvert } from "json2typescript";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private url = "http://localhost:3000/clientdetails";
  jsonConvert: JsonConvert = new JsonConvert();
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Client[]> {
    return this.http
      .get<Client[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Client[]>("fetchAll", []))
      );
  }

  createPost(
    formData: Partial<Client>,
    userId: Pick<User, "id">
  ): Observable<Client> {
    return this.http
      .post<Client>(
        this.url,
        { clientname: formData.clientname, clientPhonenumber: formData.clientPhonenumber, address: formData.address, email: formData.email,user: userId },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Client>("createPost"))
      );
  }

  
}
