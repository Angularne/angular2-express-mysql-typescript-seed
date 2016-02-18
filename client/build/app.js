System.register(['angular2/core', 'angular2/router', './controllers/customers', './controllers/customer', './data_access/customer', "./controllers/socket"], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, customers_1, customer_1, customer_2, socket_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customers_1_1) {
                customers_1 = customers_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            },
            function (customer_2_1) {
                customer_2 = customer_2_1;
            },
            function (socket_1_1) {
                socket_1 = socket_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <a [routerLink]=\"['CustomersPath']\">Customers</a>\n  <a [routerLink]=\"['SocketPath']\">Socket</a>\n  <br>\n  <router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [customer_2.CustomerService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: customers_1.CustomersController, useAsDefault: true, as: "CustomersPath" },
                        { path: '/customer/:id', component: customer_1.CustomerController, as: "CustomerPath" },
                        { path: '/socket', component: socket_1.SocketController, as: 'SocketPath' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map