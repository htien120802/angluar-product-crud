import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerHttpService } from '../Service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  public formData = this.formBuilder.group({
    code: '',
    name: '',
    category: '',
    brand: '',
    type: '',
    description: '',
  });  

  constructor(private formBuilder: FormBuilder, private httpClient: ServerHttpService, private router: Router){}
  onSubmit(){
    this.httpClient.creatProduct(this.formData.value).subscribe(
      res => {
        if (res.status==="success"){
          this.router.navigate(["/list-product"]);
          this.formData.reset();
        }
        alert(res.message);
    });
  }
}
