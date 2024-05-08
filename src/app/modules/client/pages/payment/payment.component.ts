import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent  implements OnInit {
  id: any;

  cardholderName: string | undefined;
  cardNumber: string | undefined;
  cardType: string | undefined;
  expirationDate: string | undefined;
  cvv: string | undefined;
  showPaymentForm: boolean = false;
  paypal: boolean = false;
  money: boolean = false;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router,
    private cartService: CartService) { }
  ngOnInit(): void {
  }
  changeMethod(val: any){
    this.id=val;
    if(val===1){
      this.showPaymentForm =  true;
      this.money=false;
      this.paypal=false;
    }else if(val===2){
      this.money =  true;
      this.showPaymentForm=false;
      this.paypal=false;
    }else if(val===3){
      this.paypal = true;
      this.showPaymentForm=false;
      this.money=false;
    }
  }

  confirmPayment() {

    this.presentConfirmationAlert();
  }

  async presentConfirmationAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Payment',
      message: 'Are you sure you want to proceed with the payment?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Confirm',
          handler: () => {
            this.processPayment();
          }
        }
      ]
    });

    await alert.present();
  }

  processPayment() {

    this.presentAlert('Payment Successful', 'Your payment has been successfully processed.');
    this.cartService.clearCart();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  goBackToLatestPage() {
    this.navCtrl.back();
  }
  backStore() {
    this.router.navigateByUrl('/client');
  }
}
