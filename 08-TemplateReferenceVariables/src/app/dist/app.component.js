"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.message = '';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: " <div class=\"app\">{{message}}\n    {{ message === 'Hey Aayush'}}\n    {{ message.length }}\n    {{ message.length < 12 }}\n    {{ message.length ? message : 'Amazon prime special' }}\n  </div> ",
            styles: [
                "\n      .app {\n        margin-top: 50px;\n        font-size: 22px;\n        color: #fff;\n        text-align: center;\n      }\n    ",
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
