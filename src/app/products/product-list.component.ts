import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/api/products/product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 70;
    imageHeight: number = 50;
    showImage: boolean = false;
    errorMessage: string;
    _listFilter: string;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    constructor(private productService: ProductService) {
        this.listFilter = '';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log("In OnInit");
        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error
        );
    }
}