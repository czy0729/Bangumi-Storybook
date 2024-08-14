(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7316],{"./src/screens/user/actions/component/create/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Create")},"./src/screens/user/actions/component/create/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),c=r(t("./src/screens/user/actions/component/form/index.tsx")),i=t("./src/screens/user/actions/component/create/ds.ts"),a=t("./src/screens/user/actions/component/create/styles.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=s.$,r=t.state.edit;return r.show&&""===r.uuid?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.Text,{style:n._.mt.md,size:15,bold:!0,children:"添加"}),(0,u.jsx)(c.default,{style:n._.mt.md,name:r.name,url:r.url})]}):(0,u.jsx)(o.Button,{style:a.styles.btn,type:n._.select("ghostPlain","plain"),onPress:function(){t.openEdit({uuid:"",name:"",url:"",sort:"",active:1})},children:"添加"})}),i.COMPONENT);try{create.displayName="create",create.__docgenInfo={description:"",displayName:"create",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/actions/component/create/index.tsx#create"]={docgenInfo:create.__docgenInfo,name:"create",path:"src/screens/user/actions/component/create/index.tsx#create"})}catch(e){}},"./src/screens/user/actions/component/create/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var r=t("./src/stores/index.ts");s.styles=r._.create({btn:{marginVertical:r._.md}})},"./src/screens/user/actions/component/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Component")},"./src/screens/user/actions/component/form/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Form")},"./src/screens/user/actions/component/form/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.array.sort.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=r(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/index.ts"),a=t("./src/utils/decorators/index.ts"),u=t("./src/screens/user/actions/component/form/ds.ts"),l=t("./src/screens/user/actions/component/form/styles.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,a.obc)((function(e,s){var t=e.style,r=void 0===t?void 0:t,a=e.name,u=void 0===a?"":a,p=e.url,f=void 0===p?"":p,j=s.$,x=(0,l.memoStyles)(),_=j.state.edit;return(0,m.jsxs)(n.Flex,{style:(0,i.stl)(x.form,r),align:"end",children:[(0,m.jsxs)(n.Flex.Item,{children:[(0,m.jsx)(n.Text,{size:13,bold:!0,children:"描述"}),(0,m.jsx)(n.Input,{style:[x.input,c._.mt.sm],defaultValue:String(u),placeholder:"在菜单上显示，唯一",onChangeText:function(e){return j.onChangeText("name",e)}}),(0,m.jsx)(n.Text,{style:c._.mt.md,size:13,bold:!0,children:"网址或协议"}),(0,m.jsxs)(n.Text,{style:c._.mt.sm,type:"sub",size:10,lineHeight:13,bold:!0,children:["打开指定网址","\n","例：https:// 或 http:// 开头会调用浏览器打开","\n\n","URL Scheme 唤起 App","\n","例：orpheus://search?q=xxx 直接打开网易云 App 搜索","\n","例：bilibili://search/xxx 直接打开 bilibili App 搜索","\n","因为命令是对应单独条目的，xxx 请自行替换为实际文字"]}),(0,m.jsx)(n.Input,{style:c._.mt.sm,defaultValue:String(f),multiline:!0,numberOfLines:3,textAlignVertical:"top",placeholder:"输入 URI",onChangeText:function(e){return j.onChangeText("url",e)}}),(0,m.jsx)(n.Text,{style:c._.mt.md,size:13,bold:!0,children:"排序"}),(0,m.jsx)(n.Input,{style:[x.input,c._.mt.sm],value:String(_.sort),placeholder:"数字，越大越前，选填",keyboardType:"number-pad",onChangeText:function(e){return j.onChangeText("sort",e)}})]}),(0,m.jsx)(d.IconTouchable,{style:c._.ml.md,name:"md-check",size:22,color:c._.colorDesc,onPress:j.submitEdit}),(0,m.jsx)(o.default,{style:x.close,children:(0,m.jsx)(d.IconTouchable,{name:"md-close",size:22,color:c._.colorDesc,onPress:j.closeEdit})})]})}),u.COMPONENT)},"./src/screens/user/actions/component/form/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var r=t("./src/stores/index.ts");s.memoStyles=r._.memoStyles((function(){return{form:{padding:12,paddingRight:8,marginBottom:r._.md,backgroundColor:r._.colorBg,borderColor:r._.colorBorder,borderWidth:1,borderRadius:r._.radiusSm,overflow:"hidden"},close:{position:"absolute",zIndex:1,top:4,right:7},input:{height:44,paddingVertical:0}}}))},"./src/screens/user/actions/component/item/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Item")},"./src/screens/user/actions/component/item/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.array.sort.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=r(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/index.ts"),a=t("./src/utils/decorators/index.ts"),u=r(t("./src/screens/user/actions/component/form/index.tsx")),l=t("./src/screens/user/actions/component/item/ds.ts"),m=t("./src/screens/user/actions/component/item/styles.ts"),p=t("./node_modules/react/jsx-runtime.js");s.default=(0,a.obc)((function(e,s){var t=e.uuid,r=e.active,a=e.name,l=e.url,f=e.sort,j=s.$,x=[],_=!!r;x.push("编辑",_?"停用":"启用","删除","测试");var b=j.state.edit,y=b.show&&t&&b.uuid===t;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(n.Flex,{style:(0,i.stl)(m.styles.item,!_&&m.styles.disabled),children:[(0,p.jsxs)(n.Flex.Item,{children:[(0,p.jsx)(n.Text,{size:15,bold:!0,children:a}),(0,p.jsxs)(n.Flex,{style:c._.mt.sm,children:[f>=0&&(0,p.jsx)(d.Tag,{style:c._.mr.sm,value:f}),(0,p.jsx)(n.Flex.Item,{children:(0,p.jsx)(n.Text,{size:12,type:"sub",numberOfLines:1,children:l})})]})]}),_&&(0,p.jsx)(d.Tag,{style:c._.ml.md,value:"生效"}),(0,p.jsx)(d.Popover,{style:c._.ml.md,data:x,onSelect:function(e){switch(e){case"编辑":j.openEdit({uuid:t,name:a,url:l,sort:f,active:r});break;case"删除":(0,i.confirm)("确定删除 ["+a+"] ?",(function(){j.deleteItem({uuid:t})}));break;case"停用":j.disableItem({uuid:t});break;case"启用":j.activeItem({uuid:t});break;case"测试":j.go({url:l})}},children:(0,p.jsx)(o.default,{style:m.styles.touch,children:(0,p.jsx)(n.Iconfont,{name:"md-more-vert",color:c._.colorDesc})})})]}),y&&(0,p.jsx)(u.default,{name:a,url:l})]})}),l.COMPONENT)},"./src/screens/user/actions/component/item/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var r=t("./src/stores/index.ts");s.styles=r._.create({item:{marginVertical:r._.md},touch:{padding:r._.sm,marginRight:-r._.sm},disabled:{opacity:.5}})},"./src/screens/user/actions/component/list/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/component/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"List")},"./src/screens/user/actions/component/list/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.object.assign.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=r(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/stores/index.ts"),c=t("./src/utils/decorators/index.ts"),i=t("./src/utils/fetch/index.ts"),a=r(t("./src/screens/user/actions/component/item/index.tsx")),u=t("./src/screens/user/actions/component/list/ds.ts"),l=t("./src/screens/user/actions/component/list/styles.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,c.obc)((function(e,s){var t=s.$,r=d.systemStore.setting,c=r.focusOrigin,u=r.focusAction;return(0,m.jsxs)(o.default,{children:[(0,m.jsxs)(n.Flex,{style:l.styles.setting,children:[(0,m.jsx)(n.Flex.Item,{children:(0,m.jsx)(n.Text,{size:15,bold:!0,children:"突出显示源头按钮"})}),(0,m.jsx)(n.SwitchPro,{style:l.styles.switch,value:c,onSyncPress:function(){(0,i.t)("设置.切换",{title:" 突出源头按钮",checked:!c}),d.systemStore.switchSetting("focusOrigin")}})]}),(0,m.jsxs)(n.Flex,{style:l.styles.setting,children:[(0,m.jsxs)(n.Flex.Item,{children:[(0,m.jsx)(n.Text,{size:15,bold:!0,children:"若有自定义跳转隐藏通用源头按钮"}),(0,m.jsx)(n.Text,{style:d._.mt.xs,type:"sub",size:12,bold:!0,children:"需要开启上面的设置才会生效"})]}),(0,m.jsx)(n.SwitchPro,{style:l.styles.switch,value:u,onSyncPress:function(){(0,i.t)("设置.切换",{title:"隐藏通用源头按钮",checked:!u}),d.systemStore.switchSetting("focusAction")}})]}),(0,m.jsx)(n.Divider,{}),t.data.map((function(e){return(0,m.jsx)(a.default,Object.assign({},e),e.uuid)}))]})}),u.COMPONENT);try{list.displayName="list",list.__docgenInfo={description:"",displayName:"list",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/actions/component/list/index.tsx#list"]={docgenInfo:list.__docgenInfo,name:"list",path:"src/screens/user/actions/component/list/index.tsx#list"})}catch(e){}},"./src/screens/user/actions/component/list/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var r=t("./src/stores/index.ts");s.styles=r._.create({setting:{marginVertical:r._.md},switch:{marginRight:-4,transform:[{scale:r._.device(.8,1.12)}]}})},"./src/screens/user/actions/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.STATE=s.COMPONENT=void 0;s.COMPONENT="Actions",s.STATE={data:{data:[]},edit:{show:!1,uuid:"",name:"",url:"",sort:"",active:1},_loaded:!1}},"./src/screens/user/actions/header/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var r=t("./src/utils/dev/index.ts"),o=t("./src/screens/user/actions/ds.ts");s.COMPONENT=(0,r.rc)(o.COMPONENT,"Header")},"./src/screens/user/actions/header/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=t("./src/components/index.ts"),n=t("./src/screens/_/index.ts"),d=t("./src/stores/index.ts"),c=t("./src/utils/decorators/index.ts"),i=t("./src/screens/user/actions/header/ds.ts"),a=t("./node_modules/react/jsx-runtime.js");s.default=(0,c.obc)((function(e,s){var t=s.$,r=s.navigation;return(0,a.jsx)(o.Header,{title:t.params.name||"自定义跳转",hm:["actions","Actions"],headerRight:function(){return(0,a.jsx)(n.IconTouchable,{name:"md-info-outline",color:d._.colorDesc,onPress:function(){r.push("Information",{title:"自定义跳转",message:["目前为实验性。","本功能对应到具体条目，通常用于给单独条目添加特定跳转。","后续会开发云同步和共享功能，请慎重添加带个人信息隐私的链接。"]})}})}})}),i.COMPONENT);try{header.displayName="header",header.__docgenInfo={description:"",displayName:"header",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/actions/header/index.tsx#header"]={docgenInfo:header.__docgenInfo,name:"header",path:"src/screens/user/actions/header/index.tsx#header"})}catch(e){}},"./src/screens/user/actions/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;r(t("./node_modules/react/index.js"));var o=t("./src/components/index.ts"),n=t("./src/utils/decorators/index.ts"),d=t("./src/utils/hooks/index.ts"),c=r(t("./src/screens/user/actions/component/create/index.tsx")),i=r(t("./src/screens/user/actions/component/list/index.tsx")),a=r(t("./src/screens/user/actions/header/index.tsx")),u=r(t("./src/screens/user/actions/store.ts")),l=t("./src/screens/user/actions/styles.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,n.ic)(u.default,(function(e,s){var t=s.$;return(0,d.useMount)((function(){t.init()})),(0,d.useObserver)((function(){var e=(0,l.memoStyles)();return(0,m.jsxs)(o.Component,{id:"screen-actions",children:[(0,m.jsx)(a.default,{}),(0,m.jsx)(o.Page,{loaded:t.state._loaded,children:(0,m.jsxs)(o.ScrollView,{contentContainerStyle:e.scrollView,children:[(0,m.jsx)(i.default,{}),(0,m.jsx)(c.default,{})]})})]})}))}));try{actions.displayName="actions",actions.__docgenInfo={description:"",displayName:"actions",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: any; name?: any; }"}},onMounted:{defaultValue:null,description:"Storybook",name:"onMounted",required:!1,type:{name:"Fn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/user/actions/index.tsx#actions"]={docgenInfo:actions.__docgenInfo,name:"actions",path:"src/screens/user/actions/index.tsx#actions"})}catch(e){}},"./src/screens/user/actions/store.ts":(e,s,t)=>{var r=t("./node_modules/@babel/runtime/regenerator/index.js");t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.reflect.construct.js"),t("./node_modules/core-js/modules/es.array.concat.js"),t("./node_modules/core-js/modules/es.string.trim.js"),t("./node_modules/core-js/modules/es.number.constructor.js"),t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.array.sort.js"),t("./node_modules/core-js/modules/es.array.find-index.js"),t("./node_modules/core-js/modules/es.array.find.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/web.timers.js"),t("./node_modules/core-js/modules/es.array.slice.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n,d=o(t("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),c=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),a=o(t("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),u=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),l=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=o(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),f=o(t("./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js")),j=t("./node_modules/mobx/dist/mobx.esm.js"),x=t("./src/stores/index.ts"),_=t("./src/utils/index.ts"),b=t("./src/utils/fetch/index.ts"),y=o(t("./src/utils/store/index.ts")),h=t("./src/screens/user/actions/ds.ts");function v(e){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,m.default)(e);if(s){var o=(0,m.default)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,l.default)(this,t)}}s.default=(n=function(e){(0,u.default)(t,e);var s=v(t);function t(){var e;(0,c.default)(this,t);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return e=s.call.apply(s,[this].concat(n)),(0,p.default)((0,a.default)(e),"params",void 0),(0,p.default)((0,a.default)(e),"state",(0,j.observable)(h.STATE)),(0,p.default)((0,a.default)(e),"init",(0,d.default)(r.mark((function s(){var t;return r.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x.subjectStore.init("actions");case 2:if(t=e.params.subjectId){s.next=5;break}return s.abrupt("return",!1);case 5:e.setState({data:{data:x.subjectStore.actions(t)},_loaded:!0});case 6:case"end":return s.stop()}}),s)})))),(0,p.default)((0,a.default)(e),"onChangeText",(function(s,t){var r=e.state.edit,o=t.trim();"sort"===s&&(o=isNaN(Number(o))?"":Number(o)),e.setState({edit:Object.assign({},r,(0,p.default)({},s,o))})})),(0,p.default)((0,a.default)(e),"submitEdit",(function(){var s=e.state,t=s.edit,r=s.data;if(t.name)if(t.url){var o=t.uuid,n=(0,j.toJS)(r);if(""===o)n.data.push({uuid:(0,_.getTimestamp)(),name:t.name||"",url:t.url||"",sort:t.sort||"",active:1});else{var d=n.data.findIndex((function(e){return e.uuid===o}));n.data[d]&&(n.data[d]=Object.assign({},n.data[d],t))}e.setState({data:n}),e.closeEdit(),e.updateOrigin();var c=e.params.subjectId;(0,b.t)("自定义跳转.保存",{subjectId:c})}else(0,_.info)("命令不能为空");else(0,_.info)("描述不能为空")})),(0,p.default)((0,a.default)(e),"openEdit",(function(s){e.setState({edit:Object.assign({},s,{show:!0})});var t=e.params.subjectId;(0,b.t)("自定义跳转.编辑表单",{subjectId:t})})),(0,p.default)((0,a.default)(e),"closeEdit",(function(){e.setState({edit:{show:!1,uuid:"",name:"",url:"",sort:0,active:1}});var s=e.params.subjectId;(0,b.t)("自定义跳转.关闭表单",{subjectId:s})})),(0,p.default)((0,a.default)(e),"disableItem",(function(s){var t=s.uuid,r=e.state.data,o=(0,j.toJS)(r),n=o.data.find((function(e){return e.uuid===t}));n&&(n.active=0),e.setState({data:o}),e.updateOrigin();var d=e.params.subjectId;(0,b.t)("自定义跳转.停用",{subjectId:d})})),(0,p.default)((0,a.default)(e),"activeItem",(function(s){var t=s.uuid,r=e.state.data,o=(0,j.toJS)(r),n=o.data.find((function(e){return e.uuid===t}));n&&(n.active=1),e.setState({data:o}),e.updateOrigin();var d=e.params.subjectId;(0,b.t)("自定义跳转.启用",{subjectId:d})})),(0,p.default)((0,a.default)(e),"deleteItem",(function(s){var t=s.uuid;if(t){var r=e.state.data,o=(0,j.toJS)(r);o.data=o.data.filter((function(e){return e.uuid!==t})),e.setState({data:o}),e.updateOrigin();var n=e.params.subjectId;(0,b.t)("自定义跳转.删除",{subjectId:n})}})),(0,p.default)((0,a.default)(e),"go",(function(e){var s=e.url;s&&setTimeout((function(){try{(0,_.open)(s,!0)}catch(e){(0,_.info)("跳转协议解析出错, 请检查")}}),1600)})),(0,p.default)((0,a.default)(e),"updateOrigin",(function(){setTimeout((function(){var s=e.params.subjectId;s&&x.subjectStore.updateActions((0,p.default)({},s,e.data))}),0)})),e}return(0,i.default)(t,[{key:"data",get:function(){return this.state.data.data.slice().sort((function(e,s){return(0,_.desc)(Number(e.sort)||0,Number(s.sort)||0)})).sort((function(e,s){return(0,_.desc)(e.active,s.active)}))}}]),t}(y.default),(0,f.default)(n.prototype,"data",[j.computed],Object.getOwnPropertyDescriptor(n.prototype,"data"),n.prototype),n)},"./src/screens/user/actions/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var r=t("./src/stores/index.ts");s.memoStyles=r._.memoStyles((function(){return{scrollView:{paddingTop:r._.sm,paddingHorizontal:r._.wind,paddingBottom:r._.window.height/2}}}))}}]);