(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8201],{"./src/screens/home/subject/component/blog/blog.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.string.small.js"),t("./node_modules/core-js/modules/es.string.trim.js"),t("./node_modules/core-js/modules/es.string.replace.js"),t("./node_modules/core-js/modules/es.regexp.exec.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var n=t("./src/components/index.ts"),r=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),l=t("./src/utils/index.ts"),d=t("./src/utils/decorators/index.ts"),i=t("./src/utils/hooks/index.ts"),u=t("./src/screens/home/subject/ds.ts"),a=o(t("./src/screens/home/subject/component/icon/blog.tsx")),m=o(t("./src/screens/home/subject/component/icon/hidden.tsx")),j=t("./src/screens/home/subject/component/blog/ds.ts"),x=t("./node_modules/react/jsx-runtime.js"),p=(0,d.memo)((function(e){var s=e.navigation,t=e.styles,o=e.showBlog,d=e.subjectId,j=e.blog,p=e.onSwitchBlock,b=(0,i.useExpandLazy)(j),h=b.list,g=b.onExpand;return(0,x.jsxs)(r.InView,{style:(0,l.stl)(t.container,!o&&c._.short),children:[(0,x.jsx)(r.SectionTitle,{style:t.sectionTitle,right:o?(0,x.jsx)(a.default,{}):(0,x.jsx)(m.default,{name:u.TITLE_BLOG,value:"showBlog"}),icon:!o&&"md-navigate-next",onPress:function(){return p("showBlog")},children:u.TITLE_BLOG}),o&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.Expand,{style:c._.mt.sm,onExpand:g,children:h.map((function(e){var o=e.user,n=o.nickname,i=o.username;return(0,l.getIsBlockedUser)(c.rakuenStore.blockUserIds,n,i,"Subject|Blog|"+d+"|"+e.id)?null:(0,x.jsx)(r.ItemArticle,{style:t.item,navigation:s,avatar:e.user.avatar.small,title:e.title,summary:e.summary.replace(/\r\n/g,"").trim(),nickname:n,userId:i,timestamp:e.timestamp,replies:e.replies,url:e.url,event:{id:"条目.跳转",data:{from:"评论",subjectId:d}}},e.id)}))},null==j?void 0:j.length),(0,x.jsx)(n.Heatmap,{id:"条目.跳转",from:"评论"})]})]})}),j.DEFAULT_PROPS,j.COMPONENT_MAIN);s.default=p},"./src/screens/home/subject/component/icon/blog.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var n=t("./src/components/index.ts"),r=t("./src/stores/index.ts"),c=t("./src/utils/decorators/index.ts"),l=t("./src/utils/fetch/index.ts"),d=o(t("./src/screens/home/subject/component/icon/styles.ts")),i=t("./node_modules/react/jsx-runtime.js");s.default=(0,c.obc)((function(e,s){var t=s.$,o=s.navigation;return r.systemStore.setting.showBlog?(0,i.jsx)(n.Touchable,{style:d.default.touch,onPress:function(){(0,l.t)("条目.跳转",{to:"Reviews",from:"日志",subjectId:t.subjectId}),o.push("Reviews",{subjectId:t.subjectId,name:t.cn})},children:(0,i.jsxs)(n.Flex,{children:[(0,i.jsx)(n.Text,{type:"sub",children:"更多"}),(0,i.jsx)(n.Iconfont,{name:"md-navigate-next"})]})}):null}))}}]);