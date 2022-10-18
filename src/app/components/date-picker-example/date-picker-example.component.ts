import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-date-picker-example',
  templateUrl: './date-picker-example.component.html',
  styleUrls: ['./date-picker-example.component.scss']
})
export class DatePickerExampleComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group(
      {
        start: '', 
        end: ''
      }
    )
  }

}
