(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2529],{"./src/screens/rakuen/setting/component/blocked-keyword/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"BlockedKeyword")},"./src/screens/rakuen/setting/component/blocked-keyword/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),t("./node_modules/core-js/modules/es.string.trim.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o=n(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),r=function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b(s);if(t&&t.has(e))return t.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(n,r,d):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}(t("react")),d=t("./src/components/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/index.ts"),l=t("./src/utils/dev/index.ts"),u=t("./src/utils/hooks/index.ts"),a=n(t("./src/screens/user/setting/component/block/index.tsx")),p=n(t("./src/screens/user/setting/component/tip/index.tsx")),m=n(t("./src/screens/rakuen/setting/component/history/index.tsx")),f=t("./src/screens/rakuen/setting/component/blocked-keyword/utils.ts"),j=t("./src/screens/rakuen/setting/component/blocked-keyword/ds.ts"),y=t("./src/screens/rakuen/setting/component/blocked-keyword/styles.ts"),_=t("./node_modules/react/jsx-runtime.js");function b(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:s})(e)}function k(){(0,l.r)(j.COMPONENT);var e=(0,r.useState)(""),s=(0,o.default)(e,2),t=s[0],n=s[1],b=(0,r.useCallback)((function(e){n(e.trim())}),[]),k=(0,r.useCallback)((function(){t.length?(c.rakuenStore.addBlockKeyword(t),n("")):(0,i.info)("不能为空")}),[t]);return(0,u.useObserver)((function(){return(0,_.jsxs)(a.default,{children:[(0,_.jsx)(p.default,{children:"屏蔽关键字（对超展开标题、帖子正文生效）"}),(0,_.jsx)(m.default,{data:c.rakuenStore.setting.blockKeywords,onDelete:function(e){return(0,f.handleDeleteKeyword)(e)}}),(0,_.jsxs)(d.Flex,{style:y.styles.section,children:[(0,_.jsx)(d.Flex.Item,{children:(0,_.jsx)(d.Input,{style:y.styles.input,value:t,placeholder:"输入关键字",returnKeyType:"search",returnKeyLabel:"添加",onChangeText:b,onSubmitEditing:k})}),(0,_.jsx)(d.Touchable,{style:c._.ml.md,onPress:k,children:(0,_.jsx)(d.Flex,{style:y.styles.icon,justify:"center",children:(0,_.jsx)(d.Iconfont,{name:"md-add",size:24})})})]})]})}))}s.default=k;try{k.displayName="BlockedKeyword",k.__docgenInfo={description:"屏蔽关键字",displayName:"BlockedKeyword",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/rakuen/setting/component/blocked-keyword/index.tsx#BlockedKeyword"]={docgenInfo:k.__docgenInfo,name:"BlockedKeyword",path:"src/screens/rakuen/setting/component/blocked-keyword/index.tsx#BlockedKeyword"})}catch(e){}},"./src/screens/rakuen/setting/component/blocked-keyword/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({icon:{width:36,height:36},section:{paddingVertical:n._.sm,paddingRight:n._.sm,paddingLeft:n._._wind},input:{height:44,paddingVertical:0}})},"./src/screens/rakuen/setting/component/blocked-keyword/utils.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/web.timers.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.handleDeleteKeyword=function(e){(0,o.t)("超展开设置.取消关键字",{item:e}),n.rakuenStore.deleteBlockKeyword(e),setTimeout((function(){n.rakuenStore.uploadSetting()}),1e3)};var n=t("./src/stores/index.ts"),o=t("./src/utils/fetch/index.ts")},"./src/screens/rakuen/setting/component/blocked-users/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"BlockedUsers")},"./src/screens/rakuen/setting/component/blocked-users/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),t("./node_modules/core-js/modules/es.string.trim.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o=n(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),r=function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b(s);if(t&&t.has(e))return t.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(n,r,d):n[r]=e[r]}return n.default=e,t&&t.set(e,n),n}(t("react")),d=t("./src/components/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/dev/index.ts"),l=t("./src/utils/hooks/index.ts"),u=n(t("./src/constants/i18n/index.ts")),a=n(t("./src/screens/user/setting/component/block/index.tsx")),p=n(t("./src/screens/user/setting/component/tip/index.tsx")),m=n(t("./src/screens/rakuen/setting/component/history/index.tsx")),f=t("./src/screens/rakuen/setting/component/blocked-users/utils.ts"),j=t("./src/screens/rakuen/setting/component/blocked-users/ds.ts"),y=t("./src/screens/rakuen/setting/component/blocked-users/styles.ts"),_=t("./node_modules/react/jsx-runtime.js");function b(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:s})(e)}function k(e){var s=e.navigation,t=e.onNavigate;(0,i.r)(j.COMPONENT);var n=(0,r.useState)(""),b=(0,o.default)(n,2),k=b[0],g=b[1],x=(0,r.useCallback)((function(e){g(e.trim())}),[]),v=(0,r.useCallback)((function(){(0,f.handleBlockUser)(k,(function(){g("")}))}),[k]);return(0,l.useObserver)((function(){return(0,_.jsxs)(a.default,{children:[(0,_.jsx)(p.default,{children:"与以下用户绝交（不再看到用户的所有话题、评论、日志、私信、提醒）"}),c.userStore.isWebLogin?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m.default,{navigation:s,data:c.rakuenStore.blockedUsers.list,onNavigate:t,onDelete:f.handleDeleteBlockUser}),(0,_.jsxs)(d.Flex,{style:y.styles.section,children:[(0,_.jsx)(d.Flex.Item,{children:(0,_.jsx)(d.Input,{style:y.styles.input,value:k,placeholder:"输入用户 ID 或用户名",returnKeyType:"search",returnKeyLabel:"添加",onChangeText:x,onSubmitEditing:v})}),(0,_.jsx)(d.Touchable,{style:c._.ml.md,onPress:v,children:(0,_.jsx)(d.Flex,{style:y.styles.icon,justify:"center",children:(0,_.jsx)(d.Iconfont,{name:"md-add",size:24})})})]})]}):(0,_.jsx)(d.Flex,{style:y.styles.section,children:(0,_.jsxs)(d.Text,{children:["需要",u.default.login()]})})]})}))}s.default=k;try{k.displayName="BlockedUsers",k.__docgenInfo={description:"用户绝交",displayName:"BlockedUsers",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/rakuen/setting/component/blocked-users/index.tsx#BlockedUsers"]={docgenInfo:k.__docgenInfo,name:"BlockedUsers",path:"src/screens/rakuen/setting/component/blocked-users/index.tsx#BlockedUsers"})}catch(e){}},"./src/screens/rakuen/setting/component/blocked-users/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({icon:{width:36,height:36},section:{paddingVertical:n._.sm,paddingRight:n._.sm,paddingLeft:n._._wind},input:{height:44,paddingVertical:0}})},"./src/screens/rakuen/setting/component/blocked-users/utils.ts":(e,s,t)=>{var n=t("./node_modules/@babel/runtime/regenerator/index.js");t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.string.trim.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.handleBlockUser=function(e,s){if(!e.length)return void(0,c.info)("不能为空");d.rakuenStore.doBlockUser({keyword:e.trim()},(0,r.default)(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.t)("超展开设置.绝交"),e.next=3,d.rakuenStore.fetchPrivacy();case 3:(0,c.feedback)(),s();case 5:case"end":return e.stop()}}),e)}))),(function(){(0,c.info)("添加失败, 可能不存在此用户或者授权信息过期")}))},s.handleDeleteBlockUser=function(e){(0,c.confirm)("取消绝交 "+e.userName+", 确定?",(function(){d.rakuenStore.doCancelBlockUser({url:""+l.HOST+e.href},(0,r.default)(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.t)("超展开设置.取消绝交"),e.next=3,d.rakuenStore.fetchPrivacy();case 3:(0,c.feedback)();case 4:case"end":return e.stop()}}),e)}))),(function(){(0,c.info)("取消失败, 可能授权信息过期")}))}))};var r=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),d=t("./src/stores/index.ts"),c=t("./src/utils/index.ts"),i=t("./src/utils/fetch/index.ts"),l=t("./src/constants/index.ts")},"./src/screens/rakuen/setting/component/blockeds/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"Blockeds")},"./src/screens/rakuen/setting/component/blockeds/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var o=n(t("./node_modules/react-native-web/dist/exports/View/index.js")),r=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),c=n(t("./src/screens/user/setting/component/block/index.tsx")),i=n(t("./src/screens/user/setting/component/tip/index.tsx")),l=n(t("./src/screens/rakuen/setting/component/blocked-keyword/index.tsx")),u=n(t("./src/screens/rakuen/setting/component/blocked-users/index.tsx")),a=n(t("./src/screens/rakuen/setting/component/history/index.tsx")),p=t("./src/screens/rakuen/setting/component/blockeds/utils.ts"),m=t("./src/screens/rakuen/setting/component/blockeds/ds.ts"),f=t("./src/screens/rakuen/setting/component/blockeds/styles.ts"),j=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.ob)((function(e){var s=e.navigation,t=e.onNavigate,n=(0,f.memoStyles)();return(0,j.jsxs)(o.default,{style:n.container,children:[(0,j.jsx)(u.default,{navigation:s,onNavigate:t}),(0,j.jsx)(l.default,{}),(0,j.jsxs)(c.default,{children:[(0,j.jsx)(i.default,{children:"屏蔽小组 / 条目（对帖子所属小组名生效）"}),(0,j.jsx)(a.default,{data:r.rakuenStore.setting.blockGroups,onDelete:function(e){return(0,p.handleDeleteBlockGroup)(e)}})]})]})}),m.COMPONENT);try{blockeds.displayName="blockeds",blockeds.__docgenInfo={description:"",displayName:"blockeds",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/rakuen/setting/component/blockeds/index.tsx#blockeds"]={docgenInfo:blockeds.__docgenInfo,name:"blockeds",path:"src/screens/rakuen/setting/component/blockeds/index.tsx#blockeds"})}catch(e){}},"./src/screens/rakuen/setting/component/blockeds/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var n=t("./src/stores/index.ts");s.memoStyles=n._.memoStyles((function(){return{container:{paddingBottom:.32*n._.window.height}}}))},"./src/screens/rakuen/setting/component/blockeds/utils.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/web.timers.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.handleDeleteBlockGroup=function(e){(0,o.t)("超展开设置.取消屏蔽小组",{item:e}),n.rakuenStore.deleteBlockGroup(e),setTimeout((function(){n.rakuenStore.uploadSetting()}),1e3)};var n=t("./src/stores/index.ts"),o=t("./src/utils/fetch/index.ts")},"./src/screens/rakuen/setting/component/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/rakuen/setting/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"Component")},"./src/screens/rakuen/setting/component/history/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"History")},"./src/screens/rakuen/setting/component/history/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.find.js"),t("./node_modules/core-js/modules/es.object.keys.js"),t("./node_modules/core-js/modules/es.array.includes.js"),t("./node_modules/core-js/modules/es.string.includes.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var o=n(t("./node_modules/react-native-web/dist/exports/View/index.js")),r=t("./src/components/index.ts"),d=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/index.ts"),l=t("./src/utils/decorators/index.ts"),u=t("./src/constants/index.ts"),a=t("./src/screens/rakuen/setting/component/history/ds.ts"),p=t("./src/screens/rakuen/setting/component/history/styles.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,l.ob)((function(e){var s=e.navigation,t=e.style,n=e.data,l=e.showAvatar,a=void 0!==l&&l,f=e.onNavigate,j=e.onDelete,y=void 0===j?function(){}:j,_=(0,p.memoStyles)();return n.length?(0,m.jsx)(o.default,{style:(0,i.stl)(_.container,t),children:n.map((function(e){var t="",n="";"object"==typeof e?(t=e.userId,n=e.userName+"@"+t):n=e;var i=function(){s&&("function"!=typeof f?s.push("Zone",{userId:t}):f("Zone",{userId:t}))},l=0;try{if(t)l=c.rakuenStore.blockedUsersTrack(t);else if("string"==typeof e&&!(l=c.rakuenStore.blockedTrack(e))){var p=Object.keys(c.rakuenStore.state.blockedTrack).find((function(s){return s.includes(e)}));p&&(l=c.rakuenStore.blockedTrack(p))}}catch(e){}return(0,m.jsx)(o.default,{style:_.item,children:(0,m.jsxs)(r.Flex,{style:_.content,children:[a&&!!t&&(0,m.jsx)(o.default,{style:c._.mr.sm,children:(0,m.jsx)(d.Avatar,{src:(0,u.API_AVATAR)(t),size:28,onPress:i})}),(0,m.jsxs)(r.Flex.Item,{children:[(0,m.jsx)(r.Text,{size:l?13:14,bold:!0,onPress:i,children:n}),!!l&&(0,m.jsxs)(r.Text,{style:c._.mt.xxs,size:10,type:"sub",bold:!0,children:["已屏蔽 ",l," 次"]})]}),(0,m.jsx)(r.Touchable,{style:[_.touch,c._.ml.md],onPress:function(){return y(e)},children:(0,m.jsx)(r.Flex,{style:_.icon,justify:"center",children:(0,m.jsx)(r.Iconfont,{name:"md-close",size:20})})})]})},n)}))}):(0,m.jsx)(o.default,{style:(0,i.stl)(_.container,t),children:(0,m.jsx)(o.default,{style:_.item,children:(0,m.jsx)(r.Flex,{style:_.content,children:(0,m.jsx)(r.Text,{type:"title",size:15,bold:!0,children:"空"})})})})}),a.COMPONENT);try{history.displayName="history",history.__docgenInfo={description:"",displayName:"history",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!1,type:{name:"Navigation"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[] | BlockedUsersItem[]"}},showAvatar:{defaultValue:null,description:"",name:"showAvatar",required:!1,type:{name:"boolean"}},onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!1,type:{name:"Fn"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/rakuen/setting/component/history/index.tsx#history"]={docgenInfo:history.__docgenInfo,name:"history",path:"src/screens/rakuen/setting/component/history/index.tsx#history"})}catch(e){}},"./src/screens/rakuen/setting/component/history/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var n=t("./src/stores/index.ts");s.memoStyles=n._.memoStyles((function(){return{container:{paddingLeft:n._._wind,paddingBottom:n._.sm},item:{paddingRight:n._.sm},content:{marginTop:n._.sm},touch:{borderRadius:20,overflow:"hidden"},icon:{width:36,height:36}}}))},"./src/screens/rakuen/setting/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;s.COMPONENT="RakuenSetting"},"./src/screens/user/setting/component/block/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"Block")},"./src/screens/user/setting/component/block/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.object.assign.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(n(t("react")),n(t("./node_modules/react-native-web/dist/exports/View/index.js"))),d=t("./src/utils/index.ts"),c=t("./src/utils/decorators/index.ts"),i=t("./src/screens/user/setting/component/block/ds.ts"),l=t("./src/screens/user/setting/component/block/styles.ts"),u=t("./node_modules/react/jsx-runtime.js"),a=["style","title","onBlockRef","children"];s.default=(0,c.ob)((function(e){var s=e.style,t=e.title,n=e.onBlockRef,c=e.children,i=(0,o.default)(e,a),p=(0,l.memoStyles)();return(0,u.jsx)(r.default,Object.assign({ref:t&&n?function(e){return n(e,t)}:void 0,style:(0,d.stl)(p.block,(null==c?void 0:c.length)>1&&p.padding,s)},i,{children:c}))}),i.COMPONENT);try{block.displayName="block",block.__docgenInfo={description:"",displayName:"block",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onBlockRef:{defaultValue:null,description:"",name:"onBlockRef",required:!1,type:{name:"(ref: any, component: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/setting/component/block/index.tsx#block"]={docgenInfo:block.__docgenInfo,name:"block",path:"src/screens/user/setting/component/block/index.tsx#block"})}catch(e){}},"./src/screens/user/setting/component/block/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var n=t("./src/stores/index.ts");s.memoStyles=n._.memoStyles((function(){return{block:{marginVertical:n._.sm,marginHorizontal:n._.wind,backgroundColor:n._.select(n._.colorPlain,n._.colorBg),borderRadius:n._.radiusMd,overflow:"hidden"},padding:{paddingBottom:n._.sm}}}))},"./src/screens/user/setting/component/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/setting/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"Component")},"./src/screens/user/setting/component/tip/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(o.COMPONENT,"Tip")},"./src/screens/user/setting/component/tip/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var o=t("./src/components/index.ts"),r=t("./src/utils/decorators/index.ts"),d=t("./src/screens/user/setting/component/tip/ds.ts"),c=t("./src/screens/user/setting/component/tip/styles.ts"),i=t("./node_modules/react/jsx-runtime.js");s.default=(0,r.ob)((function(e){var s=e.children;return(0,i.jsx)(o.Flex,{style:c.styles.tip,children:(0,i.jsx)(o.Flex.Item,{children:(0,i.jsx)(o.Text,{type:"sub",bold:!0,children:s})})})}),d.COMPONENT);try{tip.displayName="tip",tip.__docgenInfo={description:"",displayName:"tip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/setting/component/tip/index.tsx#tip"]={docgenInfo:tip.__docgenInfo,name:"tip",path:"src/screens/user/setting/component/tip/index.tsx#tip"})}catch(e){}},"./src/screens/user/setting/component/tip/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({tip:{paddingTop:n._.md,paddingHorizontal:n._._wind,paddingBottom:n._.sm}})},"./src/screens/user/setting/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;s.COMPONENT="Setting"}}]);