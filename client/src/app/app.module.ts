import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./modules/app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./services/communication.service";
import { AppMaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MembersPageComponent } from './pages/members-page/members-page.component';
import { ReservationsPageComponent } from './pages/reservations-page/reservations-page.component';
import { ReservationsCreationPageComponent } from './pages/reservations-creation-page/reservations-creation-page.component';
import { DisplayMembersComponent } from './components/display-members/display-members.component';
import { MemberInputComponent } from './components/member-input/member-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MembersPageComponent,
    ReservationsPageComponent,
    ReservationsCreationPageComponent,
    DisplayMembersComponent,
    MemberInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [CommunicationService],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
