"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5935],{"./node_modules/@storybook/components/dist/esm/Color-f953d088.js":(q,e,o)=>{o.r(e),o.d(e,{ColorControl:()=>Ze,default:()=>Ze});o("./node_modules/core-js/modules/es.object.assign.js"),o("./node_modules/core-js/modules/es.object.keys.js"),o("./node_modules/core-js/modules/es.array.join.js"),o("./node_modules/core-js/modules/es.array.filter.js"),o("./node_modules/core-js/modules/es.object.to-string.js"),o("./node_modules/core-js/modules/es.number.constructor.js"),o("./node_modules/core-js/modules/es.regexp.exec.js"),o("./node_modules/core-js/modules/es.regexp.to-string.js"),o("./node_modules/core-js/modules/es.string.replace.js"),o("./node_modules/core-js/modules/es.array.iterator.js"),o("./node_modules/core-js/modules/es.map.js"),o("./node_modules/core-js/modules/es.string.iterator.js"),o("./node_modules/core-js/modules/web.dom-collections.iterator.js"),o("./node_modules/core-js/modules/es.string.match.js"),o("./node_modules/core-js/modules/es.array.map.js"),o("./node_modules/core-js/modules/es.string.split.js"),o("./node_modules/core-js/modules/web.dom-collections.for-each.js"),o("./node_modules/core-js/modules/es.array.slice.js"),o("./node_modules/core-js/modules/es.array.concat.js"),o("./node_modules/core-js/modules/es.object.values.js"),o("./node_modules/core-js/modules/es.string.starts-with.js"),o("./node_modules/core-js/modules/es.function.name.js"),o("./node_modules/core-js/modules/es.symbol.js"),o("./node_modules/core-js/modules/es.symbol.description.js"),o("./node_modules/core-js/modules/es.symbol.iterator.js"),o("./node_modules/core-js/modules/es.array.from.js");var C=o("./node_modules/@storybook/components/dist/esm/index-681e4b07.js"),S=o("./node_modules/react/index.js"),e=o("./node_modules/@storybook/theming/dist/esm/index.js");o("./node_modules/memoizerific/memoizerific.js"),o("./node_modules/@storybook/csf/dist/index.js"),o("./node_modules/qs/lib/index.js");function i(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],l=!0,u=!1;try{for(t=t.call(e);!(l=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{l||null==t.return||t.return()}finally{if(u)throw o}}return a}}(e,r)||function(e,r){var t;if(e)return"string"==typeof e?T(e,r):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,r):void 0}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t,n=arguments[r];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function f(e,r){if(null==e)return{};for(var t,n={},o=Object.keys(e),a=0;a<o.length;a++)0<=r.indexOf(t=o[a])||(n[t]=e[t]);return n}function h(e){var r=(0,S.useRef)(e),t=(0,S.useRef)(function(e){r.current&&r.current(e)});return r.current=e,t.current}function a(e,r,t){return void 0===r&&(r=0),(t=void 0===t?1:t)<e?t:e<r?r:e}function g(e){return"touches"in e}function m(e){return e&&e.ownerDocument.defaultView||self}function X(e,r,t){var n=e.getBoundingClientRect(),t=g(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return{left:a((t.pageX-(n.left+m(e).pageXOffset))/n.width),top:a((t.pageY-(n.top+m(e).pageYOffset))/n.height)}}function A(e){g(e)||e.preventDefault()}function l(e){var r=e.color,t=e.left,n=void 0===(n=e.top)?.5:n,e=v(["react-colorful__pointer",e.className]);return S.createElement("div",{className:e,style:{top:100*n+"%",left:100*t+"%"}},S.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:r}}))}function t(e){return(e="#"===e[0]?e.substr(1):e).length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}}function P(e){var r=e.s,t=e.l;return{h:e.h,s:0<(r*=(t<50?t:100-t)/100)?2*r/(t+r)*100:0,v:t+r,a:e.a}}function W(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return{h:b(e.h),s:b(0<o&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:b(o/2),a:b(n,2)}}function n(e){return"hsl("+(e=W(e)).h+", "+e.s+"%, "+e.l+"%)"}function u(e){return"hsla("+(e=W(e)).h+", "+e.s+"%, "+e.l+"%, "+e.a+")"}function $(e){var r=e.h,t=e.s,n=e.v,e=e.a,r=r/360*6,o=(t/=100,n/=100,Math.floor(r)),a=n*(1-t),l=n*(1-(r-o)*t);return{r:b(255*[n,l,a,a,r=n*(1-(1-r+o)*t),n][t=o%6]),g:b(255*[r,n,n,l,a,a][t]),b:b(255*[a,a,r,n,n,l][t]),a:b(e,2)}}function c(e){return(e=e.toString(16)).length<2?"0"+e:e}function D(e){var r=e.r,t=e.g,n=e.b,e=e.a,o=Math.max(r,t,n),a=o-Math.min(r,t,n);return{h:b(60*((n=a?o===r?(t-n)/a:o===t?2+(n-r)/a:4+(r-t)/a:0)<0?6+n:n)),s:b(o?a/o*100:0),v:b(o/255*100),a:e}}function G(e,r){if(e!==r)for(var t in e)if(e[t]!==r[t])return!1;return!0}function F(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")}var s=S.memo(function(e){var r=e.onMove,t=e.onKey,e=f(e,["onMove","onKey"]),l=(0,S.useRef)(null),u=h(r),c=h(t),s=(0,S.useRef)(null),i=(0,S.useRef)(!1),r=(0,S.useMemo)(function(){function n(e){A(e),(g(e)?0<e.touches.length:0<e.buttons)&&l.current?u(X(l.current,e,s.current)):a(!1)}function o(){return a(!1)}function a(e){var r=i.current,t=m(l.current),e=e?t.addEventListener:t.removeEventListener;e(r?"touchmove":"mousemove",n),e(r?"touchend":"mouseup",o)}return[function(e){var r,e=e.nativeEvent,t=l.current;t&&(A(e),!i.current||g(e))&&t&&(g(e)&&(i.current=!0,(r=e.changedTouches||[]).length)&&(s.current=r[0].identifier),t.focus(),u(X(t,e,s.current)),a(!0))},function(e){var r=e.which||e.keyCode;r<37||40<r||(e.preventDefault(),c({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))},a]},[c,u]),t=r[0],n=r[1],o=r[2];return(0,S.useEffect)(function(){return o},[o]),S.createElement("div",d({},e,{onTouchStart:t,onMouseDown:t,className:"react-colorful__interactive",ref:l,onKeyDown:n,tabIndex:0,role:"slider"}))}),v=function(e){return e.filter(Boolean).join(" ")},b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},K={grad:.9,turn:360,rad:360/(2*Math.PI)},V=S.memo(function(e){var r=e.hue,t=e.onChange,e=v(["react-colorful__hue",e.className]);return S.createElement("div",{className:e},S.createElement(s,{onMove:function(e){t({h:360*e.left})},onKey:function(e){t({h:a(r+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":b(r)},S.createElement(l,{className:"react-colorful__hue-pointer",left:r/360,color:n({h:r,s:100,v:100,a:1})})))}),U=S.memo(function(e){var r=e.hsva,t=e.onChange,e={backgroundColor:n({h:r.h,s:100,v:100,a:1})};return S.createElement("div",{className:"react-colorful__saturation",style:e},S.createElement(s,{onMove:function(e){t({s:100*e.left,v:100-100*e.top})},onKey:function(e){t({s:a(r.s+100*e.left,0,100),v:a(r.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(r.s)+"%, Brightness "+b(r.v)+"%"},S.createElement(l,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:n(r)})))});function Y(r,t,e){var n=h(e),e=(0,S.useState)(function(){return r.toHsva(t)}),o=e[0],a=e[1],l=(0,S.useRef)({color:t,hsva:o}),e=((0,S.useEffect)(function(){var e;r.equal(t,l.current.color)||(e=r.toHsva(t),l.current={hsva:e,color:t},a(e))},[t,r]),(0,S.useEffect)(function(){var e;G(o,l.current.hsva)||r.equal(e=r.fromHsva(o),l.current.color)||(l.current={hsva:o,color:e},n(e))},[o,r,n]),(0,S.useCallback)(function(r){a(function(e){return Object.assign({},e,r)})},[]));return[o,e]}for(var J="undefined"!=typeof window?S.useLayoutEffect:S.useEffect,Q=new Map,Z=function(n){J(function(){var e,r,t=n.current?n.current.ownerDocument:document;void 0===t||Q.has(t)||((e=t.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',Q.set(t,e),(r=o.nc)&&e.setAttribute("nonce",r),t.head.appendChild(e))},[])},ee=function(e){var r=e.className,t=e.colorModel,n=e.color,n=void 0===n?t.defaultColor:n,o=e.onChange,e=f(e,["className","colorModel","color","onChange"]),a=(0,S.useRef)(null),t=(Z(a),Y(t,n,o)),n=t[0],o=t[1],t=v(["react-colorful",r]);return S.createElement("div",d({},e,{ref:a,className:t}),S.createElement(U,{hsva:n,onChange:o}),S.createElement(V,{hue:n.h,onChange:o,className:"react-colorful__last-control"}))},re={defaultColor:"000",toHsva:function(e){return D(t(e))},fromHsva:function(e){return r=(e=$(e)).g,t=e.b,"#"+c(e.r)+c(r)+c(t);var r,t},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||G(t(e),t(r))}},te=function(e){var r=e.className,t=e.hsva,n=e.onChange,e={backgroundImage:"linear-gradient(90deg, "+u(Object.assign({},t,{a:0}))+", "+u(Object.assign({},t,{a:1}))+")"},r=v(["react-colorful__alpha",r]);return S.createElement("div",{className:r},S.createElement("div",{className:"react-colorful__alpha-gradient",style:e}),S.createElement(s,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:a(t.a+e.left)})},"aria-label":"Alpha","aria-valuetext":b(100*t.a)+"%"},S.createElement(l,{className:"react-colorful__alpha-pointer",left:t.a,color:u(t)})))},ne=function(e){var r=e.className,t=e.colorModel,n=e.color,n=void 0===n?t.defaultColor:n,o=e.onChange,e=f(e,["className","colorModel","color","onChange"]),a=(0,S.useRef)(null),t=(Z(a),Y(t,n,o)),n=t[0],o=t[1],t=v(["react-colorful",r]);return S.createElement("div",d({},e,{ref:a,className:t}),S.createElement(U,{hsva:n,onChange:o}),S.createElement(V,{hue:n.h,onChange:o}),S.createElement(te,{hsva:n,onChange:o,className:"react-colorful__last-control"}))},oe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var r,t,e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return e?P({h:(r=e[1],void 0===(t=e[2])&&(t="deg"),Number(r)*(K[t]||1)),s:Number(e[3]),l:Number(e[4]),a:void 0===e[5]?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:u,equal:F},ae={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return e?D({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:void 0===e[7]?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){e=$(e);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},equal:F},p={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},le={},r=0,ue=Object.keys(p);r<ue.length;r++){var ce=ue[r];le[p[ce]]=ce}for(var y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},w=y,x=0,se=Object.keys(y);x<se.length;x++){var k=se[x];if(!("channels"in y[k]))throw new Error("missing channels property: "+k);if(!("labels"in y[k]))throw new Error("missing channel labels property: "+k);if(y[k].labels.length!==y[k].channels)throw new Error("channel and label counts mismatch: "+k);var M=y[k],ie=M.channels,M=M.labels;delete y[k].channels,delete y[k].labels,Object.defineProperty(y[k],"channels",{value:ie}),Object.defineProperty(y[k],"labels",{value:M})}y.rgb.hsl=function(e){var r,t=e[0]/255,n=e[1]/255,e=e[2]/255,o=Math.min(t,n,e),a=Math.max(t,n,e),l=a-o,e=(a===o?r=0:t===a?r=(n-e)/l:n===a?r=2+(e-t)/l:e===a&&(r=4+(t-n)/l),(r=Math.min(60*r,360))<0&&(r+=360),(o+a)/2),t=a===o?0:e<=.5?l/(a+o):l/(2-a-o);return[r,100*t,100*e]},y.rgb.hsv=function(e){function r(e){return(s-e)/6/i+.5}var t,n,o,a,l,u=e[0]/255,c=e[1]/255,e=e[2]/255,s=Math.max(u,c,e),i=s-Math.min(u,c,e);return 0==i?l=a=0:(l=i/s,t=r(u),n=r(c),o=r(e),u===s?a=o-n:c===s?a=1/3+t-o:e===s&&(a=2/3+n-t),a<0?a+=1:1<a&&--a),[360*a,100*l,100*s]},y.rgb.hwb=function(e){var r=e[0],t=e[1],n=e[2];return[y.rgb.hsl(e)[0],100*(1/255*Math.min(r,Math.min(t,n))),100*(1-1/255*Math.max(r,Math.max(t,n)))]},y.rgb.cmyk=function(e){var r=e[0]/255,t=e[1]/255,e=e[2]/255,n=Math.min(1-r,1-t,1-e);return[100*((1-r-n)/(1-n)||0),100*((1-t-n)/(1-n)||0),100*((1-e-n)/(1-n)||0),100*n]},y.rgb.keyword=function(e){var r=le[e];if(r)return r;for(var t,n,o=1/0,a=0,l=Object.keys(p);a<l.length;a++){var u=l[a],c=(c=e,n=p[u],Math.pow(c[0]-n[0],2)+Math.pow(c[1]-n[1],2)+Math.pow(c[2]-n[2],2));c<o&&(o=c,t=u)}return t},y.keyword.rgb=function(e){return p[e]},y.rgb.xyz=function(e){var r=e[0]/255,t=e[1]/255,e=e[2]/255;return[100*(.4124*(r=.04045<r?Math.pow((.055+r)/1.055,2.4):r/12.92)+.3576*(t=.04045<t?Math.pow((.055+t)/1.055,2.4):t/12.92)+.1805*(e=.04045<e?Math.pow((.055+e)/1.055,2.4):e/12.92)),100*(.2126*r+.7152*t+.0722*e),100*(.0193*r+.1192*t+.9505*e)]},y.rgb.lab=function(e){var e=y.rgb.xyz(e),r=e[0],t=e[1],e=e[2];return t/=100,e/=108.883,r=.008856<(r/=95.047)?Math.pow(r,1/3):7.787*r+16/116,[116*(t=.008856<t?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(.008856<e?Math.pow(e,1/3):7.787*e+16/116))]},y.hsl.rgb=function(e){var r,t,n=e[0]/360,o=e[1]/100,e=e[2]/100;if(0==o)return[t=255*e,t,t];for(var a,l=2*e-(a=e<.5?e*(1+o):e+o-e*o),u=[0,0,0],c=0;c<3;c++)(r=n+1/3*-(c-1))<0&&r++,1<r&&r--,u[c]=255*(t=6*r<1?l+6*(a-l)*r:2*r<1?a:3*r<2?l+(a-l)*(2/3-r)*6:l);return u},y.hsl.hsv=function(e){var r=e[0],t=e[1]/100,e=e[2]/100,n=t,o=Math.max(e,.01),a=(n*=o<=1?o:2-o,((e*=2)+(t*=e<=1?e:2-e))/2);return[r,100*(0==e?2*n/(o+n):2*t/(e+t)),100*a]},y.hsv.rgb=function(e){var r=e[0]/60,t=e[1]/100,n=e[2]/100,e=Math.floor(r)%6,r=r-Math.floor(r),o=255*n*(1-t),a=255*n*(1-t*r),l=255*n*(1-t*(1-r));switch(n*=255,e){case 0:return[n,l,o];case 1:return[a,n,o];case 2:return[o,n,l];case 3:return[o,a,n];case 4:return[l,o,n];case 5:return[n,o,a]}},y.hsv.hsl=function(e){var r=e[0],t=e[1]/100,e=e[2]/100,n=Math.max(e,.01),e=(2-t)*e,o=(2-t)*n,t=t*n;return[r,100*((t/=o<=1?o:2-o)||0),100*(e/=2)]},y.hwb.rgb=function(e){var r,t,n,o=e[0]/360,a=e[1]/100,e=e[2]/100,l=a+e,l=(1<l&&(a/=l,e/=l),Math.floor(6*o)),u=1-e,e=6*o-l,c=a+(e=0!=(1&l)?1-e:e)*(u-a);switch(l){default:case 6:case 0:r=u,t=c,n=a;break;case 1:r=c,t=u,n=a;break;case 2:r=a,t=u,n=c;break;case 3:r=a,t=c,n=u;break;case 4:r=c,t=a,n=u;break;case 5:r=u,t=a,n=c}return[255*r,255*t,255*n]},y.cmyk.rgb=function(e){var r=e[0]/100,t=e[1]/100,n=e[2]/100,e=e[3]/100;return[255*(1-Math.min(1,r*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e)),255*(1-Math.min(1,n*(1-e)+e))]},y.xyz.rgb=function(e){var r=e[0]/100,t=e[1]/100,e=e[2]/100,n=3.2406*r+-1.5372*t+-.4986*e,o=-.9689*r+1.8758*t+.0415*e,r=.0557*r+-.204*t+1.057*e;return n=.0031308<n?1.055*Math.pow(n,1/2.4)-.055:12.92*n,o=.0031308<o?1.055*Math.pow(o,1/2.4)-.055:12.92*o,r=.0031308<r?1.055*Math.pow(r,1/2.4)-.055:12.92*r,[255*Math.min(Math.max(0,n),1),255*Math.min(Math.max(0,o),1),255*Math.min(Math.max(0,r),1)]},y.xyz.lab=function(e){var r=e[0],t=e[1],e=e[2];return t/=100,e/=108.883,r=.008856<(r/=95.047)?Math.pow(r,1/3):7.787*r+16/116,[116*(t=.008856<t?Math.pow(t,1/3):7.787*t+16/116)-16,500*(r-t),200*(t-(.008856<e?Math.pow(e,1/3):7.787*e+16/116))]},y.lab.xyz=function(e){var r=(e[0]+16)/116,t=e[1]/500+r,e=r-e[2]/200,n=Math.pow(r,3),o=Math.pow(t,3),a=Math.pow(e,3);return r=.008856<n?n:(r-16/116)/7.787,t=.008856<o?o:(t-16/116)/7.787,e=.008856<a?a:(e-16/116)/7.787,[t*=95.047,r*=100,e*=108.883]},y.lab.lch=function(e){var r=e[0],t=e[1],e=e[2],n=360*Math.atan2(e,t)/2/Math.PI;return n<0&&(n+=360),[r,Math.sqrt(t*t+e*e),n]},y.lch.lab=function(e){var r=e[0],t=e[1],e=e[2]/360*2*Math.PI;return[r,t*Math.cos(e),t*Math.sin(e)]},y.rgb.ansi16=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,t=O(e,3),n=t[0],o=t[1],t=t[2],e=null===r?y.rgb.hsv(e)[2]:r;return 0===(e=Math.round(e/50))?30:(r=30+(Math.round(t/255)<<2|Math.round(o/255)<<1|Math.round(n/255)),2===e&&(r+=60),r)},y.hsv.ansi16=function(e){return y.rgb.ansi16(y.hsv.rgb(e),e[2])},y.rgb.ansi256=function(e){var r=e[0],t=e[1],e=e[2];return r===t&&t===e?r<8?16:248<r?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)},y.ansi16.rgb=function(e){var r=e%10;return 0===r||7===r?(50<e&&(r+=3.5),[r=r/10.5*255,r,r]):[(1&r)*(e=.5*(1+~~(50<e)))*255,(r>>1&1)*e*255,(r>>2&1)*e*255]},y.ansi256.rgb=function(e){var r;return 232<=e?[r=10*(e-232)+8,r,r]:(e-=16,[Math.floor(e/36)/5*255,Math.floor((r=e%36)/6)/5*255,r%6/5*255])},y.rgb.hex=function(e){e=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(e.length)+e},y.hex.rgb=function(e){var r,e=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);return e?(r=e[0],3===e[0].length&&(r=r.split("").map(function(e){return e+e}).join("")),[(e=parseInt(r,16))>>16&255,e>>8&255,255&e]):[0,0,0]},y.rgb.hcg=function(e){var r=e[0]/255,t=e[1]/255,e=e[2]/255,n=Math.max(Math.max(r,t),e),o=Math.min(Math.min(r,t),e),a=n-o,o=a<1?o/(1-a):0,n=a<=0?0:n===r?(t-e)/a%6:n===t?2+(e-r)/a:4+(r-t)/a;return[360*(n=n/6%1),100*a,100*o]},y.hsl.hcg=function(e){var r=e[1]/100,t=e[2]/100,r=t<.5?2*r*t:2*r*(1-t),t=r<1?(t-.5*r)/(1-r):0;return[e[0],100*r,100*t]},y.hsv.hcg=function(e){var r=e[1]/100,t=e[2]/100,r=r*t,t=r<1?(t-r)/(1-r):0;return[e[0],100*r,100*t]},y.hcg.rgb=function(e){var r=e[0]/360,t=e[1]/100,e=e[2]/100;if(0==t)return[255*e,255*e,255*e];var n=[0,0,0],r=r%1*6,o=r%1,a=1-o;switch(Math.floor(r)){case 0:n[0]=1,n[1]=o,n[2]=0;break;case 1:n[0]=a,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=o;break;case 3:n[0]=0,n[1]=a,n[2]=1;break;case 4:n[0]=o,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=a}return[255*(t*n[0]+(r=(1-t)*e)),255*(t*n[1]+r),255*(t*n[2]+r)]},y.hcg.hsv=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r),r=0<t?r/t:0;return[e[0],100*r,100*t]},y.hcg.hsl=function(e){var r=e[1]/100,t=e[2]/100*(1-r)+.5*r,n=0;return 0<t&&t<.5?n=r/(2*t):.5<=t&&t<1&&(n=r/(2*(1-t))),[e[0],100*n,100*t]},y.hcg.hwb=function(e){var r=e[1]/100,t=r+e[2]/100*(1-r);return[e[0],100*(t-r),100*(1-t)]},y.hwb.hcg=function(e){var r=e[1]/100,t=1-e[2]/100,r=t-r,t=r<1?(t-r)/(1-r):0;return[e[0],100*r,100*t]},y.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},y.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},y.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},y.gray.hsl=function(e){return[0,0,e[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(e){return[0,100,e[0]]},y.gray.cmyk=function(e){return[0,0,0,e[0]]},y.gray.lab=function(e){return[e[0],0,0]},y.gray.hex=function(e){e=255&Math.round(e[0]/100*255),e=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(e.length)+e},y.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};var j=w;function de(e){var r=function(){for(var e={},r=Object.keys(j),t=r.length,n=0;n<t;n++)e[r[n]]={distance:-1,parent:null};return e}(),t=[e];for(r[e].distance=0;t.length;)for(var n=t.pop(),o=Object.keys(j[n]),a=o.length,l=0;l<a;l++){var u=o[l],c=r[u];-1===c.distance&&(c.distance=r[n].distance+1,c.parent=n,t.unshift(u))}return r}function fe(e,r){for(var t=[r[e].parent,e],n=j[r[e].parent][e],o=r[e].parent;r[o].parent;)t.unshift(r[o].parent),n=function(r,t){return function(e){return t(r(e))}}(j[r[o].parent][o],n),o=r[o].parent;return n.conversion=t,n}var _=w,he=function(e){for(var r=de(e),t={},n=Object.keys(r),o=n.length,a=0;a<o;a++){var l=n[a];null!==r[l].parent&&(t[l]=fe(l,r))}return t},E={};function ge(o){function e(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=r[0];return null==n?n:(1<n.length&&(r=n),o(r))}return"conversion"in o&&(e.conversion=o.conversion),e}function me(u){function e(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=r[0];if(null==n)return n;1<n.length&&(r=n);var o=u(r);if("object"===B(o))for(var a=o.length,l=0;l<a;l++)o[l]=Math.round(o[l]);return o}return"conversion"in u&&(e.conversion=u.conversion),e}Object.keys(_).forEach(function(t){E[t]={},Object.defineProperty(E[t],"channels",{value:_[t].channels}),Object.defineProperty(E[t],"labels",{value:_[t].labels});var n=he(t);Object.keys(n).forEach(function(e){var r=n[e];E[t][e]=me(r),E[t][e].raw=ge(r)})});var N=E,ve=C.u,be=/\s/;var pe=function(e){for(var r=e.length;r--&&be.test(e.charAt(r)););return r},ye=/^\s+/;var we=function(e){return e&&e.slice(0,pe(e)+1).replace(ye,"")},xe=C.x,ke=C.y,Me=/^[-+]0x[0-9a-f]+$/i,je=/^0b[01]+$/i,_e=/^0o[0-7]+$/i,Ee=parseInt;var Ce=C.x,Se=function(){return ve.Date.now()},Oe=function(e){if("number"==typeof e)return e;if(ke(e))return NaN;if(xe(e)&&(r="function"==typeof e.valueOf?e.valueOf():e,e=xe(r)?r+"":r),"string"!=typeof e)return 0===e?e:+e;e=we(e);var r=je.test(e);return r||_e.test(e)?Ee(e.slice(2),r?2:8):Me.test(e)?NaN:+e},Ne=Math.max,ze=Math.min;var He=function(n,t,e){var o,a,l,u,c,s,i=0,d=!1,f=!1,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(e){var r=o,t=a;return o=a=void 0,i=e,u=n.apply(t,r)}function g(e){var r=e-s;return void 0===s||t<=r||r<0||f&&l<=e-i}function m(){var e,r=Se();if(g(r))return v(r);c=setTimeout(m,(e=t-((r=r)-s),f?ze(e,l-(r-i)):e))}function v(e){return c=void 0,r&&o?h(e):(o=a=void 0,u)}function b(){var e=Se(),r=g(e);if(o=arguments,a=this,s=e,r){if(void 0===c)return i=e=s,c=setTimeout(m,t),d?h(e):u;if(f)return clearTimeout(c),c=setTimeout(m,t),h(s)}return void 0===c&&(c=setTimeout(m,t)),u}return t=Oe(t)||0,Ce(e)&&(d=!!e.leading,f="maxWait"in e,l=f?Ne(Oe(e.maxWait)||0,t):l,r="trailing"in e?!!e.trailing:r),b.cancel=function(){void 0!==c&&clearTimeout(c),o=s=a=c=void(i=0)},b.flush=function(){return void 0===c?u:v(Se())},b},Ie=C.x;function Re(e){var r=e.value,t=e.active,n=e.onClick,o=e.style,e=(0,C.d)(e,["value","active","onClick","style"]),r="linear-gradient(".concat(r,", ").concat(r,"), ").concat($e,", linear-gradient(#fff, #fff)");return S.createElement(We,Object.assign({},e,{active:t,onClick:n},{style:Object.assign(Object.assign({},o),{backgroundImage:r})}))}function Le(e){return(e=null==e?void 0:e.match(Fe))?[(e=O(e,5))[1],e[2],e[3],void 0===(e=e[4])?1:e].map(Number):[0,0,0,1]}var z,qe=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ie(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),He(e,r,{leading:n,maxWait:r,trailing:o})},Be=e.zo.div({position:"relative",maxWidth:250}),Te=(0,e.zo)(C.W)({position:"absolute",zIndex:1,top:4,left:4}),Xe=e.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ae=(0,e.zo)(C.T)(function(e){return{fontFamily:e.theme.typography.fonts.base}}),Pe=e.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),We=e.zo.div(function(e){var r=e.theme;return{width:16,height:16,boxShadow:e.active?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),$e='url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',De=(0,e.zo)(C.F.Input)(function(e){return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.theme.typography.fonts.base}}),Ge=(0,e.zo)(C.I)(function(e){return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.theme.input.color}}),H=((w=z=z||{}).RGB="rgb",w.HSL="hsl",w.HEX="hex",Object.values(z)),Fe=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ke=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ve=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,Ue=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Ye=/^\s*#?([0-9a-f]{3})\s*$/i,Je=(i(e={},z.HEX,function(e){return S.createElement(ee,d({},e,{colorModel:re}))}),i(e,z.RGB,function(e){return S.createElement(ne,d({},e,{colorModel:ae}))}),i(e,z.HSL,function(e){return S.createElement(ne,d({},e,{colorModel:oe}))}),e),I=(i(w={},z.HEX,"transparent"),i(w,z.RGB,"rgba(0, 0, 0, 0)"),i(w,z.HSL,"hsla(0, 0%, 0%, 0)"),w),R=function(e){if(e){var r,t,n,o,a=!0;if(Ke.test(e))return s=(n=O(Le(e),4))[0],o=n[1],l=n[2],n=n[3],c=(t=O(N.rgb.hsl([s,o,l])||[0,0,0],3))[0],r=t[1],t=t[2],i(u={valid:a,value:e,keyword:N.rgb.keyword([s,o,l]),colorSpace:z.RGB},z.RGB,e),i(u,z.HSL,"hsla(".concat(c,", ").concat(r,"%, ").concat(t,"%, ").concat(n,")")),i(u,z.HEX,"#".concat(N.rgb.hex([s,o,l]).toLowerCase())),u;if(Ve.test(e))return r=(c=O(Le(e),4))[0],t=c[1],n=c[2],s=c[3],l=(o=O(N.hsl.rgb([r,t,n])||[0,0,0],3))[0],u=o[1],c=o[2],i(o={valid:a,value:e,keyword:N.hsl.keyword([r,t,n]),colorSpace:z.HSL},z.RGB,"rgba(".concat(l,", ").concat(u,", ").concat(c,", ").concat(s,")")),i(o,z.HSL,e),i(o,z.HEX,"#".concat(N.hsl.hex([r,t,n]).toLowerCase())),o;var l=e.replace("#",""),u=N.keyword.rgb(l)||N.hex.rgb(l),c=N.rgb.hsl(u),s=e;if(/[^#a-f0-9]/i.test(e)?s=l:Ue.test(e)&&(s="#".concat(l)),s.startsWith("#"))a=Ue.test(s);else try{N.keyword.hex(s)}catch(e){a=!1}return i(r={valid:a,value:s,keyword:N.rgb.keyword(u),colorSpace:z.HEX},z.RGB,"rgba(".concat(u[0],", ").concat(u[1],", ").concat(u[2],", 1)")),i(r,z.HSL,"hsla(".concat(c[0],", ").concat(c[1],"%, ").concat(c[2],"%, 1)")),i(r,z.HEX,s),r}},Qe=function(e,r,t){if(!e||null==r||!r.valid)return I[t];if(t!==z.HEX)return(null==r?void 0:r[t])||I[t];if(!r.hex.startsWith("#"))try{return"#".concat(N.keyword.hex(r.hex))}catch(e){return I.hex}var n,e=r.hex.match(Ye);return e?(e=(t=O(e[1].split(""),3))[0],n=t[1],t=t[2],"#".concat(e).concat(e).concat(n).concat(n).concat(t).concat(t)):(Ue.test(r.hex)?r:I).hex},L=function(e){return e.replace(/\s*/,"").toLowerCase()},Ze=function(e){var r,t,n,o,a,l,u,c,s,i,d,f,h,g,m=e.name,v=e.value,b=e.onChange,p=e.onFocus,y=e.onBlur,w=e.presetColors,e=e.startOpen,v=(r=v,t=qe(b,200),v=O((0,S.useState)(r||""),2),n=v[0],o=v[1],v=O((0,S.useState)(function(){return R(n)}),2),a=v[0],l=v[1],v=O((0,S.useState)((null==a?void 0:a.colorSpace)||z.HEX),2),u=v[0],c=v[1],(0,S.useEffect)(function(){void 0===r&&(o(""),l(void 0),c(z.HEX))},[r]),v=(0,S.useMemo)(function(){return Qe(n,a,u).toLowerCase()},[n,a,u]),b=(0,S.useCallback)(function(e){var r=R(e);o((null==r?void 0:r.value)||e||""),r&&(l(r),c(r.colorSpace),t(r.value))},[t]),x=(0,S.useCallback)(function(){var e=H.indexOf(u)+1,e=(e>=H.length&&(e=0),c(H[e]),(null==a?void 0:a[H[e]])||"");o(e),t(e)},[a,u,t]),{value:n,realValue:v,updateValue:b,color:a,colorSpace:u,cycleColorSpace:x}),b=v.value,x=v.realValue,k=v.updateValue,M=v.color,j=v.colorSpace,v=v.cycleColorSpace,w=(s=w,i=M,d=j,w=O((0,S.useState)(null!=i&&i.valid?[i]:[]),2),f=w[0],h=w[1],(0,S.useEffect)(function(){void 0===i&&h([])},[i]),g=(0,S.useMemo)(function(){return(s||[]).map(function(e){return"string"==typeof e?R(e):e.title?Object.assign(Object.assign({},R(e.color)),{keyword:e.title}):R(e.color)}).concat(f).filter(Boolean).slice(-27)},[s,f]),w=(0,S.useCallback)(function(r){null==r||!r.valid||g.some(function(e){return L(e[d])===L(r[d])})||h(function(e){return e.concat(r)})},[d,g]),{presets:g,addPreset:w}),_=w.presets,E=w.addPreset;return S.createElement(Be,null,S.createElement(Te,{trigger:"click",startOpen:e,closeOnClick:!0,onVisibilityChange:function(){return E(M)},tooltip:S.createElement(Xe,null,S.createElement(Je[j],Object.assign({color:"transparent"===x?"#000000":x},{onChange:k,onFocus:p,onBlur:y})),0<_.length&&S.createElement(Pe,null,_.map(function(e,r){return S.createElement(C.W,{key:"".concat(e.value,"-").concat(r),hasChrome:!1,tooltip:S.createElement(Ae,{note:e.keyword||e.value})},S.createElement(Re,{value:e[j],active:M&&L(e[j])===L(M[j]),onClick:function(){return k(e.value)}}))})))},S.createElement(Re,{value:x,style:{margin:4}})),S.createElement(De,{id:(0,C.z)(m),value:b,onChange:function(e){return k(e.target.value)},onFocus:function(e){return e.target.select()},placeholder:"Choose color..."}),b?S.createElement(Ge,{icon:"markup",onClick:v}):null)}}}]);