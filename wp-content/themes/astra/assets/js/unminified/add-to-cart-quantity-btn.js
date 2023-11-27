window.addEventListener("load", function(e) {
    astrawpWooQuantityButtons();
    quantityInput();
});
const astraminiCarttargetNode = document.getElementById("ast-site-header-cart");
if (astraminiCarttargetNode != null) {
    const config = {
        attributes: false,
        childList: true,
        subtree: true
    };
    const astraMinicartObserver = () => {
        astrawpWooQuantityButtons();
        quantityInput();
    };
    const observer = new MutationObserver(astraMinicartObserver);
    observer.observe(astraminiCarttargetNode, config);
}
jQuery(function($) {
    $(document.body).on('wc_fragments_refreshed', function() {
        astrawpWooQuantityButtons();
        quantityInput();
    });
});
(function() {
    var send = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.send = function() {
        this.addEventListener('load', function() {
            astrawpWooQuantityButtons();
        })
        return send.apply(this, arguments)
    }
})();

function astrawpWooQuantityButtons($quantitySelector) {
    var $cart = document.querySelector('.woocommerce div.product form.cart');
    if (!$quantitySelector) {
        $quantitySelector = '.qty';
    }
    $quantityBoxesWrap = document.querySelectorAll('div.quantity:not(.elementor-widget-woocommerce-cart .quantity):not(.buttons_added), td.quantity:not(.elementor-widget-woocommerce-cart .quantity):not(.buttons_added)');
    for (var i = 0; i < $quantityBoxesWrap.length; i++) {
        var e = $quantityBoxesWrap[i];
        var $quantityBoxes = e.querySelector($quantitySelector);
        if ($quantityBoxes && 'date' !== $quantityBoxes.getAttribute('type') && 'hidden' !== $quantityBoxes.getAttribute('type')) {
            $qty_parent = $quantityBoxes.parentElement;
            $qty_parent.classList.add('buttons_added');
            switch (astra_qty_btn.style_type) {
                case 'no-internal-border':
                    $quantityBoxes.classList.add('ast-no-internal-border');
                    $qty_parent.insertAdjacentHTML('afterbegin', '<label class="screen-reader-text" for="minus_qty">' + astra_qty_btn.minus_qty + '</label><a href="javascript:void(0)" id ="minus_qty" class="minus no-internal-border">-</a>');
                    $qty_parent.insertAdjacentHTML('beforeend', '<label class="screen-reader-text" for="plus_qty"> ' + astra_qty_btn.plus_qty + '</label><a href="javascript:void(0)" id ="plus_qty" class="plus no-internal-border">+</a> ');
                    break;
                case 'vertical-icon':
                    $qty_parent.classList.add('ast-vertical-style-applied');
                    $quantityBoxes.classList.add('vertical-icons-applied');
                    $qty_parent.insertAdjacentHTML('beforeend', '<label class="screen-reader-text" for="plus_qty"> ' + astra_qty_btn.plus_qty + '</label><a href="javascript:void(0)" id ="plus_qty" class="plus ast-vertical-icon">+</a>' +
                        '<label class="screen-reader-text" for="minus_qty">' + astra_qty_btn.minus_qty + '</label><a  href="javascript:void(0)" id ="minus_qty" class="minus ast-vertical-icon">-</a>');
                    break;
                default:
                    $qty_parent.insertAdjacentHTML('afterbegin', '<label class="screen-reader-text" for="minus_qty">' + astra_qty_btn.minus_qty + '</label><a href="javascript:void(0)" id ="minus_qty" class="minus">-</a>');
                    $qty_parent.insertAdjacentHTML('beforeend', '<label class="screen-reader-text" for="plus_qty"> ' + astra_qty_btn.plus_qty + '</label><a href="javascript:void(0)" id ="plus_qty" class="plus">+</a>');
                    break;
            }
            $quantityEach = document.querySelectorAll('input' + $quantitySelector + ':not(.product-quantity)');
            for (var j = 0; j < $quantityEach.length; j++) {
                var el = $quantityEach[j];
                var $min = el.getAttribute('min');
                if ($min && $min > 0 && parseFloat(el.value) < $min) {
                    el.value = $min;
                }
            }
            let objbody = document.getElementsByTagName('BODY')[0];
            let cart = document.getElementsByClassName('cart')[0];
            if (objbody.classList.contains('single-product') && !cart.classList.contains('grouped_form')) {
                let quantityInput = document.querySelector('.woocommerce input[type=number].qty');
                if (quantityInput) {
                    quantityInput.addEventListener('keyup', function() {
                        let qtyVal = quantityInput.value;
                        quantityInput.value = qtyVal;
                    });
                }
            }
            var plus_minus_obj = e.querySelectorAll('.plus, .minus');
            for (var l = 0; l < plus_minus_obj.length; l++) {
                var pm_el = plus_minus_obj[l];
                pm_el.addEventListener("click", function(ev) {
                    var $quantityBox;
                    $quantityBox = ev.target.parentElement.querySelector($quantitySelector);
                    var $currentQuantity = parseFloat($quantityBox.value),
                        $maxQuantity = parseFloat($quantityBox.getAttribute('max')),
                        $minQuantity = parseFloat($quantityBox.getAttribute('min')),
                        $step = parseFloat($quantityBox.getAttribute('step')),
                        checkStepInteger = Number.isInteger($step),
                        finalValue;
                    if (!$currentQuantity || '' === $currentQuantity || 'NaN' === $currentQuantity) {
                        $currentQuantity = 0;
                    }
                    if ('' === $maxQuantity || 'NaN' === $maxQuantity) {
                        $maxQuantity = '';
                    }
                    if ('' === $minQuantity || 'NaN' === $minQuantity) {
                        $minQuantity = 0;
                    }
                    if ('any' === $step || '' === $step || undefined === $step || 'NaN' === $step) {
                        $step = 1;
                    }
                    if (ev.target.classList.contains('plus')) {
                        if ($maxQuantity && ($maxQuantity == $currentQuantity || $currentQuantity > $maxQuantity)) {
                            $quantityBox.value = $maxQuantity;
                        } else {
                            finalValue = $currentQuantity + parseFloat($step);
                            $quantityBox.value = checkStepInteger ? finalValue : (finalValue).toFixed(1);
                        }
                    } else {
                        if ($minQuantity && ($minQuantity == $currentQuantity || $currentQuantity < $minQuantity)) {
                            $quantityBox.value = $minQuantity;
                        } else if ($currentQuantity > 0) {
                            finalValue = $currentQuantity - parseFloat($step);
                            $quantityBox.value = checkStepInteger ? finalValue : (finalValue).toFixed(1);
                        }
                    }
                    var changeEvent = new Event('change', {
                        bubbles: true
                    });
                    $quantityBox.dispatchEvent(changeEvent);
                    var update_cart_btn = document.getElementsByName("update_cart");
                    if (update_cart_btn.length > 0) {
                        for (var btn = 0; btn < update_cart_btn.length; btn++) {
                            update_cart_btn[btn].disabled = false;
                            update_cart_btn[btn].click();
                        }
                    }
                    const quantity = $quantityBox.value;
                    const itemHash = $quantityBox.getAttribute('name').replace(/cart\[([\w]+)\]\[qty\]/g, '$1');
                    sendAjaxQuantityRequest(ev.currentTarget, quantity, itemHash)
                }, false);
            }
        }
    }
}

