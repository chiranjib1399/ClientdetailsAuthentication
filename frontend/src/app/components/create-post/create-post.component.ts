import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";

import { first } from "rxjs/operators";

import { Client } from "src/app/models/client";

import { AuthService } from "src/app/services/auth.service";
 import { ClientService } from "src/app/services/client.service"; 

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  isOpen = false;

  constructor(
    private authService: AuthService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      clientname: new FormControl("",[Validators.required, Validators.minLength(6)]),
      clientPhonenumber: new FormControl("",[Validators.required, Validators.minLength(10)]),
      address: new FormControl("",[Validators.required, Validators.minLength(10)]),
      email: new FormControl("",[Validators.required, Validators.email])
      
    });
  }

  onSubmit(formData: Pick<Client, "clientname" | "clientPhonenumber" | "address" | "email">): void {
    this.clientService
      .createPost(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);

      });
    this.form.reset();
    this.formDirective.resetForm();
  }
}
