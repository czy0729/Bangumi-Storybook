(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7169],{"./src/screens/rakuen/setting/component/base/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Base")},"./src/screens/rakuen/setting/component/base/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),u=n(t("./src/screens/user/setting/component/block/index.tsx")),a=n(t("./src/screens/user/setting/component/tip/index.tsx")),l=t("./src/screens/rakuen/setting/component/styles.ts"),m=t("./src/screens/rakuen/setting/component/base/ds.ts"),p=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.ob)((function(){var e=c.rakuenStore.setting,s=e.filterDelete,t=e.isBlockDefaultUser,n=e.isMarkOldTopic;return(0,p.jsxs)(u.default,{children:[(0,p.jsx)(a.default,{children:"列表"}),(0,p.jsx)(o.ItemSetting,{hd:"过滤用户删除的楼层",ft:(0,p.jsx)(r.SwitchPro,{style:l.styles.switch,value:s,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"过滤删除",checked:!s}),c.rakuenStore.switchSetting("filterDelete")}}),withoutFeedback:!0}),(0,p.jsx)(o.ItemSetting,{hd:"屏蔽疑似广告姬",information:"屏蔽默认头像发布且回复数小于 4 的帖子",ft:(0,p.jsx)(r.SwitchPro,{style:l.styles.switch,value:t,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"屏蔽广告",checked:!t}),c.rakuenStore.switchSetting("isBlockDefaultUser")}}),withoutFeedback:!0}),(0,p.jsx)(o.ItemSetting,{information:"标记发布时间大于 1 年的帖子",hd:"标记坟贴",ft:(0,p.jsx)(r.SwitchPro,{style:l.styles.switch,value:n,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"坟贴",checked:!n}),c.rakuenStore.switchSetting("isMarkOldTopic")}}),withoutFeedback:!0})]})}),m.COMPONENT)},"./src/screens/rakuen/setting/component/likes/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Likes")},"./src/screens/rakuen/setting/component/likes/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),u=n(t("./src/screens/user/setting/component/block/index.tsx")),a=n(t("./src/screens/user/setting/component/tip/index.tsx")),l=t("./src/screens/rakuen/setting/component/styles.ts"),m=t("./src/screens/rakuen/setting/component/utils.ts"),p=t("./src/screens/rakuen/setting/component/likes/ds.ts"),f=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.ob)((function(){var e=c.rakuenStore.setting.likes;return(0,f.jsxs)(u.default,{children:[(0,f.jsx)(a.default,{children:"贴贴"}),(0,f.jsx)(o.ItemSetting,{hd:"贴贴模块",information:"近期新增的帖子回复上面贴表情的功能\n长按数字按钮展开贴过的用户列表\n因在网页版随处可见，不建议关闭",ft:(0,f.jsx)(r.SwitchPro,{style:l.styles.switch,value:e,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"贴贴模块",checked:!e}),c.rakuenStore.switchSetting("likes")}}),thumb:(0,m.getYuqueThumbs)(["0/2023/png/386799/1684389118526-fa7066b5-5c37-4280-abe0-0325e05aa4c7.png","0/2023/png/386799/1688332532626-a8958a19-e023-4cf8-bba6-4ca94f71752c.png"]),withoutFeedback:!0})]})}),p.COMPONENT)},"./src/screens/rakuen/setting/component/media/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Media")},"./src/screens/rakuen/setting/component/media/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),u=n(t("./src/screens/user/setting/component/block/index.tsx")),a=n(t("./src/screens/user/setting/component/tip/index.tsx")),l=t("./src/screens/rakuen/setting/component/styles.ts"),m=t("./src/screens/rakuen/setting/component/utils.ts"),p=t("./src/screens/rakuen/setting/component/media/ds.ts"),f=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.ob)((function(){var e=c.rakuenStore.setting,s=e.acSearch,t=e.acSearchPopable,n=e.matchLink;return(0,f.jsxs)(u.default,{children:[(0,f.jsx)(a.default,{children:"媒体信息块"}),(0,f.jsx)(o.ItemSetting,{hd:"楼层链接显示成信息块",information:"若楼层出现特定页面链接，使用不同的 UI 代替",ft:(0,f.jsx)(r.SwitchPro,{style:l.styles.switch,value:n,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"显示信息块",checked:!n}),c.rakuenStore.switchSetting("matchLink")}}),withoutFeedback:!0,thumb:(0,m.getYuqueThumbs)(["0/2022/png/386799/1661155814563-74ea244f-c48c-49d2-8fa0-be0bc220724e.png","0/2022/png/386799/1661155854261-970ecf62-6eaa-4b0f-b280-347233ada8f1.png"])}),(0,f.jsx)(o.ItemSetting,{hd:"楼层内容猜测条目",information:"使用条目词库对楼层文字进行猜测匹配，若匹配成功文字下方显示下划线，点击直接去到条目页面",ft:(0,f.jsx)(r.SwitchPro,{style:l.styles.switch,value:s,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"猜测条目",checked:!s}),c.rakuenStore.switchSetting("acSearch")}}),withoutFeedback:!0,thumb:(0,m.getYuqueThumbs)(["0/2022/png/386799/1661156697962-47872ab9-dd71-40e7-84c6-842d014fa85e.png","0/2022/png/386799/1661156404852-5419bd25-408e-49b3-9e0a-57b480b54ecf.png"])}),(0,f.jsx)(o.ItemSetting,{hd:"猜测条目先显示缩略信息",information:"若猜测命中关键字，为了不打断阅读，会在图层上方先显示缩略信息，再次点击才会进入条目页面",ft:(0,f.jsx)(r.SwitchPro,{style:l.styles.switch,value:t,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"猜测条目",checked:!s}),c.rakuenStore.switchSetting("acSearchPopable")}}),withoutFeedback:!0,thumb:(0,m.getYuqueThumbs)(["0/2022/png/386799/1661157003238-c24ee52e-85ba-43b1-81fb-71e2596c6562.png","0/2022/png/386799/1661157009090-307ff23e-1734-4914-8c8e-1537faa7e9f9.png"])}),(0,f.jsxs)(r.Flex,{style:l.styles.acSearchPopable,children:[(0,f.jsx)(r.Text,{size:13,children:"试一试∶"}),(0,f.jsxs)(r.Text,{size:13,children:[(0,f.jsx)(r.Text,{size:13,bold:!0,underline:!0,onPress:function(){c.uiStore.showPopableSubject({subjectId:364450})},children:"石蒜"}),"物语是什么鬼翻译[bgm38]"]})]})]})}),p.COMPONENT)},"./src/screens/rakuen/setting/component/scroll/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Scroll")},"./src/screens/rakuen/setting/component/scroll/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.weak-map.js"),t("./node_modules/core-js/modules/es.object.to-string.js"),t("./node_modules/core-js/modules/es.string.iterator.js"),t("./node_modules/core-js/modules/es.array.iterator.js"),t("./node_modules/core-js/modules/web.dom-collections.iterator.js"),t("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var r=function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b(s);if(t&&t.has(e))return t.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}(t("react")),o=t("./node_modules/mobx-react/dist/mobxreact.esm.js"),c=t("./src/components/index.ts"),i=t("./src/stores/index.ts"),d=t("./src/utils/dev/index.ts"),u=n(t("./src/screens/rakuen/setting/component/base/index.tsx")),a=n(t("./src/screens/rakuen/setting/component/blockeds/index.tsx")),l=n(t("./src/screens/rakuen/setting/component/likes/index.tsx")),m=n(t("./src/screens/rakuen/setting/component/media/index.tsx")),p=n(t("./src/screens/rakuen/setting/component/slider/index.tsx")),f=n(t("./src/screens/rakuen/setting/component/topic/index.tsx")),j=t("./src/screens/rakuen/setting/component/scroll/ds.ts"),g=t("./src/screens/rakuen/setting/component/scroll/styles.ts"),x=t("./node_modules/react/jsx-runtime.js");function b(e){if("function"!=typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:s})(e)}s.default=function(e){var s=e.navigation;(0,d.r)(j.COMPONENT);var t=(0,r.useCallback)((function(){i.uiStore.closePopableSubject()}),[]);return(0,o.useObserver)((function(){return(0,x.jsx)(c.Page,{style:i._.select(i._.container.bg,i._.container.plain),children:(0,x.jsxs)(c.ScrollView,{contentContainerStyle:g.styles.container,onScroll:t,children:[(0,x.jsx)(l.default,{}),(0,x.jsx)(f.default,{}),(0,x.jsx)(p.default,{}),(0,x.jsx)(m.default,{}),(0,x.jsx)(u.default,{}),(0,x.jsx)(a.default,{navigation:s})]})})}))}},"./src/screens/rakuen/setting/component/scroll/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({container:{paddingTop:n._.sm,paddingBottom:n._.bottom}})},"./src/screens/rakuen/setting/component/slider/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Slider")},"./src/screens/rakuen/setting/component/slider/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.find-index.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),u=t("./src/constants/index.ts"),a=n(t("./src/screens/user/setting/component/block/index.tsx")),l=n(t("./src/screens/user/setting/component/tip/index.tsx")),m=t("./src/screens/rakuen/setting/component/styles.ts"),p=t("./src/screens/rakuen/setting/component/utils.ts"),f=t("./src/screens/rakuen/setting/component/slider/ds.ts"),j=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.ob)((function(){var e=c.rakuenStore.setting,s=e.switchSlider,t=e.sliderAnimated,n=e.scrollDirection;return(0,j.jsxs)(a.default,{children:[(0,j.jsx)(l.default,{children:"楼层跳转"}),(0,j.jsx)(o.ItemSetting,{hd:"跳转滚动动画",information:"频繁跳动可能会产生视觉疲劳，若您经常使用跳转功能，建议关闭",ft:(0,j.jsx)(r.SwitchPro,{style:m.styles.switch,value:t,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"楼层跳转滚动动画",checked:!t}),c.rakuenStore.switchSetting("sliderAnimated")}}),withoutFeedback:!0}),(0,j.jsx)(o.ItemSetting,{hd:"交换跳转按钮",information:"为了方便左手持机用户，启用后左侧按钮为下一楼，右侧按钮为上一楼",ft:(0,j.jsx)(r.SwitchPro,{style:m.styles.switch,value:s,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"交换楼层跳转按钮",checked:!s}),c.rakuenStore.switchSetting("switchSlider")}}),thumb:(0,p.getYuqueThumbs)(["0/2023/png/386799/1684388975121-fbe54014-9b5b-4b08-94e4-f7ad9a463e71.png","0/2023/png/386799/1684388990177-37b68af2-7d66-4e0b-827d-3c390410a943.png"]),withoutFeedback:!0}),(0,j.jsx)(o.ItemSetting,{hd:"楼层直达条",ft:(0,j.jsx)(r.SegmentedControl,{style:m.styles.segmentedControl,backgroundColor:c._.select(c._.colorBg,c._.colorPlain),size:12,values:u.RAKUEN_SCROLL_DIRECTION.map((function(e){return e.label})),selectedIndex:u.RAKUEN_SCROLL_DIRECTION.findIndex((function(e){return e.value===n})),onValueChange:function(e){(0,d.t)("超展开设置.切换",{title:"楼层导航条方向",value:e}),c.rakuenStore.setScrollDirection(u.MODEL_RAKUEN_SCROLL_DIRECTION.getValue(e))}}),thumb:(0,p.getYuqueThumbs)(["0/2022/png/386799/1661159480188-a1279dab-0af3-4985-ba54-cda3581a5cbf.png"])})]})}),f.COMPONENT)},"./src/screens/rakuen/setting/component/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({switch:{marginRight:-4,transform:[{scale:n._.device(.8,1.12)}]},segmentedControl:{height:n._.r(32),width:n._.r(196)},acSearchPopable:{paddingTop:n._.sm,paddingBottom:n._.md,paddingLeft:n._._wind}})},"./src/screens/rakuen/setting/component/topic/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/component/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Topic")},"./src/screens/rakuen/setting/component/topic/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.find-index.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),u=t("./src/constants/index.ts"),a=n(t("./src/screens/user/setting/component/block/index.tsx")),l=n(t("./src/screens/user/setting/component/tip/index.tsx")),m=t("./src/screens/rakuen/setting/component/styles.ts"),p=t("./src/screens/rakuen/setting/component/utils.ts"),f=t("./src/screens/rakuen/setting/component/topic/ds.ts"),j=t("./node_modules/react/jsx-runtime.js");s.default=(0,i.ob)((function(){var e=c.rakuenStore.setting,s=e.autoLoadImageV2,t=e.quote,n=e.quoteAvatar,i=e.subExpand,f=e.wide;return(0,j.jsxs)(a.default,{children:[(0,j.jsx)(l.default,{children:"帖子"}),(0,j.jsx)(o.ItemSetting,{hd:"展开引用",information:"展开子回复中上一级的回复内容",ft:(0,j.jsx)(r.SwitchPro,{style:m.styles.switch,value:t,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"展开引用",checked:!t}),c.rakuenStore.switchSetting("quote")}}),withoutFeedback:!0,thumb:(0,p.getYuqueThumbs)(["0/2022/png/386799/1661157694142-917c49b1-96f4-4d51-9cdc-a39ea80a4de5.png","0/2022/png/386799/1661157697155-91a59c53-a075-423b-8116-717583a7f5f2.png"])}),t&&(0,j.jsx)(o.ItemSetting,{hd:"显示引用头像",ft:(0,j.jsx)(r.SwitchPro,{style:m.styles.switch,value:n,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"显示引用头像",checked:!n}),c.rakuenStore.switchSetting("quoteAvatar")}}),withoutFeedback:!0,thumb:(0,p.getYuqueThumbs)(["0/2022/png/386799/1661157853356-0ecf0000-acd2-4faf-acfb-9804498ee85c.png","0/2022/png/386799/1661157856095-60c6b420-8aba-406b-8c82-97a8360c84c1.png"])}),(0,j.jsx)(o.ItemSetting,{hd:"楼层内容加宽展示",ft:(0,j.jsx)(r.SwitchPro,{style:m.styles.switch,value:f,onSyncPress:function(){(0,d.t)("超展开设置.切换",{title:"加宽展示",checked:!f}),c.rakuenStore.switchSetting("wide")}}),withoutFeedback:!0,thumb:(0,p.getYuqueThumbs)(["0/2022/png/386799/1661327786769-cd143b43-e267-4648-af34-179efbe052af.png","0/2022/png/386799/1661327416446-79d19833-ed5c-4a44-a86e-06c00e83f12d.png"])}),(0,j.jsx)(o.ItemSetting,{hd:"楼层中图片自动加载",information:"若设置成自动，则无论是否提前获取到图片大小，也会自动加载，请谨慎开启",ft:(0,j.jsx)(r.SegmentedControl,{style:m.styles.segmentedControl,backgroundColor:c._.select(c._.colorBg,c._.colorPlain),size:12,values:u.RAKUEN_AUTO_LOAD_IMAGE.map((function(e){return e.label})),selectedIndex:u.RAKUEN_AUTO_LOAD_IMAGE.findIndex((function(e){return e.value===s})),onValueChange:function(e){(0,d.t)("超展开设置.切换",{title:"楼层中图片自动加载",value:e}),c.rakuenStore.setAutoLoadImage(u.MODEL_RAKUEN_AUTO_LOAD_IMAGE.getValue(e))}})}),(0,j.jsx)(o.ItemSetting,{hd:"子楼层折叠",information:"子回复超过此值后折叠，需手动展开；0 代表一直折叠，因性能问题暂不提供不折叠",ft:(0,j.jsx)(r.SegmentedControl,{style:m.styles.segmentedControl,backgroundColor:c._.select(c._.colorBg,c._.colorPlain),size:12,values:u.RAKUEN_SUB_EXPAND.map((function(e){return e.label})),selectedIndex:u.RAKUEN_SUB_EXPAND.findIndex((function(e){return e.value===i})),onValueChange:function(e){(0,d.t)("超展开设置.切换",{title:"子楼层折叠",value:e}),c.rakuenStore.setSubExpand(u.MODEL_RAKUEN_SUB_EXPAND.getValue(e))}})})]})}),f.COMPONENT)},"./src/screens/rakuen/setting/component/utils.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.getYuqueThumbs=function(e){return e.map((function(e){return{url:"https://cdn.nlark.com/yuque/"+e}}))}},"./src/screens/rakuen/setting/header/ds.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.COMPONENT=void 0;var n=t("./src/utils/dev/index.ts"),r=t("./src/screens/rakuen/setting/ds.ts");s.COMPONENT=(0,n.rc)(r.COMPONENT,"Header")},"./src/screens/rakuen/setting/header/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/utils/index.ts"),c=t("./src/utils/decorators/index.ts"),i=t("./src/utils/fetch/index.ts"),d=t("./src/constants/index.ts"),u=t("./src/screens/rakuen/setting/header/ds.ts"),a=t("./node_modules/react/jsx-runtime.js"),l="浏览器查看",m=[l];s.default=(0,c.ob)((function(){return(0,a.jsx)(r.Header,{title:"超展开设置",hm:["rakuen/settings","RakuenSetting"],headerRight:function(){return(0,a.jsx)(r.Header.Popover,{data:m,onSelect:function(e){(0,i.t)("超展开设置.右上角菜单",{key:e}),e===l&&(0,o.open)((0,d.HTML_PRIVACY)())}})}})}),u.COMPONENT)},"./src/screens/rakuen/setting/hooks.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.useRakuenSettingPage=function(){var e=(0,o.useIsFocused)();(0,n.useEffect)((function(){e||r.uiStore.closePopableSubject()}),[e]),(0,o.useMount)((function(){r.userStore.isWebLogin&&(r.rakuenStore.downloadSetting(),r.rakuenStore.fetchPrivacy())}))};var n=t("react"),r=t("./src/stores/index.ts"),o=t("./src/utils/hooks/index.ts")},"./src/screens/rakuen/setting/index.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("react"));var r=t("./src/components/index.ts"),o=t("./src/screens/_/index.ts"),c=t("./src/utils/hooks/index.ts"),i=n(t("./src/screens/rakuen/setting/component/scroll/index.tsx")),d=n(t("./src/screens/rakuen/setting/header/index.tsx")),u=t("./src/screens/rakuen/setting/hooks.ts"),a=t("./node_modules/react/jsx-runtime.js");s.default=function(e){var s=e.navigation;return(0,u.useRakuenSettingPage)(),(0,c.useObserver)((function(){return(0,a.jsxs)(r.Component,{id:"screen-rakuen-setting",children:[(0,a.jsx)(d.default,{}),(0,a.jsx)(o.TapListener,{children:(0,a.jsx)(i.default,{navigation:s})})]})}))}}}]);