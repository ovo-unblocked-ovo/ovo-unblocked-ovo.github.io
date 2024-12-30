! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.sc = t() : e.sc = t()
}(self, (function() {
    return (() => {
        "use strict";
        var e = {
                930: (e, t, n) => {
                    n.d(t, {
                        default: () => P
                    });
                    var o = {};
                    n.r(o), n.d(o, {
                        AppEventNames: () => c,
                        AppEventParameterNames: () => l,
                        AvatarVariants: () => i,
                        BitmojiVariants: () => p,
                        ClientEventNames: () => s,
                        ErrorCodes: () => a,
                        MiniEventNames: () => u
                    });
                    var r, i, a, s, c, u, l, p, _ = function(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var o, r, i = n.call(e),
                                a = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(o = i.next()).done;) a.push(o.value)
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                            return a
                        },
                        d = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
                            return e
                        },
                        f = function() {
                            function e(e, t, n, o) {
                                this._parent = e, this._name = t, this.callback = n, this.scope = o, this.once = !1
                            }
                            return Object.defineProperty(e.prototype, "name", {
                                get: function() {
                                    return this._name
                                },
                                enumerable: !1,
                                configurable: !0
                            }), e.prototype.unbind = function() {
                                if (this._parent) {
                                    var e = this._parent._callbacks[this._name].indexOf(this); - 1 !== e && (this._parent._callbackActive[this._name] && this._parent._callbackActive[this._name] === this._parent._callbacks[this._name] && (this._parent._callbackActive[this._name] = this._parent._callbackActive[this._name].slice()), this._parent._callbacks[this._name].splice(e, 1), this._parent = null, this.callback = null, this.scope = null)
                                }
                            }, e
                        }(),
                        E = function() {
                            function e() {
                                this._callbacks = {}, this._callbackActive = {}
                            }
                            return e.prototype.on = function(e, t, n) {
                                if (e && "string" == typeof e && t) {
                                    this._callbacks[e] || (this._callbacks[e] = []), this._callbackActive[e] && this._callbackActive[e] === this._callbacks[e] && (this._callbackActive[e] = this._callbackActive[e].slice());
                                    var o = new f(this, e, t, n || this);
                                    return this._callbacks[e].push(o), o
                                }
                            }, e.prototype.once = function(e, t, n) {
                                var o = this.on(e, t, n);
                                if (o) return o.once = !0, o
                            }, e.prototype.unbind = function(e, t, n) {
                                if (e) this._callbackActive[e] && this._callbackActive[e] === this._callbacks[e] && (this._callbackActive[e] = this._callbackActive[e].slice());
                                else
                                    for (var o in this._callbackActive) this._callbacks[o] && this._callbacks[o] === this._callbackActive[o] && (this._callbackActive[o] = this._callbackActive[o].slice());
                                if (!e) return this._callbacks = {}, this;
                                if (!t) return delete this._callbacks[e], this;
                                var r = this._callbacks[e];
                                if (!r) return this;
                                for (var i = r.length; i--;) r[i].callback !== t || n && r[i].scope !== n || r[i].unbind();
                                return this
                            }, e.prototype.emit = function(e) {
                                for (var t, n, o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                                if (!e || !this._callbacks[e]) return this;
                                this._callbackActive[e] ? (this._callbackActive[e] === this._callbacks[e] && (this._callbackActive[e] = this._callbackActive[e].slice()), n = this._callbacks[e].slice()) : this._callbackActive[e] = this._callbacks[e];
                                for (var i = 0; i < (n || this._callbackActive[e]).length; i++) {
                                    var a = (n || this._callbackActive[e])[i];
                                    a.callback && (t = a.callback).call.apply(t, d([a.scope], o)), a.once && a.unbind()
                                }
                                return n || delete this._callbackActive[e], this
                            }, e
                        }(),
                        h = (r = function(e, t) {
                            return (r = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                })(e, t)
                        }, function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }),
                        A = function(e) {
                            function t() {
                                var t = e.call(this) || this;
                                return t._user = void 0, t._id = void 0, t._context = void 0, t._env = void 0, t._sessionId = void 0, t._conversationSize = 0, t._locale = void 0, t._safeAreaInsets = {
                                    top: 0,
                                    bottom: 0
                                }, t._authToken = void 0, t._authTokenExpiration = 0, t._volume = 0, t
                            }
                            return h(t, e), Object.defineProperty(t.prototype, "user", {
                                get: function() {
                                    return this._user
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "id", {
                                get: function() {
                                    return this._id
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "context", {
                                get: function() {
                                    return this._context
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "env", {
                                get: function() {
                                    return this._env
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "sessionId", {
                                get: function() {
                                    return this._sessionId
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "conversationSize", {
                                get: function() {
                                    return this._conversationSize
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "locale", {
                                get: function() {
                                    return this._locale
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "safeAreaInsets", {
                                get: function() {
                                    return this._safeAreaInsets
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "authTokenExpiration", {
                                get: function() {
                                    return this._authTokenExpiration
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "volume", {
                                get: function() {
                                    return this._volume
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "authToken", {
                                get: function() {
                                    return this._authToken
                                },
                                set: function(e) {
                                    if (!e) return this._authToken = e, void(this._authTokenExpiration = 0);
                                    this._authToken = e, this._authTokenExpiration = 1e3 * JSON.parse(atob(e.split(".")[1])).exp
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.updateSession = function(e, t, n) {
                                this.authToken = void 0, this._sessionId = e, this._conversationSize = t, this._context = n
                            }, t
                        }(E),
                        S = function() {
                            var e = function(t, n) {
                                return (e = Object.setPrototypeOf || {
                                        __proto__: []
                                    }
                                    instanceof Array && function(e, t) {
                                        e.__proto__ = t
                                    } || function(e, t) {
                                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                    })(t, n)
                            };
                            return function(t, n) {
                                function o() {
                                    this.constructor = t
                                }
                                e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
                            }
                        }(),
                        T = function(e) {
                            function t(t, n, o, r) {
                                void 0 === r && (r = "#FFFFFF");
                                var i = e.call(this) || this;
                                return i.id = t, i.avatarId = n, i.name = o, i.color = r, i
                            }
                            return S(t, e), t
                        }(E);
                    ! function(e) {
                        e.DEFAULT = "20004322", e.HAPPY = "20004321", e.BORED = "10226843", e.LAUGHINGCRY = "20004320", e.CRY = "20004319", e.SHOCK = "20004318", e.SAD = "10232166", e.THINKING = "20004317", e.SURPRISE = "20004323", e.YAWN = "20004324", e.CHEEKY = "20004325", e.RELAX = "20004326", e.CONFUSED = "20004327", e.DEER = "20004329", e.CAT = "20004331", e.DOG = "20004332", e.HALO = "20004333", e.RAINBOW = "20004336", e.MONEYEYES = "20004337", e.WINK = "10212039", e.GRIN = "10212371", e.ANGRY = "10212034", e.WAVE = "10211812", e.KISS = "10212029", e.HEARTEYES = "10227009", e.SUNGLASSES = "10223291", e.EVIL = "10221921", e.PEEK = "10208529", e.SLEEP = "10212036", e.SHH = "10219373", e.ROLL = "10212047", e.SWEAT = "10218905", e.CROWN = "10219581", e.HEARTBREAK = "10227483", e.STAYTUNED = "10214712", e.SHRUG = "9422789", e.EMBARRASSED = "10228567"
                    }(i || (i = {})),
                    function(e) {
                        e.CLIENT_STATE_INVALID = "CLIENT_STATE_INVALID", e.CLIENT_UNSUPPORTED = "CLIENT_UNSUPPORTED", e.CONFLICT_REQUEST = "CONFLICT_REQUEST", e.INVALID_PARAM = "INVALID_PARAM", e.LENS_UNLOCK_FAILURE = "LENS_UNLOCK_FAILURE", e.NETWORK_FAILURE = "NETWORK_FAILURE", e.NETWORK_NOT_REACHABLE = "NETWORK_NOT_REACHABLE", e.RESOURCE_NOT_AVAILABLE = "RESOURCE_NOT_AVAILABLE", e.RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND", e.RV_NO_FILL = "RV_NO_FILL", e.RV_NO_MATCH = "RV_NO_MATCH", e.RV_NOT_LOADED = "RV_NOT_LOADED", e.RV_RATE_LIMITED = "RV_RATE_LIMITED", e.USER_REJECTION = "USER_REJECTION", e.UNKNOWN_SCRIPT = "UNKNOWN_SCRIPT", e.INVALID_CONFIG = "INVALID_CONFIG"
                    }(a || (a = {})),
                    function(e) {
                        e.VOLUME_CHANGED = "volumeChanged", e.AD_READY = "adReady", e.AD_COMPLETE = "adComplete", e.DID_LOSE_FOCUS = "didLoseFocus", e.DID_GAIN_FOCUS = "didGainFocus", e.SAFE_AREA_DID_UPDATE = "safeAreaDidUpdate", e.DID_PRESENT_LEADERBOARD = "didPresentLeaderboard", e.DID_DISMISS_LEADERBOARD = "didDismissLeaderboard"
                    }(s || (s = {})),
                    function(e) {
                        e.ONBOARDING_START = "ONBOARDING_START", e.ONBOARDING_STAGE_COMPLETE = "ONBOARDING_STAGE_COMPLETE", e.ONBOARDING_COMPLETE = "ONBOARDING_COMPLETE", e.CLICK_PLAY = "CLICK_PLAY", e.MATCH_START = "MATCH_START", e.MATCH_END = "MATCH_END", e.SHOP_START = "SHOP_START", e.SHOP_EXIT = "SHOP_EXIT", e.SHOP_TRANSACTION = "SHOP_TRANSACTION"
                    }(c || (c = {})),
                    function(e) {
                        e.VIEW_CONTENT = "VIEW_CONTENT", e.RATE = "RATE", e.RESERVE = "RESERVE", e.SEARCH = "SEARCH", e.PAGE_VIEW = "PAGE_VIEW", e.LIST_VIEW = "LIST_VIEW", e.COMPLETE_TUTORIAL = "COMPLETE_TUTORIAL", e.LEVEL_COMPLETE = "LEVEL_COMPLETE", e.ACHIEVEMENT_UNLOCKED = "ACHIEVEMENT_UNLOCKED", e.SIGN_UP = "SIGN_UP", e.LOGIN = "LOGIN", e.PURCHASE = "PURCHASE", e.SUBSCRIBE = "SUBSCRIBE", e.SPEND_CREDIT = "SPEND_CREDIT", e.START_TRIAL = "START_TRIAL", e.ADD_TO_WISHLIST = "ADD_TO_WISHLIST", e.START_CHECKOUT = "START_CHECKOUT", e.EXIT_CHECKOUT = "EXIT_CHECKOUT", e.ADD_CART = "ADD_CART", e.ADD_BILLING = "ADD_BILLING", e.INVITE = "INVITE", e.CUSTOM_EVENT_1 = "CUSTOM_EVENT_1", e.CUSTOM_EVENT_2 = "CUSTOM_EVENT_2", e.CUSTOM_EVENT_3 = "CUSTOM_EVENT_3", e.CUSTOM_EVENT_4 = "CUSTOM_EVENT_4", e.CUSTOM_EVENT_5 = "CUSTOM_EVENT_5"
                    }(u || (u = {})),
                    function(e) {
                        e.STAGE_ID = "STAGE_ID", e.ONBOARDING_TIME = "ONBOARDING_TIME", e.ENTRY = "ENTRY", e.MATCH_TYPE = "MATCH_TYPE", e.MATCH_ID = "MATCH_ID", e.MATCH_TIME = "MATCH_TIME", e.SHOP_TIME = "SHOP_TIME", e.ITEM_ID = "ITEM_ID", e.SOURCE = "SOURCE", e.PAYMENT_TYPE = "PAYMENT_TYPE", e.PRICE = "PRICE", e.ITEM_CATEGORY = "ITEM_CATEGORY", e.SUCCESS = "SUCCESS", e.TRANSACTION_ID = "TRANSACTION_ID", e.CURRENCY = "CURRENCY", e.SEACH_STRING = "SEARCH_STRING", e.PAGE_INFORMATION = "PAGE_INFORMATION", e.PAYMENT_INFO_AVAILABLE = "PAYMENT_INFO_AVAILABLE", e.NUMBER_ITEMS = "NUMBER_ITEMS"
                    }(l || (l = {})),
                    function(e) {
                        e.USER = "USER", e.GROUP = "GROUP"
                    }(p || (p = {}));
                    var v = function() {
                            return (v = Object.assign || function(e) {
                                for (var t, n = 1, o = arguments.length; n < o; n++)
                                    for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                return e
                            }).apply(this, arguments)
                        },
                        I = function(e, t, n, o) {
                            return new(n || (n = Promise))((function(r, i) {
                                function a(e) {
                                    try {
                                        c(o.next(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function s(e) {
                                    try {
                                        c(o.throw(e))
                                    } catch (e) {
                                        i(e)
                                    }
                                }

                                function c(e) {
                                    var t;
                                    e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(a, s)
                                }
                                c((o = o.apply(e, t || [])).next())
                            }))
                        },
                        b = function(e, t) {
                            var n, o, r, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & r[0]) throw r[1];
                                    return r[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: s(0),
                                throw: s(1),
                                return: s(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function s(i) {
                                return function(s) {
                                    return function(i) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                                            switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    r = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, o = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < r[1]) {
                                                        a.label = r[1], r = i;
                                                        break
                                                    }
                                                    if (r && a.label < r[2]) {
                                                        a.label = r[2], a.ops.push(i);
                                                        break
                                                    }
                                                    r[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], o = 0
                                        } finally {
                                            n = r = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, s])
                                }
                            }
                        },
                        C = window,
                        O = v(v({
                            _device: {
                                android: !1,
                                ios: !1
                            },
                            _screenshotCompleteCallback: void 0,
                            _b: void 0,
                            _k: void 0,
                            _h: {},
                            _u: "",
                            app: void 0,
                            version: "2.4.0",
                            setLoadingProgress: function(e) {
                                return new Promise((function(t) {
                                    m().then((function(n) {
                                        n ? n.callHandler("setLoadingProgress", {
                                            progress: e
                                        }, t) : t(y("setLoadingProgress", {
                                            progress: e
                                        }))
                                    }))
                                }))
                            },
                            loadingComplete: function() {
                                return new Promise((function(e) {
                                    m().then((function(t) {
                                        t ? t.callHandler("loadingComplete", {}, e) : e(y("loadingComplete", {}))
                                    }))
                                }))
                            },
                            initialize: function() {
                                return I(void 0, void 0, void 0, (function() {
                                    var e, t, n;
                                    return b(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, m()];
                                            case 1:
                                                return e = o.sent(), O._b = e, O.app = new A, C.pc && (t = C.pc.app).on("postrender", (function() {
                                                    if (O._screenshotCompleteCallback) {
                                                        var e = t.graphicsDevice.canvas.toDataURL();
                                                        O._screenshotCompleteCallback(e), O._screenshotCompleteCallback = void 0
                                                    }
                                                })), R("setVolume", (function(e) {
                                                    C.pc && (C.pc.app.systems.sound.volume = e), O.app._volume = e, O.app.emit(s.VOLUME_CHANGED, e)
                                                })), R("didTakeScreenshot", (function(e, t) {
                                                    O._screenshotCompleteCallback = t
                                                })), R("adReady", (function(e) {
                                                    O.app.emit(s.AD_READY, e)
                                                })), R("adComplete", (function(e) {
                                                    O.app.emit(s.AD_COMPLETE, e)
                                                })), R("didLoseFocus", (function(e) {
                                                    O.app.emit(s.DID_LOSE_FOCUS, e)
                                                })), R("didGainFocus", (function(e) {
                                                    O.app.emit(s.DID_GAIN_FOCUS, e)
                                                })), R("safeAreaDidUpdate", (function(e) {
                                                    O.app._safeAreaInsets = e.safeAreaInsets, O.app.emit(s.SAFE_AREA_DID_UPDATE, e)
                                                })), R("didPresentLeaderboard", (function(e) {
                                                    O.app.emit(s.DID_PRESENT_LEADERBOARD, e)
                                                })), R("didDismissLeaderboard", (function(e) {
                                                    O.app.emit(s.DID_DISMISS_LEADERBOARD, e)
                                                })), R("loadScriptFile", (function(e, t) {
                                                    void 0 === e && (e = []), e.forEach((function(e) {
                                                        if ("WCL" === e) {
                                                            var n = O,
                                                                o = window.console;
                                                            o && (n.ConsoleLogs = [], ["info", "log", "warn", "error"].forEach((function(e) {
                                                                return function(e) {
                                                                    var t = o[e];
                                                                    o[e] = function() {
                                                                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                                                        n.ConsoleLogs.push("[" + (new Date).toUTCString() + "] " + e + ": " + Array.prototype.slice.apply(r).join(" ")), n.ConsoleLogs.length > 1e3 && n.ConsoleLogs.shift(), t.apply && t.apply(o, r)
                                                                    }
                                                                }(e)
                                                            })), R("getConsoleLogs", (function(e, t) {
                                                                return t(n.ConsoleLogs)
                                                            })))
                                                        } else {
                                                            if ("MFPSM" !== e) return t({
                                                                error: {
                                                                    code: a.UNKNOWN_SCRIPT,
                                                                    message: e
                                                                }
                                                            });
                                                            var r = 0,
                                                                i = {
                                                                    lastFiveFps: [],
                                                                    lastSixtyFps: [],
                                                                    lastFiveFpsSum: 0,
                                                                    lastSixtyFpsSum: 0,
                                                                    averageFpsLastFiveSec: 0,
                                                                    averageFpsLastSixtySec: 0,
                                                                    lowestAverageFpsForFiveSec: Number.MAX_VALUE,
                                                                    numFrames: 0,
                                                                    timer: 0,
                                                                    goodSeconds: [],
                                                                    currentSecondIsGood: !0,
                                                                    goodSecondsCount: 0
                                                                };
                                                            if (R("getTestAutomationMetrics", (function(e, t) {
                                                                    t({
                                                                        metrics: {
                                                                            AVERAGE_FPS_60S: i.averageFpsLastSixtySec,
                                                                            LOWEST_AVG_FPS_5S: i.lowestAverageFpsForFiveSec,
                                                                            GOOD_SECONDS_COUNT: i.goodSecondsCount
                                                                        }
                                                                    })
                                                                })), C.pc) {
                                                                var s = C.pc;
                                                                s.app.on("update", (function(e) {
                                                                    if (i.numFrames++, 0 != r) {
                                                                        var t = s.now() - r;
                                                                        if (r += t, i.timer += t, t > 50 && (i.currentSecondIsGood = !1), i.timer >= 1e3) {
                                                                            for (i.lastFiveFpsSum += i.numFrames, i.lastFiveFps.push(i.numFrames); i.lastFiveFps.length > 5;) i.lastFiveFpsSum -= i.lastFiveFps.shift() || 0;
                                                                            for (i.lastSixtyFpsSum += i.numFrames, i.lastSixtyFps.push(i.numFrames); i.lastSixtyFps.length > 60;) i.lastSixtyFpsSum -= i.lastSixtyFps.shift() || 0;
                                                                            for (i.numFrames < 30 && (i.currentSecondIsGood = !1), 1 == i.currentSecondIsGood ? (i.goodSeconds.push(1), i.goodSecondsCount += 1) : i.goodSeconds.push(0); i.goodSeconds.length > 60;) i.goodSecondsCount -= i.goodSeconds.shift() || 0;
                                                                            i.averageFpsLastFiveSec = Math.round(i.lastFiveFpsSum / i.lastFiveFps.length), i.averageFpsLastSixtySec = Math.round(i.lastSixtyFpsSum / i.lastSixtyFps.length), 5 == i.lastFiveFps.length && (i.lowestAverageFpsForFiveSec = Math.min(i.lowestAverageFpsForFiveSec, i.averageFpsLastFiveSec)), i.numFrames = 0, i.currentSecondIsGood = !0, i.timer -= 1e3
                                                                        }
                                                                    } else r = s.now()
                                                                }))
                                                            }
                                                        }
                                                    })), t()
                                                })), O._b || D(), [4, y("initialize", {
                                                    minimumClientSupportedVersion: 20210719
                                                })];
                                            case 2:
                                                return n = o.sent(), O.app._id = n.applicationId, O.app._context = n.context, O.app._env = n.env, O.app._sessionId = n.sessionId, O.app._locale = n.locale, n.conversationSize && (O.app._conversationSize = n.conversationSize), n.safeAreaInsets && (O.app._safeAreaInsets = n.safeAreaInsets), n.volume ? (O.app._volume = n.volume, C.pc && (C.pc.app.systems.sound.volume = n.volume)) : n.volume = 0, n.user && (O.app._user = new T(n.user.id, n.user.avatarId, n.user.name, n.user.color)), [2, v(v({}, n), {
                                                    user: O.app._user
                                                })]
                                        }
                                    }))
                                }))
                            },
                            fetchAuthToken: function() {
                                return I(void 0, void 0, void 0, (function() {
                                    var e;
                                    return b(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return O.app.authTokenExpiration > Date.now() + 5e3 ? [2, {
                                                    token: O.app.authToken
                                                }] : [4, y("fetchAuthToken")];
                                            case 1:
                                                return (e = t.sent()).token && (O.app.authToken = e.token), [2, e]
                                        }
                                    }))
                                }))
                            },
                            fetchAvatar2D: function(e, t, n) {
                                return y("fetchAvatar2D", {
                                    avatarId: e,
                                    variant: t,
                                    size: n
                                })
                            },
                            fetchAvatar3D: function(e) {
                                return y("fetchAvatar3D", {
                                    avatarId: e
                                })
                            },
                            playWithFriends: function(e) {
                                return I(void 0, void 0, void 0, (function() {
                                    var t;
                                    return b(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, y("playWithFriends", {
                                                    maxNumberOfPlayers: e
                                                })];
                                            case 1:
                                                return t = n.sent(), O.app.updateSession(t.sessionId, t.conversationSize, "CONVERSATION"), O.app._user = new T(t.user.id, t.user.avatarId, t.user.name, t.user.color), [2, t]
                                        }
                                    }))
                                }))
                            },
                            playWithStrangers: function() {
                                return I(void 0, void 0, void 0, (function() {
                                    var e;
                                    return b(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, y("playWithStrangers")];
                                            case 1:
                                                return e = t.sent(), O.app.updateSession(e.sessionId, 1, "INDIVIDUAL"), [2, e]
                                        }
                                    }))
                                }))
                            },
                            getUnconsumedAds: function() {
                                return y("getUnconsumedAds")
                            },
                            initializeAds: function(e) {
                                return y("initializeAds", {
                                    slotIds: e
                                })
                            },
                            isAdReady: function(e) {
                                return y("isAdReady", {
                                    slotId: e
                                })
                            },
                            watchAd: function(e, t) {
                                return y("watchAd", {
                                    slotId: e,
                                    developerPayload: t
                                })
                            },
                            consumeAd: function(e) {
                                return y("consumeAd", {
                                    requestId: e
                                })
                            },
                            localStorageSetData: function(e) {
                                return y("localStorageSetData", {
                                    data: e
                                })
                            },
                            localStorageGetData: function(e) {
                                return y("localStorageGetData", {
                                    keys: e
                                })
                            },
                            localStorageDeleteData: function(e) {
                                return y("localStorageDeleteData", {
                                    keys: e
                                })
                            },
                            presentPrivacyPolicy: function() {
                                return y("presentPrivacyPolicy")
                            },
                            presentTermsOfService: function() {
                                return y("presentTermsOfService")
                            },
                            startLoggingFPS: function() {
                                return I(void 0, void 0, void 0, (function() {
                                    return b(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return C.Android ? [4, y("startLoggingFPS")] : [3, 2];
                                            case 1:
                                                e.sent(), e.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            endLoggingFPS: function(e) {
                                return I(void 0, void 0, void 0, (function() {
                                    return b(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return C.Android ? [4, y("endLoggingFPS", {
                                                    success: e
                                                })] : [3, 2];
                                            case 1:
                                                t.sent(), t.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            shareLensToSnapchat: function(e, t, n) {
                                return y("shareLensToSnapchat", {
                                    lensUUID: e,
                                    shareInfo: t,
                                    lensLaunchData: n
                                })
                            },
                            shareMediaToSnapchat: function(e, t) {
                                return y("shareMediaToSnapchat", {
                                    stickers: e,
                                    shareInfo: t
                                })
                            },
                            logEvent: function(e, t) {
                                return y("logEvent", {
                                    eventName: e,
                                    parameters: t
                                })
                            },
                            submitLeaderboardScore: function(e, t) {
                                return y("submitLeaderboardScore", {
                                    leaderboardId: e,
                                    score: t
                                })
                            },
                            presentLeaderboard: function(e) {
                                return y("presentLeaderboard", {
                                    leaderboardId: e
                                })
                            },
                            shareAppToChat: function(e, t, n) {
                                return y("shareAppToChat", {
                                    shareCard: e,
                                    imageShareCard: t,
                                    shareInfo: n
                                })
                            },
                            getShareInfo: function() {
                                return y("getShareInfo")
                            },
                            presentWebpage: function(e) {
                                return y("presentWebpage", {
                                    url: e
                                })
                            },
                            getUnconsumedPurchases: function() {
                                return y("getUnconsumedPurchases")
                            },
                            getAllProducts: function() {
                                return y("getAllProducts", {})
                            },
                            getProducts: function(e) {
                                return y("getProducts", {
                                    skus: e
                                })
                            },
                            purchase: function(e) {
                                return y("purchase", {
                                    sku: e
                                })
                            },
                            consumePurchase: function(e) {
                                return y("consumePurchase", {
                                    transactionId: e
                                })
                            },
                            isTokenShopSupported: function() {
                                return y("isTokenShopSupported")
                            },
                            sendUpdateNotification: function(e, t) {
                                return y("sendUpdateNotification", {
                                    updateId: e,
                                    inputs: t
                                })
                            },
                            sendCustomUpdateToChat: function(e, t, n, o) {
                                return y("sendCustomUpdateToChat", {
                                    updateId: e,
                                    inputs: t,
                                    bitmojiVariant: n,
                                    shareInfo: o
                                })
                            }
                        }, o), {
                            App: A,
                            Events: E,
                            User: T
                        }),
                        m = function() {
                            return new Promise((function(e) {
                                if (C.Android)
                                    if (O._device.android = !0, C.bridge) e(C.bridge);
                                    else {
                                        var t = C.jsBridgeSetupCallback;
                                        C.jsBridgeSetupCallback = function() {
                                            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                                            t && t.apply(this, n), e.apply(this, n)
                                        }
                                    }
                                else {
                                    if (O._device.ios = !0, O._k) return void e(void 0);
                                    for (var n = document.location.search.substring(1).split("&"), o = void 0, r = void 0, i = void 0, a = 0; a < n.length; a++) {
                                        var s = n[a].split("="),
                                            c = decodeURIComponent(s[0]);
                                        "k" == c ? r = decodeURIComponent(s[1]) : "b" === c ? o = decodeURIComponent(s[1]) : "p" === c && (i = decodeURIComponent(s[1]))
                                    }
                                    if (o && "js" !== o) {
                                        if (r || console.warn("Missing k"), i) {
                                            var u = location.pathname.replace(/[^/]*\.[^/.]+$/, "").replace(/(^\/)|(\/$)/g, "");
                                            O._u = "http://127.0.0.1:" + i + "/" + (u ? u + "/" : "")
                                        }
                                        O._k = r, e(void 0)
                                    } else {
                                        if (C.WebViewJavascriptBridge) return e(C.WebViewJavascriptBridge);
                                        if (C.WVJBCallbacks) return C.WVJBCallbacks.push(e);
                                        C.WVJBCallbacks = [e];
                                        var l = document.createElement("iframe");
                                        l.style.display = "none", l.src = "https://__bridge_loaded__", document.documentElement.appendChild(l), setTimeout((function() {
                                            return document.documentElement.removeChild(l)
                                        }), 0)
                                    }
                                }
                            }))
                        },
                        N = function(e) {
                            return e.split(/([A-Z0-9][^A-Z0-9]*)/g).filter(Boolean).map((function(e) {
                                return e[0].toUpperCase()
                            })).join("")
                        };

                    function R(e, t) {
                        if (O._b) O._b.registerHandler(e, t);
                        else {
                            var n = N(e);
                            O._h[n] = t
                        }
                    }
                    var g = function(e) {
                        var t = e.headers.get("content-type");
                        return t && t.includes("application/json") ? e.json() : e.text()
                    };

                    function y(e, t) {
                        if (void 0 === t && (t = {}), O._b) return new Promise((function(n, o) {
                            var r;
                            null === (r = O._b) || void 0 === r || r.callHandler(e, t, (function(e) {
                                e && e.error ? o(e.error) : n(e)
                            }))
                        }));
                        var n = N(e);
                        return L(n, t).then((function(e) {
                            return new Promise((function(t, n) {
                                e && e.error ? n(e.error) : t(e)
                            }))
                        }))
                    }
                    var L = function(e, t, n) {
                            return I(void 0, void 0, void 0, (function() {
                                var o, r;
                                return b(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            o = O._u + "C/" + e + "?k=" + encodeURIComponent(O._k) + (t ? "&m=" + encodeURIComponent(JSON.stringify(t)) : "") + (n ? "&rid=" + encodeURIComponent(n) : ""), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 4, , 5]), [4, fetch(o)];
                                        case 2:
                                            return r = i.sent(), [4, g(r)];
                                        case 3:
                                            return [2, i.sent()];
                                        case 4:
                                            throw {
                                                error: i.sent()
                                            };
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        D = function() {
                            var e = O._u + "C/LPE?k=" + encodeURIComponent(O._k);
                            fetch(e).then((function(e) {
                                if (200 !== e.status) return console.error(e.statusText), void setTimeout((function() {
                                    D()
                                }), 1e3);
                                g(e).then((function(e) {
                                    Array.isArray(e) && e.forEach((function(e) {
                                        if (e.t) {
                                            var t = O._h[e.t];
                                            t && t(e.m, (function(t) {
                                                e.rid && function(e, t) {
                                                    L("LPR", t, e)
                                                }(e.rid, t)
                                            }))
                                        }
                                    }))
                                })), D()
                            })).catch((function(e) {
                                setTimeout((function() {
                                    D()
                                }), 1e3)
                            }))
                        };
                    "undefined" != typeof window && (C.sc = O);
                    const P = O
                }
            },
            t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                exports: {}
            };
            return e[o](r, r.exports, n), r.exports
        }
        return n.d = (e, t) => {
            for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
            })
        }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n(930)
    })().default
}));