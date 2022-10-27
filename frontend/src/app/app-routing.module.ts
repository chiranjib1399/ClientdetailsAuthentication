import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./services/auth-guard.service";
import { CreatePostComponent} from "./components/create-post/create-post.component"
import { HomeComponent } from "./components/home/home.component";
import { ClientComponent } from "./components/client/client.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { MarketingPartnersComponent } from './components/marketing-partners/marketing-partners.component';
import { MarketingpartnerlistsComponent } from "./components/marketingpartnerlists/marketingpartnerlists.component";
import { BillingComponent } from "./components/billing/billing.component";
import { ClientbillingComponent } from "./components/clientbilling/clientbilling.component";
import { MarketingpaertnerbillingComponent } from "./components/marketingpaertnerbilling/marketingpaertnerbilling.component";
import { PendingbillComponent } from "./components/pendingbill/pendingbill.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "clientdetails", component: ClientComponent, canActivate: [AuthGuard] },
  { path: "postclient", component:CreatePostComponent , canActivate: [AuthGuard] },
  { path: "marketingpartnerlist", component:MarketingpartnerlistsComponent , canActivate: [AuthGuard] },
  { path: "marketingpaertnerbilling", component:MarketingpaertnerbillingComponent , canActivate: [AuthGuard] },
  { path: "clientbilling", component:ClientbillingComponent , canActivate: [AuthGuard] },
  { path: "billing", component:BillingComponent , canActivate: [AuthGuard] },
  { path: "pendingbill", component:PendingbillComponent , canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "marketingpartners", component: MarketingPartnersComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
