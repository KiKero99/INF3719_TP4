import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MembersPageComponent } from '../pages/members-page/members-page.component';
import { ReservationsPageComponent } from "../pages/reservations-page/reservations-page.component";
import { ReservationsCreationPageComponent } from "../pages/reservations-creation-page/reservations-creation-page.component";

import { AppComponent } from "../app.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "members", component: MembersPageComponent },
  { path: "reservations", component: ReservationsPageComponent },
  { path: "creation", component: ReservationsCreationPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
