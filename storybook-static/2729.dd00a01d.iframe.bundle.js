(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2729],{"./src/screens/home/episodes/component/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/episodes/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Component")},"./src/screens/home/episodes/component/extra/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/episodes/component/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Extra")},"./src/screens/home/episodes/component/extra/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/episodes/component/extra/ds.ts"),c=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.ob)((function(){return(0,c.jsx)(r.Heatmap,{bottom:n._.bottom,id:"章节",screen:"Episodes"})}),i.COMPONENT)},"./src/screens/home/episodes/component/list/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.IMAGE_WIDTH=s.IMAGE_HEIGHT=s.COMPONENT=void 0;var o=t("./src/stores/index.ts"),r=t("./src/utils/dev/index.ts"),n=t("./src/screens/home/episodes/component/ds.ts"),d=(s.COMPONENT=(0,r.rc)(n.COMPONENT,"List"),s.IMAGE_WIDTH=o._.r(128));s.IMAGE_HEIGHT=.56*d},"./src/screens/home/episodes/component/list/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.sort.js"),t("./node_modules/core-js/modules/es.array.slice.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.string.split.js"),t("./node_modules/core-js/modules/es.regexp.exec.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./node_modules/mobx/dist/mobx.esm.js"),d=t("./src/components/index.ts"),i=t("./src/stores/index.ts"),c=t("./src/utils/index.ts"),u=t("./src/utils/decorators/index.ts"),l=t("./src/utils/fetch/index.ts"),a=t("./src/constants/index.ts"),p=t("./src/screens/home/episodes/component/list/ds.ts"),m=t("./src/screens/home/episodes/component/list/styles.tsx"),j=t("./node_modules/react/jsx-runtime.js");s.default=(0,u.obc)((function(e,s){var t=s.$,o=s.navigation,u=(0,m.memoStyles)(),f=t.eps.slice().sort((function(e,s){return(0,c.desc)(e,s,(function(e){return"NA"===e.status?0:e.type||10}))})),h=(0,n.toJS)(t.params.epsThumbs||[]),_=t.params,b=_.filterEps,x=void 0===b?0:b,y=_.epsThumbsHeader,O=void 0===y?{}:y;return(0,j.jsx)(d.ScrollView,{style:i._.container.plain,contentContainerStyle:i._.container.bottom,scrollToTop:!0,children:f.map((function(e,s){return(0,j.jsxs)(d.Touchable,{animate:!0,onPress:function(){(0,l.t)("章节.跳转",{to:"Topic",topicId:"ep/"+e.id}),o.push("Topic",{topicId:"ep/"+e.id,_title:"ep"+e.sort+"."+e.name,_desc:"时长:"+e.duration+" / 首播:"+e.airdate+"<br />"+e.desc})},children:[(0,j.jsxs)(d.Flex,{style:u.item,children:[(0,j.jsx)(d.Flex.Item,{children:(0,j.jsxs)(d.Flex,{align:"start",children:[(0,j.jsx)(r.default,{style:(0,c.stl)(u.status,"Air"===e.status&&u.statusPrimary,"Today"===e.status&&u.statusSuccess)}),(0,j.jsxs)(d.Flex.Item,{children:[(0,j.jsxs)(d.Text,{bold:!0,children:[e.sort,". ",(0,c.HTMLDecode)((0,c.cnjp)(e.name_cn,e.name)),!!e.comment&&(0,j.jsxs)(d.Text,{type:"main",size:11,lineHeight:14,children:[" ","+",e.comment]})]}),(0,j.jsxs)(d.Text,{style:i._.mt.sm,size:11,type:"sub",children:["首播: ",e.airdate||"-"," / 时长: ",e.duration||"-"]})]})]})}),!a.STORYBOOK&&!!h[s+x]&&(0,j.jsx)(r.default,{style:i._.ml.sm,children:(0,j.jsx)(d.Image,{src:h[s],size:p.IMAGE_WIDTH,height:p.IMAGE_HEIGHT,radius:!0,headers:O,onPress:function(){(0,c.showImageViewer)(h.map((function(e){return{url:e.split("@")[0],headers:O}})),s)}})})]}),!s&&(0,j.jsx)(d.Heatmap,{id:"章节.跳转"})]},e.id)}))})}),p.COMPONENT);try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/episodes/component/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/home/episodes/component/list/index.tsx#list"})}catch(e){}},"./src/screens/home/episodes/component/list/styles.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var o=t("./src/stores/index.ts");s.memoStyles=o._.memoStyles((function(){return{item:{paddingVertical:o._.sm+2,paddingHorizontal:o._.wind},status:{width:6,height:6,marginTop:o._.r(6),marginRight:o._.sm,backgroundColor:o._.colorSub,borderRadius:3},statusSuccess:{backgroundColor:o._.colorSuccess},statusPrimary:{backgroundColor:o._.colorPrimary}}}))},"./src/screens/home/episodes/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;s.COMPONENT="Episodes"},"./src/screens/home/episodes/header/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/episodes/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Header")},"./src/screens/home/episodes/header/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/utils/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/utils/fetch/index.ts"),c=t("./src/screens/home/episodes/header/ds.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t,o=s.$;return(0,u.jsx)(r.Header,{title:null!=(t=o.params)&&t.name?o.params.name+"的章节":"章节",alias:"章节",hm:[o.url,"Episodes"],headerRight:function(){return(0,u.jsx)(r.Header.Popover,{data:["浏览器查看"],onSelect:function(e){"浏览器查看"===e&&((0,i.t)("章节.右上角菜单",{key:e}),(0,n.open)(o.url))},children:(0,u.jsx)(r.Heatmap,{id:"章节.右上角菜单"})})}})}),c.COMPONENT);try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/episodes/header/index.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"src/screens/home/episodes/header/index.tsx#header"})}catch(e){}},"./src/screens/home/episodes/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/utils/decorators/index.ts"),d=t("./src/utils/hooks/index.ts"),i=o(t("./src/screens/home/episodes/component/extra/index.tsx")),c=o(t("./src/screens/home/episodes/component/list/index.tsx")),u=o(t("./src/screens/home/episodes/header/index.tsx")),l=o(t("./src/screens/home/episodes/store.ts")),a=t("./node_modules/react/jsx-runtime.js");s.default=(0,n.ic)(l.default,(function(e,s){var t=s.$;return(0,d.useRunAfter)((function(){t.init()})),(0,d.useObserver)((function(){return(0,a.jsxs)(r.Component,{id:"screen-episodes",children:[(0,a.jsx)(u.default,{}),(0,a.jsx)(r.Page,{loaded:t.subject._loaded,children:(0,a.jsx)(c.default,{})}),(0,a.jsx)(i.default,{})]})}))}));try{episodes.displayName="episodes",episodes.__docgenInfo={description:"",displayName:"episodes",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/episodes/index.tsx#episodes"]={docgenInfo:episodes.__docgenInfo,name:"episodes",path:"src/screens/home/episodes/index.tsx#episodes"})}catch(e){}},"./src/screens/home/episodes/store.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.reflect.construct.js"),t("./node_modules/core-js/modules/es.array.concat.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r,n=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),a=o(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),p=o(t("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),m=t("./node_modules/mobx/dist/mobx.esm.js"),j=t("./src/stores/index.ts"),f=o(t("./src/utils/store/index.ts")),h=t("./src/constants/index.ts");function _(e){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=(0,l.default)(e);if(s){var r=(0,l.default)(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return(0,u.default)(this,t)}}s.default=(r=function(e){(0,c.default)(t,e);var s=_(t);function t(){var e;(0,n.default)(this,t);for(var o=arguments.length,r=new Array(o),d=0;d<o;d++)r[d]=arguments[d];return e=s.call.apply(s,[this].concat(r)),(0,a.default)((0,i.default)(e),"params",void 0),(0,a.default)((0,i.default)(e),"init",(function(){return j.subjectStore.fetchSubject(e.subjectId)})),e}return(0,d.default)(t,[{key:"subjectId",get:function(){return this.params.subjectId}},{key:"subject",get:function(){return j.subjectStore.subject(this.subjectId)}},{key:"eps",get:function(){if(this.subject._loaded){var e=this.params.filterEps,s=void 0===e?0:e;return s?(this.subject.eps||[]).filter((function(e,t){return t>s})):this.subject.eps||[]}return[]}},{key:"url",get:function(){return h.HOST+"/subject/"+this.subjectId+"/ep"}}]),t}(f.default),(0,p.default)(r.prototype,"subjectId",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"subjectId"),r.prototype),(0,p.default)(r.prototype,"subject",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"subject"),r.prototype),(0,p.default)(r.prototype,"eps",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"eps"),r.prototype),(0,p.default)(r.prototype,"url",[m.computed],Object.getOwnPropertyDescriptor(r.prototype,"url"),r.prototype),r)}}]);