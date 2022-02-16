import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formData: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl(),
      occupation: new FormControl(),
      contact: new FormControl(),
    });
  }

  onSubmit() {
    const data: NavigationExtras = {
      state: {
        subData: this.formData.value,
      },
    };
    this.router.navigateByUrl('/subscribe', data);
    this.formData.reset();
  }
}
