(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6531],{"./src/screens/discovery/staff/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/staff/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/discovery/staff/component/list/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/staff/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"List"),t.EVENT={id:"新番档期.跳转",data:{userId:"lilyurey"}}},"./src/screens/discovery/staff/component/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),l=s("./src/utils/index.ts"),u=s("./src/utils/decorators/index.ts"),d=s("./src/screens/discovery/staff/component/list/utils.tsx"),c=s("./src/screens/discovery/staff/component/list/ds.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,u.obc)((function(e,t){var s=t.$;return s.catalogs._loaded?(0,a.jsx)(o.ListView,{contentContainerStyle:n._.container.bottom,keyExtractor:l.keyExtractor,data:s.catalogs,lazy:6,scrollToTop:!0,renderItem:d.renderItem,scrollEventThrottle:16,onScroll:s.onScroll,onHeaderRefresh:s.onHeaderRefresh,onFooterRefresh:s.fetchCatalogs}):(0,a.jsx)(o.Loading,{style:n._.container.plain})}),c.COMPONENT)},"./src/screens/discovery/staff/component/list/utils.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.renderItem=function(e){var t=e.item,s=e.index;return(0,l.jsx)(o.ItemCatalog,Object.assign({},t,{index:s,name:"优莉雅",isUser:!0,event:n.EVENT}))};r(s("react"));var o=s("./src/screens/_/index.ts"),n=s("./src/screens/discovery/staff/component/list/ds.ts"),l=s("./node_modules/react/jsx-runtime.js")},"./src/screens/discovery/staff/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;t.COMPONENT="Staff"},"./src/screens/discovery/staff/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_SPA=t.TEXT_BROWSER=t.DATA=t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/constants/index.ts"),n=s("./src/screens/discovery/staff/ds.ts"),l=(t.COMPONENT=(0,r.rc)(n.COMPONENT,"Header"),t.TEXT_BROWSER="浏览器查看"),u=t.TEXT_SPA="网页版查看",d=t.DATA=[l];o.STORYBOOK||d.push(u)},"./src/screens/discovery/staff/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),u=s("./src/utils/fetch/index.ts"),d=s("./src/constants/index.ts"),c=s("./src/screens/discovery/staff/header/ds.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.ob)((function(){return(0,a.jsx)(o.Header,{title:"新番",hm:["user/lilyurey/index","Staff"],headerRight:function(){return(0,a.jsx)(o.Header.Popover,{data:c.DATA,onSelect:function(e){if((0,u.t)("新番档期.右上角菜单",{key:e}),e!==c.TEXT_BROWSER)if(e!==c.TEXT_SPA);else{var t=d.URL_SPA+"/"+(0,n.getSPAParams)("Staff");(0,n.open)(t)}else(0,n.open)(d.HOST+"/user/lilyurey/index")},children:(0,a.jsx)(o.Heatmap,{id:"新番档期.右上角菜单"})})}})}),c.COMPONENT)},"./src/screens/discovery/staff/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),l=s("./src/utils/decorators/index.ts"),u=s("./src/utils/hooks/index.ts"),d=r(s("./src/screens/discovery/staff/component/list/index.tsx")),c=r(s("./src/screens/discovery/staff/header/index.tsx")),a=r(s("./src/screens/discovery/staff/store/index.ts")),i=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.ic)(a.default,(function(e,t){var s=t.$;return(0,u.useRunAfter)((function(){s.init()})),(0,u.useObserver)((function(){return(0,i.jsxs)(o.Component,{id:"screen-staff",children:[(0,i.jsx)(c.default,{}),(0,i.jsx)(o.Page,{children:(0,i.jsx)(d.default,{})}),(0,i.jsx)(o.Heatmap,{bottom:n._.bottom,id:"新番",screen:"Staff"})]})}))}))},"./src/screens/discovery/staff/store/action.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.function.bind.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),a=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=s("./src/utils/index.ts"),f=r(s("./src/screens/discovery/staff/store/fetch.ts"));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,u.default)(s,e);var t=m(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),(0,a.default)((0,l.default)(e),"onHeaderRefresh",(function(){return e.fetchCatalogs(!0)})),(0,a.default)((0,l.default)(e),"onScroll",i.updateVisibleBottom.bind((0,l.default)(e))),e}return(0,o.default)(s)}(f.default)},"./src/screens/discovery/staff/store/computed.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),a=r(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),i=s("./node_modules/mobx/dist/mobx.esm.js"),f=s("./src/stores/index.ts"),m=r(s("./src/screens/discovery/staff/store/state.ts"));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=(o=function(e){(0,u.default)(s,e);var t=p(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,l.default)(s,[{key:"userId",get:function(){return"lilyurey"}},{key:"catalogs",get:function(){return f.usersStore.catalogs(this.userId,!1)}}]),s}(m.default),(0,a.default)(o.prototype,"userId",[i.computed],Object.getOwnPropertyDescriptor(o.prototype,"userId"),o.prototype),(0,a.default)(o.prototype,"catalogs",[i.computed],Object.getOwnPropertyDescriptor(o.prototype,"catalogs"),o.prototype),o)},"./src/screens/discovery/staff/store/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.EXCLUDE_STATE=void 0;var r=s("./src/stores/index.ts"),o=t.EXCLUDE_STATE={visibleBottom:r._.window.height};t.STATE=Object.assign({},o,{_loaded:!1})},"./src/screens/discovery/staff/store/fetch.ts":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.array.filter.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),a=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=s("./src/stores/index.ts"),p=s("./src/utils/fetch/index.ts"),j=s("./src/utils/kv/index.ts"),b=o(s("./src/screens/discovery/staff/store/computed.ts"));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,a.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=y(s);function s(){var e,o;(0,u.default)(this,s);for(var l=arguments.length,c=new Array(l),a=0;a<l;a++)c[a]=arguments[a];return e=t.call.apply(t,[this].concat(c)),(0,f.default)((0,d.default)(e),"fetchCatalogs",(0,n.default)(r.mark((function t(){var s,o,n=arguments;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.length>0&&void 0!==n[0]&&n[0],t.next=3,m.usersStore.fetchCatalogs({userId:e.userId,isCollect:!1},s);case 3:return o=t.sent,(0,p.queue)(o.list.map((function(t){return function(){return e.fetchCatalogDetail(t.id)}}))),t.abrupt("return",o);case 6:case"end":return t.stop()}}),t)})))),(0,f.default)((0,d.default)(e),"fetchCatalogDetail",(o=(0,n.default)(r.mark((function t(s){var o,n;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((o=m.discoveryStore.catalogDetail(s))._loaded&&o.list.length||m.discoveryStore.catalogDetailFromOSS(s)._loaded)){t.next=3;break}return t.abrupt("return",!0);case 3:return t.next=5,m.discoveryStore.fetchCatalogDetailFromOSS({id:s});case 5:if(!t.sent){t.next=8;break}return t.abrupt("return",!0);case 8:return t.next=10,m.discoveryStore.fetchCatalogDetail({id:s});case 10:return n=t.sent,e.updateCatalogDetail(Object.assign({},n,{id:s})),t.abrupt("return",!0);case 13:case"end":return t.stop()}}),t)}))),function(e){return o.apply(this,arguments)})),(0,f.default)((0,d.default)(e),"updateCatalogDetail",(function(e){setTimeout((function(){var t=e.id,s=e.title,r=e.avatar,o=e.nickname,n=e.userId,l=e.time,u=e.collect,d=e.list;(0,j.update)("catalog_"+t,{id:t,title:s,avatar:r,nickname:o,userId:n,time:l,collect:u,list:d.filter((function(e,t){return t<100})).map((function(e){return{id:e.id,image:e.image,title:e.title,type:e.type,info:e.info,comment:e.comment}}))})}),2e3)})),e}return(0,l.default)(s)}(b.default)},"./src/screens/discovery/staff/store/index.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),a=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js"));function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}var f=function(e){(0,u.default)(s,e);var t=i(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),(0,a.default)((0,l.default)(e),"init",(function(){return e.setState({_loaded:!0}),e.fetchCatalogs(!0)})),e}return(0,o.default)(s)}(r(s("./src/screens/discovery/staff/store/action.ts")).default);t.default=f},"./src/screens/discovery/staff/store/state.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),a=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=s("./node_modules/mobx/dist/mobx.esm.js"),f=r(s("./src/utils/store/index.ts")),m=s("./src/screens/discovery/staff/store/ds.ts");function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,u.default)(s,e);var t=p(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return e=t.call.apply(t,[this].concat(o)),(0,a.default)((0,l.default)(e),"state",(0,i.observable)(m.STATE)),e}return(0,o.default)(s)}(f.default)}}]);