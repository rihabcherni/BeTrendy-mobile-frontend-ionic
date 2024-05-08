import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';
import { VisitorHeaderService } from 'src/app/services/visitor-header/visitor-header.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent  implements OnInit {

  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
  ) {
  }

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
  goBackToLatestPage() {
    this.navCtrl.back();
  }
  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  payer() {
    this.router.navigate(['client/payement']);
  }

}
