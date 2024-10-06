import { Component } from '@angular/core';

@Component({
  selector: 'app-vd10-builtin-directives-ngtemplateoutlet',
  templateUrl: './vd10-builtin-directives-ngtemplateoutlet.component.html',
  styleUrl: './vd10-builtin-directives-ngtemplateoutlet.component.css'
})
export class Vd10BuiltinDirectivesNgtemplateoutletComponent {
  myContext = { $implicit: 'World', localVie: 'Bạn' };
}
