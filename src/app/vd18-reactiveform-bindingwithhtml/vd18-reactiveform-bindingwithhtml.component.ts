import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vd18-reactiveform-bindingwithhtml',
  templateUrl: './vd18-reactiveform-bindingwithhtml.component.html',
  styleUrl: './vd18-reactiveform-bindingwithhtml.component.css'
})
export class Vd18ReactiveformBindingwithhtmlComponent implements OnInit {
  formLegacy!: FormGroup;
  formBuild!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormLegacy();
    this.createFormBuild();
  }

  createFormLegacy() {
    this.formLegacy = new FormGroup({
      yourName: new FormControl(''),
    });
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: ['Angular'],
    });
  }
}
