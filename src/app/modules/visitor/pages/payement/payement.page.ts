import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {
  id: any; 

  cardholderName: string | undefined;
  cardNumber: string | undefined;
  cardType: string | undefined;
  expirationDate: string | undefined;
  cvv: string | undefined;

  constructor(private alertController: AlertController, private cartService: CartService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  changeMethod(val: any){
    this.id=val;

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
            this.processPayment(); // Méthode à appeler lorsque le paiement est confirmé
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

}
