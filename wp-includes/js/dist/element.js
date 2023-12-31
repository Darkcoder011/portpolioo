(function() {
    "use strict";
    var __webpack_modules__ = ({
        4470: (function(__unused_webpack_module, exports, __webpack_require__) {
            var m = __webpack_require__(1850);
            if (true) {
                exports.s = m.createRoot;
                exports.a = m.hydrateRoot;
            } else {
                var i;
            }
        }),
        1850: (function(module) {
            module.exports = window["ReactDOM"];
        })
    });
    var __webpack_module_cache__ = {};

    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }! function() {
        __webpack_require__.d = function(exports, definition) {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    }();
    ! function() {
        __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        }
    }();
    ! function() {
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        };
    }();
    var __webpack_exports__ = {};
    ! function() {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            "Children": function() {
                return external_React_namespaceObject.Children;
            },
            "Component": function() {
                return external_React_namespaceObject.Component;
            },
            "Fragment": function() {
                return external_React_namespaceObject.Fragment;
            },
            "Platform": function() {
                return platform;
            },
            "RawHTML": function() {
                return RawHTML;
            },
            "StrictMode": function() {
                return external_React_namespaceObject.StrictMode;
            },
            "Suspense": function() {
                return external_React_namespaceObject.Suspense;
            },
            "cloneElement": function() {
                return external_React_namespaceObject.cloneElement;
            },
            "concatChildren": function() {
                return concatChildren;
            },
            "createContext": function() {
                return external_React_namespaceObject.createContext;
            },
            "createElement": function() {
                return external_React_namespaceObject.createElement;
            },
            "createInterpolateElement": function() {
                return create_interpolate_element;
            },
            "createPortal": function() {
                return external_ReactDOM_.createPortal;
            },
            "createRef": function() {
                return external_React_namespaceObject.createRef;
            },
            "createRoot": function() {
                return client.s;
            },
            "findDOMNode": function() {
                return external_ReactDOM_.findDOMNode;
            },
            "flushSync": function() {
                return external_ReactDOM_.flushSync;
            },
            "forwardRef": function() {
                return external_React_namespaceObject.forwardRef;
            },
            "hydrate": function() {
                return external_ReactDOM_.hydrate;
            },
            "hydrateRoot": function() {
                return client.a;
            },
            "isEmptyElement": function() {
                return isEmptyElement;
            },
            "isValidElement": function() {
                return external_React_namespaceObject.isValidElement;
            },
            "lazy": function() {
                return external_React_namespaceObject.lazy;
            },
            "memo": function() {
                return external_React_namespaceObject.memo;
            },
            "render": function() {
                return external_ReactDOM_.render;
            },
            "renderToString": function() {
                return serialize;
            },
            "startTransition": function() {
                return external_React_namespaceObject.startTransition;
            },
            "switchChildrenNodeName": function() {
                return switchChildrenNodeName;
            },
            "unmountComponentAtNode": function() {
                return external_ReactDOM_.unmountComponentAtNode;
            },
            "useCallback": function() {
                return external_React_namespaceObject.useCallback;
            },
            "useContext": function() {
                return external_React_namespaceObject.useContext;
            },
            "useDebugValue": function() {
                return external_React_namespaceObject.useDebugValue;
            },
            "useDeferredValue": function() {
                return external_React_namespaceObject.useDeferredValue;
            },
            "useEffect": function() {
                return external_React_namespaceObject.useEffect;
            },
            "useId": function() {
                return external_React_namespaceObject.useId;
            },
            "useImperativeHandle": function() {
                return external_React_namespaceObject.useImperativeHandle;
            },
            "useInsertionEffect": function() {
                return external_React_namespaceObject.useInsertionEffect;
            },
            "useLayoutEffect": function() {
                return external_React_namespaceObject.useLayoutEffect;
            },
            "useMemo": function() {
                return external_React_namespaceObject.useMemo;
            },
            "useReducer": function() {
                return external_React_namespaceObject.useReducer;
            },
            "useRef": function() {
                return external_React_namespaceObject.useRef;
            },
            "useState": function() {
                return external_React_namespaceObject.useState;
            },
            "useSyncExternalStore": function() {
                return external_React_namespaceObject.useSyncExternalStore;
            },
            "useTransition": function() {
                return external_React_namespaceObject.useTransition;
            }
        });;
        var external_React_namespaceObject = window["React"];;
        let indoc, offset, output, stack;
        const tokenizer = /<(\/)?(\w+)\s*(\/)?>/g;

        function createFrame(element, tokenStart, tokenLength, prevOffset, leadingTextStart) {
            return {
                element,
                tokenStart,
                tokenLength,
                prevOffset,
                leadingTextStart,
                children: []
            };
        }
        const createInterpolateElement = (interpolatedString, conversionMap) => {
            indoc = interpolatedString;
            offset = 0;
            output = [];
            stack = [];
            tokenizer.lastIndex = 0;
            if (!isValidConversionMap(conversionMap)) {
                throw new TypeError('The conversionMap provided is not valid. It must be an object with values that are WPElements');
            }
            do {} while (proceed(conversionMap));
            return (0, external_React_namespaceObject.createElement)(external_React_namespaceObject.Fragment, null, ...output);
        };
        const isValidConversionMap = conversionMap => {
            const isObject = typeof conversionMap === 'object';
            const values = isObject && Object.values(conversionMap);
            return isObject && values.length && values.every(element => (0, external_React_namespaceObject.isValidElement)(element));
        };

        function proceed(conversionMap) {
            const next = nextToken();
            const [tokenType, name, startOffset, tokenLength] = next;
            const stackDepth = stack.length;
            const leadingTextStart = startOffset > offset ? offset : null;
            if (!conversionMap[name]) {
                addText();
                return false;
            }
            switch (tokenType) {
                case 'no-more-tokens':
                    if (stackDepth !== 0) {
                        const {
                            leadingTextStart: stackLeadingText,
                            tokenStart
                        } = stack.pop();
                        output.push(indoc.substr(stackLeadingText, tokenStart));
                    }
                    addText();
                    return false;
                case 'self-closed':
                    if (0 === stackDepth) {
                        if (null !== leadingTextStart) {
                            output.push(indoc.substr(leadingTextStart, startOffset - leadingTextStart));
                        }
                        output.push(conversionMap[name]);
                        offset = startOffset + tokenLength;
                        return true;
                    }
                    addChild(createFrame(conversionMap[name], startOffset, tokenLength));
                    offset = startOffset + tokenLength;
                    return true;
                case 'opener':
                    stack.push(createFrame(conversionMap[name], startOffset, tokenLength, startOffset + tokenLength, leadingTextStart));
                    offset = startOffset + tokenLength;
                    return true;
                case 'closer':
                    if (1 === stackDepth) {
                        closeOuterElement(startOffset);
                        offset = startOffset + tokenLength;
                        return true;
                    }
                    const stackTop = stack.pop();
                    const text = indoc.substr(stackTop.prevOffset, startOffset - stackTop.prevOffset);
                    stackTop.children.push(text);
                    stackTop.prevOffset = startOffset + tokenLength;
                    const frame = createFrame(stackTop.element, stackTop.tokenStart, stackTop.tokenLength, startOffset + tokenLength);
                    frame.children = stackTop.children;
                    addChild(frame);
                    offset = startOffset + tokenLength;
                    return true;
                default:
                    addText();
                    return false;
            }
        }

        function nextToken() {
            const matches = tokenizer.exec(indoc);
            if (null === matches) {
                return ['no-more-tokens'];
            }
            const startedAt = matches.index;
            const [match, isClosing, name, isSelfClosed] = matches;
            const length = match.length;
            if (isSelfClosed) {
                return ['self-closed', name, startedAt, length];
            }
            if (isClosing) {
                return ['closer', name, startedAt, length];
            }
            return ['opener', name, startedAt, length];
        }

        function addText() {
            const length = indoc.length - offset;
            if (0 === length) {
                return;
            }
            output.push(indoc.substr(offset, length));
        }

        function addChild(frame) {
            const {
                element,
                tokenStart,
                tokenLength,
                prevOffset,
                children
            } = frame;
            const parent = stack[stack.length - 1];
            const text = indoc.substr(parent.prevOffset, tokenStart - parent.prevOffset);
            if (text) {
                parent.children.push(text);
            }
            parent.children.push((0, external_React_namespaceObject.cloneElement)(element, null, ...children));
            parent.prevOffset = prevOffset ? prevOffset : tokenStart + tokenLength;
        }

        function closeOuterElement(endOffset) {
            const {
                element,
                leadingTextStart,
                prevOffset,
                tokenStart,
                children
            } = stack.pop();
            const text = endOffset ? indoc.substr(prevOffset, endOffset - prevOffset) : indoc.substr(prevOffset);
            if (text) {
                children.push(text);
            }
            if (null !== leadingTextStart) {
                output.push(indoc.substr(leadingTextStart, tokenStart - leadingTextStart));
            }
            output.push((0, external_React_namespaceObject.cloneElement)(element, null, ...children));
        }
        var create_interpolate_element = (createInterpolateElement);;

        function concatChildren(...childrenArguments) {
            return childrenArguments.reduce((accumulator, children, i) => {
                external_React_namespaceObject.Children.forEach(children, (child, j) => {
                    if (child && 'string' !== typeof child) {
                        child = (0, external_React_namespaceObject.cloneElement)(child, {
                            key: [i, j].join()
                        });
                    }
                    accumulator.push(child);
                });
                return accumulator;
            }, []);
        }

        function switchChildrenNodeName(children, nodeName) {
            return children && external_React_namespaceObject.Children.map(children, (elt, index) => {
                if (typeof elt ? .valueOf() === 'string') {
                    return (0, external_React_namespaceObject.createElement)(nodeName, {
                        key: index
                    }, elt);
                }
                const {
                    children: childrenProp,
                    ...props
                } = elt.props;
                return (0, external_React_namespaceObject.createElement)(nodeName, {
                    key: index,
                    ...props
                }, childrenProp);
            });
        }
        var external_ReactDOM_ = __webpack_require__(1850);
        var client = __webpack_require__(4470);;;
        const isEmptyElement = element => {
            if (typeof element === 'number') {
                return false;
            }
            if (typeof element ? .valueOf() === 'string' || Array.isArray(element)) {
                return !element.length;
            }
            return !element;
        };;
        const Platform = {
            OS: 'web',
            select: spec => 'web' in spec ? spec.web : spec.default,
            isWeb: true
        };
        var platform = (Platform);;
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        function isObject(o) {
            return Object.prototype.toString.call(o) === '[object Object]';
        }

        function isPlainObject(o) {
            var ctor, prot;
            if (isObject(o) === false) return false;
            ctor = o.constructor;
            if (ctor === undefined) return true;
            prot = ctor.prototype;
            if (isObject(prot) === false) return false;
            if (prot.hasOwnProperty('isPrototypeOf') === false) {
                return false;
            }
            return true;
        };
        var extendStatics = function(d, b) {
            extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) || function(d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            };
            return extendStatics(d, b);
        };

        function __extends(d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            }
            return __assign.apply(this, arguments);
        }

        function __rest(s, e) {
            var t = {};
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function")
                for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                }
            return t;
        }

        function __decorate(decorators, target, key, desc) {
            var c = arguments.length,
                r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else
                for (var i = decorators.length - 1; i >= 0; i--)
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
            return function(target, key) {
                decorator(target, key, paramIndex);
            }
        }

        function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
            function accept(f) {
                if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
                return f;
            }
            var kind = contextIn.kind,
                key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
            var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
            var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
            var _, done = false;
            for (var i = decorators.length - 1; i >= 0; i--) {
                var context = {};
                for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
                for (var p in contextIn.access) context.access[p] = contextIn.access[p];
                context.addInitializer = function(f) {
                    if (done) throw new TypeError("Cannot add initializers after decoration has completed");
                    extraInitializers.push(accept(f || null));
                };
                var result = (0, decorators[i])(kind === "accessor" ? {
                    get: descriptor.get,
                    set: descriptor.set
                } : descriptor[key], context);
                if (kind === "accessor") {
                    if (result === void 0) continue;
                    if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                    if (_ = accept(result.get)) descriptor.get = _;
                    if (_ = accept(result.set)) descriptor.set = _;
                    if (_ = accept(result.init)) initializers.unshift(_);
                } else if (_ = accept(result)) {
                    if (kind === "field") initializers.unshift(_);
                    else descriptor[key] = _;
                }
            }
            if (target) Object.defineProperty(target, contextIn.name, descriptor);
            done = true;
        };

        function __runInitializers(thisArg, initializers, value) {
            var useValue = arguments.length > 2;
            for (var i = 0; i < initializers.length; i++) {
                value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
            }
            return useValue ? value : void 0;
        };

        function __propKey(x) {
            return typeof x === "symbol" ? x : "".concat(x);
        };

        function __setFunctionName(f, name, prefix) {
            if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
            return Object.defineProperty(f, "name", {
                configurable: true,
                value: prefix ? "".concat(prefix, " ", name) : name
            });
        };

        function __metadata(metadataKey, metadataValue) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
            function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                    resolve(value);
                });
            }
            return new(P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }

                function step(result) {
                    result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        }

        function __generator(thisArg, body) {
            var _ = {
                    label: 0,
                    sent: function() {
                        if (t[0] & 1) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                },
                f, y, t, g;
            return g = {
                next: verb(0),
                "throw": verb(1),
                "return": verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
            }), g;

            function verb(n) {
                return function(v) {
                    return step([n, v]);
                };
            }

            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (g && (g = 0, op[0] && (_ = 0)), _) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        }
        var __createBinding = Object.create ? (function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
                desc = {
                    enumerable: true,
                    get: function() {
                        return m[k];
                    }
                };
            }
            Object.defineProperty(o, k2, desc);
        }) : (function(o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
        });

        function __exportStar(m, o) {
            for (var p in m)
                if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
        }

        function __values(o) {
            var s = typeof Symbol === "function" && Symbol.iterator,
                m = s && o[s],
                i = 0;
            if (m) return m.call(o);
            if (o && typeof o.length === "number") return {
                next: function() {
                    if (o && i >= o.length) o = void 0;
                    return {
                        value: o && o[i++],
                        done: !o
                    };
                }
            };
            throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }

        function __read(o, n) {
            var m = typeof Symbol === "function" && o[Symbol.iterator];
            if (!m) return o;
            var i = m.call(o),
                r, ar = [],
                e;
            try {
                while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
            } catch (error) {
                e = {
                    error: error
                };
            } finally {
                try {
                    if (r && !r.done && (m = i["return"])) m.call(i);
                } finally {
                    if (e) throw e.error;
                }
            }
            return ar;
        }

        function __spread() {
            for (var ar = [], i = 0; i < arguments.length; i++)
                ar = ar.concat(__read(arguments[i]));
            return ar;
        }

        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            for (var r = Array(s), k = 0, i = 0; i < il; i++)
                for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                    r[k] = a[j];
            return r;
        }

        function __spreadArray(to, from, pack) {
            if (pack || arguments.length === 2)
                for (var i = 0, l = from.length, ar; i < l; i++) {
                    if (ar || !(i in from)) {
                        if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                        ar[i] = from[i];
                    }
                }
            return to.concat(ar || Array.prototype.slice.call(from));
        }

        function __await(v) {
            return this instanceof __await ? (this.v = v, this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var g = generator.apply(thisArg, _arguments || []),
                i, q = [];
            return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i;

            function verb(n) {
                if (g[n]) i[n] = function(v) {
                    return new Promise(function(a, b) {
                        q.push([n, v, a, b]) > 1 || resume(n, v);
                    });
                };
            }

            function resume(n, v) {
                try {
                    step(g[n](v));
                } catch (e) {
                    settle(q[0][3], e);
                }
            }

            function step(r) {
                r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
            }

            function fulfill(value) {
                resume("next", value);
            }

            function reject(value) {
                resume("throw", value);
            }

            function settle(f, v) {
                if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
            }
        }

        function __asyncDelegator(o) {
            var i, p;
            return i = {}, verb("next"), verb("throw", function(e) {
                throw e;
            }), verb("return"), i[Symbol.iterator] = function() {
                return this;
            }, i;

            function verb(n, f) {
                i[n] = o[n] ? function(v) {
                    return (p = !p) ? {
                        value: __await(o[n](v)),
                        done: false
                    } : f ? f(v) : v;
                } : f;
            }
        }

        function __asyncValues(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var m = o[Symbol.asyncIterator],
                i;
            return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
                return this;
            }, i);

            function verb(n) {
                i[n] = o[n] && function(v) {
                    return new Promise(function(resolve, reject) {
                        v = o[n](v), settle(resolve, reject, v.done, v.value);
                    });
                };
            }

            function settle(resolve, reject, d, v) {
                Promise.resolve(v).then(function(v) {
                    resolve({
                        value: v,
                        done: d
                    });
                }, reject);
            }
        }

        function __makeTemplateObject(cooked, raw) {
            if (Object.defineProperty) {
                Object.defineProperty(cooked, "raw", {
                    value: raw
                });
            } else {
                cooked.raw = raw;
            }
            return cooked;
        };
        var __setModuleDefault = Object.create ? (function(o, v) {
            Object.defineProperty(o, "default", {
                enumerable: true,
                value: v
            });
        }) : function(o, v) {
            o["default"] = v;
        };

        function __importStar(mod) {
            if (mod && mod.__esModule) return mod;
            var result = {};
            if (mod != null)
                for (var k in mod)
                    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
            __setModuleDefault(result, mod);
            return result;
        }

        function __importDefault(mod) {
            return (mod && mod.__esModule) ? mod : {
                default: mod
            };
        }

        function __classPrivateFieldGet(receiver, state, kind, f) {
            if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        }

        function __classPrivateFieldSet(receiver, state, value, kind, f) {
            if (kind === "m") throw new TypeError("Private method is not writable");
            if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
            if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
        }

        function __classPrivateFieldIn(state, receiver) {
            if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
            return typeof state === "function" ? receiver === state : state.has(receiver);
        }

        function __addDisposableResource(env, value, async) {
            if (value !== null && value !== void 0) {
                if (typeof value !== "object") throw new TypeError("Object expected.");
                var dispose;
                if (async) {
                    if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                    dispose = value[Symbol.asyncDispose];
                }
                if (dispose === void 0) {
                    if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                    dispose = value[Symbol.dispose];
                }
                if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
                env.stack.push({
                    value: value,
                    dispose: dispose,
                    async: async
                });
            } else if (async) {
                env.stack.push({
                    async: true
                });
            }
            return value;
        }
        var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
            var e = new Error(message);
            return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
        };

        function __disposeResources(env) {
            function fail(e) {
                env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
                env.hasError = true;
            }

            function next() {
                while (env.stack.length) {
                    var rec = env.stack.pop();
                    try {
                        var result = rec.dispose && rec.dispose.call(rec.value);
                        if (rec.async) return Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } catch (e) {
                        fail(e);
                    }
                }
                if (env.hasError) throw env.error;
            }
            return next();
        }
        var tslib_es6 = ({
            __extends,
            __assign,
            __rest,
            __decorate,
            __param,
            __metadata,
            __awaiter,
            __generator,
            __createBinding,
            __exportStar,
            __values,
            __read,
            __spread,
            __spreadArrays,
            __spreadArray,
            __await,
            __asyncGenerator,
            __asyncDelegator,
            __asyncValues,
            __makeTemplateObject,
            __importStar,
            __importDefault,
            __classPrivateFieldGet,
            __classPrivateFieldSet,
            __classPrivateFieldIn,
            __addDisposableResource,
            __disposeResources,
        });;
        var SUPPORTED_LOCALE = {
            tr: {
                regexp: /\u0130|\u0049|\u0049\u0307/g,
                map: {
                    İ: "\u0069",
                    I: "\u0131",
                    İ: "\u0069",
                },
            },
            az: {
                regexp: /\u0130/g,
                map: {
                    İ: "\u0069",
                    I: "\u0131",
                    İ: "\u0069",
                },
            },
            lt: {
                regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
                map: {
                    I: "\u0069\u0307",
                    J: "\u006A\u0307",
                    Į: "\u012F\u0307",
                    Ì: "\u0069\u0307\u0300",
                    Í: "\u0069\u0307\u0301",
                    Ĩ: "\u0069\u0307\u0303",
                },
            },
        };

        function localeLowerCase(str, locale) {
            var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
            if (lang)
                return lowerCase(str.replace(lang.regexp, function(m) {
                    return lang.map[m];
                }));
            return lowerCase(str);
        }

        function lowerCase(str) {
            return str.toLowerCase();
        };
        var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
        var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;

        function noCase(input, options) {
            if (options === void 0) {
                options = {};
            }
            var _a = options.splitRegexp,
                splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a,
                _b = options.stripRegexp,
                stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b,
                _c = options.transform,
                transform = _c === void 0 ? lowerCase : _c,
                _d = options.delimiter,
                delimiter = _d === void 0 ? " " : _d;
            var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
            var start = 0;
            var end = result.length;
            while (result.charAt(start) === "\0")
                start++;
            while (result.charAt(end - 1) === "\0")
                end--;
            return result.slice(start, end).split("\0").map(transform).join(delimiter);
        }

        function replace(input, re, value) {
            if (re instanceof RegExp)
                return input.replace(re, value);
            return re.reduce(function(input, re) {
                return input.replace(re, value);
            }, input);
        };

        function dotCase(input, options) {
            if (options === void 0) {
                options = {};
            }
            return noCase(input, __assign({
                delimiter: "."
            }, options));
        };

        function paramCase(input, options) {
            if (options === void 0) {
                options = {};
            }
            return dotCase(input, __assign({
                delimiter: "-"
            }, options));
        };
        var external_wp_escapeHtml_namespaceObject = window["wp"]["escapeHtml"];;

        function RawHTML({
            children,
            ...props
        }) {
            let rawHtml = '';
            external_React_namespaceObject.Children.toArray(children).forEach(child => {
                if (typeof child === 'string' && child.trim() !== '') {
                    rawHtml += child;
                }
            });
            return (0, external_React_namespaceObject.createElement)('div', {
                dangerouslySetInnerHTML: {
                    __html: rawHtml
                },
                ...props
            });
        };
        const {
            Provider,
            Consumer
        } = (0, external_React_namespaceObject.createContext)(undefined);
        const ForwardRef = (0, external_React_namespaceObject.forwardRef)(() => {
            return null;
        });
        const ATTRIBUTES_TYPES = new Set(['string', 'boolean', 'number']);
        const SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
        const BOOLEAN_ATTRIBUTES = new Set(['allowfullscreen', 'allowpaymentrequest', 'allowusermedia', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'download', 'formnovalidate', 'hidden', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected', 'typemustmatch']);
        const ENUMERATED_ATTRIBUTES = new Set(['autocapitalize', 'autocomplete', 'charset', 'contenteditable', 'crossorigin', 'decoding', 'dir', 'draggable', 'enctype', 'formenctype', 'formmethod', 'http-equiv', 'inputmode', 'kind', 'method', 'preload', 'scope', 'shape', 'spellcheck', 'translate', 'type', 'wrap']);
        const CSS_PROPERTIES_SUPPORTS_UNITLESS = new Set(['animation', 'animationIterationCount', 'baselineShift', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'columnCount', 'cx', 'cy', 'fillOpacity', 'flexGrow', 'flexShrink', 'floodOpacity', 'fontWeight', 'gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart', 'lineHeight', 'opacity', 'order', 'orphans', 'r', 'rx', 'ry', 'shapeImageThreshold', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'tabSize', 'widows', 'x', 'y', 'zIndex', 'zoom']);

        function hasPrefix(string, prefixes) {
            return prefixes.some(prefix => string.indexOf(prefix) === 0);
        }

        function isInternalAttribute(attribute) {
            return 'key' === attribute || 'children' === attribute;
        }

        function getNormalAttributeValue(attribute, value) {
            switch (attribute) {
                case 'style':
                    return renderStyle(value);
            }
            return value;
        }
        const SVG_ATTRIBUTE_WITH_DASHES_LIST = ['accentHeight', 'alignmentBaseline', 'arabicForm', 'baselineShift', 'capHeight', 'clipPath', 'clipRule', 'colorInterpolation', 'colorInterpolationFilters', 'colorProfile', 'colorRendering', 'dominantBaseline', 'enableBackground', 'fillOpacity', 'fillRule', 'floodColor', 'floodOpacity', 'fontFamily', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight', 'glyphName', 'glyphOrientationHorizontal', 'glyphOrientationVertical', 'horizAdvX', 'horizOriginX', 'imageRendering', 'letterSpacing', 'lightingColor', 'markerEnd', 'markerMid', 'markerStart', 'overlinePosition', 'overlineThickness', 'paintOrder', 'panose1', 'pointerEvents', 'renderingIntent', 'shapeRendering', 'stopColor', 'stopOpacity', 'strikethroughPosition', 'strikethroughThickness', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth', 'textAnchor', 'textDecoration', 'textRendering', 'underlinePosition', 'underlineThickness', 'unicodeBidi', 'unicodeRange', 'unitsPerEm', 'vAlphabetic', 'vHanging', 'vIdeographic', 'vMathematical', 'vectorEffect', 'vertAdvY', 'vertOriginX', 'vertOriginY', 'wordSpacing', 'writingMode', 'xmlnsXlink', 'xHeight'].reduce((map, attribute) => {
            map[attribute.toLowerCase()] = attribute;
            return map;
        }, {});
        const CASE_SENSITIVE_SVG_ATTRIBUTES = ['allowReorder', 'attributeName', 'attributeType', 'autoReverse', 'baseFrequency', 'baseProfile', 'calcMode', 'clipPathUnits', 'contentScriptType', 'contentStyleType', 'diffuseConstant', 'edgeMode', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'glyphRef', 'gradientTransform', 'gradientUnits', 'kernelMatrix', 'kernelUnitLength', 'keyPoints', 'keySplines', 'keyTimes', 'lengthAdjust', 'limitingConeAngle', 'markerHeight', 'markerUnits', 'markerWidth', 'maskContentUnits', 'maskUnits', 'numOctaves', 'pathLength', 'patternContentUnits', 'patternTransform', 'patternUnits', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'preserveAlpha', 'preserveAspectRatio', 'primitiveUnits', 'refX', 'refY', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'specularConstant', 'specularExponent', 'spreadMethod', 'startOffset', 'stdDeviation', 'stitchTiles', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'surfaceScale', 'systemLanguage', 'tableValues', 'targetX', 'targetY', 'textLength', 'viewBox', 'viewTarget', 'xChannelSelector', 'yChannelSelector'].reduce((map, attribute) => {
            map[attribute.toLowerCase()] = attribute;
            return map;
        }, {});
        const SVG_ATTRIBUTES_WITH_COLONS = ['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'xmlns:xlink'].reduce((map, attribute) => {
            map[attribute.replace(':', '').toLowerCase()] = attribute;
            return map;
        }, {});

        function getNormalAttributeName(attribute) {
            switch (attribute) {
                case 'htmlFor':
                    return 'for';
                case 'className':
                    return 'class';
            }
            const attributeLowerCase = attribute.toLowerCase();
            if (CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase]) {
                return CASE_SENSITIVE_SVG_ATTRIBUTES[attributeLowerCase];
            } else if (SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]) {
                return paramCase(SVG_ATTRIBUTE_WITH_DASHES_LIST[attributeLowerCase]);
            } else if (SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase]) {
                return SVG_ATTRIBUTES_WITH_COLONS[attributeLowerCase];
            }
            return attributeLowerCase;
        }

        function getNormalStylePropertyName(property) {
            if (property.startsWith('--')) {
                return property;
            }
            if (hasPrefix(property, ['ms', 'O', 'Moz', 'Webkit'])) {
                return '-' + paramCase(property);
            }
            return paramCase(property);
        }

        function getNormalStylePropertyValue(property, value) {
            if (typeof value === 'number' && 0 !== value && !CSS_PROPERTIES_SUPPORTS_UNITLESS.has(property)) {
                return value + 'px';
            }
            return value;
        }

        function renderElement(element, context, legacyContext = {}) {
            if (null === element || undefined === element || false === element) {
                return '';
            }
            if (Array.isArray(element)) {
                return renderChildren(element, context, legacyContext);
            }
            switch (typeof element) {
                case 'string':
                    return (0, external_wp_escapeHtml_namespaceObject.escapeHTML)(element);
                case 'number':
                    return element.toString();
            }
            const {
                type,
                props
            } = element;
            switch (type) {
                case external_React_namespaceObject.StrictMode:
                case external_React_namespaceObject.Fragment:
                    return renderChildren(props.children, context, legacyContext);
                case RawHTML:
                    const {
                        children,
                        ...wrapperProps
                    } = props;
                    return renderNativeComponent(!Object.keys(wrapperProps).length ? null : 'div', { ...wrapperProps,
                        dangerouslySetInnerHTML: {
                            __html: children
                        }
                    }, context, legacyContext);
            }
            switch (typeof type) {
                case 'string':
                    return renderNativeComponent(type, props, context, legacyContext);
                case 'function':
                    if (type.prototype && typeof type.prototype.render === 'function') {
                        return renderComponent(type, props, context, legacyContext);
                    }
                    return renderElement(type(props, legacyContext), context, legacyContext);
            }
            switch (type && type.$$typeof) {
                case Provider.$$typeof:
                    return renderChildren(props.children, props.value, legacyContext);
                case Consumer.$$typeof:
                    return renderElement(props.children(context || type._currentValue), context, legacyContext);
                case ForwardRef.$$typeof:
                    return renderElement(type.render(props), context, legacyContext);
            }
            return '';
        }

        function renderNativeComponent(type, props, context, legacyContext = {}) {
            let content = '';
            if (type === 'textarea' && props.hasOwnProperty('value')) {
                content = renderChildren(props.value, context, legacyContext);
                const {
                    value,
                    ...restProps
                } = props;
                props = restProps;
            } else if (props.dangerouslySetInnerHTML && typeof props.dangerouslySetInnerHTML.__html === 'string') {
                content = props.dangerouslySetInnerHTML.__html;
            } else if (typeof props.children !== 'undefined') {
                content = renderChildren(props.children, context, legacyContext);
            }
            if (!type) {
                return content;
            }
            const attributes = renderAttributes(props);
            if (SELF_CLOSING_TAGS.has(type)) {
                return '<' + type + attributes + '/>';
            }
            return '<' + type + attributes + '>' + content + '</' + type + '>';
        }

        function renderComponent(Component, props, context, legacyContext = {}) {
            const instance = new
            Component(props, legacyContext);
            if (typeof instance.getChildContext === 'function') {
                Object.assign(legacyContext, instance.getChildContext());
            }
            const html = renderElement(instance.render(), context, legacyContext);
            return html;
        }

        function renderChildren(children, context, legacyContext = {}) {
            let result = '';
            children = Array.isArray(children) ? children : [children];
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                result += renderElement(child, context, legacyContext);
            }
            return result;
        }

        function renderAttributes(props) {
            let result = '';
            for (const key in props) {
                const attribute = getNormalAttributeName(key);
                if (!(0, external_wp_escapeHtml_namespaceObject.isValidAttributeName)(attribute)) {
                    continue;
                }
                let value = getNormalAttributeValue(key, props[key]);
                if (!ATTRIBUTES_TYPES.has(typeof value)) {
                    continue;
                }
                if (isInternalAttribute(key)) {
                    continue;
                }
                const isBooleanAttribute = BOOLEAN_ATTRIBUTES.has(attribute);
                if (isBooleanAttribute && value === false) {
                    continue;
                }
                const isMeaningfulAttribute = isBooleanAttribute || hasPrefix(key, ['data-', 'aria-']) || ENUMERATED_ATTRIBUTES.has(attribute);
                if (typeof value === 'boolean' && !isMeaningfulAttribute) {
                    continue;
                }
                result += ' ' + attribute;
                if (isBooleanAttribute) {
                    continue;
                }
                if (typeof value === 'string') {
                    value = (0, external_wp_escapeHtml_namespaceObject.escapeAttribute)(value);
                }
                result += '="' + value + '"';
            }
            return result;
        }

        function renderStyle(style) {
            if (!isPlainObject(style)) {
                return style;
            }
            let result;
            for (const property in style) {
                const value = style[property];
                if (null === value || undefined === value) {
                    continue;
                }
                if (result) {
                    result += ';';
                } else {
                    result = '';
                }
                const normalName = getNormalStylePropertyName(property);
                const normalValue = getNormalStylePropertyValue(property, value);
                result += normalName + ':' + normalValue;
            }
            return result;
        }
        var serialize = (renderElement);;
    }();
    (window.wp = window.wp || {}).element = __webpack_exports__;
})();