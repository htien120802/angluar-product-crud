import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:'list-product',component:ListProductComponent},
  {path:'add-product',component: AddProductComponent},
  {path:'product-detail/:code',component: ProductDetailComponent},
  {path:'update-product/:code',component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
