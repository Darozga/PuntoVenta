import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule
  ]
})
export class ArticulosModule { }
