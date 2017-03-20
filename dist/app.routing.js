"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var notfound_component_1 = require("./not-found/notfound.component");
var appRoutes = [
    { path: '',
        component: home_component_1.HomeComponent
        // redirectTo: '/about',
        // pathMatch: 'full'
    },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent },
];
exports.routeConfig = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map