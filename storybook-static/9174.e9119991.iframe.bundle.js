(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9174],{"./src/screens/tinygrail/advance/index.tsx":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.reflect.construct.js");var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=s(n("./node_modules/@babel/runtime/helpers/createClass.js")),o=s(n("./node_modules/@babel/runtime/helpers/inherits.js")),a=s(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=s(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=s(n("react")),d=n("./src/components/index.ts"),u=n("./src/screens/_/index.ts"),m=n("./src/stores/index.ts"),f=n("./src/utils/index.ts"),y=n("./src/utils/decorators/index.ts"),p=n("./src/utils/fetch/index.ts"),v=s(n("./src/screens/tinygrail/advance/menus/index.tsx")),j=n("./node_modules/react/jsx-runtime.js");function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,l.default)(e);if(t){var r=(0,l.default)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,a.default)(this,n)}}var h=function(e){(0,o.default)(n,e);var t=g(n);function n(){return(0,r.default)(this,n),t.apply(this,arguments)}return(0,i.default)(n,[{key:"render",value:function(){var e=this.props.navigation;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Header,{title:"高级分析",hm:["tinygrail/advance","TinygrailAdvance"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,j.jsx)(u.IconHeader,{name:"md-info-outline",color:m._.colorTinygrailPlain,onPress:function(){(0,p.t)("高级分析.提示"),(0,f.alert)("本栏目功能建立于作者自身想法, 核心基于角色股息, 仅供参考\n普通用户每个功能4小时内只能刷新1次\n高级用户为防止误刷新对服务器造成不必要的压力也有1分钟限制\n高级用户的定义为付过费的用户, 人工维护\n功能算法有更好的可以反馈")}})}}),(0,j.jsx)(d.Page,{style:m._.container.tinygrail,children:(0,j.jsx)(v.default,{navigation:e})})]})}}]),n}(c.default.Component);t.default=(0,y.ob)(h)},"./src/screens/tinygrail/advance/menu-item/index.tsx":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.object.assign.js");var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("react"));var r=n("./src/components/index.ts"),i=n("./src/utils/index.ts"),o=n("./src/utils/fetch/index.ts"),a=n("./src/utils/decorators/index.ts"),l=n("./src/screens/tinygrail/advance/menu-item/styles.ts"),c=n("./node_modules/react/jsx-runtime.js");t.default=(0,a.ob)((function(e){var t=e.navigation,n=e.style,s=e.pathname,a=e.config,d=e.title,u=e.icon,m=(0,l.memoStyles)();return(0,c.jsx)(r.Touchable,{style:m.container,onPress:function(){(0,o.t)("高级分析.跳转",Object.assign({to:s},a)),t.push(s,a)},children:(0,c.jsxs)(r.Flex,{style:(0,i.stl)(m.block,n),children:[(0,c.jsx)(r.Text,{type:"tinygrailPlain",size:18,bold:!0,children:d}),(0,c.jsx)(r.Iconfont,{style:m.icon,name:u,size:46})]})})}))},"./src/screens/tinygrail/advance/menu-item/styles.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=n("./src/stores/index.ts"),r=Math.floor((s._.window.width-2*s._.wind-s._._wind)/2),i=Math.min(r/2.6,s._.device(88,112));t.memoStyles=s._.memoStyles((function(){return{container:{marginRight:s._._wind,marginBottom:s._.md,borderRadius:s._.radiusSm,overflow:"hidden"},block:{width:r,height:i,paddingLeft:20,backgroundColor:s._.tSelect(s._.colorTinygrailBorder,s._.colorTinygrailBg)},icon:{position:"absolute",top:"50%",right:-10,marginTop:-24,color:s._.colorTinygrailIcon,opacity:.24}}}))},"./src/screens/tinygrail/advance/menus/index.tsx":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js");var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("react"));var r=n("./src/components/index.ts"),i=n("./src/utils/decorators/index.ts"),o=s(n("./src/screens/tinygrail/advance/menu-item/index.tsx")),a=n("./src/screens/tinygrail/advance/menus/styles.ts"),l=n("./node_modules/react/jsx-runtime.js");t.default=(0,i.obc)((function(e){var t=e.navigation,n=(0,a.memoStyles)();return(0,l.jsxs)(r.Flex,{style:n.section,wrap:"wrap",children:[(0,l.jsx)(o.default,{style:n.bid,navigation:t,title:"买入推荐",pathname:"TinygrailAdvanceAsk",icon:"md-add-circle-outline"}),(0,l.jsx)(o.default,{style:n.ask,navigation:t,title:"卖出推荐",pathname:"TinygrailAdvanceBid",icon:"md-remove-circle-outline"}),(0,l.jsx)(o.default,{navigation:t,title:"拍卖推荐",pathname:"TinygrailAdvanceAuction",icon:"md-gavel"}),(0,l.jsx)(o.default,{navigation:t,title:"拍卖推荐 B",pathname:"TinygrailAdvanceAuction2",icon:"md-gavel"}),(0,l.jsx)(o.default,{navigation:t,title:"低价股",pathname:"TinygrailAdvanceState",icon:"md-attach-money"}),(0,l.jsx)(o.default,{navigation:t,title:"资金分析",pathname:"TinygrailTree",icon:"md-insert-chart-outlined"})]})}))},"./src/screens/tinygrail/advance/menus/styles.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=n("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{section:{marginLeft:s._.wind},bid:{backgroundColor:s._.colorDepthBid},ask:{backgroundColor:s._.colorDepthAsk}}}))}}]);