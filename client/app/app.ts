import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CustomersController} from './controllers/customers';
import {CustomerController} from './controllers/customer';
import {CustomerService} from './data_access/customer';
import {SocketController} from "./controllers/socket";
import {EquipmentDetailComponent} from './controllers/equipment-detail';

import {EquipmentListComponent} from './controllers/equipment-list';

@Component({
  selector: 'my-app',
  template: `
  <a [routerLink]="['SocketPath']">Socket</a>
  <a [routerLink]="['EquipmentsPath']">Equipment</a>
  <br>
  <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [CustomerService]
})

@RouteConfig([
  {path: '/', component: EquipmentListComponent, useAsDefault: true, as: "EquipmentsPath"},
  {path: '/socket', component: SocketController, as: 'SocketPath'}
])

export class App { }
