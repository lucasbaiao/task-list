"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DateFormatPipe = (function (_super) {
    __extends(DateFormatPipe, _super);
    function DateFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipe.prototype.transform = function (value, args) {
        return _super.prototype.transform.call(this, value, 'dd/MMM/yyyy');
    };
    DateFormatPipe = __decorate([
        core_1.Pipe({
            name: 'dateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}(common_1.DatePipe));
exports.DateFormatPipe = DateFormatPipe;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGlwZXMvZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBb0Q7QUFDcEQsMENBQTJDO0FBSzNDO0lBQW9DLGtDQUFRO0lBQTVDOztJQUlBLENBQUM7SUFIQyxrQ0FBUyxHQUFULFVBQVUsS0FBVSxFQUFFLElBQVU7UUFDOUIsTUFBTSxDQUFDLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUhVLGNBQWM7UUFIMUIsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFlBQVk7U0FDbkIsQ0FBQztPQUNXLGNBQWMsQ0FJMUI7SUFBRCxxQkFBQztDQUpELEFBSUMsQ0FKbUMsaUJBQVEsR0FJM0M7QUFKWSx3Q0FBYyIsImZpbGUiOiJhcHAvX3BpcGVzL2RhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RhdGVGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsICdkZC9NTU0veXl5eScpO1xuICB9XG59Il19
