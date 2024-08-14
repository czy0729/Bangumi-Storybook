(self.webpackChunkweb=self.webpackChunkweb||[]).push([[4647],{"./src/screens/tinygrail/_/item-advance/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.flat.js"),s("./node_modules/core-js/modules/es.parse-int.js"),s("./node_modules/core-js/modules/es.number.to-fixed.js"),s("./node_modules/core-js/modules/es.number.constructor.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(s("./node_modules/react/index.js"));var r=n(s("./node_modules/react-native-web/dist/exports/View/index.js")),o=s("./node_modules/mobx-react/dist/mobxreact.esm.js"),a=n(s("./node_modules/prop-types/index.js")),i=s("./src/components/index.ts"),l=s("./src/stores/index.ts"),d=s("./src/utils/index.ts"),c=s("./src/utils/app/index.ts"),u=s("./src/utils/fetch/index.ts"),m=s("./src/constants/index.ts"),p=n(s("./src/screens/tinygrail/_/rank/index.tsx")),f=s("./src/screens/tinygrail/_/utils.ts"),y=s("./src/screens/tinygrail/_/item-advance/styles.ts"),v=s("./node_modules/react/jsx-runtime.js");function x(e,t){var s=t.navigation,n=(0,y.memoStyles)(),o=e.event,a=void 0===o?m.EVENT:o,x=e.assets,j=e.index,_=e.id,h=e.name,g=e.icon,b=e.bonus,T=e.level,k=e.amount,S=e.current,O=e.firstAsks,R=e.firstBids,L=e.firstAmount,C=e.rate,I=e.rank,A=e.stars,P=e.mark,w=e.isAuctioning,E=a.id,M=a.data,B=!R&&!O,D=!!R,N=0===j;return(0,v.jsxs)(i.Flex,{style:n.container,align:"start",children:[(0,v.jsx)(r.default,{style:l._.mt.md,children:(0,v.jsx)(i.Avatar,{src:(0,c.tinygrailOSS)(g),name:h,borderColor:"transparent",skeletonType:"tinygrail",onPress:function(){(0,u.t)(E,Object.assign({to:"Mono",monoId:_},M)),s.push("Mono",{monoId:"character/"+_,_name:h})}})}),(0,v.jsx)(i.Flex.Item,{style:!N&&!l._.flat&&n.border,children:(0,v.jsx)(i.Touchable,{style:n.item,onPress:function(){if(B)return(0,u.t)(E,Object.assign({to:"TinygrailSacrifice",monoId:_},M)),void s.push("TinygrailSacrifice",{monoId:"character/"+_});(0,u.t)(E,Object.assign({to:"TinygrailDeal",monoId:_},M)),s.push("TinygrailDeal",{monoId:"character/"+_,type:D?"ask":"bid"})},children:(0,v.jsxs)(i.Flex,{children:[(0,v.jsxs)(i.Flex.Item,{children:[(0,v.jsxs)(i.Flex,{children:[(0,v.jsx)(p.default,{value:I}),(0,v.jsx)(i.Flex.Item,{children:(0,v.jsxs)(i.Text,{type:"tinygrailPlain",size:h.length>16?13:h.length>13?14:15,lineHeight:15,bold:!0,children:[j+1,". ",h,!!b&&(0,v.jsxs)(i.Text,{size:12,lineHeight:15,type:"warning",children:[" ","x",b]}),parseInt(T)>1&&(0,v.jsxs)(i.Text,{type:"ask",size:12,lineHeight:15,children:[" ","lv",T]})]})})]}),(0,v.jsxs)(i.Text,{style:l._.mt.xs,type:"tinygrailText",size:12,children:[!!k&&(0,v.jsxs)(i.Text,{type:"warning",size:12,bold:!0,children:[k,"股"]}),!!k&&" / ",!!L&&(0,v.jsxs)(i.Text,{type:D?"bid":"ask",size:12,bold:!0,children:[D&&"收",L,"股"]}),x&&(0,v.jsxs)(i.Text,{type:"bid",size:12,children:[x.state||"-"," (",x.sacrifices||"-",")"]}),x&&" / ",!!L&&" / ","₵",(0,d.toFixed)(O||R||S,2)," / +",(0,d.toFixed)(C,1)," (",Number((0,d.toFixed)((0,f.calculateRate)(C,I,A),1)),")"]})]}),w&&(0,v.jsxs)(i.Text,{style:l._.ml.sm,type:"bid",children:[" ","[竞拍中]"]}),(0,v.jsx)(i.Text,{style:l._.ml.md,type:"tinygrailPlain",size:16,children:P})]})})})]})}x.contextTypes={navigation:a.default.object};t.default=(0,o.observer)(x);try{itemadvance.displayName="itemadvance",itemadvance.__docgenInfo={description:"",displayName:"itemadvance",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/_/item-advance/index.tsx#itemadvance"]={docgenInfo:itemadvance.__docgenInfo,name:"itemadvance",path:"src/screens/tinygrail/_/item-advance/index.tsx#itemadvance"})}catch(e){}},"./src/screens/tinygrail/_/item-advance/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var n=s("./src/stores/index.ts");t.memoStyles=n._.memoStyles((function(){return{container:{paddingLeft:n._.wind,backgroundColor:n._.colorTinygrailContainer},active:{backgroundColor:n._.colorTinygrailActive},item:{paddingVertical:n._.md,paddingRight:n._.wind,paddingLeft:n._.sm},border:{borderTopColor:n._.colorTinygrailBorder,borderTopWidth:n._.hairlineWidth}}}))},"./src/screens/tinygrail/advance-ask/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(s("./node_modules/react/index.js")),c=s("./src/components/index.ts"),u=s("./src/screens/_/index.ts"),m=s("./src/stores/index.ts"),p=s("./src/utils/decorators/index.ts"),f=s("./src/utils/fetch/index.ts"),y=s("./src/utils/ui/index.ts"),v=n(s("./src/screens/tinygrail/_/tool-bar/index.tsx")),x=n(s("./src/screens/tinygrail/advance-ask/list/index.tsx")),j=n(s("./src/screens/tinygrail/advance-ask/store.ts")),_=s("./node_modules/react/jsx-runtime.js");function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,l.default)(e);if(t){var r=(0,l.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,i.default)(this,s)}}var g=function(e){(0,a.default)(s,e);var t=h(s);function s(){return(0,r.default)(this,s),t.apply(this,arguments)}return(0,o.default)(s,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"render",value:function(){var e=this.context.$,t=e.state.level;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(c.Header,{title:"买入推荐",hm:["tinygrail/advance-ask","TinygrailAdvanceAsk"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,_.jsx)(u.IconHeader,{name:"md-info-outline",color:m._.colorTinygrailPlain,onPress:function(){(0,f.t)("卖一推荐.提示"),(0,y.alert)("从活跃列表里面查找\n第一卖单股数 > 10 且 Max(流动股息, 圣殿股息) > 4\nMax(流动股息, 圣殿股息) / 第一卖单价 * 10 = 分数","当前计算方式")}})}}),(0,_.jsxs)(c.Page,{style:m._.container.tinygrail,children:[(0,_.jsx)(v.default,{style:m._.mt._sm,level:t,levelMap:e.levelMap,onLevelSelect:e.onLevelSelect}),(0,_.jsx)(x.default,{})]})]})}}]),s}(d.default.Component);t.default=(0,p.inject)(j.default)((0,p.obc)(g));try{advanceask.displayName="advanceask",advanceask.__docgenInfo={description:"",displayName:"advanceask",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/advance-ask/index.tsx#advanceask"]={docgenInfo:advanceask.__docgenInfo,name:"advanceask",path:"src/screens/tinygrail/advance-ask/index.tsx#advanceask"})}catch(e){}},"./src/screens/tinygrail/advance-ask/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),o=s("./src/stores/index.ts"),a=s("./src/utils/app/index.ts"),i=s("./src/utils/decorators/index.ts"),l=n(s("./src/screens/tinygrail/_/item-advance/index.tsx")),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,i.obc)((function(e,t){var s=t.$;if(!s.computedList._loaded)return(0,d.jsx)(r.Loading,{style:o._.container.flex,color:o._.colorTinygrailText});var n={id:"卖一推荐.跳转",data:{userId:s.myUserId}};return(0,d.jsx)(r.ListView,{style:o._.container.flex,contentContainerStyle:o._.container.bottom,keyExtractor:a.keyExtractor,refreshControlProps:{color:o._.colorTinygrailText},footerTextType:"tinygrailText",data:s.computedList,windowSize:6,initialNumToRender:24,maxToRenderPerBatch:24,updateCellsBatchingPeriod:24,lazy:24,scrollToTop:!0,renderItem:function(e){var t=e.item,s=e.index;return(0,d.jsx)(l.default,Object.assign({index:s,event:n},t))},onHeaderRefresh:s.fetchAdvanceList})}));try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/advance-ask/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/tinygrail/advance-ask/list/index.tsx#list"})}catch(e){}},"./src/screens/tinygrail/advance-ask/store.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.number.constructor.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.for-each.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),i=n(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=n(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),p=s("./node_modules/mobx/dist/mobx.esm.js"),f=s("./src/stores/index.ts"),y=s("./src/utils/index.ts"),v=n(s("./src/utils/store/index.ts")),x=s("./src/constants/index.ts"),j=s("./src/screens/tinygrail/_/utils.ts");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,d.default)(this,s)}}t.default=(r=function(e){(0,l.default)(s,e);var t=_(s);function s(){var e;(0,o.default)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,u.default)((0,i.default)(e),"state",(0,p.observable)({level:"",_loaded:!1})),(0,u.default)((0,i.default)(e),"init",(function(){e.advanceList._loaded||e.fetchAdvanceList(!1)})),(0,u.default)((0,i.default)(e),"fetchAdvanceList",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=e.advanceList._loaded;return s?!e.advance&&(0,y.getTimestamp)()-Number(s)<14400?(t&&(0,y.info)("普通用户4小时内只能刷新一次"),!0):!x.DEV&&e.advance&&(0,y.getTimestamp)()-Number(s)<60?(t&&(0,y.info)("为避免服务器压力, 1分钟后再刷新吧"),!0):f.tinygrailStore.fetchAdvanceList():f.tinygrailStore.fetchAdvanceList()})),(0,u.default)((0,i.default)(e),"onLevelSelect",(function(t){e.setState({level:t})})),e}return(0,a.default)(s,[{key:"myUserId",get:function(){return f.userStore.myUserId}},{key:"advance",get:function(){return f.tinygrailStore.advance}},{key:"advanceList",get:function(){return f.tinygrailStore.advanceList}},{key:"computedList",get:function(){var e=this.state.level,t=this.advanceList;if(!t._loaded)return t;var s=t;return e&&(s=Object.assign({},s,{list:(0,j.levelList)(e,s.list)})),s}},{key:"levelMap",get:function(){var e=this.advanceList.list,t={};return e.forEach((function(e){return t[e.level]?t[e.level]+=1:t[e.level]=1})),t}}]),s}(v.default),(0,m.default)(r.prototype,"myUserId",[p.computed],Object.getOwnPropertyDescriptor(r.prototype,"myUserId"),r.prototype),(0,m.default)(r.prototype,"advance",[p.computed],Object.getOwnPropertyDescriptor(r.prototype,"advance"),r.prototype),(0,m.default)(r.prototype,"advanceList",[p.computed],Object.getOwnPropertyDescriptor(r.prototype,"advanceList"),r.prototype),(0,m.default)(r.prototype,"computedList",[p.computed],Object.getOwnPropertyDescriptor(r.prototype,"computedList"),r.prototype),(0,m.default)(r.prototype,"levelMap",[p.computed],Object.getOwnPropertyDescriptor(r.prototype,"levelMap"),r.prototype),r)}}]);