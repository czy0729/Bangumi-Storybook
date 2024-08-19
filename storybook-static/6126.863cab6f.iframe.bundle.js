(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6126],{"./src/screens/web-view/index.tsx":(e,t,n)=>{var r=n("./node_modules/@babel/runtime/regenerator/index.js");n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.reflect.construct.js"),n("./node_modules/core-js/modules/es.array.concat.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),d=o(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=o(n("react")),b=o(n("./node_modules/react-native-web/dist/exports/View/index.js")),m=n("./src/components/index.ts"),v=n("./src/screens/_/index.ts"),w=n("./src/stores/index.ts"),h=n("./src/utils/index.ts"),g=n("./src/utils/decorators/index.ts"),_=n("./src/utils/ui/index.ts"),x=n("./src/utils/fetch/index.ts"),y=n("./src/constants/index.ts"),j=n("./node_modules/react/jsx-runtime.js");function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}var C=function(e){(0,u.default)(n,e);var t=k(n);function n(){var e,o;(0,a.default)(this,n);for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];return e=t.call.apply(t,[this].concat(u)),(0,f.default)((0,d.default)(e),"state",{loading:!0}),(0,f.default)((0,d.default)(e),"loaded",!1),(0,f.default)((0,d.default)(e),"redirectCount",0),(0,f.default)((0,d.default)(e),"onError",(function(){var t=e.props.navigation;(0,_.info)("网络似乎出了点问题"),t.goBack()})),(0,f.default)((0,d.default)(e),"onMessage",(o=(0,s.default)(r.mark((function t(n){var o,s,a,i,d;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.props.navigation,s=o.getParam("uri"),t.prev=2,a=JSON.parse(n.nativeEvent.data),i=a.type,d=a.data,t.t0=i,t.next="onload"===t.t0?7:9;break;case 7:return d&&(d.href!==s?(e.redirectCount+=1,e.redirectCount>8&&e.onError()):(e.loaded=!0,e.setState({loading:!1}))),t.abrupt("break",10);case 9:return t.abrupt("break",10);case 10:t.next=15;break;case 12:t.prev=12,t.t1=t.catch(2),e.onError();case 15:case"end":return t.stop()}}),t,null,[[2,12]])}))),function(e){return o.apply(this,arguments)})),e}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.navigation,t=e.getParam("uri"),n={popover:{data:["浏览器查看"],onSelect:function(e){if("浏览器查看"===e)(0,h.open)(t)}}};e.setParams(n),(0,x.hm)(t,"WebView")}},{key:"render",value:function(){var e=w.userStore.userCookie.cookie,t=this.props.navigation.getParam("uri"),n=this.state.loading,r="(function(){\n      document.cookie = '"+e+"';\n\n      var __isBridgeOk = false\n      function waitForBridge() {\n        if (!__isBridgeOk && window"+(y.SDK>=36?".ReactNativeWebView":"")+".postMessage) {\n          setTimeout(waitForBridge, 200);\n        } else {\n          __isBridgeOk = true\n          window"+(y.SDK>=36?".ReactNativeWebView":"")+".postMessage(JSON.stringify({\n            type: 'onload',\n            data: {\n              href: document.location.href,\n            }\n          }));\n\n          setTimeout(() => {\n            const loaded = "+this.loaded+";\n            if (!loaded && window.location.href !== '"+t+"') {\n              if ("+this.redirectCount+" < 8) {\n                window.location = '"+t+"';\n              }\n            }\n          }, 0);\n        }\n      }\n      setTimeout(() => {\n        waitForBridge();\n      }, 0);\n    }());";return(0,j.jsxs)(b.default,{style:w._.container.flex,children:[n&&(0,j.jsx)(m.Loading,{style:{position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1,backgroundColor:w._.colorBg}}),(0,j.jsx)(m.WebView,{uri:t,thirdPartyCookiesEnabled:!0,injectedJavaScript:r,onError:this.onError,onMessage:this.onMessage})]})}}]),n}(p.default.Component);(0,f.default)(C,"navigationOptions",(function(e){var t=e.navigation;return{title:t.getParam("title")||y.HOST_NAME,headerLeft:(0,j.jsx)(v.IconBack,{navigation:t,color:w._.colorTitle})}}));t.default=(0,g.withHeader)({screen:"浏览器"})((0,g.ob)(C));try{webview.displayName="webview",webview.__docgenInfo={description:"",displayName:"webview",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/web-view/index.tsx#webview"]={docgenInfo:webview.__docgenInfo,name:"webview",path:"src/screens/web-view/index.tsx#webview"})}catch(e){}}}]);