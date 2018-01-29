(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('mobx'), require('react'), require('mobx-react'), require('react-intl')) :
	typeof define === 'function' && define.amd ? define(['exports', 'mobx', 'react', 'mobx-react', 'react-intl'], factory) :
	(factory((global.mobxReactIntl = {}),global.mobx,global.react,global.mobxReact,global['react-Intl']));
}(this, (function (exports,mobx,React,mobxReact,reactIntl) { 'use strict';

var _formatMessage = require("format-message");
var LOCALE = "locale";
var LocaleStore = /** @class */ (function () {
    function LocaleStore(defaultLocale, translations) {
        var _this = this;
        this._locale = mobx.observable(""); // the locale value
        this.formatMessage = function (id, values) {
            if (!(id in _this.messages)) {
                console.warn("Id not found in intl list: " + id);
                return id;
            }
            return _formatMessage(_this.messages[id], values);
        };
        this.formatDefinedMessage = function (message, values) {
            if (!_this.messages[message.id]) {
                console.warn("Id not found in intl list: " + message.id);
                return message.defaultMessage;
            }
            return _formatMessage(_this.messages[message.id], values);
        };
        this.translations = translations;
        if (typeof (Storage) !== "undefined") {
            var storedLocale = localStorage.getItem(LOCALE);
            if (storedLocale && storedLocale in translations) {
                this.value = storedLocale;
            }
            else {
                this.value = defaultLocale;
            }
        }
        else {
            this.value = defaultLocale;
        }
    }
    
    Object.defineProperty(LocaleStore.prototype, "value", {
        get: function () {
            return this._locale.get();
        },
        set: function (value) {
            if (typeof (Storage) !== "undefined") {
                localStorage.setItem(LOCALE, value);
            }
            this._locale.set(value);
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(LocaleStore.prototype, "messages", {
        get: function () {
            return this.translations[this.value];
        },
        enumerable: true,
        configurable: true
    });
    return LocaleStore;
}());

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var MobxIntlProviderChild = function (_a) {
    var locale = _a.locale, children = _a.children, props = __rest(_a, ["locale", "children"]);
    var loc = locale.value;
    var messages = locale.messages;
    return React.createElement(reactIntl.IntlProvider, __assign({ key: loc, locale: loc, messages: messages }, props), children);
};
var MobxIntlProvider = mobxReact.inject("locale")(mobxReact.observer(MobxIntlProviderChild));

exports.LocaleStore = LocaleStore;
exports.MobxIntlProvider = MobxIntlProvider;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mobx-react-intl.umd.js.map
