import { Component } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component {
  title = 'Example 1';
  message = 'This is a simple example in Angular 2+';

  changeMessage() {
    this.message = 'The message has been updated!';
  }
}
