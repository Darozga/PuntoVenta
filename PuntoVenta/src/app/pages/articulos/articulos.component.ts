import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ConfirmEventType, MessageService } from "primeng/api";
import { ArticulosService } from "src/app/services/articulos/articulos.service";
import { Articulo } from "src/app/shared/models/articulos.interface";
import {ConfirmationService} from 'primeng/api';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: "app-articulos",
  templateUrl: "./articulos.component.html",
  styleUrls: ["./articulos.component.scss"],
  providers: [MessageService, ConfirmationService, CurrencyPipe],
})
export class ArticulosComponent implements OnInit {
  public mformularioArticulo: FormGroup;
  public codigo: FormControl;
  public nombre: FormControl;
  public precio: FormControl;
  public iva: FormControl;

  public listArticulos: Articulo[] = [];

  public isNuevo: boolean = true;

  constructor(
    private formbuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private articuloSvc: ArticulosService,
    private cp: CurrencyPipe
  ) {
    this.codigo = new FormControl();
    this.nombre = new FormControl();
    this.precio = new FormControl();
    this.iva = new FormControl();
    this.mformularioArticulo = this.formbuilder.group({
      codigo: this.codigo,
      nombre: this.nombre,
      precio: this.precio,
      iva: this.iva,
    });
  }

  ngOnInit(): void {
    this.eCargarGrid();
  }

  onGuardar() {
    var articuloData = {
      id: this.codigo.value,
      nombre: this.nombre.value,
      precio: this.precio.value,
      iva: this.iva.value === null ? false : this.iva.value,
    } as Articulo;

    if (this.isNuevo) {
      this.articuloSvc.get(this.codigo.value).subscribe((res) => {
        if(res != null){
          this.messageService.add({
            severity: "warn",
            summary: "Información",
            detail: "El código del articulo ya se encuentra registrado",
            life: 4000,
          });
          
        }
        else{
      this.articuloSvc.add(articuloData).subscribe((res) => {
              if (res.result) {
                this.messageService.add({
                  severity: "success",
                  summary: "Información",
                  detail: "Articulo insertado correctamente",
                  life: 4000,
                });
                this.eCargarGrid();
                this.eLimpiarCampos();
              } else {
                this.messageService.add({
                  severity: "error",
                  summary: "Error",
                  detail:
                    "Ocurrio un error insertando el articulo, por favor intentalo de nuevo!",
                  life: 5000,
                });
              }
            });
        }
      });
      
    } else {
      this.articuloSvc.update(articuloData).subscribe((res) => {
        if (res.result) {
          this.messageService.add({
            severity: "success",
            summary: "Información",
            detail: "Articulo actualizado correctamente",
            life: 4000,
          });
          this.eCargarGrid();
          this.eLimpiarCampos();
        } else {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail:
              "Ocurrio un error actualizando el articulo, por favor intentalo de nuevo!",
            life: 5000,
          });
        }
      });
    }
  }

  eLimpiarCampos() {
    this.isNuevo = true;
    this.codigo.setValue("");
    this.codigo.enable();
    this.nombre.setValue("");
    this.precio.setValue("");
    this.iva.setValue(false);
  }

  eCargarGrid() {
    this.articuloSvc.listArticulos().subscribe((res) => {
      this.listArticulos = res;
    });
  }

  editarArticulo(articulo: Articulo) {
    this.isNuevo = false;
    this.codigo.setValue(articulo.id);
    this.codigo.disable();
    this.nombre.setValue(articulo.nombre);
    this.precio.setValue(articulo.precio);
    this.iva.setValue(articulo.iva);

  }

  eValidarArticulo(): boolean {
    this.articuloSvc.get(this.codigo.value).subscribe((res) => {
      if(res != null){
        this.messageService.add({
          severity: "success",
          summary: "Información",
          detail: "El código del articulo ya se encuentra registrado",
          life: 4000,
        });
        
      }
    });

    return true;
  }
  formatCurrency(data: any): any{
    return this.cp.transform(data, '₡', 'symbol', '1.2-2');

  }

  eliminarArticulo(articulo: Articulo) {
    this.confirmationService.confirm({
        message: '¿Estas seguro que deseas eliminar este Artículo?',
        header: 'Confirmar Eliminación',
        icon: 'pi pi-info-circle',
        acceptLabel: "Aceptar",
        rejectLabel:"Cancelar",
        accept: () => {
          this.articuloSvc.delete(articulo.id).subscribe((res) => {
            if (res.result) {
              this.messageService.add({
                severity: "success",
                summary: "Información",
                detail: "Articulo eliminado correctamente",
                life: 4000,
              });
              this.eCargarGrid();
            } else {
              this.messageService.add({
                severity: "error",
                summary: "Error",
                detail:
                  "Ocurrio un error eliminando el articulo, por favor intentalo de nuevo!",
                life: 5000,
              });
            }
          });
        }
    });
}
}
