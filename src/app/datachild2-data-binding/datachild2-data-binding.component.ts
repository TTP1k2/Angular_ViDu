import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datachild2-data-binding',
  templateUrl: './datachild2-data-binding.component.html',
  styleUrl: './datachild2-data-binding.component.css'
})
export class Datachild2DataBindingComponent {
  @Input() lastName: string = '';
}
