import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VisitorHeaderService } from 'src/app/services/visitor-header/visitor-header.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder,
    private visitorHeaderService: VisitorHeaderService,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.visitorHeaderService.pageTitle = 'Forgot Password';
    this.visitorHeaderService.subpageTitle = '';
    this.visitorHeaderService.imageSource = 'assets/forgot.png';

    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  async sendResetLink() {
    if (this.forgotForm.valid) {
      try {
        const email = this.forgotForm.value.email;
        const response = await this.authService.sendResetLink(email).toPromise();
        this.alertService.presentAlert('Success', 'Reset link sent successfully to ' + email, 'success-alert', 'assets/forgot.png');
        this.router.navigateByUrl(`/reset-password/${response.uidb64}/${response.token}`);
      } catch (error) {
        this.alertService.presentAlert('Error', 'Failed to send reset link. Please try again later.', 'failed-alert', 'assets/error.png');
      }
    } else {
      this.alertService.presentAlert('Error', 'Please enter a valid email', 'failed-alert', 'assets/error.png');
    }
  }

  goBackToLatestPage() {
    this.navCtrl.back();
  }

  openInscrirePage() {
    this.router.navigateByUrl('/role-type');
  }

  openLogin() {
    this.router.navigateByUrl('/welcome');
  }
}
