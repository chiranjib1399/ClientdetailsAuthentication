import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/User";
import { Partner } from 'src/app/models/maerketingpartner';
import { MarketingPartnersService } from 'src/app/services/marketing-partners.service';

@Component({
  selector: 'app-marketingpartnerlists',
  templateUrl: './marketingpartnerlists.component.html',
  styleUrls: ['./marketingpartnerlists.component.scss']
})
export class MarketingpartnerlistsComponent implements OnInit {

  markrtingpartners$: Observable<Partner[]>;

  constructor( private marketingpartnerservice: MarketingPartnersService) { }

  ngOnInit(): void {
    this.markrtingpartners$ = this.fetchAll();
  }
  fetchAll(): Observable<Partner[]> {
    return this.marketingpartnerservice.fetchAll();
  }


}
