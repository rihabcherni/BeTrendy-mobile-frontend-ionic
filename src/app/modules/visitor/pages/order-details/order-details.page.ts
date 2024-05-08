import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage {

  cartItems: any[] = []; 
  totalPrice: number = 0;

  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['cartItems']) {
        this.cartItems = params['cartItems'];
        this.calculateTotalPrice(); 
      } else {
        this.cartItems = this.cartService.getCartItems(); 
        this.calculateTotalPrice(); 
      }
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  payer() {
    this.router.navigate(['payement']); 
  }

}
