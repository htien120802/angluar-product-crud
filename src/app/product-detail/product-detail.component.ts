import { Component } from '@angular/core';
import { ServerHttpService } from '../Service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: any = null;
  constructor(private httpService: ServerHttpService, private route: ActivatedRoute, private router: Router, private confirmService: NgConfirmService){
    const code = this.route.snapshot.params['code'];
    this.httpService.getProduct(code).subscribe(res => {
      if (res.status==="success"){
        this.product = res.data;
      }
      else{
        alert(res.message);
      }
    });
  }
  ngOnInit(){
    
  }
  clickDelete(code: number){

    this.confirmService.showConfirm("Are you sure want to Delete?",
     () => {
      this.httpService.deleteProduct(code).subscribe(res => {
      
        if (res.status==="success"){
          this.router.navigate(["/list-product"]);
        }
        alert(res.message);
        });
    },
    () => {
      //yor logic if No clicked
    })
  }
}
