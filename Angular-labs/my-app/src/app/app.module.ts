import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './routing/mainroutes';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
