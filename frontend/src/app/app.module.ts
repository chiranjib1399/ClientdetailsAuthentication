import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientComponent } from "./components/client/client.component";
import { CreatePostComponent } from "./components/create-post/create-post.component";

import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { MarketingPartnersComponent } from './components/marketing-partners/marketing-partners.component';
import { MarketingpartnerlistsComponent } from './components/marketingpartnerlists/marketingpartnerlists.component';
import { BillingComponent } from './components/billing/billing.component';
import { ClientbillingComponent } from './components/clientbilling/clientbilling.component';
import { MarketingpaertnerbillingComponent } from './components/marketingpaertnerbilling/marketingpaertnerbilling.component';
import { PendingbillComponent } from './components/pendingbill/pendingbill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ClientComponent,
    CreatePostComponent,
    MarketingPartnersComponent,
    MarketingpartnerlistsComponent,
    BillingComponent,
    ClientbillingComponent,
    MarketingpaertnerbillingComponent,
    PendingbillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
