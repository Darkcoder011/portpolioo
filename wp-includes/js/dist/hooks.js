(function() {
    "use strict";
    var __webpack_require__ = {};
    ! function() {
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
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        "actions": function() {
            return actions;
        },
        "addAction": function() {
            return addAction;
        },
        "addFilter": function() {
            return addFilter;
        },
        "applyFilters": function() {
            return applyFilters;
        },
        "createHooks": function() {
            return build_module_createHooks;
        },
        "currentAction": function() {
            return currentAction;
        },
        "currentFilter": function() {
            return currentFilter;
        },
        "defaultHooks": function() {
            return defaultHooks;
        },
        "didAction": function() {
            return didAction;
        },
        "didFilter": function() {
            return didFilter;
        },
        "doAction": function() {
            return doAction;
        },
        "doingAction": function() {
            return doingAction;
        },
        "doingFilter": function() {
            return doingFilter;
        },
        "filters": function() {
            return filters;
        },
        "hasAction": function() {
            return hasAction;
        },
        "hasFilter": function() {
            return hasFilter;
        },
        "removeAction": function() {
            return removeAction;
        },
        "removeAllActions": function() {
            return removeAllActions;
        },
        "removeAllFilters": function() {
            return removeAllFilters;
        },
        "removeFilter": function() {
            return removeFilter;
        }
    });;

    function validateNamespace(namespace) {
        if ('string' !== typeof namespace || '' === namespace) {
            console.error('The namespace must be a non-empty string.');
            return false;
        }
        if (!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(namespace)) {
            console.error('The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.');
            return false;
        }
        return true;
    }
    var build_module_validateNamespace = (validateNamespace);;

    function validateHookName(hookName) {
        if ('string' !== typeof hookName || '' === hookName) {
            console.error('The hook name must be a non-empty string.');
            return false;
        }
        if (/^__/.test(hookName)) {
            console.error('The hook name cannot begin with `__`.');
            return false;
        }
        if (!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(hookName)) {
            console.error('The hook name can only contain numbers, letters, dashes, periods and underscores.');
            return false;
        }
        return true;
    }
    var build_module_validateHookName = (validateHookName);;

    function createAddHook(hooks, storeKey) {
        return function addHook(hookName, namespace, callback, priority = 10) {
            const hooksStore = hooks[storeKey];
            if (!build_module_validateHookName(hookName)) {
                return;
            }
            if (!build_module_validateNamespace(namespace)) {
                return;
            }
            if ('function' !== typeof callback) {
                console.error('The hook callback must be a function.');
                return;
            }
            if ('number' !== typeof priority) {
                console.error('If specified, the hook priority must be a number.');
                return;
            }
            const handler = {
                callback,
                priority,
                namespace
            };
            if (hooksStore[hookName]) {
                const handlers = hooksStore[hookName].handlers;
                let i;
                for (i = handlers.length; i > 0; i--) {
                    if (priority >= handlers[i - 1].priority) {
                        break;
                    }
                }
                if (i === handlers.length) {
                    handlers[i] = handler;
                } else {
                    handlers.splice(i, 0, handler);
                }
                hooksStore.__current.forEach(hookInfo => {
                    if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
                        hookInfo.currentIndex++;
                    }
                });
            } else {
                hooksStore[hookName] = {
                    handlers: [handler],
                    runs: 0
                };
            }
            if (hookName !== 'hookAdded') {
                hooks.doAction('hookAdded', hookName, namespace, callback, priority);
            }
        };
    }
    var build_module_createAddHook = (createAddHook);;

    function createRemoveHook(hooks, storeKey, removeAll = false) {
        return function removeHook(hookName, namespace) {
            const hooksStore = hooks[storeKey];
            if (!build_module_validateHookName(hookName)) {
                return;
            }
            if (!removeAll && !build_module_validateNamespace(namespace)) {
                return;
            }
            if (!hooksStore[hookName]) {
                return 0;
            }
            let handlersRemoved = 0;
            if (removeAll) {
                handlersRemoved = hooksStore[hookName].handlers.length;
                hooksStore[hookName] = {
                    runs: hooksStore[hookName].runs,
                    handlers: []
                };
            } else {
                const handlers = hooksStore[hookName].handlers;
                for (let i = handlers.length - 1; i >= 0; i--) {
                    if (handlers[i].namespace === namespace) {
                        handlers.splice(i, 1);
                        handlersRemoved++;
                        hooksStore.__current.forEach(hookInfo => {
                            if (hookInfo.name === hookName && hookInfo.currentIndex >= i) {
                                hookInfo.currentIndex--;
                            }
                        });
                    }
                }
            }
            if (hookName !== 'hookRemoved') {
                hooks.doAction('hookRemoved', hookName, namespace);
            }
            return handlersRemoved;
        };
    }
    var build_module_createRemoveHook = (createRemoveHook);;

    function createHasHook(hooks, storeKey) {
        return function hasHook(hookName, namespace) {
            const hooksStore = hooks[storeKey];
            if ('undefined' !== typeof namespace) {
                return hookName in hooksStore && hooksStore[hookName].handlers.some(hook => hook.namespace === namespace);
            }
            return hookName in hooksStore;
        };
    }
    var build_module_createHasHook = (createHasHook);;

    function createRunHook(hooks, storeKey, returnFirstArg = false) {
        return function runHooks(hookName, ...args) {
            const hooksStore = hooks[storeKey];
            if (!hooksStore[hookName]) {
                hooksStore[hookName] = {
                    handlers: [],
                    runs: 0
                };
            }
            hooksStore[hookName].runs++;
            const handlers = hooksStore[hookName].handlers;
            if (false) {}
            if (!handlers || !handlers.length) {
                return returnFirstArg ? args[0] : undefined;
            }
            const hookInfo = {
                name: hookName,
                currentIndex: 0
            };
            hooksStore.__current.push(hookInfo);
            while (hookInfo.currentIndex < handlers.length) {
                const handler = handlers[hookInfo.currentIndex];
                const result = handler.callback.apply(null, args);
                if (returnFirstArg) {
                    args[0] = result;
                }
                hookInfo.currentIndex++;
            }
            hooksStore.__current.pop();
            if (returnFirstArg) {
                return args[0];
            }
        };
    }
    var build_module_createRunHook = (createRunHook);;

    function createCurrentHook(hooks, storeKey) {
        return function currentHook() {
            var _hooksStore$__current;
            const hooksStore = hooks[storeKey];
            return (_hooksStore$__current = hooksStore.__current[hooksStore.__current.length - 1] ? .name) !== null && _hooksStore$__current !== void 0 ? _hooksStore$__current : null;
        };
    }
    var build_module_createCurrentHook = (createCurrentHook);;

    function createDoingHook(hooks, storeKey) {
        return function doingHook(hookName) {
            const hooksStore = hooks[storeKey];
            if ('undefined' === typeof hookName) {
                return 'undefined' !== typeof hooksStore.__current[0];
            }
            return hooksStore.__current[0] ? hookName === hooksStore.__current[0].name : false;
        };
    }
    var build_module_createDoingHook = (createDoingHook);;

    function createDidHook(hooks, storeKey) {
        return function didHook(hookName) {
            const hooksStore = hooks[storeKey];
            if (!build_module_validateHookName(hookName)) {
                return;
            }
            return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0;
        };
    }
    var build_module_createDidHook = (createDidHook);;
    class _Hooks {
        constructor() {
            this.actions = Object.create(null);
            this.actions.__current = [];
            this.filters = Object.create(null);
            this.filters.__current = [];
            this.addAction = build_module_createAddHook(this, 'actions');
            this.addFilter = build_module_createAddHook(this, 'filters');
            this.removeAction = build_module_createRemoveHook(this, 'actions');
            this.removeFilter = build_module_createRemoveHook(this, 'filters');
            this.hasAction = build_module_createHasHook(this, 'actions');
            this.hasFilter = build_module_createHasHook(this, 'filters');
            this.removeAllActions = build_module_createRemoveHook(this, 'actions', true);
            this.removeAllFilters = build_module_createRemoveHook(this, 'filters', true);
            this.doAction = build_module_createRunHook(this, 'actions');
            this.applyFilters = build_module_createRunHook(this, 'filters', true);
            this.currentAction = build_module_createCurrentHook(this, 'actions');
            this.currentFilter = build_module_createCurrentHook(this, 'filters');
            this.doingAction = build_module_createDoingHook(this, 'actions');
            this.doingFilter = build_module_createDoingHook(this, 'filters');
            this.didAction = build_module_createDidHook(this, 'actions');
            this.didFilter = build_module_createDidHook(this, 'filters');
        }
    }

    function createHooks() {
        return new _Hooks();
    }
    var build_module_createHooks = (createHooks);;
    const defaultHooks = build_module_createHooks();
    const {
        addAction,
        addFilter,
        removeAction,
        removeFilter,
        hasAction,
        hasFilter,
        removeAllActions,
        removeAllFilters,
        doAction,
        applyFilters,
        currentAction,
        currentFilter,
        doingAction,
        doingFilter,
        didAction,
        didFilter,
        actions,
        filters
    } = defaultHooks;
    (window.wp = window.wp || {}).hooks = __webpack_exports__;
})();