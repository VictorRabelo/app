import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ModalProductsComponent } from './modal-products/modal-products.component';
import { ModalProductDadosComponent } from './modal-product-dados/modal-product-dados.component';
import { ModalAlterPasswordComponent } from './modal-alter-password/modal-alter-password.component';

import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UtilModule } from '@app/util/util.module';
import { FilterFormComponent } from './filter-form/filter-form.component';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: false,
  min: null,
  max: null,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    ClienteFormComponent,
    ModalProductsComponent,
    ModalProductDadosComponent,
    ModalAlterPasswordComponent,
    FilterFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilModule,
    MatTabsModule,
    Ng2SearchPipeModule,
    MatStepperModule,
    NgxMaskModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  exports:[
    ClienteFormComponent,
    ModalProductsComponent,
    ModalProductDadosComponent,
    ModalAlterPasswordComponent,
    FilterFormComponent,
  ],
  entryComponents: [
    ClienteFormComponent,
    ModalProductsComponent,
    ModalProductDadosComponent,
    ModalAlterPasswordComponent,
    FilterFormComponent,
  ],
})
export class ComponentsModule { }
