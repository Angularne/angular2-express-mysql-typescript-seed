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
    var CustomerController;
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
            CustomerController = (function () {
                function CustomerController(_customerService, _params) {
                    this._customerService = _customerService;
                    this._params = _params;
                }
                CustomerController.prototype.ngOnInit = function () {
                    this.customer = this._customerService.getCustomer(+this._params.get('id')); //'+'converts to int, parseInt is bugged
                };
                CustomerController = __decorate([
                    core_1.Component({
                        selector: 'customer',
                        templateUrl: 'app/views/customer.html'
                    }), 
                    __metadata('design:paramtypes', [customer_1.CustomerService, router_1.RouteParams])
                ], CustomerController);
                return CustomerController;
            }());
            exports_1("CustomerController", CustomerController);
        }
    }
});
//# sourceMappingURL=customer.js.map