(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6197],{"./src/screens/tinygrail/rich/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/tinygrail/rich/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"Component")},"./src/screens/tinygrail/rich/component/item/avatar/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),i=s("./src/components/index.ts"),o=s("./src/stores/index.ts"),a=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),c=s("./src/utils/fetch/index.ts"),d=s("./src/screens/tinygrail/rich/component/item/avatar/styles.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var s=e.avatar,r=e.nickname,l=e.userId,m=e.lastActiveDate,p=t.navigation,f=(0,d.memoStyles)(),h=(0,a.getTimestamp)(m.replace("T"," "));return(0,u.jsx)(n.default,{style:o._.mt.md,children:(0,u.jsx)(i.UserStatus,{style:f.userStatus,last:h,children:(0,u.jsx)(i.Avatar,{src:(0,a.tinygrailOSS)(s),size:36,borderColor:"transparent",skeletonType:"tinygrail",name:r,onPress:function(){(0,c.t)("番市首富.跳转",{to:"Zone",userId:l}),p.push("Zone",{userId:l,from:"tinygrail"})}})})})}))},"./src/screens/tinygrail/rich/component/item/avatar/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{userStatus:{backgroundColor:r._.colorTinygrailContainer}}}))},"./src/screens/tinygrail/rich/component/item/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/tinygrail/rich/component/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"Item")},"./src/screens/tinygrail/rich/component/item/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),i=s("./src/components/index.ts"),o=s("./src/stores/index.ts"),a=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),c=s("./src/utils/fetch/index.ts"),d=s("./src/screens/tinygrail/_/utils.ts"),u=r(s("./src/screens/tinygrail/rich/component/item/avatar/index.tsx")),m=s("./src/screens/tinygrail/rich/component/item/ds.ts"),p=s("./src/screens/tinygrail/rich/component/item/styles.ts"),f=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var s,r=e.index,l=e.title,m=e.page,h=e.limit,y=e.avatar,j=e.userId,x=e.nickname,_=e.total,g=e.share,b=e.assets,v=e.principal,T=e.lastActiveDate,O=e.lastIndex,S=e.state,C=t.navigation,P=(0,p.memoStyles)(),N=(0,a.getTimestamp)(T.replace("T"," ")),R=(0,d.decimal)(Math.abs(_)),M=(0,d.decimal)(Math.abs(b)),E=(0,d.decimal)(Math.abs(g)),I=r+1+(m-1)*h,k="";if(0===O)k="new",s="warning";else{var A=O-I;A<0?(k=A,s="ask"):A>0&&(k="+"+A,s="bid")}var w="",B="";if("股息"===l)w="总值"+M+" / 流动资金"+R,B=E;else if("余额"===l)w="总值"+M+" / 股息"+E,B=R;else if("初始"===l){w="总值"+M+" / 股息"+E+" / 流动资金"+R,B=(0,d.decimal)(Math.abs(v))}else w="周股息"+E+" / 流动资金"+R+" / "+(0,a.lastDate)(N),B=M;return(0,f.jsx)(n.default,{style:P.container,children:(0,f.jsxs)(i.Flex,{align:"start",children:[(0,f.jsx)(u.default,{avatar:y,nickname:x,userId:j,lastActiveDate:T}),(0,f.jsx)(i.Flex.Item,{style:P.wrap,children:(0,f.jsx)(i.Flex,{align:"start",children:(0,f.jsx)(i.Flex.Item,{style:o._.mr.sm,children:(0,f.jsx)(i.Touchable,{style:P.item,onPress:function(){(0,c.t)("番市首富.跳转",{to:"TinygrailTree",userId:j}),C.push("TinygrailTree",{userName:j,name:x})},children:(0,f.jsxs)(i.Flex,{children:[(0,f.jsxs)(i.Flex.Item,{children:[(0,f.jsxs)(i.Flex,{children:[(0,f.jsx)(i.Text,{style:P.rank,size:12,bold:!0,align:"center",children:I}),(0,f.jsxs)(i.Text,{type:666===S?"ask":"tinygrailPlain",bold:!0,children:[x,!!k&&(0,f.jsxs)(i.Text,{type:s,size:15,children:[" ",k]})]})]}),(0,f.jsx)(i.Text,{style:o._.mt.xs,type:"tinygrailText",size:12,lineHeight:13,children:w})]}),(0,f.jsx)(i.Text,{style:o._.ml.sm,type:"tinygrailPlain",children:B}),(0,f.jsx)(i.Iconfont,{style:o._.mr._sm,name:"md-navigate-next",color:o._.colorTinygrailText})]})})})})})]})})}),m.COMPONENT)},"./src/screens/tinygrail/rich/component/item/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{container:{paddingLeft:r._.wind,backgroundColor:r._.colorTinygrailContainer},wrap:{paddingRight:r._.wind-r._._wind},item:{paddingVertical:r._.md,paddingHorizontal:r._.sm,borderRadius:r._.radiusXs,overflow:"hidden"},bonus:{position:"absolute",zIndex:1,top:10,right:2,width:18,height:18,borderRadius:9,backgroundColor:r._.colorWarning,overflow:"hidden"},rank:{minWidth:20,marginRight:6,color:r._.__colorPlain__,textShadowOffset:{width:1,height:1},textShadowRadius:1,textShadowColor:"rgba(0, 0, 0, 0.48)",backgroundColor:"#ffc107",borderRadius:4,overflow:"hidden"},amount:{marginRight:-r._.xs,marginLeft:r._.md}}}))},"./src/screens/tinygrail/rich/component/list/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/tinygrail/rich/component/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"List")},"./src/screens/tinygrail/rich/component/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.sort.js"),s("./node_modules/core-js/modules/es.array.slice.js"),s("./node_modules/core-js/modules/es.parse-int.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.object.assign.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/slicedToArray.js")),i=(r(s("react")),s("./node_modules/mobx/dist/mobx.esm.js")),o=s("./src/components/index.ts"),a=s("./src/stores/index.ts"),l=s("./src/utils/decorators/index.ts"),c=s("./src/screens/tinygrail/styles.ts"),d=s("./src/screens/tinygrail/rich/ds.ts"),u=r(s("./src/screens/tinygrail/rich/component/item/index.tsx")),m=s("./src/screens/tinygrail/rich/component/list/ds.ts"),p=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var s=e.id,r=e.title,l=void 0===r?"全部":r,m=t.$,f=m.rich(s);if(!f._loaded)return(0,p.jsx)(o.Loading,{style:a._.container.flex,color:a._.colorTinygrailText});var h=f;l===d.TABS[1].title?(h=(0,i.toJS)(f)).list=h.list.slice().sort((function(e,t){return parseInt(t.share)-parseInt(e.share)})):l===d.TABS[2].title?(h=(0,i.toJS)(f)).list=h.list.slice().sort((function(e,t){return parseInt(t.total)-parseInt(e.total)})):l===d.TABS[3].title&&((h=(0,i.toJS)(f)).list=h.list.slice().sort((function(e,t){return parseInt(t.principal)-parseInt(e.principal)})));var y=s.split("/"),j=(0,n.default)(y,2),x=j[0],_=j[1];return(0,p.jsx)(o.ListView,{style:a._.container.flex,contentContainerStyle:a._.container.bottom,keyExtractor:function(e){return String(null==e?void 0:e.userId)},refreshControlProps:c.refreshControlProps,footerTextType:"tinygrailText",data:h,windowSize:6,initialNumToRender:24,maxToRenderPerBatch:24,updateCellsBatchingPeriod:24,lazy:24,scrollToTop:d.TABS[m.state.page].title===l,renderItem:function(e){var t=e.item,s=e.index;return(0,p.jsx)(u.default,Object.assign({index:s,title:l,page:parseInt(x),limit:parseInt(_)},t))},onHeaderRefresh:function(){return m.fetchRich(s)}})}),m.COMPONENT)},"./src/screens/tinygrail/rich/component/tabs/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/tinygrail/rich/component/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"Tabs")},"./src/screens/tinygrail/rich/component/tabs/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=s("./src/utils/decorators/index.ts"),i=r(s("./src/screens/tinygrail/_/tabs-v2/index.tsx")),o=s("./src/screens/tinygrail/rich/ds.ts"),a=s("./src/screens/tinygrail/rich/component/tabs/utils.tsx"),l=s("./src/screens/tinygrail/rich/component/tabs/ds.ts"),c=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ob)((function(){return(0,c.jsx)(i.default,{routes:o.TABS,renderItem:a.renderItem})}),l.COMPONENT)},"./src/screens/tinygrail/rich/component/tabs/utils.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.renderItem=o;var n=r(s("./src/screens/tinygrail/rich/component/list/index.tsx")),i=s("./node_modules/react/jsx-runtime.js");function o(e){return(0,i.jsx)(n.default,{id:e.key,title:e.title},e.key)}try{o.displayName="renderItem",o.__docgenInfo={description:"",displayName:"renderItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/rich/component/tabs/utils.tsx#renderItem"]={docgenInfo:o.__docgenInfo,name:"renderItem",path:"src/screens/tinygrail/rich/component/tabs/utils.tsx#renderItem"})}catch(e){}},"./src/screens/tinygrail/rich/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.TABS=t.STATE=t.NAMESPACE=t.COMPONENT=void 0;var r=t.COMPONENT="TinygrailRich";t.NAMESPACE="Screen"+r,t.TABS=[{title:"1-100",key:"1/100"},{title:"周股息",key:"1/100/0"},{title:"流动资金",key:"1/100/1"},{title:"初始资金",key:"1/100/3"}],t.STATE={page:0,_loaded:!1}},"./src/screens/tinygrail/rich/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),n=s("./src/screens/tinygrail/rich/ds.ts");t.COMPONENT=(0,r.rc)(n.COMPONENT,"Header")},"./src/screens/tinygrail/rich/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=s("./src/components/index.ts"),i=s("./src/screens/_/index.ts"),o=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),l=s("./src/utils/fetch/index.ts"),c=s("./src/screens/tinygrail/rich/header/ds.ts"),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=t.navigation;return(0,d.jsx)(n.Header,{title:"番市首富",hm:["tinygrail/rich","TinygrailRich"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,d.jsx)(i.IconTouchable,{style:o._.mr.xs,name:"md-insert-chart-outlined",color:o._.colorTinygrailPlain,onPress:function(){(0,l.t)("番市首富.跳转",{to:"TinygrailTreeRich"}),s.push("TinygrailTreeRich")}})}})}),c.COMPONENT);try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/rich/header/index.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"src/screens/tinygrail/rich/header/index.tsx#header"})}catch(e){}},"./src/screens/tinygrail/rich/hooks.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.useTinygrailRichPage=function(e){var t=e.$;(0,r.useRunAfter)((function(){t.init()}))};var r=s("./src/utils/hooks/index.ts")},"./src/screens/tinygrail/rich/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var n=s("./src/components/index.ts"),i=s("./src/stores/index.ts"),o=s("./src/utils/decorators/index.ts"),a=s("./src/utils/hooks/index.ts"),l=r(s("./src/screens/tinygrail/rich/component/tabs/index.tsx")),c=r(s("./src/screens/tinygrail/rich/header/index.tsx")),d=s("./src/screens/tinygrail/rich/hooks.ts"),u=r(s("./src/screens/tinygrail/rich/store.tsx")),m=s("./node_modules/react/jsx-runtime.js");t.default=(0,o.ic)(u.default,(function(e,t){(0,d.useTinygrailRichPage)(t);var s=t.$;return(0,a.useObserver)((function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.default,{}),(0,m.jsx)(n.Page,{style:i._.container.tinygrail,loaded:s.state._loaded,children:(0,m.jsx)(l.default,{})})]})}))}));try{rich.displayName="rich",rich.__docgenInfo={description:"",displayName:"rich",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/rich/index.tsx#rich"]={docgenInfo:rich.__docgenInfo,name:"rich",path:"src/screens/tinygrail/rich/index.tsx#rich"})}catch(e){}},"./src/screens/tinygrail/rich/store.tsx":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.number.constructor.js"),s("./node_modules/core-js/modules/es.object.assign.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),o=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=n(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=s("./node_modules/mobx/dist/mobx.esm.js"),f=s("./src/stores/index.ts"),h=s("./src/utils/index.ts"),y=s("./src/utils/fetch/index.ts"),j=n(s("./src/utils/store/index.ts")),x=s("./src/screens/tinygrail/rich/ds.ts");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;s=Reflect.construct(r,arguments,n)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=_(s);function s(){var e;(0,o.default)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),(0,m.default)((0,l.default)(e),"state",(0,p.observable)(x.STATE)),(0,m.default)((0,l.default)(e),"init",(0,i.default)(r.mark((function t(){var s,n,i,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.state._loaded,n=(0,h.getTimestamp)(),i=!s||n-Number(s)>60,t.t0=e,t.t1=Object,t.t2={},t.next=8,e.getStorage(x.NAMESPACE);case 8:return t.t3=t.sent,t.t4={_loaded:i?n:s},t.t5=t.t1.assign.call(t.t1,t.t2,t.t3,t.t4),t.t0.setState.call(t.t0,t.t5),i&&(o=e.state.page,e.fetchRich(e.key(o))),t.abrupt("return",!0);case 14:case"end":return t.stop()}}),t)})))),(0,m.default)((0,l.default)(e),"fetchRich",(function(e){return f.tinygrailStore.fetchRich(e)})),(0,m.default)((0,l.default)(e),"onChange",(function(t){t!==e.state.page&&((0,y.t)("番市首富.标签页切换",{page:t}),e.setState({page:t}),e.setStorage(x.NAMESPACE),e.tabChangeCallback(t))})),(0,m.default)((0,l.default)(e),"tabChangeCallback",(function(t){var s=e.key(t);e.rich(s)._loaded||e.fetchRich(s)})),e}return(0,a.default)(s,[{key:"key",value:function(e){return(0,p.computed)((function(){return x.TABS[e].key})).get()}},{key:"title",value:function(e){return(0,p.computed)((function(){return x.TABS[e].title})).get()}},{key:"rich",value:function(e){return(0,p.computed)((function(){return f.tinygrailStore.rich(e)})).get()}}]),s}(j.default)}}]);