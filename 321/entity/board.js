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
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var bcrypt = require("bcryptjs");
var content = /** @class */ (function () {
    function content() {
    }
    content.prototype.hashPassword = function () {
        this.password = bcrypt.hashSync(this.password, 8);
    };
    content.prototype.checkIfUnencryptedPasswordIsValid = function (unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], content.prototype, "number", void 0);
    __decorate([
        typeorm_1.Column(),
        class_validator_1.Length(4, 10),
        __metadata("design:type", String)
    ], content.prototype, "contentid", void 0);
    __decorate([
        typeorm_1.Column()
        // @IsEmail()
        ,
        class_validator_1.IsUUID('4'),
        typeorm_1.Generated("uuid"),
        __metadata("design:type", String)
    ], content.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], content.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column()
        // @IsNotEmpty()  ;유니크
        ,
        class_validator_1.Length(4, 20),
        __metadata("design:type", String)
    ], content.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], content.prototype, "topic", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], content.prototype, "tag", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], content.prototype, "like", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], content.prototype, "unlike", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], content.prototype, "createAt", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], content.prototype, "updateAt", void 0);
    content = __decorate([
        typeorm_1.Entity()
    ], content);
    return content;
}());
exports.default = content;
//# sourceMappingURL=board.js.map