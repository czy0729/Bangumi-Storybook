(self.webpackChunkweb=self.webpackChunkweb||[]).push([[9614],{"./src/screens/web-view/information/images/index.web.tsx":(e,n,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.array.map.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(s("./node_modules/react/index.js"));var o=r(s("./node_modules/react-native-web/dist/exports/View/index.js")),i=s("./src/utils/decorators/index.ts"),t=s("./src/screens/web-view/information/images/styles.ts"),d=s("./node_modules/react/jsx-runtime.js");n.default=(0,i.ob)((function(e){var n=e.data,s=void 0===n?[]:n;if(!s.length)return null;var r=(0,t.memoStyles)();return(0,d.jsx)(d.Fragment,{children:s.map((function(e){return(0,d.jsx)(o.default,{style:r.image,children:(0,d.jsx)("img",{src:e,rel:"noreferrer",referrerPolicy:"no-referrer",alt:""})},e)}))})}));try{indexweb.displayName="indexweb",indexweb.__docgenInfo={description:"",displayName:"indexweb",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/web-view/information/images/index.web.tsx#indexweb"]={docgenInfo:indexweb.__docgenInfo,name:"indexweb",path:"src/screens/web-view/information/images/index.web.tsx#indexweb"})}catch(e){}},"./src/screens/web-view/information/images/styles.ts":(e,n,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.memoStyles=void 0;var r=s("./src/stores/index.ts");n.memoStyles=r._.memoStyles((function(){return{image:{width:"100%",marginTop:r._.md,borderWidth:1,borderColor:r._.colorBorder}}}))},"./src/screens/web-view/information/index.tsx":(e,n,s)=>{s("./node_modules/core-js/modules/es.object.define-property.js"),s("./node_modules/core-js/modules/es.string.split.js"),s("./node_modules/core-js/modules/es.regexp.exec.js"),s("./node_modules/core-js/modules/es.array.map.js"),s("./node_modules/core-js/modules/es.array.filter.js"),s("./node_modules/core-js/modules/es.string.trim.js"),s("./node_modules/core-js/modules/es.string.replace.js");var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(s("./node_modules/react/index.js"));var o=s("./src/components/index.ts"),i=s("./src/stores/index.ts"),t=r(s("./src/screens/web-view/information/images/index.web.tsx")),d=s("./node_modules/react/jsx-runtime.js");n.default=function(e){var n=e.navigation,s=e.route.params,r=s.title,a=void 0===r?"":r,l=s.message,m=void 0===l?[]:l,c=s.images,u=void 0===c?[]:c,f=s.advance,p=void 0!==f&&f,x="string"==typeof m?m.split(","):m,_="string"==typeof u?u.split(","):u;return(0,d.jsxs)(o.Component,{id:"screen-information",children:[(0,d.jsx)(o.Header,{title:"",hm:["information","Information"]}),(0,d.jsx)(o.Page,{children:(0,d.jsxs)(o.ScrollView,{style:i._.container.wind,contentContainerStyle:i._.container.bottom,children:[!!a&&(0,d.jsxs)(o.Text,{style:[i._.mt.md,i._.mb.sm],size:24,lineHeight:28,bold:!0,selectable:!0,children:[a,"说明"]}),x.filter((function(e){return!!e.trim()})).map((function(e,n){return(0,d.jsx)(o.Text,{style:i._.mt.md,size:16,lineHeight:18,selectable:!0,children:e.replace(/,/g,"，").replace(/\?/g,"？").replace(/\(/g,"「").replace(/\)/g,"」")},n)})),(0,d.jsx)(t.default,{data:_}),!!p&&(0,d.jsx)(o.Text,{style:i._.mt.lg,type:"sub",size:16,lineHeight:18,onPress:function(){return n.push("Qiafan")},children:"关于会员 〉"})]})})]})};try{information.displayName="information",information.__docgenInfo={description:"说明",displayName:"information",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"any"}},route:{defaultValue:null,description:"",name:"route",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/web-view/information/index.tsx#information"]={docgenInfo:information.__docgenInfo,name:"information",path:"src/screens/web-view/information/index.tsx#information"})}catch(e){}}}]);