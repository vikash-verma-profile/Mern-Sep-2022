import { Component,OnInit } from '@angular/core';
import { Customer } from './customer.model';
import {HttpClient} from '@angular/common/http';


@Component({
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {

  isEdit=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   this.GetDataFromServer();
  }

  GetDataFromServer(){
    this.http.get("http://localhost:3000/customers").subscribe(res=>this.SuccessGet(res),res=>console.log(res));
  }
  SuccessGet(res:any){
    this.CustomerModels=res;
  }
  title = 'my-app';

  imgUrl="././assets/sample.jpg";
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  AddCustomer(){

    if(this.isEdit){
      this.http.put("http://localhost:3000/customers",this.CustomerModel).subscribe(res=>this.SuccesPost(res),res=>console.log(res));

    }
    else{
      this.http.post("http://localhost:3000/customers",this.CustomerModel).subscribe(res=>this.SuccesPost(res),res=>console.log(res));
    }
  // this.CustomerModels.push(this.CustomerModel);
  // console.log(this.CustomerModels);
  this.isEdit=false;
   this.CustomerModel=new Customer();
  }

  SuccesPost(res:any){
    this.GetDataFromServer();
  }

  EditCustomer(input:Customer){
    this.isEdit=true;
    this.CustomerModel=input;
  }

  DeleteCustomer(input:Number){

    this.http.delete("http://localhost:3000/customers/"+input).subscribe(res=>this.SuccesPost(res),res=>console.log(res));

  }
 
}
