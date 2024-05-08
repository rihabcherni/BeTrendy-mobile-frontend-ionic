import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {

  profileForm!: FormGroup;
  defaultImage = 'assets/seller1.png';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['Admin admin', Validators.required],
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      phoneNumber: ['21547555', Validators.required],
      image: ['assets/seller1.png']
    });
  }

  updateProfile() {
    if (this.profileForm.valid) {
      console.log('Updated Profile:', this.profileForm.value);
    } else {
      console.log('Form validation error');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.profileForm.patchValue({
      image: file ? URL.createObjectURL(file) : ''
    });
  }

  setDefaultImage() {
    this.profileForm.patchValue({
      image: this.defaultImage
    });
  }

}
