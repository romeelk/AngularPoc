import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([{path:'products', component:ProductListComponent},
                          {path:'products/:id', 
                          canActivate:[ProductDetailGuard],
                          component:ProductDetailComponent},
                        ])
  ]
})
export class ProductModule { }
