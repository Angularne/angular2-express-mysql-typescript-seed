System.register(['angular2/platform/browser', './app', 'angular2/router'], function(exports_1) {
    "use strict";
    var browser_1, app_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map