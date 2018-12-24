import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from 'src/api/products/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string = 'Product Detail';
  product: IProduct | undefined;
  errorMessage = '';
  
  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router   ) { 
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = +param;
        this.getProduct(id);
      }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
  onBack(): void
  {
    this.router.navigate(['/products']);
  
  }
  ngOnInit() {
  }

}
