import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientbillService } from 'src/app/services/clientbill.service';
import { AuthService } from 'src/app/services/auth.service';
import { Clientbill } from 'src/app/models/clientbill'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-clientbilling',
  templateUrl: './clientbilling.component.html',
  styleUrls: ['./clientbilling.component.scss']
})
export class ClientbillingComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();
  clientbills : Observable<Clientbill[]>;
  form: FormGroup;
  isOpen = false;

  constructor(
    private clientbillService: ClientbillService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.clientbills=this.fetchAll();
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      clientname: new FormControl("",[Validators.required, Validators.minLength(10)]),
      Totalamount: new FormControl("",[Validators.required, Validators.minLength(4)]),
      Pending: new FormControl("",[Validators.required, Validators.minLength(3)])
    });
  }
  onSubmit(formData: Pick<Clientbill, "clientname" | "Totalamount" | "Pending">): void {
    this.clientbillService
      .createPost(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);

      });
    this.form.reset();
    this.formDirective.resetForm();
  }
  fetchAll(): Observable<Clientbill[]> {
    return this.clientbillService.fetchAll();
  }

}
