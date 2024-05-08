import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

export class AdminComponent {
  email:string="";
  name:string="";
  photo:string="";

  constructor(private router: Router) {
    this.email = localStorage.getItem('email') ?? '';
    this.name = localStorage.getItem('full_name') ?? '';
    this.photo = localStorage.getItem('photo') ?? 'assets/man.png';
  }

  isPageActive(pageUrl: string): boolean {
    return this.router.isActive(pageUrl, true);
  }

}
