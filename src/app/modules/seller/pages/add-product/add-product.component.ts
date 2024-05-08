import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  newProduct: any = {
    image: 'assets/not-found.PNG'
  };

  profileForm!: FormGroup;
  defaultImage = 'assets/not-found.PNG';

  constructor(
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      image: ['']
    });
  }

  saveProduct() {
    console.log('New Product:', this.newProduct);
    const newProductCopy = { ...this.newProduct };
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(newProductCopy);
    localStorage.setItem('products', JSON.stringify(products));
    this.router.navigate(['/seller/products-list']);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const imageUrl = file ? URL.createObjectURL(file) : '';
    if (imageUrl) {
      this.newProduct.image = imageUrl;
      const tempImage = this.newProduct.image;
      this.newProduct = { image: imageUrl };
      setTimeout(() => {
        this.newProduct = { image: tempImage, ...this.newProduct };
      }, 0);
    }
  }

  setDefaultImage() {
    this.profileForm.patchValue({
      image: this.defaultImage
    });
  }

}
