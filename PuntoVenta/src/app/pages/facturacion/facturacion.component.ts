import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ArticulosService } from 'src/app/services/articulos/articulos.service';
import { FacturacionService } from 'src/app/services/facturacion/facturacion.service';
import { Articulo } from 'src/app/shared/models/articulos.interface';
import { DetalleFactura } from 'src/app/shared/models/detalleFactura.inerface';
import { Factura } from 'src/app/shared/models/factura.interface';
import { User } from 'src/app/shared/models/user.interface';
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss'],
  providers: [MessageService, CurrencyPipe ],
})
export class FacturacionComponent implements OnInit {
  public mformularioFacturacion: FormGroup;
  public codigo: FormControl;
  public nombre: FormControl;
  public cantidad: FormControl;
  public listadoDetalleFactura: DetalleFactura[] = [] 
  public totalFactura:number = 0;

  public articuloActual: any;
  constructor(    private formbuilder: FormBuilder,private articuloSvc: ArticulosService,private messageService: MessageService, 
    private facturaSvc: FacturacionService, private cp: CurrencyPipe

    ) {
 
      this.codigo = new FormControl();
    this.nombre = new FormControl();
    this.cantidad = new FormControl();
    this.mformularioFacturacion = this.formbuilder.group({
      codigo: this.codigo,
      nombre: this.nombre,
      cantidad: this.cantidad,
    });
    this.nombre.disable();
     }

  ngOnInit(): void {
  }

  formatCurrency(data: any): any{
    return this.cp.transform(data, '₡', 'symbol', '1.2-2');

  }

  onAgregar(){


   

    if(this.nombre.value == "" || this.nombre.value == null ){
      this.messageService.add({
        severity: "warn",
        summary: "Información",
        detail: "El código del articulo no es valido",
        life: 4000,
      });

    }else{

    var calculoIVA =this.articuloActual.iva ? this.articuloActual.precio * 0.13 : 0;
    var totalDetalle = (this.articuloActual.precio + calculoIVA) *  this.cantidad.value;
    this.totalFactura += totalDetalle;
    var detalle = {
      articuloId: this.codigo.value,
      nombre: this.nombre.value,
      precio: this.articuloActual.precio,
      iva: calculoIVA,
      cantidad: this.cantidad.value,
      total: totalDetalle

    }as DetalleFactura
    this.listadoDetalleFactura.push(detalle)
    this.eLimpiar();
  }
  }


  eLimpiar(){
    this.codigo.setValue("");
    this.nombre.setValue("");
    this.cantidad.setValue("");
  }


  onImprimir(){

    if(this.listadoDetalleFactura.length == 0){
      this.messageService.add({
        severity: "warn",
        summary: "Información",
        detail: "No existen datos para insertar",
        life: 4000,
      });
    }else{
    var usuarioActual = JSON.parse(localStorage.getItem('user')!);

    var factura = {
      userName: usuarioActual.UserName,
      total: this.totalFactura,
      detalleFacturas: this.listadoDetalleFactura
    } as Factura
    this.facturaSvc.add(factura).subscribe((res) => {
      if (res.result) {
        this.messageService.add({
          severity: "success",
          summary: "Información",
          detail: "Factura insertado correctamente",
          life: 4000,
        });
        this.listadoDetalleFactura = [];
        this.totalFactura = 0;
        
      } else {
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail:
            "Ocurrio un error insertando la factura, por favor intentalo de nuevo!",
          life: 5000,
        });
      }
    });
  }

  }

  efindArticulo(){
    this.articuloSvc.get(this.codigo.value).subscribe((res:Articulo) => {
      if(res != null){
        this.nombre.setValue(res.nombre)
        this.articuloActual = res;
      }else{
        this.nombre.setValue("")
      }
    });
  }
  

}
