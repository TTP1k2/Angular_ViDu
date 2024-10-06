import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-vd21-host-event-listener',
  templateUrl: './vd21-host-event-listener.component.html',
  styleUrl: './vd21-host-event-listener.component.css'
})
export class Vd21HostEventListenerComponent {
  cursorPositionX = 0;
  cursorPositionY = 0;

  @HostListener('click', ['$event'])
  onMouseClick(event: MouseEvent) {
    this.cursorPositionX = event.clientX;
    this.cursorPositionY = event.clientY;
  }
}
