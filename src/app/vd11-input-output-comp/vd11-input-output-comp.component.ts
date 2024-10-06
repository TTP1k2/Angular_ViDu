import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vd11-input-output-comp',
  templateUrl: './vd11-input-output-comp.component.html',
  styleUrl: './vd11-input-output-comp.component.css'
})
export class Vd11InputOutputCompComponent {
  @Input() data: string = '';  // Nhận dữ liệu từ component cha
  @Output() returnData = new EventEmitter<string>();  // Trả dữ liệu về component cha

  // Hàm xử lý dữ liệu (biến đổi thành chữ hoa và trả về component cha)
  saveToUpper() {
    const upperData = this.data.toUpperCase();  // Biến đổi dữ liệu thành chữ hoa
    this.returnData.emit(upperData);  // Trả kết quả về component cha
  }
}
