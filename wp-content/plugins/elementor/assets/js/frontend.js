/*!elementor - v3.16.0 - 09-10-2023*/
"use strict";
(self["webpackChunkelementor"] = self["webpackChunkelementor"] || []).push([
    ["frontend"], {
        "../assets/dev/js/frontend/documents-manager.js":
            /*!******************************************************!*\
            !*** ../assets/dev/js/frontend/documents-manager.js ***!
            \******************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _document = _interopRequireDefault(__webpack_require__( /*!./document*/ "../assets/dev/js/frontend/document.js"));
                class _default extends elementorModules.ViewModule {
                    constructor() {
                        super(...arguments);
                        this.documents = {};
                        this.initDocumentClasses();
                        this.attachDocumentsClasses();
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                document: '.elementor'
                            }
                        };
                    }
                    getDefaultElements() {
                        const selectors = this.getSettings('selectors');
                        return {
                            $documents: jQuery(selectors.document)
                        };
                    }
                    initDocumentClasses() {
                        this.documentClasses = {
                            base: _document.default
                        };
                        elementorFrontend.hooks.doAction('elementor/frontend/documents-manager/init-classes', this);
                    }
                    addDocumentClass(documentType, documentClass) {
                        this.documentClasses[documentType] = documentClass;
                    }
                    attachDocumentsClasses() {
                        this.elements.$documents.each((index, document) => this.attachDocumentClass(jQuery(document)));
                    }
                    attachDocumentClass($document) {
                        const documentData = $document.data(),
                            documentID = documentData.elementorId,
                            documentType = documentData.elementorType,
                            DocumentClass = this.documentClasses[documentType] || this.documentClasses.base;
                        this.documents[documentID] = new DocumentClass({
                            $element: $document,
                            id: documentID
                        });
                    }
                }
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/elements-handlers-manager.js":
            /*!**************************************************************!*\
            !*** ../assets/dev/js/frontend/elements-handlers-manager.js ***!
            \**************************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                var _global = _interopRequireDefault(__webpack_require__( /*!./handlers/global*/ "../assets/dev/js/frontend/handlers/global.js"));
                var _background = _interopRequireDefault(__webpack_require__( /*!./handlers/background*/ "../assets/dev/js/frontend/handlers/background.js"));
                var _container = _interopRequireDefault(__webpack_require__( /*!./handlers/container/container*/ "../assets/dev/js/frontend/handlers/container/container.js"));
                var _column = _interopRequireDefault(__webpack_require__( /*!./handlers/column*/ "../assets/dev/js/frontend/handlers/column.js"));
                var _handlesPosition = _interopRequireDefault(__webpack_require__( /*!./handlers/section/handles-position*/ "../assets/dev/js/frontend/handlers/section/handles-position.js"));
                var _stretchedSection = _interopRequireDefault(__webpack_require__( /*!./handlers/section/stretched-section*/ "../assets/dev/js/frontend/handlers/section/stretched-section.js"));
                var _shapes = _interopRequireDefault(__webpack_require__( /*!./handlers/section/shapes*/ "../assets/dev/js/frontend/handlers/section/shapes.js"));
                module.exports = function($) {
                    var _this = this;
                    const handlersInstances = {};
                    this.elementsHandlers = {
                        'accordion.default': () => __webpack_require__.e( /*!import() | accordion*/ "accordion").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/accordion*/ "../assets/dev/js/frontend/handlers/accordion.js")),
                        'alert.default': () => __webpack_require__.e( /*!import() | alert*/ "alert").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/alert*/ "../assets/dev/js/frontend/handlers/alert.js")),
                        'counter.default': () => __webpack_require__.e( /*!import() | counter*/ "counter").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/counter*/ "../assets/dev/js/frontend/handlers/counter.js")),
                        'progress.default': () => __webpack_require__.e( /*!import() | progress*/ "progress").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/progress*/ "../assets/dev/js/frontend/handlers/progress.js")),
                        'tabs.default': () => __webpack_require__.e( /*!import() | tabs*/ "tabs").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/tabs*/ "../assets/dev/js/frontend/handlers/tabs.js")),
                        'toggle.default': () => __webpack_require__.e( /*!import() | toggle*/ "toggle").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/toggle*/ "../assets/dev/js/frontend/handlers/toggle.js")),
                        'video.default': () => __webpack_require__.e( /*!import() | video*/ "video").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/video*/ "../assets/dev/js/frontend/handlers/video.js")),
                        'image-carousel.default': () => __webpack_require__.e( /*!import() | image-carousel*/ "image-carousel").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/image-carousel*/ "../assets/dev/js/frontend/handlers/image-carousel.js")),
                        'text-editor.default': () => __webpack_require__.e( /*!import() | text-editor*/ "text-editor").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/text-editor*/ "../assets/dev/js/frontend/handlers/text-editor.js")),
                        'wp-widget-media_audio.default': () => __webpack_require__.e( /*!import() | wp-audio*/ "wp-audio").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/wp-audio*/ "../assets/dev/js/frontend/handlers/wp-audio.js"))
                    };
                    if (elementorFrontendConfig.experimentalFeatures['nested-elements']) {
                        this.elementsHandlers['nested-tabs.default'] = () => Promise.resolve( /*!import()*/ ).then(__webpack_require__.bind(__webpack_require__, /*!elementor/modules/nested-tabs/assets/js/frontend/handlers/nested-tabs*/ "../modules/nested-tabs/assets/js/frontend/handlers/nested-tabs.js"));
                    }
                    if (elementorFrontendConfig.experimentalFeatures['nested-elements']) {
                        this.elementsHandlers['nested-accordion.default'] = () => Promise.resolve( /*!import()*/ ).then(__webpack_require__.bind(__webpack_require__, /*!elementor/modules/nested-accordion/assets/js/frontend/handlers/nested-accordion*/ "../modules/nested-accordion/assets/js/frontend/handlers/nested-accordion.js"));
                    }
                    const addGlobalHandlers = () => elementorFrontend.hooks.addAction('frontend/element_ready/global', _global.default);
                    const addElementsHandlers = () => {
                        this.elementsHandlers.section = [_stretchedSection.default, ..._background.default, _handlesPosition.default, _shapes.default];
                        this.elementsHandlers.container = [..._background.default];
                        if (elementorFrontend.isEditMode()) {
                            this.elementsHandlers.container.push(..._container.default);
                        }
                        this.elementsHandlers.column = _column.default;
                        $.each(this.elementsHandlers, (elementName, Handlers) => {
                            const elementData = elementName.split('.');
                            elementName = elementData[0];
                            const skin = elementData[1] || null;
                            this.attachHandler(elementName, Handlers, skin);
                        });
                    };
                    const isClassHandler = Handler => Handler.prototype ? .getUniqueHandlerID;
                    const addHandlerWithHook = function(elementBaseName, Handler) {
                        let skin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
                        skin = skin ? '.' + skin : '';
                        const elementName = elementBaseName + skin;
                        elementorFrontend.hooks.addAction(`frontend/element_ready/${elementName}`, $element => {
                            if (isClassHandler(Handler)) {
                                _this.addHandler(Handler, {
                                    $element,
                                    elementName
                                }, true);
                            } else {
                                const handlerValue = Handler();
                                if (!handlerValue) {
                                    return;
                                }
                                if (handlerValue instanceof Promise) {
                                    handlerValue.then(_ref => {
                                        let {
                                            default: dynamicHandler
                                        } = _ref;
                                        _this.addHandler(dynamicHandler, {
                                            $element,
                                            elementName
                                        }, true);
                                    });
                                } else {
                                    _this.addHandler(handlerValue, {
                                        $element,
                                        elementName
                                    }, true);
                                }
                            }
                        });
                    };
                    this.addHandler = function(HandlerClass, options) {
                        const elementID = options.$element.data('model-cid');
                        let handlerID;
                        if (elementID) {
                            handlerID = HandlerClass.prototype.getConstructorID();
                            if (!handlersInstances[elementID]) {
                                handlersInstances[elementID] = {};
                            }
                            const oldHandler = handlersInstances[elementID][handlerID];
                            if (oldHandler) {
                                oldHandler.onDestroy();
                            }
                        }
                        const newHandler = new HandlerClass(options);
                        elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${options.elementName}`, options.$element, $);
                        if (elementID) {
                            handlersInstances[elementID][handlerID] = newHandler;
                        }
                    };
                    this.attachHandler = (elementName, Handlers, skin) => {
                        if (!Array.isArray(Handlers)) {
                            Handlers = [Handlers];
                        }
                        Handlers.forEach(Handler => addHandlerWithHook(elementName, Handler, skin));
                    };
                    this.getHandler = function(handlerName) {
                        const elementHandler = this.elementsHandlers[handlerName];
                        if (isClassHandler(elementHandler)) {
                            return elementHandler;
                        }
                        return new Promise(res => {
                            elementHandler().then(_ref2 => {
                                let {
                                    default: dynamicHandler
                                } = _ref2;
                                res(dynamicHandler);
                            });
                        });
                    };
                    this.getHandlers = function(handlerName) {
                        elementorDevTools.deprecation.deprecated('getHandlers', '3.1.0', 'elementorFrontend.elementsHandler.getHandler');
                        if (handlerName) {
                            return this.getHandler(handlerName);
                        }
                        return this.elementsHandlers;
                    };
                    this.runReadyTrigger = function(scope) {
                        if (elementorFrontend.config.is_static) {
                            return;
                        }
                        const $scope = jQuery(scope),
                            elementType = $scope.attr('data-element_type');
                        if (!elementType) {
                            return;
                        }
                        elementorFrontend.hooks.doAction('frontend/element_ready/global', $scope, $);
                        elementorFrontend.hooks.doAction(`frontend/element_ready/${elementType}`, $scope, $);
                        if ('widget' === elementType) {
                            const widgetType = $scope.attr('data-widget_type');
                            elementorFrontend.hooks.doAction(`frontend/element_ready/${widgetType}`, $scope, $);
                        }
                    };
                    this.init = () => {
                        addGlobalHandlers();
                        addElementsHandlers();
                    };
                };
            }),
        "../assets/dev/js/frontend/frontend.js":
            /*!*********************************************!*\
            !*** ../assets/dev/js/frontend/frontend.js ***!
            \*********************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                __webpack_require__( /*!../public-path*/ "../assets/dev/js/public-path.js");
                var _documentsManager = _interopRequireDefault(__webpack_require__( /*!./documents-manager*/ "../assets/dev/js/frontend/documents-manager.js"));
                var _storage = _interopRequireDefault(__webpack_require__( /*!elementor-common/utils/storage*/ "../core/common/assets/js/utils/storage.js"));
                var _environment = _interopRequireDefault(__webpack_require__( /*!elementor-common/utils/environment*/ "../core/common/assets/js/utils/environment.js"));
                var _youtubeLoader = _interopRequireDefault(__webpack_require__( /*!./utils/video-api/youtube-loader*/ "../assets/dev/js/frontend/utils/video-api/youtube-loader.js"));
                var _vimeoLoader = _interopRequireDefault(__webpack_require__( /*!./utils/video-api/vimeo-loader*/ "../assets/dev/js/frontend/utils/video-api/vimeo-loader.js"));
                var _baseLoader = _interopRequireDefault(__webpack_require__( /*!./utils/video-api/base-loader*/ "../assets/dev/js/frontend/utils/video-api/base-loader.js"));
                var _urlActions = _interopRequireDefault(__webpack_require__( /*!./utils/url-actions*/ "../assets/dev/js/frontend/utils/url-actions.js"));
                var _swiper = _interopRequireDefault(__webpack_require__( /*!./utils/swiper*/ "../assets/dev/js/frontend/utils/swiper.js"));
                var _lightboxManager = _interopRequireDefault(__webpack_require__( /*!./utils/lightbox/lightbox-manager*/ "../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js"));
                var _assetsLoader = _interopRequireDefault(__webpack_require__( /*!./utils/assets-loader*/ "../assets/dev/js/frontend/utils/assets-loader.js"));
                var _breakpoints = _interopRequireDefault(__webpack_require__( /*!elementor-utils/breakpoints*/ "../assets/dev/js/utils/breakpoints.js"));
                var _events = _interopRequireDefault(__webpack_require__( /*!elementor-utils/events*/ "../assets/dev/js/utils/events.js"));
                var _frontend = _interopRequireDefault(__webpack_require__( /*!elementor/modules/shapes/assets/js/frontend/frontend*/ "../modules/shapes/assets/js/frontend/frontend.js"));
                var _controls = _interopRequireDefault(__webpack_require__( /*!./utils/controls*/ "../assets/dev/js/frontend/utils/controls.js"));
                var _utils = __webpack_require__( /*!elementor-frontend/utils/utils*/ "../assets/dev/js/frontend/utils/utils.js");
                const EventManager = __webpack_require__( /*!elementor-utils/hooks*/ "../assets/dev/js/utils/hooks.js"),
                    ElementsHandler = __webpack_require__( /*!elementor-frontend/elements-handlers-manager*/ "../assets/dev/js/frontend/elements-handlers-manager.js"),
                    AnchorsModule = __webpack_require__( /*!elementor-frontend/utils/anchors*/ "../assets/dev/js/frontend/utils/anchors.js");
                class Frontend extends elementorModules.ViewModule {
                    constructor() {
                        super(...arguments);
                        this.config = elementorFrontendConfig;
                        this.config.legacyMode = {
                            get elementWrappers() {
                                if (elementorFrontend.isEditMode()) {
                                    window.top.elementorDevTools.deprecation.deprecated('elementorFrontend.config.legacyMode.elementWrappers', '3.1.0', 'elementorFrontend.config.experimentalFeatures.e_dom_optimization');
                                }
                                return !elementorFrontend.config.experimentalFeatures.e_dom_optimization;
                            }
                        };
                        this.populateActiveBreakpointsConfig();
                    }
                    get Module() {
                        if (this.isEditMode()) {
                            parent.elementorDevTools.deprecation.deprecated('elementorFrontend.Module', '2.5.0', 'elementorModules.frontend.handlers.Base');
                        }
                        return elementorModules.frontend.handlers.Base;
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                elementor: '.elementor',
                                adminBar: '#wpadminbar'
                            }
                        };
                    }
                    getDefaultElements() {
                        const defaultElements = {
                            window,
                            $window: jQuery(window),
                            $document: jQuery(document),
                            $head: jQuery(document.head),
                            $body: jQuery(document.body),
                            $deviceMode: jQuery('<span>', {
                                id: 'elementor-device-mode',
                                class: 'elementor-screen-only'
                            })
                        };
                        defaultElements.$body.append(defaultElements.$deviceMode);
                        return defaultElements;
                    }
                    bindEvents() {
                        this.elements.$window.on('resize', () => this.setDeviceModeData());
                    }
                    getElements(elementName) {
                        return this.getItems(this.elements, elementName);
                    }
                    getPageSettings(settingName) {
                        const settingsObject = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                        return this.getItems(settingsObject, settingName);
                    }
                    getGeneralSettings(settingName) {
                        if (this.isEditMode()) {
                            parent.elementorDevTools.deprecation.deprecated('getGeneralSettings()', '3.0.0', 'getKitSettings() and remove the `elementor_` prefix');
                        }
                        return this.getKitSettings(`elementor_${settingName}`);
                    }
                    getKitSettings(settingName) {
                        return this.getItems(this.config.kit, settingName);
                    }
                    getCurrentDeviceMode() {
                        return getComputedStyle(this.elements.$deviceMode[0], ':after').content.replace(/"/g, '');
                    }
                    getDeviceSetting(deviceMode, settings, settingKey) {
                        if ('widescreen' === deviceMode) {
                            return this.getWidescreenSetting(settings, settingKey);
                        }
                        const devices = elementorFrontend.breakpoints.getActiveBreakpointsList({
                            largeToSmall: true,
                            withDesktop: true
                        });
                        let deviceIndex = devices.indexOf(deviceMode);
                        while (deviceIndex > 0) {
                            const currentDevice = devices[deviceIndex],
                                fullSettingKey = settingKey + '_' + currentDevice,
                                deviceValue = settings[fullSettingKey];
                            if (deviceValue || 0 === deviceValue) {
                                return deviceValue;
                            }
                            deviceIndex--;
                        }
                        return settings[settingKey];
                    }
                    getWidescreenSetting(settings, settingKey) {
                        const deviceMode = 'widescreen',
                            widescreenSettingKey = settingKey + '_' + deviceMode;
                        let settingToReturn;
                        if (settings[widescreenSettingKey]) {
                            settingToReturn = settings[widescreenSettingKey];
                        } else {
                            settingToReturn = settings[settingKey];
                        }
                        return settingToReturn;
                    }
                    getCurrentDeviceSetting(settings, settingKey) {
                        return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), settings, settingKey);
                    }
                    isEditMode() {
                        return this.config.environmentMode.edit;
                    }
                    isWPPreviewMode() {
                        return this.config.environmentMode.wpPreview;
                    }
                    initDialogsManager() {
                        let dialogsManager;
                        this.getDialogsManager = () => {
                            if (!dialogsManager) {
                                dialogsManager = new DialogsManager.Instance();
                            }
                            return dialogsManager;
                        };
                    }
                    initOnReadyComponents() {
                        this.utils = {
                            youtube: new _youtubeLoader.default(),
                            vimeo: new _vimeoLoader.default(),
                            baseVideoLoader: new _baseLoader.default(),
                            anchors: new AnchorsModule(),
                            get lightbox() {
                                return _lightboxManager.default.getLightbox();
                            },
                            urlActions: new _urlActions.default(),
                            swiper: _swiper.default,
                            environment: _environment.default,
                            assetsLoader: new _assetsLoader.default(),
                            escapeHTML: _utils.escapeHTML,
                            events: _events.default,
                            controls: new _controls.default()
                        };
                        this.modules = {
                            StretchElement: elementorModules.frontend.tools.StretchElement,
                            Masonry: elementorModules.utils.Masonry
                        };
                        this.elementsHandler.init();
                        if (this.isEditMode()) {
                            elementor.once('document:loaded', () => this.onDocumentLoaded());
                        } else {
                            this.onDocumentLoaded();
                        }
                    }
                    initOnReadyElements() {
                        this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings('selectors.adminBar'));
                    }
                    addUserAgentClasses() {
                        for (const [key, value] of Object.entries(_environment.default)) {
                            if (value) {
                                this.elements.$body.addClass('e--ua-' + key);
                            }
                        }
                    }
                    setDeviceModeData() {
                        this.elements.$body.attr('data-elementor-device-mode', this.getCurrentDeviceMode());
                    }
                    addListenerOnce(listenerID, event, callback, to) {
                        if (!to) {
                            to = this.elements.$window;
                        }
                        if (!this.isEditMode()) {
                            to.on(event, callback);
                            return;
                        }
                        this.removeListeners(listenerID, event, to);
                        if (to instanceof jQuery) {
                            const eventNS = event + '.' + listenerID;
                            to.on(eventNS, callback);
                        } else {
                            to.on(event, callback, listenerID);
                        }
                    }
                    removeListeners(listenerID, event, callback, from) {
                        if (!from) {
                            from = this.elements.$window;
                        }
                        if (from instanceof jQuery) {
                            const eventNS = event + '.' + listenerID;
                            from.off(eventNS, callback);
                        } else {
                            from.off(event, callback, listenerID);
                        }
                    }
                    debounce(func, wait) {
                        let timeout;
                        return function() {
                            const context = this,
                                args = arguments;
                            const later = () => {
                                timeout = null;
                                func.apply(context, args);
                            };
                            const callNow = !timeout;
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                            if (callNow) {
                                func.apply(context, args);
                            }
                        };
                    }
                    waypoint($element, callback, options) {
                        const defaultOptions = {
                            offset: '100%',
                            triggerOnce: true
                        };
                        options = jQuery.extend(defaultOptions, options);
                        const correctCallback = function() {
                            const element = this.element || this,
                                result = callback.apply(element, arguments);
                            if (options.triggerOnce && this.destroy) {
                                this.destroy();
                            }
                            return result;
                        };
                        return $element.elementorWaypoint(correctCallback, options);
                    }
                    muteMigrationTraces() {
                        jQuery.migrateMute = true;
                        jQuery.migrateTrace = false;
                    }
                    initModules() {
                        const handlers = {
                            shapes: _frontend.default
                        };
                        elementorFrontend.trigger('elementor/modules/init:before');
                        elementorFrontend.trigger('elementor/modules/init/before');
                        Object.entries(handlers).forEach(_ref => {
                            let [moduleName, ModuleClass] = _ref;
                            this.modulesHandlers[moduleName] = new ModuleClass();
                        });
                    }
                    populateActiveBreakpointsConfig() {
                        this.config.responsive.activeBreakpoints = {};
                        Object.entries(this.config.responsive.breakpoints).forEach(_ref2 => {
                            let [breakpointKey, breakpointData] = _ref2;
                            if (breakpointData.is_enabled) {
                                this.config.responsive.activeBreakpoints[breakpointKey] = breakpointData;
                            }
                        });
                    }
                    init() {
                        this.hooks = new EventManager();
                        this.breakpoints = new _breakpoints.default(this.config.responsive);
                        this.storage = new _storage.default();
                        this.elementsHandler = new ElementsHandler(jQuery);
                        this.modulesHandlers = {};
                        this.addUserAgentClasses();
                        this.setDeviceModeData();
                        this.initDialogsManager();
                        if (this.isEditMode()) {
                            this.muteMigrationTraces();
                        }
                        _events.default.dispatch(this.elements.$window, 'elementor/frontend/init');
                        this.initModules();
                        this.initOnReadyElements();
                        this.initOnReadyComponents();
                    }
                    onDocumentLoaded() {
                        this.documentsManager = new _documentsManager.default();
                        this.trigger('components:init');
                        new _lightboxManager.default();
                    }
                }
                exports["default"] = Frontend;
                window.elementorFrontend = new Frontend();
                if (!elementorFrontend.isEditMode()) {
                    jQuery(() => elementorFrontend.init());
                }
            }),
        "../assets/dev/js/frontend/handlers/background-slideshow.js":
            /*!******************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/background-slideshow.js ***!
            \******************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
                    getDefaultSettings() {
                        return {
                            classes: {
                                swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                                swiperWrapper: 'swiper-wrapper',
                                swiperSlide: 'elementor-background-slideshow__slide swiper-slide',
                                swiperPreloader: 'swiper-lazy-preloader',
                                slideBackground: 'elementor-background-slideshow__slide__image',
                                kenBurns: 'elementor-ken-burns',
                                kenBurnsActive: 'elementor-ken-burns--active',
                                kenBurnsIn: 'elementor-ken-burns--in',
                                kenBurnsOut: 'elementor-ken-burns--out'
                            }
                        };
                    }
                    getSwiperOptions() {
                        const elementSettings = this.getElementSettings(),
                            swiperOptions = {
                                grabCursor: false,
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                                loop: 'yes' === elementSettings.background_slideshow_loop,
                                speed: elementSettings.background_slideshow_transition_duration,
                                autoplay: {
                                    delay: elementSettings.background_slideshow_slide_duration,
                                    stopOnLastSlide: !elementSettings.background_slideshow_loop
                                },
                                handleElementorBreakpoints: true,
                                on: {
                                    slideChange: () => {
                                        if (elementSettings.background_slideshow_ken_burns) {
                                            this.handleKenBurns();
                                        }
                                    }
                                }
                            };
                        if ('yes' === elementSettings.background_slideshow_loop) {
                            swiperOptions.loopedSlides = this.getSlidesCount();
                        }
                        switch (elementSettings.background_slideshow_slide_transition) {
                            case 'fade':
                                swiperOptions.effect = 'fade';
                                swiperOptions.fadeEffect = {
                                    crossFade: true
                                };
                                break;
                            case 'slide_down':
                                swiperOptions.autoplay.reverseDirection = true;
                                swiperOptions.direction = 'vertical';
                                break;
                            case 'slide_up':
                                swiperOptions.direction = 'vertical';
                                break;
                        }
                        if ('yes' === elementSettings.background_slideshow_lazyload) {
                            swiperOptions.lazy = {
                                loadPrevNext: true,
                                loadPrevNextAmount: 1
                            };
                        }
                        return swiperOptions;
                    }
                    buildSwiperElements() {
                        const classes = this.getSettings('classes'),
                            elementSettings = this.getElementSettings(),
                            direction = 'slide_left' === elementSettings.background_slideshow_slide_transition ? 'ltr' : 'rtl',
                            $container = jQuery('<div>', {
                                class: classes.swiperContainer,
                                dir: direction
                            }),
                            $wrapper = jQuery('<div>', {
                                class: classes.swiperWrapper
                            }),
                            kenBurnsActive = elementSettings.background_slideshow_ken_burns,
                            lazyload = 'yes' === elementSettings.background_slideshow_lazyload;
                        let slideInnerClass = classes.slideBackground;
                        if (kenBurnsActive) {
                            slideInnerClass += ' ' + classes.kenBurns;
                            const kenBurnsDirection = 'in' === elementSettings.background_slideshow_ken_burns_zoom_direction ? 'kenBurnsIn' : 'kenBurnsOut';
                            slideInnerClass += ' ' + classes[kenBurnsDirection];
                        }
                        if (lazyload) {
                            slideInnerClass += ' swiper-lazy';
                        }
                        this.elements.$slides = jQuery();
                        elementSettings.background_slideshow_gallery.forEach(slide => {
                            const $slide = jQuery('<div>', {
                                class: classes.swiperSlide
                            });
                            let $slidebg;
                            if (lazyload) {
                                const $slideloader = jQuery('<div>', {
                                    class: classes.swiperPreloader
                                });
                                $slidebg = jQuery('<div>', {
                                    class: slideInnerClass,
                                    'data-background': slide.url
                                });
                                $slidebg.append($slideloader);
                            } else {
                                $slidebg = jQuery('<div>', {
                                    class: slideInnerClass,
                                    style: 'background-image: url("' + slide.url + '");'
                                });
                            }
                            $slide.append($slidebg);
                            $wrapper.append($slide);
                            this.elements.$slides = this.elements.$slides.add($slide);
                        });
                        $container.append($wrapper);
                        this.$element.prepend($container);
                        this.elements.$backgroundSlideShowContainer = $container;
                    }
                    async initSlider() {
                        if (1 >= this.getSlidesCount()) {
                            return;
                        }
                        const elementSettings = this.getElementSettings();
                        const Swiper = elementorFrontend.utils.swiper;
                        this.swiper = await new Swiper(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions());
                        this.elements.$backgroundSlideShowContainer.data('swiper', this.swiper);
                        if (elementSettings.background_slideshow_ken_burns) {
                            this.handleKenBurns();
                        }
                    }
                    activate() {
                        this.buildSwiperElements();
                        this.initSlider();
                    }
                    deactivate() {
                        if (this.swiper) {
                            this.swiper.destroy();
                            this.elements.$backgroundSlideShowContainer.remove();
                        }
                    }
                    run() {
                        if ('slideshow' === this.getElementSettings('background_background')) {
                            this.activate();
                        } else {
                            this.deactivate();
                        }
                    }
                    onInit() {
                        super.onInit();
                        if (this.getElementSettings('background_slideshow_gallery')) {
                            this.run();
                        }
                    }
                    onDestroy() {
                        super.onDestroy();
                        this.deactivate();
                    }
                    onElementChange(propertyName) {
                        if ('background_background' === propertyName) {
                            this.run();
                        }
                    }
                }
                exports["default"] = BackgroundSlideshow;
            }),
        "../assets/dev/js/frontend/handlers/background-video.js":
            /*!**************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/background-video.js ***!
            \**************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class BackgroundVideo extends elementorModules.frontend.handlers.Base {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                backgroundVideoContainer: '.elementor-background-video-container',
                                backgroundVideoEmbed: '.elementor-background-video-embed',
                                backgroundVideoHosted: '.elementor-background-video-hosted'
                            }
                        };
                    }
                    getDefaultElements() {
                        const selectors = this.getSettings('selectors'),
                            elements = {
                                $backgroundVideoContainer: this.$element.find(selectors.backgroundVideoContainer)
                            };
                        elements.$backgroundVideoEmbed = elements.$backgroundVideoContainer.children(selectors.backgroundVideoEmbed);
                        elements.$backgroundVideoHosted = elements.$backgroundVideoContainer.children(selectors.backgroundVideoHosted);
                        return elements;
                    }
                    calcVideosSize($video) {
                        let aspectRatioSetting = '16:9';
                        if ('vimeo' === this.videoType) {
                            aspectRatioSetting = $video[0].width + ':' + $video[0].height;
                        }
                        const containerWidth = this.elements.$backgroundVideoContainer.outerWidth(),
                            containerHeight = this.elements.$backgroundVideoContainer.outerHeight(),
                            aspectRatioArray = aspectRatioSetting.split(':'),
                            aspectRatio = aspectRatioArray[0] / aspectRatioArray[1],
                            ratioWidth = containerWidth / aspectRatio,
                            ratioHeight = containerHeight * aspectRatio,
                            isWidthFixed = containerWidth / containerHeight > aspectRatio;
                        return {
                            width: isWidthFixed ? containerWidth : ratioHeight,
                            height: isWidthFixed ? ratioWidth : containerHeight
                        };
                    }
                    changeVideoSize() {
                        if (!('hosted' === this.videoType) && !this.player) {
                            return;
                        }
                        let $video;
                        if ('youtube' === this.videoType) {
                            $video = jQuery(this.player.getIframe());
                        } else if ('vimeo' === this.videoType) {
                            $video = jQuery(this.player.element);
                        } else if ('hosted' === this.videoType) {
                            $video = this.elements.$backgroundVideoHosted;
                        }
                        if (!$video) {
                            return;
                        }
                        const size = this.calcVideosSize($video);
                        $video.width(size.width).height(size.height);
                    }
                    startVideoLoop(firstTime) {
                        if (!this.player.getIframe().contentWindow) {
                            return;
                        }
                        const elementSettings = this.getElementSettings(),
                            startPoint = elementSettings.background_video_start || 0,
                            endPoint = elementSettings.background_video_end;
                        if (elementSettings.background_play_once && !firstTime) {
                            this.player.stopVideo();
                            return;
                        }
                        this.player.seekTo(startPoint);
                        if (endPoint) {
                            const durationToEnd = endPoint - startPoint + 1;
                            setTimeout(() => {
                                this.startVideoLoop(false);
                            }, durationToEnd * 1000);
                        }
                    }
                    prepareVimeoVideo(Vimeo, videoLink) {
                        const elementSettings = this.getElementSettings(),
                            videoSize = this.elements.$backgroundVideoContainer.outerWidth(),
                            vimeoOptions = {
                                url: videoLink,
                                width: videoSize.width,
                                autoplay: true,
                                loop: !elementSettings.background_play_once,
                                transparent: false,
                                background: true,
                                muted: true
                            };
                        if (elementSettings.background_privacy_mode) {
                            vimeoOptions.dnt = true;
                        }
                        this.player = new Vimeo.Player(this.elements.$backgroundVideoContainer, vimeoOptions);
                        this.handleVimeoStartEndTimes(elementSettings);
                        this.player.ready().then(() => {
                            jQuery(this.player.element).addClass('elementor-background-video-embed');
                            this.changeVideoSize();
                        });
                    }
                    handleVimeoStartEndTimes(elementSettings) {
                        if (elementSettings.background_video_start) {
                            this.player.on('play', data => {
                                if (0 === data.seconds) {
                                    this.player.setCurrentTime(elementSettings.background_video_start);
                                }
                            });
                        }
                        this.player.on('timeupdate', data => {
                            if (elementSettings.background_video_end && elementSettings.background_video_end < data.seconds) {
                                if (elementSettings.background_play_once) {
                                    this.player.pause();
                                } else {
                                    this.player.setCurrentTime(elementSettings.background_video_start);
                                }
                            }
                            this.player.getDuration().then(duration => {
                                if (elementSettings.background_video_start && !elementSettings.background_video_end && data.seconds > duration - 0.5) {
                                    this.player.setCurrentTime(elementSettings.background_video_start);
                                }
                            });
                        });
                    }
                    prepareYTVideo(YT, videoID) {
                        const $backgroundVideoContainer = this.elements.$backgroundVideoContainer,
                            elementSettings = this.getElementSettings();
                        let startStateCode = YT.PlayerState.PLAYING;
                        if (window.chrome) {
                            startStateCode = YT.PlayerState.UNSTARTED;
                        }
                        const playerOptions = {
                            videoId: videoID,
                            events: {
                                onReady: () => {
                                    this.player.mute();
                                    this.changeVideoSize();
                                    this.startVideoLoop(true);
                                    this.player.playVideo();
                                },
                                onStateChange: event => {
                                    switch (event.data) {
                                        case startStateCode:
                                            $backgroundVideoContainer.removeClass('elementor-invisible elementor-loading');
                                            break;
                                        case YT.PlayerState.ENDED:
                                            if ('function' === typeof this.player.seekTo) {
                                                this.player.seekTo(elementSettings.background_video_start || 0);
                                            }
                                            if (elementSettings.background_play_once) {
                                                this.player.destroy();
                                            }
                                    }
                                }
                            },
                            playerVars: {
                                controls: 0,
                                rel: 0,
                                playsinline: 1
                            }
                        };
                        if (elementSettings.background_privacy_mode) {
                            playerOptions.host = 'https://www.youtube-nocookie.com';
                            playerOptions.origin = window.location.hostname;
                        }
                        $backgroundVideoContainer.addClass('elementor-loading elementor-invisible');
                        this.player = new YT.Player(this.elements.$backgroundVideoEmbed[0], playerOptions);
                    }
                    activate() {
                        let videoLink = this.getElementSettings('background_video_link'),
                            videoID;
                        const playOnce = this.getElementSettings('background_play_once');
                        if (-1 !== videoLink.indexOf('vimeo.com')) {
                            this.videoType = 'vimeo';
                            this.apiProvider = elementorFrontend.utils.vimeo;
                        } else if (videoLink.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)) {
                            this.videoType = 'youtube';
                            this.apiProvider = elementorFrontend.utils.youtube;
                        }
                        if (this.apiProvider) {
                            videoID = this.apiProvider.getVideoIDFromURL(videoLink);
                            this.apiProvider.onApiReady(apiObject => {
                                if ('youtube' === this.videoType) {
                                    this.prepareYTVideo(apiObject, videoID);
                                }
                                if ('vimeo' === this.videoType) {
                                    this.prepareVimeoVideo(apiObject, videoLink);
                                }
                            });
                        } else {
                            this.videoType = 'hosted';
                            const startTime = this.getElementSettings('background_video_start'),
                                endTime = this.getElementSettings('background_video_end');
                            if (startTime || endTime) {
                                videoLink += '#t=' + (startTime || 0) + (endTime ? ',' + endTime : '');
                            }
                            this.elements.$backgroundVideoHosted.attr('src', videoLink).one('canplay', this.changeVideoSize.bind(this));
                            if (playOnce) {
                                this.elements.$backgroundVideoHosted.on('ended', () => {
                                    this.elements.$backgroundVideoHosted.hide();
                                });
                            }
                        }
                        elementorFrontend.elements.$window.on('resize elementor/bg-video/recalc', this.changeVideoSize);
                    }
                    deactivate() {
                        if ('youtube' === this.videoType && this.player.getIframe() || 'vimeo' === this.videoType) {
                            this.player.destroy();
                        } else {
                            this.elements.$backgroundVideoHosted.removeAttr('src').off('ended');
                        }
                        elementorFrontend.elements.$window.off('resize', this.changeVideoSize);
                    }
                    run() {
                        const elementSettings = this.getElementSettings();
                        if (!elementSettings.background_play_on_mobile && 'mobile' === elementorFrontend.getCurrentDeviceMode()) {
                            return;
                        }
                        if ('video' === elementSettings.background_background && elementSettings.background_video_link) {
                            this.activate();
                        } else {
                            this.deactivate();
                        }
                    }
                    onInit() {
                        super.onInit(...arguments);
                        this.changeVideoSize = this.changeVideoSize.bind(this);
                        this.run();
                    }
                    onElementChange(propertyName) {
                        if ('background_background' === propertyName) {
                            this.run();
                        }
                    }
                }
                exports["default"] = BackgroundVideo;
            }),
        "../assets/dev/js/frontend/handlers/background.js":
            /*!********************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/background.js ***!
            \********************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _backgroundSlideshow = _interopRequireDefault(__webpack_require__( /*!./background-slideshow*/ "../assets/dev/js/frontend/handlers/background-slideshow.js"));
                var _backgroundVideo = _interopRequireDefault(__webpack_require__( /*!./background-video*/ "../assets/dev/js/frontend/handlers/background-video.js"));
                var _default = [_backgroundSlideshow.default, _backgroundVideo.default];
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/handlers/column.js":
            /*!****************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/column.js ***!
            \****************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _backgroundSlideshow = _interopRequireDefault(__webpack_require__( /*!./background-slideshow*/ "../assets/dev/js/frontend/handlers/background-slideshow.js"));
                var _default = [_backgroundSlideshow.default];
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/handlers/container/container.js":
            /*!*****************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/container/container.js ***!
            \*****************************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _default = [() => __webpack_require__.e( /*!import() | container*/ "container").then(__webpack_require__.bind(__webpack_require__, /*!./handles-position*/ "../assets/dev/js/frontend/handlers/container/handles-position.js")), () => __webpack_require__.e( /*!import() | container*/ "container").then(__webpack_require__.bind(__webpack_require__, /*!./shapes*/ "../assets/dev/js/frontend/handlers/container/shapes.js")), () => __webpack_require__.e( /*!import() | container*/ "container").then(__webpack_require__.bind(__webpack_require__, /*!./grid-container*/ "../assets/dev/js/frontend/handlers/container/grid-container.js"))];
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/handlers/global.js":
            /*!****************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/global.js ***!
            \****************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class GlobalHandler extends elementorModules.frontend.handlers.Base {
                    getWidgetType() {
                        return 'global';
                    }
                    animate() {
                        const $element = this.$element,
                            animation = this.getAnimation();
                        if ('none' === animation) {
                            $element.removeClass('elementor-invisible');
                            return;
                        }
                        const elementSettings = this.getElementSettings(),
                            animationDelay = elementSettings._animation_delay || elementSettings.animation_delay || 0;
                        $element.removeClass(animation);
                        if (this.currentAnimation) {
                            $element.removeClass(this.currentAnimation);
                        }
                        this.currentAnimation = animation;
                        setTimeout(() => {
                            $element.removeClass('elementor-invisible').addClass('animated ' + animation);
                        }, animationDelay);
                    }
                    getAnimation() {
                        return this.getCurrentDeviceSetting('animation') || this.getCurrentDeviceSetting('_animation');
                    }
                    onInit() {
                        super.onInit(...arguments);
                        if (this.getAnimation()) {
                            const observer = elementorModules.utils.Scroll.scrollObserver({
                                callback: event => {
                                    if (event.isInViewport) {
                                        this.animate();
                                        observer.unobserve(this.$element[0]);
                                    }
                                }
                            });
                            observer.observe(this.$element[0]);
                        }
                    }
                    onElementChange(propertyName) {
                        if (/^_?animation/.test(propertyName)) {
                            this.animate();
                        }
                    }
                }
                var _default = $scope => {
                    elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                        $element: $scope
                    });
                };
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/handlers/section/handles-position.js":
            /*!**********************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/section/handles-position.js ***!
            \**********************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class HandlesPosition extends elementorModules.frontend.handlers.Base {
                    isActive() {
                        return elementorFrontend.isEditMode();
                    }
                    isFirstSection() {
                        return this.$element[0] === document.querySelector('.elementor-edit-mode .elementor-top-section');
                    }
                    isOverflowHidden() {
                        return 'hidden' === this.$element.css('overflow');
                    }
                    getOffset() {
                        if ('body' === elementor.config.document.container) {
                            return this.$element.offset().top;
                        }
                        const $container = jQuery(elementor.config.document.container);
                        return this.$element.offset().top - $container.offset().top;
                    }
                    setHandlesPosition() {
                        const document = elementor.documents.getCurrent();
                        if (!document || !document.container.isEditable()) {
                            return;
                        }
                        const insideHandleClass = 'elementor-section--handles-inside';
                        if (elementor.settings.page.model.attributes.scroll_snap) {
                            this.$element.addClass(insideHandleClass);
                            return;
                        }
                        const isOverflowHidden = this.isOverflowHidden();
                        if (!isOverflowHidden && !this.isFirstSection()) {
                            return;
                        }
                        const offset = isOverflowHidden ? 0 : this.getOffset();
                        if (offset < 25) {
                            this.$element.addClass(insideHandleClass);
                            const $handlesElement = this.$element.find('> .elementor-element-overlay > .elementor-editor-section-settings');
                            if (offset < -5) {
                                $handlesElement.css('top', -offset);
                            } else {
                                $handlesElement.css('top', '');
                            }
                        } else {
                            this.$element.removeClass(insideHandleClass);
                        }
                    }
                    onInit() {
                        if (!this.isActive()) {
                            return;
                        }
                        this.setHandlesPosition();
                        this.$element.on('mouseenter', this.setHandlesPosition.bind(this));
                    }
                }
                exports["default"] = HandlesPosition;
            }),
        "../assets/dev/js/frontend/handlers/section/shapes.js":
            /*!************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/section/shapes.js ***!
            \************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class Shapes extends elementorModules.frontend.handlers.Base {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                container: '> .elementor-shape-%s'
                            },
                            svgURL: elementorFrontend.config.urls.assets + 'shapes/'
                        };
                    }
                    getDefaultElements() {
                        const elements = {},
                            selectors = this.getSettings('selectors');
                        elements.$topContainer = this.$element.find(selectors.container.replace('%s', 'top'));
                        elements.$bottomContainer = this.$element.find(selectors.container.replace('%s', 'bottom'));
                        return elements;
                    }
                    isActive() {
                        return elementorFrontend.isEditMode();
                    }
                    getSvgURL(shapeType, fileName) {
                        let svgURL = this.getSettings('svgURL') + fileName + '.svg';
                        if (elementor.config.additional_shapes && shapeType in elementor.config.additional_shapes) {
                            svgURL = elementor.config.additional_shapes[shapeType];
                            if (-1 < fileName.indexOf('-negative')) {
                                svgURL = svgURL.replace('.svg', '-negative.svg');
                            }
                        }
                        return svgURL;
                    }
                    buildSVG(side) {
                        const baseSettingKey = 'shape_divider_' + side,
                            shapeType = this.getElementSettings(baseSettingKey),
                            $svgContainer = this.elements['$' + side + 'Container'];
                        $svgContainer.attr('data-shape', shapeType);
                        if (!shapeType) {
                            $svgContainer.empty();
                            return;
                        }
                        let fileName = shapeType;
                        if (this.getElementSettings(baseSettingKey + '_negative')) {
                            fileName += '-negative';
                        }
                        const svgURL = this.getSvgURL(shapeType, fileName);
                        jQuery.get(svgURL, data => {
                            $svgContainer.empty().append(data.childNodes[0]);
                        });
                        this.setNegative(side);
                    }
                    setNegative(side) {
                        this.elements['$' + side + 'Container'].attr('data-negative', !!this.getElementSettings('shape_divider_' + side + '_negative'));
                    }
                    onInit() {
                        if (!this.isActive(this.getSettings())) {
                            return;
                        }
                        super.onInit(...arguments);
                        ['top', 'bottom'].forEach(side => {
                            if (this.getElementSettings('shape_divider_' + side)) {
                                this.buildSVG(side);
                            }
                        });
                    }
                    onElementChange(propertyName) {
                        const shapeChange = propertyName.match(/^shape_divider_(top|bottom)$/);
                        if (shapeChange) {
                            this.buildSVG(shapeChange[1]);
                            return;
                        }
                        const negativeChange = propertyName.match(/^shape_divider_(top|bottom)_negative$/);
                        if (negativeChange) {
                            this.buildSVG(negativeChange[1]);
                            this.setNegative(negativeChange[1]);
                        }
                    }
                }
                exports["default"] = Shapes;
            }),
        "../assets/dev/js/frontend/handlers/section/stretched-section.js":
            /*!***********************************************************************!*\
            !*** ../assets/dev/js/frontend/handlers/section/stretched-section.js ***!
            \***********************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
                    getStretchedClass() {
                        return 'elementor-section-stretched';
                    }
                    getStretchSettingName() {
                        return 'stretch_section';
                    }
                    getStretchActiveValue() {
                        return 'section-stretched';
                    }
                }
                exports["default"] = StretchedSection;
            }),
        "../assets/dev/js/frontend/utils/anchors.js":
            /*!**************************************************!*\
            !*** ../assets/dev/js/frontend/utils/anchors.js ***!
            \**************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var _utils = __webpack_require__( /*!./utils*/ "../assets/dev/js/frontend/utils/utils.js");
                module.exports = elementorModules.ViewModule.extend({
                    getDefaultSettings() {
                        return {
                            scrollDuration: 500,
                            selectors: {
                                links: 'a[href*="#"]',
                                targets: '.elementor-element, .elementor-menu-anchor',
                                scrollable: (0, _utils.isScrollSnapActive)() ? 'body' : 'html, body'
                            }
                        };
                    },
                    getDefaultElements() {
                        var $ = jQuery,
                            selectors = this.getSettings('selectors');
                        return {
                            $scrollable: $(selectors.scrollable)
                        };
                    },
                    bindEvents() {
                        elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.handleAnchorLinks);
                    },
                    handleAnchorLinks(event) {
                        var clickedLink = event.currentTarget,
                            isSamePathname = location.pathname === clickedLink.pathname,
                            isSameHostname = location.hostname === clickedLink.hostname,
                            $anchor;
                        if (!isSameHostname || !isSamePathname || clickedLink.hash.length < 2) {
                            return;
                        }
                        try {
                            $anchor = jQuery(clickedLink.hash).filter(this.getSettings('selectors.targets'));
                        } catch (e) {
                            return;
                        }
                        if (!$anchor.length) {
                            return;
                        }
                        var scrollTop = $anchor.offset().top,
                            $wpAdminBar = elementorFrontend.elements.$wpAdminBar,
                            $activeStickies = jQuery('.elementor-section.elementor-sticky--active:visible'),
                            maxStickyHeight = 0;
                        if ($wpAdminBar.length > 0) {
                            scrollTop -= $wpAdminBar.height();
                        }
                        if ($activeStickies.length > 0) {
                            maxStickyHeight = Math.max.apply(null, $activeStickies.map(function() {
                                return jQuery(this).outerHeight();
                            }).get());
                            scrollTop -= maxStickyHeight;
                        }
                        event.preventDefault();
                        scrollTop = elementorFrontend.hooks.applyFilters('frontend/handlers/menu_anchor/scroll_top_distance', scrollTop);
                        if ((0, _utils.isScrollSnapActive)()) {
                            elementorFrontend.elements.$body.css('scroll-snap-type', 'none');
                        }
                        this.elements.$scrollable.animate({
                            scrollTop
                        }, this.getSettings('scrollDuration'), 'linear', () => {
                            if ((0, _utils.isScrollSnapActive)()) {
                                elementorFrontend.elements.$body.css('scroll-snap-type', '');
                            }
                        });
                    },
                    onInit() {
                        elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
                    }
                });
            }),
        "../assets/dev/js/frontend/utils/assets-loader.js":
            /*!********************************************************!*\
            !*** ../assets/dev/js/frontend/utils/assets-loader.js ***!
            \********************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class AssetsLoader {
                    getScriptElement(src) {
                        const scriptElement = document.createElement('script');
                        scriptElement.src = src;
                        return scriptElement;
                    }
                    getStyleElement(src) {
                        const styleElement = document.createElement('link');
                        styleElement.rel = 'stylesheet';
                        styleElement.href = src;
                        return styleElement;
                    }
                    load(type, key) {
                        const assetData = AssetsLoader.assets[type][key];
                        if (!assetData.loader) {
                            assetData.loader = new Promise(resolve => {
                                const element = 'style' === type ? this.getStyleElement(assetData.src) : this.getScriptElement(assetData.src);
                                element.onload = () => resolve(true);
                                const parent = 'head' === assetData.parent ? assetData.parent : 'body';
                                document[parent].appendChild(element);
                            });
                        }
                        return assetData.loader;
                    }
                }
                exports["default"] = AssetsLoader;
                const fileSuffix = elementorFrontendConfig.environmentMode.isScriptDebug ? '' : '.min';
                const swiperSource = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${fileSuffix}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${fileSuffix}.js?ver=5.3.6`;
                AssetsLoader.assets = {
                    script: {
                        dialog: {
                            src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${fileSuffix}.js?ver=4.9.0`
                        },
                        'share-link': {
                            src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${fileSuffix}.js?ver=${elementorFrontendConfig.version}`
                        },
                        swiper: {
                            src: swiperSource
                        }
                    },
                    style: {}
                };
            }),
        "../assets/dev/js/frontend/utils/controls.js":
            /*!***************************************************!*\
            !*** ../assets/dev/js/frontend/utils/controls.js ***!
            \***************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class Controls {
                    getControlValue(controlSettings, controlKey, controlSubKey) {
                        let value;
                        if ('object' === typeof controlSettings[controlKey] && controlSubKey) {
                            value = controlSettings[controlKey][controlSubKey];
                        } else {
                            value = controlSettings[controlKey];
                        }
                        return value;
                    }
                    getResponsiveControlValue(controlSettings, controlKey) {
                        let controlSubKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
                        let device = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                        const currentDeviceMode = device || elementorFrontend.getCurrentDeviceMode(),
                            controlValueDesktop = this.getControlValue(controlSettings, controlKey, controlSubKey);
                        if ('widescreen' === currentDeviceMode) {
                            const controlValueWidescreen = this.getControlValue(controlSettings, `${controlKey}_widescreen`, controlSubKey);
                            return !!controlValueWidescreen || 0 === controlValueWidescreen ? controlValueWidescreen : controlValueDesktop;
                        }
                        const activeBreakpoints = elementorFrontend.breakpoints.getActiveBreakpointsList({
                            withDesktop: true
                        });
                        let parentDeviceMode = currentDeviceMode,
                            deviceIndex = activeBreakpoints.indexOf(currentDeviceMode),
                            controlValue = '';
                        while (deviceIndex <= activeBreakpoints.length) {
                            if ('desktop' === parentDeviceMode) {
                                controlValue = controlValueDesktop;
                                break;
                            }
                            const responsiveControlKey = `${controlKey}_${parentDeviceMode}`,
                                responsiveControlValue = this.getControlValue(controlSettings, responsiveControlKey, controlSubKey);
                            if (!!responsiveControlValue || 0 === responsiveControlValue) {
                                controlValue = responsiveControlValue;
                                break;
                            }
                            deviceIndex++;
                            parentDeviceMode = activeBreakpoints[deviceIndex];
                        }
                        return controlValue;
                    }
                }
                exports["default"] = Controls;
            }),
        "../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js":
            /*!********************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/lightbox/lightbox-manager.js ***!
            \********************************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class LightboxManager extends elementorModules.ViewModule {
                    static getLightbox() {
                        const lightboxPromise = new Promise(resolveLightbox => {
                                __webpack_require__.e( /*!import() | lightbox*/ "lightbox").then(__webpack_require__.t.bind(__webpack_require__, /*!elementor-frontend/utils/lightbox/lightbox*/ "../assets/dev/js/frontend/utils/lightbox/lightbox.js", 23)).then(_ref => {
                                    let {
                                        default: LightboxModule
                                    } = _ref;
                                    return resolveLightbox(new LightboxModule());
                                });
                            }),
                            dialogPromise = elementorFrontend.utils.assetsLoader.load('script', 'dialog'),
                            shareLinkPromise = elementorFrontend.utils.assetsLoader.load('script', 'share-link');
                        return Promise.all([lightboxPromise, dialogPromise, shareLinkPromise]).then(() => lightboxPromise);
                    }
                    getDefaultSettings() {
                        return {
                            selectors: {
                                links: 'a, [data-elementor-lightbox]'
                            }
                        };
                    }
                    getDefaultElements() {
                        return {
                            $links: jQuery(this.getSettings('selectors.links'))
                        };
                    }
                    isLightboxLink(element) {
                        if ('a' === element.tagName.toLowerCase() && (element.hasAttribute('download') || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(element.href)) && !element.dataset.elementorLightboxVideo) {
                            return false;
                        }
                        const generalOpenInLightbox = elementorFrontend.getKitSettings('global_image_lightbox'),
                            currentLinkOpenInLightbox = element.dataset.elementorOpenLightbox;
                        return 'yes' === currentLinkOpenInLightbox || generalOpenInLightbox && 'no' !== currentLinkOpenInLightbox;
                    }
                    async onLinkClick(event) {
                        const element = event.currentTarget,
                            $target = jQuery(event.target),
                            editMode = elementorFrontend.isEditMode(),
                            isColorPickingMode = editMode && elementor.$previewContents.find('body').hasClass('elementor-editor__ui-state__color-picker'),
                            isClickInsideElementor = !!$target.closest('.elementor-edit-area').length;
                        if (!this.isLightboxLink(element)) {
                            if (editMode && isClickInsideElementor) {
                                event.preventDefault();
                            }
                            return;
                        }
                        event.preventDefault();
                        if (editMode && !elementor.getPreferences('lightbox_in_editor')) {
                            return;
                        }
                        if (isColorPickingMode) {
                            return;
                        }
                        const lightbox = this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox;
                        lightbox.createLightbox(element);
                    }
                    isOptimizedAssetsLoading() {
                        return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading;
                    }
                    bindEvents() {
                        elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), event => this.onLinkClick(event));
                    }
                    onInit() {
                        super.onInit(...arguments);
                        if (!this.isOptimizedAssetsLoading() || elementorFrontend.isEditMode()) {
                            return;
                        }
                        this.elements.$links.each((index, element) => {
                            if (this.isLightboxLink(element)) {
                                LightboxManager.getLightbox();
                                return false;
                            }
                        });
                    }
                }
                exports["default"] = LightboxManager;
            }),
        "../assets/dev/js/frontend/utils/swiper.js":
            /*!*************************************************!*\
            !*** ../assets/dev/js/frontend/utils/swiper.js ***!
            \*************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class Swiper {
                    constructor(container, config) {
                        this.config = config;
                        if (this.config.breakpoints) {
                            this.config = this.adjustConfig(config);
                        }
                        if (container instanceof jQuery) {
                            container = container[0];
                        }
                        container.closest('.elementor-widget-wrap') ? .classList.add('e-swiper-container');
                        container.closest('.elementor-widget') ? .classList.add('e-widget-swiper');
                        return new Promise(resolve => {
                            if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading) {
                                return resolve(this.createSwiperInstance(container, this.config));
                            }
                            elementorFrontend.utils.assetsLoader.load('script', 'swiper').then(() => resolve(this.createSwiperInstance(container, this.config)));
                        });
                    }
                    createSwiperInstance(container, config) {
                        const SwiperSource = window.Swiper;
                        SwiperSource.prototype.adjustConfig = this.adjustConfig;
                        return new SwiperSource(container, config);
                    }
                    adjustConfig(config) {
                        if (!config.handleElementorBreakpoints) {
                            return config;
                        }
                        const elementorBreakpoints = elementorFrontend.config.responsive.activeBreakpoints,
                            elementorBreakpointValues = elementorFrontend.breakpoints.getBreakpointValues();
                        Object.keys(config.breakpoints).forEach(configBPKey => {
                            const configBPKeyInt = parseInt(configBPKey);
                            let breakpointToUpdate;
                            if (configBPKeyInt === elementorBreakpoints.mobile.value || configBPKeyInt + 1 === elementorBreakpoints.mobile.value) {
                                breakpointToUpdate = 0;
                            } else if (elementorBreakpoints.widescreen && (configBPKeyInt === elementorBreakpoints.widescreen.value || configBPKeyInt + 1 === elementorBreakpoints.widescreen.value)) {
                                breakpointToUpdate = configBPKeyInt;
                            } else {
                                const currentBPIndexInElementorBPs = elementorBreakpointValues.findIndex(elementorBP => {
                                    return configBPKeyInt === elementorBP || configBPKeyInt + 1 === elementorBP;
                                });
                                breakpointToUpdate = elementorBreakpointValues[currentBPIndexInElementorBPs - 1];
                            }
                            config.breakpoints[breakpointToUpdate] = config.breakpoints[configBPKey];
                            config.breakpoints[configBPKey] = {
                                slidesPerView: config.slidesPerView,
                                slidesPerGroup: config.slidesPerGroup ? config.slidesPerGroup : 1
                            };
                        });
                        return config;
                    }
                }
                exports["default"] = Swiper;
            }),
        "../assets/dev/js/frontend/utils/url-actions.js":
            /*!******************************************************!*\
            !*** ../assets/dev/js/frontend/utils/url-actions.js ***!
            \******************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                __webpack_require__( /*!core-js/modules/web.dom-exception.stack.js*/ "../node_modules/core-js/modules/web.dom-exception.stack.js");
                class _default extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            selectors: {
                                links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                            }
                        };
                    }
                    bindEvents() {
                        elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.runLinkAction.bind(this));
                    }
                    initActions() {
                        this.actions = {
                            lightbox: async settings => {
                                const lightbox = await elementorFrontend.utils.lightbox;
                                if (settings.slideshow) {
                                    lightbox.openSlideshow(settings.slideshow, settings.url);
                                } else {
                                    if (settings.id) {
                                        settings.type = 'image';
                                    }
                                    lightbox.showModal(settings);
                                }
                            }
                        };
                    }
                    addAction(name, callback) {
                        this.actions[name] = callback;
                    }
                    runAction(url) {
                        url = decodeURIComponent(url);
                        const actionMatch = url.match(/action=(.+?)&/);
                        if (!actionMatch) {
                            return;
                        }
                        const action = this.actions[actionMatch[1]];
                        if (!action) {
                            return;
                        }
                        let settings = {};
                        const settingsMatch = url.match(/settings=(.+)/);
                        if (settingsMatch) {
                            settings = JSON.parse(atob(settingsMatch[1]));
                        }
                        for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            restArgs[_key - 1] = arguments[_key];
                        }
                        action(settings, ...restArgs);
                    }
                    runLinkAction(event) {
                        event.preventDefault();
                        this.runAction(jQuery(event.currentTarget).attr('href'), event);
                    }
                    runHashAction() {
                        if (!location.hash) {
                            return;
                        }
                        const elementWithHash = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                        if (elementWithHash) {
                            this.runAction(elementWithHash.getAttribute('data-e-action-hash'));
                        }
                    }
                    createActionHash(action, settings) {
                        return encodeURIComponent(`#elementor-action:action=${action}&settings=${btoa(JSON.stringify(settings))}`);
                    }
                    onInit() {
                        super.onInit();
                        this.initActions();
                        elementorFrontend.on('components:init', this.runHashAction.bind(this));
                    }
                }
                exports["default"] = _default;
            }),
        "../assets/dev/js/frontend/utils/utils.js":
            /*!************************************************!*\
            !*** ../assets/dev/js/frontend/utils/utils.js ***!
            \************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports.isScrollSnapActive = exports.escapeHTML = void 0;
                const escapeHTML = str => {
                    const specialChars = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        "'": '&#39;',
                        '"': '&quot;'
                    };
                    return str.replace(/[&<>'"]/g, tag => specialChars[tag] || tag);
                };
                exports.escapeHTML = escapeHTML;
                const isScrollSnapActive = () => {
                    const scrollSnapStatus = elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes ? .scroll_snap : elementorFrontend.config.settings.page ? .scroll_snap;
                    return 'yes' === scrollSnapStatus ? true : false;
                };
                exports.isScrollSnapActive = isScrollSnapActive;
            }),
        "../assets/dev/js/frontend/utils/video-api/base-loader.js":
            /*!****************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/video-api/base-loader.js ***!
            \****************************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class BaseLoader extends elementorModules.ViewModule {
                    getDefaultSettings() {
                        return {
                            isInserted: false,
                            selectors: {
                                firstScript: 'script:first'
                            }
                        };
                    }
                    getDefaultElements() {
                        return {
                            $firstScript: jQuery(this.getSettings('selectors.firstScript'))
                        };
                    }
                    insertAPI() {
                        this.elements.$firstScript.before(jQuery('<script>', {
                            src: this.getApiURL()
                        }));
                        this.setSettings('isInserted', true);
                    }
                    getVideoIDFromURL(url) {
                        const videoIDParts = url.match(this.getURLRegex());
                        return videoIDParts && videoIDParts[1];
                    }
                    onApiReady(callback) {
                        if (!this.getSettings('isInserted')) {
                            this.insertAPI();
                        }
                        if (this.isApiLoaded()) {
                            callback(this.getApiObject());
                        } else {
                            setTimeout(() => {
                                this.onApiReady(callback);
                            }, 350);
                        }
                    }
                    getAutoplayURL(videoURL) {
                        return videoURL.replace('&autoplay=0', '') + '&autoplay=1';
                    }
                }
                exports["default"] = BaseLoader;
            }),
        "../assets/dev/js/frontend/utils/video-api/vimeo-loader.js":
            /*!*****************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/video-api/vimeo-loader.js ***!
            \*****************************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _baseLoader = _interopRequireDefault(__webpack_require__( /*!./base-loader*/ "../assets/dev/js/frontend/utils/video-api/base-loader.js"));
                class VimeoLoader extends _baseLoader.default {
                    getApiURL() {
                        return 'https://player.vimeo.com/api/player.js';
                    }
                    getURLRegex() {
                        return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
                    }
                    isApiLoaded() {
                        return window.Vimeo;
                    }
                    getApiObject() {
                        return Vimeo;
                    }
                    getAutoplayURL(videoURL) {
                        videoURL = super.getAutoplayURL(videoURL);
                        const timeMatch = videoURL.match(/#t=[^&]*/);
                        return videoURL.replace(timeMatch[0], '') + timeMatch;
                    }
                }
                exports["default"] = VimeoLoader;
            }),
        "../assets/dev/js/frontend/utils/video-api/youtube-loader.js":
            /*!*******************************************************************!*\
            !*** ../assets/dev/js/frontend/utils/video-api/youtube-loader.js ***!
            \*******************************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                var _interopRequireDefault = __webpack_require__( /*!@babel/runtime/helpers/interopRequireDefault*/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                var _baseLoader = _interopRequireDefault(__webpack_require__( /*!./base-loader*/ "../assets/dev/js/frontend/utils/video-api/base-loader.js"));
                class YoutubeLoader extends _baseLoader.default {
                    getApiURL() {
                        return 'https://www.youtube.com/iframe_api';
                    }
                    getURLRegex() {
                        return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
                    }
                    isApiLoaded() {
                        return window.YT && YT.loaded;
                    }
                    getApiObject() {
                        return YT;
                    }
                }
                exports["default"] = YoutubeLoader;
            }),
        "../assets/dev/js/public-path.js":
            /*!***************************************!*\
            !*** ../assets/dev/js/public-path.js ***!
            \***************************************/
            ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                __webpack_require__.p = elementorFrontendConfig.urls.assets + 'js/';
            }),
        "../assets/dev/js/utils/breakpoints.js":
            /*!*********************************************!*\
            !*** ../assets/dev/js/utils/breakpoints.js ***!
            \*********************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class Breakpoints extends elementorModules.Module {
                    constructor(responsiveConfig) {
                        super();
                        this.responsiveConfig = responsiveConfig;
                    }
                    getActiveBreakpointsList() {
                        let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                        const defaultArgs = {
                            largeToSmall: false,
                            withDesktop: false
                        };
                        args = { ...defaultArgs,
                            ...args
                        };
                        const breakpointKeys = Object.keys(this.responsiveConfig.activeBreakpoints);
                        if (args.withDesktop) {
                            const widescreenIndex = breakpointKeys.indexOf('widescreen'),
                                indexToInsertDesktopDevice = -1 === widescreenIndex ? breakpointKeys.length : breakpointKeys.length - 1;
                            breakpointKeys.splice(indexToInsertDesktopDevice, 0, 'desktop');
                        }
                        if (args.largeToSmall) {
                            breakpointKeys.reverse();
                        }
                        return breakpointKeys;
                    }
                    getBreakpointValues() {
                        const {
                            activeBreakpoints
                        } = this.responsiveConfig, breakpointValues = [];
                        Object.values(activeBreakpoints).forEach(breakpointConfig => {
                            breakpointValues.push(breakpointConfig.value);
                        });
                        return breakpointValues;
                    }
                    getDesktopPreviousDeviceKey() {
                        let desktopPreviousDevice = '';
                        const {
                            activeBreakpoints
                        } = this.responsiveConfig, breakpointKeys = Object.keys(activeBreakpoints), numOfDevices = breakpointKeys.length;
                        if ('min' === activeBreakpoints[breakpointKeys[numOfDevices - 1]].direction) {
                            desktopPreviousDevice = breakpointKeys[numOfDevices - 2];
                        } else {
                            desktopPreviousDevice = breakpointKeys[numOfDevices - 1];
                        }
                        return desktopPreviousDevice;
                    }
                    getDesktopMinPoint() {
                        const {
                            activeBreakpoints
                        } = this.responsiveConfig, desktopPreviousDevice = this.getDesktopPreviousDeviceKey();
                        return activeBreakpoints[desktopPreviousDevice].value + 1;
                    }
                    getDeviceMinBreakpoint(device) {
                        if ('desktop' === device) {
                            return this.getDesktopMinPoint();
                        }
                        const {
                            activeBreakpoints
                        } = this.responsiveConfig, breakpointNames = Object.keys(activeBreakpoints);
                        let minBreakpoint;
                        if (breakpointNames[0] === device) {
                            minBreakpoint = 320;
                        } else if ('widescreen' === device) {
                            if (activeBreakpoints[device]) {
                                minBreakpoint = activeBreakpoints[device].value;
                            } else {
                                minBreakpoint = this.responsiveConfig.breakpoints.widescreen;
                            }
                        } else {
                            const deviceNameIndex = breakpointNames.indexOf(device),
                                previousIndex = deviceNameIndex - 1;
                            minBreakpoint = activeBreakpoints[breakpointNames[previousIndex]].value + 1;
                        }
                        return minBreakpoint;
                    }
                    getActiveMatchRegex() {
                        return new RegExp(this.getActiveBreakpointsList().map(device => '_' + device).join('|') + '$');
                    }
                }
                exports["default"] = Breakpoints;
            }),
        "../assets/dev/js/utils/events.js":
            /*!****************************************!*\
            !*** ../assets/dev/js/utils/events.js ***!
            \****************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = exports.Events = void 0;
                class Events {
                    static dispatch(context, event) {
                        let data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                        let bcEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                        context = context instanceof jQuery ? context[0] : context;
                        if (bcEvent) {
                            context.dispatchEvent(new CustomEvent(bcEvent, {
                                detail: data
                            }));
                        }
                        context.dispatchEvent(new CustomEvent(event, {
                            detail: data
                        }));
                    }
                }
                exports.Events = Events;
                var _default = Events;
                exports["default"] = _default;
            }),
        "../assets/dev/js/utils/hooks.js":
            /*!***************************************!*\
            !*** ../assets/dev/js/utils/hooks.js ***!
            \***************************************/
            ((module) => {
                var EventManager = function() {
                    var slice = Array.prototype.slice,
                        MethodsAvailable;
                    var STORAGE = {
                        actions: {},
                        filters: {}
                    };

                    function _removeHook(type, hook, callback, context) {
                        var handlers, handler, i;
                        if (!STORAGE[type][hook]) {
                            return;
                        }
                        if (!callback) {
                            STORAGE[type][hook] = [];
                        } else {
                            handlers = STORAGE[type][hook];
                            if (!context) {
                                for (i = handlers.length; i--;) {
                                    if (handlers[i].callback === callback) {
                                        handlers.splice(i, 1);
                                    }
                                }
                            } else {
                                for (i = handlers.length; i--;) {
                                    handler = handlers[i];
                                    if (handler.callback === callback && handler.context === context) {
                                        handlers.splice(i, 1);
                                    }
                                }
                            }
                        }
                    }

                    function _hookInsertSort(hooks) {
                        var tmpHook, j, prevHook;
                        for (var i = 1, len = hooks.length; i < len; i++) {
                            tmpHook = hooks[i];
                            j = i;
                            while ((prevHook = hooks[j - 1]) && prevHook.priority > tmpHook.priority) {
                                hooks[j] = hooks[j - 1];
                                --j;
                            }
                            hooks[j] = tmpHook;
                        }
                        return hooks;
                    }

                    function _addHook(type, hook, callback, priority, context) {
                        var hookObject = {
                            callback,
                            priority,
                            context
                        };
                        var hooks = STORAGE[type][hook];
                        if (hooks) {
                            var hasSameCallback = false;
                            jQuery.each(hooks, function() {
                                if (this.callback === callback) {
                                    hasSameCallback = true;
                                    return false;
                                }
                            });
                            if (hasSameCallback) {
                                return;
                            }
                            hooks.push(hookObject);
                            hooks = _hookInsertSort(hooks);
                        } else {
                            hooks = [hookObject];
                        }
                        STORAGE[type][hook] = hooks;
                    }

                    function _runHook(type, hook, args) {
                        var handlers = STORAGE[type][hook],
                            i, len;
                        if (!handlers) {
                            return 'filters' === type ? args[0] : false;
                        }
                        len = handlers.length;
                        if ('filters' === type) {
                            for (i = 0; i < len; i++) {
                                args[0] = handlers[i].callback.apply(handlers[i].context, args);
                            }
                        } else {
                            for (i = 0; i < len; i++) {
                                handlers[i].callback.apply(handlers[i].context, args);
                            }
                        }
                        return 'filters' === type ? args[0] : true;
                    }

                    function addAction(action, callback, priority, context) {
                        if ('string' === typeof action && 'function' === typeof callback) {
                            priority = parseInt(priority || 10, 10);
                            _addHook('actions', action, callback, priority, context);
                        }
                        return MethodsAvailable;
                    }

                    function doAction() {
                        var args = slice.call(arguments);
                        var action = args.shift();
                        if ('string' === typeof action) {
                            _runHook('actions', action, args);
                        }
                        return MethodsAvailable;
                    }

                    function removeAction(action, callback) {
                        if ('string' === typeof action) {
                            _removeHook('actions', action, callback);
                        }
                        return MethodsAvailable;
                    }

                    function addFilter(filter, callback, priority, context) {
                        if ('string' === typeof filter && 'function' === typeof callback) {
                            priority = parseInt(priority || 10, 10);
                            _addHook('filters', filter, callback, priority, context);
                        }
                        return MethodsAvailable;
                    }

                    function applyFilters() {
                        var args = slice.call(arguments);
                        var filter = args.shift();
                        if ('string' === typeof filter) {
                            return _runHook('filters', filter, args);
                        }
                        return MethodsAvailable;
                    }

                    function removeFilter(filter, callback) {
                        if ('string' === typeof filter) {
                            _removeHook('filters', filter, callback);
                        }
                        return MethodsAvailable;
                    }
                    MethodsAvailable = {
                        removeFilter,
                        applyFilters,
                        addFilter,
                        removeAction,
                        doAction,
                        addAction
                    };
                    return MethodsAvailable;
                };
                module.exports = EventManager;
            }),
        "../core/common/assets/js/utils/environment.js":
            /*!*****************************************************!*\
            !*** ../core/common/assets/js/utils/environment.js ***!
            \*****************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                const matchUserAgent = UserAgentStr => {
                        return userAgent.indexOf(UserAgentStr) >= 0;
                    },
                    userAgent = navigator.userAgent,
                    isOpera = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(' OPR/'),
                    isFirefox = matchUserAgent('Firefox'),
                    isSafari = /^((?!chrome|android).)*safari/i.test(userAgent) || /constructor/i.test(window.HTMLElement) || (p => {
                        return '[object SafariRemoteNotification]' === p.toString();
                    })(!window.safari || typeof safari !== 'undefined' && safari.pushNotification),
                    isIE = /Trident|MSIE/.test(userAgent) && (false || !!document.documentMode),
                    isEdge = !isIE && !!window.StyleMedia || matchUserAgent('Edg'),
                    isChrome = !!window.chrome && matchUserAgent('Chrome') && !(isEdge || isOpera),
                    isBlink = matchUserAgent('Chrome') && !!window.CSS,
                    isAppleWebkit = matchUserAgent('AppleWebKit') && !isBlink,
                    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                    environment = {
                        isTouchDevice,
                        appleWebkit: isAppleWebkit,
                        blink: isBlink,
                        chrome: isChrome,
                        edge: isEdge,
                        firefox: isFirefox,
                        ie: isIE,
                        mac: matchUserAgent('Macintosh'),
                        opera: isOpera,
                        safari: isSafari,
                        webkit: matchUserAgent('AppleWebKit')
                    };
                var _default = environment;
                exports["default"] = _default;
            }),
        "../core/common/assets/js/utils/storage.js":
            /*!*************************************************!*\
            !*** ../core/common/assets/js/utils/storage.js ***!
            \*************************************************/
            ((__unused_webpack_module, exports) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class _default extends elementorModules.Module {
                    get(key, options) {
                        options = options || {};
                        let storage;
                        try {
                            storage = options.session ? sessionStorage : localStorage;
                        } catch (e) {
                            return key ? undefined : {};
                        }
                        let elementorStorage = storage.getItem('elementor');
                        if (elementorStorage) {
                            elementorStorage = JSON.parse(elementorStorage);
                        } else {
                            elementorStorage = {};
                        }
                        if (!elementorStorage.__expiration) {
                            elementorStorage.__expiration = {};
                        }
                        const expiration = elementorStorage.__expiration;
                        let expirationToCheck = [];
                        if (key) {
                            if (expiration[key]) {
                                expirationToCheck = [key];
                            }
                        } else {
                            expirationToCheck = Object.keys(expiration);
                        }
                        let entryExpired = false;
                        expirationToCheck.forEach(expirationKey => {
                            if (new Date(expiration[expirationKey]) < new Date()) {
                                delete elementorStorage[expirationKey];
                                delete expiration[expirationKey];
                                entryExpired = true;
                            }
                        });
                        if (entryExpired) {
                            this.save(elementorStorage, options.session);
                        }
                        if (key) {
                            return elementorStorage[key];
                        }
                        return elementorStorage;
                    }
                    set(key, value, options) {
                        options = options || {};
                        const elementorStorage = this.get(null, options);
                        elementorStorage[key] = value;
                        if (options.lifetimeInSeconds) {
                            const date = new Date();
                            date.setTime(date.getTime() + options.lifetimeInSeconds * 1000);
                            elementorStorage.__expiration[key] = date.getTime();
                        }
                        this.save(elementorStorage, options.session);
                    }
                    save(object, session) {
                        let storage;
                        try {
                            storage = session ? sessionStorage : localStorage;
                        } catch (e) {
                            return;
                        }
                        storage.setItem('elementor', JSON.stringify(object));
                    }
                }
                exports["default"] = _default;
            }),
        "../modules/shapes/assets/js/frontend/frontend.js":
            /*!********************************************************!*\
            !*** ../modules/shapes/assets/js/frontend/frontend.js ***!
            \********************************************************/
            ((__unused_webpack_module, exports, __webpack_require__) => {
                Object.defineProperty(exports, "__esModule", ({
                    value: true
                }));
                exports["default"] = void 0;
                class _default extends elementorModules.Module {
                    constructor() {
                        super();
                        elementorFrontend.elementsHandler.attachHandler('text-path', () => __webpack_require__.e( /*!import() | text-path*/ "text-path").then(__webpack_require__.bind(__webpack_require__, /*!./handlers/text-path*/ "../modules/shapes/assets/js/frontend/handlers/text-path.js")));
                    }
                }
                exports["default"] = _default;
            }),
        "../node_modules/core-js/internals/an-instance.js":
            /*!********************************************************!*\
            !*** ../node_modules/core-js/internals/an-instance.js ***!
            \********************************************************/
            ((module, __unused_webpack_exports, __webpack_require__) => {
                var isPrototypeOf = __webpack_require__( /*!../internals/object-is-prototype-of*/ "../node_modules/core-js/internals/object-is-prototype-of.js");
                var $TypeError = TypeError;
                module.exports = function(it, Prototype) {
                    if (isPrototypeOf(Prototype, it)) return it;
                    throw $TypeError('Incorrect invocation');
                };
            }),
        "../node_modules/core-js/internals/dom-exception-constants.js":
            /*!********************************************************************!*\
            !*** ../node_modules/core-js/internals/dom-exception-constants.js ***!
            \********************************************************************/
            ((module) => {
                module.exports = {
                    IndexSizeError: {
                        s: 'INDEX_SIZE_ERR',
                        c: 1,
                        m: 1
                    },
                    DOMStringSizeError: {
                        s: 'DOMSTRING_SIZE_ERR',
                        c: 2,
                        m: 0
                    },
                    HierarchyRequestError: {
                        s: 'HIERARCHY_REQUEST_ERR',
                        c: 3,
                        m: 1
                    },
                    WrongDocumentError: {
                        s: 'WRONG_DOCUMENT_ERR',
                        c: 4,
                        m: 1
                    },
                    InvalidCharacterError: {
                        s: 'INVALID_CHARACTER_ERR',
                        c: 5,
                        m: 1
                    },
                    NoDataAllowedError: {
                        s: 'NO_DATA_ALLOWED_ERR',
                        c: 6,
                        m: 0
                    },
                    NoModificationAllowedError: {
                        s: 'NO_MODIFICATION_ALLOWED_ERR',
                        c: 7,
                        m: 1
                    },
                    NotFoundError: {
                        s: 'NOT_FOUND_ERR',
                        c: 8,
                        m: 1
                    },
                    NotSupportedError: {
                        s: 'NOT_SUPPORTED_ERR',
                        c: 9,
                        m: 1
                    },
                    InUseAttributeError: {
                        s: 'INUSE_ATTRIBUTE_ERR',
                        c: 10,
                        m: 1
                    },
                    InvalidStateError: {
                        s: 'INVALID_STATE_ERR',
                        c: 11,
                        m: 1
                    },
                    SyntaxError: {
                        s: 'SYNTAX_ERR',
                        c: 12,
                        m: 1
                    },
                    InvalidModificationError: {
                        s: 'INVALID_MODIFICATION_ERR',
                        c: 13,
                        m: 1
                    },
                    NamespaceError: {
                        s: 'NAMESPACE_ERR',
                        c: 14,
                        m: 1
                    },
                    InvalidAccessError: {
                        s: 'INVALID_ACCESS_ERR',
                        c: 15,
                        m: 1
                    },
                    ValidationError: {
                        s: 'VALIDATION_ERR',
                        c: 16,
                        m: 0
                    },
                    TypeMismatchError: {
                        s: 'TYPE_MISMATCH_ERR',
                        c: 17,
                        m: 1
                    },
                    SecurityError: {
                        s: 'SECURITY_ERR',
                        c: 18,
                        m: 1
                    },
                    NetworkError: {
                        s: 'NETWORK_ERR',
                        c: 19,
                        m: 1
                    },
                    AbortError: {
                        s: 'ABORT_ERR',
                        c: 20,
                        m: 1
                    },
                    URLMismatchError: {
                        s: 'URL_MISMATCH_ERR',
                        c: 21,
                        m: 1
                    },
                    QuotaExceededError: {
                        s: 'QUOTA_EXCEEDED_ERR',
                        c: 22,
                        m: 1
                    },
                    TimeoutError: {
                        s: 'TIMEOUT_ERR',
                        c: 23,
                        m: 1
                    },
                    InvalidNodeTypeError: {
                        s: 'INVALID_NODE_TYPE_ERR',
                        c: 24,
                        m: 1
                    },
                    DataCloneError: {
                        s: 'DATA_CLONE_ERR',
                        c: 25,
                        m: 1
                    }
                };
            }),
        "../node_modules/core-js/modules/web.dom-exception.stack.js":
            /*!******************************************************************!*\
            !*** ../node_modules/core-js/modules/web.dom-exception.stack.js ***!
            \******************************************************************/
            ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
                var $ = __webpack_require__( /*!../internals/export*/ "../node_modules/core-js/internals/export.js");
                var global = __webpack_require__( /*!../internals/global*/ "../node_modules/core-js/internals/global.js");
                var getBuiltIn = __webpack_require__( /*!../internals/get-built-in*/ "../node_modules/core-js/internals/get-built-in.js");
                var createPropertyDescriptor = __webpack_require__( /*!../internals/create-property-descriptor*/ "../node_modules/core-js/internals/create-property-descriptor.js");
                var defineProperty = (__webpack_require__( /*!../internals/object-define-property*/ "../node_modules/core-js/internals/object-define-property.js").f);
                var hasOwn = __webpack_require__( /*!../internals/has-own-property*/ "../node_modules/core-js/internals/has-own-property.js");
                var anInstance = __webpack_require__( /*!../internals/an-instance*/ "../node_modules/core-js/internals/an-instance.js");
                var inheritIfRequired = __webpack_require__( /*!../internals/inherit-if-required*/ "../node_modules/core-js/internals/inherit-if-required.js");
                var normalizeStringArgument = __webpack_require__( /*!../internals/normalize-string-argument*/ "../node_modules/core-js/internals/normalize-string-argument.js");
                var DOMExceptionConstants = __webpack_require__( /*!../internals/dom-exception-constants*/ "../node_modules/core-js/internals/dom-exception-constants.js");
                var clearErrorStack = __webpack_require__( /*!../internals/error-stack-clear*/ "../node_modules/core-js/internals/error-stack-clear.js");
                var DESCRIPTORS = __webpack_require__( /*!../internals/descriptors*/ "../node_modules/core-js/internals/descriptors.js");
                var IS_PURE = __webpack_require__( /*!../internals/is-pure*/ "../node_modules/core-js/internals/is-pure.js");
                var DOM_EXCEPTION = 'DOMException';
                var Error = getBuiltIn('Error');
                var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
                var $DOMException = function DOMException() {
                    anInstance(this, DOMExceptionPrototype);
                    var argumentsLength = arguments.length;
                    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
                    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
                    var that = new NativeDOMException(message, name);
                    var error = Error(message);
                    error.name = DOM_EXCEPTION;
                    defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
                    inheritIfRequired(that, this, $DOMException);
                    return that;
                };
                var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
                var ERROR_HAS_STACK = 'stack' in Error(DOM_EXCEPTION);
                var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);
                var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(global, DOM_EXCEPTION);
                var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
                var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
                $({
                    global: true,
                    constructor: true,
                    forced: IS_PURE || FORCED_CONSTRUCTOR
                }, {
                    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
                });
                var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
                var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
                if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
                    if (!IS_PURE) {
                        defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
                    }
                    for (var key in DOMExceptionConstants)
                        if (hasOwn(DOMExceptionConstants, key)) {
                            var constant = DOMExceptionConstants[key];
                            var constantName = constant.s;
                            if (!hasOwn(PolyfilledDOMException, constantName)) {
                                defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
                            }
                        }
                }
            })
    },
    __webpack_require__ => {
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        __webpack_require__.O(0, ["frontend-modules"], () => (__webpack_exec__("../assets/dev/js/frontend/frontend.js")));
        var __webpack_exports__ = __webpack_require__.O();
    }
]);