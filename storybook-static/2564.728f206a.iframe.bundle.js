(self.webpackChunkweb=self.webpackChunkweb||[]).push([[2564],{"./src/screens/home/v2/component/grid/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Grid")},"./src/screens/home/v2/component/grid/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/utils/decorators/index.ts"),i=o(t("./src/screens/home/v2/component/grid/layout/index.tsx")),c=o(t("./src/screens/home/v2/component/grid/linear/index.tsx")),l=o(t("./src/screens/home/v2/component/grid/list/index.tsx")),u=t("./src/screens/home/v2/component/grid/ds.ts"),m=t("./src/screens/home/v2/component/grid/styles.ts"),a=t("./node_modules/react/jsx-runtime.js"),p={};s.default=(0,d.obc)((function(e,s){var t=e.title,o=void 0===t?"全部":t,d=s.$;if(d.tabsLabel===o&&(p[o]=!0),d.tabsLabel!==o&&!p[o])return null;if(!d.collection._loaded)return(0,a.jsx)(n.Loading,{});var u=(0,m.memoStyles)();return(0,a.jsxs)(r.default,{style:[u.container,{paddingTop:d.listPaddingTop}],children:[(0,a.jsx)(i.default,{title:o}),(0,a.jsxs)(r.default,{children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(l.default,{title:o})]})]})}),u.COMPONENT)},"./src/screens/home/v2/component/grid/info/book-next-btn/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"BookNextBtn")},"./src/screens/home/v2/component/grid/info/book-next-btn/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/utils/decorators/index.ts"),d=t("./src/screens/home/v2/component/grid/info/book-next-btn/ds.ts"),i=t("./src/screens/home/v2/component/grid/info/book-next-btn/styles.ts"),c=t("./node_modules/react/jsx-runtime.js");s.default=(0,n.obc)((function(e,s){var t=e.subjectId,o=e.epStatus,n=e.volStatus,d=s.$;return(0,c.jsx)(r.Touchable,{style:i.styles.touchable,onPress:function(){return d.doUpdateNext(t,o,n)},children:(0,c.jsx)(r.Flex,{justify:"center",children:(0,c.jsx)(r.Iconfont,{style:i.styles.icon,name:"md-check-circle-outline",size:18})})})}),d.COMPONENT)},"./src/screens/home/v2/component/grid/info/book-next-btn/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({icon:{marginBottom:-1},touchable:{padding:o._.sm}})},"./src/screens/home/v2/component/grid/info/btn-next-ep/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"BtnNextEp")},"./src/screens/home/v2/component/grid/info/btn-next-ep/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.sort.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/grid/info/btn-next-ep/ds.ts"),c=t("./src/screens/home/v2/component/grid/info/btn-next-ep/styles.ts"),l=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.subjectId,o=s.$,d=o.nextWatchEp(t).sort;return d?(0,l.jsx)(n.Touchable,{style:c.styles.touchable,onPress:function(){o.doWatchedNextEp(t)},children:(0,l.jsxs)(n.Flex,{justify:"center",children:[(0,l.jsx)(n.Iconfont,{style:c.styles.icon,name:"md-check-circle-outline",size:18}),(0,l.jsx)(r.default,{style:c.styles.placeholder,children:(0,l.jsx)(n.Text,{type:"sub",children:d})})]})}):null}),i.COMPONENT)},"./src/screens/home/v2/component/grid/info/btn-next-ep/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({icon:{marginBottom:-1},touchable:{padding:o._.sm},placeholder:{marginBottom:-1.5,marginLeft:o._.sm}})},"./src/screens/home/v2/component/grid/info/count/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Count")},"./src/screens/home/v2/component/grid/info/count/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.find.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/constants/index.ts"),c=o(t("./src/screens/home/v2/component/grid/info/book-next-btn/index.tsx")),l=t("./src/screens/home/v2/component/grid/info/count/ds.ts"),u=t("./src/screens/home/v2/component/grid/info/count/styles.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.subjectId,o=e.subject,d=void 0===o?{}:o,l=e.epStatus,a=e.tip,p=s.$,j=p.subject(t),v=i.MODEL_SUBJECT_TYPE.getTitle((null==j?void 0:j.type)||(null==d?void 0:d.type));if("游戏"===v)return(0,m.jsx)(r.Text,{style:n._.mt.xs,type:"sub",size:12,lineHeight:13,children:a});if("书籍"===v){var f=p.collection.list,x=(void 0===f?[]:f).find((function(e){return e.subject_id===t})),_=x.ep_status,b=x.vol_status;return(0,m.jsxs)(r.Flex,{style:u.styles.book,justify:"end",children:[(0,m.jsxs)(r.Text,{type:"primary",size:20,children:[(0,m.jsxs)(r.Text,{type:"primary",size:12,lineHeight:20,children:["Chap."," "]}),_]}),(0,m.jsx)(c.default,{subjectId:t,epStatus:_+1,volStatus:b}),(0,m.jsxs)(r.Text,{style:n._.ml.md,type:"primary",size:20,children:[(0,m.jsxs)(r.Text,{type:"primary",size:12,lineHeight:20,children:["Vol."," "]}),b]}),(0,m.jsx)(c.default,{subjectId:t,epStatus:_,volStatus:b+1})]})}return(0,m.jsxs)(r.Text,{type:"primary",size:18,children:[p.countFixed(t,l)||"0",(0,m.jsxs)(r.Text,{type:"sub",lineHeight:18,children:[" ","/ ",p.countRight(t)]})]})}),l.COMPONENT)},"./src/screens/home/v2/component/grid/info/count/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({book:{marginBottom:-4}})},"./src/screens/home/v2/component/grid/info/cover/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Cover")},"./src/screens/home/v2/component/grid/info/cover/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/grid/item/styles.ts"),c=t("./src/screens/home/v2/component/grid/info/cover/ds.ts"),l=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t,o,d=e.subjectId,c=e.subject,u=void 0===c?{}:c,m=e.onPress,a=s.$.subject(d),p=(0,i.memoStyles)(),j=n._.isMobileLanscape?60:p.item.width,v=1.4*j;return(0,l.jsx)(r.Cover,{size:j,height:v,src:(null==a||null==(t=a.images)?void 0:t.medium)||(null==u||null==(o=u.images)?void 0:o.medium)||"",radius:!0,shadow:!0,onPress:m},d)}),c.COMPONENT)},"./src/screens/home/v2/component/grid/info/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Info")},"./src/screens/home/v2/component/grid/info/eps/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Eps")},"./src/screens/home/v2/component/grid/info/eps/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/screens/_/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/grid/info/eps/ds.ts"),c=t("./src/screens/home/v2/component/grid/info/eps/styles.ts"),l=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.subjectId,o=s.$,d=s.navigation,i=o.eps(t);return(0,l.jsx)(r.default,{style:c.styles.eps,children:(0,l.jsx)(n.Eps,{grid:!0,numbersOfLine:o.numbersOfLineGrid(t),lines:o.linesGrid,login:o.isLogin,subjectId:t,eps:i,userProgress:o.userProgress(t),flip:o.state.flip===t,onFliped:o.afterFlipEps,onSelect:function(e,s){o.doEpsSelect(e,s,t,d)}})})}),i.COMPONENT)},"./src/screens/home/v2/component/grid/info/eps/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({eps:{paddingRight:o._.xs,marginTop:o._.xs}})},"./src/screens/home/v2/component/grid/info/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.index-of.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/components/cover/utils.ts"),i=t("./src/stores/index.ts"),c=t("./src/utils/index.ts"),l=t("./src/utils/decorators/index.ts"),u=t("./src/utils/fetch/index.ts"),m=t("./src/constants/index.ts"),a=o(t("./src/screens/home/v2/component/grid/info/count/index.tsx")),p=o(t("./src/screens/home/v2/component/grid/info/cover/index.tsx")),j=o(t("./src/screens/home/v2/component/grid/info/eps/index.tsx")),v=o(t("./src/screens/home/v2/component/grid/info/onair/index.tsx")),f=o(t("./src/screens/home/v2/component/grid/info/title/index.tsx")),x=o(t("./src/screens/home/v2/component/grid/info/tool-bar/index.tsx")),_=t("./src/screens/home/v2/component/grid/info/ds.ts"),b=t("./src/screens/home/v2/component/grid/info/styles.ts"),y=t("./node_modules/react/jsx-runtime.js");s.default=(0,l.obc)((function(e,s){var t=e.subjectId,o=void 0===t?0:t,l=e.subject,_=void 0===l?{}:l,h=e.epStatus,g=void 0===h?"":h,O=e.tip,N=void 0===O?"":O,P=e.time,M=void 0===P?"":P,T=s.$,E=s.navigation,C=(0,b.memoStyles)(),S=-1!==T.state.top.indexOf(o);return(0,y.jsxs)(n.Flex,{style:C.item,align:"start",children:[(0,y.jsxs)(r.default,{children:[(0,y.jsx)(p.default,{subjectId:o,subject:_,onPress:function(){var e;(0,u.t)("首页.跳转",{to:"Subject",from:"grid",subjectId:o}),E.push("Subject",{subjectId:o,_jp:_.name,_cn:_.name_cn,_image:(0,d.getCoverSrc)((null==_||null==(e=_.images)?void 0:e.medium)||"",m.IMG_WIDTH_SM)})}}),(0,y.jsx)(v.default,{subjectId:o})]}),(0,y.jsxs)(n.Flex.Item,{style:C.info,children:[(0,y.jsx)(f.default,{subjectId:o,subject:_}),(0,y.jsxs)(n.Flex,{style:(0,c.stl)(i._.mt.sm,i._.isPad&&i._.mb.xs),children:[(0,y.jsx)(n.Flex.Item,{children:(0,y.jsx)(a.default,{subjectId:o,subject:_,epStatus:g,tip:N})}),(0,y.jsx)(x.default,{subjectId:o,subject:_})]}),(0,y.jsx)(j.default,{subjectId:o}),!!M&&(0,y.jsxs)(n.Text,{style:i._.mt.md,size:12,type:"sub",children:[M," 在玩"]})]}),S&&(0,y.jsx)(r.default,{style:C.dot})]})}),_.COMPONENT)},"./src/screens/home/v2/component/grid/info/onair/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Onair")},"./src/screens/home/v2/component/grid/info/onair/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.array.join.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/ds.ts"),c=t("./src/screens/home/v2/component/grid/info/onair/ds.ts"),l=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.subjectId,o=s.$,d=n._.isMobileLanscape?n._.mt.xs:n._.mt.md;if(o.isToday(t)){var c=o.onAirCustom(t),u=c.h,m=c.m;return(0,l.jsxs)(r.Text,{style:d,type:"success",align:"center",size:13,bold:!0,children:[u,":",m]})}if(o.isNextDay(t)){var a=o.onAirCustom(t),p=a.h,j=a.m;return(0,l.jsxs)(r.Text,{style:d,type:"sub",align:"center",size:13,bold:!0,children:["明天 ",p,":",j]})}if(n.systemStore.setting.homeOnAir){var v=o.onAirCustom(t),f=v.weekDay,x=v.h,_=v.m;if(i.WEEK_DAY_MAP[f]&&x&&_){var b="周"+i.WEEK_DAY_MAP[f],y=[x,_].filter((function(e){return!!e}));return(0,l.jsxs)(r.Text,{style:d,type:"sub",align:"center",size:13,lineHeight:14,bold:!0,children:[b," ",y.join(":")]})}}return null}),c.COMPONENT)},"./src/screens/home/v2/component/grid/info/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var o=t("./src/stores/index.ts"),r=t("./src/screens/home/v2/component/grid/item/styles.ts");s.memoStyles=o._.memoStyles((function(){var e=(0,r.memoStyles)();return{item:{paddingVertical:o._.device(16,32),paddingHorizontal:o._.wind},info:{marginLeft:o._.device(e.item.marginLeft,o._.md)},dot:{position:"absolute",top:6,right:0,borderWidth:o._.r(8),borderTopColor:"transparent",borderBottomColor:"transparent",borderRightColor:"transparent",borderLeftColor:o._.colorIcon,transform:[{rotate:"-45deg"}],opacity:.8}}}))},"./src/screens/home/v2/component/grid/info/title/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Title")},"./src/screens/home/v2/component/grid/info/title/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/utils/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/grid/info/title/ds.ts"),c=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.subjectId,o=e.subject,d=void 0===o?{}:o,i=s.$,l=i.subject(t),u=(0,n.HTMLDecode)((0,n.cnjp)((null==l?void 0:l.name_cn)||(null==d?void 0:d.name_cn),(null==l?void 0:l.name)||(null==d?void 0:d.name)));return(0,c.jsx)(r.Text,{size:15,numberOfLines:i.eps(t).length>=14?1:2,bold:!0,children:u})}),i.COMPONENT)},"./src/screens/home/v2/component/grid/info/tool-bar/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/info/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"ToolBar")},"./src/screens/home/v2/component/grid/info/tool-bar/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js"),t("./node_modules/core-js/modules/es.array.index-of.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/index.ts"),i=t("./src/utils/decorators/index.ts"),c=t("./src/constants/index.ts"),l=o(t("./src/screens/home/v2/component/item/btn-origin/index.tsx")),u=o(t("./src/screens/home/v2/component/grid/info/btn-next-ep/index.tsx")),m=t("./src/screens/home/v2/component/grid/info/tool-bar/ds.ts"),a=t("./src/screens/home/v2/component/grid/info/tool-bar/styles.ts"),p=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.obc)((function(e,s){var t=e.subjectId,o=e.subject,i=void 0===o?{}:o,m=s.$,j=m.subject(t),v=c.MODEL_SUBJECT_TYPE.getTitle(j.type||(null==i?void 0:i.type)),f=(0,d.cnjp)((null==j?void 0:j.name_cn)||(null==i?void 0:i.name_cn),(null==j?void 0:j.name)||(null==i?void 0:i.name)),x=(0,d.cnjp)((null==j?void 0:j.name)||(null==i?void 0:i.name),(null==j?void 0:j.name_cn)||(null==i?void 0:i.name_cn));return(0,p.jsxs)(r.Flex,{style:n._.mt.xs,children:[("动画"===v||"三次元"===v)&&(0,p.jsx)(l.default,{subjectId:t,isTop:-1!==m.state.top.indexOf(t)}),(0,p.jsx)(u.default,{subjectId:t}),(0,p.jsx)(r.Touchable,{style:a.styles.touchable,onPress:function(){m.showManageModal(t,{title:f,desc:x})},children:(0,p.jsx)(r.Iconfont,{name:"md-star-outline",size:19})})]})}),m.COMPONENT)},"./src/screens/home/v2/component/grid/info/tool-bar/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({touchable:{padding:o._.sm,marginLeft:o._.sm}})},"./src/screens/home/v2/component/grid/item/cover/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/item/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Cover")},"./src/screens/home/v2/component/grid/item/cover/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/components/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/constants/index.ts"),c=t("./src/screens/home/v2/component/grid/item/styles.ts"),l=t("./src/screens/home/v2/component/grid/item/cover/ds.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t,o=e.subjectId,d=e.subject,l=e.epStatus,m=s.$,a=(0,c.memoStyles)(),p=i.MODEL_SETTING_HOME_GRID_COVER_LAYOUT.getLabel(n.systemStore.setting.homeGridCoverLayout);return(0,u.jsx)(r.Touchable,{animate:!0,onPress:function(){m.selectGirdSubject(o,{subject_id:o,subject:d,ep_status:l})},children:(0,u.jsx)(r.Cover,{size:a.item.width,height:a.item.width*("长方形"===p?1.4:1),src:(null==d||null==(t=d.images)?void 0:t.medium)||"",shadow:!0,radius:!0,delay:!1})})}),l.COMPONENT)},"./src/screens/home/v2/component/grid/item/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Item")},"./src/screens/home/v2/component/grid/item/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.number.constructor.js"),t("./node_modules/core-js/modules/es.array.filter.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/screens/_/index.ts"),i=t("./src/stores/index.ts"),c=t("./src/utils/index.ts"),l=t("./src/utils/decorators/index.ts"),u=t("./src/constants/index.ts"),m=o(t("./src/screens/home/v2/component/grid/item/cover/index.tsx")),a=o(t("./src/screens/home/v2/component/grid/item/opacity/index.tsx")),p=t("./src/screens/home/v2/component/grid/item/ds.ts"),j=t("./src/screens/home/v2/component/grid/item/styles.ts"),v=t("./node_modules/react/jsx-runtime.js");s.default=(0,l.obc)((function(e,s){var t=e.subject,o=void 0===t?{}:t,l=e.subjectId,p=void 0===l?0:l,f=e.epStatus,x=s.$,_=(0,j.memoStyles)();f=Math.max(Number(f)||0,x.epStatus(p));var b,y,h=i.systemStore.setting.homeGridTitle,g="游戏"===u.MODEL_SUBJECT_TYPE.getTitle(o.type);return g||(b=x.epsCount(p),(y=x.currentOnAir(p))>b&&(y=x.epsNoSp(p).filter((function(e){return"Air"===e.status})).length)),(0,v.jsxs)(r.default,{style:_.item,children:[(0,v.jsx)(a.default,{subjectId:p,children:(0,v.jsx)(m.default,{subjectId:p,subject:o,epStatus:f})}),!g&&(0,v.jsx)(d.OnairProgress,{epStatus:f||0,total:Math.max(y||0,b||0),current:y||0}),h&&(0,v.jsx)(n.Text,{style:_.title,size:11,bold:!0,numberOfLines:3,align:"center",children:(0,c.cnjp)(o.name_cn,o.name)})]})}),p.COMPONENT)},"./src/screens/home/v2/component/grid/item/opacity/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/item/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Opacity")},"./src/screens/home/v2/component/grid/item/opacity/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/utils/decorators/index.ts"),d=t("./src/screens/home/v2/component/grid/item/opacity/ds.ts"),i=t("./src/screens/home/v2/component/grid/item/opacity/styles.ts"),c=t("./node_modules/react/jsx-runtime.js");s.default=(0,n.obc)((function(e,s){var t=e.subjectId,o=e.children,n=(s.$.state.grid||{}).subject_id;return(0,c.jsx)(r.default,{style:n===t&&i.styles.active,children:o})}),d.COMPONENT)},"./src/screens/home/v2/component/grid/item/opacity/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({active:{opacity:.64}})},"./src/screens/home/v2/component/grid/item/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var o=t("./src/stores/index.ts");s.memoStyles=o._.memoStyles((function(){var e=o._.isMobileLanscape?9:o._.device(4,5);return{item:{width:(o._.window.contentWidth-10*(e-1))/e,marginLeft:10,marginBottom:10},active:{opacity:.5},title:{paddingHorizontal:2,marginTop:o._.sm,marginBottom:o._.xs}}}))},"./src/screens/home/v2/component/grid/layout/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.PREV_TEXT=s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Layout"),s.PREV_TEXT={全部:"条目",动画:"番组",书籍:"书籍",三次元:"电视剧",游戏:"游戏"}},"./src/screens/home/v2/component/grid/layout/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.find.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=o(t("./node_modules/react-native-web/dist/exports/View/index.js")),n=t("./src/components/index.ts"),d=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),c=t("./src/screens/home/v2/component/grid/styles.ts"),l=o(t("./src/screens/home/v2/component/grid/info/index.tsx")),u=t("./src/screens/home/v2/component/grid/layout/ds.ts"),m=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.obc)((function(e,s){var t,o=e.title,i=s.$;if(!i.collection._loaded)return(0,m.jsx)(n.Loading,{});var a,p=(0,c.memoStyles)(),j=i.state,v=j.current,f=j.grid,x="游戏"===o,_=i.currentCollection(o).list,b=x?f:_.find((function(e){return e.subject_id===v})),y="";if("全部"===o&&!b&&d.systemStore.setting.showGame)(b=_.find((function(e){return e.id==v})))&&(y=(null==(a=b)?void 0:a.tip)||"",b=f);else if(x){var h;y=(null==(h=i.games.list.find((function(e){return e.id==v})))?void 0:h.tip)||""}return(0,m.jsx)(r.default,{style:x?p.gameInfo:p.info,children:b?(0,m.jsx)(l.default,{subjectId:b.subject_id,subject:b.subject,epStatus:b.ep_status,tip:y,time:x?null==(t=b.subject)?void 0:t.time:""}):(0,m.jsxs)(n.Flex,{style:p.noSelect,justify:"center",direction:"column",children:[(0,m.jsx)(n.Mesume,{size:80}),(0,m.jsxs)(n.Text,{style:d._.mt.sm,type:"sub",align:"center",children:["请先点击下方",u.PREV_TEXT[o]]})]})})}),u.COMPONENT)},"./src/screens/home/v2/component/grid/linear/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"Linear")},"./src/screens/home/v2/component/grid/linear/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.join.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./node_modules/expo-linear-gradient/build/LinearGradient.js"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/constants/index.ts"),c=t("./src/screens/home/v2/component/grid/linear/ds.ts"),l=t("./src/screens/home/v2/component/grid/linear/styles.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.ob)((function(){if(!n._.isDark)return null;var e=[];return e=i.IOS&&"list"===n.systemStore.setting.homeLayout?["rgba("+n._.colorBgRaw.join()+", 1)","rgba("+n._.colorBgRaw.join()+", 0.8)","rgba("+n._.colorBgRaw.join()+", 0.24)","rgba("+n._.colorBgRaw.join()+", 0)"]:["rgba("+n._.colorPlainRaw.join()+", 1)","rgba("+n._.colorPlainRaw.join()+", 0.8)","rgba("+n._.colorPlainRaw.join()+", 0.24)","rgba("+n._.colorPlainRaw.join()+", 0)"],(0,u.jsx)(r.LinearGradient,{style:l.styles.linear,colors:e})}),c.COMPONENT)},"./src/screens/home/v2/component/grid/linear/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({linear:{position:"absolute",zIndex:1,right:0,top:0,left:0,height:24}})},"./src/screens/home/v2/component/grid/list/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var o=t("./src/utils/dev/index.ts"),r=t("./src/screens/home/v2/component/grid/ds.ts");s.COMPONENT=(0,o.rc)(r.COMPONENT,"List")},"./src/screens/home/v2/component/grid/list/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var r=t("./src/screens/_/index.ts"),n=t("./src/stores/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/screens/home/v2/component/grid/styles.ts"),c=t("./src/screens/home/v2/component/grid/list/utils.tsx"),l=t("./src/screens/home/v2/component/grid/list/ds.ts"),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,d.obc)((function(e,s){var t=e.title,o=s.$,d=(0,i.memoStyles)(),l=n.systemStore.setting.homeGridCoverLayout,m=n._.isMobileLanscape?9:n._.device(4,5);return(0,u.jsx)(r.PaginationList2,{keyExtractor:c.keyExtractor,contentContainerStyle:d.contentContainerStyle,data:o.currentCollection(t).list,progressViewOffset:20,limit:"square"===l?20:16,numColumns:m,renderItem:c.renderItem,onHeaderRefresh:o.onHeaderRefresh},""+n._.orientation+m)}),l.COMPONENT)},"./src/screens/home/v2/component/grid/list/utils.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.keyExtractor=function(e){return String(e.subject_id||e.id)},s.renderItem=function(e){var s=e.item;return(0,d.jsx)(n.default,{subjectId:s.subject_id||s.id,subject:s.subject||{id:s.id,images:{common:s.cover,grid:s.cover,large:s.cover,medium:s.cover,small:s.cover},name:s.name,name_cn:s.nameCn,summary:"",type:r.MODEL_SUBJECT_TYPE.getValue("游戏"),url:"",time:s.time},epStatus:s.ep_status})};o(t("react"));var r=t("./src/constants/index.ts"),n=o(t("./src/screens/home/v2/component/grid/item/index.tsx")),d=t("./node_modules/react/jsx-runtime.js")},"./src/screens/home/v2/component/grid/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.memoStyles=void 0;var o=t("./src/stores/index.ts");s.memoStyles=o._.memoStyles((function(){var e=o._.isMobileLanscape?132:244;return{container:{flex:1,overflow:"hidden"},info:{zIndex:1e3,width:"100%",height:e,overflow:"hidden"},gameInfo:{width:"100%",height:160},noSelect:{width:"100%",height:"100%"},contentContainerStyle:{paddingTop:20,paddingBottom:o._.tabBarHeight+o._.lg+e,paddingLeft:o._.wind-o._.sm-2,overflow:"hidden"}}}))}}]);