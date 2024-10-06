import { Component } from '@angular/core';

@Component({
  selector: 'app-vd5-event-binding',
  templateUrl: './vd5-event-binding.component.html',
  styleUrl: './vd5-event-binding.component.css'
})
export class Vd5EventBindingComponent {
  // Hàm xử lý sự kiện khi nút được nhấn
  handleClick(event: Event): void {
    alert('Button was clicked!');
  }
}
