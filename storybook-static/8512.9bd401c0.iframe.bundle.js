(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8512],{"./src/screens/web-view/versions/component/web/index.web.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),o=s("./src/components/index.ts"),i=s("./src/screens/_/index.ts"),l=s("./src/stores/index.ts"),d=s("./src/utils/hooks/index.ts"),u=s("./src/constants/index.ts"),c=s("./node_modules/react/jsx-runtime.js");t.default=function(e){var t=e.uri,s=(0,d.useBoolean)(!1),r=s.state,a=s.setTrue;return(0,c.jsxs)(i.SafeAreaView,{style:[l._.container.flex,{backgroundColor:l._.colorPlain}],children:[!r&&(0,c.jsx)(o.Loading,{style:l._.mt.lg}),(0,c.jsx)(n.default,{style:{flex:1,backgroundColor:l._.colorPlain,opacity:r?1:0},onLayout:function(){a()},children:(0,c.jsx)("iframe",{style:{height:"100%",border:"none"},src:(0,u.HTML_SINGLE_DOC)(t)})})]})}},"./src/screens/web-view/versions/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.TABS=t.STATE=t.NAMESPACE=t.COMPONENT=void 0;var r=t.COMPONENT="Versions",n=(t.NAMESPACE="Screen"+r,t.TABS=[{title:"8.13.0 - 24/09/02",key:"bmvgltogockmc8st"},{title:"8.12.0 - 24/07/20",key:"fci9cnfxybstmgpi"},{title:"8.11.0 - 24/06/23",key:"vdqgmi1er76pcgf3"},{title:"8.10.0 - 24/05/21",key:"ok2l6eg8i5osetfa"},{title:"8.9.0 - 24/05/01",key:"nmmg5vgl531da3lv"},{title:"8.8.0 - 24/04/14",key:"epnu06qgkt1ibg1i"},{title:"8.7.0 - 24/03/30",key:"iv2262dy8nv9lqxa"},{title:"8.6.0 - 24/03/13",key:"rxxbx8530fxq0e04"},{title:"8.5.0 - 24/02/09",key:"wvdw1qp60gwalxoe"},{title:"8.4.0 - 24/01/08",key:"nfw28ddsl6bvga0y"},{title:"8.3.0 - 23/11/05",key:"lfqgis2fat1tyrnp"},{title:"8.2.0 - 23/10/02",key:"itgg9g5vv4bvlf9l"},{title:"8.1.0 - 23/08/27",key:"fcy8syh34t76t0i4"},{title:"8.0.0 - 23/08/13",key:"io0nkkukoaxztf45"},{title:"7.16.0 - 23/07/04",key:"ric9srgg6sx9wakm"},{title:"7.15.0 - 23/06/09",key:"gaqpf9ugnl17gt38"},{title:"7.14.0 - 23/05/19",key:"sxqp62tybfww8ehw"},{title:"7.13.0 - 23/04/29",key:"nt61pb04opftxany"},{title:"7.12.0 - 23/04/20",key:"ypnsacpkn4kukqtg"},{title:"7.11.0 - 23/04/02",key:"rgqtvd27o1o7x8lz"},{title:"7.10.0 - 23/03/17",key:"ilbk1t5pv060eqvp"},{title:"7.9.0 - 23/03/03",key:"ia218hdgptzlfnrt"},{title:"7.8.0 - 23/02/15",key:"ww1hgenu9g6kb1gs"},{title:"7.7.0 - 23/02/06",key:"uymn10kytroups5m"},{title:"7.6.0 - 23/01/23",key:"csleloiptpy496h8"},{title:"7.5.0 - 23/01/07",key:"gldi9rhwbnn163pk"},{title:"7.4.0 - 22/11/28",key:"ndirq4"},{title:"7.3.0 - 22/11/16",key:"bhylmxwt0gaulnlh"},{title:"7.2.0 - 22/11/04",key:"hgwtgn"},{title:"7.1.0 - 22/09/25",key:"hog74y"},{title:"7.0.0 - 22/09/08",key:"tz5310"}]);t.STATE={page:0,uri:n[0].key,_loaded:!1}},"./src/screens/web-view/versions/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/web-view/versions/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"Header")},"./src/screens/web-view/versions/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=s("./src/components/index.ts"),o=s("./src/screens/_/index.ts"),i=s("./src/stores/index.ts"),l=s("./src/utils/index.ts"),d=s("./src/utils/decorators/index.ts"),u=s("./src/constants/index.ts"),c=s("./src/screens/web-view/versions/ds.ts"),a=s("./src/screens/web-view/versions/header/ds.ts"),f=s("./node_modules/react/jsx-runtime.js");t.default=(0,d.obc)((function(e,t){var s=t.$,r=s.state.uri;return(0,f.jsx)(n.Header,{title:"更新内容",hm:["versions","Versions"],headerRight:function(){return(0,f.jsxs)(n.Flex,{children:[(0,f.jsx)(n.Header.Popover,{name:"md-menu",data:c.TABS.map((function(e){return e.title})),onSelect:s.onSelect}),(0,f.jsx)(o.IconTouchable,{style:i._.ml.xs,name:"md-open-in-new",color:i._.colorTitle,size:18,onPress:function(){(0,l.open)((0,u.HTML_SINGLE_DOC)(r))}})]})}})}),a.COMPONENT)},"./src/screens/web-view/versions/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=s("./src/components/index.ts"),o=s("./src/utils/decorators/index.ts"),i=s("./src/utils/hooks/index.ts"),l=r(s("./src/screens/web-view/versions/component/web/index.web.tsx")),d=r(s("./src/screens/web-view/versions/header/index.tsx")),u=r(s("./src/screens/web-view/versions/store.ts")),c=s("./node_modules/react/jsx-runtime.js");t.default=(0,o.ic)(u.default,(function(e,t){var s=t.$;return(0,i.useRunAfter)((function(){s.init()})),(0,i.useObserver)((function(){return(0,c.jsxs)(n.Component,{id:"screen-versions",children:[(0,c.jsx)(d.default,{}),(0,c.jsx)(n.Page,{children:!!s.state._loaded&&(0,c.jsx)(l.default,{uri:s.state.uri})})]})}))}))},"./src/screens/web-view/versions/store.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.array.find.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),o=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./node_modules/mobx/dist/mobx.esm.js"),f=r(s("./src/utils/store/index.ts")),m=s("./src/screens/web-view/versions/ds.ts");function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;s=Reflect.construct(r,arguments,n)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,l.default)(s,e);var t=p(s);function s(){var e;(0,o.default)(this,s);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return e=t.call.apply(t,[this].concat(n)),(0,c.default)((0,i.default)(e),"state",(0,a.observable)(m.STATE)),(0,c.default)((0,i.default)(e),"init",(function(){e.setState({_loaded:!0})})),(0,c.default)((0,i.default)(e),"onChange",(function(t){t!==e.state.page&&(e.setState({page:t}),e.setStorage(m.NAMESPACE))})),(0,c.default)((0,i.default)(e),"onSelect",(function(t){var s=m.TABS.find((function(e){return e.title===t}));s&&s.key!==e.state.uri&&e.setState({uri:s.key})})),e}return(0,n.default)(s)}(f.default)}}]);