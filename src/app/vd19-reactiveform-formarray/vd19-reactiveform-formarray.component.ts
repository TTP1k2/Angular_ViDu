import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vd19-reactiveform-formarray',
  templateUrl: './vd19-reactiveform-formarray.component.html',
  styleUrl: './vd19-reactiveform-formarray.component.css'
})
export class Vd19ReactiveformFormarrayComponent implements OnInit {
  form!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      lessons: this.builder.array([]) // Khởi tạo mảng trống cho lessons
    });
  }

  get lessons() {
    return this.form.controls['lessons'] as FormArray;
  }

  get lessonsControls(): FormGroup[] {
    return this.lessons.controls as FormGroup[];
  }

  addLesson() {
    const lessonForm = this.builder.group({
      title: [''],
      level: ['']
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex); // Xóa phần tử tại vị trí lessonIndex
  }

  get valueOfLessons() {
    return this.lessons.controls.map(eachGroup => eachGroup.value);
  }
}
