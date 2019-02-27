import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NsmComponent } from './nsm/nsm.component';
import { RsmComponent } from './rsm/rsm.component';
import { SmComponent } from './sm/sm.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NsmComponent,
    RsmComponent,
    SmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
