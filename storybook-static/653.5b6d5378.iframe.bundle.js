(self.webpackChunkweb=self.webpackChunkweb||[]).push([[653],{"./src/screens/web-view/web-browser/index.tsx":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=o(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),n=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=m(r);if(t&&t.has(e))return t.get(e);var o={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=s?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(o,n,i):o[n]=e[n]}return o.default=e,t&&t.set(e,o),o}(t("react")),i=t("./src/components/index.ts"),l=o(t("./src/components/@/web-view/index.js")),d=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),u=t("./src/utils/index.ts"),a=t("./node_modules/react/jsx-runtime.js");function m(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:r})(e)}var j="\n    var meta = document.createElement('meta');\n    meta.name = \"viewport\";\n    meta.content = \"width=device-width, initial-scale=1\";\n    document.getElementsByTagName('head')[0].appendChild(meta);\n  ",p=!0;r.default=function(e){var r=e.route,t=(0,n.useState)(0),o=(0,s.default)(t,2),m=o[0],b=o[1],f=(0,n.useState)(p),w=(0,s.default)(f,2),h=w[0],_=w[1],x=r.params,v=x.url,y=x.title,g=x.desc,k=x.injectedViewport;return v?(0,a.jsxs)(i.Component,{id:"screen-web-browser",children:[(0,a.jsx)(i.Header,{title:y||"浏览器",hm:["web-browser","WebBrowser"],headerRight:function(){return(0,a.jsxs)(i.Flex,{children:[(0,a.jsx)(d.IconTouchable,{name:"md-refresh",color:c._.colorTitle,onPress:function(){return b(m+1)}}),(0,a.jsx)(d.IconTouchable,{style:c._.ml.xs,name:"md-open-in-new",color:c._.colorTitle,size:18,onPress:function(){(0,u.open)(v)}})]})}}),!!g&&h&&(0,a.jsxs)(i.Flex,{style:[c._.container.wind,c._.mb.sm],children:[(0,a.jsx)(i.Flex.Item,{children:(0,a.jsx)(i.Text,{size:12,lineHeight:13,bold:!0,children:g})}),(0,a.jsx)(d.IconTouchable,{style:c._.mr._sm,name:"md-close",size:18,color:c._.colorDesc,onPress:function(){_(!1),p=!1}})]}),(0,a.jsx)(l.default,{originWhitelist:["*"],source:{uri:v},sharedCookiesEnabled:!0,thirdPartyCookiesEnabled:!0,userAgent:c.userStore.userCookie.userAgent||void 0,injectedJavaScript:k?j:void 0},String(m))]}):null}}}]);