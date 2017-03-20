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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/services/user.service");
var AboutUserComponent = (function () {
    function AboutUserComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedUser = this.route.snapshot.params['username'];
        this.userService.getUserByUsername(selectedUser).then(function (user) { return _this.user = user; });
        this.route.data.forEach(function (data) { return console.log(data); });
    };
    AboutUserComponent.prototype.goBack = function () {
        this.router.navigate(['/about']);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        styles: ["\n        img {\n            max-width: 300px;\n            margin: 20px auto;\n        }\n    "],
        template: "\n        <button type=\"button\" (click)=\"goBack()\" class=\"btn btn-info btn-sm\">Go Back</button>\n        <div class=\"jumbotron text-center\" *ngIf=\"user\">\n            <img [src]=\"user.avatar\" class=\"img-responsive img-circle\" />\n            {{user.name}}\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService, router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map