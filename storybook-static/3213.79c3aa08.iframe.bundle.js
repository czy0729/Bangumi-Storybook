(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3213],{"./src/screens/tinygrail/top-week/index.tsx":(e,t,r)=>{var n=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.function.name.js"),r("./node_modules/core-js/modules/es.array.map.js");var s=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=s(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=s(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=s(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=s(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=s(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=s(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=s(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=s(r("./node_modules/react/index.js")),f=s(r("./node_modules/react-native-web/dist/exports/View/index.js")),h=r("./src/components/index.ts"),y=r("./src/screens/_/index.ts"),x=r("./src/stores/index.ts"),j=r("./src/utils/index.ts"),b=r("./src/utils/decorators/index.ts"),g=r("./src/utils/fetch/index.ts"),_=r("./src/constants/index.ts"),k=s(r("./src/screens/tinygrail/top-week/store.ts")),v=r("./src/screens/tinygrail/top-week/styles.ts"),w=r("./node_modules/react/jsx-runtime.js");function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.default)(e);if(t){var s=(0,u.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,c.default)(this,r)}}var T=function(e){(0,d.default)(r,e);var t=C(r);function r(){var e;(0,a.default)(this,r);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return e=t.call.apply(t,[this].concat(s)),(0,p.default)((0,i.default)(e),"renderItem",(function(t){var r,n,s,o,a,l=e.context.navigation;return r="new"===t.rankChange?"warning":t.rankChange<0?"ask":"bid",n=t.extra>_.M?(0,j.formatNumber)(t.extra/_.M,1)+"万":(0,j.formatNumber)(t.extra,1),s=t.extraChange<0?"ask":"bid",o=t.extraChange>_.M?(0,j.formatNumber)(t.extraChange/_.M,1)+"万":(0,j.formatNumber)(Math.abs(t.extraChange),1),a=t.typeChange<0?"ask":"bid",(0,w.jsx)(f.default,{style:e.styles.item,children:(0,w.jsxs)(h.Flex,{style:e.styles.wrap,children:[(0,w.jsx)(h.Avatar,{style:e.styles.avatar,src:(0,j.tinygrailOSS)(t.avatar),size:36,borderColor:"transparent",name:t.name,skeletonType:"tinygrail",onPress:function(){(0,g.t)("每周萌王.跳转",{to:"Mono",monoId:t.id}),l.push("Mono",{monoId:"character/"+t.id,_name:t.name})}}),(0,w.jsx)(h.Flex.Item,{style:x._.ml.md,children:(0,w.jsx)(h.Touchable,{onPress:function(){(0,g.t)("每周萌王.跳转",{to:"TinygrailSacrifice",monoId:t.id}),l.push("TinygrailSacrifice",{monoId:"character/"+t.id})},children:(0,w.jsxs)(h.Flex,{children:[(0,w.jsx)(h.Flex.Item,{children:(0,w.jsxs)(h.Flex,{children:[(0,w.jsx)(h.Text,{style:e.styles.rank,size:12,bold:!0,align:"center",children:t.rank}),(0,w.jsxs)(h.Text,{type:"tinygrailPlain",bold:!0,children:[t.name,!!t.rankChange&&(0,w.jsxs)(h.Text,{type:r,children:[" ",t.rankChange>0&&"+",t.rankChange]})]})]})}),(0,w.jsxs)(f.default,{style:x._.ml.sm,children:[(0,w.jsxs)(h.Text,{type:"tinygrailText",size:11,align:"right",bold:!0,children:[(0,w.jsxs)(h.Text,{size:13,type:"tinygrailPlain",bold:!0,children:["+",n]}),"  ",t.type,"人"]}),(0,w.jsxs)(h.Flex,{style:x._.mt.xs,justify:"end",children:[!!t.extraChange&&(0,w.jsxs)(h.Text,{type:s,size:11,children:[t.extraChange>0?"+":"-",o]}),!!t.typeChange&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.Text,{type:"tinygrailText",size:11,children:" "}),(0,w.jsxs)(h.Text,{type:a,size:11,children:[t.typeChange>0&&"+",t.typeChange,"人"]})]})]}),(0,w.jsxs)(h.Text,{style:x._.mt.xs,type:"tinygrailText",size:11,align:"right",children:["平均拍价：",(0,j.formatNumber)((t.extra+t.price*t.sacrifices)/t.assets)]})]})]})})})]})},t.id)})),e}return(0,l.default)(r,[{key:"componentDidMount",value:function(){this.context.$.init()}},{key:"render",value:function(){var e=this.context.$,t=e.topWeek.list;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.Header,{title:"每周萌王",hm:["tinygrail/top-week","TopWeek"],statusBarEvents:!1,statusBarEventsType:"Tinygrail",headerRight:function(){return(0,w.jsx)(y.IconHeader,{name:"md-refresh",color:x._.colorTinygrailPlain,onPress:(0,o.default)(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,g.t)("每周萌王.刷新"),t.next=3,e.fetchTopWeek();case 3:(0,j.info)("已刷新");case 4:case"end":return t.stop()}}),t)})))})}}),(0,w.jsx)(h.Page,{style:x._.container.tinygrail,children:(0,w.jsx)(h.ScrollView,{style:x._.container.flex,contentContainerStyle:x._.container.bottom,scrollToTop:!0,children:t.map(this.renderItem)})})]})}},{key:"styles",get:function(){return(0,v.memoStyles)()}}]),r}(m.default.Component);t.default=(0,b.inject)(k.default)((0,b.obc)(T));try{topweek.displayName="topweek",topweek.__docgenInfo={description:"",displayName:"topweek",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/tinygrail/top-week/index.tsx#topweek"]={docgenInfo:topweek.__docgenInfo,name:"topweek",path:"src/screens/tinygrail/top-week/index.tsx#topweek"})}catch(e){}},"./src/screens/tinygrail/top-week/store.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,o=n(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=n(r("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=n(r("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=n(r("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),m=r("./node_modules/mobx/dist/mobx.esm.js"),f=r("./src/stores/index.ts"),h=n(r("./src/utils/store/index.ts"));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.default)(e);if(t){var s=(0,c.default)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,d.default)(this,r)}}t.default=(s=function(e){(0,i.default)(r,e);var t=y(r);function r(){var e;(0,o.default)(this,r);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s)),(0,u.default)((0,l.default)(e),"init",(function(){return e.fetchTopWeek()})),(0,u.default)((0,l.default)(e),"fetchTopWeek",(function(){return f.tinygrailStore.fetchTopWeek()})),e}return(0,a.default)(r,[{key:"topWeek",get:function(){return f.tinygrailStore.topWeek}}]),r}(h.default),(0,p.default)(s.prototype,"topWeek",[m.computed],Object.getOwnPropertyDescriptor(s.prototype,"topWeek"),s.prototype),s)},"./src/screens/tinygrail/top-week/styles.ts":(e,t,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var n=r("./src/stores/index.ts");t.memoStyles=n._.memoStyles((function(){return{item:{paddingLeft:n._.wind,backgroundColor:n._.colorTinygrailContainer},wrap:{paddingVertical:n._.sm+4,paddingRight:n._.wind},avatar:{backgroundColor:n._.tSelect(n._._colorDarkModeLevel2,n._.colorTinygrailBg)},rank:{minWidth:20,marginRight:6,color:n._.__colorPlain__,textShadowOffset:{width:1,height:1},textShadowRadius:1,textShadowColor:"rgba(0, 0, 0, 0.48)",backgroundColor:"#ffc107",borderRadius:n._.radiusXs,overflow:"hidden"}}}))}}]);