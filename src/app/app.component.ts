import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';
  formLogin: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.formLogin = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
  ngOnInit(): void {
    this.createForm();
  }
  get getName(): any {
    return this.formLogin.controls;
  }
  login() {
    if (this.formLogin.invalid) {
      console.log('invalid');
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formLogin.getRawValue()));
  }
}
