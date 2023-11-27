;
(function($) {
    var focused = true;
    var easings = {
        swing: 'cubic-bezier(.02, .01, .47, 1)',
        linear: 'linear',
        easeInQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
        easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
        easeInOutQuad: 'cubic-bezier(0.45, 0, 0.55, 1)',
        easeInCubic: 'cubic-bezier(0.32, 0, 0.67, 0)',
        easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
        easeInOutCubic: 'cubic-bezier(0.65, 0, 0.35, 1)',
        easeInQuart: 'cubic-bezier(0.5, 0, 0.75, 0)',
        easeOutQuart: 'cubic-bezier(0.25, 1, 0.5, 1)',
        easeInOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
        easeInQuint: 'cubic-bezier(0.64, 0, 0.78, 0)',
        easeOutQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
        easeInOutQuint: 'cubic-bezier(0.83, 0, 0.17, 1)',
        easeInSine: 'cubic-bezier(0.12, 0, 0.39, 0)',
        easeOutSine: 'cubic-bezier(0.61, 1, 0.88, 1)',
        easeInOutSine: 'cubic-bezier(0.37, 0, 0.63, 1)',
        easeInExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
        easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)',
        easeInCirc: 'cubic-bezier(0.55, 0, 1, 0.45)',
        easeOutCirc: 'cubic-bezier(0, 0.55, 0.45, 1)',
        easeInOutCirc: 'cubic-bezier(0.85, 0, 0.15, 1)',
        easeInBack: 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        easeInOutBack: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
    };
    easings['jswing'] = easings['swing'];
    $.flexslider = function(el, options) {
        var slider = $(el);
        if (typeof options.rtl == 'undefined' && $('html').attr('dir') == 'rtl') {
            options.rtl = true;
        }
        slider.vars = $.extend({}, $.flexslider.defaults, options);
        var namespace = slider.vars.namespace,
            touch = (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
            eventType = "click touchend keyup",
            watchedEvent = "",
            watchedEventClearTimer, easing = easings[slider.vars.easing] || "ease",
            vertical = slider.vars.direction === "vertical",
            reverse = slider.vars.reverse,
            carousel = (slider.vars.itemWidth > 0),
            fade = slider.vars.animation === "fade",
            asNav = slider.vars.asNavFor !== "",
            methods = {};
        $.data(el, "flexslider", slider);
        methods = {
            init: function() {
                slider.animating = false;
                slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0), 10);
                if (isNaN(slider.currentSlide)) {
                    slider.currentSlide = 0;
                }
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                slider.syncExists = $(slider.vars.sync).length > 0;
                if (slider.vars.animation === "slide") {
                    slider.vars.animation = "swing";
                }
                slider.prop = (vertical) ? "top" : (slider.vars.rtl ? "marginRight" : "marginLeft");
                slider.args = {};
                slider.manualPause = false;
                slider.stopped = false;
                slider.started = false;
                slider.startTimeout = null;
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS;
                if (slider.transitions) slider.prop = "transform";
                slider.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                slider.ensureAnimationEnd = '';
                if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
                if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
                if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);
                if (slider.vars.randomize) {
                    slider.slides.sort(function() {
                        return (Math.round(Math.random()) - 0.5);
                    });
                    slider.container.empty().append(slider.slides);
                }
                slider.doMath();
                slider.setup("init");
                if (slider.vars.controlNav) {
                    methods.controlNav.setup();
                }
                if (slider.vars.directionNav) {
                    methods.directionNav.setup();
                }
                if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                    $(document).on('keyup', function(event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = (slider.vars.rtl ? ((keycode === 37) ? slider.getTarget('next') : (keycode === 39) ? slider.getTarget('prev') : false) : ((keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false));
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                    });
                }
                if (slider.vars.mousewheel) {
                    slider.on('mousewheel', function(event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    });
                }
                if (slider.vars.pausePlay) {
                    methods.pausePlay.setup();
                }
                if (slider.vars.slideshow && slider.vars.pauseInvisible) {
                    methods.pauseInvisible();
                }
                if (slider.vars.slideshow) {
                    if (slider.vars.pauseOnHover) {
                        slider.on('mouseenter', function() {
                            if (!slider.manualPlay && !slider.manualPause) {
                                slider.pause();
                            }
                        }).on('mouseleave', function() {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                                slider.play();
                            }
                        });
                    }
                    if (!slider.vars.pauseInvisible || document.visibilityState === 'visible') {
                        (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay): slider.play();
                    }
                }
                if (asNav) {
                    methods.asNav.setup();
                }
                if (touch && slider.vars.touch) {
                    methods.touch();
                }
                if (!fade || (fade && slider.vars.smoothHeight)) {
                    $(window).on("resize orientationchange focus", methods.resize);
                }
                slider.find("img").attr("draggable", "false");
                setTimeout(function() {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    slider.slides.on(eventType, function(e) {
                        e.preventDefault();
                        var $slide = $(this),
                            target = $slide.index();
                        var posFromX;
                        if (slider.vars.rtl) {
                            posFromX = -1 * ($slide.offset().right - $(slider).scrollLeft());
                        } else {
                            posFromX = $slide.offset().left - $(slider).scrollLeft();
                        }
                        if (posFromX <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                            slider.flexAnimate(slider.getTarget("prev"), true);
                        } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                            slider.direction = (slider.currentItem < target) ? "next" : "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                        }
                    });
                }
            },
            controlNav: {
                setup: function() {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else {
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function() {
                    var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item, slide;
                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            slide = slider.slides.eq(i);
                            if (undefined === slide.attr('data-thumb-alt')) {
                                slide.attr('data-thumb-alt', '');
                            }
                            item = $('<a></a>').attr('href', '#').text(j);
                            if (slider.vars.controlNav === "thumbnails") {
                                item = $('<img/>', {
                                    onload: 'this.width = this.naturalWidth; this.height = this.naturalHeight',
                                    src: slide.attr('data-thumb'),
                                    alt: slide.attr('alt')
                                })
                            }
                            if ('' !== slide.attr('data-thumb-alt')) {
                                item.attr('alt', slide.attr('data-thumb-alt'));
                            }
                            if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                                var captn = slide.attr('data-thumbcaption');
                                if ('' !== captn && undefined !== captn) {
                                    var caption = $('<span></span>').addClass(namespace + 'caption').text(captn);
                                    item.append(caption);
                                }
                            }
                            var liElement = $('<li>');
                            item.appendTo(liElement);
                            liElement.append('</li>');
                            slider.controlNavScaffold.append(liElement);
                            j++;
                        }
                    }
                    (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold): slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();
                    methods.controlNav.active();
                    slider.controlNavScaffold.on(eventType, 'a, img', function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();
                    slider.controlNav.on(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                (target > slider.currentSlide) ? slider.direction = "next": slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
                },
                active: function() {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function(action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>'));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find('li').remove();
                    } else {
                        slider.controlNav.eq(pos).closest('li').remove();
                    }
                    methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action): methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');
                    if (slider.customDirectionNav) {
                        slider.directionNav = slider.customDirectionNav;
                    } else if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
                    }
                    methods.directionNav.update();
                    slider.directionNav.on(eventType, function(event) {
                        event.preventDefault();
                        var target;
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var disabledClass = namespace + 'disabled';
                    if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
                    } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
                        } else {
                            slider.directionNav.removeClass(disabledClass).prop('tabindex', '-1');
                        }
                    } else {
                        slider.directionNav.removeClass(disabledClass).prop('tabindex', '-1');
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
                    }
                    methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');
                    slider.pausePlay.on(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            if ($(this).hasClass(namespace + 'pause')) {
                                slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause();
                            } else {
                                slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play();
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function(state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText): slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
                }
            },
            touch: function() {
                var startX, startY, offset, cwidth, dx, startT, onTouchStart, onTouchMove, onTouchEnd, scrolling = false,
                    localX = 0,
                    localY = 0,
                    accDx = 0;
                onTouchStart = function(e) {
                    if (slider.animating) {
                        e.preventDefault();
                    } else if (e.touches.length === 1) {
                        slider.pause();
                        cwidth = (vertical) ? slider.h : slider.w;
                        startT = Number(new Date());
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        startX = (vertical) ? localY : localX;
                        startY = (vertical) ? localX : localY;
                        el.addEventListener('touchmove', onTouchMove, false);
                        el.addEventListener('touchend', onTouchEnd, false);
                    }
                };
                onTouchMove = function(e) {
                    localX = e.touches[0].pageX;
                    localY = e.touches[0].pageY;
                    dx = (vertical) ? startX - localY : (slider.vars.rtl ? -1 : 1) * (startX - localX);
                    scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                    var fxms = 500;
                    if (!scrolling || Number(new Date()) - startT > fxms) {
                        e.preventDefault();
                        if (!fade && slider.transitions) {
                            if (!slider.vars.animationLoop) {
                                dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
                            }
                            slider.setProps(offset + dx, "setTouch");
                        }
                    }
                };
                onTouchEnd = function(e) {
                    el.removeEventListener('touchmove', onTouchMove, false);
                    if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                        var updateDx = (reverse) ? -dx : dx,
                            target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        } else {
                            if (!fade) {
                                slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                    }
                    el.removeEventListener('touchend', onTouchEnd, false);
                    startX = null;
                    startY = null;
                    dx = null;
                    offset = null;
                };
                el.addEventListener('touchstart', onTouchStart, false);
            },
            resize: function() {
                if (!slider.animating && slider.is(':visible')) {
                    if (!carousel) {
                        slider.doMath();
                    }
                    if (fade) {
                        methods.smoothHeight();
                    } else if (carousel) {
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    } else if (vertical) {
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        slider.setProps(slider.computedW, "setTotal");
                        slider.newSlides.width(slider.computedW);
                        if (slider.vars.smoothHeight) {
                            methods.smoothHeight();
                        }
                    }
                }
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({
                        "height": slider.slides.eq(slider.animatingTo).innerHeight()
                    }, dur): $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight());
                }
            },
            sync: function(action) {
                var $obj = $(slider.vars.sync).data("flexslider"),
                    target = slider.animatingTo;
                switch (action) {
                    case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                        break;
                    case "play":
                        if (!$obj.playing && !$obj.asNav) {
                            $obj.play();
                        }
                        break;
                    case "pause":
                        $obj.pause();
                        break;
                }
            },
            uniqueID: function($clone) {
                $clone.filter('[id]').add($clone.find('[id]')).each(function() {
                    var $this = $(this);
                    $this.attr('id', $this.attr('id') + '_clone');
                });
                return $clone;
            },
            pauseInvisible: function() {
                document.addEventListener('visibilitychange', function() {
                    if (document.visibilityState === 'hidden') {
                        if (slider.startTimeout) {
                            clearTimeout(slider.startTimeout);
                        } else {
                            slider.pause();
                        }
                    } else {
                        if (slider.started) {
                            slider.play();
                        } else {
                            if (slider.vars.initDelay > 0) {
                                setTimeout(slider.play, slider.vars.initDelay);
                            } else {
                                slider.play();
                            }
                        }
                    }
                });
            },
            setToClearWatchedEvent: function() {
                clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function() {
                    watchedEvent = "";
                }, 3000);
            }
        };
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
            }
            if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";
            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;
                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }
                slider.animating = true;
                slider.animatingTo = target;
                if (pause) {
                    slider.pause();
                }
                slider.vars.before(slider);
                if (slider.syncExists && !fromNav) {
                    methods.sync("animate");
                }
                if (slider.vars.controlNav) {
                    methods.controlNav.active();
                }
                if (!carousel) {
                    slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                }
                slider.atEnd = target === 0 || target === slider.last;
                if (slider.vars.directionNav) {
                    methods.directionNav.update();
                }
                if (target === slider.last) {
                    slider.vars.end(slider);
                    if (!slider.vars.animationLoop) {
                        slider.pause();
                    }
                }
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext;
                    if (carousel) {
                        margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.off("transitionend");
                        slider.container.on("transitionend", function() {
                            clearTimeout(slider.ensureAnimationEnd);
                            slider.wrapup(dimension);
                        });
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function() {
                            slider.wrapup(dimension);
                        }, slider.vars.animationSpeed + 100);
                    } else {
                        var prop = slider.prop;
                        slider.container.each(function() {
                            var container = this;
                            var keyframes = {};
                            keyframes[prop] = [window.getComputedStyle(container)[prop], slider.args[prop]];
                            container.animate(keyframes, {
                                duration: slider.vars.animationSpeed,
                                easing: easing
                            }).onfinish = function() {
                                container.style[prop] = slider.args[prop];
                                slider.wrapup(dimension);
                            };
                        });
                    }
                } else {
                    if (!touch) {
                        slider.slides.eq(slider.currentSlide).css({
                            "zIndex": 1
                        }).animate({
                            "opacity": 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                    } else {
                        slider.slides.eq(slider.currentSlide).css({
                            "opacity": 0,
                            "zIndex": 1
                        });
                        slider.slides.eq(target).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                        slider.wrapup(dimension);
                    }
                }
                if (slider.vars.smoothHeight) {
                    methods.smoothHeight(slider.vars.animationSpeed);
                }
            }
        };
        slider.wrapup = function(dimension) {
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            slider.vars.after(slider);
        };
        slider.animateSlides = function() {
            if (!slider.animating && focused) {
                slider.flexAnimate(slider.getTarget("next"));
            }
        };
        slider.pause = function() {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            if (slider.vars.pausePlay) {
                methods.pausePlay.update("play");
            }
            if (slider.syncExists) {
                methods.sync("pause");
            }
        };
        slider.play = function() {
            if (slider.playing) {
                clearInterval(slider.animatedSlides);
            }
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            if (slider.vars.pausePlay) {
                methods.pausePlay.update("pause");
            }
            if (slider.syncExists) {
                methods.sync("play");
            }
        };
        slider.stop = function() {
            slider.pause();
            slider.stopped = true;
        };
        slider.canAdvance = function(target, fromNav) {
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return (fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (slider.vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true;
        };
        slider.getTarget = function(dir) {
            slider.direction = dir;
            if (dir === "next") {
                return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        };
        slider.setProps = function(pos, special, dur) {
            var target = (function() {
                var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function() {
                        if (carousel) {
                            return (special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                        } else {
                            switch (special) {
                                case "setTotal":
                                    return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch":
                                    return (reverse) ? pos : pos;
                                case "jumpEnd":
                                    return (reverse) ? pos : slider.count * pos;
                                case "jumpStart":
                                    return (reverse) ? slider.count * pos : pos;
                                default:
                                    return pos;
                            }
                        }
                    }());
                return (posCalc * ((slider.vars.rtl) ? 1 : -1)) + "px";
            }());
            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + (parseInt(target) + 'px') + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("transition-duration", dur);
            }
            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) {
                slider.container.css(slider.args);
            }
            slider.container.css('transform', target);
        };
        slider.setup = function(type) {
            if (!fade) {
                var sliderOffset, arr;
                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
                        "overflow": "hidden",
                        "position": "relative"
                    }).appendTo(slider).append(slider.container);
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    if (type !== "init") {
                        slider.container.find('.clone').remove();
                    }
                    slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true')).prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
                }
                slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        slider.newSlides.css({
                            "display": "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function() {
                        slider.doMath();
                        if (slider.vars.rtl) {
                            slider.newSlides.css({
                                "width": slider.computedW,
                                "marginRight": slider.computedM,
                                "float": "right",
                                "display": "block"
                            });
                        } else {
                            slider.newSlides.css({
                                "width": slider.computedW,
                                "marginRight": slider.computedM,
                                "float": "left",
                                "display": "block"
                            });
                        }
                        if (slider.vars.smoothHeight) {
                            methods.smoothHeight();
                        }
                    }, (type === "init") ? 100 : 0);
                }
            } else {
                if (slider.vars.rtl) {
                    slider.slides.css({
                        "width": "100%",
                        "float": 'right',
                        "marginLeft": "-100%",
                        "position": "relative"
                    });
                } else {
                    slider.slides.css({
                        "width": "100%",
                        "float": 'left',
                        "marginRight": "-100%",
                        "position": "relative"
                    });
                }
                if (type === "init") {
                    if (!touch) {
                        if (slider.vars.fadeFirstSlide == false) {
                            slider.slides.css({
                                "opacity": 0,
                                "display": "block",
                                "zIndex": 1
                            }).eq(slider.currentSlide).css({
                                "zIndex": 2
                            }).css({
                                "opacity": 1
                            });
                        } else {
                            slider.slides.css({
                                "opacity": 0,
                                "display": "block",
                                "zIndex": 1
                            }).eq(slider.currentSlide).css({
                                "zIndex": 2
                            }).animate({
                                "opacity": 1
                            }, slider.vars.animationSpeed, slider.vars.easing);
                        }
                    } else {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "transition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                    }
                }
                if (slider.vars.smoothHeight) {
                    methods.smoothHeight();
                }
            }
            if (!carousel) {
                slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
            }
            slider.vars.init(slider);
        };
        slider.doMath = function() {
            var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;
            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            if (slider.isFirefox) {
                slider.w = slider.width();
            }
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.itemM = slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems : (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor(slider.w / (slider.itemW));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 : (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.itemM = slideMargin;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
            slider.computedM = slider.itemM;
        };
        slider.update = function(pos, action) {
            slider.doMath();
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }
            if (slider.vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            if (slider.vars.directionNav) {
                methods.directionNav.update();
            }
        };
        slider.addSlide = function(obj, pos) {
            var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1;
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj): slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj): slider.container.append($obj);
            }
            slider.update(pos, "add");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.added(slider);
        };
        slider.removeSlide = function(obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
            slider.count -= 1;
            slider.last = slider.count - 1;
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove(): slider.slides.eq(obj).remove();
            }
            slider.doMath();
            slider.update(pos, "remove");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.removed(slider);
        };
        methods.init();
    };
    $(window).on('blur', function(e) {
        focused = false;
    }).on('focus', function(e) {
        focused = true;
    });
    $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,
        fadeFirstSlide: true,
        thumbCaptions: false,
        pauseOnAction: true,
        pauseOnHover: false,
        pauseInvisible: true,
        useCSS: true,
        touch: true,
        video: false,
        controlNav: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: true,
        isFirefox: false,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {},
        rtl: false
    };
    $.fn.flexslider = function(options) {
        if (options === undefined) {
            options = {};
        }
        if (typeof options === "object") {
            return this.each(function() {
                var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector);
                if (($slides.length === 1 && options.allowOneSlide === false) || $slides.length === 0) {
                    $slides.fadeIn(400);
                    if (options.start) {
                        options.start($this);
                    }
                } else if ($this.data('flexslider') === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            var $slider = $(this).data('flexslider');
            switch (options) {
                case "play":
                    $slider.play();
                    break;
                case "pause":
                    $slider.pause();
                    break;
                case "stop":
                    $slider.stop();
                    break;
                case "next":
                    $slider.flexAnimate($slider.getTarget("next"), true);
                    break;
                case "prev":
                case "previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true);
                    break;
                default:
                    if (typeof options === "number") {
                        $slider.flexAnimate(options, true);
                    }
            }
        }
    };
})(jQuery);