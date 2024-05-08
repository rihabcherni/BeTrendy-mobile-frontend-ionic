import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  profileForm!: FormGroup;
  defaultImage = 'assets/seller4.png';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['Mejri Aymen', Validators.required],
      email: ['aymenmejri@yahoo.com', [Validators.required, Validators.email]],
      phoneNumber: ['23052740', Validators.required],
      image: ['assets/seller4.png']
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
