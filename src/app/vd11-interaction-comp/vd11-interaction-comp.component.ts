import { Component } from '@angular/core';

@Component({
  selector: 'app-vd11-interaction-comp',
  templateUrl: './vd11-interaction-comp.component.html',
  styleUrl: './vd11-interaction-comp.component.css'
})
export class Vd11InteractionCompComponent {
  inputData = '';  // Biến lưu trữ dữ liệu nhập từ input
  listData: string[] = [];  // Mảng chứa danh sách dữ liệu đã lưu

  // Hàm lưu dữ liệu khi nhận dữ liệu từ component con
  saveData(data: string) {
    if (data) {
      this.listData.push(data);  // Thêm dữ liệu vào danh sách
      this.inputData = '';  // Xóa dữ liệu sau khi đã lưu
    }
  }
}
