(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6868],{"./src/screens/tinygrail/bid/ds.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.tabs=t.sortDS=void 0;var n=r("./src/screens/tinygrail/_/utils.ts");t.tabs=[{title:"我的买单",key:"bid"},{title:"我的卖单",key:"asks"},{title:"我的拍卖",key:"auction"}],t.sortDS=[n.SORT_SC,n.SORT_GDS,n.SORT_GX,n.SORT_SSGX,n.SORT_RK,n.SORT_XX,n.SORT_HYD,n.SORT_DQJ,n.SORT_SCJ,n.SORT_DQZD,n.SORT_DJ,n.SORT_XFJL,n.SORT_FHL]},"./src/screens/tinygrail/bid/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.array.filter.js"),r("./node_modules/core-js/modules/es.array.sort.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),l=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),d=n(r("react")),f=r("./src/components/index.ts"),p=r("./src/screens/_/index.ts"),y=r("./src/stores/index.ts"),m=r("./src/utils/index.ts"),b=r("./src/utils/decorators/index.ts"),h=n(r("./src/screens/tinygrail/_/tabs-v2/index.tsx")),j=n(r("./src/screens/tinygrail/_/tool-bar/index.tsx")),v=n(r("./src/screens/tinygrail/bid/list/index.tsx")),g=n(r("./src/screens/tinygrail/bid/store.ts")),x=r("./src/screens/tinygrail/bid/ds.ts"),_=r("./src/screens/tinygrail/bid/styles.ts"),k=r("./node_modules/react/jsx-runtime.js");function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var s=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,l.default)(this,r)}}var S=function(e){(0,i.default)(r,e);var t=C(r);function r(){var e;(0,s.default)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,u.default)((0,a.default)(e),"getCount",(function(t){var r,n,s,o=e.context.$;switch(t.key){case"bid":case"asks":return(null==(r=o.list(t.key))||null==(n=r.list)?void 0:n.length)||0;case"auction":return(null==(s=o.list(t.key))?void 0:s.list.filter((function(e){return 0===e.state})).length)||0;default:return 0}})),e}return(0,o.default)(r,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"renderContentHeaderComponent",value:function(){var e=this.context.$,t=e.state,r=t.level,n=t.sort,s=t.direction;return(0,k.jsx)(j.default,{data:x.sortDS,level:r,levelMap:e.levelMap,sort:n,direction:s,onLevelSelect:e.onLevelSelect,onSortPress:e.onSortPress})}},{key:"render",value:function(){var e=this,t=this.context.$,r=t.params.type,n=void 0===r?"bid":r,s=t.state._loaded;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.Header,{title:"我的委托",hm:["tinygrail/"+n,"TinygrailBid"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,k.jsx)(p.IconTouchable,{name:"md-cancel-presentation",color:y._.colorTinygrailPlain,onPress:function(){(0,m.confirm)("确定取消 ("+t.canCancelCount+") 个 ("+t.currentTitle+")?",(function(){return t.onBatchCancel()}),"小圣杯助手")}})}}),(0,k.jsx)(f.Page,{style:y._.container.tinygrail,loaded:s,loadingColor:y._.colorTinygrailText,children:(0,k.jsx)(h.default,{routes:x.tabs,renderContentHeaderComponent:this.renderContentHeaderComponent(),renderItem:function(e){return(0,k.jsx)(v.default,{id:e.key},e.key)},renderLabel:function(t){var r=t.route,n=t.focused;return(0,k.jsxs)(f.Flex,{style:_.styles.labelText,justify:"center",children:[(0,k.jsx)(f.Text,{type:"tinygrailPlain",size:13,bold:n,children:r.title}),!!e.getCount(r)&&(0,k.jsxs)(f.Text,{type:"tinygrailText",size:11,bold:!0,lineHeight:13,children:[" ",e.getCount(r)," "]})]})}})})]})}}]),r}(d.default.Component);t.default=(0,b.inject)(g.default)((0,b.obc)(S))},"./src/screens/tinygrail/bid/list/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.assign.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r("react"));var s=r("./src/components/index.ts"),o=r("./src/screens/_/index.ts"),a=r("./src/stores/index.ts"),i=r("./src/utils/decorators/index.ts"),l=n(r("./src/screens/tinygrail/_/item/index.tsx")),c=r("./src/screens/tinygrail/styles.ts"),u=r("./src/screens/tinygrail/bid/ds.ts"),d=r("./node_modules/react/jsx-runtime.js"),f={id:"我的委托.跳转"},p={bid:"买入",asks:"卖出",auction:"资产重组"};t.default=(0,i.obc)((function(e,t){var r=e.id,n=t.$,i=n.computedList(r);if(!i._loaded)return(0,d.jsx)(s.Loading,{style:a._.container.flex,color:a._.colorTinygrailText});var y=n.state.page;return(0,d.jsx)(o.PaginationList2,{style:a._.container.flex,contentContainerStyle:a._.container.bottom,keyExtractor:function(e,t){return String(t)},refreshControlProps:c.refreshControlProps,footerTextType:"tinygrailText",data:i.list,scrollToTop:u.tabs[y].key===r,renderItem:function(e){var t=e.item,s=e.index;return(0,d.jsx)(l.default,Object.assign({index:s,type:r,event:f,go:p[r],onAuctionCancel:n.doAuctionCancel},t))},onHeaderRefresh:function(){return n.fetchList(r)}})}))},"./src/screens/tinygrail/bid/store.ts":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/regenerator/index.js");function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,s=function(){};return{s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.array.find-index.js"),r("./node_modules/core-js/modules/es.array.sort.js"),r("./node_modules/core-js/modules/es.string.iterator.js"),r("./node_modules/core-js/modules/es.array.iterator.js"),r("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r("./node_modules/core-js/modules/es.array.filter.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),r("./node_modules/core-js/modules/es.array.for-each.js"),r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),r("./node_modules/core-js/modules/es.object.assign.js"),r("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),r("./node_modules/core-js/modules/es.array.slice.js"),r("./node_modules/core-js/modules/es.object.to-string.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.array.from.js"),r("./node_modules/core-js/modules/es.symbol.js"),r("./node_modules/core-js/modules/es.symbol.description.js"),r("./node_modules/core-js/modules/es.symbol.iterator.js"),r("./node_modules/core-js/modules/es.array.is-array.js");var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l=a(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),d=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),f=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),y=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),b=a(r("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),h=r("./node_modules/mobx/dist/mobx.esm.js"),j=r("./src/stores/index.ts"),v=a(r("./src/utils/store/index.ts")),g=r("./src/utils/fetch/index.ts"),x=r("./src/utils/ui/index.ts"),_=r("./src/screens/tinygrail/_/utils.ts"),k=r("./src/screens/tinygrail/bid/ds.ts");function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,y.default)(e);if(t){var s=(0,y.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,p.default)(this,r)}}t.default=(i=function(e){(0,f.default)(r,e);var t=C(r);function r(){var e,o;(0,c.default)(this,r);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return e=t.call.apply(t,[this].concat(i)),(0,m.default)((0,d.default)(e),"params",void 0),(0,m.default)((0,d.default)(e),"state",(0,h.observable)({page:0,level:"",sort:"",direction:"",_loaded:!1})),(0,m.default)((0,d.default)(e),"init",(0,l.default)(n.mark((function t(){var r,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.params.type,s=k.tabs.findIndex((function(e){return e.key===r})),e.setState({page:s,_loaded:!0}),e.fetchList(e.currentKey);case 4:case"end":return t.stop()}}),t)})))),(0,m.default)((0,d.default)(e),"fetchList",(function(e){return"bid"===e?j.tinygrailStore.fetchBid():"asks"===e?j.tinygrailStore.fetchAsks():j.tinygrailStore.fetchAuction()})),(0,m.default)((0,d.default)(e),"onChange",(function(t){t!==e.state.page&&((0,g.t)("我的委托.标签页切换",{page:t}),e.setState({page:t,sort:"",direction:""}),e.tabChangeCallback(t))})),(0,m.default)((0,d.default)(e),"tabChangeCallback",(function(t){var r=k.tabs[t].key;e.list(r)._loaded||e.fetchList(r)})),(0,m.default)((0,d.default)(e),"onLevelSelect",(function(t){e.setState({level:t})})),(0,m.default)((0,d.default)(e),"onSortPress",(function(t){var r=e.state,n=r.sort,s=r.direction;if(t===n){var o=t,a="down";"down"===s?a="up":"up"===s&&(o="",a=""),(0,g.t)("我的委托.排序",{sort:o,direction:a}),e.setState({sort:o,direction:a})}else(0,g.t)("我的委托.排序",{sort:t,direction:"down"}),e.setState({sort:t,direction:"down"})})),(0,m.default)((0,d.default)(e),"onBatchCancel",(function(){"asks"===e.currentKey||"bid"===e.currentKey?e.doCancelAllBid():e.doCancelAllAuction()})),(0,m.default)((0,d.default)(e),"doAuctionCancel",(o=(0,l.default)(n.mark((function t(r){var s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return(0,g.t)("我的委托.取消拍卖",{id:r}),t.next=5,j.tinygrailStore.doAuctionCancel({id:r});case 5:if(s=t.sent,(0,x.feedback)(),s){t.next=10;break}return(0,x.info)("取消失败"),t.abrupt("return");case 10:(0,x.info)("已取消"),e.fetchList();case 12:case"end":return t.stop()}}),t)}))),function(e){return o.apply(this,arguments)})),(0,m.default)((0,d.default)(e),"doCancelAllBid",(0,l.default)(n.mark((function t(){var r,o,a,i,l,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.computedList(e.currentKey),o=r.list,(0,g.t)("我的委托.一键取消",{length:o.length}),a=n.mark((function t(r){var a,i,l,c,u,d,f;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,_.throttleInfo)(o.findIndex((function(e){return r.id===e.id}))+1+" / "+o.length),t.next=3,j.tinygrailStore.fetchUserLogs(r.id);case 3:if(a=t.sent,"asks"!==e.currentKey){t.next=24;break}i=s(a.asks),t.prev=6,i.s();case 8:if((l=i.n()).done){t.next=14;break}return c=l.value,t.next=12,j.tinygrailStore.doCancelAsk({id:c.id});case 12:t.next=8;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),i.e(t.t0);case 19:return t.prev=19,i.f(),t.finish(19);case 22:t.next=42;break;case 24:if("bid"!==e.currentKey){t.next=42;break}u=s(a.bids),t.prev=26,u.s();case 28:if((d=u.n()).done){t.next=34;break}return f=d.value,t.next=32,j.tinygrailStore.doCancelBid({id:f.id});case 32:t.next=28;break;case 34:t.next=39;break;case 36:t.prev=36,t.t1=t.catch(26),u.e(t.t1);case 39:return t.prev=39,u.f(),t.finish(39);case 42:case"end":return t.stop()}}),t,null,[[6,16,19,22],[26,36,39,42]])})),i=s(o),t.prev=4,i.s();case 6:if((l=i.n()).done){t.next=11;break}return c=l.value,t.delegateYield(a(c),"t0",9);case 9:t.next=6;break;case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(4),i.e(t.t1);case 16:return t.prev=16,i.f(),t.finish(16);case 19:return(0,x.feedback)(),t.next=22,e.fetchList(e.currentKey);case 22:(0,x.info)("操作完成");case 23:case"end":return t.stop()}}),t,null,[[4,13,16,19]])})))),(0,m.default)((0,d.default)(e),"doCancelAllAuction",(0,l.default)(n.mark((function t(){var r,o,a,i,l;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.computedList(e.currentKey).list.filter((function(e){return 0===e.state})),(0,g.t)("我的委托.一键取消",{length:r.length}),o=n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,_.throttleInfo)(r.findIndex((function(e){return t.id===e.id}))+1+" / "+r.length),e.next=3,j.tinygrailStore.doAuctionCancel({id:t.id});case 3:case"end":return e.stop()}}),e)})),a=s(r),t.prev=4,a.s();case 6:if((i=a.n()).done){t.next=11;break}return l=i.value,t.delegateYield(o(l),"t0",9);case 9:t.next=6;break;case 11:t.next=16;break;case 13:t.prev=13,t.t1=t.catch(4),a.e(t.t1);case 16:return t.prev=16,a.f(),t.finish(16);case 19:return(0,x.feedback)(),t.next=22,e.fetchList(e.currentKey);case 22:(0,x.info)("操作完成");case 23:case"end":return t.stop()}}),t,null,[[4,13,16,19]])})))),e}return(0,u.default)(r,[{key:"currentKey",get:function(){var e=this.state.page;return k.tabs[e].key}},{key:"currentTitle",get:function(){var e=this.state.page;return k.tabs[e].title.replace("我的","")}},{key:"canCancelCount",get:function(){return"拍卖"===this.currentTitle?this.computedList(this.currentKey).list.filter((function(e){return 0===e.state})).length:this.computedList(this.currentKey).list.length}},{key:"levelMap",get:function(){var e=this.list(this.currentKey).list,t={};return e.forEach((function(e){return t[e.level||1]?t[e.level||1]+=1:t[e.level||1]=1})),t}},{key:"list",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bid";return(0,h.computed)((function(){return(0,_.relation)(j.tinygrailStore.list(e))})).get()}},{key:"computedList",value:function(e){var t=this,r=this.state,n=r.sort,s=r.level,o=r.direction;return(0,h.computed)((function(){var r=t.list(e);if(!r._loaded)return r;var a=r;return s&&(a=Object.assign({},a,{list:(0,_.levelList)(s,a.list)})),n&&(a=Object.assign({},a,{list:(0,_.sortList)(n,o,a.list)})),a})).get()}}]),r}(v.default),(0,b.default)(i.prototype,"currentKey",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"currentKey"),i.prototype),(0,b.default)(i.prototype,"currentTitle",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"currentTitle"),i.prototype),(0,b.default)(i.prototype,"canCancelCount",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"canCancelCount"),i.prototype),(0,b.default)(i.prototype,"levelMap",[h.computed],Object.getOwnPropertyDescriptor(i.prototype,"levelMap"),i.prototype),i)},"./src/screens/tinygrail/bid/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var n=r("./src/stores/index.ts");t.styles=n._.create({labelText:{width:"100%"}})}}]);