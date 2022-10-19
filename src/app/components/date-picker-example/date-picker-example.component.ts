import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'

@Component({
  selector: 'app-date-picker-example',
  templateUrl: './date-picker-example.component.html',
  styleUrls: ['./date-picker-example.component.scss']
})
export class DatePickerExampleComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { 
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.bookForm = this.formBuilder.group(
      {
        start: new FormControl(new Date(year, month, 13)), 
        end: new FormControl(new Date(year, month, 16))
      }
    );
  }

  ngOnInit(): void {

  }

}
