import { Component } from '@angular/core';

@Component({
  selector: 'app-vd2-data-binding',
  templateUrl: './vd2-data-binding.component.html',
  styleUrl: './vd2-data-binding.component.css'
})
export class Vd2DataBindingComponent {
  recievedName = 'Kang';  // Một biến được truyền vào component con

  getName(): string {
    return 'Hidro';  // Hàm trả về giá trị để binding
  }
}
