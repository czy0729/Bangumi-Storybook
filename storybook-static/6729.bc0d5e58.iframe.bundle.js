(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6729],{"./src/screens/home/voices/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/home/voices/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Component")},"./src/screens/home/voices/component/item/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/home/voices/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Item"),t.EVENT={id:"角色.跳转"}},"./src/screens/home/voices/component/item/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("react"));var r=s("./src/screens/_/index.ts"),n=s("./src/stores/index.ts"),c=s("./src/utils/decorators/index.ts"),u=s("./src/screens/home/voices/component/item/ds.ts"),l=s("./node_modules/react/jsx-runtime.js");t.default=(0,c.obc)((function(e,t){var s=e.item,o=e.index,c=t.navigation;return(0,l.jsx)(r.ItemVoice,Object.assign({style:n._.container.item,navigation:c,event:u.EVENT,index:o},s))}),u.COMPONENT)},"./src/screens/home/voices/component/list/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/home/voices/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"List")},"./src/screens/home/voices/component/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("react"));var r=s("./src/components/index.ts"),n=s("./src/screens/_/index.ts"),c=s("./src/stores/index.ts"),u=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),d=s("./src/screens/home/voices/component/list/utils.tsx"),i=s("./src/screens/home/voices/component/list/ds.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var s=t.$;return s.monoVoices._loaded?(0,a.jsx)(n.PaginationList2,{contentContainerStyle:c._.container.bottom,keyExtractor:u.keyExtractor,data:s.monoVoices.list,limit:5,scrollToTop:!0,renderItem:d.renderItem,scrollEventThrottle:16,onScroll:s.onScroll,onHeaderRefresh:s.onHeaderRefresh}):(0,a.jsx)(r.Loading,{})}),i.COMPONENT)},"./src/screens/home/voices/component/list/utils.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.renderItem=function(e){var t=e.item,s=e.index;return(0,n.jsx)(r.default,{item:t,index:s})};o(s("react"));var r=o(s("./src/screens/home/voices/component/item/index.tsx")),n=s("./node_modules/react/jsx-runtime.js")},"./src/screens/home/voices/component/tool-bar/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/home/voices/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"ToolBar")},"./src/screens/home/voices/component/tool-bar/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.find.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("react"));var r=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),c=s("./src/screens/home/voices/component/tool-bar/ds.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.obc)((function(e,t){var s=t.$,o=s.state.position,n=s.monoVoices.filters,c=void 0===n?[]:n;return(0,u.jsxs)(r.ToolBar,{children:[c.map((function(e){var t=e.data.map((function(e){return e.title})),n=e.data.find((function(e){return e.value===o}))||{title:"全部"};return(0,u.jsx)(r.ToolBar.Popover,{data:t,text:"全部"===n.title?e.title:n.title||e.title,type:"全部"!==n.title?"desc":"sub",onSelect:function(t){return s.onFilterSelect(t,e.data)}},e.title)})),(0,u.jsx)(r.Heatmap,{id:"角色.职位选择"})]})}),c.COMPONENT)},"./src/screens/home/voices/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;t.COMPONENT="Voices"},"./src/screens/home/voices/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/home/voices/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Header")},"./src/screens/home/voices/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.function.name.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("react"));var r=s("./src/components/index.ts"),n=s("./src/utils/index.ts"),c=s("./src/utils/decorators/index.ts"),u=s("./src/utils/fetch/index.ts"),l=s("./src/screens/home/voices/header/ds.ts"),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,c.obc)((function(e,t){var s,o=t.$;return(0,d.jsx)(r.Header,{title:null!=(s=o.params)&&s.name?o.params.name+"的角色":"角色",alias:"角色",hm:[o.url,"Voices"],headerRight:function(){return(0,d.jsx)(r.Header.Popover,{data:["浏览器查看"],onSelect:function(e){"浏览器查看"===e&&((0,u.t)("角色.右上角菜单",{key:e}),(0,n.open)(o.url))},children:(0,d.jsx)(r.Heatmap,{id:"角色.右上角菜单"})})}})}),l.COMPONENT)},"./src/screens/home/voices/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("react"));var r=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),c=s("./src/utils/hooks/index.ts"),u=o(s("./src/screens/home/voices/component/list/index.tsx")),l=o(s("./src/screens/home/voices/component/tool-bar/index.tsx")),d=o(s("./src/screens/home/voices/header/index.tsx")),i=o(s("./src/screens/home/voices/store/index.ts")),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ic)(i.default,(function(e,t){var s=t.$;return(0,c.useRunAfter)((function(){s.init()})),(0,c.useObserver)((function(){return(0,a.jsxs)(r.Component,{id:"screen-voices",children:[(0,a.jsx)(d.default,{}),(0,a.jsxs)(r.Page,{children:[(0,a.jsx)(l.default,{}),(0,a.jsx)(u.default,{})]})]})}))}))},"./src/screens/home/voices/store/action.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.array.find.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.function.bind.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),a=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=s("./src/utils/index.ts"),p=s("./src/utils/fetch/index.ts"),j=r(s("./src/screens/home/voices/store/fetch.ts"));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,a.default)(e);if(t){var r=(0,a.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}t.default=function(e){(0,d.default)(s,e);var t=h(s);function s(){var e,r;(0,u.default)(this,s);for(var c=arguments.length,d=new Array(c),i=0;i<c;i++)d[i]=arguments[i];return e=t.call.apply(t,[this].concat(d)),(0,m.default)((0,l.default)(e),"onFilterSelect",(r=(0,n.default)(o.mark((function t(s,r){var n,c,u,l;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=r.find((function(e){return e.title===s}))||{},u=c.value,l=void 0===u?"":u,e.setState({position:l}),e.fetchMonoVoices(),e.save(),(0,p.t)("角色.职位选择",{label:null==(n=s.split(" "))?void 0:n[0]});case 5:case"end":return t.stop()}}),t)}))),function(e,t){return r.apply(this,arguments)})),(0,m.default)((0,l.default)(e),"onScroll",f.updateVisibleBottom.bind((0,l.default)(e))),e}return(0,c.default)(s)}(j.default)},"./src/screens/home/voices/store/computed.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.join.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),a=s("./node_modules/mobx/dist/mobx.esm.js"),m=s("./src/stores/index.ts"),f=s("./src/constants/index.ts"),p=o(s("./src/screens/home/voices/store/state.ts"));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,l.default)(this,s)}}t.default=(r=function(e){(0,u.default)(s,e);var t=j(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,c.default)(s,[{key:"monoId",get:function(){return this.params.monoId}},{key:"ota",get:function(){return this.state.ota[this.thirdPartyKey]}},{key:"thirdPartyKey",get:function(){return("voices_"+[this.monoId,this.state.position].join("_")).replace("/","_")}},{key:"monoVoices",get:function(){var e=m.subjectStore.monoVoices(this.monoId);return e._loaded?e:this.ota?Object.assign({},this.ota,{pagination:{page:1,pageTotal:10}}):f.LIST_EMPTY}},{key:"url",get:function(){return(0,f.HTML_MONO_VOICES)(this.monoId,this.state.position)}}]),s}(p.default),(0,i.default)(r.prototype,"monoId",[a.computed],Object.getOwnPropertyDescriptor(r.prototype,"monoId"),r.prototype),(0,i.default)(r.prototype,"ota",[a.computed],Object.getOwnPropertyDescriptor(r.prototype,"ota"),r.prototype),(0,i.default)(r.prototype,"thirdPartyKey",[a.computed],Object.getOwnPropertyDescriptor(r.prototype,"thirdPartyKey"),r.prototype),(0,i.default)(r.prototype,"monoVoices",[a.computed],Object.getOwnPropertyDescriptor(r.prototype,"monoVoices"),r.prototype),(0,i.default)(r.prototype,"url",[a.computed],Object.getOwnPropertyDescriptor(r.prototype,"url"),r.prototype),r)},"./src/screens/home/voices/store/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.NAMESPACE=t.EXCLUDE_STATE=void 0;var o=s("./src/stores/index.ts"),r=s("./src/screens/home/voices/ds.ts"),n=(t.NAMESPACE="Screen"+r.COMPONENT,t.EXCLUDE_STATE={visibleBottom:o._.window.height,position:"",ota:{}});t.STATE=Object.assign({},n,{_loaded:!1})},"./src/screens/home/voices/store/fetch.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.array.slice.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),a=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=s("./src/stores/index.ts"),p=s("./src/utils/index.ts"),j=s("./src/utils/kv/index.ts"),h=r(s("./src/screens/home/voices/store/computed.ts"));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,a.default)(e);if(t){var r=(0,a.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}var v=[];t.default=function(e){(0,d.default)(s,e);var t=b(s);function s(){var e;(0,u.default)(this,s);for(var r=arguments.length,c=new Array(r),d=0;d<r;d++)c[d]=arguments[d];return e=t.call.apply(t,[this].concat(c)),(0,m.default)((0,l.default)(e),"fetchMonoVoices",(0,n.default)(o.mark((function t(){var s,r,n,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.fetchThirdParty(),s=e.state.position,t.next=4,f.subjectStore.fetchMonoVoices({monoId:e.monoId,position:s});case 4:return(r=t.sent).list.length&&e.thirdPartyKey in e.state.ota&&(c=(null==(n=e.ota)?void 0:n.ts)||0,(0,p.getTimestamp)()-c>=604800&&e.updateThirdParty()),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))),(0,m.default)((0,l.default)(e),"fetchThirdParty",(0,n.default)(o.mark((function t(){var s;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ota||e.monoVoices._loaded){t.next=8;break}return t.next=3,(0,j.get)(e.thirdPartyKey);case 3:if(s=t.sent){t.next=7;break}return e.setState({ota:(0,m.default)({},e.thirdPartyKey,{list:[],_loaded:0})}),t.abrupt("return");case 7:e.setState({ota:(0,m.default)({},e.thirdPartyKey,Object.assign({},s,{_loaded:(0,p.getTimestamp)()}))});case 8:case"end":return t.stop()}}),t)})))),(0,m.default)((0,l.default)(e),"updateThirdParty",(0,n.default)(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v.includes(e.thirdPartyKey)){t.next=2;break}return t.abrupt("return");case 2:setTimeout((function(){(0,j.update)(e.thirdPartyKey,{list:e.monoVoices.list.slice(0,24)}),v.push(e.thirdPartyKey)}),0);case 3:case"end":return t.stop()}}),t)})))),e}return(0,c.default)(s)}(h.default)},"./src/screens/home/voices/store/index.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),a=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=r(s("./src/screens/home/voices/store/action.ts")),p=s("./src/screens/home/voices/store/ds.ts");function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,a.default)(e);if(t){var r=(0,a.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}t.default=function(e){(0,d.default)(s,e);var t=j(s);function s(){var e;(0,u.default)(this,s);for(var r=arguments.length,c=new Array(r),d=0;d<r;d++)c[d]=arguments[d];return e=t.call.apply(t,[this].concat(c)),(0,m.default)((0,l.default)(e),"init",(0,n.default)(o.mark((function t(){return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=Object,t.t2={},t.next=5,e.getStorage(p.NAMESPACE);case 5:if(t.t3=t.sent,t.t3){t.next=8;break}t.t3={};case 8:return t.t4=t.t3,t.t5=p.EXCLUDE_STATE,t.t6={_loaded:!0},t.t7=t.t1.assign.call(t.t1,t.t2,t.t4,t.t5,t.t6),t.t0.setState.call(t.t0,t.t7),t.abrupt("return",e.fetchMonoVoices());case 14:case"end":return t.stop()}}),t)})))),(0,m.default)((0,l.default)(e),"onHeaderRefresh",(function(){return e.fetchMonoVoices()})),e}return(0,c.default)(s)}(f.default)},"./src/screens/home/voices/store/state.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./node_modules/mobx/dist/mobx.esm.js"),m=o(s("./src/utils/store/index.ts")),f=s("./src/screens/home/voices/store/ds.ts");function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,l.default)(this,s)}}t.default=function(e){(0,u.default)(s,e);var t=p(s);function s(){var e;(0,n.default)(this,s);for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];return e=t.call.apply(t,[this].concat(r)),(0,i.default)((0,c.default)(e),"params",void 0),(0,i.default)((0,c.default)(e),"state",(0,a.observable)(f.STATE)),(0,i.default)((0,c.default)(e),"save",(function(){return e.saveStorage(f.NAMESPACE,f.EXCLUDE_STATE)})),e}return(0,r.default)(s)}(m.default)}}]);