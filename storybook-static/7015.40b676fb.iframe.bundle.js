(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7015],{"./src/screens/user/pm/component/chat/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.EVENT=t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/user/pm/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Chat"),t.EVENT={id:"短信.跳转"}},"./src/screens/user/pm/component/chat/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.function.name.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),n=s("./src/components/index.ts"),l=s("./src/screens/_/index.ts"),a=s("./src/utils/decorators/index.ts"),u=s("./src/screens/user/pm/component/chat/ds.ts"),d=s("./src/screens/user/pm/component/chat/styles.ts"),c=s("./node_modules/react/jsx-runtime.js");t.default=(0,a.obc)((function(e,t){var s=t.$,r=(0,d.memoStyles)(),a=s.pmDetail.list;return(0,c.jsxs)(o.default,{style:r.container,children:[(0,c.jsx)(n.Text,{size:12,type:"sub",align:"center",children:!!a.length&&a[0].date}),a.map((function(e,t){var r=0===t?{}:a[t-1],o=e.userId===s.myId;return(0,c.jsx)(l.ItemSay,{event:u.EVENT,position:o?"right":"left",avatar:e.avatar,showName:r.name!==e.name,name:e.name,text:e.content,id:e.userId,time:e.time,format:!1})}))]})}),u.COMPONENT)},"./src/screens/user/pm/component/chat/styles.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{container:{paddingVertical:r._.md,paddingHorizontal:r._.wind}}}))},"./src/screens/user/pm/component/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/user/pm/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/user/pm/component/heatmaps/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/user/pm/component/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Heatmaps")},"./src/screens/user/pm/component/heatmaps/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/stores/index.ts"),l=s("./src/utils/decorators/index.ts"),a=s("./src/screens/user/pm/component/heatmaps/ds.ts"),u=s("./node_modules/react/jsx-runtime.js");t.default=(0,l.ob)((function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Heatmap,{bottom:n._.bottom,id:"短信",screen:"Say"}),(0,u.jsx)(o.Heatmap,{right:67,bottom:n._.bottom,id:"短信.显示评论框",transparent:!0}),(0,u.jsx)(o.Heatmap,{right:67,bottom:n._.bottom-68,id:"短信.回复短信",transparent:!0})]})}),a.COMPONENT)},"./src/screens/user/pm/component/page/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/es.object.assign.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=r(s("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),a=r(s("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=r(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(s("react")),m=r(s("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),p=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),f=s("./src/components/index.ts"),j=s("./src/stores/index.ts"),h=s("./src/utils/decorators/index.ts"),b=s("./src/constants/index.ts"),y=r(s("./src/screens/user/pm/component/chat/index.tsx")),x=s("./src/screens/user/pm/component/page/styles.tsx"),v=s("./node_modules/react/jsx-runtime.js");function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,u.default)(this,s)}}var P=function(e){(0,a.default)(s,e);var t=_(s);function s(){var e;(0,o.default)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n)),(0,c.default)((0,l.default)(e),"scrollView",void 0),(0,c.default)((0,l.default)(e),"connectRefScrollView",(function(t){t&&(e.context.$.scrollViewRef=t,e.scrollView=t)})),(0,c.default)((0,l.default)(e),"onTitleChange",(function(t){var s=e.context.$,r=t.nativeEvent.text;s.onTitleChange(r)})),(0,c.default)((0,l.default)(e),"onSubmit",(function(t){var s=e.context,r=s.$,o=s.navigation;return r.doSubmit(t,e.scrollView,o)})),e}return(0,n.default)(s,[{key:"componentDidMount",value:function(){this.context.$.init(this.scrollView)}},{key:"componentWillUnmount",value:function(){this.context.$.scrollViewRef=null}},{key:"renderNewForm",value:function(){var e=this.context.$.params,t=e.userId,s=e.userName;return t?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.default,{style:this.styles.form,children:(0,v.jsxs)(f.Text,{children:["收件人: ",s]})}),(0,v.jsx)(f.Input,{style:this.styles.ipt,placeholder:"输入标题",onChange:this.onTitleChange})]}):null}},{key:"render",value:function(){var e=this.context.$,t=e.state.value;return(0,v.jsxs)(f.Page,{style:j._.container.screen,children:[e.pmParams._loaded||e.pmDetail._loaded?(0,v.jsx)(m.default,Object.assign({ref:this.connectRefScrollView,style:j._.container.screen,contentContainerStyle:j._.container.bottom},b.SCROLL_VIEW_RESET_PROPS,{children:(0,v.jsx)(y.default,{})})):(0,v.jsx)(f.Loading,{}),(0,v.jsx)(f.FixedTextarea,{placeholder:"回复",value:t,onChange:e.onChange,onClose:e.closeFixedTextarea,onSubmit:this.onSubmit,children:this.renderNewForm()})]})}},{key:"styles",get:function(){return(0,x.memoStyles)()}}]),s}(i.default.Component);t.default=(0,h.obc)(P)},"./src/screens/user/pm/component/page/styles.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var r=s("./src/stores/index.ts");t.memoStyles=r._.memoStyles((function(){return{form:{paddingVertical:r._.md,paddingHorizontal:r._.wind},ipt:{height:48,paddingVertical:0,paddingHorizontal:r._.wind,borderRadius:0}}}))},"./src/screens/user/pm/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.STATE=t.COMPONENT=void 0;t.COMPONENT="PM",t.STATE={title:"",value:"",placeholder:"",replySub:"",message:"",_loaded:!1}},"./src/screens/user/pm/header/ds.ts":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.COMPONENT=void 0;var r=s("./src/utils/dev/index.ts"),o=s("./src/screens/user/pm/ds.ts");t.COMPONENT=(0,r.rc)(o.COMPONENT,"Header")},"./src/screens/user/pm/header/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.string.match.js"),s("./node_modules/core-js/modules/es.regexp.exec.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/screens/_/index.ts"),l=s("./src/stores/index.ts"),a=s("./src/utils/index.ts"),u=s("./src/utils/decorators/index.ts"),d=s("./src/utils/fetch/index.ts"),c=r(s("./src/utils/thirdParty/html-entities-decoder.ts")),i=s("./src/screens/user/pm/header/ds.ts"),m=s("./node_modules/react/jsx-runtime.js");t.default=(0,u.obc)((function(e,t){var s=t.$,r=s.pmDetail.list,u="";try{var i,p,f;(u=null==r||null==(i=r[0])||null==(p=i.content)||null==(f=p.match(/<strong>(.*?)<\/strong>/))?void 0:f[1])&&(u=(0,c.default)(u))}catch(e){}return(0,m.jsx)(o.Header,{title:"短信"+(r.length?" ("+r.length+")":"")+(u?" · "+u:""),hm:["pm","PM"],headerTitleAlign:"left",headerRight:function(){return(0,m.jsxs)(o.Flex,{children:[r.length>=10&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(n.IconTouchable,{style:l._.mr._xs,name:"md-keyboard-arrow-up",size:24,color:l._.colorTitle,onPress:function(){s.scrollToTop(s.scrollViewRef,!0)}}),(0,m.jsx)(n.IconTouchable,{name:"md-keyboard-arrow-down",size:24,color:l._.colorTitle,onPress:function(){s.scrollToBottom(s.scrollViewRef,!0)}})]}),(0,m.jsx)(o.Header.Popover,{data:["浏览器查看"],onSelect:function(e){"浏览器查看"===e&&((0,d.t)("短信.右上角菜单",{key:e}),(0,a.open)(s.url))},children:(0,m.jsx)(o.Heatmap,{id:"短信.右上角菜单"})})]})}})}),i.COMPONENT)},"./src/screens/user/pm/index.tsx":(e,t,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(s("react"));var o=s("./src/components/index.ts"),n=s("./src/utils/decorators/index.ts"),l=s("./src/utils/hooks/index.ts"),a=r(s("./src/screens/user/pm/component/heatmaps/index.tsx")),u=r(s("./src/screens/user/pm/component/page/index.tsx")),d=r(s("./src/screens/user/pm/header/index.tsx")),c=r(s("./src/screens/user/pm/store.tsx")),i=s("./node_modules/react/jsx-runtime.js");t.default=(0,n.ic)(c.default,(function(e,t){var s=t.$;return(0,l.useRunAfter)((function(){s.init()})),(0,l.useKeyboardAdjustResize)(),(0,l.useObserver)((function(){return(0,i.jsxs)(o.Component,{id:"screen-pm",children:[(0,i.jsx)(d.default,{}),(0,i.jsx)(u.default,{}),(0,i.jsx)(a.default,{})]})}))}))},"./src/screens/user/pm/store.tsx":(e,t,s)=>{var r=s("./node_modules/@babel/runtime/regenerator/index.js");s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.reflect.construct.js"),s("./node_modules/core-js/modules/es.array.concat.js"),s("./node_modules/core-js/modules/web.timers.js"),s("./node_modules/core-js/modules/es.object.assign.js"),s("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=o(s("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),d=o(s("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=o(s("./node_modules/@babel/runtime/helpers/inherits.js")),i=o(s("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=o(s("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=o(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(s("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),j=s("./node_modules/mobx/dist/mobx.esm.js"),h=s("./src/stores/index.ts"),b=s("./src/utils/index.ts"),y=o(s("./src/utils/store/index.ts")),x=s("./src/utils/fetch/index.ts"),v=s("./src/constants/index.ts"),_=s("./src/screens/user/pm/ds.ts");function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var s,r=(0,m.default)(e);if(t){var o=(0,m.default)(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return(0,i.default)(this,s)}}t.default=(n=function(e){(0,c.default)(s,e);var t=P(s);function s(){var e,o;(0,a.default)(this,s);for(var n=arguments.length,u=new Array(n),c=0;c<n;c++)u[c]=arguments[c];return e=t.call.apply(t,[this].concat(u)),(0,p.default)((0,d.default)(e),"params",void 0),(0,p.default)((0,d.default)(e),"state",(0,j.observable)(_.STATE)),(0,p.default)((0,d.default)(e),"scrollViewRef",null),(0,p.default)((0,d.default)(e),"init",(o=(0,l.default)(r.mark((function t(s){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s&&(e.scrollViewRef=s),!e.params.userId){t.next=4;break}return t.abrupt("return",e.fetchPMParams());case 4:return e.pmDetail._loaded&&e.scrollToBottom(e.scrollViewRef),t.next=8,e.fetchPMDetail();case 8:return setTimeout((function(){e.scrollToBottom(e.scrollViewRef)}),320),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t)}))),function(e){return o.apply(this,arguments)})),(0,p.default)((0,d.default)(e),"fetchPMParams",(function(){var t=e.params.userId;return h.userStore.fetchPMParams({userId:t})})),(0,p.default)((0,d.default)(e),"fetchPMDetail",(function(){var t=e.params.id;return h.userStore.fetchPMDetail({id:t})})),(0,p.default)((0,d.default)(e),"scrollToBottom",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null!=e&&e.scrollToEnd&&setTimeout((function(){try{e.scrollToEnd({animated:t,duration:640})}catch(e){}}),160)})),(0,p.default)((0,d.default)(e),"scrollToTop",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null!=e&&e.scrollTo&&setTimeout((function(){try{e.scrollTo({x:0,y:0,animated:t,duration:640})}catch(e){}}),160)})),(0,p.default)((0,d.default)(e),"closeFixedTextarea",(function(){(0,x.t)("短信.显示评论框"),e.setState({placeholder:"",replySub:"",message:""})})),(0,p.default)((0,d.default)(e),"onTitleChange",(function(t){return e.setState({title:t})})),(0,p.default)((0,d.default)(e),"onChange",(function(t){return e.setState({value:t})})),(0,p.default)((0,d.default)(e),"doSubmit",(function(t,s,r){if(e.params.userId)return e.pmParams.formhash?void e.doCreate(t,r):void(0,b.info)("获取表单授权码失败");var o=e.pmDetail.form,n=void 0===o?{}:o;null!=n&&n.formhash?e.doReply(t,s):(0,b.info)("获取表单授权码失败, 需要别人回复过才能继续发送")})),(0,p.default)((0,d.default)(e),"doCreate",(function(t,s){(0,x.t)("短信.新短信");var o=e.state.title;h.userStore.doPM(Object.assign({msg_title:o,msg_body:t,submit:"发送"},e.pmParams),(0,l.default)(r.mark((function t(){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,b.feedback)(),e.setState({title:"",value:""}),s.goBack(),s.push("Notify",{type:"out"});case 4:case"end":return t.stop()}}),t)}))))})),(0,p.default)((0,d.default)(e),"doReply",(function(t,s){(0,x.t)("短信.回复短信");var o=e.pmDetail.form,n=void 0===o?{}:o;h.userStore.doPM(Object.assign({msg_body:t,chat:"on",submit:"回复"},n),(0,l.default)(r.mark((function t(){return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({value:""}),t.next=3,e.fetchPMDetail();case 3:(0,b.feedback)(),s&&s.scrollToEnd&&setTimeout((function(){s.scrollToEnd()}),0);case 5:case"end":return t.stop()}}),t)}))))})),e}return(0,u.default)(s,[{key:"pmDetail",get:function(){var e=this.params.id;return h.userStore.pmDetail(e)}},{key:"pmParams",get:function(){var e=this.params.userId;return h.userStore.pmParams(e)}},{key:"myId",get:function(){return h.userStore.myId}},{key:"url",get:function(){var e=this.params.id;return(0,v.HTML_PM_DETAIL)(e)}}]),s}(y.default),(0,f.default)(n.prototype,"pmDetail",[j.computed],Object.getOwnPropertyDescriptor(n.prototype,"pmDetail"),n.prototype),(0,f.default)(n.prototype,"pmParams",[j.computed],Object.getOwnPropertyDescriptor(n.prototype,"pmParams"),n.prototype),(0,f.default)(n.prototype,"myId",[j.computed],Object.getOwnPropertyDescriptor(n.prototype,"myId"),n.prototype),(0,f.default)(n.prototype,"url",[j.computed],Object.getOwnPropertyDescriptor(n.prototype,"url"),n.prototype),n)}}]);