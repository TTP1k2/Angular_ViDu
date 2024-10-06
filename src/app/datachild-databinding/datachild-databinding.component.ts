import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datachild-databinding',
  templateUrl: './datachild-databinding.component.html',
  styleUrl: './datachild-databinding.component.css'
})
export class DatachildDatabindingComponent {
  @Input() firstName: string = '';  // Nhận dữ liệu từ component cha
}
