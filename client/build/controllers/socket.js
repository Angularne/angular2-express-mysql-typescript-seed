/// <reference path="../../../server/typings/tsd.d.ts"/>
System.register(['angular2/core', 'angular2/router', 'angular2/platform/browser'], function(exports_1) {
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
    var core_1, router_1, browser_1;
    var SERVER_ADDRESS, SocketController;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            //let SERVER_ADDRESS = 'http://109.189.16.142:3000';
            //let SERVER_ADDRESS = 'http://158.38.186.59:3000';
            SERVER_ADDRESS = 'http://localhost:3000';
            SocketController = (function () {
                function SocketController(title) {
                    this.text = ' ';
                    title.setTitle('Socket');
                }
                SocketController.prototype.ngOnInit = function () {
                    var _this = this;
                    this.socket = io.connect(SERVER_ADDRESS);
                    this.socket.on('change', function (data) {
                        _this.text = data.text;
                        _this.clientsConnected = data.clients;
                    });
                    console.log('local: ' + localStorage.getItem('socket'));
                    console.log('session: ' + sessionStorage.getItem('socket'));
                };
                SocketController.prototype.ngOnDestroy = function () {
                    this.socket.close();
                };
                SocketController.prototype.send = function () {
                    this.socket.emit('send', { text: this.text });
                };
                SocketController = __decorate([
                    core_1.Component({
                        selector: 'socket',
                        templateUrl: 'app/views/socket.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [browser_1.Title]
                    }), 
                    __metadata('design:paramtypes', [browser_1.Title])
                ], SocketController);
                return SocketController;
            }());
            exports_1("SocketController", SocketController);
        }
    }
});
//# sourceMappingURL=socket.js.map