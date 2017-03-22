System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweeterService;
    return {
        setters:[],
        execute: function() {
            TweeterService = (function () {
                function TweeterService() {
                }
                TweeterService.prototype.getTweetDetails = function () {
                    return [{
                            imgUrl: "http://lorempixel.com/100/100/people/?8",
                            userId: "Swara Bhaskar",
                            userHandle: "@swarabhaskar",
                            msgBody: "Hello!!jdjvcnjndhscxnjns jks   iindjncijncijd  njdnj nduishuifjgrrbjn niunrewf!!",
                            totalLikes: 10,
                            isLike: false
                        }, {
                            imgUrl: "http://lorempixel.com/100/100/people/?1",
                            userId: "Rani Mukherjee",
                            userHandle: "@ranimujkherjee",
                            msgBody: "Hello!!jdjvcnjndhscxnjns jks   iindjncijncijd  njdnj nduishuifjgrrbjn niunrewf!!",
                            totalLikes: 8,
                            isLike: true
                        }, {
                            imgUrl: "http://lorempixel.com/100/100/people/?2",
                            userId: "Katrina Kaif",
                            userHandle: "@kaifkatrina",
                            msgBody: "Hello!!jdjvcnjndhscxnjns jks   iindjncijncijd  njdnj nduishuifjgrrbjn niunrewf!!",
                            totalLikes: 0,
                            isLike: false
                        }];
                };
                return TweeterService;
            }());
            exports_1("TweeterService", TweeterService);
        }
    }
});
//# sourceMappingURL=tweeter.service.js.map