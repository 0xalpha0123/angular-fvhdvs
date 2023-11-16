import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, IQueryResponse } from '../../core/api.service';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  /**
   * This component is used to display list of products available for a given user
   *
   * @param _api
   */

  // products: Product[] = [];
  // count: Number = 0;

  constructor(private _api: ApiService, private _router: Router) {}

  ngOnInit(): void {
    // this.getProducts();
  }

  onSearch(query: string) {}

  onCreateProductButtonClick() {}

  onToggleProductsType(productType: string) {}

  onSortByClick(sortBy: string) {}

  // getProducts(): void {
  //   this._api.getProducts().subscribe((response: IQueryResponse) => {
  //     this.count = response.count;
  //     this.products = response.data.map((product) => new Product(product));
  //   });
  // }
}
