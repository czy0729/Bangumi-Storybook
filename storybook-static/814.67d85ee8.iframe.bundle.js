(self.webpackChunkweb=self.webpackChunkweb||[]).push([[814],{"./src/screens/home/subject/component/icon/staff.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("./node_modules/react/index.js"));var o=t("./src/components/index.ts"),a=t("./src/stores/index.ts"),c=t("./src/utils/decorators/index.ts"),r=t("./src/utils/fetch/index.ts"),i=n(t("./src/screens/home/subject/component/icon/styles.ts")),d=t("./node_modules/react/jsx-runtime.js");s.default=(0,c.obc)((function(e,s){var t=s.$,n=s.navigation;return a.systemStore.setting.showStaff?(0,d.jsx)(o.Touchable,{style:i.default.touch,onPress:function(){(0,r.t)("条目.跳转",{to:"Persons",from:"制作人员",subjectId:t.subjectId}),n.push("Persons",{subjectId:t.subjectId,name:t.cn})},children:(0,d.jsxs)(o.Flex,{children:[(0,d.jsx)(o.Text,{type:"sub",children:"更多"}),(0,d.jsx)(o.Iconfont,{name:"md-navigate-next"})]})}):null}));try{staff.displayName="staff",staff.__docgenInfo={description:"",displayName:"staff",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/subject/component/icon/staff.tsx#staff"]={docgenInfo:staff.__docgenInfo,name:"staff",path:"src/screens/home/subject/component/icon/staff.tsx#staff"})}catch(e){}},"./src/screens/home/subject/component/staff/staff.tsx":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),t("./node_modules/core-js/modules/es.function.name.js");var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;n(t("./node_modules/react/index.js"));var o=t("./src/components/index.ts"),a=t("./src/screens/_/index.ts"),c=t("./src/stores/index.ts"),r=t("./src/utils/index.ts"),i=t("./src/utils/decorators/index.ts"),d=t("./src/utils/fetch/index.ts"),f=t("./src/screens/home/subject/ds.ts"),u=n(t("./src/screens/home/subject/component/icon/hidden.tsx")),l=n(t("./src/screens/home/subject/component/icon/staff.tsx")),m=t("./src/screens/home/subject/component/staff/ds.ts"),p=t("./src/screens/home/subject/component/staff/styles.ts"),j=t("./node_modules/react/jsx-runtime.js"),h=(0,i.memo)((function(e){var s=e.navigation,t=e.showStaff,n=e.subjectId,i=e.staff,m=e.onSwitchBlock;return(0,j.jsxs)(a.InView,{style:(0,r.stl)(p.styles.container,!t&&c._.short),children:[(0,j.jsx)(a.SectionTitle,{style:c._.container.wind,right:t?(0,j.jsx)(l.default,{}):(0,j.jsx)(u.default,{name:f.TITLE_STAFF,value:"showStaff"}),icon:!t&&"md-navigate-next",onPress:function(){return m("showStaff")},children:f.TITLE_STAFF}),t&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.HorizontalList,{style:c._.mt.sm,data:i,quality:!1,initialRenderNums:c._.device(Math.floor(c._.window.contentWidth/56)+1,8),onPress:function(e){var t=e.id,o=e.name,a=e.nameJP,c=e._image;(0,d.t)("条目.跳转",{to:"Mono",from:f.TITLE_STAFF,subjectId:n}),s.push("Mono",{monoId:"person/"+t,_name:o,_jp:a,_image:c})}}),(0,j.jsx)(o.Heatmap,{id:"条目.跳转",from:f.TITLE_STAFF})]})]})}),m.DEFAULT_PROPS,m.COMPONENT_MAIN);s.default=h;try{staff.displayName="staff",staff.__docgenInfo={description:"",displayName:"staff",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},showStaff:{defaultValue:null,description:"",name:"showStaff",required:!0,type:{name:"LayoutValue"}},subjectId:{defaultValue:null,description:"",name:"subjectId",required:!0,type:{name:"SubjectId"}},staff:{defaultValue:null,description:"",name:"staff",required:!0,type:{name:"Staff[] | DeepPartial<{ id: Id; image: `//lain.bgm.tv/pic/crt/g/${string}.jpg?r=${number}`; name: string; desc: string; }>[]"}},onSwitchBlock:{defaultValue:null,description:"",name:"onSwitchBlock",required:!0,type:{name:'(key: "s2t" | "simple" | "source" | "tinygrail" | "katakana" | "cdn" | "quality" | "hideScore" | "transition" | "showTags" | "cnFirst" | "userRemark" | "userPagination" | "heatMap" | ... 89 more ... | "baiduKey") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/home/subject/component/staff/staff.tsx#staff"]={docgenInfo:staff.__docgenInfo,name:"staff",path:"src/screens/home/subject/component/staff/staff.tsx#staff"})}catch(e){}},"./src/screens/home/subject/component/staff/styles.ts":(e,s,t)=>{t("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(s,"__esModule",{value:!0}),s.styles=void 0;var n=t("./src/stores/index.ts");s.styles=n._.create({container:{minHeight:140,marginTop:n._.lg}})}}]);