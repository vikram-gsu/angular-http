"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var users = Promise.resolve([
    {
        id: 1,
        name: 'Sasha Digiulian',
        username: 'sashadigiulian',
        avatar: 'https://pbs.twimg.com/profile_images/813605035200380928/4N8H-77s_400x400.jpg'
    },
    {
        id: 2,
        name: 'J.K. Rowling',
        username: 'jk_rowling',
        avatar: 'https://pbs.twimg.com/profile_images/834494640611065857/882iNSpp_400x400.jpg'
    },
    {
        id: 3,
        name: 'Alex Honnold',
        username: 'alexhonnold',
        avatar: 'https://pbs.twimg.com/profile_images/521729433426599937/0nntVU9L_400x400.jpeg'
    }
]);
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getAllUsers = function () {
        return users;
    };
    UserService.prototype.getUserByUsername = function (username) {
        return users.then(function (users) { return users.find(function (user) { return user.username === username; }); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map