(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7663],{"./src/screens/tinygrail/search/ds.ts":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(r,"__esModule",{value:!0}),r.STATE=r.NAMESPACE=r.EXCLUDE_STATE=void 0;r.NAMESPACE="ScreenTinygrailSearch";var s=r.EXCLUDE_STATE={value:"",list:[],searching:!1};r.STATE=Object.assign({history:[]},s,{_loaded:!1})},"./src/screens/tinygrail/search/history/index.tsx":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.function.name.js");var s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;s(t("./node_modules/react/index.js"));var n=s(t("./node_modules/react-native-web/dist/exports/View/index.js")),o=t("./src/components/index.ts"),a=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),l=t("./src/utils/fetch/index.ts"),c=t("./src/screens/tinygrail/search/history/styles.ts"),d=t("./node_modules/react/jsx-runtime.js");r.default=(0,i.obc)((function(e,r){var t=e.style,s=r.$,i=r.navigation,u=(0,c.memoStyles)(),m=s.state.history;return(0,d.jsx)(n.default,{style:t,children:m.map((function(e,r){return(0,d.jsx)(n.default,{style:u.item,children:(0,d.jsxs)(o.Flex,{style:u.content,children:[(0,d.jsx)(o.Flex.Item,{children:(0,d.jsxs)(o.Text,{type:"tinygrailPlain",size:15,onPress:function(){(0,l.t)("人物直达.跳转",{monoId:e}),s.doSearchNumber(i,e)},children:[s.chara(e).name||e,!!s.chara(e).id&&" #"+s.chara(e).id]})}),(0,d.jsx)(o.Touchable,{style:u.close,onPress:function(){return s.deleteHistory(e)},children:(0,d.jsx)(o.Iconfont,{name:"md-close",color:a._.colorTinygrailPlain})})]})},r)}))})}))},"./src/screens/tinygrail/search/history/styles.ts":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(r,"__esModule",{value:!0}),r.memoStyles=void 0;var s=t("./src/stores/index.ts");r.memoStyles=s._.memoStyles((function(){return{item:{paddingHorizontal:s._.wind},content:{paddingVertical:s._.sm},close:{padding:s._.sm,marginRight:-s._.sm,marginLeft:s._.md}}}))},"./src/screens/tinygrail/search/index.tsx":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.reflect.construct.js");var s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=s(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=s(t("./node_modules/@babel/runtime/helpers/createClass.js")),a=s(t("./node_modules/@babel/runtime/helpers/inherits.js")),i=s(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=s(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=s(t("./node_modules/react/index.js")),d=t("./src/components/index.ts"),u=t("./src/stores/index.ts"),m=t("./src/utils/decorators/index.ts"),f=s(t("./src/screens/tinygrail/search/history/index.tsx")),y=s(t("./src/screens/tinygrail/search/result/index.tsx")),h=s(t("./src/screens/tinygrail/search/search-bar/index.tsx")),p=s(t("./src/screens/tinygrail/search/store.ts")),j=t("./src/screens/tinygrail/search/styles.ts"),b=t("./node_modules/react/jsx-runtime.js");function _(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,l.default)(e);if(r){var n=(0,l.default)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return(0,i.default)(this,t)}}var x=function(e){(0,a.default)(t,e);var r=_(t);function t(){return(0,n.default)(this,t),r.apply(this,arguments)}return(0,o.default)(t,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"render",value:function(){var e=this.context.$.state.list;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.Header,{title:"人物直达",hm:["tinygrail/search","TinygrailSearch"],statusBarEvents:!1,statusBarEventsType:"Tinygrail"}),(0,b.jsxs)(d.Page,{style:u._.container.tinygrail,children:[(0,b.jsx)(d.Flex,{style:this.styles.searchBar,children:(0,b.jsx)(h.default,{})}),e.length?(0,b.jsx)(y.default,{style:u._.mt.sm}):(0,b.jsx)(f.default,{style:u._.mt.sm})]})]})}},{key:"styles",get:function(){return(0,j.memoStyles)()}}]),t}(c.default.Component);r.default=(0,m.inject)(p.default)((0,m.obc)(x));try{search.displayName="search",search.__docgenInfo={description:"",displayName:"search",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/search/index.tsx#search"]={docgenInfo:search.__docgenInfo,name:"search",path:"src/screens/tinygrail/search/index.tsx#search"})}catch(e){}},"./src/screens/tinygrail/search/result/index.tsx":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.flat.js"),t("./node_modules/core-js/modules/es.function.name.js");var s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;s(t("./node_modules/react/index.js"));var n=s(t("./node_modules/react-native-web/dist/exports/View/index.js")),o=t("./src/components/index.ts"),a=t("./src/stores/index.ts"),i=t("./src/utils/index.ts"),l=t("./src/utils/decorators/index.ts"),c=t("./src/utils/fetch/index.ts"),d=t("./src/screens/tinygrail/search/result/styles.ts"),u=t("./node_modules/react/jsx-runtime.js");r.default=(0,l.obc)((function(e,r){var t=e.style,s=r.$,l=r.navigation,m=(0,d.memoStyles)(),f=s.state.list;return(0,u.jsx)(n.default,{style:t,children:f.map((function(e,r){return(0,u.jsx)(n.default,{style:m.item,children:(0,u.jsxs)(o.Flex,{style:(0,i.stl)(m.wrap,0!==r&&!a._.flat&&m.border),children:[!!e.icon&&(0,u.jsx)(n.default,{style:a._.mr.sm,children:(0,u.jsx)(o.Avatar,{src:(0,i.tinygrailOSS)(e.icon),size:28,borderColor:"transparent",skeletonType:"tinygrail",onPress:function(){(0,c.t)("人物直达.跳转",{to:"Mono",monoId:e.id}),l.push("Mono",{monoId:"character/"+e.id,_name:e.name})}})}),(0,u.jsx)(o.Flex.Item,{children:(0,u.jsx)(o.Touchable,{onPress:function(){if(s.addHistory(e.id),e.ico)return(0,c.t)("人物直达.跳转",{to:"TinygrailICODeal",monoId:e.id}),void l.push("TinygrailICODeal",{monoId:"character/"+e.id});(0,c.t)("人物直达.跳转",{to:"TinygrailDeal",monoId:e.id}),l.push("TinygrailDeal",{monoId:"character/"+e.id,type:"asks"})},children:(0,u.jsxs)(o.Text,{type:"tinygrailPlain",bold:!0,children:[(0,u.jsx)(o.Text,{type:"bid",children:e.ico?"[ICO] ":""}),e.name," #",e.id]})})})]})},r)}))})}))},"./src/screens/tinygrail/search/result/styles.ts":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(r,"__esModule",{value:!0}),r.memoStyles=void 0;var s=t("./src/stores/index.ts");r.memoStyles=s._.memoStyles((function(){return{item:{paddingLeft:s._.wind,backgroundColor:s._.colorTinygrailContainer},wrap:{paddingVertical:s._.sm+4,paddingRight:s._.wind},border:{borderTopColor:s._.colorTinygrailBorder,borderTopWidth:s._.hairlineWidth}}}))},"./src/screens/tinygrail/search/search-bar/index.tsx":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;s(t("./node_modules/react/index.js"));var n=t("./src/components/index.ts"),o=t("./src/stores/index.ts"),a=t("./src/utils/decorators/index.ts"),i=t("./src/screens/tinygrail/search/search-bar/styles.ts"),l=t("./node_modules/react/jsx-runtime.js");r.default=(0,a.obc)((function(e,r){var t=r.$,s=r.navigation,a=(0,i.memoStyles)(),c=t.state,d=c.value,u=c.searching;return(0,l.jsxs)(n.Flex,{children:[(0,l.jsx)(n.Flex.Item,{children:(0,l.jsx)(n.Input,{style:a.searchIpt,value:d,returnKeyType:"search",placeholder:"输入角色名字或id",placeholderTextColor:o._.colorTinygrailText,autoFocus:!0,onChange:t.onChange,onSubmitEditing:function(){return t.doSearch(s)}})}),(0,l.jsx)(n.Touchable,{style:o._.ml.sm,onPress:function(){u||t.doSearch(s)},children:(0,l.jsxs)(n.Flex,{style:a.btn,justify:"center",children:[u&&(0,l.jsx)(n.Flex,{children:(0,l.jsx)(n.Activity,{})}),(0,l.jsx)(n.Text,{type:"tinygrailText",children:"查询"})]})})]})}));try{searchbar.displayName="searchbar",searchbar.__docgenInfo={description:"",displayName:"searchbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/search/search-bar/index.tsx#searchbar"]={docgenInfo:searchbar.__docgenInfo,name:"searchbar",path:"src/screens/tinygrail/search/search-bar/index.tsx#searchbar"})}catch(e){}},"./src/screens/tinygrail/search/search-bar/styles.ts":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(r,"__esModule",{value:!0}),r.memoStyles=void 0;var s=t("./src/stores/index.ts");r.memoStyles=s._.memoStyles((function(){return{searchIpt:{height:34,paddingHorizontal:s._.wind,fontSize:14+s._.fontSizeAdjust,color:s._.colorTinygrailPlain,backgroundColor:s._.colorTinygrailContainer,borderColor:s._.colorTinygrailText,borderWidth:1,borderRadius:64},btn:{width:80,height:34,borderRadius:64,backgroundColor:s._.colorTinygrailContainer,borderColor:s._.colorTinygrailText,borderWidth:1}}}))},"./src/screens/tinygrail/search/store.ts":(e,r,t)=>{var s=t("./node_modules/@babel/runtime/regenerator/index.js");function n(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,s=new Array(r);t<r;t++)s[t]=e[t];return s}t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.reflect.construct.js"),t("./node_modules/core-js/modules/es.array.concat.js"),t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.array.includes.js"),t("./node_modules/core-js/modules/es.string.includes.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.string.trim.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.slice.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.array.from.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.symbol.js"),t("./node_modules/core-js/modules/es.symbol.description.js"),t("./node_modules/core-js/modules/es.symbol.iterator.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.array.is-array.js");var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),l=a(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),u=a(t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),m=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),f=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),y=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),h=a(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=t("./node_modules/mobx/dist/mobx.esm.js"),j=t("./src/stores/index.ts"),b=t("./src/utils/index.ts"),_=a(t("./src/utils/store/index.ts")),x=t("./src/utils/fetch/index.ts"),g=t("./src/screens/tinygrail/search/ds.ts");function v(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,y.default)(e);if(r){var n=(0,y.default)(this).constructor;t=Reflect.construct(s,arguments,n)}else t=s.apply(this,arguments);return(0,f.default)(this,t)}}r.default=function(e){(0,m.default)(t,e);var r=v(t);function t(){var e,o,a,d;(0,c.default)(this,t);for(var m=arguments.length,f=new Array(m),y=0;y<m;y++)f[y]=arguments[y];return e=r.call.apply(r,[this].concat(f)),(0,h.default)((0,u.default)(e),"state",(0,p.observable)(g.STATE)),(0,h.default)((0,u.default)(e),"init",(0,l.default)(s.mark((function r(){var t;return s.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.getStorage(g.NAMESPACE);case 2:return t=r.sent,e.setState(Object.assign({},t,g.EXCLUDE_STATE,{_loaded:!0})),r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})))),(0,h.default)((0,u.default)(e),"onChange",(function(r){var t=r.nativeEvent.text,s={value:t};""===t&&(s.list=[]),e.setState(s)})),(0,h.default)((0,u.default)(e),"addHistory",(function(r){var t=String(r),s=e.state.history,n=(0,i.default)(s);s.includes(t)?n=[t].concat((0,i.default)(n.filter((function(e){return e!==t})))):n.unshift(t),n.length>10&&n.pop(),e.setState({history:n}),e.setStorage(g.NAMESPACE)})),(0,h.default)((0,u.default)(e),"deleteHistory",(function(r){(0,x.t)("人物直达.删除历史",{value:r});var t=e.state.history;e.setState({history:t.filter((function(e){return e!==r}))}),e.setStorage(g.NAMESPACE)})),(0,h.default)((0,u.default)(e),"doSearch",(o=(0,l.default)(s.mark((function r(t,n){var o,a;return s.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=e.state.value,""!==(a=(n||o).trim())){r.next=5;break}return(0,b.info)("请输入关键字"),r.abrupt("return",!1);case 5:if(e.setState({searching:!0}),!/^\d+$/.test(a)){r.next=11;break}return r.next=9,e.doSearchNumber(t,a);case 9:r.next=13;break;case 11:return r.next=13,e.doSearchQuery(t,a);case 13:return e.setState({searching:!1}),r.abrupt("return",!0);case 15:case"end":return r.stop()}}),r)}))),function(e,r){return o.apply(this,arguments)})),(0,h.default)((0,u.default)(e),"doSearchQuery",(a=(0,l.default)(s.mark((function r(t,o){var a,i,l,c,d,u,m;return s.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.tinygrailStore.doSearch({keyword:o});case 2:if(a=r.sent,0===(i=a.data).State){r.next=7;break}return(0,b.info)("查询失败, 请重试"),r.abrupt("return",!1);case 7:l=i.Value.filter((function(e){return!e.ICO})).map((function(e){return e.Id})),c=n(l),r.prev=9,c.s();case 11:if((d=c.n()).done){r.next=17;break}return u=d.value,r.next=15,j.tinygrailStore.fetchCharacters([u]);case 15:r.next=11;break;case 17:r.next=22;break;case 19:r.prev=19,r.t0=r.catch(9),c.e(r.t0);case 22:return r.prev=22,c.f(),r.finish(22);case 25:return m=i.Value.map((function(e){return Object.assign({},j.tinygrailStore.characters(e.Id),{id:e.Id,ico:e.ICO,level:e.Level,name:e.Name})})),e.setState({list:m}),r.abrupt("return",!0);case 28:case"end":return r.stop()}}),r,null,[[9,19,22,25]])}))),function(e,r){return a.apply(this,arguments)})),(0,h.default)((0,u.default)(e),"doSearchNumber",(d=(0,l.default)(s.mark((function r(t,n){var o,a;return s.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.tinygrailStore.fetchCharacters([n]);case 3:a=r.sent,o=a[n].users?function(){return t.push("TinygrailICODeal",{monoId:n})}:function(){return t.push("TinygrailDeal",{monoId:n,type:"asks"})},r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),(0,b.info)("未有找到该id人物信息"),r.abrupt("return");case 11:(0,x.t)("人物直达.搜索",{value:n}),e.addHistory(n),o();case 14:case"end":return r.stop()}}),r,null,[[0,7]])}))),function(e,r){return d.apply(this,arguments)})),e}return(0,d.default)(t,[{key:"chara",value:function(e){return(0,p.computed)((function(){return j.tinygrailStore.characters(e)})).get()}}]),t}(_.default)},"./src/screens/tinygrail/search/styles.ts":(e,r,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(r,"__esModule",{value:!0}),r.memoStyles=void 0;var s=t("./src/stores/index.ts");r.memoStyles=s._.memoStyles((function(){return{searchBar:{paddingTop:s._.xs,paddingBottom:s._.sm,paddingHorizontal:s._.wind}}}))}}]);