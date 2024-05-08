import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent  implements OnInit {
  email:string="";
  name:string="";
  photo:string="";

  constructor(private router: Router) {
    this.email = localStorage.getItem('email') ?? '';
    this.name = localStorage.getItem('full_name') ?? '';
    this.photo = localStorage.getItem('photo') ?? 'assets/man.png';
  }
  ngOnInit() {}

}
