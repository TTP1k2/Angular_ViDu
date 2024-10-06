import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { VdStringInterpolationComponent } from './vd-string-interpolation/vd-string-interpolation.component';
import { Vd10BuiltinDirectivesNgtemplateoutletComponent } from './vd10-builtin-directives-ngtemplateoutlet/vd10-builtin-directives-ngtemplateoutlet.component';
import { Vd11InteractionCompComponent } from './vd11-interaction-comp/vd11-interaction-comp.component';
import { Vd12TemplateRefeferenceVariableComponent } from './vd12-template-refeference-variable/vd12-template-refeference-variable.component';
import { Vd13ViewchildViewchildrenComponent } from './vd13-viewchild-viewchildren/vd13-viewchild-viewchildren.component';
import { Vd14ShowContentProjectionComponent } from './vd14-show-content-projection/vd14-show-content-projection.component';
import { Vd15BuiltinPipesComponent } from './vd15-builtin-pipes/vd15-builtin-pipes.component';
import { Vd16ShowCustomPipesComponent } from './vd16-show-custom-pipes/vd16-show-custom-pipes.component';
import { Vd17HttpclientHttprequestmethodComponent } from './vd17-httpclient-httprequestmethod/vd17-httpclient-httprequestmethod.component';
import { Vd18ReactiveformBindingwithhtmlComponent } from './vd18-reactiveform-bindingwithhtml/vd18-reactiveform-bindingwithhtml.component';
import { Vd19ReactiveformFormarrayComponent } from './vd19-reactiveform-formarray/vd19-reactiveform-formarray.component';
import { Vd2DataBindingComponent } from './vd2-data-binding/vd2-data-binding.component';
import { Vd20ReactiveformFormvalidatorsComponent } from './vd20-reactiveform-formvalidators/vd20-reactiveform-formvalidators.component';
import { Vd21HostEventListenerComponent } from './vd21-host-event-listener/vd21-host-event-listener.component';
import { Vd3PropertyBindingComponent } from './vd3-property-binding/vd3-property-binding.component';
import { Vd4StyleBindingVaClassBindingComponent } from './vd4-style-binding-va-class-binding/vd4-style-binding-va-class-binding.component';
import { Vd5EventBindingComponent } from './vd5-event-binding/vd5-event-binding.component';
import { Vd6TwoWaysBindingComponent } from './vd6-two-ways-binding/vd6-two-ways-binding.component';
import { Vd7BuiltinDirectivesNgifComponent } from './vd7-builtin-directives-ngif/vd7-builtin-directives-ngif.component';
import { Vd8BuiltinDirectivesNgforComponent } from './vd8-builtin-directives-ngfor/vd8-builtin-directives-ngfor.component';
import { Vd9BuiltinDirectivesNgswitchcaseComponent } from './vd9-builtin-directives-ngswitchcase/vd9-builtin-directives-ngswitchcase.component';


const routes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: 'vd-string-interpolation', component: VdStringInterpolationComponent },
  { path: 'vd2-data-binding', component: Vd2DataBindingComponent },
  { path: 'vd3-property-binding', component: Vd3PropertyBindingComponent },
  { path: 'vd4-style-binding-va-class-binding', component: Vd4StyleBindingVaClassBindingComponent },
  { path: 'vd5-event-binding', component: Vd5EventBindingComponent },
  { path: 'vd6-two-ways-binding', component: Vd6TwoWaysBindingComponent },
  { path: 'vd7-builtin-directives-ngif', component: Vd7BuiltinDirectivesNgifComponent },
  { path: 'vd8-builtin-directives-ngfor', component: Vd8BuiltinDirectivesNgforComponent },
  { path: 'vd9-builtin-directives-ngswitchcase', component: Vd9BuiltinDirectivesNgswitchcaseComponent },
  { path: 'vd10-builtin-directives-ngtemplateoutlet', component: Vd10BuiltinDirectivesNgtemplateoutletComponent },
  { path: 'vd11-interaction-comp', component: Vd11InteractionCompComponent },
  { path: 'vd12-template-refeference-variable', component: Vd12TemplateRefeferenceVariableComponent },
  { path: 'vd13-viewchild-viewchildren', component: Vd13ViewchildViewchildrenComponent },
  { path: 'vd14-show-content-projection', component: Vd14ShowContentProjectionComponent },
  { path: 'vd15-builtin-pipes', component: Vd15BuiltinPipesComponent },
  { path: 'vd16-show-custom-pipes', component: Vd16ShowCustomPipesComponent },
  { path: 'vd17-httpclient-httprequestmethod', component: Vd17HttpclientHttprequestmethodComponent },
  { path: 'vd18-reactiveform-bindingwithhtml', component: Vd18ReactiveformBindingwithhtmlComponent },
  { path: 'vd19-reactiveform-formarray', component: Vd19ReactiveformFormarrayComponent },
  { path: 'vd20-reactiveform-formvalidators', component: Vd20ReactiveformFormvalidatorsComponent },
  { path: 'vd21-host-event-listener', component: Vd21HostEventListenerComponent },

  { path: '', redirectTo: '/example1', pathMatch: 'full' }  // Mặc định chuyển đến example1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
