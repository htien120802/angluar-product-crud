import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServerHttpService } from '../Service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  product: Product = new Product();
  code: string = '';  

  constructor(private httpClient: ServerHttpService, private route: ActivatedRoute, private router: Router){
    this.code = this.route.snapshot.params['code'];
    this.httpClient.getProduct(this.code).subscribe(res => {
      if (res.status==="success"){
        this.product = res.data;
      }
      else{
        alert(res.message)
      }
    });
  }
  ngOnInit(){
    
  }
  onSubmit(){
    this.httpClient.saveProduct(this.code, this.product).subscribe(res => {
      if (res.status==="success"){
        this.router.navigate([`/product-detail/${this.code}`])
      }
      alert(res.message);
    });
  }
}
