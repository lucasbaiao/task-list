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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar/navbar.component");
var module_import_guard_1 = require("./module-import-guard");
var toolbar_component_1 = require("./toolbar/toolbar.component");
var CoreModule = (function () {
    function CoreModule(parentModule) {
        module_import_guard_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule],
            declarations: [navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent],
            exports: [router_1.RouterModule,
                navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb3JlL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUErQztBQUUvQyw4REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELGlFQUErRDtBQVEvRDtJQUVFLG9CQUFxQyxZQUF3QjtRQUMzRCwwQ0FBb0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUpVLFVBQVU7UUFOdEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLG9DQUFnQixDQUFDO1lBQ2pELE9BQU8sRUFBRSxDQUFDLHFCQUFZO2dCQUNwQixrQ0FBZSxFQUFFLG9DQUFnQixDQUFDO1NBQ3JDLENBQUM7UUFHYyxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTt5Q0FBZSxVQUFVO09BRmxELFVBQVUsQ0FLdEI7SUFBRCxpQkFBQztDQUxELEFBS0MsSUFBQTtBQUxZLGdDQUFVIiwiZmlsZSI6ImFwcC9jb3JlL2NvcmUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XG5pbXBvcnQgeyBUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05hdmJhckNvbXBvbmVudCwgVG9vbGJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGUsXG4gICAgTmF2YmFyQ29tcG9uZW50LCBUb29sYmFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xuICB9XG59XG4iXX0=