function sendAjaxQuantityRequest(currentTarget, quantity, itemHash) {
    const miniCart = currentTarget.closest('.woocommerce-mini-cart');
    if (miniCart && astra && astra.single_product_qty_ajax_nonce && astra.ajax_url) {
        let qtyNonce = astra.single_product_qty_ajax_nonce;
        miniCart.classList.add('ajax-mini-cart-qty-loading');
        let xhrRequest = new XMLHttpRequest();
        xhrRequest.open('POST', astra.ajax_url, true);
        xhrRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhrRequest.send('action=astra_add_cart_single_product_quantity&hash=' + itemHash + '&quantity=' + quantity + '&qtyNonce=' + qtyNonce);
        xhrRequest.onload = function() {
            if (xhrRequest.readyState == XMLHttpRequest.DONE) {
                if (200 <= xhrRequest.status || 400 <= xhrRequest.status) {
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent('wc_fragment_refresh', true, false);
                    document.body.dispatchEvent(event);
                    setTimeout(() => {
                        miniCart.classList.remove('ajax-mini-cart-qty-loading');
                    }, 500);
                    if (typeof wc_add_to_cart_params === 'undefined') {
                        return;
                    }
                }
            }
        };
    }
}
let typingTimer;
let doneTypingInterval = 500;

function quantityInput() {
    const quantityInputContainer = document.querySelector('.woocommerce-mini-cart');
    if (quantityInputContainer) {
        const quantityInput = document.querySelectorAll('.input-text.qty');
        quantityInput.forEach(single => {
            single.addEventListener('keyup', (e) => {
                clearTimeout(typingTimer);
                if (single.value) {
                    typingTimer = setTimeout(() => {
                        const quantity = e.target.value;
                        const itemHash = e.target.getAttribute('name').replace(/cart\[([\w]+)\]\[qty\]/g, '$1');
                        if (quantity) {
                            sendAjaxQuantityRequest(e.target, quantity, itemHash);
                        }
                    }, doneTypingInterval);
                }
            });
        });
    }
}