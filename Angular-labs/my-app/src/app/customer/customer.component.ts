import { Component } from '@angular/core';
import { Customer } from './customer.model';


@Component({
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  title = 'my-app';

  imgUrl="././assets/sample.jpg";
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  ClickMe(){
  this.CustomerModels.push(this.CustomerModel);
  console.log(this.CustomerModels);
  this.CustomerModel=new Customer();
  }
}
