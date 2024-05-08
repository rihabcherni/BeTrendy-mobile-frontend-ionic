import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  profileForm!: FormGroup;
  defaultImage = 'assets/man.png';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      name: ['rihab cherni', Validators.required],
      email: ['rihabcherni@gmail.com', [Validators.required, Validators.email]],
      phoneNumber: ['2154855', Validators.required],
      image: ['assets/man.png']
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

