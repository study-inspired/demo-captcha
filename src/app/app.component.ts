import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-captcha';

  public aFormGroup: FormGroup;
  siteKey: string = environment.captchaKey;

  constructor(
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    console.log(this.aFormGroup);
  }

  handleReset() {

  }

  handleExpire() {

  }

  handleError() {

  }

  handleLoad() {

  }

  handleSuccess($event: string) {

  }
}
