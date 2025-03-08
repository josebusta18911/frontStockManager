import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParametrosComponent } from './parametros/parametros.component';
import { ConfiguracionComponent } from './configuracion.component';

@NgModule({
  declarations: [ParametrosComponent, ConfiguracionComponent],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    SharedModule,
  ],
})
export class ConfiguracionModule {}
