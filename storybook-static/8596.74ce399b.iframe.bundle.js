(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8596],{"./src/screens/discovery/catalog/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/discovery/catalog/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Component")},"./src/screens/discovery/catalog/component/list/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/discovery/catalog/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"List"),t.EVENT={id:"目录.跳转"}},"./src/screens/discovery/catalog/component/list/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.object.assign.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=o(s("./node_modules/react-native-web/dist/exports/View/index.js")),n=s("./src/components/index.ts"),a=s("./src/screens/_/index.ts"),c=s("./src/stores/index.ts"),l=s("./src/utils/decorators/index.ts"),d=o(s("./src/screens/discovery/catalog/component/pagination/index.tsx")),i=o(s("./src/screens/discovery/catalog/component/tool-bar/index.tsx")),u=s("./src/screens/discovery/catalog/component/list/ds.ts"),f=s("./src/screens/discovery/catalog/component/list/styles.ts"),p=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.obc)((function(e,t){var s=t.$;return(0,p.jsxs)(n.ScrollView,{contentContainerStyle:c._.mb.md,scrollToTop:!0,children:[!s.state.fixedFilter&&(0,p.jsx)(i.default,{}),s.isLimit?(0,p.jsxs)(n.Flex,{style:f.styles.empty,direction:"column",justify:"center",children:[(0,p.jsx)(n.Mesume,{size:80}),(0,p.jsx)(n.Text,{style:[f.styles.text,c._.mt.sm],type:"sub",size:13,lineHeight:15,align:"center",children:"此功能仅对正常注册用户开放"})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.default,{style:f.styles.container,children:s.state.show&&(s.catalog._loaded&&!s.catalog.list.length?(0,p.jsxs)(n.Flex,{style:f.styles.empty,direction:"column",justify:"center",children:[(0,p.jsx)(n.Mesume,{size:80}),(0,p.jsx)(n.Text,{style:[f.styles.text,c._.mt.sm],type:"sub",size:13,lineHeight:15,align:"center",children:"到底了"})]}):s.catalog.list.map((function(e,t){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.ItemCatalog,Object.assign({event:u.EVENT},e,{index:t,filter:"不限"===s.state.filterKey?"":s.state.filterKey}),e.id),1===t&&(0,p.jsx)(n.Heatmap,{id:"目录.跳转"})]})})))}),!s.state.fixedPagination&&s.state.show&&(0,p.jsx)(d.default,{})]})]})}),u.COMPONENT);try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/discovery/catalog/component/list/index.tsx#list"})}catch(e){}},"./src/screens/discovery/catalog/component/list/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=s("./src/stores/index.ts");t.styles=o._.create({container:{minHeight:.64*o._.window.height,marginBottom:o._.md},empty:{minHeight:.5*o._.window.height},text:Object.assign({maxWidth:o._.window.contentWidth-2*o._.md},o._.fontSize14)})},"./src/screens/discovery/catalog/component/pagination/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.HEAT_MAPS=t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/discovery/catalog/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Pagination"),t.HEAT_MAPS={onPrev:"目录.上一页",onNext:"目录.下一页",search:"目录.页码跳转"}},"./src/screens/discovery/catalog/component/pagination/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),a=s("./src/screens/discovery/catalog/component/pagination/ds.ts"),c=s("./src/screens/discovery/catalog/component/pagination/styles.ts"),l=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.obc)((function(e,t){var s=t.$;return(0,l.jsx)(r.Pagination,{style:c.styles.pagination,input:s.state.ipt,heatmaps:a.HEAT_MAPS,onPrev:s.onPrev,onNext:s.onNext,onChange:s.onChange,onSearch:s.doSearch})}),a.COMPONENT);try{pagination.displayName="pagination",pagination.__docgenInfo={description:"",displayName:"pagination",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/pagination/index.tsx#pagination"]={docgenInfo:pagination.__docgenInfo,name:"pagination",path:"src/screens/discovery/catalog/component/pagination/index.tsx#pagination"})}catch(e){}},"./src/screens/discovery/catalog/component/pagination/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var o=s("./src/stores/index.ts");t.styles=o._.create({pagination:{marginTop:o._.xs,marginBottom:o._.ios(o._.md+o._.sm,o._.md)}})},"./src/screens/discovery/catalog/component/tool-bar/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/discovery/catalog/component/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"ToolBar")},"./src/screens/discovery/catalog/component/tool-bar/filter-key.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.weak-map.js"),s("./node_modules/core-js/modules/es.object.to-string.js"),s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.array.iterator.js"),s("./node_modules/core-js/modules/web.dom-collections.iterator.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var s=i(t);if(s&&s.has(e))return s.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var a=r?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(o,n,a):o[n]=e[n]}return o.default=e,s&&s.set(e,o),o}(s("./node_modules/react/index.js")),r=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./src/utils/hooks/index.ts"),l=s("./src/screens/discovery/catalog/ds.ts"),d=s("./node_modules/react/jsx-runtime.js");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,s=new WeakMap;return(i=function(e){return e?s:t})(e)}t.default=(0,a.c)((function(e,t){var s=t.$,a=(0,o.useMemo)((function(){return l.FILTER_KEY_DS.map((function(e){return e[0]+" ("+e[1]+")"}))}),[]);return(0,c.useObserver)((function(){var e=s.state.filterKey;return(0,d.jsx)(r.ToolBar.Popover,{data:a,iconColor:n._.colorDesc,text:e.includes("不限")?"关键字":e,type:"desc",onSelect:function(e){var t;return s.onFilterChange("filterKey",null==(t=e.split(" ("))?void 0:t[0])}})}))}));try{filterkey.displayName="filterkey",filterkey.__docgenInfo={description:"",displayName:"filterkey",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/tool-bar/filter-key.tsx#filterkey"]={docgenInfo:filterkey.__docgenInfo,name:"filterkey",path:"src/screens/discovery/catalog/component/tool-bar/filter-key.tsx#filterkey"})}catch(e){}},"./src/screens/discovery/catalog/component/tool-bar/filter-type.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.find.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./src/screens/discovery/catalog/ds.ts"),l=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=t.$,o=c.FILTER_TYPE_DS.find((function(e){return e===s.state.filterType}));return(0,l.jsx)(r.ToolBar.Popover,{data:c.FILTER_TYPE_DS,iconColor:n._.colorDesc,text:"不限"===o?"类型":o,type:"desc",onSelect:function(e){return s.onFilterChange("filterType",e)}})}));try{filtertype.displayName="filtertype",filtertype.__docgenInfo={description:"",displayName:"filtertype",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/tool-bar/filter-type.tsx#filtertype"]={docgenInfo:filtertype.__docgenInfo,name:"filtertype",path:"src/screens/discovery/catalog/component/tool-bar/filter-type.tsx#filtertype"})}catch(e){}},"./src/screens/discovery/catalog/component/tool-bar/filter-year.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./src/screens/discovery/catalog/ds.ts"),l=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=t.$,o=s.state.filterYear;return(0,l.jsx)(r.ToolBar.Popover,{data:c.FILTER_YEAR_DS,iconColor:n._.colorDesc,text:"不限"===o?"年份":o,type:"desc",onSelect:function(e){return s.onFilterChange("filterYear",e)}})}));try{filteryear.displayName="filteryear",filteryear.__docgenInfo={description:"",displayName:"filteryear",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/tool-bar/filter-year.tsx#filteryear"]={docgenInfo:filteryear.__docgenInfo,name:"filteryear",path:"src/screens/discovery/catalog/component/tool-bar/filter-year.tsx#filteryear"})}catch(e){}},"./src/screens/discovery/catalog/component/tool-bar/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.find.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),a=s("./src/screens/discovery/catalog/ds.ts"),c=o(s("./src/screens/discovery/catalog/component/tool-bar/filter-key.tsx")),l=o(s("./src/screens/discovery/catalog/component/tool-bar/filter-type.tsx")),d=o(s("./src/screens/discovery/catalog/component/tool-bar/filter-year.tsx")),i=o(s("./src/screens/discovery/catalog/component/tool-bar/more.tsx")),u=o(s("./src/screens/discovery/catalog/component/tool-bar/type.tsx")),f=s("./src/screens/discovery/catalog/component/tool-bar/ds.ts"),p=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.obc)((function(e,t){var s,o=t.$,n=null==(s=a.TYPE_DS.find((function(e){return e.key===o.state.type})))?void 0:s.title;return(0,p.jsxs)(r.ToolBar,{children:[(0,p.jsx)(u.default,{type:n}),"高级"===n&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.default,{}),(0,p.jsx)(d.default,{}),(0,p.jsx)(c.default,{})]}),(0,p.jsx)(i.default,{})]})}),f.COMPONENT);try{toolbar.displayName="toolbar",toolbar.__docgenInfo={description:"",displayName:"toolbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/tool-bar/index.tsx#toolbar"]={docgenInfo:toolbar.__docgenInfo,name:"toolbar",path:"src/screens/discovery/catalog/component/tool-bar/index.tsx#toolbar"})}catch(e){}},"./src/screens/discovery/catalog/component/tool-bar/more.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=t.$,o=s.state,a=o.fixedFilter,l=o.fixedPagination;return(0,c.jsx)(r.ToolBar.Popover,{data:["选项 · "+(a?"锁定上方":"浮动"),"分页 · "+(l?"锁定下方":"浮动")],icon:"md-more-vert",iconColor:n._.colorDesc,iconSize:16,type:"desc",transparent:!0,onSelect:function(e){return e.includes("选项")?s.onToggleFixed("fixedFilter"):e.includes("分页")?s.onToggleFixed("fixedPagination"):void 0}})}));try{more.displayName="more",more.__docgenInfo={description:"",displayName:"more",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/component/tool-bar/more.tsx#more"]={docgenInfo:more.__docgenInfo,name:"more",path:"src/screens/discovery/catalog/component/tool-bar/more.tsx#more"})}catch(e){}},"./src/screens/discovery/catalog/component/tool-bar/type.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./src/screens/discovery/catalog/ds.ts"),l=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=e.type,o=t.$;return(0,l.jsx)(r.ToolBar.Popover,{data:c.TYPE_DS.map((function(e){return e.title})),iconColor:n._.colorDesc,text:s,type:"desc",onSelect:o.onToggleType})}))},"./src/screens/discovery/catalog/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.TYPE_DS=t.FILTER_YEAR_DS=t.FILTER_TYPE_DS=t.FILTER_KEY_DS=t.COMPONENT=void 0;t.COMPONENT="Catalog",t.TYPE_DS=[{key:"advance",title:"高级"},{key:"collect",title:"热门"},{key:"",title:"最新"}],t.FILTER_TYPE_DS=["不限","动画","书籍","游戏","音乐","三次元"],t.FILTER_YEAR_DS=["不限","近1年","近3年",2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010],t.FILTER_KEY_DS=[["不限",1e3],["画",266],["动画",169],["作",156],["漫",113],["漫画",87],["作品",78],["推荐",61],["游戏",58],["目录",51],["个人",49],["系",46],["小说",41],["榜",41],["日本",40],["裏",38],["排行",36],["排行榜",34],["轻",33],["完",33],["选",31],["补",30],["百合",29],["全",27],["汉化",26],["最",25],["版",25],["看",24],["佳",22],["真",21],["原",20],["神",20],["销量",18],["世界",18],["评分",17],["黄油",17],["店",16],["名作",15],["葉",15],["史",15],["剧场",15],["网站",14],["实用",14],["已",14],["收录",14],["女性",13],["计划",13],["组",13],["世纪",13],["动漫",13],["男",13],["空间",12],["综合",12],["收集",12],["佳作",12],["记录",12],["合集",12],["赏",12],["列表",11],["批评",11],["厉害",11],["补完",11],["动画短片",11],["少女",11],["剧场版",11],["同人",10],["排名",10],["历年",10],["妹",10],["自用",9],["冷门",9],["收藏",9],["坑",9],["一般",8],["经典",8],["相关",8],["适合",8],["资源",8],["值得",8],["中文",8],["后宫",8],["致",8],["作画",7],["完结",7],["音乐",7],["剧情",7],["动画电影",7],["纯爱",7],["更新",7],["角色",7],["年鉴",7],["物",7],["美少女",6],["国产",6],["含有",6],["持续",6],["施工",6],["萌",6],["選",6],["人气",6],["群友",6],["回",6],["元素",6],["提及",6],["文化",6],["异",6],["待",6],["获奖",6],["制作",5],["独立",5],["整理",5],["部门",5],["艺术",5],["不错",5],["本子",5],["推理",5],["评选",5],["超级",5],["优秀",5],["狂",5],["战士",5],["泡面",5],["选集",5]]},"./src/screens/discovery/catalog/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var o=s("./src/utils/dev/index.ts"),r=s("./src/screens/discovery/catalog/ds.ts");t.COMPONENT=(0,o.rc)(r.COMPONENT,"Header")},"./src/screens/discovery/catalog/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/utils/index.ts"),a=s("./src/utils/decorators/index.ts"),c=s("./src/utils/fetch/index.ts"),l=s("./src/constants/index.ts"),d=s("./src/screens/discovery/catalog/header/ds.ts"),i=s("./node_modules/react/jsx-runtime.js"),u="浏览器查看",f="网页版查看",p=[u];l.STORYBOOK||p.push(f);t.default=(0,a.obc)((function(e,t){return t.$,(0,i.jsx)(r.Header,{title:"目录",hm:["discovery/catalog","Catalog"],headerRight:function(){return(0,i.jsx)(r.Header.Popover,{data:p,onSelect:function(e){if((0,c.t)("目录.右上角菜单",{key:e}),e!==u)if(e!==f);else{var t=l.URL_SPA+"/"+(0,n.getSPAParams)("Catalog");(0,n.open)(t)}else(0,n.open)(l.HOST+"/index/browser?orderby=collect")},children:(0,i.jsx)(r.Heatmap,{id:"目录.右上角菜单"})})}})}),d.COMPONENT);try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/header/index.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"src/screens/discovery/catalog/header/index.tsx#header"})}catch(e){}},"./src/screens/discovery/catalog/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(s("./node_modules/react/index.js"));var r=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),a=s("./src/utils/hooks/index.ts"),c=o(s("./src/screens/discovery/catalog/component/list/index.tsx")),l=o(s("./src/screens/discovery/catalog/component/pagination/index.tsx")),d=o(s("./src/screens/discovery/catalog/component/tool-bar/index.tsx")),i=o(s("./src/screens/discovery/catalog/header/index.tsx")),u=o(s("./src/screens/discovery/catalog/store/index.ts")),f=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ic)(u.default,(function(e,t){var s=t.$;return(0,a.useRunAfter)((function(){s.init()})),(0,a.useObserver)((function(){return(0,f.jsxs)(r.Component,{id:"screen-catalog",children:[(0,f.jsx)(i.default,{}),(0,f.jsxs)(r.Page,{loaded:s.state._loaded,children:[s.state.fixedFilter&&(0,f.jsx)(d.default,{}),(0,f.jsx)(c.default,{}),s.state.fixedPagination&&(0,f.jsx)(l.default,{})]})]})}))}));try{catalog.displayName="catalog",catalog.__docgenInfo={description:"",displayName:"catalog",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/catalog/index.tsx#catalog"]={docgenInfo:catalog.__docgenInfo,name:"catalog",path:"src/screens/discovery/catalog/index.tsx#catalog"})}catch(e){}},"./src/screens/discovery/catalog/store/action.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.parse-int.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=s("./src/utils/index.ts"),m=s("./src/utils/fetch/index.ts"),y=r(s("./src/screens/discovery/catalog/store/fetch.ts"));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}t.default=function(e){(0,d.default)(s,e);var t=_(s);function s(){var e,r;(0,c.default)(this,s);for(var a=arguments.length,d=new Array(a),i=0;i<a;i++)d[i]=arguments[i];return e=t.call.apply(t,[this].concat(d)),(0,f.default)((0,l.default)(e),"onShow",(function(){setTimeout((function(){e.setState({show:!0}),e.save()}),400)})),(0,f.default)((0,l.default)(e),"onToggleType",(r=(0,n.default)(o.mark((function t(s){var r;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.state.type,!s){t.next=8;break}if("最新"!==s||""!==r){t.next=4;break}return t.abrupt("return");case 4:if("热门"!==s||"collect"!==r){t.next=6;break}return t.abrupt("return");case 6:if("高级"!==s||"advance"!==r){t.next=8;break}return t.abrupt("return");case 8:return e.setState({type:"热门"===s?"collect":"高级"===s?"advance":"",page:1,ipt:"1",show:!1}),t.next=11,e.fetchCatalog();case 11:e.setState({show:!0}),e.save(),(0,m.t)("目录.切换类型",{type:s});case 14:case"end":return t.stop()}}),t)}))),function(e){return r.apply(this,arguments)})),(0,f.default)((0,l.default)(e),"onPrev",(0,n.default)(o.mark((function t(){var s,r;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==(s=e.state.page)){t.next=3;break}return t.abrupt("return");case 3:r=s-1,e.setState({page:r,show:!1,ipt:String(r)}),e.fetchCatalog(),e.onShow(),(0,m.t)("目录.上一页",{page:r});case 8:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"onNext",(0,n.default)(o.mark((function t(){var s,r;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=e.state.page,r=s+1,e.setState({page:r,show:!1,ipt:String(r)}),e.fetchCatalog(),e.onShow(),(0,m.t)("目录.下一页",{page:r});case 6:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"onChange",(function(t){var s=t.nativeEvent;e.setState({ipt:s.text})})),(0,f.default)((0,l.default)(e),"onFilterChange",(function(t,s){e.setState((0,f.default)({page:1,show:!1,ipt:"1"},t,s)),e.onShow(),e.fetchCatalog(),(0,m.t)("目录.高级筛选",{value:t+"|"+s})})),(0,f.default)((0,l.default)(e),"onToggleFixed",(function(t){var s=!e.state[t];e.setState((0,f.default)({},t,s)),e.save(),(0,m.t)("目录.切换锁定",{value:t+"|"+s})})),(0,f.default)((0,l.default)(e),"doSearch",(function(){var t=e.state.ipt,s=""===t?1:parseInt(t);s<1?(0,p.info)("请输入正确页码"):(e.setState({page:s,show:!1,ipt:String(s)}),e.fetchCatalog(),setTimeout((function(){e.setState({show:!0}),e.save()}),400),(0,m.t)("目录.页码跳转",{page:s}))})),e}return(0,a.default)(s)}(y.default)},"./src/screens/discovery/catalog/store/computed.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.number.constructor.js"),s("./node_modules/core-js/modules/es.string.replace.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.array.includes.js"),s("./node_modules/core-js/modules/es.string.includes.js"),s("./node_modules/core-js/modules/es.array.slice.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),u=s("./node_modules/mobx/dist/mobx.esm.js"),f=s("./src/stores/index.ts"),p=s("./src/utils/index.ts"),m=s("./src/utils/protobuf/index.web.ts"),y=s("./src/constants/index.ts"),_=o(s("./src/screens/discovery/catalog/store/state.ts"));function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,l.default)(this,s)}}t.default=(r=function(e){(0,c.default)(s,e);var t=j(s);function s(){return(0,n.default)(this,s),t.apply(this,arguments)}return(0,a.default)(s,[{key:"catalogAdvance",get:function(){return this.state.loadedCatalog?(0,m.get)("catalog").map((function(e){var t;return t=e.r>=Math.max(e.a||0,e.b||0,e.m||0,e.g||0)?"real":e.g>=Math.max(e.a||0,e.b||0,e.m||0)?"game":e.m>=Math.max(e.a||0,e.b||0)?"music":e.b>=(e.a||0)?"book":"anime",{id:e.i,title:e.t,last:e.d,anime:e.a||0,book:e.b||0,music:e.m||0,game:e.g||0,real:e.r||0,_type:t}})):[]}},{key:"catalogAdvanceFilter",get:function(){var e=this.state,t=e.page,s=e.filterType,o=e.filterYear,r=e.filterKey,n=this.catalogAdvance;if(s&&"不限"!==s&&(n=n.filter((function(e){return y.MODEL_SUBJECT_TYPE.getTitle(e._type)===s}))),o&&"不限"!==o)if("近1年"===o){var a=(0,p.getTimestamp)(),c=Number(""+(Number((0,p.date)("Y",a))-1)+(0,p.date)("md",a));n=n.filter((function(e){return Number(e.last.replace(/-/g,""))>=c}))}else if("近3年"===o){var l=(0,p.getTimestamp)(),d=Number(""+(Number((0,p.date)("Y",l))-3)+(0,p.date)("md",l));n=n.filter((function(e){return Number(e.last.replace(/-/g,""))>=d}))}else n=n.filter((function(e){return e.last.includes(String(o))}));r&&"不限"!==r&&(n=n.filter((function(e){return e.title.includes(r)})));return{list:n.slice(10*(t-1),10*t),_loaded:!0}}},{key:"catalog",get:function(){if("advance"===this.state.type)return this.catalogAdvanceFilter;var e=f.discoveryStore.catalog(this.state.type,this.state.page);return f.userStore.isLimit?Object.assign({},e,{list:e.list.filter((function(e){return!(0,p.x18s)(e.title)}))}):e}},{key:"isLimit",get:function(){if(y.STORYBOOK||"advance"!==this.state.type)return!1;if(!f.userStore.isLogin)return!0;var e=f.userStore.userInfo.id;return!e||e==y.APP_USERID_TOURIST||e==y.APP_USERID_IOS_AUTH||void 0}}]),s}(_.default),(0,i.default)(r.prototype,"catalogAdvance",[u.computed],Object.getOwnPropertyDescriptor(r.prototype,"catalogAdvance"),r.prototype),(0,i.default)(r.prototype,"catalogAdvanceFilter",[u.computed],Object.getOwnPropertyDescriptor(r.prototype,"catalogAdvanceFilter"),r.prototype),(0,i.default)(r.prototype,"catalog",[u.computed],Object.getOwnPropertyDescriptor(r.prototype,"catalog"),r.prototype),(0,i.default)(r.prototype,"isLimit",[u.computed],Object.getOwnPropertyDescriptor(r.prototype,"isLimit"),r.prototype),r)},"./src/screens/discovery/catalog/store/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.NAMESPACE=t.EXCLUDE_STATE=void 0;var o=s("./src/screens/discovery/catalog/ds.ts"),r=(t.NAMESPACE="Screen"+o.COMPONENT,t.EXCLUDE_STATE={loadedCatalog:!1});t.STATE=Object.assign({type:o.TYPE_DS[0].key,page:1,show:!0,ipt:"1",filterType:o.FILTER_TYPE_DS[0],filterYear:o.FILTER_YEAR_DS[1],filterKey:o.FILTER_KEY_DS[0][0],fixedFilter:!1,fixedPagination:!1},r,{_loaded:!1})},"./src/screens/discovery/catalog/store/fetch.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.array.slice.js"),s("./node_modules/core-js/modules/es.array.filter.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=s("./src/stores/index.ts"),m=s("./src/utils/index.ts"),y=s("./src/utils/fetch/index.ts"),_=s("./src/utils/kv/index.ts"),j=s("./src/utils/protobuf/index.web.ts"),g=r(s("./src/screens/discovery/catalog/store/computed.ts"));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}t.default=function(e){(0,d.default)(s,e);var t=v(s);function s(){var e,r;(0,c.default)(this,s);for(var a=arguments.length,d=new Array(a),i=0;i<a;i++)d[i]=arguments[i];return e=t.call.apply(t,[this].concat(d)),(0,f.default)((0,l.default)(e),"fetchCatalog",(0,n.default)(o.mark((function t(){var s,r,n,a,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.state,r=s.type,n=s.page,a=s.loadedCatalog,"advance"!==r){t.next=9;break}if(a){t.next=6;break}return t.next=5,(0,j.decode)("catalog");case 5:e.setState({loadedCatalog:!0});case 6:c=e.catalogAdvanceFilter.list,t.next=12;break;case 9:return t.next=11,p.discoveryStore.fetchCatalog({type:r,page:n});case 11:c=t.sent;case 12:return(0,y.queue)(c.map((function(t){return function(){return e.fetchCatalogDetail(t.id)}}))),t.abrupt("return",c);case 14:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"fetchCatalogDetail",(r=(0,n.default)(o.mark((function t(s){var r,n,a,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!p.discoveryStore.catalogDetail(s)._loaded){t.next=2;break}return t.abrupt("return",!0);case 2:if(null==(a=p.discoveryStore.catalogDetailFromOSS(s))||!a._loaded||null==a||null==(r=a.list)||!r.length){t.next=5;break}return t.abrupt("return",!0);case 5:if(null!=a&&a._loaded){t.next=11;break}return t.next=8,p.discoveryStore.fetchCatalogDetailFromOSS({id:s});case 8:if(!t.sent){t.next=11;break}return t.abrupt("return",!0);case 11:return t.next=13,p.discoveryStore.fetchCatalogDetail({id:s});case 13:return null!=(c=t.sent)&&null!=(n=c.list)&&n.length&&e.updateCatalogDetail(Object.assign({},c,{id:s})),t.abrupt("return",!0);case 16:case"end":return t.stop()}}),t)}))),function(e){return r.apply(this,arguments)})),(0,f.default)((0,l.default)(e),"updateCatalogDetail",(function(e){setTimeout((function(){var t=e.id,s=e.title,o=e.info,r=e.content,n=e.avatar,a=e.nickname,c=e.userId,l=e.time,d=e.collect,i=e.list,u=(0,m.HTMLDecode)((0,m.removeHTMLTag)(o||r));(0,_.update)("catalog_"+t,{id:t,title:s,info:u?u.slice(0,40):"",avatar:n,nickname:a,userId:c,time:l,collect:d,list:i.filter((function(e,t){return t<3})).map((function(e){return{id:e.id,image:e.image,title:e.title,type:e.type,info:e.info,comment:e.comment}})),total:i.length})}),2e3)})),e}return(0,a.default)(s)}(g.default)},"./src/screens/discovery/catalog/store/index.ts":(e,t,s)=>{var o=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),d=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=s("./src/utils/protobuf/index.web.ts"),m=r(s("./src/screens/discovery/catalog/store/action.ts")),y=s("./src/screens/discovery/catalog/store/ds.ts");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,i.default)(this,s)}}var j=function(e){(0,d.default)(s,e);var t=_(s);function s(){var e;(0,c.default)(this,s);for(var r=arguments.length,a=new Array(r),d=0;d<r;d++)a[d]=arguments[d];return e=t.call.apply(t,[this].concat(a)),(0,f.default)((0,l.default)(e),"init",(0,n.default)(o.mark((function t(){var s;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.t1=Object,t.t2={},t.next=5,e.getStorage(y.NAMESPACE);case 5:return t.t3=t.sent,t.t4=y.EXCLUDE_STATE,t.t5={loadedCatalog:!(null==(s=(0,p.get)("catalog"))||!s.length),_loaded:!0},t.t6=t.t1.assign.call(t.t1,t.t2,t.t3,t.t4,t.t5),t.t0.setState.call(t.t0,t.t6),t.abrupt("return",e.fetchCatalog());case 11:case"end":return t.stop()}}),t)})))),e}return(0,a.default)(s)}(m.default);t.default=j},"./src/screens/discovery/catalog/store/state.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),n=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=s("./node_modules/mobx/dist/mobx.esm.js"),f=o(s("./src/utils/store/index.ts")),p=s("./src/screens/discovery/catalog/store/ds.ts");function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,o=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;s=Reflect.construct(o,arguments,r)}else s=o.apply(this,arguments);return(0,l.default)(this,s)}}t.default=function(e){(0,c.default)(s,e);var t=m(s);function s(){var e;(0,n.default)(this,s);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),(0,i.default)((0,a.default)(e),"state",(0,u.observable)(p.STATE)),(0,i.default)((0,a.default)(e),"save",(function(){return e.saveStorage(p.NAMESPACE,p.EXCLUDE_STATE)})),e}return(0,r.default)(s)}(f.default)}}]);