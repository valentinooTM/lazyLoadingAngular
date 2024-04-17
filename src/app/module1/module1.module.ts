import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Com1Component } from '../com1/com1.component';
import { Com2Component } from '../com2/com2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'com1', component: Com1Component},
  { path: 'com2', component: Com2Component},
];


@NgModule({
  declarations: [
    Module1Component,
    Com1Component,
    Com2Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    Module1Component,
    RouterModule
  ]
})
export class Module1Module { }
