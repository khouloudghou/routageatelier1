import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponentComponent } from './main-invoice-component/main-invoice-component.component';
import { InvoiceComponentComponent } from './invoice-component/invoice-component.component';

const routes: Routes = [{path: 'main-invoice', component: MainInvoiceComponentComponent},
{ path: 'invoice/:id/:active', component: InvoiceComponentComponent },
{ path: 'main-invoice', component: MainInvoiceComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
