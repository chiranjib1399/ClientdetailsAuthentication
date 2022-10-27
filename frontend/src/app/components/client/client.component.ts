import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { ClientService } from "src/app/services/client.service";
import { AuthService } from "src/app/services/auth.service";

import { Client } from "src/app/models/client";
import { User } from "src/app/models/User";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  toggle:boolean=false;
  show:boolean=true;
  clients$: Observable<Client[]>;
  userId: Pick<User, "id">;

  constructor(
    private clientService: ClientService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.clients$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Client[]> {
    return this.clientService.fetchAll();
  }

  createClient(): void {
    this.clients$ = this.fetchAll();
  }
  toggleData(){
    this.toggle=!this.toggle;
  }

  getNewData(){
    
  }
  
}
