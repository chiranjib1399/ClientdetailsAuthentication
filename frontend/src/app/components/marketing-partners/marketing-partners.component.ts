import { Component, OnInit, Output ,ViewChild , EventEmitter} from '@angular/core';

import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";
import { first } from 'rxjs/operators';
import { Partner } from 'src/app/models/maerketingpartner';
import { JsonConvert, OperationMode, ValueCheckingMode } from "json2typescript"
import { MarketingPartnersService } from 'src/app/services/marketing-partners.service';
import { AuthService } from 'src/app/services/auth.service';
import { Clientbill } from 'src/app/models/clientbill';

@Component({
  selector: 'app-marketing-partners',
  templateUrl: './marketing-partners.component.html',
  styleUrls: ['./marketing-partners.component.scss']
})
export class MarketingPartnersComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  isOpen = false;

  constructor( private authService: AuthService,
    private marketingpartnersservice: MarketingPartnersService ) { }

  ngOnInit(): void {
    this.form = this.createFormGroup();

    // let partner: Partner[];
    // try {
    //   partner = this.marketingpartnersservice.jsonConvert.deserializeObject(this.form, Partner);
    // } catch (error) {
    //   console.log(error)
    // }
  }
  createFormGroup(): FormGroup {
    return new FormGroup({
      companyname: new FormControl("",[Validators.required, Validators.minLength(10)]),
      tenure: new FormControl("",[Validators.required, Validators.minLength(2)]),
      sponsorship : new FormControl("",[Validators.required, Validators.minLength(10)]),
      email: new FormControl("",[Validators.required, Validators.email])
    });
  }

  onSubmit(formData: Pick<Partner, "companyname" | "tenure" | "sponsorship" | "email" >): void {
    this.marketingpartnersservice
      .createPost(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
  }


}
