import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vd20-reactiveform-formvalidators',
  templateUrl: './vd20-reactiveform-formvalidators.component.html',
  styleUrl: './vd20-reactiveform-formvalidators.component.css'
})
export class Vd20ReactiveformFormvalidatorsComponent implements OnInit {
  formBuild!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormBuild();
  }

  createFormBuild() {
    this.formBuild = this.builder.group({
      yourName: ['', Validators.required], // Field yêu cầu
      age: ['', Validators.min(10)],        // Field với giá trị tối thiểu là 10
      point: ['', [Validators.min(0), Validators.max(10), Validators.required]], // Giá trị từ 0 đến 10 và yêu cầu
    });
  }

  makeFieldRequired() {
    this.formBuild.get('yourName')?.setValidators([Validators.required]); // Đặt lại thành required
    this.formBuild.get('yourName')?.updateValueAndValidity(); // Cập nhật validation
  }

  makeFieldOptional() {
    this.formBuild.get('yourName')?.setValidators(null); // Xóa validators
    this.formBuild.get('yourName')?.updateValueAndValidity(); // Cập nhật validation
  }
}
