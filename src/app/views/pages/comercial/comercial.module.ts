import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComercialComponent } from './comercial.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ComercialRoutingModule } from './comercial-routing.module';
import { OficinaComponent } from './oficina/oficina.component';

@NgModule({
  declarations: [ComercialComponent,InventarioComponent, OficinaComponent],
  imports: [
    CommonModule,
    ComercialRoutingModule,
    SharedModule,
  ],
})
export class ComercialModule {}
