(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2084],{"./src/screens/tinygrail/_/characters-modal/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.NAMESPACE=t.ITEMS_USED=t.ITEMS_TYPE=t.HIT_SLOP=void 0;t.NAMESPACE="TinygrailCompCharactersModal",t.HIT_SLOP={top:6,right:6,bottom:6,left:6},t.ITEMS_TYPE={混沌魔方:"chaos",虚空道标:"guidepost",星光碎片:"stardust",闪光结晶:"starbreak",鲤鱼之眼:"fisheye"},t.ITEMS_USED={混沌魔方:100,虚空道标:90,星光碎片:80,闪光结晶:70,鲤鱼之眼:60}},"./src/screens/tinygrail/_/characters-modal/index.tsx":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.string.trim.js"),s("./node_modules/core-js/modules/es.parse-int.js"),s("./node_modules/core-js/modules/es.number.is-nan.js"),s("./node_modules/core-js/modules/es.number.constructor.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.number.to-fixed.js"),s("./node_modules/core-js/modules/es.function.name.js"),s("./node_modules/core-js/modules/es.array.join.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.sort.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js"),s("./node_modules/core-js/modules/es.array.for-each.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),s("./node_modules/core-js/modules/es.array.reduce.js"),s("./node_modules/core-js/modules/es.object.keys.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.array.reverse.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ITEMS_TYPE",{enumerable:!0,get:function(){return M.ITEMS_TYPE}}),Object.defineProperty(t,"ITEMS_USED",{enumerable:!0,get:function(){return M.ITEMS_USED}}),t.default=void 0;var o,n,l=i(s("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),a=i(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),u=i(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=i(s("./node_modules/@babel/runtime/helpers/createClass.js")),d=i(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),m=i(s("./node_modules/@babel/runtime/helpers/inherits.js")),p=i(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),h=i(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=i(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),y=i(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),g=i(s("react")),j=i(s("./node_modules/react-native-web/dist/exports/BackHandler/index.js")),b=i(s("./node_modules/react-native-web/dist/exports/View/index.js")),x=s("./node_modules/mobx/dist/mobx.esm.js"),v=s("./src/components/index.ts"),_=s("./src/screens/_/index.ts"),S=s("./src/stores/index.ts"),T=s("./src/utils/index.ts"),k=s("./src/utils/decorators/index.ts"),O=s("./src/constants/index.ts"),P=s("./src/screens/tinygrail/_/utils.ts"),I=i(s("./src/screens/tinygrail/_/characters-modal/item/index.tsx")),C=i(s("./src/screens/tinygrail/_/characters-modal/item-bottom/index.tsx")),w=i(s("./src/screens/tinygrail/_/characters-modal/list/index.tsx")),D=i(s("./src/screens/tinygrail/_/characters-modal/search-input/index.tsx")),F=s("./src/screens/tinygrail/_/characters-modal/utils.ts"),M=s("./src/screens/tinygrail/_/characters-modal/ds.ts"),L=s("./src/screens/tinygrail/_/characters-modal/styles.ts"),E=s("./node_modules/react/jsx-runtime.js");function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,h.default)(e);if(t){var i=(0,h.default)(this).constructor;s=Reflect.construct(r,arguments,i)}else s=r.apply(this,arguments);return(0,p.default)(this,s)}}var N=(n=function(e){(0,m.default)(i,e);var t,s=R(i);function i(){var e;(0,u.default)(this,i);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return e=s.call.apply(s,[this].concat(o)),(0,f.default)((0,d.default)(e),"state",{leftItem:null,leftValue:"",leftFilter:"",rightItem:null,rightValue:"",rightFilter:"",search:null,loading:!1,title:"",amount:0,isTemple:!1,focus:!1}),(0,f.default)((0,d.default)(e),"title",void 0),(0,f.default)((0,d.default)(e),"onBackAndroid",(function(){var t=e.props,s=t.visible,r=t.onClose;return!!s&&(r(),!0)})),(0,f.default)((0,d.default)(e),"onSelectLeft",(function(t){var s=e.state.leftItem,r=s&&s.id===t.id;e.setState({leftItem:r?null:t,amount:0},(function(){var t=e.state,s=t.leftItem,r=t.rightItem;e.isStarDust&&s&&r&&e.setState({amount:Math.min((0,F.assets)(s),(0,F.charge)(r))})}))})),(0,f.default)((0,d.default)(e),"onSelectRight",(function(t){var s=e.state.rightItem,r=s&&s.id===t.id;e.setState({rightItem:r?null:t,amount:0},(function(){var t=e.state,s=t.leftItem,r=t.rightItem;e.isStarDust&&s&&r&&e.setState({amount:Math.min((0,F.assets)(s),(0,F.charge)(r))})}))})),(0,f.default)((0,d.default)(e),"onCancelLeft",(function(){e.setState({leftItem:null})})),(0,f.default)((0,d.default)(e),"onCancelRight",(function(){e.setState({rightItem:null})})),(0,f.default)((0,d.default)(e),"onChangeLeft",(function(t){e.setState({leftValue:(0,T.trim)(t)})})),(0,f.default)((0,d.default)(e),"onChangeRight",(function(t){var s=(0,T.trim)(t);e.setState({rightValue:s}),""===s&&e.setState({search:null})})),(0,f.default)((0,d.default)(e),"onChangeNum",(function(t){var s=parseInt(t);(Number.isNaN(s)||0==s)&&(s=""),e.setState({amount:s})})),(0,f.default)((0,d.default)(e),"onToogleIsTemple",(function(t){var s=e.state.isTemple;s&&"消耗圣殿"===t||!s&&"消耗活股"===t||e.setState({leftItem:null,isTemple:!s})})),(0,f.default)((0,d.default)(e),"onClose",(function(){(0,e.props.onClose)(),e.setState({loading:!1}),(0,T.setStorage)(M.NAMESPACE,e.state)})),(0,f.default)((0,d.default)(e),"onFocus",(function(){e.setState({focus:!0})})),(0,f.default)((0,d.default)(e),"onBlur",(function(){e.setState({focus:!1})})),(0,f.default)((0,d.default)(e),"doSearch",(0,a.default)(r.mark((function t(){var s,i,o,n;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.state.rightValue,i=String(s).trim()){t.next=5;break}return(0,T.info)("请输入关键字"),t.abrupt("return");case 5:if(!/^\d+$/.test(i)){t.next=8;break}return e.setState({search:[{id:Number(i),name:"指定 ID 人物",level:0}],rightItem:null}),t.abrupt("return");case 8:return t.next=10,S.tinygrailStore.doSearch({keyword:s});case 10:(o=t.sent).data&&0===o.data.State&&(n=o.data.Value.filter((function(e){return!e.ICO})).map((function(e){return{id:e.Id,name:e.Name,level:e.Level}})),e.setState({search:n,rightItem:null}));case 12:case"end":return t.stop()}}),t)})))),(0,f.default)((0,d.default)(e),"onSubmit",(0,a.default)(r.mark((function t(){var s,i,o,n,l,a,u,c,d;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.state,i=s.leftItem,o=s.rightItem,n=s.amount,l=s.isTemple,a=s.loading,e.canSubmit&&!a){t.next=3;break}return t.abrupt("return");case 3:return u=e.props,c=u.title,d=u.onSubmit,e.setState({loading:!0}),t.next=7,d({title:c,monoId:i.id,toMonoId:o?o.id:0,amount:n,isTemple:l});case 7:e.setState({loading:!1}),e.isStarDust&&e.setState({amount:0});case 9:case"end":return t.stop()}}),t)})))),(0,f.default)((0,d.default)(e),"onAlert",(function(){(0,T.alert)(e.alert,"使用说明")})),(0,f.default)((0,d.default)(e),"initFetch",(0,a.default)(r.mark((function t(){var s;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=(0,T.getTimestamp)(),(!e.temple._loaded||e.temple._loaded&&s-Number(e.temple._loaded)>120)&&e.fetchTemple(),(!e.chara._loaded||e.chara._loaded&&s-Number(e.chara._loaded)>120)&&e.fetchMyCharaAssets(),(!e.msrc._loaded||e.msrc._loaded&&s-Number(e.msrc._loaded)>120)&&e.fetchMsrc(),(!e.star._loaded||e.star._loaded&&s-Number(e.star._loaded)>120)&&e.fetchStar(),(!e.fantasy._loaded||e.fantasy._loaded&&s-Number(e.fantasy._loaded)>120)&&e.fetchFantasy();case 6:case"end":return t.stop()}}),t)})))),(0,f.default)((0,d.default)(e),"fetchTemple",(function(){return S.tinygrailStore.fetchTemple()})),(0,f.default)((0,d.default)(e),"fetchMyCharaAssets",(function(){return S.tinygrailStore.fetchMyCharaAssets()})),(0,f.default)((0,d.default)(e),"fetchMsrc",(function(){return S.tinygrailStore.fetchList("msrc")})),(0,f.default)((0,d.default)(e),"fetchStar",(function(){return S.tinygrailStore.fetchStar(1,100)})),(0,f.default)((0,d.default)(e),"fetchFantasy",(function(){return S.tinygrailStore.fetchFantasyList()})),(0,f.default)((0,d.default)(e),"renderLeftItem",(function(t){var s=t.item,r=e.state,i=r.leftItem,o=r.isTemple,n=(null==i?void 0:i.id)!==(null==s?void 0:s.id),l=[];return e.isStarDust?o?l.push((0,T.formatNumber)(s.sacrifices||s.state,0)):l.push((0,T.formatNumber)(s.state,0)):s.assets!==(s.sacrifices||s.state)?l.push((0,T.formatNumber)(s.assets,0)+" ("+(0,T.formatNumber)(s.sacrifices||s.state,0)+")"):l.push((0,T.formatNumber)(s.sacrifices||s.state,0)),s.current&&l.push("₵"+(0,T.formatNumber)(s.current,0)),l.push("+"+(0,T.toFixed)(s.rate,1)+" ("+(0,T.toFixed)((0,P.calculateRate)(s.rate,s.rank,s.stars),1)+")"),(0,E.jsx)(I.default,{type:"ask",id:s.id,src:(0,F.cover)(s),level:(0,F.lv)(s),name:s.name,rank:s.rank,extra:l.join(" / "),assets:s.assets,sacrifices:s.sacrifices,disabled:n,item:s,onPress:e.onSelectLeft})})),(0,f.default)((0,d.default)(e),"renderRightItem",(function(t){var s=t.item,r=e.state.rightItem,i=(null==r?void 0:r.id)!==(null==s?void 0:s.id),o=[];return s.assets&&s.assets!==s.sacrifices?o.push((0,T.formatNumber)(s.assets,0)+" ("+(0,T.formatNumber)(s.sacrifices,0)+")"):s.sacrifices&&o.push((0,T.formatNumber)(s.sacrifices,0)),s.current&&o.push("₵"+(0,T.formatNumber)(s.current,0)),s.userAmount&&o.push((0,T.formatNumber)(s.userAmount,0)),s.rate&&o.push("+"+(0,T.toFixed)(s.rate,1)+" ("+(0,T.toFixed)((0,P.calculateRate)(s.rate,s.rank,s.stars),1)+")"),(0,E.jsx)(I.default,{type:e.isStarBreak?"ask":"bid",id:s.id,src:(0,F.cover)(s),level:(0,F.lv)(s),name:s.name,extra:o.join(" / "),assets:s.assets,sacrifices:s.sacrifices,rank:s.rank,disabled:i,item:s,onPress:e.onSelectRight})})),e}return(0,c.default)(i,[{key:"componentDidMount",value:(t=(0,a.default)(r.mark((function e(){var t;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.getStorage)(M.NAMESPACE);case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:t=e.t0,this.setState(Object.assign({},t,{leftItem:null,rightItem:null,loading:!1,focus:!1,title:this.props.title})),this.title=this.props.title,this.initFetch(),j.default.addEventListener("hardwareBackPress",this.onBackAndroid);case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){try{j.default.removeEventListener("hardwareBackPress",this.onBackAndroid)}catch(e){}}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(e.title!==this.title){var t=e.leftItem,s=void 0===t?null:t,r=e.rightItem,i=void 0===r?null:r;this.setState({leftItem:s,rightItem:i,loading:!1,title:e.title}),this.title=e.title}}},{key:"temple",get:function(){return S.tinygrailStore.temple()}},{key:"chara",get:function(){return S.tinygrailStore.myCharaAssets.chara}},{key:"msrc",get:function(){return S.tinygrailStore.msrc}},{key:"star",get:function(){return S.tinygrailStore.star("1|100")}},{key:"fantasy",get:function(){return S.tinygrailStore.fantasy}},{key:"isChaos",get:function(){return"混沌魔方"===this.props.title}},{key:"isGuidePost",get:function(){return"虚空道标"===this.props.title}},{key:"isStarDust",get:function(){return"星光碎片"===this.props.title}},{key:"isStarBreak",get:function(){return"闪光结晶"===this.props.title}},{key:"isFishEye",get:function(){return"鲤鱼之眼"===this.props.title}},{key:"left",get:function(){var e=this,t=this.state,s=t.rightItem,r=t.leftValue,i=t.isTemple;if(this.isGuidePost)return Object.assign({},this.temple,{list:this.temple.list.filter((function(t){return e.props.leftItem?t.id===e.props.leftItem.id:!(t.assets<100||t.sacrifices<500)&&(s&&r?t.name.includes(r):!r||t.name.includes(r))})).sort((function(e,t){return e.rate-t.rate}))});if(this.isStarDust){var o=i?this.temple:this.chara;return Object.assign({},o,{list:o.list.filter((function(e){if((0,F.assets)(e)<10)return!1;if(s){var t=(0,F.lv)(e)-(0,F.lv)(s);return r?i?e.name.includes(r)&&(0,F.lv)(e)+(i?0:1)>=(0,F.lv)(s):e.name.includes(r)&&(0,F.assets)(e)>=Math.min(32,Math.pow(2,-(t+1))):i?(0,F.lv)(e)+(i?0:1)>=(0,F.lv)(s):(0,F.assets)(e)>=Math.min(32,Math.pow(2,-(t+1)))}return!r||e.name.includes(r)})).sort((function(e,t){return(0,F.lv)(t)-(0,F.lv)(e)}))})}return Object.assign({},this.temple,{list:this.temple.list.filter((function(t){return e.props.leftItem?t.id===e.props.leftItem.id:!((0,F.assets)(t)<250||t.sacrifices<500)&&(!r||t.name.includes(r))})).sort((function(e,t){return e.rate-t.rate}))})}},{key:"computedLeft",get:function(){var e,t,s=this.state.leftFilter;return s&&null!=(e=this.left)&&null!=(t=e.list)&&t.length?Object.assign({},this.left,{list:this.left.list.filter((function(e){return(0,F.lv)(e)==s}))}):this.left}},{key:"leftLevelMap",get:function(){var e=this.left.list,t={};try{(e||[]).forEach((function(e){return t[(0,F.lv)(e)||0]?t[(0,F.lv)(e)||0]+=1:t[(0,F.lv)(e)||0]=1}))}catch(e){console.error(e)}return t}},{key:"leftDS",get:function(){var e=this;return["全部 ("+Object.keys(this.leftLevelMap).reduce((function(t,s){return t+e.leftLevelMap[s]}),0)+")"].concat((0,l.default)(Object.keys(this.leftLevelMap).map((function(t){return"lv"+t+" ("+e.leftLevelMap[t]+")"}))))}},{key:"leftChangeText",get:function(){var e=this.state,t=e.amount,s=e.isTemple;if(this.isChaos)return"-10";if(this.isGuidePost||this.isStarBreak||this.isFishEye)return"-100";if(this.isStarDust){var r=this.state,i=r.leftItem,o=r.rightItem;if(!s&&i&&o){var n=(0,F.lv)(i)-(0,F.lv)(o);if(n<0)return"每 -"+Math.min(32,Math.pow(2,-(n+1)))}return"-"+(t||"?")}return""}},{key:"right",get:function(){var e=this;if(!this.props.title||this.isChaos)return!1;var t=this.state,s=t.search,r=t.leftItem,i=t.rightValue,o=t.isTemple;return s?{list:s,pagination:{page:1,pageTotal:1},_loaded:(0,T.getTimestamp)()}:this.isGuidePost?Object.assign({},this.msrc,{list:this.msrc.list.filter((function(e){return r&&i?e.name.includes(i):!i||e.name.includes(i)})).sort((function(e,t){return(0,F.rk)(e)-(0,F.rk)(t)}))}):this.isStarDust?Object.assign({},this.temple,{list:this.temple.list.filter((function(t){return e.props.rightItem?t.id===e.props.rightItem.id:t.assets!==t.sacrifices&&(r?i?o?t.name.includes(i)&&(0,F.lv)(t)<=(0,F.lv)(r)+(o?0:1):t.name.includes(i):!o||(0,F.lv)(t)<=(0,F.lv)(r)+(o?0:1):!i||t.name.includes(i))})).sort((function(e,t){return(0,F.rk)(e)-(0,F.rk)(t)}))}):this.isStarBreak?Object.assign({},this.star,{list:this.star.list.filter((function(e){return!i||e.name.includes(i)}))}):this.isFishEye?Object.assign({},this.fantasy,{list:this.fantasy.list.filter((function(e){return!i||e.name.includes(i)}))}):Object.assign({},this.temple,{list:this.temple.list.filter((function(e){return e.assets!==e.sacrifices&&(r?i?e.name.includes(i)&&(0,F.lv)(e)<=(0,F.lv)(r)+(o?0:1):(0,F.lv)(e)<=(0,F.lv)(r)+(o?0:1):!i||e.name.includes(i))})).sort((function(e,t){return(0,F.lv)(t)-(0,F.lv)(e)}))})}},{key:"computedRight",get:function(){var e,t,s;if(!this.right)return this.right;var r=this.state.rightFilter;return r&&null!=(e=this.right)&&null!=(t=e.list)&&t.length?Object.assign({},this.right,{list:null==(s=this.right)?void 0:s.list.filter((function(e){return(0,F.lv)(e)==r}))}):this.right}},{key:"rightLevelMap",get:function(){var e=(this.right||{}).list,t={};try{(e||[]).forEach((function(e){return t[(0,F.lv)(e)||0]?t[(0,F.lv)(e)||0]+=1:t[(0,F.lv)(e)||0]=1}))}catch(e){console.error(e)}return t}},{key:"rightDS",get:function(){var e=this;return["全部 ("+Object.keys(this.rightLevelMap).reduce((function(t,s){return t+e.rightLevelMap[s]}),0)+")"].concat((0,l.default)(Object.keys(this.rightLevelMap).map((function(t){return"lv"+t+" ("+e.rightLevelMap[t]+")"})).reverse()))}},{key:"rightChangeText",get:function(){if(this.isChaos)return"+10-100";if(this.isGuidePost)return"+10-100";var e=this.state.amount;return this.isStarDust||this.isFishEye?"+"+(e||"?"):this.isStarBreak?"-20-200":""}},{key:"canSubmit",get:function(){var e=this.state,t=e.leftItem,s=e.rightItem,r=e.amount;return this.isGuidePost?!(!t||!s):this.isStarDust?!!(t&&s&&r):!!t}},{key:"alert",get:function(){return this.isGuidePost?"虚空道标：消耗100点塔值，抽取目标随机数量的股份，消耗目标的等级必须大于等于抽取目标等级。\n左侧数据基于自己的圣殿。\n右侧数据基于最高股息前面的角色，点击搜索可以查询远端所有角色。":this.isStarDust?"星光碎片：消耗活股或塔值补充目标已损失塔值。\n消耗目标的等级必须大于等于补充目标等级，使用活股时消耗等级可以比目标等级少1级。\n塔值少于250时塔会找不到请自行查询远端数据。":"混沌魔方：消耗10点塔值，抽取随机目标10-100的股份。\n当前每天可使用3次。"}},{key:"renderFilter",value:function(e,t,s,r){return(0,E.jsx)(_.Popover.Old,{data:t,hitSlop:M.HIT_SLOP,onSelect:function(e){var t=e.split(" ")[0];r("全部"===t?"":t.replace("lv",""))},children:(0,E.jsxs)(v.Flex,{justify:"center",children:[(0,E.jsx)(v.Iconfont,{name:"md-filter-list",size:14,color:e?S._.colorAsk:S._.colorTinygrailText}),(0,E.jsxs)(v.Text,{style:S._.ml.xs,size:10,type:e?"ask":"tinygrailText",children:[e?"lv"+e:"等级",s[e]?" ("+s[e]+")":""]})]})})}},{key:"renderLeft",value:function(){var e=this,t=this.state,s=t.leftValue,r=t.leftFilter;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(v.Flex,{style:S._.ml.xs,children:[this.renderFilter(r,this.leftDS,this.leftLevelMap,(function(t){return e.setState({leftFilter:t})})),(0,E.jsx)(v.Flex.Item,{style:S._.ml.sm,children:(0,E.jsx)(D.default,{placeholder:"消耗",value:s,onChangeText:this.onChangeLeft})})]}),(0,E.jsx)(w.default,{data:this.computedLeft,renderItem:this.renderLeftItem})]})}},{key:"renderRight",value:function(){var e=this,t=this.state,s=t.rightValue,r=t.rightFilter;return this.isChaos?(0,E.jsx)(v.Text,{type:"tinygrailText",size:13,align:"center",children:"随机目标"}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(v.Flex,{children:[this.renderFilter(r,this.rightDS,this.rightLevelMap,(function(t){return e.setState({rightFilter:t})})),(0,E.jsx)(v.Flex.Item,{style:S._.ml.sm,children:(0,E.jsx)(D.default,{placeholder:"目标",value:s,returnKeyType:"search",returnKeyLabel:"搜索",onChangeText:this.onChangeRight,onSubmitEditing:this.doSearch})})]}),(0,E.jsx)(w.default,{data:this.computedRight,renderItem:this.renderRightItem})]})}},{key:"renderBottom",value:function(){var e=this.state,t=e.leftItem,s=e.rightItem;return(0,E.jsxs)(b.default,{children:[(0,E.jsxs)(v.Flex,{style:this.styles.bottom,children:[(0,E.jsx)(v.Flex.Item,{children:t?(0,E.jsx)(C.default,{src:(0,F.cover)(t),name:t.name,level:(0,F.lv)(t),change:this.leftChangeText,type:(0,F.bottomTextType)(this.leftChangeText),onPress:this.onCancelLeft}):(0,E.jsx)(v.Text,{type:"tinygrailText",size:10,children:"- 选择消耗 -"})}),!1!==this.right&&(0,E.jsx)(v.Flex.Item,{style:S._.ml.sm,children:s?(0,E.jsx)(C.default,{src:(0,F.cover)(s),name:s.name,level:(0,F.lv)(s),change:this.rightChangeText,type:(0,F.bottomTextType)(this.rightChangeText),onPress:this.onCancelRight}):(0,E.jsx)(v.Text,{type:"tinygrailText",size:10,children:"- 选择目标 -"})}),!this.isStarDust&&this.renderSubmitBtn()]}),this.isStarDust&&(0,E.jsxs)(v.Flex,{children:[this.renderForm(),this.renderSubmitBtn()]})]})}},{key:"renderSubmitBtn",value:function(){var e=this.state.loading;return(0,E.jsx)(v.Button,{style:this.canSubmit?this.styles.btn:this.styles.btnDisabled,styleText:this.styles.btnText,type:"bid",loading:e,onPress:this.onSubmit,children:"提交"},String(this.canSubmit))}},{key:"renderForm",value:function(){if(!this.isStarDust)return null;var e=this.state.amount;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(v.Text,{type:"tinygrailText",size:10,children:"消耗股份"}),(0,E.jsx)(v.Flex.Item,{style:S._.ml.sm,children:(0,E.jsx)(D.default,{keyboardType:"numeric",placeholder:"数量",value:e,onFocus:this.onFocus,onBlur:this.onBlur,onChangeText:this.onChangeNum})})]})}},{key:"render",value:function(){var e=this.props,t=e.visible,s=e.title,r=this.state.focus;return(0,E.jsxs)(v.Modal,{style:(0,T.stl)(this.styles.modal,r&&this.styles.focus),visible:t,title:s,focus:!1,type:"tinygrailPlain",onClose:this.onClose,children:[(0,E.jsxs)(v.Flex,{style:this.styles.wrap,children:[(0,E.jsx)(v.Flex.Item,{children:this.renderLeft()}),(0,E.jsx)(v.Flex.Item,{style:S._.ml.md,children:this.renderRight()})]}),this.renderBottom()]})}},{key:"styles",get:function(){return(0,L.memoStyles)()}}]),i}(g.default.Component),(0,f.default)(n,"defaultProps",{title:"",visible:!1,onClose:O.FROZEN_FN,onSubmit:O.FROZEN_FN}),o=n,(0,y.default)(o.prototype,"temple",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"temple"),o.prototype),(0,y.default)(o.prototype,"chara",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"chara"),o.prototype),(0,y.default)(o.prototype,"msrc",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"msrc"),o.prototype),(0,y.default)(o.prototype,"star",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"star"),o.prototype),(0,y.default)(o.prototype,"fantasy",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"fantasy"),o.prototype),(0,y.default)(o.prototype,"isChaos",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"isChaos"),o.prototype),(0,y.default)(o.prototype,"isGuidePost",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"isGuidePost"),o.prototype),(0,y.default)(o.prototype,"isStarDust",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"isStarDust"),o.prototype),(0,y.default)(o.prototype,"isStarBreak",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"isStarBreak"),o.prototype),(0,y.default)(o.prototype,"isFishEye",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"isFishEye"),o.prototype),(0,y.default)(o.prototype,"left",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"left"),o.prototype),(0,y.default)(o.prototype,"computedLeft",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"computedLeft"),o.prototype),(0,y.default)(o.prototype,"leftLevelMap",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"leftLevelMap"),o.prototype),(0,y.default)(o.prototype,"leftDS",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"leftDS"),o.prototype),(0,y.default)(o.prototype,"leftChangeText",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"leftChangeText"),o.prototype),(0,y.default)(o.prototype,"right",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"right"),o.prototype),(0,y.default)(o.prototype,"computedRight",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"computedRight"),o.prototype),(0,y.default)(o.prototype,"rightLevelMap",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"rightLevelMap"),o.prototype),(0,y.default)(o.prototype,"rightDS",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"rightDS"),o.prototype),(0,y.default)(o.prototype,"rightChangeText",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"rightChangeText"),o.prototype),(0,y.default)(o.prototype,"canSubmit",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"canSubmit"),o.prototype),(0,y.default)(o.prototype,"alert",[x.computed],Object.getOwnPropertyDescriptor(o.prototype,"alert"),o.prototype),o);t.default=(0,k.obc)(N)},"./src/screens/tinygrail/_/characters-modal/item-bottom/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.function.name.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var i=s("./src/components/index.ts"),o=s("./src/stores/index.ts"),n=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.ob)((function(e){var t=e.src,s=e.name,r=e.level,l=e.change,u=e.type,c=e.onPress;return(0,a.jsx)(i.Touchable,{onPress:c,children:(0,a.jsxs)(i.Flex,{children:[(0,a.jsx)(i.Avatar,{src:(0,n.tinygrailOSS)(t),size:32,name:s,borderColor:"transparent",skeletonType:"tinygrail"}),(0,a.jsxs)(i.Flex.Item,{style:o._.ml.sm,children:[(0,a.jsxs)(i.Text,{type:"tinygrailPlain",size:10,bold:!0,numberOfLines:1,children:[(0,a.jsxs)(i.Text,{type:"ask",size:10,bold:!0,children:["lv",r," "]}),s]}),(0,a.jsx)(i.Text,{style:o._.mt.xs,type:u,size:9,children:l})]})]})})}))},"./src/screens/tinygrail/_/characters-modal/item/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.function.name.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var i=s("./src/components/index.ts"),o=s("./src/stores/index.ts"),n=s("./src/utils/index.ts"),l=s("./src/utils/decorators/index.ts"),a=r(s("./src/screens/tinygrail/_/level/index.tsx")),u=r(s("./src/screens/tinygrail/_/progress/index.tsx")),c=r(s("./src/screens/tinygrail/_/rank/index.tsx")),d=s("./src/screens/tinygrail/_/characters-modal/item/styles.ts"),m=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.ob)((function(e){var t=e.type,s=e.src,r=e.id,l=e.level,p=e.rank,h=e.name,f=e.extra,y=e.assets,g=void 0===y?0:y,j=e.sacrifices,b=void 0===j?0:j,x=e.disabled,v=e.item,_=e.onPress,S=(0,d.memoStyles)();return(0,m.jsx)(i.Touchable,{onPress:function(){return _(v)},children:(0,m.jsxs)(i.Flex,{style:(0,n.stl)(S.item,!x&&S[t]),children:[s?(0,m.jsx)(i.Avatar,{src:(0,n.tinygrailOSS)(s),size:30,radius:o._.radiusXs,skeletonType:"tinygrail"}):(0,m.jsxs)(i.Text,{type:"tinygrailPlain",size:9,lineHeight:10,bold:!0,numberOfLines:1,children:["#",r," "]}),(0,m.jsxs)(i.Flex.Item,{style:o._.ml.xs,children:[(0,m.jsxs)(i.Flex,{children:[p<=500&&(0,m.jsx)(c.default,{style:S.rank,size:8,value:p}),(0,m.jsx)(i.Flex.Item,{children:(0,m.jsxs)(i.Text,{type:"tinygrailPlain",size:9,bold:!0,numberOfLines:1,children:[(0,m.jsx)(a.default,{value:l,size:9,lineHeight:9}),h]})})]}),g&&b?(0,m.jsx)(u.default,{style:o._.mt.xs,size:"xs",assets:g,sacrifices:b}):!!f&&(0,m.jsx)(i.Text,{style:o._.mt.xs,type:"tinygrailText",size:9,numberOfLines:1,children:f})]})]})})}))},"./src/screens/tinygrail/_/characters-modal/item/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{item:{height:48,paddingVertical:5,paddingHorizontal:6,marginBottom:r._.sm,borderWidth:1,borderColor:r._.select("rgba(0, 0, 0, 0.16)","rgba(255, 255, 255, 0.16)"),borderRadius:r._.radiusXs},bid:{backgroundColor:r._.colorDepthBid,borderColor:r._.colorBid},ask:{backgroundColor:r._.colorDepthAsk,borderColor:r._.colorAsk},rank:{minWidth:16,paddingHorizontal:2}}}))},"./src/screens/tinygrail/_/characters-modal/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var i=s("./src/screens/_/index.ts"),o=s("./src/utils/app/index.ts"),n=s("./src/utils/decorators/index.ts"),l=s("./src/screens/tinygrail/styles.ts"),a=s("./src/screens/tinygrail/_/characters-modal/list/styles.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ob)((function(e){var t=e.data,s=e.renderItem;return t?(0,u.jsx)(i.PaginationList2,{style:a.styles.listView,keyExtractor:o.keyExtractor,refreshControlProps:l.refreshControlProps,data:t.list,showMesume:!1,footerTextType:"tinygrailText",footerEmptyDataText:"没有符合的结果",renderItem:s}):null}))},"./src/screens/tinygrail/_/characters-modal/list/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var r=s("./src/stores/index.ts");t.styles=r._.create({listView:{flex:1,marginTop:r._.sm}})},"./src/screens/tinygrail/_/characters-modal/search-input/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=(r(s("react")),s("./src/components/index.ts")),n=s("./src/stores/index.ts"),l=s("./src/utils/decorators/index.ts"),a=s("./src/screens/tinygrail/_/characters-modal/search-input/styles.ts"),u=s("./node_modules/react/jsx-runtime.js"),c=["placeholder","value","onChangeText","onSubmitEditing"],d={top:6,right:4,bottom:6,left:6};t.default=(0,l.ob)((function(e){var t=e.placeholder,s=e.value,r=e.onChangeText,l=e.onSubmitEditing,m=void 0===l?void 0:l,p=(0,i.default)(e,c),h=(0,a.memoStyles)();return(0,u.jsxs)(o.Flex,{style:h.wrap,children:[(0,u.jsx)(o.Flex.Item,{children:(0,u.jsx)(o.Input,Object.assign({style:h.input,placeholder:t,placeholderTextColor:n._.colorTinygrailText,value:String(s),onChangeText:r,onSubmitEditing:m},p))}),!!m&&(0,u.jsx)(o.Touchable,{hitSlop:d,onPress:m,children:(0,u.jsx)(o.Iconfont,{style:h.search,name:"md-search",size:14,color:n._.colorTinygrailText})})]})}))},"./src/screens/tinygrail/_/characters-modal/search-input/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{wrap:{borderColor:r._.select("rgba(0, 0, 0, 0.16)","rgba(255, 255, 255, 0.16)"),borderWidth:1,borderRadius:r._.radiusXs},input:Object.assign({height:26,padding:0},r._.fontSize(10),{color:r._.colorTinygrailPlain,backgroundColor:"transparent",borderWidth:0,borderRadius:0}),search:{marginRight:6}}}))},"./src/screens/tinygrail/_/characters-modal/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{modal:{width:r._.r(r._.window.width-2*r._.wind),maxWidth:r._.r(400),backgroundColor:r._.tSelect(r._.colorTinygrailContainer,r._.__colorPlain__),borderRadius:r._.radiusMd},focus:{marginTop:-Math.floor(.56*r._.window.height)},wrap:{width:"100%",maxWidth:r._.window.maxWidth,height:.64*r._.window.height,maxHeight:664,paddingBottom:r._.sm,marginTop:r._.md},information:{position:"absolute",zIndex:1,top:0,right:0,marginTop:-28,marginRight:8},bottom:{height:40,marginBottom:r._.sm,marginLeft:6},btn:{width:80,height:28,marginLeft:r._.sm,borderRadius:0},btnDisabled:{width:80,height:28,marginLeft:r._.sm,opacity:.5,borderRadius:0},btnText:Object.assign({},r._.fontSize(11)),segmented:{width:"100%",height:28},segmentedExtra:{borderRadius:r._.radiusXs}}}))},"./src/screens/tinygrail/_/characters-modal/utils.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.assets=function(e){return e.state||e.assets||0},t.bottomTextType=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").includes("+")?"bid":"ask"},t.charge=function(e){return(e.sacrifices||0)-(e.assets||0)},t.cover=function(e){return e.cover||e.icon||""},t.lv=function(e){return e.cLevel||e.level||1},t.rk=function(e){return e.rank||501}},"./src/screens/tinygrail/_/level/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.number.constructor.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var i=s("./src/components/index.ts"),o=s("./src/utils/decorators/index.ts"),n=s("./node_modules/react/jsx-runtime.js");t.default=(0,o.ob)((function(e){var t=e.style,s=e.size,r=void 0===s?10:s,o=e.lineHeight,l=void 0===o?10:o,a=e.value;return!a||Number(a)<=1?null:(0,n.jsxs)(i.Text,{style:t,type:"ask",size:r,lineHeight:l||r,bold:!0,children:["lv",a," "]})}))}}]);