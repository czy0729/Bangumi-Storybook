(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6971],{"./src/screens/login/v2/ds.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.URL_TOURIST=t.UA_EKIBUN_BANGUMI_APP=t.TITLE=t.NAMESPACE=t.AUTH_RETRY_COUNT=void 0;var s=n("./src/utils/index.ts"),o=n("./src/constants/index.ts");t.TITLE="登录",t.NAMESPACE="LoginV2",t.AUTH_RETRY_COUNT=4,t.URL_TOURIST=o.GITHUB_HOST+"/raw/master/tourist.json?t="+(0,s.getTimestamp)(),t.UA_EKIBUN_BANGUMI_APP="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Mobile Safari/537.36"},"./src/screens/login/v2/form/index.tsx":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.reflect.construct.js"),n("./node_modules/core-js/modules/es.array.concat.js"),n("./node_modules/core-js/modules/es.array.includes.js"),n("./node_modules/core-js/modules/es.string.includes.js");var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=s(n("./node_modules/@babel/runtime/helpers/createClass.js")),a=s(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=s(n("./node_modules/@babel/runtime/helpers/inherits.js")),l=s(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=s(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=s(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),c=s(n("./node_modules/react/index.js")),f=s(n("./node_modules/react-native-web/dist/exports/View/index.js")),m=s(n("./node_modules/react-native-web/dist/exports/Image/index.js")),p=s(n("./node_modules/@ant-design/react-native/lib/activity-indicator/index.js")),h=n("./src/components/index.ts"),g=n("./src/screens/_/index.ts"),y=n("./src/stores/index.ts"),j=n("./src/utils/index.ts"),x=n("./src/utils/decorators/index.ts"),_=n("./src/utils/fetch/index.ts"),v=n("./src/constants/index.ts"),b=s(n("./src/constants/i18n/index.ts")),S=n("./src/screens/login/v2/form/styles.ts"),C=n("./node_modules/react/jsx-runtime.js");function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,u.default)(e);if(t){var o=(0,u.default)(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return(0,l.default)(this,n)}}var T=[v.HOST,v.HOST_2,v.HOST_3],A=function(e){(0,i.default)(n,e);var t=w(n);function n(){var e;(0,o.default)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),(0,d.default)((0,a.default)(e),"state",{config:!1}),(0,d.default)((0,a.default)(e),"passwordRef",void 0),(0,d.default)((0,a.default)(e),"codeRef",void 0),(0,d.default)((0,a.default)(e),"showConfig",(function(){return e.setState({config:!0})})),(0,d.default)((0,a.default)(e),"onNoticeHost",(function(){(0,_.t)("登陆.配置提示",{name:"host"}),(0,j.alert)("三个选项都是同一个站点的不同域名，只是具体服务器位置不同。 \n\n"+b.default.login()+"建议优先使用 bgm.tv，出现问题再尝试 bangumi.tv，最后尝试 chii.in。")})),(0,d.default)((0,a.default)(e),"onNoticeUA",(function(){(0,_.t)("登陆.配置提示",{name:"ua"}),(0,j.alert)("假如您频繁掉授权状态，不妨试试把这个选项勾上，通常"+b.default.login()+"状态生存时间为7天。 \n\n这是个不稳定的选项，若"+b.default.login()+"正常不建议勾上，可能会遇到预测不能的状况。")})),(0,d.default)((0,a.default)(e),"onSubmitEditingEmail",(function(){try{var t,n,s;"function"==typeof(null==(t=(0,a.default)(e))||null==(n=t.passwordRef)||null==(s=n.inputRef)?void 0:s.focus)&&e.passwordRef.inputRef.focus()}catch(e){}})),(0,d.default)((0,a.default)(e),"onSubmitEditingPassword",(function(){try{var t,n,s;"function"==typeof(null==(t=(0,a.default)(e))||null==(n=t.codeRef)||null==(s=n.inputRef)?void 0:s.focus)&&e.codeRef.inputRef.focus()}catch(e){}})),e}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.email,n=e.password,s=e.captcha;if(t&&n&&!s)try{var o,r;"function"==typeof(null==this||null==(o=this.codeRef)||null==(r=o.inputRef)?void 0:r.focus)&&this.codeRef.inputRef.focus()}catch(e){}}},{key:"renderForm",value:function(){var e=this,t=this.props,n=t.email,s=t.password,o=t.captcha,r=t.base64,a=t.forwardRef,i=t.onGetCaptcha,l=t.onFocus,u=t.onBlur,d=t.onChange,c=t.onLogin;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h.Flex,{style:y._.mt.lg,children:(0,C.jsx)(h.Flex.Item,{children:(0,C.jsx)(h.Input,{style:this.styles.input,value:n,placeholder:"Email",returnKeyType:"next",onFocus:l,onBlur:u,onChange:function(e){return d(e,"email")},onSubmitEditing:this.onSubmitEditingEmail})})}),(0,C.jsx)(h.Flex,{style:y._.mt.md,children:(0,C.jsx)(h.Flex.Item,{children:(0,C.jsx)(h.Input,{ref:function(t){return e.passwordRef=t},style:this.styles.input,value:s,placeholder:"密码",secureTextEntry:!0,returnKeyType:"next",onFocus:l,onBlur:u,onChange:function(e){return d(e,"password")},onSubmitEditing:this.onSubmitEditingPassword})})}),(0,C.jsxs)(h.Flex,{style:y._.mt.md,children:[(0,C.jsx)(h.Flex.Item,{children:(0,C.jsx)(h.Input,{ref:function(t){a(t),e.codeRef=t},style:this.styles.input,value:o,placeholder:"验证码",returnKeyType:"done",returnKeyLabel:b.default.login(),onFocus:l,onBlur:u,onChange:function(e){return d(e,"captcha")},onSubmitEditing:c})}),(0,C.jsx)(h.Touchable,{style:this.styles.touchCaptcha,onPress:i,children:(0,C.jsx)(h.Flex,{style:this.styles.captchaContainer,justify:"center",children:r?(0,C.jsx)(m.default,{style:this.styles.captcha,source:{uri:r}}):(0,C.jsx)(p.default,{size:"small"})})})]})]})}},{key:"renderConfig",value:function(){var e=this.props,t=e.failed,n=e.isCommonUA,s=e.host,o=e.onSelect,r=e.onUAChange;return t?this.state.config?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(h.Flex,{style:[this.styles.touch,y._.mt.sm],children:[(0,C.jsx)(h.Flex.Item,{children:(0,C.jsx)(g.Popover,{style:this.styles.touch,data:T,onSelect:o,children:(0,C.jsxs)(h.Flex,{style:this.styles.content,children:[(0,C.jsxs)(h.Text,{type:"sub",size:12,children:["使用 ",s," 进行",b.default.login()]}),(0,C.jsx)(h.Iconfont,{name:"md-keyboard-arrow-down"})]})})}),(0,C.jsx)(h.Touchable,{style:this.styles.touchIcon,onPress:this.onNoticeHost,children:(0,C.jsx)(h.Flex,{style:this.styles.icon,justify:"center",children:(0,C.jsx)(h.Iconfont,{name:"md-info-outline",size:18})})})]}),(0,C.jsxs)(h.Flex,{style:this.styles.touch,children:[(0,C.jsx)(h.Flex.Item,{children:(0,C.jsx)(h.Touchable,{style:this.styles.touch,onPress:r,children:(0,C.jsxs)(h.Flex,{style:this.styles.content,children:[(0,C.jsx)(h.Iconfont,{name:n?"md-radio-button-on":"md-radio-button-off",color:n?y._.colorMain:y._.colorSub,size:18}),(0,C.jsxs)(h.Text,{style:y._.ml.xs,type:"sub",size:12,children:["使用固定UA",b.default.login()," (频繁掉线请勾选)"]})]})})}),(0,C.jsx)(h.Touchable,{style:this.styles.touchIcon,onPress:this.onNoticeUA,children:(0,C.jsx)(h.Flex,{style:this.styles.icon,justify:"center",children:(0,C.jsx)(h.Iconfont,{name:"md-info-outline",size:18})})})]})]}):(0,C.jsxs)(h.Touchable,{style:[this.styles.touch,y._.mt.sm],onPress:this.showConfig,children:[(0,C.jsxs)(h.Flex,{style:this.styles.content,children:[(0,C.jsxs)(h.Text,{type:"sub",size:12,children:[b.default.login(),"配置"]}),(0,C.jsx)(h.Iconfont,{name:"md-navigate-next"})]}),(0,C.jsx)(h.Heatmap,{id:"登陆.切换域名"}),(0,C.jsx)(h.Heatmap,{bottom:-32,id:"登陆.配置提示",transparent:!0})]}):null}},{key:"renderError",value:function(){var e=this.props,t=e.navigation,n=e.info,s=n.includes("错误");return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(h.Text,{style:y._.mt.md,size:12,lineHeight:16,type:"sub",onPress:function(){s&&t.push("Login")},children:n}),s&&(0,C.jsxs)(h.Text,{style:y._.mt.md,size:12,lineHeight:16,type:"sub",onPress:function(){return t.push("LoginAssist")},children:["请尝试切换另一域名进行重试，或尝试切换wifi或4g网络，实在没法",b.default.login(),"，可点击这里前往辅助",b.default.login(),"→"]})]})}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.onLogin;return(0,C.jsx)(f.default,{style:y._.container.column,children:(0,C.jsxs)(f.default,{style:this.styles.form,children:[(0,C.jsx)(h.Flex,{justify:"center",children:(0,C.jsx)(h.Mesume,{})}),this.renderForm(),!v.STORYBOOK&&this.renderConfig(),(0,C.jsx)(h.Button,{style:y._.mt.lg,type:"main",shadow:!0,loading:t,onPress:n,children:b.default.login()}),this.renderError()]})})}},{key:"styles",get:function(){return(0,S.memoStyles)()}}]),n}(c.default.Component);(0,d.default)(A,"defaultProps",{host:"",forwardRef:function(){},onGetCaptcha:function(){},onFocus:function(){},onBlur:function(){},onChange:function(){},onSelect:function(){},onUAChange:function(){},onLogin:function(){}});t.default=(0,x.ob)(A);try{form.displayName="form",form.__docgenInfo={description:"",displayName:"form",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},info:{defaultValue:null,description:"",name:"info",required:!0,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}},password:{defaultValue:null,description:"",name:"password",required:!0,type:{name:"string"}},captcha:{defaultValue:null,description:"",name:"captcha",required:!0,type:{name:"string"}},base64:{defaultValue:null,description:"",name:"base64",required:!0,type:{name:"string"}},isCommonUA:{defaultValue:null,description:"",name:"isCommonUA",required:!0,type:{name:"boolean"}},host:{defaultValue:null,description:"",name:"host",required:!0,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},failed:{defaultValue:null,description:"",name:"failed",required:!0,type:{name:"boolean"}},forwardRef:{defaultValue:null,description:"",name:"forwardRef",required:!0,type:{name:"Fn"}},onGetCaptcha:{defaultValue:null,description:"",name:"onGetCaptcha",required:!0,type:{name:"Fn"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!0,type:{name:"Fn"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!0,type:{name:"Fn"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"Fn"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"Fn"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"Fn"}},onUAChange:{defaultValue:null,description:"",name:"onUAChange",required:!0,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/login/v2/form/index.tsx#form"]={docgenInfo:form.__docgenInfo,name:"form",path:"src/screens/login/v2/form/index.tsx#form"})}catch(e){}},"./src/screens/login/v2/form/styles.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.object.assign.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=n("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{form:{width:s._.r(300),paddingBottom:200},input:Object.assign({height:44,paddingVertical:0,paddingHorizontal:14},s._.device(s._.fontSize12,s._.fontSize15),{backgroundColor:s._.colorBg,borderRadius:s._.radiusSm}),touchCaptcha:{height:44,marginLeft:s._.sm,borderRadius:s._.radiusSm,overflow:"hidden"},captchaContainer:{width:118,height:44},captcha:{width:118,height:44},touch:{borderRadius:s._.radiusSm,overflow:"hidden"},content:{paddingVertical:4},touchIcon:{marginLeft:s._.md,borderRadius:20,overflow:"hidden"},icon:{width:36,height:36}}}))},"./src/screens/login/v2/index.tsx":(e,t,n)=>{var s=n("./node_modules/@babel/runtime/regenerator/index.js");n("./node_modules/core-js/modules/es.object.define-property.js"),n("./node_modules/core-js/modules/es.reflect.construct.js"),n("./node_modules/core-js/modules/es.array.concat.js"),n("./node_modules/core-js/modules/es.array.includes.js"),n("./node_modules/core-js/modules/es.string.includes.js"),n("./node_modules/core-js/modules/es.string.match.js"),n("./node_modules/core-js/modules/es.regexp.exec.js"),n("./node_modules/core-js/modules/es.typed-array.uint8-array.js"),n("./node_modules/core-js/modules/es.typed-array.copy-within.js"),n("./node_modules/core-js/modules/es.typed-array.every.js"),n("./node_modules/core-js/modules/es.typed-array.fill.js"),n("./node_modules/core-js/modules/es.typed-array.filter.js"),n("./node_modules/core-js/modules/es.typed-array.find.js"),n("./node_modules/core-js/modules/es.typed-array.find-index.js"),n("./node_modules/core-js/modules/es.typed-array.for-each.js"),n("./node_modules/core-js/modules/es.typed-array.includes.js"),n("./node_modules/core-js/modules/es.typed-array.index-of.js"),n("./node_modules/core-js/modules/es.typed-array.iterator.js"),n("./node_modules/core-js/modules/es.typed-array.join.js"),n("./node_modules/core-js/modules/es.typed-array.last-index-of.js"),n("./node_modules/core-js/modules/es.typed-array.map.js"),n("./node_modules/core-js/modules/es.typed-array.reduce.js"),n("./node_modules/core-js/modules/es.typed-array.reduce-right.js"),n("./node_modules/core-js/modules/es.typed-array.reverse.js"),n("./node_modules/core-js/modules/es.typed-array.set.js"),n("./node_modules/core-js/modules/es.typed-array.slice.js"),n("./node_modules/core-js/modules/es.typed-array.some.js"),n("./node_modules/core-js/modules/es.typed-array.sort.js"),n("./node_modules/core-js/modules/es.typed-array.subarray.js"),n("./node_modules/core-js/modules/es.typed-array.to-locale-string.js"),n("./node_modules/core-js/modules/es.typed-array.to-string.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.array.iterator.js"),n("./node_modules/core-js/modules/es.array-buffer.slice.js"),n("./node_modules/core-js/modules/es.array.join.js"),n("./node_modules/core-js/modules/es.array.slice.js"),n("./node_modules/core-js/modules/es.string.split.js"),n("./node_modules/core-js/modules/es.array.for-each.js"),n("./node_modules/core-js/modules/es.regexp.constructor.js"),n("./node_modules/core-js/modules/es.regexp.to-string.js"),n("./node_modules/core-js/modules/es.string.trim.js"),n("./node_modules/core-js/modules/es.array.map.js"),n("./node_modules/core-js/modules/es.object.keys.js");var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(n("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),f=o(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),m=o(n("./node_modules/react/index.js")),p=o(n("./node_modules/react-native-web/dist/exports/View/index.js")),h=o(n("./node_modules/cheerio-without-node-native/index.js")),g=o(n("./node_modules/expo-constants/build/Constants.js")),y=n("./src/components/index.ts"),j=n("./src/screens/_/index.ts"),x=n("./src/stores/index.ts"),_=n("./src/utils/index.ts"),v=n("./src/utils/decorators/index.ts"),b=n("./src/utils/fetch/index.ts"),S=o(n("./src/utils/thirdParty/axios.js")),C=n("./src/constants/index.ts"),w=o(n("./src/constants/i18n/index.ts")),T=n("./config.ts"),A=o(n("./src/screens/login/v2/form/index.tsx")),R=o(n("./src/screens/login/v2/preview/index.tsx")),k=n("./src/screens/login/v2/ds.ts"),O=n("./src/screens/login/v2/styles.ts"),P=n("./node_modules/react/jsx-runtime.js");function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return(0,d.default)(this,n)}}var E=function(e){(0,u.default)(o,e);var t,n=U(o);function o(){var e,t;(0,a.default)(this,o);for(var i=arguments.length,u=new Array(i),d=0;d<i;d++)u[d]=arguments[d];return e=n.call.apply(n,[this].concat(u)),(0,f.default)((0,l.default)(e),"state",{host:C.STORYBOOK?T.HOST_PROXY:C.HOST,clicked:!1,email:"",password:"",captcha:"",base64:"",isCommonUA:!1,loading:!1,info:"",focus:!1,failed:!1}),(0,f.default)((0,l.default)(e),"userAgent",""),(0,f.default)((0,l.default)(e),"formhash",""),(0,f.default)((0,l.default)(e),"lastCaptcha",""),(0,f.default)((0,l.default)(e),"cookie",{}),(0,f.default)((0,l.default)(e),"code",""),(0,f.default)((0,l.default)(e),"accessToken",{}),(0,f.default)((0,l.default)(e),"retryCount",0),(0,f.default)((0,l.default)(e),"codeRef",null),(0,f.default)((0,l.default)(e),"onTour",(0,r.default)(s.mark((function t(){var n,o,r,a,i,l;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,b.t)("登陆.游客访问"),t.prev=1,(0,_.info)("正在从github获取游客cookie..."),t.next=5,(0,b.xhrCustom)({url:k.URL_TOURIST});case 5:n=t.sent,o=n._response,r=JSON.parse(o),a=r.accessToken,i=r.userCookie,x.userStore.updateAccessToken(a),l=e.props.navigation,x.userStore.updateUserCookie({cookie:i.cookie,userAgent:i.userAgent,v:0,tourist:1}),(0,_.info)(w.default.login()+"成功, 正在请求个人信息...",6),x.userStore.fetchUserInfo(),x.userStore.fetchUsersInfo(),(0,_.feedback)(),l.popToTop(),t.next=22;break;case 18:t.prev=18,t.t0=t.catch(1),console.error(k.NAMESPACE,"onTour",t.t0),(0,_.info)(w.default.login()+"状态过期, 请稍后再试");case 22:case"end":return t.stop()}}),t,null,[[1,18]])})))),(0,f.default)((0,l.default)(e),"onPreviewLogin",(function(){e.setState({clicked:!0})})),(0,f.default)((0,l.default)(e),"loginFail",(t=(0,r.default)(s.mark((function t(n){return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,b.t)("登陆.错误"),e.setState({loading:!1,info:n,failed:!0}),e.reset();case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})),(0,f.default)((0,l.default)(e),"onLogin",(0,r.default)(s.mark((function t(){var n,o,r,a,i,u,d;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,o=n.email,r=n.password,a=n.captcha,o&&r&&a){t.next=4;break}return(0,_.info)("请填写以上字段"),t.abrupt("return");case 4:if(t.prev=4,e.lastCaptcha===a){t.next=21;break}return(0,b.t)("登陆.登陆"),"function"==typeof(null==(i=(0,l.default)(e))||null==(u=i.codeRef)||null==(d=u.inputRef)?void 0:d.blur)&&e.codeRef.inputRef.blur(),(0,_.setStorage)(k.NAMESPACE+"|email",o),t.next=11,e.login();case 11:if(e.cookie.chii_auth){t.next=14;break}return e.loginFail("验证码或密码错误，稍会再重试或前往授权"+w.default.login()+" →"),t.abrupt("return");case 14:return e.lastCaptcha=a,t.next=17,e.oauth();case 17:return t.next=19,e.authorize();case 19:t.next=23;break;case 21:e.setState({info:"重试 (4/5)"}),e.retryCount+=1;case 23:return t.next=25,e.getAccessToken();case 25:(0,_.setStorage)(k.NAMESPACE+"|password",r),e.inStore(),t.next=37;break;case 29:if(t.prev=29,t.t0=t.catch(4),e.retryCount+=1,!(e.retryCount>=k.AUTH_RETRY_COUNT)){t.next=35;break}return e.loginFail("["+String(t.t0)+"] "+w.default.login()+"失败，请重试或重启APP，或点击前往旧版授权"+w.default.login()+" →"),t.abrupt("return");case 35:console.error("login/v2/index.js","onLogin",t.t0),e.onLogin();case 37:case"end":return t.stop()}}),t,null,[[4,29]])})))),(0,f.default)((0,l.default)(e),"getUA",(0,r.default)(s.mark((function t(){var n,o;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.isCommonUA){t.next=5;break}return n=k.UA_EKIBUN_BANGUMI_APP,e.userAgent=n,t.abrupt("return",n);case 5:return t.next=7,g.default.getWebViewUserAgentAsync();case 7:return o=t.sent,e.userAgent=C.STORYBOOK?o:o+" "+(0,_.getTimestamp)(),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"getHeaders",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n={};return t.includes("User-Agent")&&(n[C.STORYBOOK?"X-User-Agent":"User-Agent"]=e.userAgent),t.includes("Cookie")&&(n[C.STORYBOOK?"X-Cookie":"Cookie"]=e.cookieString),t.includes("Content-Type")&&(n["Content-Type"]="application/x-www-form-urlencoded"),n})),(0,f.default)((0,l.default)(e),"getCookies",(function(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.updateCookie(C.STORYBOOK?null==n?void 0:n["x-set-cookie"]:null==n||null==(t=n["set-cookie"])?void 0:t[0])})),(0,f.default)((0,l.default)(e),"getFormHash",(0,r.default)(s.mark((function t(){var n,o,r,a,i;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.host,S.default.defaults.withCredentials=!1,t.next=4,(0,S.default)({method:"get",url:n+"/login",headers:e.getHeaders(["User-Agent"])});case 4:return o=t.sent,r=o.data,a=o.headers,e.getCookies(a),(i=r.match(/<input type="hidden" name="formhash" value="(.+?)">/))&&(e.formhash=i[1]),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"getCaptcha",(0,r.default)(s.mark((function t(){var n,o,r,a;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({base64:""}),n=e.state.host,S.default.defaults.withCredentials=!1,t.next=5,(0,S.default)({method:"get",url:n+"/signup/captcha?"+(0,_.getTimestamp)(),headers:e.getHeaders(["User-Agent","Cookie"]),responseType:"arraybuffer"});case 5:return o=t.sent,r=o.request,a=C.STORYBOOK?btoa(String.fromCharCode.apply(null,new Uint8Array(r.response))):r._response,e.setState({base64:"data:image/gif;base64,"+a,captcha:""}),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"login",(0,r.default)(s.mark((function t(){var n,o,r,a,i,l,u,d;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,info:w.default.login()+"请求中...(1/5)"}),n=e.state,o=n.host,r=n.email,a=n.password,i=n.captcha,S.default.defaults.withCredentials=!1,t.next=5,(0,S.default)({method:"post",url:o+"/FollowTheRabbit",headers:e.getHeaders(["User-Agent","Cookie","Content-Type"]),data:(0,_.urlStringify)({formhash:e.formhash,referer:"",dreferer:"",email:r,password:a,captcha_challenge_field:i,loginsubmit:"登录"})});case 5:return l=t.sent,u=l.data,d=l.headers,u.includes("分钟内您将不能登录本站")?(0,_.info)("累计 5 次错误尝试，15 分钟内您将不能"+w.default.login()+"本站。"):e.getCookies(d),t.abrupt("return",!0);case 10:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"oauth",(0,r.default)(s.mark((function t(){var n,o,r;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({info:"获取授权表单码...(2/5)"}),n=e.state.host,S.default.defaults.withCredentials=!1,t.next=5,(0,S.default)({method:"get",url:n+"/oauth/authorize?client_id="+C.APP_ID+"&response_type=code&redirect_uri="+C.URL_OAUTH_REDIRECT,headers:e.getHeaders(["User-Agent","Cookie"])});case 5:return o=t.sent,r=o.data,e.formhash=h.default.load(r)("input[name=formhash]").attr("value"),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"authorize",(0,r.default)(s.mark((function t(){var n,o,r,a;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({info:"授权中...(3/5)"}),o=e.state.host,S.default.defaults.withCredentials=!1,t.next=5,(0,S.default)({method:"post",maxRedirects:0,validateStatus:null,url:o+"/oauth/authorize?client_id="+C.APP_ID+"&response_type=code&redirect_uri="+C.URL_OAUTH_REDIRECT,headers:e.getHeaders(["User-Agent","Cookie","Content-Type"]),data:(0,_.urlStringify)({formhash:e.formhash,redirect_uri:"",client_id:C.APP_ID,submit:"授权"})});case 5:return r=t.sent,a=r.request,e.code=null==a||null==(n=a.responseURL)?void 0:n.split("=").slice(1).join("="),t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"getAccessToken",(0,r.default)(s.mark((function t(){var n,o,r,a;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({info:"授权成功, 获取token中...(4/5)"}),n=e.state.host,S.default.defaults.withCredentials=!1,t.next=5,(0,S.default)({method:"post",maxRedirects:0,validateStatus:null,url:n+"/oauth/access_token",headers:e.getHeaders(["User-Agent","Content-Type"]),data:(0,_.urlStringify)({grant_type:"authorization_code",client_id:C.APP_ID,client_secret:C.APP_SECRET,code:e.code,redirect_uri:C.URL_OAUTH_REDIRECT,state:(0,_.getTimestamp)()})});case 5:if(o=t.sent,r=o.status,a=o.data,200===r){t.next=10;break}throw new TypeError(r);case 10:return e.accessToken=a,t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"updateCookie",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";["__cfduid","chii_sid","chii_sec_id","chii_cookietime","chii_auth"].forEach((function(n){var s=new RegExp(n+"=(.+?);"),o=t.match(s);o&&(e.cookie[n]=o[1])}))})),(0,f.default)((0,l.default)(e),"inStore",(0,r.default)(s.mark((function t(){var n;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({info:w.default.login()+"成功, 正在请求个人信息...(5/5)"}),n=e.props.navigation,x.userStore.updateUserCookie({cookie:e.cookieString,userAgent:e.userAgent,v:0}),x.userStore.updateAccessToken(e.accessToken),(0,_.feedback)(),n.popToTop(),(0,b.t)("登陆.成功"),(0,b.queue)([function(){return x.userStore.fetchUserInfo()},function(){return x.userStore.fetchUsersInfo()},function(){return x.usersStore.fetchFriends()},function(){return x.rakuenStore.downloadFavorTopic()}],1);case 8:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"reset",(0,r.default)(s.mark((function t(){return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.cookie={},e.setState({base64:""}),e.retryCount=0,t.next=5,e.getUA();case 5:return t.next=7,e.getFormHash();case 7:return t.next=9,e.getCaptcha();case 9:case"end":return t.stop()}}),t)})))),(0,f.default)((0,l.default)(e),"onFocus",(function(){e.setState({focus:!0})})),(0,f.default)((0,l.default)(e),"onBlur",(function(){e.setState({focus:!1})})),(0,f.default)((0,l.default)(e),"onChange",(function(t,n){var s,o=t.nativeEvent.text;e.setState((s={},(0,f.default)(s,n,o),(0,f.default)(s,"info",""),s))})),(0,f.default)((0,l.default)(e),"onSelect",(function(t){(0,_.setStorage)(k.NAMESPACE+"|host",t),e.setState({host:t},(function(){(0,b.t)("登陆.切换域名",{host:t}),e.reset()}))})),(0,f.default)((0,l.default)(e),"onUAChange",(function(){var t=!e.state.isCommonUA;(0,_.setStorage)(k.NAMESPACE+"|isCommonUA",t),e.setState({isCommonUA:t}),e.reset()})),e}return(0,i.default)(o,[{key:"componentDidMount",value:(t=(0,r.default)(s.mark((function e(){var t,n,o,r,a,i;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,n={},e.next=4,(0,_.getStorage)(k.NAMESPACE+"|host");case 4:return(o=e.sent)&&(n.host=o),e.next=8,(0,_.getStorage)(k.NAMESPACE+"|email");case 8:return(r=e.sent)&&(n.email=r),e.next=12,(0,_.getStorage)(k.NAMESPACE+"|password");case 12:return(a=e.sent)&&(n.password=a),e.next=16,(0,_.getStorage)(k.NAMESPACE+"|isCommonUA");case 16:(i=e.sent)&&(n.isCommonUA=i),this.setState(n,(function(){t.reset()})),(0,b.hm)("login/v2","LoginV2");case 20:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cookieString",get:function(){var e=this;return Object.keys(this.cookie).map((function(t){return t+"="+e.cookie[t]})).join("; ").trim()}},{key:"renderPreview",value:function(){var e=this;return(0,P.jsx)(R.default,{onLogin:this.onPreviewLogin,onTour:function(){return(0,_.confirm)("将使用开发者的测试账号, 提供大部分功能预览, 确定"+w.default.login()+"? (可以在设置里面退出"+w.default.login()+")",e.onTour,"提示")}})}},{key:"renderForm",value:function(){var e=this,t=this.props.navigation,n=this.state,s=n.host,o=n.email,r=n.password,a=n.captcha,i=n.base64,l=n.isCommonUA,u=n.loading,d=n.info,c=n.failed;return(0,P.jsx)(A.default,{forwardRef:function(t){return e.codeRef=t},navigation:t,email:o,password:r,captcha:a,base64:i,isCommonUA:l,loading:u,info:d,host:s,failed:c,onGetCaptcha:this.getCaptcha,onBlur:this.onBlur,onFocus:this.onFocus,onChange:this.onChange,onSelect:this.onSelect,onUAChange:this.onUAChange,onLogin:this.onLogin})}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.clicked,s=t.focus;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(p.default,{style:x._.container.flex,children:n?this.renderForm():this.renderPreview()}),n?!s&&(0,P.jsx)(p.default,{style:this.styles.ps,children:(0,P.jsxs)(y.Text,{size:12,lineHeight:14,type:"sub",children:["隐私策略: 我们十分尊重您的隐私, 我们不会收集上述信息. (多次",w.default.login(),"失败后可能一段时间内不能再次",w.default.login(),")"]})}):(0,P.jsxs)(y.Flex,{style:this.styles.old,justify:"around",children:[!C.STORYBOOK&&(0,P.jsxs)(y.Touchable,{onPress:function(){(0,b.t)("登陆.跳转",{to:"Signup"}),(0,_.confirm)("声明: 本APP的性质为第三方，只提供显示数据和简单的操作，没有修复和改变源站业务的能力。 \n\n在移动端浏览器注册会经常遇到验证码错误，碰到错误建议在浏览器里使用 [电脑版UA]，再不行推荐使用电脑Chrome注册。 \n\n注册后会有 [激活码] 发到邮箱，测试过只会发送一次，请务必在激活有效时间内激活，否则这个注册账号就废了。输入激活码前，看见下方的文字改变了再填入，提示服务不可用的请务必等到浏览器加载条完成，不然永远都会说激活码错误。\n\n作者只能帮大家到这里了。",(function(){return(0,_.open)(C.HOST+"/signup")}),"提示",(function(){}),"前往注册")},children:[(0,P.jsxs)(y.Flex,{justify:"center",children:[(0,P.jsx)(y.Text,{size:11,type:"sub",bold:!0,children:"注册"}),(0,P.jsx)(y.Iconfont,{style:x._.ml.xxs,name:"md-open-in-new",color:x._.colorSub,size:12})]}),(0,P.jsx)(y.Heatmap,{id:"登陆.跳转",to:"Signup",alias:"注册"})]}),(0,P.jsxs)(y.Touchable,{onPress:function(){(0,b.t)("登陆.跳转",{to:"Privacy"}),(0,_.open)(C.URL_PRIVACY)},children:[(0,P.jsxs)(y.Flex,{justify:"center",children:[(0,P.jsx)(y.Text,{size:11,type:"sub",bold:!0,children:"隐私保护政策"}),(0,P.jsx)(y.Iconfont,{style:x._.ml.xxs,name:"md-open-in-new",color:x._.colorSub,size:12})]}),(0,P.jsx)(y.Heatmap,{id:"登陆.跳转",to:"Privacy",alias:"隐私保护政策"})]}),!C.STORYBOOK&&(0,P.jsxs)(y.Text,{size:11,bold:!0,type:"sub",onPress:function(){(0,b.t)("登陆.跳转",{to:"LoginAssist"}),e.props.navigation.push("LoginAssist")},children:["辅助",w.default.login(),(0,P.jsx)(y.Heatmap,{id:"登陆.跳转",to:"LoginAssist",alias:"辅助登录"})]})]})]})}},{key:"render",value:function(){return(0,P.jsxs)(y.Component,{id:"screen-login-v2",style:x._.container.plain,children:[(0,P.jsx)(j.StatusBarPlaceholder,{}),C.STORYBOOK&&(0,P.jsxs)(j.Notice,{style:x._.mv.lg,children:["当前网页版",w.default.login(),"功能尚未实装，本页面仅供查看使用"]}),this.renderContent(),(0,P.jsx)(y.KeyboardSpacer,{topSpacing:x._.ios(-120,0)}),(0,P.jsx)(y.Heatmap,{id:"登陆.登陆",right:x._.wind,bottom:x._.bottom+120,transparent:!0}),(0,P.jsx)(y.Heatmap,{id:"登陆.成功",right:x._.wind,bottom:x._.bottom+86,transparent:!0}),(0,P.jsx)(y.Heatmap,{id:"登陆.错误",right:x._.wind,bottom:x._.bottom+52,transparent:!0}),(0,P.jsx)(y.Heatmap,{id:"登陆",screen:"Login"})]})}},{key:"styles",get:function(){return(0,O.memoStyles)()}}]),o}(m.default.Component);t.default=(0,v.ob)(E);try{v2.displayName="v2",v2.__docgenInfo={description:"",displayName:"v2",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/login/v2/index.tsx#v2"]={docgenInfo:v2.__docgenInfo,name:"v2",path:"src/screens/login/v2/index.tsx#v2"})}catch(e){}},"./src/screens/login/v2/preview/index.tsx":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js");var s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;s(n("./node_modules/react/index.js"));var o=s(n("./node_modules/react-native-web/dist/exports/View/index.js")),r=n("./src/components/index.ts"),a=n("./src/stores/index.ts"),i=n("./src/utils/index.ts"),l=n("./src/utils/decorators/index.ts"),u=n("./src/constants/index.ts"),d=s(n("./src/constants/i18n/index.ts")),c=n("./src/screens/login/v2/preview/styles.ts"),f=n("./node_modules/react/jsx-runtime.js");t.default=(0,l.ob)((function(e){var t=e.onLogin,n=void 0===t?function(){}:t,s=e.onTour,l=void 0===s?function(){}:s,m=u.STORYBOOK?r.Page:o.default;return(0,f.jsxs)(m,{style:a._.container.column,children:[(0,f.jsx)(r.Mesume,{}),(0,f.jsxs)(o.default,{style:c.styles.bottomContainer,children:[(0,f.jsxs)(r.Button,{type:"main",shadow:!0,onPress:n,children:[u.STORYBOOK?"":"账号",d.default.login()]}),(0,f.jsxs)(o.default,{style:a._.mt.md,children:[u.STORYBOOK?(0,f.jsx)(r.Button,{type:"plain",shadow:!0,onPress:function(){(0,i.open)(u.HOST+"/signup")},children:"注册"}):(0,f.jsx)(r.Button,{type:"plain",shadow:!0,onPress:l,children:"游客预览"}),(0,f.jsx)(r.Heatmap,{id:"登陆.游客访问"})]})]})]})}));try{preview.displayName="preview",preview.__docgenInfo={description:"",displayName:"preview",props:{onLogin:{defaultValue:null,description:"",name:"onLogin",required:!1,type:{name:"() => void"}},onTour:{defaultValue:null,description:"",name:"onTour",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/login/v2/preview/index.tsx#preview"]={docgenInfo:preview.__docgenInfo,name:"preview",path:"src/screens/login/v2/preview/index.tsx#preview"})}catch(e){}},"./src/screens/login/v2/preview/styles.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var s=n("./src/stores/index.ts");t.styles=s._.create({bottomContainer:{width:s._.r(300),height:400,marginTop:s._.lg}})},"./src/screens/login/v2/styles.ts":(e,t,n)=>{n("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(t,"__esModule",{value:!0}),t.memoStyles=void 0;var s=n("./src/stores/index.ts");t.memoStyles=s._.memoStyles((function(){return{old:{position:"absolute",zIndex:1,bottom:s._.bottom,left:s._.wind,right:s._.wind,padding:s._.sm},ps:{position:"absolute",right:2*s._.wind,bottom:s._.bottom,left:2*s._.wind},border:{borderLeftWidth:1,borderColor:s._.colorBorder}}}))}}]);