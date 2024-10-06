import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vd15-builtin-pipes',
  templateUrl: './vd15-builtin-pipes.component.html',
  styleUrl: './vd15-builtin-pipes.component.css'
})
export class Vd15BuiltinPipesComponent {
  today: Date = new Date();
  longText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  listAuthor: Observable<{ name: string; }[]> = of([
    { name: 'J. K. Rowling' },
    { name: 'Marjorie Rowling' },
    { name: 'Nick Rowling' }
  ]);
}
