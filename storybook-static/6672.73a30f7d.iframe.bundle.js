(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6672],{"./src/screens/tinygrail/deal/depth/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.for-each.js"),r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.array.reverse.js"),r("./node_modules/core-js/modules/es.array.filter.js"),r("./node_modules/core-js/modules/es.array.sort.js"),r("./node_modules/core-js/modules/es.array.slice.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js"),r("./node_modules/core-js/modules/es.array.find-index.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./src/screens/tinygrail/deal/depth/styles.ts"),c=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r=t.$,s=r.depth,a=s.asks,u=void 0===a?[]:a,m=s.bids,p=void 0===m?[]:m;if(!s._loaded)return null;var f=(0,d.memoStyles)(),x=r.chara,y=x.current,j=x.fluctuation,h=r.userLogs,b=h.bids,g=h.asks,_="tinygrailPlain";j>0?_="bid":j<0&&(_="ask");var v=0,T=0,I=0;p.forEach((function(e){(!v||e.price<v)&&(v=e.price),(!T||e.price>T)&&(T=e.price),I+=e.amount}));var k=0,P=0,S=0;u.forEach((function(e){(!k||e.price<P)&&(k=e.price),(!P||e.price>k)&&(P=e.price),S+=e.amount}));var w=0,F=0,C=0;return(0,c.jsxs)(n.default,{style:f.container,children:[(0,c.jsxs)(o.Flex,{style:f.header,children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Text,{type:"tinygrailText",size:11,children:"价格"})}),(0,c.jsx)(o.Text,{type:"tinygrailText",size:11,children:"数量"})]}),(0,c.jsxs)(n.default,{style:i._.mt.sm,children:[(0,c.jsx)(o.Flex,{style:f.list,direction:"column",justify:"end",children:u.slice().sort((function(e,t){return(e.price||-1e7)-(t.price||-1e7)})).filter((function(e,t){return t<5||(C+=e.amount,!1)})).reverse().map((function(e,t){var s=(0,l.toFixed)(e.price,0),a=-1!==g.findIndex((function(e){return s===(0,l.toFixed)(e.price,0)})),d=(S-C-F)/(S+C)*100;return F+=e.amount,(0,c.jsx)(o.Touchable,{style:i._.container.block,onPress:function(){return r.changeValue((0,l.toFixed)(e.price,2),e.amount)},children:(0,c.jsxs)(o.Flex,{style:f.item,children:[a&&(0,c.jsx)(n.default,{style:f.dotAsk}),(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Text,{style:i._.ml.sm,type:"ask",size:12,children:(0,l.toFixed)(e.price,2)})}),(0,c.jsx)(o.Text,{style:i._.mr.wind,type:"tinygrailText",size:12,children:e.amount}),(0,c.jsx)(n.default,{style:[f.depthAsks,{width:d+"%"}]})]})},t)}))}),(0,c.jsxs)(o.Flex,{style:f.current,children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Touchable,{onPress:function(){return r.changeValue((0,l.toFixed)(y,2))},children:(0,c.jsxs)(o.Text,{type:_,size:18,bold:!0,children:[(0,l.toFixed)(y,2)," "]})})}),!!r.issuePrice&&(0,c.jsxs)(o.Text,{type:"tinygrailText",size:11,children:["发行价 ",(0,l.toFixed)(r.issuePrice,1)]})]}),(0,c.jsx)(n.default,{style:f.list,children:p.slice().sort((function(e,t){return(t.price||1e7)-(e.price||1e7)})).filter((function(e,t){return t<5})).map((function(e,t){var s=(0,l.toFixed)(e.price,0),a=-1!==b.findIndex((function(e){return s===(0,l.toFixed)(e.price,0)}));return w+=e.amount,(0,c.jsx)(o.Touchable,{style:i._.container.block,onPress:function(){return r.changeValue((0,l.toFixed)(e.price,2),e.amount)},children:(0,c.jsxs)(o.Flex,{style:f.item,children:[a&&(0,c.jsx)(n.default,{style:f.dotBid}),(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Text,{style:i._.ml.sm,type:"bid",size:12,children:(0,l.toFixed)(e.price,2)})}),(0,c.jsx)(o.Text,{style:i._.mr.wind,type:"tinygrailText",size:12,children:e.amount}),(0,c.jsx)(n.default,{style:[f.depthBids,{width:w/I*100+"%"}]})]})},t)}))})]})]})}))},"./src/screens/tinygrail/deal/depth/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=r("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{container:{paddingVertical:s._.sm},header:{paddingLeft:s._.sm,paddingRight:s._.wind},list:{minHeight:128},current:{paddingVertical:s._.sm,paddingHorizontal:s._.sm},item:{width:"100%",paddingVertical:5},depthBids:{position:"absolute",zIndex:-1,top:0,right:0,bottom:0,backgroundColor:s._.colorDepthBid},depthAsks:{position:"absolute",zIndex:-1,top:0,right:0,bottom:0,backgroundColor:s._.colorDepthAsk},dotBid:{width:5,height:5,marginLeft:-5,borderRadius:5,backgroundColor:s._.colorBid},dotAsk:{width:5,height:5,marginLeft:-5,borderRadius:5,backgroundColor:s._.colorAsk}}}))},"./src/screens/tinygrail/deal/ds.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.NAMESPACE=t.EXCLUDE_STATE=t.DEFAULT_TYPE=void 0;t.NAMESPACE="ScreenTinygrailDeal";var s=t.DEFAULT_TYPE="bid",n=t.EXCLUDE_STATE={type:s,value:0,amount:0,expand:!1,loading:!1};t.STATE=Object.assign({},n,{isIce:!1,_loaded:!1})},"./src/screens/tinygrail/deal/form/btns.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=r("./src/components/index.ts"),o=r("./src/stores/index.ts"),i=r("./src/utils/index.ts"),l=r("./src/utils/decorators/index.ts"),a=r("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var r=t.$,s=d(),l="bid"===r.state.type;return(0,a.jsxs)(n.Flex,{children:[(0,a.jsx)(n.Flex.Item,{children:(0,a.jsx)(n.Touchable,{style:(0,i.stl)(s.btn,l&&s.btnBid),onPress:function(){return r.toggleType("bid")},children:(0,a.jsx)(n.Text,{style:{color:l?o._.__colorPlain__:o._.colorTinygrailText},align:"center",children:"买入"})})}),(0,a.jsx)(n.Flex.Item,{style:o._.ml.sm,children:(0,a.jsx)(n.Touchable,{style:(0,i.stl)(s.btn,!l&&s.btnAsk),onPress:function(){return r.toggleType("ask")},children:(0,a.jsx)(n.Text,{style:{color:l?o._.colorTinygrailText:o._.__colorPlain__},align:"center",children:"卖出"})})})]})}));var d=o._.memoStyles((function(){return{btn:{padding:8,marginBottom:8,backgroundColor:o._.colorTinygrailBorder},btnBid:{backgroundColor:o._.colorBid},btnAsk:{backgroundColor:o._.colorAsk}}}))},"./src/screens/tinygrail/deal/form/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/stores/index.ts"),i=r("./src/utils/decorators/index.ts"),l=s(r("./src/screens/tinygrail/deal/form/btns.tsx")),a=s(r("./src/screens/tinygrail/deal/form/stepper.tsx")),d=s(r("./src/screens/tinygrail/deal/form/slider.tsx")),c=s(r("./src/screens/tinygrail/deal/form/submit.tsx")),u=r("./node_modules/react/jsx-runtime.js");t.default=(0,i.ob)((function(){var e=m();return(0,u.jsxs)(n.default,{style:e.container,children:[(0,u.jsx)(l.default,{}),(0,u.jsx)(a.default,{style:o._.mt.md}),(0,u.jsx)(d.default,{style:o._.mt.md}),(0,u.jsx)(c.default,{style:o._.mt.sm})]})}));var m=o._.memoStyles((function(){return{container:{paddingTop:o._.sm,paddingBottom:o._.md-4,paddingLeft:o._.wind}}}))},"./src/screens/tinygrail/deal/form/slider.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.number.constructor.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r,s=e.style,a=t.$,u=c(),m=a.state,p=m.value,f=m.amount,x=m.isIce,y=a.assets.balance,j=a.userLogs.amount;return r=a.isBid?"可用 "+(0,l.formatNumber)(y,2,a.short):"可用 "+j+" 股",(0,d.jsxs)(n.default,{style:s,children:[(0,d.jsxs)(n.default,{style:u.inputWrap,children:[(0,d.jsx)(o.Input,{style:u.input,keyboardType:"numeric",value:String(f),onChangeText:a.changeAmount}),(0,d.jsx)(o.Text,{style:u.placeholder,type:"tinygrailText",size:12,children:"股"})]}),(0,d.jsx)(o.Text,{style:u.balance,type:"tinygrailPlain",size:12,children:r}),(0,d.jsxs)(o.Flex,{style:u.slider,children:[(0,d.jsx)(o.Flex.Item,{children:(0,d.jsx)(n.default,{style:u.sliderWrap,children:(0,d.jsx)(o.Slider,{value:f,min:0,max:a.max,minimumTrackTintColor:a.isBid?i._.colorBid:i._.colorAsk,maximumTrackTintColor:i._.colorTinygrailBorder,onChange:function(e){return a.changeAmount(e)}})})}),(0,d.jsx)(o.Touchable,{style:i._.ml.sm,onPress:function(){return a.changeAmount(a.max)},children:(0,d.jsx)(o.Text,{style:u.max,type:"tinygrailText",size:12,children:"[最大]"})})]}),(0,d.jsxs)(o.Flex,{children:[(0,d.jsx)(o.Flex.Item,{children:(0,d.jsx)(o.Text,{type:"tinygrailText",size:12,children:0})}),(0,d.jsx)(o.Text,{type:"tinygrailText",size:12,children:Number(a.max)})]}),(0,d.jsxs)(o.Flex,{style:i._.mt.md,children:[(0,d.jsx)(o.Flex.Item,{children:(0,d.jsx)(o.Text,{type:"tinygrailText",size:12,children:"交易额"})}),(0,d.jsx)(o.Text,{type:"tinygrailPlain",size:12,children:0==f?"--":(0,l.formatNumber)(f*Number(p),2,a.short)}),(0,d.jsx)(o.Touchable,{style:i._.ml.sm,onPress:a.switchIsIce,children:(0,d.jsxs)(o.Text,{type:"tinygrailText",size:12,children:["[冰山: ",x?"开":"关","]"]})})]})]})}));var c=i._.memoStyles((function(){return{inputWrap:{paddingLeft:4,borderColor:i._.colorTinygrailBorder,borderWidth:1},input:{height:34,color:i._.colorTinygrailPlain,backgroundColor:"transparent",borderWidth:0,borderRadius:0},placeholder:{position:"absolute",zIndex:100,top:8,right:8},balance:{marginTop:16},slider:{height:40,marginTop:i._.sm,marginLeft:i._.ios(0,-10),opacity:.8},sliderWrap:{width:"100%"},max:{paddingVertical:i._.sm}}}))},"./src/screens/tinygrail/deal/form/stepper.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.string.split.js"),r("./node_modules/core-js/modules/es.regexp.exec.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r=e.style,s=t.$,a=c(),u=s.state.value;return(0,d.jsxs)(o.Flex,{style:(0,l.stl)(a.stepper,r),children:[(0,d.jsx)(o.Flex.Item,{children:(0,d.jsx)(o.Input,{style:a.input,keyboardType:"numeric",value:String(u),colorClear:i._.colorTinygrailText,clearButtonMode:"never",onChangeText:s.changeValue})}),(0,d.jsx)(o.Touchable,{onPress:s.stepMinus,children:(0,d.jsx)(o.Flex,{style:[a.step,a.stepMinus],justify:"center",children:(0,d.jsx)(n.default,{style:a.minus})})}),(0,d.jsx)(n.default,{style:a.split}),(0,d.jsx)(o.Touchable,{onPress:s.stepPlus,children:(0,d.jsxs)(o.Flex,{style:a.step,justify:"center",children:[(0,d.jsx)(n.default,{style:a.minus}),(0,d.jsx)(n.default,{style:a.plus})]})})]})}));var c=i._.memoStyles((function(){return{stepper:{paddingLeft:4,borderColor:i._.colorTinygrailBorder,borderWidth:1},input:{height:34,color:i._.colorTinygrailPlain,backgroundColor:"transparent",borderWidth:0,borderRadius:0},step:{width:32,height:32},stepMinus:{borderLeftWidth:1,borderLeftColor:i._.colorTinygrailBorder},split:{width:1,height:14,backgroundColor:i._.colorTinygrailBorder},minus:{width:14,height:1,backgroundColor:i._.colorTinygrailText},plus:{position:"absolute",zIndex:1,top:9,left:16,width:1,height:14,backgroundColor:i._.colorTinygrailText}}}))},"./src/screens/tinygrail/deal/form/submit.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r=e.style,s=t.$,a=c(),u=s.state,m=u.loading,p=u.isIce;return(0,d.jsx)(o.Touchable,{style:(0,l.stl)(a.btn,s.isBid?a.btnBid:a.btnAsk,r),onPress:s.doSubmit,children:(0,d.jsxs)(o.Flex,{justify:"center",children:[m&&(0,d.jsx)(n.default,{style:i._.mr.sm,color:"white",size:"small"}),(0,d.jsxs)(o.Text,{style:a.text,align:"center",children:[p&&"冰山",s.isBid?"买入":"卖出"]})]})})}));var c=i._.memoStyles((function(){return{btn:{padding:8,marginVertical:8},text:{color:i._.__colorPlain__},btnBid:{backgroundColor:i._.colorBid},btnAsk:{backgroundColor:i._.colorAsk}}}))},"./src/screens/tinygrail/deal/header/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js"),r("./node_modules/core-js/modules/es.number.constructor.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/screens/_/index.ts"),l=r("./src/stores/index.ts"),a=r("./src/utils/index.ts"),d=r("./src/utils/decorators/index.ts"),c=r("./src/utils/fetch/index.ts"),u=s(r("./src/screens/tinygrail/_/rank/index.tsx")),m=r("./src/screens/tinygrail/_/utils.ts"),p=r("./src/screens/tinygrail/deal/header/styles.ts"),f=r("./node_modules/react/jsx-runtime.js");t.default=(0,d.obc)((function(e,t){var r=t.$,s=t.navigation,d=(0,p.memoStyles)(),x=r.chara,y=x.icon,j=x.name,h=void 0===j?"":j,b=x.fluctuation,g=x.rate,_=x.level,v=x.rank,T=x.stars,I="tinygrailPlain",k="";b>0?(I="bid",k="+"+(0,a.toFixed)(b,2)+"%"):b<0&&(I="ask",k=(0,a.toFixed)(b,2)+"%");var P=r.relation,S=P.subject,w=P.r;return(0,f.jsxs)(o.Flex,{style:d.container,children:[(0,f.jsx)(o.Flex.Item,{children:(0,f.jsxs)(o.Flex,{children:[(0,f.jsx)(i.IconBack,{style:d.back,navigation:s,color:l._.colorTinygrailPlain}),!!y&&(0,f.jsx)(n.default,{style:d.avatar,children:(0,f.jsx)(o.Avatar,{src:(0,a.tinygrailOSS)(y),size:40,borderColor:"transparent",skeletonType:"tinygrail",name:h,onPress:function(){(0,c.t)("交易.跳转",{to:"Mono",monoId:r.monoId}),s.push("Mono",{monoId:"character/"+r.monoId,_name:h})}})}),(0,f.jsxs)(o.Flex.Item,{style:l._.ml.sm,children:[(0,f.jsxs)(o.Flex,{children:[(0,f.jsx)(u.default,{value:v}),(0,f.jsx)(o.Text,{type:"tinygrailPlain",size:h.length>12?11:h.length>8?13:14,numberOfLines:1,lineHeight:13,bold:!0,children:h}),(0,f.jsxs)(o.Text,{style:l._.ml.xs,type:"ask",size:11,bold:!0,lineHeight:13,children:["lv",_]}),(0,f.jsx)(o.Text,{style:l._.ml.xs,type:I,size:12,lineHeight:13,align:"center",bold:!0,children:k})]}),(0,f.jsxs)(o.Text,{style:l._.mt.xxs,type:"tinygrailText",size:12,children:["#",r.monoId," / +",(0,a.toFixed)(g,1)," (",Number((0,a.toFixed)((0,m.calculateRate)(g,v,T),1)),")"]})]})]})}),(0,f.jsxs)(o.Flex,{children:[(0,f.jsx)(i.IconTouchable,{name:"md-workspaces-outline",color:l._.colorTinygrailPlain,onPress:function(){(0,c.t)("交易.跳转",{to:"TinygrailSacrifice",monoId:r.monoId});var e=r.params,t=e.form,n=e.monoId;"sacrifice"!==t?s.push("TinygrailSacrifice",{monoId:n,form:"deal"}):s.goBack()}}),(0,f.jsx)(i.IconTouchable,{name:"md-waterfall-chart",color:l._.colorTinygrailPlain,onPress:function(){(0,c.t)("交易.跳转",{to:"TinygrailTrade",monoId:r.monoId});var e=r.params,t=e.form,n=e.monoId;"trade"!==t?s.push("TinygrailTrade",{monoId:n,form:"deal"}):s.goBack()}}),!!S&&(0,f.jsx)(i.IconTouchable,{name:"md-compare-arrows",color:l._.colorTinygrailPlain,onPress:function(){s.push("TinygrailRelation",{ids:w,name:S+" ("+w.length+")"})}})]})]})}))},"./src/screens/tinygrail/deal/header/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=r("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{container:{paddingVertical:s._.sm,paddingHorizontal:s._._wind},back:{marginLeft:-8},backIsPad:{position:"absolute",zIndex:1,top:24,left:s._._wind},avatar:{marginHorizontal:s._.xs}}}))},"./src/screens/tinygrail/deal/index.tsx":(e,t,r)=>{var s=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/web.timers.js"),r("./node_modules/core-js/modules/es.object.assign.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),i=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=n(r("react")),f=n(r("./node_modules/react-native-web/dist/exports/RefreshControl/index.js")),x=n(r("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),y=n(r("./node_modules/react-native-web/dist/exports/View/index.js")),j=r("./src/components/index.ts"),h=r("./src/screens/_/index.ts"),b=r("./src/stores/index.ts"),g=r("./src/utils/decorators/index.ts"),_=r("./src/utils/fetch/index.ts"),v=r("./src/constants/index.ts"),T=r("./src/screens/tinygrail/styles.ts"),I=n(r("./src/screens/tinygrail/deal/depth/index.tsx")),k=n(r("./src/screens/tinygrail/deal/form/index.tsx")),P=n(r("./src/screens/tinygrail/deal/header/index.tsx")),S=n(r("./src/screens/tinygrail/deal/logs/index.tsx")),w=n(r("./src/screens/tinygrail/deal/records/index.tsx")),F=n(r("./src/screens/tinygrail/deal/store.ts")),C=r("./src/screens/tinygrail/deal/styles.ts"),z=r("./node_modules/react/jsx-runtime.js");function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,u.default)(e);if(t){var n=(0,u.default)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,c.default)(this,r)}}var O=function(e){(0,d.default)(r,e);var t=A(r);function r(){var e;(0,i.default)(this,r);for(var n=arguments.length,l=new Array(n),d=0;d<n;d++)l[d]=arguments[d];return e=t.call.apply(t,[this].concat(l)),(0,m.default)((0,a.default)(e),"state",{refreshing:!1}),(0,m.default)((0,a.default)(e),"onRefresh",(function(){e.setState({refreshing:!0},(0,o.default)(s.mark((function t(){var r,n;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.context,n=r.$,t.next=3,n.refresh();case 3:setTimeout((function(){e.setState({refreshing:!1})}),1200);case 4:case"end":return t.stop()}}),t)}))))})),e}return(0,l.default)(r,[{key:"componentDidMount",value:function(){var e=this.context.$;e.init(),(0,_.hm)("tinygrail/deal/"+e.monoId,"TinygrailDeal")}},{key:"render",value:function(){var e=this.state.refreshing;return(0,z.jsxs)(j.Page,{style:[b._.container.flex,this.styles.dark],children:[(0,z.jsx)(h.StatusBarPlaceholder,{style:this.styles.dark}),(0,z.jsx)(P.default,{}),(0,z.jsxs)(x.default,Object.assign({style:[b._.container.flex,this.styles.dark],refreshControl:(0,z.jsx)(f.default,Object.assign({},T.refreshControlProps,{progressBackgroundColor:b._.select(b._.colorPlain,b._._colorDarkModeLevel2),colors:[b._.colorMain],refreshing:e,onRefresh:this.onRefresh}))},v.SCROLL_VIEW_RESET_PROPS,{children:[(0,z.jsxs)(j.Flex,{style:this.styles.form,align:"start",children:[(0,z.jsx)(j.Flex.Item,{children:(0,z.jsx)(k.default,{})}),(0,z.jsx)(y.default,{style:this.styles.depth,children:(0,z.jsx)(I.default,{})})]}),(0,z.jsx)(S.default,{}),(0,z.jsx)(w.default,{})]}))]})}},{key:"styles",get:function(){return(0,C.memoStyles)()}}]),r}(p.default.Component);t.default=(0,g.inject)(F.default)((0,g.obc)(O))},"./src/screens/tinygrail/deal/logs/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.array.sort.js"),r("./node_modules/core-js/modules/es.array.slice.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./src/screens/tinygrail/deal/logs/styles.ts"),c=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r=t.$,s=(0,d.memoStyles)(),a=r.userLogs,u=a.bids,m=a.asks;return(0,c.jsxs)(o.Flex,{style:s.container,align:"start",children:[(0,c.jsxs)(o.Flex.Item,{children:[(0,c.jsxs)(o.Flex,{style:{marginBottom:i._.sm},children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Text,{type:"bid",size:16,children:"买入委托"})}),!!u.length&&(0,c.jsx)(o.Touchable,{style:[s.cancel,i._.ml.sm],onPress:function(){return r.doCancelAll("bid")},children:(0,c.jsx)(o.Iconfont,{name:"md-close",size:14,color:i._.colorTinygrailIcon})})]}),!u.length&&(0,c.jsx)(o.Text,{type:"tinygrailText",children:"-"}),u.slice().sort((function(e,t){return t.price-e.price})).map((function(e,t){return(0,c.jsx)(n.default,{style:s.item,children:(0,c.jsxs)(o.Flex,{children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsxs)(o.Text,{size:12,type:"tinygrailPlain",children:[(0,l.formatNumber)(e.price),1===e.type&&(0,c.jsxs)(o.Text,{size:12,type:"tinygrailText",children:[" ","[冰山]"]})]})}),(0,c.jsx)(o.Text,{type:"tinygrailText",size:12,children:(0,l.formatNumber)(e.amount,0)}),(0,c.jsx)(o.Touchable,{style:[s.cancel,i._.ml.sm],onPress:function(){return r.doCancel("bid",e.id)},children:(0,c.jsx)(o.Iconfont,{name:"md-close",size:14,color:i._.colorTinygrailIcon})})]})},t)}))]}),(0,c.jsxs)(o.Flex.Item,{style:i._.ml.wind,children:[(0,c.jsxs)(o.Flex,{children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsx)(o.Text,{type:"ask",size:16,children:"卖出委托"})}),!!m.length&&(0,c.jsx)(o.Touchable,{style:[s.cancel,i._.ml.sm],onPress:function(){return r.doCancelAll("ask")},children:(0,c.jsx)(o.Iconfont,{name:"md-close",size:14,color:i._.colorTinygrailIcon})})]}),!m.length&&(0,c.jsx)(o.Text,{type:"tinygrailText",children:"-"}),m.slice().sort((function(e,t){return e.price-t.price})).map((function(e,t){return(0,c.jsx)(n.default,{style:s.item,children:(0,c.jsxs)(o.Flex,{children:[(0,c.jsx)(o.Flex.Item,{children:(0,c.jsxs)(o.Text,{size:12,type:"tinygrailPlain",children:[(0,l.formatNumber)(e.price),1===e.type&&(0,c.jsxs)(o.Text,{size:12,type:"tinygrailText",children:[" ","[冰山]"]})]})}),(0,c.jsx)(o.Text,{type:"tinygrailText",size:12,children:(0,l.formatNumber)(e.amount,0)}),(0,c.jsx)(o.Touchable,{style:[s.cancel,i._.ml.sm],onPress:function(){return r.doCancel("ask",e.id)},children:(0,c.jsx)(o.Iconfont,{name:"md-close",size:14,color:i._.colorTinygrailIcon})})]})},t)}))]})]})}))},"./src/screens/tinygrail/deal/logs/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=r("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{container:{minHeight:120,paddingVertical:s._.md,paddingHorizontal:s._.wind,borderTopWidth:s._.sm,borderTopColor:s._.colorTinygrailBg},item:{width:"100%"},cancel:{paddingVertical:s._.sm,paddingLeft:s._.sm}}}))},"./src/screens/tinygrail/deal/records/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.array.filter.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(r("react"));var n=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),o=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),a=r("./src/utils/decorators/index.ts"),d=r("./src/utils/fetch/index.ts"),c=r("./src/screens/tinygrail/deal/records/styles.ts"),u=r("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var r=t.$,s=(0,c.memoStyles)(),a=r.state.expand,m=r.userLogs,p=m.bidHistory,f=m.askHistory,x=p.length>10||f.length>10;return(0,u.jsxs)(n.default,{style:s.container,children:[(0,u.jsxs)(o.Flex,{align:"start",children:[(0,u.jsxs)(o.Flex.Item,{children:[(0,u.jsx)(o.Text,{style:i._.mb.sm,type:"bid",size:16,children:"买入记录"}),0===p.length&&(0,u.jsx)(o.Text,{type:"tinygrailText",children:"-"}),p.filter((function(e,t){return!!a||t<5})).map((function(e,t){return(0,u.jsx)(o.Touchable,{style:s.item,onPress:function(){(0,d.t)("交易.显示时间",{monoId:r.monoId}),(0,l.info)("成交时间: "+String(e.time).replace("T"," "))},children:(0,u.jsxs)(o.Flex,{children:[(0,u.jsx)(o.Flex.Item,{children:(0,u.jsxs)(o.Text,{size:12,type:"tinygrailPlain",children:[(0,l.formatNumber)(e.price)," /"," ",(0,u.jsx)(o.Text,{type:"tinygrailText",size:12,children:(0,l.formatNumber)(e.amount,0)})]})}),(0,u.jsxs)(o.Text,{size:12,type:"tinygrailPlain",children:["-",(0,l.formatNumber)(e.price*e.amount,2,r.short)]})]})},t)}))]}),(0,u.jsxs)(o.Flex.Item,{style:i._.ml.wind,children:[(0,u.jsx)(o.Text,{style:i._.mb.sm,type:"ask",size:16,children:"卖出记录"}),0===f.length&&(0,u.jsx)(o.Text,{type:"tinygrailText",children:"-"}),f.filter((function(e,t){return!!a||t<5})).map((function(e,t){return(0,u.jsx)(o.Touchable,{style:s.item,onPress:function(){(0,d.t)("交易.显示时间",{monoId:r.monoId}),(0,l.info)("成交时间: "+String(e.time).replace("T"," "))},children:(0,u.jsxs)(o.Flex,{children:[(0,u.jsx)(o.Flex.Item,{children:(0,u.jsxs)(o.Text,{type:"tinygrailPlain",size:12,children:[(0,l.formatNumber)(e.price)," /"," ",(0,u.jsx)(o.Text,{type:"tinygrailText",size:12,children:(0,l.formatNumber)(e.amount,0)})]})}),(0,u.jsxs)(o.Text,{type:"tinygrailPlain",size:12,children:["+",(0,l.formatNumber)(e.price*e.amount,2,r.short)]})]})},t)}))]})]}),x&&(0,u.jsx)(o.Touchable,{style:[s.expand,i._.mt.sm],onPress:r.toggleExpand,children:(0,u.jsx)(o.Text,{type:"warning",align:"center",children:a?"收起":"展开"})})]})}))},"./src/screens/tinygrail/deal/records/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=r("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{container:{minHeight:120,paddingTop:s._.md,paddingBottom:s._.lg,paddingHorizontal:s._.wind,borderTopWidth:s._.sm,borderTopColor:s._.colorTinygrailBg},item:{width:"100%",paddingVertical:6},cancel:{paddingVertical:s._.sm,paddingLeft:s._.sm},expand:{paddingVertical:s._.sm}}}))},"./src/screens/tinygrail/deal/store.ts":(e,t,r)=>{var s=r("./node_modules/@babel/runtime/regenerator/index.js");function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var s=0,n=function(){};return{s:n,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(a)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.number.constructor.js"),r("./node_modules/core-js/modules/es.object.assign.js"),r("./node_modules/core-js/modules/es.parse-float.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js"),r("./node_modules/core-js/modules/es.parse-int.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),r("./node_modules/core-js/modules/es.array.slice.js"),r("./node_modules/core-js/modules/es.object.to-string.js"),r("./node_modules/core-js/modules/es.array.from.js"),r("./node_modules/core-js/modules/es.string.iterator.js"),r("./node_modules/core-js/modules/es.symbol.js"),r("./node_modules/core-js/modules/es.symbol.description.js"),r("./node_modules/core-js/modules/es.symbol.iterator.js"),r("./node_modules/core-js/modules/es.array.iterator.js"),r("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r("./node_modules/core-js/modules/es.array.is-array.js");var i=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,a=i(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),d=i(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=i(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=i(r("./node_modules/@babel/runtime/helpers/createClass.js")),m=i(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),p=i(r("./node_modules/@babel/runtime/helpers/inherits.js")),f=i(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),x=i(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),y=i(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),j=i(r("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),h=r("./node_modules/mobx/dist/mobx.esm.js"),b=r("./src/stores/index.ts"),g=r("./src/utils/index.ts"),_=i(r("./src/utils/store/index.ts")),v=r("./src/utils/fetch/index.ts"),T=r("./src/constants/index.ts"),I=r("./src/screens/tinygrail/deal/ds.ts");function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,s=(0,x.default)(e);if(t){var n=(0,x.default)(this).constructor;r=Reflect.construct(s,arguments,n)}else r=s.apply(this,arguments);return(0,f.default)(this,r)}}t.default=(l=function(e){(0,p.default)(r,e);var t=k(r);function r(){var e,o,i;(0,c.default)(this,r);for(var l=arguments.length,a=new Array(l),u=0;u<l;u++)a[u]=arguments[u];return e=t.call.apply(t,[this].concat(a)),(0,y.default)((0,m.default)(e),"params",void 0),(0,y.default)((0,m.default)(e),"state",(0,h.observable)(I.STATE)),(0,y.default)((0,m.default)(e),"prev",0),(0,y.default)((0,m.default)(e),"init",(0,d.default)(s.mark((function t(){var r,n,o,i,l,a;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state._loaded,n=(0,g.getTimestamp)(),o=!r||n-Number(r)>60,t.next=5,e.getStorage(I.NAMESPACE);case 5:if(i=t.sent,l=e.params.type,a=void 0===l?I.DEFAULT_TYPE:l,e.setState(Object.assign({},i,I.EXCLUDE_STATE,{type:a,_loaded:o?n:r})),!o){t.next=10;break}return t.abrupt("return",e.refresh());case 10:return t.abrupt("return",!0);case 11:case"end":return t.stop()}}),t)})))),(0,y.default)((0,m.default)(e),"refresh",(function(){return(0,v.queue)([function(){return e.fetchCharaThenInitForm()},function(){return b.tinygrailStore.fetchDepth(e.monoId)},function(){return b.tinygrailStore.fetchAssets()},function(){return b.tinygrailStore.fetchUserLogs(e.monoId)},function(){return b.tinygrailStore.fetchIssuePrice(e.monoId)}])})),(0,y.default)((0,m.default)(e),"fetchCharaThenInitForm",(0,d.default)(s.mark((function t(){return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.tinygrailStore.fetchCharacters([e.monoId]);case 2:return e.initForm(),t.abrupt("return",!0);case 4:case"end":return t.stop()}}),t)})))),(0,y.default)((0,m.default)(e),"doSubmit",(function(){var t=e.state,r=t.value,s=t.amount;s?r?e.isBid&&Number(r)*s>2e4?(0,g.confirm)("金额较大, 当前买入"+s+"股 * "+r+", 确定?",e.doSubmitConfirm,"小圣杯助手"):e.doSubmitConfirm():(0,g.info)("出价有误"):(0,g.info)("数量不能0")})),(0,y.default)((0,m.default)(e),"doSubmitConfirm",(0,d.default)(s.mark((function t(){var r,o,i,l,a,d,c,u,m;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.state,o=r.value,i=r.amount,l=r.isIce,(0,v.t)("交易.挂单",{monoId:e.monoId,type:e.isBid?"bid":"asks"}),e.setState({loading:!0}),a=P(i),c=n(a),t.prev=5,c.s();case 7:if((u=c.n()).done){t.next=14;break}return m=u.value,t.next=11,b.tinygrailStore[e.isBid?"doBid":"doAsk"]({monoId:e.monoId,price:o,amount:m,isIce:l});case 11:d=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),c.e(t.t0);case 19:return t.prev=19,c.f(),t.finish(19);case 22:if((0,g.feedback)(),d){t.next=27;break}return(0,g.info)("交易失败"),e.setState({loading:!1}),t.abrupt("return");case 27:e.setState({amount:0,loading:!1}),e.refresh();case 29:case"end":return t.stop()}}),t,null,[[5,16,19,22]])})))),(0,y.default)((0,m.default)(e),"doCancel",(o=(0,d.default)(s.mark((function t(r,n){var o;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,v.t)("交易.取消挂单",{monoId:e.monoId,type:r}),t.next=3,b.tinygrailStore["bid"===r?"doCancelBid":"doCancelAsk"]({id:n});case 3:if(o=t.sent,(0,g.feedback)(),o){t.next=8;break}return(0,g.info)("取消失败"),t.abrupt("return");case 8:e.refresh();case 9:case"end":return t.stop()}}),t)}))),function(e,t){return o.apply(this,arguments)})),(0,y.default)((0,m.default)(e),"doCancelAll",(i=(0,d.default)(s.mark((function t(r){var o,i,l,a,d;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,v.t)("交易.一键取消挂单",{monoId:e.monoId,type:r}),o="bid"===r?e.userLogs.bids:e.userLogs.asks,l=n(o),t.prev=3,l.s();case 5:if((a=l.n()).done){t.next=12;break}return d=a.value,t.next=9,b.tinygrailStore["bid"===r?"doCancelBid":"doCancelAsk"]({id:d.id});case 9:i=t.sent;case 10:t.next=5;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),l.e(t.t0);case 17:return t.prev=17,l.f(),t.finish(17);case 20:if((0,g.feedback)(),i){t.next=24;break}return(0,g.info)("取消失败"),t.abrupt("return");case 24:e.refresh();case 25:case"end":return t.stop()}}),t,null,[[3,14,17,20]])}))),function(e){return i.apply(this,arguments)})),(0,y.default)((0,m.default)(e),"initForm",(function(){if(!e.state.value){var t=e.chara.current;t&&e.setState({value:e.moneyNatural(t)})}})),(0,y.default)((0,m.default)(e),"toggleType",(function(t){(0,v.t)("交易.切换买卖类型",{monoId:e.monoId,type:t});var r=e.chara.current;"bid"!==t?e.setState({type:"ask",value:e.moneyNatural(r),amount:0}):e.setState({type:"bid",value:e.moneyNatural(r),amount:0})})),(0,y.default)((0,m.default)(e),"moneyNatural",(function(t){return t&&!/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(t)?"."===t?"0.":t?e.prev:"":(e.prev=t,t)})),(0,y.default)((0,m.default)(e),"changeValue",(function(t,r){var s=e.state.type;e.setState({value:e.moneyNatural(t),amount:"bid"===s&&r||0})})),(0,y.default)((0,m.default)(e),"stepMinus",(function(){var t=e.state.value,r=parseFloat(e.moneyNatural(t))-.1;r<0&&(r=.1),e.setState({value:(0,g.toFixed)(r,2)})})),(0,y.default)((0,m.default)(e),"stepPlus",(function(){var t=e.state.value,r=parseFloat(e.moneyNatural(t))+.1;e.setState({value:(0,g.toFixed)(r,2)})})),(0,y.default)((0,m.default)(e),"changeAmount",(function(t){var r=parseInt(t);isNaN(r)&&(r=0),r>e.max&&(r=e.max),e.setState({amount:r})})),(0,y.default)((0,m.default)(e),"toggleExpand",(function(){var t=e.state.expand;(0,v.t)("交易.切换买卖类型",{monoId:e.monoId}),e.setState({expand:!t})})),(0,y.default)((0,m.default)(e),"switchIsIce",(function(){var t=e.state.isIce;(0,v.t)("交易.切换冰山",{monoId:e.monoId,isIce:!t}),e.setState({isIce:!t}),e.setStorage(I.NAMESPACE)})),e}return(0,u.default)(r,[{key:"short",get:function(){return b.systemStore.setting.xsbShort}},{key:"monoId",get:function(){var e=this.params.monoId;return(void 0===e?"":e).replace("character/","")}},{key:"chara",get:function(){return b.tinygrailStore.characters(this.monoId)}},{key:"depth",get:function(){return b.tinygrailStore.depth(this.monoId)}},{key:"assets",get:function(){return b.tinygrailStore.assets}},{key:"userLogs",get:function(){return b.tinygrailStore.userLogs(this.monoId)}},{key:"isBid",get:function(){return"bid"===this.state.type}},{key:"max",get:function(){var e=this.state.value,t=this.assets.balance,r=this.userLogs.amount;return this.isBid?0==e?0:Math.floor(t/Number(e)):r}},{key:"issuePrice",get:function(){return b.tinygrailStore.issuePrice(this.monoId)}},{key:"relation",get:function(){var e=(0,T.getXsbRelationOTA)(),t=e.data[this.monoId]||{},r=t.s,s=t.r,n=void 0===s?[]:s;return{s:r,subject:r?e.name[r]:"",r:[Number(this.monoId)].concat((0,a.default)(n))}}}]),r}(_.default),(0,j.default)(l.prototype,"short",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"short"),l.prototype),(0,j.default)(l.prototype,"monoId",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"monoId"),l.prototype),(0,j.default)(l.prototype,"chara",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"chara"),l.prototype),(0,j.default)(l.prototype,"depth",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"depth"),l.prototype),(0,j.default)(l.prototype,"assets",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"assets"),l.prototype),(0,j.default)(l.prototype,"userLogs",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"userLogs"),l.prototype),(0,j.default)(l.prototype,"isBid",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"isBid"),l.prototype),(0,j.default)(l.prototype,"max",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"max"),l.prototype),(0,j.default)(l.prototype,"issuePrice",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"issuePrice"),l.prototype),(0,j.default)(l.prototype,"relation",[h.computed],Object.getOwnPropertyDescriptor(l.prototype,"relation"),l.prototype),l);function P(e){return[e]}},"./src/screens/tinygrail/deal/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=r("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{dark:{backgroundColor:s._.colorTinygrailContainer},form:{paddingRight:s._.wind-s._._wind},depth:{width:.44*s._.window.contentWidth,marginLeft:18}}}))}}]);