import { Component } from '@angular/core';

@Component({
  selector: 'app-vd12-template-refeference-variable',
  templateUrl: './vd12-template-refeference-variable.component.html',
  styleUrl: './vd12-template-refeference-variable.component.css'
})
export class Vd12TemplateRefeferenceVariableComponent {
  saveName(name: string): void {
    console.log('Saved name:', name);
  }
}
