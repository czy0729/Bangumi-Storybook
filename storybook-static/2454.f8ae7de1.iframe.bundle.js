(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2454],{"./src/screens/tinygrail/new-bangumi/ds.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.TABS=t.NAMESPACE=void 0;t.NAMESPACE="ScreenTinygrailNew",t.TABS=[{title:"最近活跃",key:"nbc"},{title:"最高市值",key:"tnbc"}]},"./src/screens/tinygrail/new-bangumi/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.sort.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(r("react")),c=r("./src/components/index.ts"),d=r("./src/stores/index.ts"),f=r("./src/utils/decorators/index.ts"),m=n(r("./src/screens/tinygrail/_/icon-go/index.tsx")),p=n(r("./src/screens/tinygrail/_/tabs-v2/index.tsx")),y=n(r("./src/screens/tinygrail/_/tool-bar/index.tsx")),b=r("./src/screens/tinygrail/overview/ds.ts"),g=n(r("./src/screens/tinygrail/new-bangumi/list/index.tsx")),j=n(r("./src/screens/tinygrail/new-bangumi/store.ts")),v=r("./src/screens/tinygrail/new-bangumi/ds.ts"),h=r("./node_modules/react/jsx-runtime.js");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.default)(e);if(t){var s=(0,l.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var x=function(e){(0,a.default)(r,e);var t=_(r);function r(){return(0,s.default)(this,r),t.apply(this,arguments)}return(0,o.default)(r,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"renderContentHeaderComponent",value:function(){var e=this.context.$,t=e.state,r=t.level,n=t.sort,s=t.direction;return(0,h.jsx)(y.default,{data:b.SORT_DS,level:r,levelMap:e.levelMap,sort:n,direction:s,onLevelSelect:e.onLevelSelect,onSortPress:e.onSortPress})}},{key:"render",value:function(){var e=this.context.$,t=e.state._loaded;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Header,{title:"新番榜单",hm:["tinygrail/new","TinygrailNew"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,h.jsx)(m.default,{$:e})}}),(0,h.jsx)(c.Page,{style:d._.container.tinygrail,loaded:t,children:(0,h.jsx)(p.default,{routes:v.TABS,renderContentHeaderComponent:this.renderContentHeaderComponent(),renderItem:function(e){return(0,h.jsx)(g.default,{id:e.key},e.key)}})})]})}}]),r}(u.default.Component);t.default=(0,f.inject)(j.default)((0,f.obc)(x));try{newbangumi.displayName="newbangumi",newbangumi.__docgenInfo={description:"",displayName:"newbangumi",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/new-bangumi/index.tsx#newbangumi"]={docgenInfo:newbangumi.__docgenInfo,name:"newbangumi",path:"src/screens/tinygrail/new-bangumi/index.tsx#newbangumi"})}catch(e){}},"./src/screens/tinygrail/new-bangumi/list/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.assign.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r("react"));var s=r("./src/components/index.ts"),o=r("./src/stores/index.ts"),a=r("./src/utils/index.ts"),i=r("./src/utils/decorators/index.ts"),l=r("./src/screens/tinygrail/styles.ts"),u=n(r("./src/screens/tinygrail/_/item/index.tsx")),c=r("./src/screens/tinygrail/new-bangumi/ds.ts"),d=r("./node_modules/react/jsx-runtime.js"),f={id:"新番榜单.跳转"};t.default=(0,i.obc)((function(e,t){var r=e.id,n=t.$,i=n.computedList(r);if(!i._loaded)return(0,d.jsx)(s.Loading,{style:o._.container.flex,color:o._.colorTinygrailText});var u=n.state.page;return(0,d.jsx)(s.ListView,{style:o._.container.flex,contentContainerStyle:o._.container.bottom,keyExtractor:a.keyExtractor,refreshControlProps:l.refreshControlProps,footerTextType:"tinygrailText",data:i,windowSize:6,initialNumToRender:24,maxToRenderPerBatch:24,updateCellsBatchingPeriod:24,lazy:24,scrollToTop:c.TABS[u].key===r,renderItem:m,onHeaderRefresh:function(){return n.fetchList(r)}})}));function m(e){var t=e.item,r=e.index;return(0,d.jsx)(u.default,Object.assign({index:r,event:f},t))}},"./src/screens/tinygrail/new-bangumi/store.ts":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.number.constructor.js"),r("./node_modules/core-js/modules/es.object.assign.js"),r("./node_modules/core-js/modules/es.array.sort.js"),r("./node_modules/core-js/modules/es.array.for-each.js"),r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),r("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=s(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),i=s(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=s(r("./node_modules/@babel/runtime/helpers/createClass.js")),u=s(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=s(r("./node_modules/@babel/runtime/helpers/inherits.js")),d=s(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),f=s(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=s(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=s(r("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),y=r("./node_modules/mobx/dist/mobx.esm.js"),b=r("./src/stores/index.ts"),g=r("./src/utils/index.ts"),j=s(r("./src/utils/store/index.ts")),v=r("./src/utils/fetch/index.ts"),h=r("./src/screens/tinygrail/_/utils.ts"),_=r("./src/screens/tinygrail/new-bangumi/ds.ts");function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.default)(e);if(t){var s=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,d.default)(this,r)}}t.default=(o=function(e){(0,c.default)(r,e);var t=x(r);function r(){var e;(0,i.default)(this,r);for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o)),(0,m.default)((0,u.default)(e),"state",(0,y.observable)({page:0,level:"",sort:"",direction:"",go:"卖出",_loaded:!1})),(0,m.default)((0,u.default)(e),"init",(0,a.default)(n.mark((function t(){var r,s,o,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state._loaded,s=(0,g.getTimestamp)(),o=!r||s-Number(r)>60,t.next=5,e.getStorage(_.NAMESPACE);case 5:return a=t.sent,e.setState(Object.assign({},a,{_loaded:o?s:r})),o&&e.fetchList(e.currentKey),t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))),(0,m.default)((0,u.default)(e),"fetchList",(function(e){return b.tinygrailStore.fetchList(e)})),(0,m.default)((0,u.default)(e),"onChange",(function(t){t!==e.state.page&&((0,v.t)("新番榜单.标签页切换",{page:t}),e.setState({page:t}),e.setStorage(_.NAMESPACE),e.tabChangeCallback(t))})),(0,m.default)((0,u.default)(e),"onSelectGo",(function(t){(0,v.t)("新番榜单.设置前往",{title:t}),e.setState({go:t}),e.setStorage(_.NAMESPACE)})),(0,m.default)((0,u.default)(e),"tabChangeCallback",(function(t){var r=_.TABS[t],n=r.title,s=r.key;e.list(s)._loaded&&"最近活跃"!==n||e.fetchList(s)})),(0,m.default)((0,u.default)(e),"onLevelSelect",(function(t){(0,v.t)("新番榜单.筛选",{level:t}),e.setState({level:t}),e.setStorage(_.NAMESPACE)})),(0,m.default)((0,u.default)(e),"onSortPress",(function(t){var r=e.state,n=r.sort,s=r.direction;if(t===n){var o=t,a="down";"down"===s?a="up":"up"===s&&(o="",a=""),(0,v.t)("新番榜单.排序",{sort:o,direction:a}),e.setState({sort:o,direction:a})}else(0,v.t)("新番榜单.排序",{sort:t,direction:"down"}),e.setState({sort:t,direction:"down"});e.setStorage(_.NAMESPACE)})),e}return(0,l.default)(r,[{key:"mvc",get:function(){return b.tinygrailStore.mvc}},{key:"currentKey",get:function(){var e=this.state.page;return _.TABS[e].key}},{key:"levelMap",get:function(){var e=this.list(this.currentKey).list,t={};return e.forEach((function(e){return t[e.level]?t[e.level]+=1:t[e.level]=1})),t}},{key:"list",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"recent";return(0,y.computed)((function(){return(0,h.relation)(b.tinygrailStore.list(e))})).get()}},{key:"computedList",value:function(e){var t=this,r=this.state,n=r.sort,s=r.level,o=r.direction;return(0,y.computed)((function(){var r=t.list(e);if(!r._loaded)return r;var a=r;return s&&(a=Object.assign({},a,{list:(0,h.levelList)(s,a.list)})),n&&(a=Object.assign({},a,{list:(0,h.sortList)(n,o,a.list)})),a})).get()}}]),r}(j.default),(0,p.default)(o.prototype,"mvc",[y.computed],Object.getOwnPropertyDescriptor(o.prototype,"mvc"),o.prototype),(0,p.default)(o.prototype,"currentKey",[y.computed],Object.getOwnPropertyDescriptor(o.prototype,"currentKey"),o.prototype),(0,p.default)(o.prototype,"levelMap",[y.computed],Object.getOwnPropertyDescriptor(o.prototype,"levelMap"),o.prototype),o)}}]);