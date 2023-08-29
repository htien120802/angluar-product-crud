import { Component } from '@angular/core';

import { ServerHttpService } from '../Service/server-http.service';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: any;
  p: number = 1;
  
  constructor(private serverHttp: ServerHttpService){}

  ngOnInit(){
    this.getProducts()
  }
  getProducts(){
    this.serverHttp.getProducts().subscribe(res => {
      if (res.status === "success"){
        this.products = res.data;
      } else {
        alert("Get list products unsucessfully. Please try again!")
      }
    });
  }
  
}
