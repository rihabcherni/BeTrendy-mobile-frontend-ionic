import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCount } from 'src/app/models/AdminCount';
import { DashService } from 'src/app/services/admin-dash/dash.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  adminCount!: AdminCount;
  features: any[] = [];

  constructor(
    private adminCountService: DashService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchCounts();
  }

  fetchCounts() {
    this.adminCountService.getAdminCount().subscribe(
      (data: AdminCount) => {
        this.adminCount = data;
        this.updateFeaturesArray();
      },
      (error: any) => {
        console.error('Error fetching admin counts: ', error);
      }
    );
  }

  updateFeaturesArray() {
    this.features = [
      { id: 1, name: 'John Doe', testimonial: 'Great products, fast delivery!', photo: 'assets/seller3.png', stars_count: 4, icons: ['star', 'star', 'star', 'star-half', 'star-outline'] },
      { id: 2, name: 'Jane Smith', testimonial: 'Amazing service, highly recommended!', photo: 'assets/seller1.png', stars_count: 5, icons: ['star', 'star', 'star', 'star', 'star'] },
      { id: 2, name: 'Jane Smith', testimonial: 'Amazing service, highly recommended!', photo: 'assets/seller2.png', stars_count: 5, icons: ['star', 'star', 'star', 'star', 'star'] },
      { id: 2, name: 'Jane Smith', testimonial: 'Amazing service, highly recommended!', photo: 'assets/seller2.png', stars_count: 5, icons: ['star', 'star', 'star', 'star', 'star'] },
      { id: 4, name: 'Emily Brown', testimonial: 'Quick response and great customer support!', photo: 'assets/seller4.png', stars_count: 4, icons: ['star', 'star', 'star', 'star-half', 'star-outline'] },
    { id: 5, name: 'David Wilson', testimonial: 'Fantastic quality and reasonable prices!', photo: 'assets/seller4.png', stars_count: 5, icons: ['star', 'star', 'star', 'star', 'star'] },
    { id: 6, name: 'Sophia Garcia', testimonial: 'Impressed with the fast shipping and product variety!', photo: 'assets/seller4.png', stars_count: 4, icons: ['star', 'star', 'star', 'star-half', 'star-outline'] }
    ];
  }
}
