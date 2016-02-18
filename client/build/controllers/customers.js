System.register(['angular2/core', 'angular2/router', '../data_access/customer'], function(exports_1) {
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
    var core_1, router_1, customer_1;
    var CustomersController;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_1_1) {
                customer_1 = customer_1_1;
            }],
        execute: function() {
            CustomersController = (function () {
                function CustomersController(customerService) {
                    this.customerService = customerService;
                    this.newCustomer = new customer_1.Customer();
                    this.customers = customerService.getCustomers();
                }
                CustomersController.prototype.onNewCustomer = function () {
                    this.customerService.addCustomer(this.newCustomer.name, this.newCustomer.city);
                    this.newCustomer.name = "";
                    this.newCustomer.city = "";
                };
                CustomersController.prototype.ngOnInit = function () { };
                CustomersController = __decorate([
                    core_1.Component({
                        selector: 'customers',
                        templateUrl: 'app/views/customers.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [customer_1.CustomerService])
                ], CustomersController);
                return CustomersController;
            }());
            exports_1("CustomersController", CustomersController);
        }
    }
});
//# sourceMappingURL=customers.js.map