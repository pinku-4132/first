System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1;
    var TweeterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweeterComponent = (function () {
                function TweeterComponent() {
                    console.log(this.data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweeterComponent.prototype, "data", void 0);
                TweeterComponent = __decorate([
                    core_1.Component({
                        selector: 'twitter',
                        template: "\n        <span class=\"border\"></span>\n        <div class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\" >\n                <img class=\"media-object\" src=\"{{data.imgUrl}}\">\n                </a>\n            </div>\n            <div class=\"media-body\" >\n                <h4 class=\"media-heading\">{{data.userId}}<span class=\"media-idfont\">{{data.userHandle}}</span></h4>\n                {{data.msgBody}}\n                <div>\n                    <like [totalLikes]=\"data.totalLikes\" [isLike]=\"data.isLike\"></like>\n                </div>\n            </div>            \n        </div>\n        ",
                        styles: ["\n        .media-idfont{\n                    color:#ccc;\n                    font-weight:1.2em;\n                }\n                .media{\n                    margin-border:20px;\n                }\n                .media{\n                    border-radius:10px;\n                }\n                .border{\n                    margin-border:5px;\n                }\n        "],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweeterComponent);
                return TweeterComponent;
            }());
            exports_1("TweeterComponent", TweeterComponent);
        }
    }
});
//# sourceMappingURL=twitter.component.js.map