System.register([], function(exports_1) {
    "use strict";
    var nextCustomerId, Customer, CustomerService;
    return {
        setters:[],
        execute: function() {
            nextCustomerId = 1;
            Customer = (function () {
                function Customer(name, city) {
                    if (name === void 0) { name = ""; }
                    if (city === void 0) { city = ""; }
                    if (name != "") {
                        this.id = nextCustomerId++;
                        this.name = name;
                        this.city = city;
                    }
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
            //Singleton (eager initialization) - achieved through @Component-providers in app.js
            CustomerService = (function () {
                function CustomerService() {
                    this.customers = [];
                    this.customers.push(new Customer("Ola", "Trondheim"));
                    this.customers.push(new Customer("Kari", "Oslo"));
                    this.customers.push(new Customer("Per", "Tromsø"));
                }
                CustomerService.prototype.getCustomers = function () {
                    return this.customers;
                };
                CustomerService.prototype.getCustomer = function (id) {
                    for (var c = 0; c < this.customers.length; c++) {
                        if (this.customers[c].id == id) {
                            return this.customers[c];
                        }
                    }
                };
                CustomerService.prototype.addCustomer = function (name, city) {
                    this.customers.push(new Customer(name, city));
                };
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
//# sourceMappingURL=customer.js.map