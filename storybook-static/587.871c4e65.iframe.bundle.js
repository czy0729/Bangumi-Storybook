(self.webpackChunkweb=self.webpackChunkweb||[]).push([[587],{"./src/screens/tinygrail/tree/chart/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.object.assign.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r("./node_modules/react/index.js"));var s=n(r("./node_modules/react-native-web/dist/exports/View/index.js")),a=r("./src/stores/index.ts"),o=r("./src/utils/decorators/index.ts"),i=r("./src/constants/index.ts"),l=n(r("./src/screens/tinygrail/tree/item/index.tsx")),u=r("./node_modules/react/jsx-runtime.js");t.default=(0,o.ob)((function(e){var t,r=e.data,n=void 0===r?[]:r,o=e.caculateType,d=e.isTemple,c=e.onPress,m=e.onLongPress,f=i.MODEL_TINYGRAIL_CACULATE_TYPE.getLabel(o);return"股息"===f&&(t="+"),(0,u.jsx)(s.default,{style:a._.container.tinygrail,children:n.map((function(e){return(0,u.jsx)(l.default,Object.assign({},e,{label:f,extra:t,isTemple:d,onPress:c,onLongPress:m}),e.id)}))})}));try{chart.displayName="chart",chart.__docgenInfo={description:"",displayName:"chart",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"any[]"}},caculateType:{defaultValue:null,description:"",name:"caculateType",required:!0,type:{name:"any"}},isTemple:{defaultValue:null,description:"",name:"isTemple",required:!0,type:{name:"any"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"any"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/tree/chart/index.tsx#chart"]={docgenInfo:chart.__docgenInfo,name:"chart",path:"src/screens/tinygrail/tree/chart/index.tsx#chart"})}catch(e){}},"./src/screens/tinygrail/tree/index.tsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.function.name.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),o=s(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=s(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=s(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=s(r("./node_modules/@babel/runtime/helpers/inherits.js")),d=s(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=s(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=s(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=s(r("./node_modules/react/index.js")),p=r("./src/components/index.ts"),h=r("./src/screens/_/index.ts"),y=r("./src/stores/index.ts"),g=r("./src/utils/index.ts"),j=r("./src/utils/decorators/index.ts"),_=r("./src/utils/fetch/index.ts"),x=s(r("./src/constants/i18n/index.ts")),b=s(r("./src/screens/tinygrail/tree/chart/index.tsx")),T=s(r("./src/screens/tinygrail/tree/store.ts")),v=s(r("./src/screens/tinygrail/tree/tool-bar/index.tsx")),S=r("./node_modules/react/jsx-runtime.js");function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var s=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,d.default)(this,r)}}var A=function(e){(0,u.default)(r,e);var t=w(r);function r(){var e;(0,o.default)(this,r);for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return e=t.call.apply(t,[this].concat(i)),(0,m.default)((0,l.default)(e),"state",{refreshing:!1}),(0,m.default)((0,l.default)(e),"onAlert",(function(){(0,g.alert)("1. 单击方格展开功能菜单, 长按隐藏方格\n2. 本功能处于实验性阶段, 不保证能正常渲染, 不正常请尝试刷新或者在讨论组等"+x.default.contact()+"作者\n3. 计算的数据只供参考, 不排除会出现不准确丢失的情况\n4. 因角色数量可能导致流量变大, 页面当有缓存数据不会自动刷新, 请点击旁边的按钮刷新\n5. 部分数据可能毫无意义, 只是顺便调出来, 还请自己把握(bgm38)","小圣杯助手")})),(0,m.default)((0,l.default)(e),"onRefresh",(0,a.default)(n.mark((function t(){var r,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.context,s=r.$,e.setState({refreshing:!0}),t.next=4,s.refresh();case 4:s.generateTreeMap(),(0,g.info)("已刷新"),e.setState({refreshing:!1});case 7:case"end":return t.stop()}}),t)})))),(0,m.default)((0,l.default)(e),"onShowMenu",(function(t){var r=t.id,n=t.name,s=t.title;if(r){(0,_.t)("资产分析.人物菜单",{key:s,id:r});var a=e.context,o=a.$,i=a.navigation;switch(s){case"K线":return void i.push("TinygrailTrade",{monoId:"character/"+r});case"买入":return void i.push("TinygrailDeal",{monoId:"character/"+r,type:"bid"});case"卖出":return void i.push("TinygrailDeal",{monoId:"character/"+r,type:"ask"});case"资产重组":return void i.push("TinygrailSacrifice",{monoId:"character/"+r});case"隐藏":return void o.onToggleItem({id:r,name:n});default:i.push("Mono",{monoId:"character/"+r,_name:n})}}})),e}return(0,i.default)(r,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"render",value:function(){var e,t=this,r=this.context.$,n=r.state,s=n.loading,a=n.caculateType,o=n.data,i=this.state.refreshing;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(p.Header,{title:(null==(e=r.params)?void 0:e.name)||"资产分析",alias:"资产分析",hm:["tinygrail/tree","TinygrailTree"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,S.jsxs)(p.Flex,{children:[i?(0,S.jsx)(p.Text,{style:y._.mr.sm,type:"tinygrailPlain",size:12,children:"请求中..."}):(0,S.jsx)(h.IconHeader,{style:y._.mr.sm,name:"md-refresh",color:y._.colorTinygrailPlain,size:22,onPress:function(){(0,_.t)("资产分析.刷新"),t.onRefresh()}}),(0,S.jsx)(h.IconHeader,{name:"md-info-outline",color:y._.colorTinygrailPlain,onPress:function(){(0,_.t)("资产分析.提醒"),t.onAlert()}})]})}}),(0,S.jsxs)(p.Page,{style:y._.container.tinygrail,children:[(0,S.jsx)(v.default,{style:y._.mt._sm}),s?(0,S.jsx)(p.Loading,{style:y._.container.tinygrail,color:y._.colorTinygrailText}):(0,S.jsx)(b.default,{data:o,caculateType:a,isTemple:r.isTemple,onPress:this.onShowMenu,onLongPress:function(e){(0,_.t)("资产分析.长按隐藏",{id:e.id}),r.onToggleItem(e)}})]})]})}}]),r}(f.default.Component);t.default=(0,j.inject)(T.default)((0,j.obc)(A));try{tree.displayName="tree",tree.__docgenInfo={description:"",displayName:"tree",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/tree/index.tsx#tree"]={docgenInfo:tree.__docgenInfo,name:"tree",path:"src/screens/tinygrail/tree/index.tsx#tree"})}catch(e){}},"./src/screens/tinygrail/tree/item/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r("./node_modules/react/index.js"));var s=n(r("./node_modules/react-native-web/dist/exports/View/index.js")),a=r("./src/components/index.ts"),o=r("./src/screens/_/index.ts"),i=r("./src/stores/index.ts"),l=r("./src/utils/index.ts"),u=r("./src/utils/decorators/index.ts"),d=r("./src/constants/index.ts"),c=r("./src/screens/tinygrail/tree/item/styles.ts"),m=r("./node_modules/react/jsx-runtime.js"),f=i._.window.width*i._.window.height;t.default=(0,u.ob)((function(e){var t,r=e.w,n=e.h,u=e.x,p=e.y,h=e.id,y=e.icon,g=e.name,j=e.price,_=e.percent,x=e.fluctuation,b=e.label,T=e.extra,v=e.isTemple,S=e.onPress,w=e.onLongPress,A=(0,c.memoStyles)(),I=Math.pow(_+1,2),L=n/i._.window.height*1.2,P=!!y&&r*n/f>.016,M=100*_,C=Math.floor(9*I);t=j>d.B?(0,l.toFixed)(j/d.B,1)+"亿":j>d.M?(0,l.toFixed)(j/d.M,1)+"万":(0,l.toFixed)(j,1);var E,O,R=i._.colorTinygrailContainer;y||(R=i._.colorTinygrailBorder);var V="tinygrailText";return"当前涨跌"===b&&(O="%",x>0?(E="+",V="bid"):x<0&&(E="-",V="ask")),(0,m.jsx)(s.default,{style:[A.item,{top:p,left:u}],children:(0,m.jsx)(o.Popover,{data:h?[g,"K线","买入","卖出","资产重组","隐藏"]:[],placement:"auto",onSelect:function(e){if("function"==typeof S)return S({id:h,name:g,title:e})},onLongPress:function(){if("function"==typeof w)return w({id:h,name:g})},children:(0,m.jsxs)(a.Flex,{style:[i._.container.flex,{width:r,height:n,backgroundColor:R}],direction:"column",justify:"center",children:[P&&(0,m.jsx)(a.Image,{style:{marginBottom:Math.floor(5.6*I)},src:y,size:Math.floor(240*L),height:v?Math.floor(320*L):Math.floor(240*L),radius:v?4:Math.floor(120*L),placeholder:!1,skeletonType:"tinygrail"}),(0,m.jsx)(a.Text,{type:"tinygrailPlain",size:Math.min(Math.floor(11*I),15),numberOfLines:1,bold:!0,selectable:!1,children:g}),(0,m.jsxs)(a.Text,{style:{marginTop:Math.floor(3*I)},type:"tinygrailText",size:Math.min(C,14),numberOfLines:1,selectable:!1,children:[(0,m.jsxs)(a.Text,{type:V,size:Math.min(C,14),selectable:!1,children:[T,E,t,O]})," ","/ ",(0,l.toFixed)(M,M<.1?2:1),"%"]})]})})})}));try{item.displayName="item",item.__docgenInfo={description:"",displayName:"item",props:{w:{defaultValue:null,description:"",name:"w",required:!0,type:{name:"any"}},h:{defaultValue:null,description:"",name:"h",required:!0,type:{name:"any"}},x:{defaultValue:null,description:"",name:"x",required:!0,type:{name:"any"}},y:{defaultValue:null,description:"",name:"y",required:!0,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"any"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"any"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"any"}},percent:{defaultValue:null,description:"",name:"percent",required:!0,type:{name:"any"}},fluctuation:{defaultValue:null,description:"",name:"fluctuation",required:!0,type:{name:"any"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"any"}},extra:{defaultValue:null,description:"",name:"extra",required:!0,type:{name:"any"}},isTemple:{defaultValue:null,description:"",name:"isTemple",required:!0,type:{name:"any"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"any"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/tree/item/index.tsx#item"]={docgenInfo:item.__docgenInfo,name:"item",path:"src/screens/tinygrail/tree/item/index.tsx#item"})}catch(e){}},"./src/screens/tinygrail/tree/item/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var n=r("./src/stores/index.ts");t.memoStyles=n._.memoStyles((function(){return{item:{position:"absolute",borderWidth:n._.tSelect(1,n._.hairlineWidth),borderColor:n._.colorTinygrailBorder,overflow:"hidden"}}}))},"./src/screens/tinygrail/tree/store.ts":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.object.assign.js"),r("./node_modules/core-js/modules/es.promise.js"),r("./node_modules/core-js/modules/es.object.to-string.js"),r("./node_modules/core-js/modules/es.string.iterator.js"),r("./node_modules/core-js/modules/es.array.iterator.js"),r("./node_modules/core-js/modules/web.dom-collections.iterator.js"),r("./node_modules/core-js/modules/es.array.filter.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.array.includes.js"),r("./node_modules/core-js/modules/es.string.includes.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.array.find-index.js"),r("./node_modules/core-js/modules/es.array.splice.js"),r("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),r("./node_modules/core-js/modules/es.array.for-each.js"),r("./node_modules/core-js/modules/web.dom-collections.for-each.js"),r("./node_modules/core-js/modules/es.parse-float.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=s(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),i=s(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=s(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=s(r("./node_modules/@babel/runtime/helpers/createClass.js")),d=s(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=s(r("./node_modules/@babel/runtime/helpers/inherits.js")),m=s(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),f=s(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=s(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),h=s(r("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),y=r("./node_modules/mobx/dist/mobx.esm.js"),g=r("./src/stores/index.ts"),j=r("./src/utils/index.ts"),_=s(r("./src/utils/store/index.ts")),x=r("./src/utils/fetch/index.ts"),b=s(r("./src/utils/thirdParty/treemap.ts")),T=r("./src/constants/index.ts"),v=s(r("./src/styles/index.ts")),S=r("./src/screens/tinygrail/_/ds.ts");function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.default)(e);if(t){var s=(0,f.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,m.default)(this,r)}}var A="valhalla@tinygrail.com",I="ScreenTinygrailTree",L=T.MODEL_TINYGRAIL_ASSETS_TYPE.getValue("所有"),P=T.MODEL_TINYGRAIL_CACULATE_TYPE.getValue("周股息");t.default=(a=function(e){(0,c.default)(r,e);var t=w(r);function r(){var e;(0,l.default)(this,r);for(var s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return e=t.call.apply(t,[this].concat(a)),(0,p.default)((0,d.default)(e),"params",void 0),(0,p.default)((0,d.default)(e),"state",(0,y.observable)({type:L,caculateType:P,loading:!1,data:[],total:0,filterItems:[]})),(0,p.default)((0,d.default)(e),"init",(0,i.default)(n.mark((function t(){var r;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getStorage(I);case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0={};case 5:if(r=t.t0,e.setState(Object.assign({},r,{loading:!1,data:[],total:0,filterItems:[]})),!e.charaAssets.length){t.next=10;break}return e.generateTreeMap(),t.abrupt("return");case 10:return e.setState({loading:!0}),t.next=13,e.refresh();case 13:e.generateTreeMap(),e.setState({loading:!1});case 15:case"end":return t.stop()}}),t)})))),(0,p.default)((0,d.default)(e),"refresh",(function(){return Promise.all([e.fetchCharaAssets(),e.fetchTemple()])})),(0,p.default)((0,d.default)(e),"fetchCharaAssets",(function(){var t=e.params.userName;return t===A?g.tinygrailStore.fetchValhallList():g.tinygrailStore.fetchCharaAll(t)})),(0,p.default)((0,d.default)(e),"fetchTemple",(function(){var t=e.params.userName;return t!==A&&g.tinygrailStore.fetchTemple(t)})),(0,p.default)((0,d.default)(e),"generateTreeMap",(function(){try{if(!e.charaAssets.length)return;var t=e.caculate(),r=t.total,n=void 0===r?0:r,s=t.currentTotal,a=t.filterCount,o=t.filterTotal,i=t.nodes;a&&i.push({id:0,icon:"",data:"其他"+a+"个角色",weight:o/s>.05?.05*s:o,price:o,percent:o/n});var l=function(e){var t=[];try{b.default.squarify({frame:{x:0,y:0,width:v.default.window.width,height:v.default.window.height-v.default.headerHeight-44},nodes:e},(function(e,r,n,s,a){return t.push({id:a.id,icon:(0,j.tinygrailOSS)(a.icon),name:a.data,price:a.price,percent:a.percent,fluctuation:a.fluctuation,x:parseFloat((0,j.toFixed)(e,3)),y:parseFloat((0,j.toFixed)(r,3)),w:parseFloat((0,j.toFixed)(n,3)),h:parseFloat((0,j.toFixed)(s,3))})}))}catch(e){}return t}(i).filter((function(e){return!!e.percent}));e.setState({data:l,total:n})}catch(e){(0,j.info)("渲染失败, 请刷新")}})),(0,p.default)((0,d.default)(e),"caculate",(function(){var t=e.state,r=t.caculateType,n=t.filterItems,s=e.charaAssets,a=T.MODEL_TINYGRAIL_CACULATE_TYPE.getLabel(r),o=M(s,a,e.isTemple),i=n.map((function(e){return e.id})),l=s.filter((function(e){return!i.includes(e.id)})),u=M(l,a,e.isTemple),d=Math.max(.0072-2e-4*i.length,.005),c=0,m=0,f=l.filter((function(t){if(!u)return!0;var r=C(t,a,e.isTemple);return!(r/u<d)||(c+=1,m+=r,!1)})).map((function(t){var r=C(t,a,e.isTemple);return{id:t.id,icon:t.icon||t.cover,data:t.name,weight:r,price:r,percent:r/o,fluctuation:t.fluctuation||0}}));return{total:o,currentTotal:u,filterCount:c,filterTotal:m,filterRate:d,nodes:f}})),(0,p.default)((0,d.default)(e),"reset",(function(){e.setState({filterItems:[]}),e.generateTreeMap()})),(0,p.default)((0,d.default)(e),"onToggleItem",(function(t){var r=t.id,n=t.name;if(0!==r){var s=e.state.filterItems,a=s.findIndex((function(e){return e.id===r}));e.setState({filterItems:-1===a?[].concat((0,o.default)(s),[{id:r,name:n}]):s.filter((function(e,t){return t!==a}))}),e.generateTreeMap()}})),(0,p.default)((0,d.default)(e),"onTypeSelect",(function(t){(0,x.t)("资产分析.选择范围",{type:t}),e.setState({type:T.MODEL_TINYGRAIL_ASSETS_TYPE.getValue(t),filterItems:[]}),e.generateTreeMap(),e.setStorage(I)})),(0,p.default)((0,d.default)(e),"onCaculateTypeSelect",(function(t){(0,x.t)("资产分析.选择计算类型",{type:t}),e.setState({caculateType:T.MODEL_TINYGRAIL_CACULATE_TYPE.getValue(t),filterItems:[]}),e.generateTreeMap(),e.setStorage(I)})),(0,p.default)((0,d.default)(e),"onHideLow",(function(){e.setState({filterItems:e.charaAssets.filter((function(e){return C(e,"持仓价值")<100}))}),e.generateTreeMap()})),e}return(0,u.default)(r,[{key:"label",get:function(){var e=this.state.type;return T.MODEL_TINYGRAIL_ASSETS_TYPE.getLabel(e)}},{key:"isTemple",get:function(){return"圣殿股"===this.label}},{key:"charaAssets",get:function(){var e=this.params.userName;if(e===A)return this.isTemple?[]:g.tinygrailStore.valhallList.list;if("流动股"===this.label)return g.tinygrailStore.charaAll(e).list;if(this.isTemple)return g.tinygrailStore.temple(e).list;var t=(0,y.toJS)(g.tinygrailStore.temple(e).list),r=(0,y.toJS)(g.tinygrailStore.charaAll(e).list).map((function(e){var r=t.findIndex((function(t){return t.id===e.id}));if(-1!==r){var n=Object.assign({},t[r],e);return t.splice(r,1),n}return e}));return[].concat((0,o.default)(r),(0,o.default)(t))}}]),r}(_.default),(0,h.default)(a.prototype,"label",[y.computed],Object.getOwnPropertyDescriptor(a.prototype,"label"),a.prototype),(0,h.default)(a.prototype,"isTemple",[y.computed],Object.getOwnPropertyDescriptor(a.prototype,"isTemple"),a.prototype),(0,h.default)(a.prototype,"charaAssets",[y.computed],Object.getOwnPropertyDescriptor(a.prototype,"charaAssets"),a.prototype),a);function M(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=0;try{e.forEach((function(e){n+=C(e,t,r)}))}catch(e){}return n}function C(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=0;try{switch(t){case"持仓价值":r?n+=e.sacrifices*(S.VALHALL_PRICE[e.id]||10)*.5:e.sacrifices?n+=(e.state||0)*(e.current||S.VALHALL_PRICE[e.id]||10)+e.sacrifices*(e.current||S.VALHALL_PRICE[e.id]||10)*.5:n+=e.state*e.current;break;case"周股息":r?n+=(e.sacrifices||0)*e.rate*(e.level+1)*.3:e.sacrifices?n+=(e.state||0)*e.rate+e.sacrifices*e.rate*(e.level+1)*.3:n+=(e.state||0)*e.rate;break;case"股息":n+=e.rate;break;case"持股数":r?n+=.5*e.sacrifices:e.sacrifices?n+=(e.state||0)+.5*e.sacrifices:n+=e.state;break;case"市场价":n+=e.marketValue||0;break;case"发行量":n+=e.total||0;break;case"当前价":n+=e.current||0;break;case"交易量":n+=e.change||0;break;case"当前涨跌":n+=Math.abs(100*e.fluctuation||0);break;case"新番奖励":n+=e.bonus||0}}catch(e){}return n}},"./src/screens/tinygrail/tree/tool-bar/index.tsx":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.map.js"),r("./node_modules/core-js/modules/es.number.to-fixed.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.string.split.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),r("./node_modules/core-js/modules/es.parse-int.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=n(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),o=(n(r("./node_modules/react/index.js")),r("./src/components/index.ts")),i=r("./src/screens/_/index.ts"),l=r("./src/stores/index.ts"),u=r("./src/utils/index.ts"),d=r("./src/utils/decorators/index.ts"),c=r("./src/utils/fetch/index.ts"),m=r("./src/constants/index.ts"),f=r("./src/screens/tinygrail/tree/tool-bar/styles.ts"),p=r("./node_modules/react/jsx-runtime.js"),h=m.TINYGRAIL_ASSETS_TYPE.map((function(e){return e.label})),y=m.TINYGRAIL_CACULATE_TYPE.map((function(e){return e.label})),g=m.TINYGRAIL_CACULATE_TEMPLE_TYPE.map((function(e){return e.label}));t.default=(0,d.obc)((function(e,t){var r,n=e.style,d=t.$,j=(0,f.memoStyles)(),_=d.state,x=_.type,b=_.caculateType,T=_.total,v=void 0===T?0:T,S=_.filterItems,w=m.MODEL_TINYGRAIL_ASSETS_TYPE.getLabel(x),A=m.MODEL_TINYGRAIL_CACULATE_TYPE.getLabel(b);return r=v>m.B?(0,u.toFixed)(v/m.B,1)+"亿":v>m.M?(0,u.toFixed)(v/m.M,1)+"万":(0,u.toFixed)(v||0,1),(0,p.jsxs)(o.Flex,{style:(0,u.stl)(j.container,n),children:[(0,p.jsx)(o.Flex.Item,{flex:.8,children:(0,p.jsx)(i.Popover,{data:h,onSelect:function(e){return d.onTypeSelect(e)},children:(0,p.jsxs)(o.Flex,{style:j.item,justify:"center",children:[(0,p.jsx)(o.Text,{type:"warning",children:w||"范围"}),(0,p.jsx)(o.Text,{style:l._.ml.xs,type:"warning",size:12,children:d.charaAssets.length})]})})}),(0,p.jsx)(o.Flex.Item,{children:(0,p.jsx)(i.Popover,{data:d.isTemple?g:y,onSelect:function(e){return d.onCaculateTypeSelect(e)},children:(0,p.jsxs)(o.Flex,{style:j.item,justify:"center",children:[(0,p.jsx)(o.Text,{type:"warning",children:A||"计算类型"}),(0,p.jsx)(o.Text,{style:l._.ml.xs,type:"warning",size:12,children:r})]})})}),(0,p.jsx)(o.Flex.Item,{flex:.8,children:(0,p.jsx)(i.Popover,{data:["重置","隐藏低持仓"].concat((0,a.default)(S.map((function(e){return e.name+" #"+e.id})))),onSelect:function(e){if((0,c.t)("资产分析.选择筛选",{title:e}),"重置"!==e)if("隐藏低持仓"!==e){var t=e.split(" #"),r=(0,s.default)(t,2),n=r[0],a=r[1];d.onToggleItem({id:parseInt(a),name:n})}else d.onHideLow();else d.reset()},children:(0,p.jsxs)(o.Flex,{style:j.item,justify:"center",children:[(0,p.jsx)(o.Iconfont,{style:{color:S.length?l._.colorWarning:l._.colorTinygrailText},name:"md-filter-list",size:16}),(0,p.jsx)(o.Text,{style:l._.ml.sm,type:S.length?"warning":"tinygrailText",children:S.length||"-"})]})})})]})}))},"./src/screens/tinygrail/tree/tool-bar/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var n=r("./src/stores/index.ts");t.memoStyles=n._.memoStyles((function(){return{container:{height:n._.r(44),backgroundColor:n._.colorTinygrailContainer},item:{paddingVertical:n._.md-4,paddingHorizontal:n._.md},touchable:{paddingHorizontal:n._.lg}}}))},"./src/utils/thirdParty/treemap.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.array.slice.js"),r("./node_modules/core-js/modules/es.array.sort.js"),r("./node_modules/core-js/modules/es.array.map.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={},s=function(){function e(e,t){this.weight=0,this.frame={x:0,y:0,width:0,height:0},this.weight=e,this.data=t}return e.weigh=function(e){var t=new Array,r=new Array;for(e.level=0,r.push(e);r.length>0;){var n=r.pop();if(t[n.level]||(t[n.level]=new Array),t[n.level].push(n),n.nodes)for(var s=0;s<n.nodes.length;++s){var a=n.nodes[s];a.level=n.level+1,a.parent=n,r.push(a)}}for(s=t.length-2;s>=0;--s)for(var o=0;o<t[s].length;++o){for(var i=0,l=0;l<t[s][o].nodes.length;++l)i+=t[s][o].nodes[l].weight;t[s][o].weight=i}},e}();n.InternalNode=s;var a=function(){};function o(){return.05}n.Size=a,n.maxFontSize=function(e){return.1*(e.width+e.height)},n.minFontSize=function(e){return 8},n.fontSize=function(e,t){var r=this.minFontSize(e),n=this.maxFontSize(e);return Math.max(r,(t.width+t.height)/(e.width+e.height)*n)},n.tileMarginPercentage=o,n.xMargin=function(e){return.05*e.width},n.yMargin=function(e){return.05*e.height};var i=function(){function e(){}return e.squarify=function(e,t,r,s){var a=e.slice(0);this.scaleWeights(e,t,r),a.sort((function(e,t){return t.weight-e.weight})),a.push(new n.InternalNode(0,null));for(var o=r<t,i=o?r:t,l=0,u=0,d=t,c=r,m=[];a.length>0;){var f=a[0],p=f.weight,h=this.sum(m),y=this.min(m),g=this.max(m),j=this.worst(h+p,Math.min(y,p),Math.max(g,p),i),_=this.worst(h,y,g,i);if(0==m.length||j<_)m.push(f),a.shift();else{var x,b=l,T=u,v=h/i;for(x=0;x<m.length;++x){var S=m[x].weight/v;o?(s(b,T,v,S,m[x]),T+=S):(s(b,T,S,v,m[x]),b+=S)}o?(l+=v,d-=v):(u+=v,c-=v),i=(o=c<d)?c:d,m=[]}}},e.worst=function(e,t,r,n){return Math.max(n*n*r/(e*e),e*e/(n*n*t))},e.scaleWeights=function(e,t,r){for(var n=t*r/this.sum(e),s=0;s<e.length;s++)e[s].weight=n*e[s].weight},e.max=function(e){return Math.max.apply(Math,this.weights(e))},e.min=function(e){return Math.min.apply(Math,this.weights(e))},e.sum=function(e){for(var t=0,r=0;r<e.length;++r)t+=e[r].weight;return t},e.weights=function(e){return e.map((function(e){return e.weight}),e)},e}();n.squarify=function(e,t){n.InternalNode.weigh(e);var r=new Array;for(r.push(e);r.length>0;){if((o=r.shift()).nodes&&o.nodes.length>0){i.squarify(o.nodes,o.frame.width,o.frame.height,(function(e,t,r,n,s){s.frame={x:o.frame.x+e,y:o.frame.y+t,width:r,height:n}}));for(var s=0;s<o.nodes.length;++s){var a=o.nodes[s];a.nodes&&a.nodes.length>0&&r.push(a)}}}for(r.push(e);r.length>0;){var o;if(t((o=r.pop()).frame.x,o.frame.y,o.frame.width,o.frame.height,o),o.nodes)for(s=0;s<o.nodes.length;++s)r.push(o.nodes[s])}};t.default=n}}]);