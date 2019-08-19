import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-row-dymanic',
  templateUrl: './add-row-dymanic.component.html',
  styleUrls: ['./add-row-dymanic.component.css']
})
export class AddRowDymanicComponent implements OnInit {
    dynamicForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.dynamicForm = this.formBuilder.group({
            tickets: new FormArray([this.createForm()])
        });
    }
    get f() { return this.dynamicForm.controls; }
    get t() { return this.f.tickets as FormArray; }

    addItem() {
      this.submitted = false;
      return this.t.push(this.createForm());
    }

   createForm(): FormGroup  {
      return this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    }

    removeItem(i: any) {
      return this.t.removeAt(i);
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.dynamicForm.invalid) {
            return;
        }

        // display form values on success
        console.log(JSON.stringify(this.dynamicForm.value.tickets));
    }

}
