(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5243],{"./src/screens/discovery/anime/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/discovery/anime/component/extra/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Extra")},"./src/screens/discovery/anime/component/extra/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o,n=s("./src/components/index.ts"),l=s("./src/screens/_/index.ts"),a=s("./src/stores/index.ts"),d=s("./src/utils/decorators/index.ts"),i=s("./src/constants/index.ts"),c=s("./src/screens/discovery/anime/component/extra/ds.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,d.ob)((function(e){var t=e.$,s=e.title,r=void 0===s?"Anime":s;t&&(o=null==t?void 0:t.isList);var d=void 0!==o||void 0!==(null==t?void 0:t.isList),c=void 0===(null==t?void 0:t.isList)?o:null==t?void 0:t.isList;return(0,u.jsxs)(n.Flex,{style:a._.mr.xs,children:[d&&(0,u.jsx)(l.IconLayout,{style:a._.mr.xs,list:c,onPress:(null==t?void 0:t.switchLayout)||i.FROZEN_FN,children:(0,u.jsx)(n.Heatmap,{right:30,id:r+".切换布局"})}),(0,u.jsx)(l.IconHeader,{name:"md-vertical-align-top",onPress:(null==t?void 0:t.scrollToTop)||i.FROZEN_FN,children:(0,u.jsx)(n.Heatmap,{id:r+".到顶"})})]})}),c.COMPONENT)},"./src/screens/discovery/anime/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.for-each.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterDS=t.COMPONENT=t.ADVANCE_LIMIT=void 0;var r=s("./src/utils/subject/anime/index.ts"),o=(t.COMPONENT="Anime",t.ADVANCE_LIMIT=80,[[],[]]);r.ANIME_TAGS.forEach((function(e,t){return o[t%2?1:0].push(e)}));var n=[[],[]];r.ANIME_OFFICIAL.forEach((function(e,t){return n[t%2?1:0].push(e)}));t.filterDS=[{title:"地区",type:"area",data:r.ANIME_AREA},{title:"版本",type:"type",data:r.ANIME_TYPE},{title:"首字",type:"first",data:r.ANIME_FIRST},{title:"年份",type:"year",data:r.ANIME_YEAR,always:!0},{title:"季度",type:"begin",data:r.ANIME_BEGIN,always:!0},{title:"状态",type:"status",data:r.ANIME_STATUS},{title:"类型",type:"tags",data:o,multiple:!0,multiSelect:!0},{title:"制作",type:"official",data:n,multiple:!0},{title:"排序",type:"sort",data:r.ANIME_SORT,always:!0},{title:"收藏",type:"collected",data:r.ANIME_COLLECTED}]},"./src/screens/discovery/anime/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/discovery/anime/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Header")},"./src/screens/discovery/anime/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),l=r(s("./src/screens/discovery/anime/component/extra/index.tsx")),a=s("./src/screens/discovery/anime/header/ds.ts"),d=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.obc)((function(e,t){var s=e.title,r=void 0===s?"找番剧":s,n=e.alias,a=void 0===n?"Anime":n,i=e.hm,c=t.$;return(0,d.jsx)(o.Header,{title:r,alias:a,hm:i||["anime","Anime"],headerRight:function(){return(0,d.jsx)(l.default,{$:c,title:a})}})}),a.COMPONENT)},"./src/screens/discovery/manga/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.for-each.js"),s("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterDS=t.COMPONENT=t.ADVANCE_LIMIT=void 0;var r=s("./src/utils/subject/manga/index.ts"),o=(t.COMPONENT="Manga",t.ADVANCE_LIMIT=60,[[],[],[]]);r.MANGA_TAGS.forEach((function(e,t){t%3==0?o[0].push(e):t%3==1?o[1].push(e):o[2].push(e)}));t.filterDS=[{title:"首字",type:"first",data:r.MANGA_FIRST},{title:"年份",type:"year",data:r.MANGA_YEAR,always:!0},{title:"状态",type:"status",data:r.MANGA_STATUS},{title:"类型",type:"tags",data:o,multiple:!0,multiSelect:!0},{title:"排序",type:"sort",data:r.MANGA_SORT,always:!0},{title:"收藏",type:"collected",data:r.MANGA_COLLECTED}]},"./src/screens/discovery/manga/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),l=s("./src/utils/hooks/index.ts"),a=r(s("./src/screens/discovery/anime/header/index.tsx")),d=r(s("./src/screens/discovery/manga/list/index.tsx")),i=r(s("./src/screens/discovery/manga/store/index.ts")),c=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ic)(i.default,(function(e,t){var s=t.$;return(0,l.useRunAfter)((function(){s.init()})),(0,l.useObserver)((function(){return(0,c.jsxs)(o.Component,{id:"screen-manga",children:[(0,c.jsx)(a.default,{title:"找漫画",alias:"Manga",hm:["manga","Manga"]}),(0,c.jsx)(o.Page,{loaded:s.state._loaded,children:(0,c.jsx)(d.default,{})})]})}))}))},"./src/screens/discovery/manga/item-grid/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=void 0;t.EVENT={id:"Manga.跳转"}},"./src/screens/discovery/manga/item-grid/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/screens/_/index.ts"),l=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),d=s("./src/constants/index.ts"),i=s("./src/screens/discovery/manga/item-grid/ds.ts"),c=s("./src/screens/discovery/manga/item-grid/styles.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=e.pickIndex,r=e.index,a=e.num,m=t.navigation,f=(0,c.memoStyles)(),p=l.otaStore.mangaSubjectId(s),j=l.otaStore.manga(p),y=j.id,_=j.mid,v=j.image,b=j.title,h=j.score,x=j.rank,g=j.publish;if(!y){var O=l._.grid(a);return(0,u.jsx)(o.Flex,{style:{width:O.width,height:d.IMG_HEIGHT_LG,marginBottom:O.marginLeft+l._.xs,marginLeft:O.marginLeft},justify:"center",children:(0,u.jsx)(o.Loading.Raw,{})})}return(0,u.jsx)(n.ItemCollectionsGrid,{style:(l._.isPad||l._.isLandscape)&&!(r%a)&&f.left,navigation:m,num:a,id:y,mid:_,cover:v?"//lain.bgm.tv/pic/cover/m/"+v+".jpg":d.IMG_DEFAULT,name:b,score:h,rank:x,airtime:g,typeCn:"书籍",collection:l.collectionStore.collect(y),event:i.EVENT})}))},"./src/screens/discovery/manga/item-grid/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{left:{marginLeft:r._.wind}}}))},"./src/screens/discovery/manga/item/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.array.join.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.array.map.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/components/cover/utils.ts"),l=s("./src/screens/_/index.ts"),a=s("./src/stores/index.ts"),d=s("./src/utils/index.ts"),i=s("./src/utils/decorators/index.ts"),c=s("./src/utils/fetch/index.ts"),u=s("./src/constants/index.ts"),m=s("./src/screens/discovery/manga/item/styles.ts"),f=s("./node_modules/react/jsx-runtime.js");t.default=(0,i.obc)((function(e,t){var s=e.index,r=e.pickIndex,i=t.navigation,p=(0,m.memoStyles)(),j=a.otaStore.mangaSubjectId(r),y=a.otaStore.manga(j),_=y.id,v=y.mid,b=y.author,h=y.title,x=y.cates,g=y.ep,O=y.image,M=y.score,T=y.rank,E=y.total,P=y.status,A=y.publish;if(!_)return(0,f.jsx)(o.Flex,{style:p.loading,justify:"center",children:(0,f.jsx)(o.Loading.Raw,{})});var C=h.length>=20?13:h.length>=14?14:15,I=O?"https://lain.bgm.tv/pic/cover/m/"+O+".jpg":u.IMG_DEFAULT,S=String(x).split(" "),N=[P,A,b,g].filter((function(e){return!!e})).join(" / "),R=a.collectionStore.collect(_);return(0,f.jsxs)(o.Touchable,{style:p.container,animate:!0,onPress:(0,c.withT)((function(){i.push("Subject",{subjectId:_,_cn:h,_image:(0,n.getCoverSrc)(I,u.IMG_WIDTH_LG),_type:"书籍",_mid:v})}),"Manga.跳转",{subjectId:_}),children:[(0,f.jsxs)(o.Flex,{style:p.wrap,align:"start",children:[(0,f.jsx)(l.Cover,{src:I,width:u.IMG_WIDTH_LG,height:u.IMG_HEIGHT_LG,radius:!0,cdn:!(0,d.x18)(_)}),(0,f.jsxs)(o.Flex.Item,{style:a._.ml.wind,children:[(0,f.jsxs)(o.Flex,{align:"start",children:[(0,f.jsx)(o.Flex.Item,{children:(0,f.jsxs)(o.Flex,{style:p.content,direction:"column",justify:"between",align:"start",children:[(0,f.jsx)(o.Text,{size:C,bold:!0,numberOfLines:2,children:h}),(0,f.jsx)(o.Text,{size:11,lineHeight:14,children:N})]})}),(0,f.jsx)(l.Manage,{subjectId:_,collection:R,typeCn:"书籍",onPress:function(){a.uiStore.showManageModal({subjectId:_,title:h,status:u.MODEL_COLLECTION_STATUS.getValue(R),action:"读"},"找漫画")}})]}),(0,f.jsxs)(o.Flex,{style:p.bottom,children:[(0,f.jsx)(l.Rank,{value:T}),(0,f.jsx)(l.Stars,{style:a._.mr.xs,value:M,simple:!0}),!!E&&(0,f.jsxs)(o.Text,{style:a._.mr.sm,type:"sub",size:11,bold:!0,children:["(",E,")"]}),(0,f.jsx)(o.Flex.Item,{children:(0,f.jsx)(o.Flex,{children:S.map((function(e){return(0,f.jsx)(l.Tag,{style:a._.mr.sm,value:e},e)}))})})]})]})]}),0===s&&(0,f.jsx)(o.Heatmap,{id:"Manga.跳转"})]})}))},"./src/screens/discovery/manga/item/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts"),o=s("./src/constants/index.ts");t.memoStyles=r._.memoStyles((function(){var e=.58*o.IMG_HEIGHT_LG;return{container:{paddingLeft:r._.wind},wrap:{paddingVertical:r._.md,paddingRight:r._.wind},content:{height:e},loading:{height:o.IMG_HEIGHT_LG},bottom:{marginTop:o.IMG_HEIGHT_LG-e-16}}}))},"./src/screens/discovery/manga/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.array.slice.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.keyExtractor=O;var o=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),a=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=r(s("react")),m=s("./src/components/index.ts"),f=s("./src/screens/_/index.ts"),p=s("./src/stores/index.ts"),j=s("./src/utils/decorators/index.ts"),y=s("./src/constants/index.ts"),_=s("./src/screens/discovery/manga/ds.ts"),v=r(s("./src/screens/discovery/manga/item/index.tsx")),b=r(s("./src/screens/discovery/manga/item-grid/index.tsx")),h=s("./node_modules/react/jsx-runtime.js");function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}var g=function(e){(0,a.default)(s,e);var t=x(s);function s(){var e;(0,o.default)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,c.default)((0,l.default)(e),"connectRef",(function(t){var s=e.context.$;t&&t.scrollToOffset&&(s.scrollToOffset=t.scrollToOffset)})),(0,c.default)((0,l.default)(e),"renderItem",(function(t){var s=t.item,r=t.index;return e.context.$.isList?(0,h.jsx)(v.default,{pickIndex:s,index:r}):(0,h.jsx)(b.default,{pickIndex:s,index:r,num:e.num})})),e}return(0,n.default)(s,[{key:"num",get:function(){return p._.portrait(3,5)}},{key:"renderFilter",value:function(){return(0,h.jsx)(f.Filter,{filterDS:_.filterDS,name:"漫画",type:"Manga",lastUpdate:y.TEXT_UPDATE_MANGA.slice(0,7),information:"数据最后快照于 "+y.TEXT_UPDATE_MANGA+"，在版本更新前数据不会有任何变化，漫画因变化频率较低预计半年更新一次。\n        \n本页数据非来源自 bgm.tv，而是作者从互联网上花了很大功夫，经过筛选优化后，与 bgm.tv 相应条目对应的数据。\n        \n有比 bgm.tv 更准确的分类、更丰富的筛选、最后更新章节和更多的排序。\n        \n目前本功能对所有用户开放，非高级会员在一个条件下会有最多只显示前 "+_.ADVANCE_LIMIT+" 条数据的限制。\n        \n本页面只要存在的条目，均有其对应的源头。整理不易若觉得有用可以通过各种方式给与鼓励支持!"})}},{key:"render",value:function(){var e=this.context.$,t=e.state,s=t._loaded,r=t.layout,o=t.data;if(!s&&!o._loaded)return(0,h.jsxs)(h.Fragment,{children:[this.renderFilter(),(0,h.jsx)(m.Loading,{})]});var n=e.isList?void 0:this.num;return(0,h.jsx)(f.PaginationList2,{keyExtractor:O,connectRef:this.connectRef,contentContainerStyle:p._.container.bottom,numColumns:n,data:e.list,limit:9,ListHeaderComponent:this.renderFilter(),renderItem:this.renderItem,onPage:e.onPage},""+r+n)}}]),s}(u.default.Component);t.default=(0,j.obc)(g);function O(e){return String(e)}},"./src/screens/discovery/manga/store/action.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),n=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=s("./src/stores/index.ts"),f=s("./src/utils/fetch/index.ts"),p=r(s("./src/screens/discovery/manga/store/fetch.ts"));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,i.default)(this,s)}}t.default=function(e){(0,d.default)(s,e);var t=j(s);function s(){var e;(0,l.default)(this,s);for(var r=arguments.length,n=new Array(r),d=0;d<r;d++)n[d]=arguments[d];return e=t.call.apply(t,[this].concat(n)),(0,u.default)((0,a.default)(e),"initQuery",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.setState({expand:!0,query:Object.assign({},e.state.query,{tags:t})})})),(0,u.default)((0,a.default)(e),"onSelect",(function(t,s){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.state.query;if("tags"===t){var l=n.tags,a=void 0===l?[]:l;r?e.setState({query:Object.assign({},n,{tags:""===s?[]:a.includes(s)?a.filter((function(e){return s!==e})):[].concat((0,o.default)(a),[s])})}):e.setState({query:Object.assign({},n,{tags:""===s?[]:[s]})})}else e.setState({query:Object.assign({},n,(0,u.default)({},t,s))});setTimeout((function(){e.search(),e.save(),(0,f.t)("Manga.选择",{type:t,value:s,multiple:r})}),0)})),(0,u.default)((0,a.default)(e),"scrollToOffset",null),(0,u.default)((0,a.default)(e),"scrollToTop",(function(){"function"==typeof e.scrollToOffset&&(e.scrollToOffset({x:0,y:0,animated:!0}),(0,f.t)("Manga.到顶"))})),(0,u.default)((0,a.default)(e),"switchLayout",(function(){var t=e.isList?"grid":"list";e.setState({layout:t}),e.save(),(0,f.t)("Manga.切换布局",{layout:t})})),(0,u.default)((0,a.default)(e),"onExpand",(function(){e.setState({expand:!e.state.expand}),e.save()})),(0,u.default)((0,a.default)(e),"onPage",(function(e,t){return t&&t%5==0&&(0,f.t)("Manga.更多",{page:t}),m.otaStore.onMangaPage(e)})),e}return(0,n.default)(s)}(p.default)},"./src/screens/discovery/manga/store/computed.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),a=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),u=s("./node_modules/mobx/dist/mobx.esm.js"),m=s("./src/stores/index.ts"),f=s("./src/screens/discovery/manga/ds.ts"),p=r(s("./src/screens/discovery/manga/store/state.ts"));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=(o=function(e){(0,a.default)(s,e);var t=j(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,l.default)(s,[{key:"isList",get:function(){return"list"===this.state.layout}},{key:"total",get:function(){return this.state.data.list.length}},{key:"list",get:function(){var e=this.state,t=e.data,s=e.query,r=t.list;return"隐藏"===s.collected&&(r=r.filter((function(e){var t=m.otaStore.mangaSubjectId(e);return!m.collectionStore.collect(t)}))),m.systemStore.advance||(r=r.filter((function(e,t){return t<f.ADVANCE_LIMIT}))),r}}]),s}(p.default),(0,c.default)(o.prototype,"isList",[u.computed],Object.getOwnPropertyDescriptor(o.prototype,"isList"),o.prototype),(0,c.default)(o.prototype,"total",[u.computed],Object.getOwnPropertyDescriptor(o.prototype,"total"),o.prototype),(0,c.default)(o.prototype,"list",[u.computed],Object.getOwnPropertyDescriptor(o.prototype,"list"),o.prototype),o)},"./src/screens/discovery/manga/store/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.NAMESPACE=void 0;var r=s("./src/constants/index.ts"),o=s("./src/screens/discovery/manga/ds.ts");t.NAMESPACE="Screen"+o.COMPONENT,t.STATE={query:{first:"",year:2022,begin:"",status:"",tags:[],hd:"",sort:"评分人数",collected:""},data:r.LIST_EMPTY,layout:"list",expand:!1,_loaded:!1}},"./src/screens/discovery/manga/store/fetch.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),a=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=s("./src/utils/subject/manga/index.ts"),m=r(s("./src/screens/discovery/manga/store/computed.ts"));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,a.default)(s,e);var t=f(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,c.default)((0,l.default)(e),"search",(function(t){setTimeout((function(){e.setState({data:(0,u.search)(t||e.state.query)})}),80)})),e}return(0,o.default)(s)}(m.default)},"./src/screens/discovery/manga/store/index.ts":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.string.search.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/web.timers.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),a=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),c=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=s("./src/stores/index.ts"),p=s("./src/utils/subject/manga/index.ts"),j=o(s("./src/screens/discovery/manga/store/action.ts")),y=s("./src/screens/discovery/manga/store/ds.ts");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,c.default)(this,s)}}var v=!1,b=function(e){(0,i.default)(s,e);var t=_(s);function s(){var e;(0,a.default)(this,s);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return e=t.call.apply(t,[this].concat(l)),(0,m.default)((0,d.default)(e),"init",(0,n.default)(r.mark((function t(){var s,o;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=Object,t.t2={},t.next=5,e.getStorage(y.NAMESPACE);case 5:if(t.t3=t.sent,t.t4={_loaded:v},t.t5=t.t1.assign.call(t.t1,t.t2,t.t3,t.t4),t.t0.setState.call(t.t0,t.t5),v){t.next=12;break}return t.next=12,(0,p.init)();case 12:return v=!0,s=e.params._tags,(o=void 0===s?[]:s).length&&e.initQuery("string"==typeof o?[o]:o),t.next=17,(0,p.init)();case 17:e.search(),f.collectionStore.fetchUserCollectionsQueue(!1,"书籍"),setTimeout((function(){e.setState({_loaded:!0})}),120);case 20:case"end":return t.stop()}}),t)})))),e}return(0,l.default)(s)}(j.default);t.default=b},"./src/screens/discovery/manga/store/state.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),a=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=s("./node_modules/mobx/dist/mobx.esm.js"),m=r(s("./src/utils/store/index.ts")),f=s("./src/screens/discovery/manga/store/ds.ts");function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,i.default)(e);if(t){var o=(0,i.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,d.default)(this,s)}}t.default=function(e){(0,a.default)(s,e);var t=p(s);function s(){var e;(0,n.default)(this,s);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,c.default)((0,l.default)(e),"params",void 0),(0,c.default)((0,l.default)(e),"state",(0,u.observable)(f.STATE)),(0,c.default)((0,l.default)(e),"save",(function(){return e.setStorage(f.NAMESPACE)})),e}return(0,o.default)(s)}(m.default)}}]);