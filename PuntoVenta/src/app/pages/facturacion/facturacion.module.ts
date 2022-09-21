import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturacionRoutingModule } from './facturacion-routing.module';
import { FacturacionComponent } from './facturacion.component';
import {TableModule} from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';



@NgModule({
  declarations: [
    FacturacionComponent
  ],
  imports: [
    CommonModule,
    FacturacionRoutingModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class FacturacionModule { }
