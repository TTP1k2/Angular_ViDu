import { HttpClientModule } from '@angular/common/http'; // Thêm HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './example1/example1.component';
import { VdStringInterpolationComponent } from './vd-string-interpolation/vd-string-interpolation.component';

import { DatachildDatabindingComponent } from './datachild-databinding/datachild-databinding.component';
import { Datachild2DataBindingComponent } from './datachild2-data-binding/datachild2-data-binding.component';

import { Vd10BuiltinDirectivesNgtemplateoutletComponent } from './vd10-builtin-directives-ngtemplateoutlet/vd10-builtin-directives-ngtemplateoutlet.component';
import { Vd11InputOutputCompComponent } from './vd11-input-output-comp/vd11-input-output-comp.component';
import { Vd11InteractionCompComponent } from './vd11-interaction-comp/vd11-interaction-comp.component';
import { Vd12TemplateRefeferenceVariableComponent } from './vd12-template-refeference-variable/vd12-template-refeference-variable.component';
import { Vd13ViewchildViewchildrenComponent } from './vd13-viewchild-viewchildren/vd13-viewchild-viewchildren.component';
import { Vd14ContentProjectionComponent } from './vd14-content-projection/vd14-content-projection.component';
import { Vd14ShowContentProjectionComponent } from './vd14-show-content-projection/vd14-show-content-projection.component';
import { Vd15BuiltinPipesComponent } from './vd15-builtin-pipes/vd15-builtin-pipes.component';
import { Vd16CustomPipesComponent } from './vd16-custom-pipes/vd16-custom-pipes.component';
import { Vd16ShowCustomPipesComponent } from './vd16-show-custom-pipes/vd16-show-custom-pipes.component';
import { Vd17HttpclientHttprequestmethodComponent } from './vd17-httpclient-httprequestmethod/vd17-httpclient-httprequestmethod.component';
import { Vd18ReactiveformBindingwithhtmlComponent } from './vd18-reactiveform-bindingwithhtml/vd18-reactiveform-bindingwithhtml.component';
import { Vd19ReactiveformFormarrayComponent } from './vd19-reactiveform-formarray/vd19-reactiveform-formarray.component';
import { Vd2DataBindingComponent } from './vd2-data-binding/vd2-data-binding.component';
import { Vd20ReactiveformFormvalidatorsComponent } from './vd20-reactiveform-formvalidators/vd20-reactiveform-formvalidators.component';
import { Vd3PropertyBindingComponent } from './vd3-property-binding/vd3-property-binding.component';
import { Vd4StyleBindingVaClassBindingComponent } from './vd4-style-binding-va-class-binding/vd4-style-binding-va-class-binding.component';
import { Vd5EventBindingComponent } from './vd5-event-binding/vd5-event-binding.component';
import { Vd6TwoWaysBindingComponent } from './vd6-two-ways-binding/vd6-two-ways-binding.component';
import { Vd7BuiltinDirectivesNgifComponent } from './vd7-builtin-directives-ngif/vd7-builtin-directives-ngif.component';
import { Vd8BuiltinDirectivesNgforComponent } from './vd8-builtin-directives-ngfor/vd8-builtin-directives-ngfor.component';
import { Vd9BuiltinDirectivesNgswitchcaseComponent } from './vd9-builtin-directives-ngswitchcase/vd9-builtin-directives-ngswitchcase.component';
import { Vd21HostEventListenerComponent } from './vd21-host-event-listener/vd21-host-event-listener.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    VdStringInterpolationComponent,
    Vd2DataBindingComponent,
    DatachildDatabindingComponent,
    Vd3PropertyBindingComponent,
    Datachild2DataBindingComponent,
    Vd4StyleBindingVaClassBindingComponent,
    Vd5EventBindingComponent,
    Vd6TwoWaysBindingComponent,
    Vd7BuiltinDirectivesNgifComponent,
    Vd8BuiltinDirectivesNgforComponent,
    Vd9BuiltinDirectivesNgswitchcaseComponent,
    Vd10BuiltinDirectivesNgtemplateoutletComponent,
    Vd11InteractionCompComponent,
    Vd11InputOutputCompComponent,
    Vd12TemplateRefeferenceVariableComponent,
    Vd13ViewchildViewchildrenComponent,
    Vd14ContentProjectionComponent,
    Vd14ShowContentProjectionComponent,
    Vd15BuiltinPipesComponent,
    Vd16CustomPipesComponent,
    Vd16ShowCustomPipesComponent,
    Vd17HttpclientHttprequestmethodComponent,
    Vd18ReactiveformBindingwithhtmlComponent,
    Vd19ReactiveformFormarrayComponent,
    Vd20ReactiveformFormvalidatorsComponent,
    Vd21HostEventListenerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
