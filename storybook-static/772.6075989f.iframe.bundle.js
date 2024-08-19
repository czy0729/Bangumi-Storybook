/*! For license information please see 772.6075989f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkweb=self.webpackChunkweb||[]).push([[772],{"./node_modules/slash/index.js":(e,t,n)=>{"use strict";n("./node_modules/core-js/modules/es.string.replace.js"),n("./node_modules/core-js/modules/es.regexp.exec.js"),e.exports=function(e){var t=/^\\\\\?\\/.test(e),n=/[^\u0000-\u0080]+/.test(e);return t||n?e:e.replace(/\\/g,"/")}},"./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>j});var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,i=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&u()}function a(){s(i)}function u(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=e}return u}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),f=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},d=_(0,0,0,0);function h(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+h(e["border-"+n+"-width"])}),0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return d;var r=l(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=h(i)}return t}(r),i=o.left+o.right,s=o.top+o.bottom,a=h(r.width),u=h(r.height);if("border-box"===r.boxSizing&&(Math.round(a+i)!==t&&(a-=p(r,"left","right")+i),Math.round(u+s)!==n&&(u-=p(r,"top","bottom")+s)),!function(e){return e===l(e).document.documentElement}(e)){var c=Math.round(a+i)-t,f=Math.round(u+s)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(f)&&(u-=f)}return _(o.left,o.top,a,u)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&"function"==typeof e.getBBox};function m(e){return o?v(e)?function(e){var t=e.getBBox();return _(0,0,t.width,t.height)}(e):b(e):d}function _(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=_(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=m(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),g=function(e,t){var n,r,o,i,s,a,u,c=(r=(n=t).x,o=n.y,i=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(a.prototype),f(u,{x:r,y:o,width:i,height:s,top:o,right:r+i,bottom:s+o,left:r}),u);f(this,{target:e,contentRect:c})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof l(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new g(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),x="undefined"!=typeof WeakMap?new WeakMap:new r,E=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);x.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){E.prototype[e]=function(){var t;return(t=x.get(this))[e].apply(t,arguments)}}));const j=void 0!==i.ResizeObserver?i.ResizeObserver:E},"./node_modules/safe-array-concat/index.js":(e,t,n)=>{"use strict";var r=n("./node_modules/get-intrinsic/index.js")("%Array.prototype.concat%"),o=n("./node_modules/call-bind/index.js"),i=n("./node_modules/call-bind/callBound.js")("Array.prototype.slice"),s=n("./node_modules/has-symbols/shams.js")()&&Symbol.isConcatSpreadable,a=[],u=s?o.apply(r,a):null,c=s?null:o(r,a),f=s?n("./node_modules/isarray/index.js"):null;e.exports=s?function(e){for(var t=0;t<arguments.length;t+=1){var n=arguments[t];if(n&&"object"==typeof n&&"boolean"==typeof n[s]){a[s]||(a[s]=!0);var r=f(n)?i(n):[n];r[s]=!0,arguments[t]=r}}return u(arguments)}:c},"./node_modules/safe-buffer/index.js":(e,t,n)=>{var r=n("./node_modules/buffer/index.js"),o=r.Buffer;function i(e,t){for(var n in e)t[n]=e[n]}function s(e,t,n){return o(e,t,n)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?e.exports=r:(i(r,t),t.Buffer=s),s.prototype=Object.create(o.prototype),i(o,s),s.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number");return o(e,t,n)},s.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number");var r=o(e);return void 0!==t?"string"==typeof n?r.fill(t,n):r.fill(t):r.fill(0),r},s.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return o(e)},s.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r.SlowBuffer(e)}},"./node_modules/safe-regex-test/index.js":(e,t,n)=>{"use strict";var r=n("./node_modules/call-bind/callBound.js"),o=n("./node_modules/get-intrinsic/index.js"),i=n("./node_modules/is-regex/index.js"),s=r("RegExp.prototype.exec"),a=o("%TypeError%");e.exports=function(e){if(!i(e))throw new a("`regex` must be a RegExp");return function(t){return null!==s(e,t)}}},"./node_modules/set-function-name/index.js":(e,t,n)=>{"use strict";var r=n("./node_modules/set-function-name/node_modules/define-data-property/index.js"),o=n("./node_modules/has-property-descriptors/index.js")(),i=n("./node_modules/functions-have-names/index.js").functionsHaveConfigurableNames(),s=TypeError;e.exports=function(e,t){if("function"!=typeof e)throw new s("`fn` is not a function");return arguments.length>2&&!!arguments[2]&&!i||(o?r(e,"name",t,!0,!0):r(e,"name",t)),e}},"./node_modules/set-function-name/node_modules/define-data-property/index.js":(e,t,n)=>{"use strict";var r=n("./node_modules/has-property-descriptors/index.js")(),o=n("./node_modules/get-intrinsic/index.js"),i=r&&o("%Object.defineProperty%",!0);if(i)try{i({},"a",{value:1})}catch(e){i=!1}var s=o("%SyntaxError%"),a=o("%TypeError%"),u=n("./node_modules/gopd/index.js");e.exports=function(e,t,n){if(!e||"object"!=typeof e&&"function"!=typeof e)throw new a("`obj` must be an object or a function`");if("string"!=typeof t&&"symbol"!=typeof t)throw new a("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new a("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new a("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new a("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new a("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,c=arguments.length>5?arguments[5]:null,f=arguments.length>6&&arguments[6],l=!!u&&u(e,t);if(i)i(e,t,{configurable:null===c&&l?l.configurable:!c,enumerable:null===r&&l?l.enumerable:!r,value:n,writable:null===o&&l?l.writable:!o});else{if(!f&&(r||o||c))throw new s("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");e[t]=n}}},"./node_modules/side-channel/index.js":(e,t,n)=>{"use strict";var r=n("./node_modules/get-intrinsic/index.js"),o=n("./node_modules/call-bind/callBound.js"),i=n("./node_modules/object-inspect/index.js"),s=r("%TypeError%"),a=r("%WeakMap%",!0),u=r("%Map%",!0),c=o("WeakMap.prototype.get",!0),f=o("WeakMap.prototype.set",!0),l=o("WeakMap.prototype.has",!0),d=o("Map.prototype.get",!0),h=o("Map.prototype.set",!0),p=o("Map.prototype.has",!0),b=function(e,t){for(var n,r=e;null!==(n=r.next);r=n)if(n.key===t)return r.next=n.next,n.next=e.next,e.next=n,n};e.exports=function(){var e,t,n,r={assert:function(e){if(!r.has(e))throw new s("Side channel does not contain "+i(e))},get:function(r){if(a&&r&&("object"==typeof r||"function"==typeof r)){if(e)return c(e,r)}else if(u){if(t)return d(t,r)}else if(n)return function(e,t){var n=b(e,t);return n&&n.value}(n,r)},has:function(r){if(a&&r&&("object"==typeof r||"function"==typeof r)){if(e)return l(e,r)}else if(u){if(t)return p(t,r)}else if(n)return function(e,t){return!!b(e,t)}(n,r);return!1},set:function(r,o){a&&r&&("object"==typeof r||"function"==typeof r)?(e||(e=new a),f(e,r,o)):u?(t||(t=new u),h(t,r,o)):(n||(n={key:{},next:null}),function(e,t,n){var r=b(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}}(n,r,o))}};return r}}}]);