(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8182],{"./src/screens/home/persons/component/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/home/persons/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/home/persons/component/extra/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/home/persons/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Extra")},"./src/screens/home/persons/component/extra/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("react"));var o=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),a=t("./src/screens/home/persons/component/extra/ds.ts"),c=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.ob)((function(){return(0,c.jsx)(o.Heatmap,{bottom:n._.bottom,id:"制作人员",screen:"Persons"})}),a.COMPONENT)},"./src/screens/home/persons/component/list/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.EVENT=s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/home/persons/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"List"),s.EVENT={id:"制作人员.跳转"}},"./src/screens/home/persons/component/list/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("react"));var o=t("./src/screens/_/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/index.ts"),a=t("./src/utils/decorators/index.ts"),c=t("./src/screens/home/persons/component/list/utils.tsx"),i=t("./src/screens/home/persons/component/list/ds.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,a.obc)((function(e,s){var t=s.$;return(0,u.jsx)(o.PaginationList2,{keyExtractor:d.keyExtractor,contentContainerStyle:n._.container.bottom,data:t.persons.list,limit:16,renderItem:c.renderItem})}),i.COMPONENT);try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/persons/component/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/home/persons/component/list/index.tsx#list"})}catch(e){}},"./src/screens/home/persons/component/list/utils.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.assign.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.renderItem=c;r(t("react"));var o=t("./src/screens/_/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/screens/home/persons/component/list/ds.ts"),a=t("./node_modules/react/jsx-runtime.js");function c(e){var s=e.item,t=e.index;return(0,a.jsx)(o.ItemCharacter,Object.assign({style:n._.container.item,index:t,event:d.EVENT,type:"person"},s))}try{c.displayName="renderItem",c.__docgenInfo={description:"",displayName:"renderItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"any"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/persons/component/list/utils.tsx#renderItem"]={docgenInfo:c.__docgenInfo,name:"renderItem",path:"src/screens/home/persons/component/list/utils.tsx#renderItem"})}catch(e){}},"./src/screens/home/persons/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.STATE=s.COMPONENT=void 0;s.COMPONENT="Persons",s.STATE={ota:{},_loaded:!1}},"./src/screens/home/persons/header/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/home/persons/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Header")},"./src/screens/home/persons/header/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("react"));var o=t("./src/components/index.ts"),n=t("./src/utils/index.ts"),d=t("./src/utils/decorators/index.ts"),a=t("./src/utils/fetch/index.ts"),c=t("./src/screens/home/persons/header/ds.ts"),i=t("./src/screens/home/persons/header/styles.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t,r=s.$;return(0,u.jsx)(o.Header,{title:null!=(t=r.params)&&t.name?r.params.name+"的制作人员":"更多制作人员",alias:"制作人员",hm:[r.url,"Persons"],headerTitleStyle:i.styles.title,headerRight:function(){return(0,u.jsx)(o.Header.Popover,{data:["浏览器查看"],onSelect:function(e){"浏览器查看"===e&&((0,a.t)("制作人员.右上角菜单",{key:e}),(0,n.open)(r.url))},children:(0,u.jsx)(o.Heatmap,{id:"制作人员.右上角菜单"})})}})}),c.COMPONENT);try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/persons/header/index.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"src/screens/home/persons/header/index.tsx#header"})}catch(e){}},"./src/screens/home/persons/header/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var r=t("./src/stores/index.ts");s.styles=r._.create({title:{paddingLeft:r._.sm,paddingRight:r._.md}})},"./src/screens/home/persons/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("react"));var o=t("./src/components/index.ts"),n=t("./src/utils/decorators/index.ts"),d=t("./src/utils/hooks/index.ts"),a=r(t("./src/screens/home/persons/component/extra/index.tsx")),c=r(t("./src/screens/home/persons/component/list/index.tsx")),i=r(t("./src/screens/home/persons/header/index.tsx")),u=r(t("./src/screens/home/persons/store.ts")),l=t("./node_modules/react/jsx-runtime.js");s.default=(0,n.ic)(u.default,(function(e,s){var t=s.$;return(0,d.useRunAfter)((function(){t.init()})),(0,d.useObserver)((function(){return(0,l.jsxs)(o.Component,{id:"screen-persons",children:[(0,l.jsx)(i.default,{}),(0,l.jsx)(o.Page,{loaded:t.persons._loaded,children:(0,l.jsx)(c.default,{})}),(0,l.jsx)(a.default,{})]})}))}));try{persons.displayName="persons",persons.__docgenInfo={description:"",displayName:"persons",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/persons/index.tsx#persons"]={docgenInfo:persons.__docgenInfo,name:"persons",path:"src/screens/home/persons/index.tsx#persons"})}catch(e){}},"./src/screens/home/persons/store.ts":(e,s,t)=>{var r=t("./node_modules/@babel/runtime/regenerator/index.js");t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.reflect.construct.js"),t("./node_modules/core-js/modules/es.array.concat.js"),t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.array.includes.js"),t("./node_modules/core-js/modules/web.timers.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n,d=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=o(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(t("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),h=t("./node_modules/mobx/dist/mobx.esm.js"),y=t("./src/stores/index.ts"),j=t("./src/utils/index.ts"),_=o(t("./src/utils/store/index.ts")),b=t("./src/utils/kv/index.ts"),x=t("./src/constants/index.ts"),O=t("./src/screens/home/persons/ds.ts");function v(e){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,p.default)(e);if(s){var o=(0,p.default)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,l.default)(this,t)}}var P=[];s.default=(n=function(e){(0,u.default)(t,e);var s=v(t);function t(){var e;(0,a.default)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return e=s.call.apply(s,[this].concat(n)),(0,m.default)((0,i.default)(e),"params",void 0),(0,m.default)((0,i.default)(e),"state",(0,h.observable)(O.STATE)),(0,m.default)((0,i.default)(e),"init",(function(){return e.fetchPersons()})),(0,m.default)((0,i.default)(e),"fetchPersons",(0,d.default)(r.mark((function s(){var t,o,n;return r.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.fetchThirdParty(),s.next=3,y.monoStore.fetchPersons({subjectId:e.subjectId});case 3:return(t=s.sent).list.length&&e.thirdPartyKey in e.state.ota&&(n=(null==(o=e.ota)?void 0:o.ts)||0,(0,j.getTimestamp)()-n>=604800&&e.updateThirdParty()),s.abrupt("return",t);case 6:case"end":return s.stop()}}),s)})))),(0,m.default)((0,i.default)(e),"fetchThirdParty",(0,d.default)(r.mark((function s(){var t;return r.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e.ota||e.persons._loaded){s.next=8;break}return s.next=3,(0,b.get)(e.thirdPartyKey);case 3:if(t=s.sent){s.next=7;break}return e.setState({ota:(0,m.default)({},e.thirdPartyKey,{list:[],_loaded:0})}),s.abrupt("return");case 7:e.setState({ota:(0,m.default)({},e.thirdPartyKey,Object.assign({},t,{_loaded:(0,j.getTimestamp)()}))});case 8:case"end":return s.stop()}}),s)})))),(0,m.default)((0,i.default)(e),"updateThirdParty",(0,d.default)(r.mark((function s(){return r.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!P.includes(e.thirdPartyKey)){s.next=2;break}return s.abrupt("return");case 2:setTimeout((function(){(0,b.update)(e.thirdPartyKey,{list:e.persons.list}),P.push(e.thirdPartyKey)}),0);case 3:case"end":return s.stop()}}),s)})))),e}return(0,c.default)(t,[{key:"subjectId",get:function(){var e=this.params.subjectId;return void 0===e?"":e}},{key:"persons",get:function(){var e=y.monoStore.persons(this.subjectId);return e._loaded?e:this.ota?Object.assign({},this.ota,{pagination:{page:1,pageTotal:10}}):x.LIST_EMPTY}},{key:"url",get:function(){return(0,x.HTML_SUBJECT_PERSONS)(this.subjectId)}},{key:"ota",get:function(){return this.state.ota[this.thirdPartyKey]}},{key:"thirdPartyKey",get:function(){return"persons_"+this.subjectId}}]),t}(_.default),(0,f.default)(n.prototype,"subjectId",[h.computed],Object.getOwnPropertyDescriptor(n.prototype,"subjectId"),n.prototype),(0,f.default)(n.prototype,"persons",[h.computed],Object.getOwnPropertyDescriptor(n.prototype,"persons"),n.prototype),(0,f.default)(n.prototype,"url",[h.computed],Object.getOwnPropertyDescriptor(n.prototype,"url"),n.prototype),(0,f.default)(n.prototype,"ota",[h.computed],Object.getOwnPropertyDescriptor(n.prototype,"ota"),n.prototype),(0,f.default)(n.prototype,"thirdPartyKey",[h.computed],Object.getOwnPropertyDescriptor(n.prototype,"thirdPartyKey"),n.prototype),n)}}]);