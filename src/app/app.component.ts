import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-captcha';

  public aFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
}
