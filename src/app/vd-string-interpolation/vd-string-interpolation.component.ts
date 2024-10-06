import { Component } from '@angular/core';

@Component({
  selector: 'app-vd-string-interpolation',
  templateUrl: './vd-string-interpolation.component.html',
  styleUrl: './vd-string-interpolation.component.css'
})
export class VdStringInterpolationComponent {
  myName = 'Angular';

  getNum(): number {
    return 1;
  }
}
