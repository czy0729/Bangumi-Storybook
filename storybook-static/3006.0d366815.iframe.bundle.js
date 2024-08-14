(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3006],{"./src/screens/tinygrail/_/item-advance/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.flat.js"),s("./node_modules/core-js/modules/es.parse-int.js"),s("./node_modules/core-js/modules/es.number.to-fixed.js"),s("./node_modules/core-js/modules/es.number.constructor.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(s("./node_modules/react/index.js"));var r=n(s("./node_modules/react-native-web/dist/exports/View/index.js")),i=s("./node_modules/mobx-react/dist/mobxreact.esm.js"),a=n(s("./node_modules/prop-types/index.js")),o=s("./src/components/index.ts"),c=s("./src/stores/index.ts"),d=s("./src/utils/index.ts"),l=s("./src/utils/app/index.ts"),u=s("./src/utils/fetch/index.ts"),f=s("./src/constants/index.ts"),m=n(s("./src/screens/tinygrail/_/rank/index.tsx")),p=s("./src/screens/tinygrail/_/utils.ts"),y=s("./src/screens/tinygrail/_/item-advance/styles.ts"),x=s("./node_modules/react/jsx-runtime.js");function _(e,t){var s=t.navigation,n=(0,y.memoStyles)(),i=e.event,a=void 0===i?f.EVENT:i,_=e.assets,j=e.index,v=e.id,h=e.name,b=e.icon,g=e.bonus,S=e.level,T=e.amount,O=e.current,R=e.firstAsks,C=e.firstBids,I=e.firstAmount,P=e.rate,k=e.rank,A=e.stars,w=e.mark,L=e.isAuctioning,E=a.id,B=a.data,D=!C&&!R,N=!!C,z=0===j;return(0,x.jsxs)(o.Flex,{style:n.container,align:"start",children:[(0,x.jsx)(r.default,{style:c._.mt.md,children:(0,x.jsx)(o.Avatar,{src:(0,l.tinygrailOSS)(b),name:h,borderColor:"transparent",skeletonType:"tinygrail",onPress:function(){(0,u.t)(E,Object.assign({to:"Mono",monoId:v},B)),s.push("Mono",{monoId:"character/"+v,_name:h})}})}),(0,x.jsx)(o.Flex.Item,{style:!z&&!c._.flat&&n.border,children:(0,x.jsx)(o.Touchable,{style:n.item,onPress:function(){if(D)return(0,u.t)(E,Object.assign({to:"TinygrailSacrifice",monoId:v},B)),void s.push("TinygrailSacrifice",{monoId:"character/"+v});(0,u.t)(E,Object.assign({to:"TinygrailDeal",monoId:v},B)),s.push("TinygrailDeal",{monoId:"character/"+v,type:N?"ask":"bid"})},children:(0,x.jsxs)(o.Flex,{children:[(0,x.jsxs)(o.Flex.Item,{children:[(0,x.jsxs)(o.Flex,{children:[(0,x.jsx)(m.default,{value:k}),(0,x.jsx)(o.Flex.Item,{children:(0,x.jsxs)(o.Text,{type:"tinygrailPlain",size:h.length>16?13:h.length>13?14:15,lineHeight:15,bold:!0,children:[j+1,". ",h,!!g&&(0,x.jsxs)(o.Text,{size:12,lineHeight:15,type:"warning",children:[" ","x",g]}),parseInt(S)>1&&(0,x.jsxs)(o.Text,{type:"ask",size:12,lineHeight:15,children:[" ","lv",S]})]})})]}),(0,x.jsxs)(o.Text,{style:c._.mt.xs,type:"tinygrailText",size:12,children:[!!T&&(0,x.jsxs)(o.Text,{type:"warning",size:12,bold:!0,children:[T,"股"]}),!!T&&" / ",!!I&&(0,x.jsxs)(o.Text,{type:N?"bid":"ask",size:12,bold:!0,children:[N&&"收",I,"股"]}),_&&(0,x.jsxs)(o.Text,{type:"bid",size:12,children:[_.state||"-"," (",_.sacrifices||"-",")"]}),_&&" / ",!!I&&" / ","₵",(0,d.toFixed)(R||C||O,2)," / +",(0,d.toFixed)(P,1)," (",Number((0,d.toFixed)((0,p.calculateRate)(P,k,A),1)),")"]})]}),L&&(0,x.jsxs)(o.Text,{style:c._.ml.sm,type:"bid",children:[" ","[竞拍中]"]}),(0,x.jsx)(o.Text,{style:c._.ml.md,type:"tinygrailPlain",size:16,children:w})]})})})]})}_.contextTypes={navigation:a.default.object};t.default=(0,i.observer)(_);try{itemadvance.displayName="itemadvance",itemadvance.__docgenInfo={description:"",displayName:"itemadvance",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/_/item-advance/index.tsx#itemadvance"]={docgenInfo:itemadvance.__docgenInfo,name:"itemadvance",path:"src/screens/tinygrail/_/item-advance/index.tsx#itemadvance"})}catch(e){}},"./src/screens/tinygrail/_/item-advance/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var n=s("./src/stores/index.ts");t.memoStyles=n._.memoStyles((function(){return{container:{paddingLeft:n._.wind,backgroundColor:n._.colorTinygrailContainer},active:{backgroundColor:n._.colorTinygrailActive},item:{paddingVertical:n._.md,paddingRight:n._.wind,paddingLeft:n._.sm},border:{borderTopColor:n._.colorTinygrailBorder,borderTopWidth:n._.hairlineWidth}}}))},"./src/screens/tinygrail/advance-sacrifice/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),o=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(s("./node_modules/react/index.js")),l=n(s("./node_modules/react-native-web/dist/exports/View/index.js")),u=s("./src/screens/_/index.ts"),f=s("./src/stores/index.ts"),m=s("./src/utils/decorators/index.ts"),p=s("./src/utils/fetch/index.ts"),y=s("./src/utils/ui/index.ts"),x=s("./src/screens/tinygrail/styles.ts"),_=n(s("./src/screens/tinygrail/advance-sacrifice/list/index.tsx")),j=n(s("./src/screens/tinygrail/advance-sacrifice/store.ts")),v=s("./node_modules/react/jsx-runtime.js");function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,c.default)(e);if(t){var r=(0,c.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,o.default)(this,s)}}var b=function(e){(0,a.default)(s,e);var t=h(s);function s(){return(0,r.default)(this,s),t.apply(this,arguments)}return(0,i.default)(s,[{key:"componentDidMount",value:function(){var e=this.context,t=e.$,s=e.navigation;t.init(),s.setParams({extra:(0,v.jsx)(u.IconHeader,{style:f._.mr._right,name:"md-info-outline",color:f._.colorTinygrailPlain,onPress:function(){(0,p.t)("献祭推荐.提示"),(0,y.alert)("从持仓列表里面查找\n圣殿股息 - 流动股息 = 分数","当前计算方式")}})})}},{key:"render",value:function(){return(0,v.jsx)(l.default,{style:f._.container.tinygrail,children:(0,v.jsx)(_.default,{})})}}]),s}(d.default.Component);t.default=(0,m.inject)(j.default)((0,m.withHeader)({screen:"献祭推荐",hm:["tinygrail/advance-sacrifice","TinygrailAdvanceSacrifice"],withHeaderParams:x.withHeaderParams})((0,m.obc)(b)));try{advancesacrifice.displayName="advancesacrifice",advancesacrifice.__docgenInfo={description:"",displayName:"advancesacrifice",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/advance-sacrifice/index.tsx#advancesacrifice"]={docgenInfo:advancesacrifice.__docgenInfo,name:"advancesacrifice",path:"src/screens/tinygrail/advance-sacrifice/index.tsx#advancesacrifice"})}catch(e){}},"./src/screens/tinygrail/advance-sacrifice/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),i=s("./src/stores/index.ts"),a=s("./src/utils/index.ts"),o=s("./src/utils/decorators/index.ts"),c=n(s("./src/screens/tinygrail/_/item-advance/index.tsx")),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,o.obc)((function(e,t){var s=t.$;if(!s.advanceSacrificeList._loaded)return(0,d.jsx)(r.Loading,{style:i._.container.flex,color:i._.colorTinygrailText});var n={id:"献祭推荐.跳转",data:{userId:s.myUserId}};return(0,d.jsx)(r.ListView,{style:i._.container.flex,contentContainerStyle:i._.container.bottom,keyExtractor:a.keyExtractor,refreshControlProps:{color:i._.colorTinygrailText},footerTextType:"tinygrailText",data:s.advanceSacrificeList,windowSize:6,initialNumToRender:24,maxToRenderPerBatch:24,updateCellsBatchingPeriod:24,lazy:24,scrollToTop:!0,renderItem:function(e){var t=e.item,s=e.index;return(0,d.jsx)(c.default,Object.assign({index:s,event:n},t))},onHeaderRefresh:s.fetchAdvanceSacrificeList})}));try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/advance-sacrifice/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/tinygrail/advance-sacrifice/list/index.tsx#list"})}catch(e){}},"./src/screens/tinygrail/advance-sacrifice/store.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.number.constructor.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var n=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=n(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(s("./node_modules/@babel/runtime/helpers/createClass.js")),o=n(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=n(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=n(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=n(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),m=s("./node_modules/mobx/dist/mobx.esm.js"),p=s("./src/stores/index.ts"),y=s("./src/utils/index.ts"),x=n(s("./src/utils/store/index.ts")),_=s("./src/constants/index.ts");function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,n=(0,l.default)(e);if(t){var r=(0,l.default)(this).constructor;s=Reflect.construct(n,arguments,r)}else s=n.apply(this,arguments);return(0,d.default)(this,s)}}t.default=(r=function(e){(0,c.default)(s,e);var t=j(s);function s(){var e;(0,i.default)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r)),(0,u.default)((0,o.default)(e),"init",(function(){e.advanceSacrificeList._loaded||e.fetchAdvanceSacrificeList(!1)})),(0,u.default)((0,o.default)(e),"fetchAdvanceSacrificeList",(function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=e.advanceSacrificeList._loaded;return s?!e.advance&&(0,y.getTimestamp)()-Number(s)<14400?(t&&(0,y.info)("普通用户4小时内只能刷新一次"),!0):!_.DEV&&e.advance&&(0,y.getTimestamp)()-Number(s)<60?(t&&(0,y.info)("为避免服务器压力, 1分钟后再刷新吧"),!0):p.tinygrailStore.fetchAdvanceSacrificeList():p.tinygrailStore.fetchAdvanceSacrificeList()})),e}return(0,a.default)(s,[{key:"advance",get:function(){return p.tinygrailStore.advance}},{key:"advanceSacrificeList",get:function(){return p.tinygrailStore.advanceSacrificeList}},{key:"myUserId",get:function(){return p.userStore.myUserId}}]),s}(x.default),(0,f.default)(r.prototype,"advance",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"advance"),r.prototype),(0,f.default)(r.prototype,"advanceSacrificeList",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"advanceSacrificeList"),r.prototype),(0,f.default)(r.prototype,"myUserId",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"myUserId"),r.prototype),r)}}]);