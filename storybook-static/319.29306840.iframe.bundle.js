(self.webpackChunkweb=self.webpackChunkweb||[]).push([[319],{"./src/screens/discovery/anime/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/discovery/anime/component/extra/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Extra")},"./src/screens/discovery/anime/component/extra/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o,n=s("./src/components/index.ts"),l=s("./src/screens/_/index.ts"),c=s("./src/stores/index.ts"),d=s("./src/utils/decorators/index.ts"),i=s("./src/constants/index.ts"),u=s("./src/screens/discovery/anime/component/extra/ds.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,d.ob)((function(e){var t=e.$,s=e.title,r=void 0===s?"Anime":s;t&&(o=null==t?void 0:t.isList);var d=void 0!==o||void 0!==(null==t?void 0:t.isList),u=void 0===(null==t?void 0:t.isList)?o:null==t?void 0:t.isList;return(0,a.jsxs)(n.Flex,{style:c._.mr.xs,children:[d&&(0,a.jsx)(l.IconLayout,{style:c._.mr.xs,list:u,onPress:(null==t?void 0:t.switchLayout)||i.FROZEN_FN,children:(0,a.jsx)(n.Heatmap,{right:30,id:r+".切换布局"})}),(0,a.jsx)(l.IconHeader,{name:"md-vertical-align-top",onPress:(null==t?void 0:t.scrollToTop)||i.FROZEN_FN,children:(0,a.jsx)(n.Heatmap,{id:r+".到顶"})})]})}),u.COMPONENT)},"./src/screens/discovery/anime/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.for-each.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterDS=t.COMPONENT=t.ADVANCE_LIMIT=void 0;var r=s("./src/utils/subject/anime/index.ts"),o=(t.COMPONENT="Anime",t.ADVANCE_LIMIT=80,[[],[]]);r.ANIME_TAGS.forEach((function(e,t){return o[t%2?1:0].push(e)}));var n=[[],[]];r.ANIME_OFFICIAL.forEach((function(e,t){return n[t%2?1:0].push(e)}));t.filterDS=[{title:"地区",type:"area",data:r.ANIME_AREA},{title:"版本",type:"type",data:r.ANIME_TYPE},{title:"年份",type:"year",data:r.ANIME_YEAR,always:!0},{title:"季度",type:"begin",data:r.ANIME_BEGIN,always:!0},{title:"状态",type:"status",data:r.ANIME_STATUS},{title:"类型",type:"tags",data:o,multiple:!0,multiSelect:!0},{title:"制作",type:"official",data:n,multiple:!0},{title:"排序",type:"sort",data:r.ANIME_SORT,always:!0},{title:"收藏",type:"collected",data:r.ANIME_COLLECTED}]},"./src/screens/discovery/anime/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Header")},"./src/screens/discovery/anime/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),l=r(s("./src/screens/discovery/anime/component/extra/index.tsx")),c=s("./src/screens/discovery/anime/header/ds.ts"),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.obc)((function(e,t){var s=e.title,r=void 0===s?"找番剧":s,n=e.alias,c=void 0===n?"Anime":n,i=e.hm,u=t.$;return(0,d.jsx)(o.Header,{title:r,alias:c,hm:i||["anime","Anime"],headerRight:function(){return(0,d.jsx)(l.default,{$:u,title:c})}})}),c.COMPONENT)},"./src/screens/discovery/nsfw/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/nsfw/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/discovery/nsfw/component/item-grid/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/nsfw/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"ItemGrid"),t.EVENT={id:"NSFW.跳转"}},"./src/screens/discovery/nsfw/component/item-grid/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.slice.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/screens/_/index.ts"),l=s("./src/stores/index.ts"),c=s("./src/utils/decorators/index.ts"),d=s("./src/constants/index.ts"),i=s("./src/screens/discovery/nsfw/component/item-grid/ds.ts"),u=s("./src/screens/discovery/nsfw/component/item-grid/styles.ts"),a=s("./node_modules/react/jsx-runtime.js");t.default=(0,c.obc)((function(e,t){var s=e.pickIndex,r=e.index,c=e.num,f=t.navigation,m=(0,u.memoStyles)(),p=l.otaStore.nsfwSubjectId(s),j=l.otaStore.nsfw(p),y=j.id,v=j.title,_=j.cover,b=j.score,h=j.rank,x=j.date;if(!y){var O=l._.grid(c);return(0,a.jsx)(o.Flex,{style:{width:O.width,height:d.IMG_HEIGHT_LG,marginBottom:O.marginLeft+l._.xs,marginLeft:O.marginLeft},justify:"center",children:(0,a.jsx)(o.Loading.Raw,{})})}return(0,a.jsx)(n.ItemCollectionsGrid,{navigation:f,style:(l._.isPad||l._.isLandscape)&&!(r%c)&&m.left,event:i.EVENT,num:c,id:y,cover:_?"https://lain.bgm.tv/pic/cover/m/"+_+".jpg":d.IMG_DEFAULT,cdn:!1,name:v,score:b,rank:h,airtime:x?String(x).slice(0,7):"",collection:l.collectionStore.collect(y)})}),i.COMPONENT)},"./src/screens/discovery/nsfw/component/item-grid/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{left:{marginLeft:r._.wind}}}))},"./src/screens/discovery/nsfw/component/item/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/nsfw/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Item")},"./src/screens/discovery/nsfw/component/item/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.join.js"),s("./node_modules/core-js/modules/es.array.filter.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/components/cover/utils.ts"),l=s("./src/screens/_/index.ts"),c=s("./src/stores/index.ts"),d=s("./src/utils/decorators/index.ts"),i=s("./src/utils/fetch/index.ts"),u=s("./src/constants/index.ts"),a=s("./src/screens/discovery/nsfw/component/item/ds.ts"),f=s("./src/screens/discovery/nsfw/component/item/styles.ts"),m=s("./node_modules/react/jsx-runtime.js");t.default=(0,d.obc)((function(e,t){var s=e.pickIndex,r=(t.$,t.navigation),d=(0,f.memoStyles)(),a=c.otaStore.nsfwSubjectId(s),p=c.otaStore.nsfw(a),j=p.id,y=p.title,v=p.cover,_=p.score,b=p.total,h=p.rank,x=p.info,O=p.date,N=p.eps;if(!j)return(0,m.jsx)(o.Flex,{style:d.loading,justify:"center",children:(0,m.jsx)(o.Loading.Raw,{})});var g=y.length>=20?13:y.length>=14?14:15,T=v?"https://lain.bgm.tv/pic/cover/m/"+v+".jpg":u.IMG_DEFAULT,E=x||[O,N?N+"话":""].filter((function(e){return!!e})).join(" / "),w=c.collectionStore.collect(j);return(0,m.jsx)(o.Touchable,{style:d.container,animate:!0,onPress:function(){r.push("Subject",{subjectId:j,_cn:y,_image:(0,n.getCoverSrc)(T,u.IMG_WIDTH_LG)}),(0,i.t)("NSFW.跳转",{subjectId:j})},children:(0,m.jsxs)(o.Flex,{style:d.wrap,align:"start",children:[(0,m.jsx)(l.Cover,{src:T,width:u.IMG_WIDTH_LG,height:u.IMG_HEIGHT_LG,radius:!0,cdn:!1,textOnly:u.TEXT_ONLY||!c.userStore.isLogin}),(0,m.jsx)(o.Flex.Item,{style:c._.ml.wind,children:(0,m.jsxs)(o.Flex,{style:d.content,direction:"column",justify:"between",align:"start",children:[(0,m.jsxs)(o.Flex,{align:"start",children:[(0,m.jsxs)(o.Flex.Item,{children:[(0,m.jsx)(o.Text,{size:g,bold:!0,numberOfLines:3,children:y}),(0,m.jsx)(o.Text,{style:c._.mt.sm,size:11,lineHeight:14,children:E})]}),(0,m.jsx)(l.Manage,{subjectId:j,collection:w,onPress:function(){c.uiStore.showManageModal({subjectId:j,title:y,status:u.MODEL_COLLECTION_STATUS.getValue(w)},"找NSFW")}})]}),(0,m.jsxs)(o.Flex,{style:c._.mt.md,wrap:"wrap",children:[(0,m.jsx)(l.Rank,{value:h}),(0,m.jsx)(l.Stars,{style:c._.mr.xs,value:_,simple:!0}),!!b&&(0,m.jsxs)(o.Text,{type:"sub",size:11,bold:!0,children:["(",b,")"]})]})]})})]})})}),a.COMPONENT)},"./src/screens/discovery/nsfw/component/item/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts"),o=s("./src/constants/index.ts");t.memoStyles=r._.memoStyles((function(){return{container:{paddingLeft:r._.wind},wrap:{paddingVertical:r._.md,paddingRight:r._.wind},content:{height:o.IMG_HEIGHT_LG},loading:{height:o.IMG_HEIGHT_LG}}}))},"./src/screens/discovery/nsfw/component/list/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/nsfw/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"List")},"./src/screens/discovery/nsfw/component/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=r(s("react")),f=s("./src/components/index.ts"),m=s("./src/screens/_/index.ts"),p=s("./src/stores/index.ts"),j=s("./src/utils/decorators/index.ts"),y=s("./src/utils/dev/index.ts"),v=s("./src/screens/discovery/nsfw/ds.ts"),_=r(s("./src/screens/discovery/nsfw/component/item/index.tsx")),b=r(s("./src/screens/discovery/nsfw/component/item-grid/index.tsx")),h=s("./src/screens/discovery/nsfw/component/list/utils.ts"),x=s("./src/screens/discovery/nsfw/component/list/ds.ts"),O=s("./node_modules/react/jsx-runtime.js");function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}var g=function(e){(0,c.default)(s,e);var t=N(s);function s(){var e;(0,o.default)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return e=t.call.apply(t,[this].concat(n)),(0,u.default)((0,l.default)(e),"connectRef",(function(t){var s=e.context.$;t&&t.scrollToOffset&&(s.scrollToOffset=t.scrollToOffset)})),(0,u.default)((0,l.default)(e),"renderItem",(function(t){var s=t.item,r=t.index;return e.context.$.isList?(0,O.jsx)(_.default,{pickIndex:s}):(0,O.jsx)(b.default,{pickIndex:s,index:r,num:e.num})})),e}return(0,n.default)(s,[{key:"num",get:function(){return p._.portrait(3,5)}},{key:"renderFilter",value:function(){var e=this;return(0,O.jsx)(m.Filter,{filterDS:v.filterDS,name:"NSFW",type:"NSFW",lastUpdate:"2024-07",information:"数据最后快照于 2024-07-22，在版本更新前数据不会有任何变化。\n        \n本页数据非来源自 bgm.tv，并非所有条目都进行了收录。\n        \n有比 bgm.tv 更准确的分类、更丰富的筛选和更多的排序。\n        \n目前本功能仅对正常登录用户开放，非高级会员在一个条件下会有最多只显示前 "+v.ADVANCE_LIMIT+" 条数据的限制。\n        \n整理不易，若觉得有用可以通过各种方式给与鼓励支持!",renderRight:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(f.Touchable,{style:p._.mr.xs,onPress:function(){e.context.navigation.push("Hentai")},children:(0,O.jsx)(f.Text,{size:11,type:"sub",bold:!0,children:"前往旧版 ·"})})})})}},{key:"render",value:function(){(0,y.r)(x.COMPONENT);var e=this.context.$,t=e.state,s=t._loaded,r=t.layout,o=t.data;if(!s&&!o._loaded)return(0,O.jsxs)(O.Fragment,{children:[this.renderFilter(),(0,O.jsx)(f.Loading,{})]});var n=e.isList?void 0:this.num;return(0,O.jsx)(m.PaginationList2,{keyExtractor:h.keyExtractor,connectRef:this.connectRef,contentContainerStyle:p._.container.bottom,numColumns:n,data:e.list,limit:9,ListHeaderComponent:this.renderFilter(),renderItem:this.renderItem,onPage:e.onPage},""+r+n)}}]),s}(a.default.Component);t.default=(0,j.obc)(g)},"./src/screens/discovery/nsfw/component/list/utils.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.keyExtractor=function(e){return String(e)}},"./src/screens/discovery/nsfw/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterDS=t.COMPONENT=t.ADVANCE_LIMIT=void 0;var r=s("./src/utils/subject/nsfw/index.ts");t.COMPONENT="NSFW",t.ADVANCE_LIMIT=60,t.filterDS=[{title:"类型",type:"type",data:r.NSFW_TYPE,always:!0},{title:"年份",type:"year",data:r.NSFW_YEAR,always:!0},{title:"排序",type:"sort",data:r.NSFW_SORT,always:!0},{title:"收藏",type:"collected",data:r.NSFW_COLLECTED}]},"./src/screens/discovery/nsfw/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/screens/_/index.ts"),l=s("./src/stores/index.ts"),c=s("./src/utils/decorators/index.ts"),d=s("./src/utils/hooks/index.ts"),i=r(s("./src/screens/discovery/anime/header/index.tsx")),u=r(s("./src/screens/discovery/nsfw/component/list/index.tsx")),a=r(s("./src/screens/discovery/nsfw/store/index.ts")),f=s("./node_modules/react/jsx-runtime.js");t.default=(0,c.ic)(a.default,(function(e,t){var s=t.$;return(0,d.useRunAfter)((function(){s.init()})),(0,d.useObserver)((function(){return(0,f.jsxs)(o.Component,{id:"screen-nsfw",children:[(0,f.jsx)(i.default,{title:"找条目",alias:"NSFW",hm:["nsfw","NSFW"]}),(0,f.jsx)(o.Page,{loaded:s.state._loaded,children:l.userStore.isLimit?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n.FilterSwitch,{name:"NSFW"}),(0,f.jsx)(o.Text,{style:l._.mt.lg,align:"center",children:"游客或您所在的用户组暂不开放此功能"})]}):(0,f.jsx)(u.default,{})})]})}))}))},"./src/screens/discovery/nsfw/store/action.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./src/stores/index.ts"),f=s("./src/utils/fetch/index.ts"),m=r(s("./src/screens/discovery/nsfw/store/fetch.ts"));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=p(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),(0,u.default)((0,l.default)(e),"onSelect",(function(t,s){e.setState({query:Object.assign({},e.state.query,(0,u.default)({},t,s))}),setTimeout((function(){e.search(),e.save(),(0,f.t)("NSFW.选择",{type:t,value:s})}),0)})),(0,u.default)((0,l.default)(e),"scrollToOffset",null),(0,u.default)((0,l.default)(e),"scrollToTop",(function(){"function"==typeof e.scrollToOffset&&(e.scrollToOffset({x:0,y:0,animated:!0}),(0,f.t)("NSFW.到顶"))})),(0,u.default)((0,l.default)(e),"switchLayout",(function(){var t=e.isList?"grid":"list";e.setState({layout:t}),e.save(),(0,f.t)("NSFW.切换布局",{layout:t})})),(0,u.default)((0,l.default)(e),"onExpand",(function(){e.setState({expand:!e.state.expand}),e.save()})),(0,u.default)((0,l.default)(e),"onPage",(function(e,t){return t&&t%5==0&&(0,f.t)("NSFW.更多",{page:t}),a.otaStore.onNSFWPage(e)})),e}return(0,o.default)(s)}(m.default)},"./src/screens/discovery/nsfw/store/computed.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),a=s("./node_modules/mobx/dist/mobx.esm.js"),f=s("./src/stores/index.ts"),m=s("./src/screens/discovery/nsfw/ds.ts"),p=r(s("./src/screens/discovery/nsfw/store/state.ts"));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=(o=function(e){(0,c.default)(s,e);var t=j(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,l.default)(s,[{key:"isList",get:function(){return"list"===this.state.layout}},{key:"total",get:function(){return this.state.data.list.length}},{key:"list",get:function(){var e=this.state,t=e.data,s=e.query,r=t.list;return"隐藏"===s.collected&&(r=r.filter((function(e){var t=f.otaStore.nsfwSubjectId(e);return!f.collectionStore.collect(t)}))),f.systemStore.advance||(r=r.filter((function(e,t){return t<m.ADVANCE_LIMIT}))),r}}]),s}(p.default),(0,u.default)(o.prototype,"isList",[a.computed],Object.getOwnPropertyDescriptor(o.prototype,"isList"),o.prototype),(0,u.default)(o.prototype,"total",[a.computed],Object.getOwnPropertyDescriptor(o.prototype,"total"),o.prototype),(0,u.default)(o.prototype,"list",[a.computed],Object.getOwnPropertyDescriptor(o.prototype,"list"),o.prototype),o)},"./src/screens/discovery/nsfw/store/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.NAMESPACE=void 0;var r=s("./src/utils/subject/nsfw/index.ts"),o=s("./src/constants/index.ts"),n=s("./src/screens/discovery/nsfw/ds.ts");t.NAMESPACE="Screen"+n.COMPONENT,t.STATE={query:{type:o.MODEL_SUBJECT_TYPE.getValue("动画"),year:r.NSFW_YEAR[0],sort:"评分人数",collected:""},data:o.LIST_EMPTY,layout:"list",expand:!1,_loaded:!1}},"./src/screens/discovery/nsfw/store/fetch.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./src/utils/subject/nsfw/index.ts"),f=r(s("./src/screens/discovery/nsfw/store/computed.ts"));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=m(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),(0,u.default)((0,l.default)(e),"search",(function(t){setTimeout((function(){e.setState({data:(0,a.search)(t||e.state.query)})}),80)})),e}return(0,o.default)(s)}(f.default)},"./src/screens/discovery/nsfw/store/index.ts":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/web.timers.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),a=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=s("./src/stores/index.ts"),p=s("./src/utils/subject/nsfw/index.ts"),j=o(s("./src/screens/discovery/nsfw/store/action.ts")),y=s("./src/screens/discovery/nsfw/store/ds.ts");function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,a.default)(e);if(t){var o=(0,a.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,u.default)(this,s)}}var _=!1,b=function(e){(0,i.default)(s,e);var t=v(s);function s(){var e;(0,c.default)(this,s);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return e=t.call.apply(t,[this].concat(l)),(0,f.default)((0,d.default)(e),"init",(0,n.default)(r.mark((function t(){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=Object,t.t2={},t.next=5,e.getStorage(y.NAMESPACE);case 5:if(t.t3=t.sent,t.t4={_loaded:_},t.t5=t.t1.assign.call(t.t1,t.t2,t.t3,t.t4),t.t0.setState.call(t.t0,t.t5),_){t.next=12;break}return t.next=12,(0,p.init)();case 12:_=!0,m.collectionStore.fetchUserCollectionsQueue(!1),e.search(),setTimeout((function(){e.setState({_loaded:!0})}),120);case 16:case"end":return t.stop()}}),t)})))),e}return(0,l.default)(s)}(j.default);t.default=b},"./src/screens/discovery/nsfw/store/state.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=s("./node_modules/mobx/dist/mobx.esm.js"),f=r(s("./src/utils/store/index.ts")),m=s("./src/screens/discovery/nsfw/store/ds.ts");function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=p(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o)),(0,u.default)((0,l.default)(e),"state",(0,a.observable)(m.STATE)),(0,u.default)((0,l.default)(e),"save",(function(){return e.setStorage(m.NAMESPACE)})),e}return(0,o.default)(s)}(f.default)}}]);