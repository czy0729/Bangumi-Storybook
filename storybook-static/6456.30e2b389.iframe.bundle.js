(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6456],{"./src/screens/tinygrail/items/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=void 0;t.STATE={title:"",visible:!1,_loaded:!1}},"./src/screens/tinygrail/items/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.sort.js"),s("./node_modules/core-js/modules/es.array.slice.js"),s("./node_modules/core-js/modules/es.function.name.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),i=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),l=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),a=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/react/index.js")),d=r(s("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),c=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),m=s("./src/components/index.ts"),f=s("./src/stores/index.ts"),p=s("./src/utils/index.ts"),y=s("./src/utils/decorators/index.ts"),j=s("./src/constants/index.ts"),_=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=v(t);if(s&&s.has(e))return s.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,s&&s.set(e,r),r}(s("./src/screens/tinygrail/_/characters-modal/index.tsx")),b=s("./src/screens/tinygrail/_/ds.ts"),h=r(s("./src/screens/tinygrail/items/store.ts")),x=s("./src/screens/tinygrail/items/styles.ts"),g=s("./node_modules/react/jsx-runtime.js");function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(v=function(e){return e?s:t})(e)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,a.default)(e);if(t){var n=(0,a.default)(this).constructor;s=Reflect.construct(r,arguments,n)}else s=r.apply(this,arguments);return(0,l.default)(this,s)}}var T=function(e){(0,i.default)(s,e);var t=S(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,o.default)(s,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"componentWillUnmount",value:function(){try{this.context.$.onCloseModal()}catch(e){}}},{key:"renderList",value:function(){var e=this,t=this.context.$,s=t.items.list;return(0,g.jsx)(d.default,Object.assign({style:f._.container.flex,contentContainerStyle:f._.container.bottom},j.SCROLL_VIEW_RESET_PROPS,{children:s.slice().sort((function(e,t){return(_.ITEMS_USED[t.name]||0)-(_.ITEMS_USED[e.name]||0)})).map((function(s){return _.ITEMS_USED[s.name]?(0,g.jsx)(m.Touchable,{style:e.styles.item,onPress:function(){return t.onShowModal(s.name)},children:(0,g.jsxs)(m.Flex,{style:e.styles.wrap,align:"start",children:[(0,g.jsx)(m.Image,{size:36,src:(0,p.tinygrailOSS)(s.icon),radius:!0,skeletonType:"tinygrail"}),(0,g.jsxs)(m.Flex.Item,{style:f._.ml.md,children:[(0,g.jsx)(m.Text,{type:"tinygrailPlain",size:15,bold:!0,children:s.name}),(0,g.jsx)(m.Text,{style:f._.mt.xs,type:"tinygrailText",size:10,children:b.ITEMS_DESC[s.name]||s.line})]}),(0,g.jsxs)(m.Flex,{style:f._.ml.sm,children:[(0,g.jsxs)(m.Text,{type:"warning",children:["x",(0,p.formatNumber)(s.amount,0)]}),(0,g.jsx)(m.Iconfont,{style:f._.mr._sm,name:"md-navigate-next",color:f._.colorTinygrailText})]})]})},s.id):(0,g.jsx)(c.default,{style:e.styles.item,children:(0,g.jsxs)(m.Flex,{style:e.styles.wrap,align:"start",children:[(0,g.jsx)(m.Image,{size:36,src:(0,p.tinygrailOSS)(s.icon),radius:!0,skeletonType:"tinygrail"}),(0,g.jsxs)(m.Flex.Item,{style:f._.ml.md,children:[(0,g.jsx)(m.Text,{type:"tinygrailPlain",bold:!0,children:s.name}),(0,g.jsx)(m.Text,{style:f._.mt.xs,type:"tinygrailText",size:10,children:b.ITEMS_DESC[s.name]||s.line})]}),(0,g.jsxs)(m.Text,{style:f._.ml.sm,type:"warning",children:["x",(0,p.formatNumber)(s.amount,0)]})]})},s.id)}))}))}},{key:"renderModal",value:function(){var e=this.context.$,t=e.state,s=t.title,r=t.visible;return(0,g.jsx)(_.default,{visible:r,title:s,onClose:e.onCloseModal,onSubmit:e.doUse})}},{key:"render",value:function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Header,{title:"我的道具",hm:["tinygrail/items","TinygrailItems"],statusBarEvents:!1,statusBarEventsType:"Tinygrail"}),(0,g.jsxs)(m.Page,{style:f._.container.tinygrail,children:[this.renderList(),this.renderModal()]})]})}},{key:"styles",get:function(){return(0,x.memoStyles)()}}]),s}(u.default.Component);t.default=(0,y.inject)(h.default)((0,y.obc)(T));try{items.displayName="items",items.__docgenInfo={description:"",displayName:"items",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/items/index.tsx#items"]={docgenInfo:items.__docgenInfo,name:"items",path:"src/screens/tinygrail/items/index.tsx#items"})}catch(e){}},"./src/screens/tinygrail/items/store.ts":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.number.to-fixed.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=n(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=n(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=n(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),y=s("./node_modules/mobx/dist/mobx.esm.js"),j=s("./src/stores/index.ts"),_=s("./src/utils/index.ts"),b=s("./src/utils/fetch/index.ts"),h=n(s("./src/utils/store/index.ts")),x=s("./src/screens/tinygrail/_/characters-modal/index.tsx"),g=s("./src/screens/tinygrail/items/ds.ts");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,m.default)(e);if(t){var n=(0,m.default)(this).constructor;s=Reflect.construct(r,arguments,n)}else s=r.apply(this,arguments);return(0,c.default)(this,s)}}t.default=(o=function(e){(0,d.default)(s,e);var t=v(s);function s(){var e,n;(0,l.default)(this,s);for(var o=arguments.length,a=new Array(o),d=0;d<o;d++)a[d]=arguments[d];return e=t.call.apply(t,[this].concat(a)),(0,f.default)((0,u.default)(e),"state",(0,y.observable)(g.STATE)),(0,f.default)((0,u.default)(e),"init",(function(){return e.fetchItems()})),(0,f.default)((0,u.default)(e),"fetchItems",(function(){return j.tinygrailStore.fetchItems()})),(0,f.default)((0,u.default)(e),"onShowModal",(function(t){return e.setState({title:t,visible:!0})})),(0,f.default)((0,u.default)(e),"onCloseModal",(function(){return e.setState({visible:!1})})),(0,f.default)((0,u.default)(e),"doUse",(n=(0,i.default)(r.mark((function e(t){var s,n,o,i,l,a,u,d,c,m,f;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.title,n=t.monoId,o=t.toMonoId,i=t.amount,l=t.isTemple,e.prev=1,a=x.ITEMS_TYPE[s]){e.next=5;break}return e.abrupt("return",!1);case 5:return u={monoId:n,type:a},o&&(u.toMonoId=o),void 0!==i&&(u.amount=i),void 0!==l&&(u.isTemple=l),e.next=11,j.tinygrailStore.doMagic(u);case 11:if(d=e.sent,c=d.State,m=d.Value,f=d.Message,(0,_.feedback)(),(0,b.t)("我的道具.使用",{type:s,monoId:n,toMonoId:o}),0!==c){e.next=22;break}return(0,_.alert)("string"==typeof m?m:"获得"+m.Name+"x"+m.Amount+"，当前价"+(0,_.toFixed)(m.CurrentPrice,2)+"，价值"+(0,_.toFixed)(m.Amount*m.CurrentPrice,2),"小圣杯助手"),j.tinygrailStore.fetchUserLogs(n),"星光碎片"===s&&j.tinygrailStore.batchUpdateTemplesByIds([n,o]),e.abrupt("return",j.tinygrailStore.batchUpdateMyCharaAssetsByIds([n,o].filter((function(e){return!!e}))));case 22:return(0,_.info)(f),e.abrupt("return",!1);case 26:return e.prev=26,e.t0=e.catch(1),(0,_.info)("操作失败，可能授权过期了"),e.abrupt("return",!1);case 30:case"end":return e.stop()}}),e,null,[[1,26]])}))),function(e){return n.apply(this,arguments)})),e}return(0,a.default)(s,[{key:"items",get:function(){return j.tinygrailStore.items}}]),s}(h.default),(0,p.default)(o.prototype,"items",[y.computed],Object.getOwnPropertyDescriptor(o.prototype,"items"),o.prototype),o)},"./src/screens/tinygrail/items/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{item:{paddingLeft:r._.wind,backgroundColor:r._.colorTinygrailContainer},wrap:{paddingVertical:r._.md,paddingRight:r._.wind}}}))}}]);