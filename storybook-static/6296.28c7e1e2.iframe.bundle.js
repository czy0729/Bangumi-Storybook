(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6296],{"./src/screens/home/subject/component/character/character.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.array.map.js"),t("./node_modules/core-js/modules/es.array.includes.js"),t("./node_modules/core-js/modules/es.string.includes.js"),t("./node_modules/core-js/modules/es.string.split.js"),t("./node_modules/core-js/modules/es.regexp.exec.js"),t("./node_modules/core-js/modules/es.object.assign.js"),t("./node_modules/core-js/modules/es.function.name.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var n=t("./src/components/index.ts"),r=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),a=t("./src/utils/index.ts"),d=t("./src/utils/decorators/index.ts"),u=t("./src/utils/fetch/index.ts"),i=t("./src/screens/home/subject/ds.ts"),l=o(t("./src/screens/home/subject/component/icon/character.tsx")),m=o(t("./src/screens/home/subject/component/icon/hidden.tsx")),j=t("./src/screens/home/subject/component/character/ds.ts"),h=t("./src/screens/home/subject/component/character/styles.ts"),p=t("./node_modules/react/jsx-runtime.js"),_=(0,d.memo)((function(e){var s=e.navigation,t=e.showCharacter,o=e.subjectId,d=e.crt,j=e.crtCounts,_=e.onSwitchBlock;return(0,p.jsxs)(r.InView,{style:(0,a.stl)(h.styles.container,!t&&c._.short),children:[(0,p.jsx)(r.SectionTitle,{style:c._.container.wind,right:t?(0,p.jsx)(l.default,{}):(0,p.jsx)(m.default,{name:i.TITLE_CHARACTER,value:"showCharacter"}),icon:!t&&"md-navigate-next",onPress:function(){return _("showCharacter")},children:i.TITLE_CHARACTER}),t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.HorizontalList,{style:c._.mt.sm,data:d.map((function(e){try{var s,t,o=(null==e?void 0:e.image)||"";if(null!=e&&null!=(s=e.image)&&null!=s.includes&&s.includes("/r/"))o="https://lain.bgm.tv/pic/crt/g/"+(null==(t=e.image.split("/l/"))?void 0:t[1])||0;return Object.assign({},e,{image:o})}catch(s){return e}})),counts:j,initialRenderNums:c._.device(Math.floor(c._.window.contentWidth/56)+1,8),onPress:function(e){var t=e.id,n=e.name,r=e.nameJP,c=e._image;(0,u.t)("条目.跳转",{to:"Mono",from:i.TITLE_CHARACTER,subjectId:o}),s.push("Mono",{monoId:"character/"+t,_name:n,_jp:r,_image:c,_count:j[t]||0})},onSubPress:function(e){var t=e.actorId,n=e.desc;(0,u.t)("条目.跳转",{to:"Mono",from:i.TITLE_CHARACTER,subjectId:o}),s.push("Mono",{monoId:"person/"+t,_name:n})}}),(0,p.jsx)(n.Heatmap,{id:"条目.跳转",from:i.TITLE_CHARACTER})]})]})}),j.DEFAULT_PROPS,j.COMPONENT_MAIN);s.default=_},"./src/screens/home/subject/component/character/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var o=t("./src/stores/index.ts");s.styles=o._.create({container:{minHeight:150,marginTop:o._.lg}})},"./src/screens/home/subject/component/icon/character.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;o(t("react"));var n=t("./src/components/index.ts"),r=t("./src/stores/index.ts"),c=t("./src/utils/decorators/index.ts"),a=t("./src/utils/fetch/index.ts"),d=o(t("./src/screens/home/subject/component/icon/styles.ts")),u=t("./node_modules/react/jsx-runtime.js");s.default=(0,c.obc)((function(e,s){var t=s.$,o=s.navigation;return r.systemStore.setting.showCharacter?(0,u.jsx)(n.Touchable,{style:d.default.touch,onPress:function(){(0,a.t)("条目.跳转",{to:"Characters",from:"角色",subjectId:t.subjectId}),o.push("Characters",{subjectId:t.subjectId,name:t.cn})},children:(0,u.jsxs)(n.Flex,{children:[(0,u.jsx)(n.Text,{type:"sub",children:"更多"}),(0,u.jsx)(n.Iconfont,{name:"md-navigate-next"})]})}):null}))}}]);