(self.webpackChunkweb=self.webpackChunkweb||[]).push([[3426],{"./src/screens/discovery/award/component/ds.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.COMPONENT=void 0;var t=r("./src/utils/dev/index.ts"),a=r("./src/screens/discovery/award/ds.ts");e.COMPONENT=(0,t.rc)(a.COMPONENT,"Component")},"./src/screens/discovery/award/component/extra/ds.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.COMPONENT=void 0;var t=r("./src/utils/dev/index.ts"),a=r("./src/screens/discovery/award/component/ds.ts");e.COMPONENT=(0,t.rc)(a.COMPONENT,"Extra")},"./src/screens/discovery/award/component/extra/index.tsx":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js");var t=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t(r("react"));var a=r("./src/components/index.ts"),i=r("./src/utils/decorators/index.ts"),s=r("./src/screens/discovery/award/component/extra/ds.ts"),d=r("./node_modules/react/jsx-runtime.js");e.default=(0,i.ob)((function(n){var e=n.year;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Track,{title:"年鉴",hm:["award/"+e,"Award"]}),(0,d.jsx)(a.Heatmap,{id:"年鉴",screen:"Award"}),(0,d.jsx)(a.Heatmap,{right:80,bottom:40,id:"年鉴.跳转",transparent:!0})]})}),s.COMPONENT);try{extra.displayName="extra",extra.__docgenInfo={description:"",displayName:"extra",props:{year:{defaultValue:null,description:"",name:"year",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/award/component/extra/index.tsx#extra"]={docgenInfo:extra.__docgenInfo,name:"extra",path:"src/screens/discovery/award/component/extra/index.tsx#extra"})}catch(n){}},"./src/screens/discovery/award/component/loading/ds.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.COMPONENT=void 0;var t=r("./src/utils/dev/index.ts"),a=r("./src/screens/discovery/award/component/ds.ts");e.COMPONENT=(0,t.rc)(a.COMPONENT,"Loading")},"./src/screens/discovery/award/component/loading/index.tsx":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js");var t=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t(r("react"));var a=r("./src/components/index.ts"),i=r("./src/stores/index.ts"),s=r("./src/utils/decorators/index.ts"),d=r("./src/screens/discovery/award/component/loading/ds.ts"),o=r("./src/screens/discovery/award/component/loading/styles.ts"),l=r("./node_modules/react/jsx-runtime.js");e.default=(0,s.ob)((function(n){var e=n.redirectCount,r=n.onOpen;return(0,l.jsxs)(a.Loading,{style:o.styles.loading,color:i._.__colorPlain__,children:[(0,l.jsx)(a.Text,{style:i._.mt.md,size:13,type:i._.select("plain","title"),children:e?"第"+e+"次重试":"网页加载中, 请稍等"}),(0,l.jsx)(a.Text,{style:o.styles.extra,size:10,type:i._.select("plain","title"),onPress:r,children:"或点这里使用浏览器打开"})]})}),d.COMPONENT);try{loading.displayName="loading",loading.__docgenInfo={description:"",displayName:"loading",props:{redirectCount:{defaultValue:null,description:"",name:"redirectCount",required:!0,type:{name:"any"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/award/component/loading/index.tsx#loading"]={docgenInfo:loading.__docgenInfo,name:"loading",path:"src/screens/discovery/award/component/loading/index.tsx#loading"})}catch(n){}},"./src/screens/discovery/award/component/loading/styles.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.styles=void 0;var t=r("./src/stores/index.ts");e.styles=t._.create({loading:{position:"absolute",zIndex:1,top:0,right:0,bottom:0,left:0,backgroundColor:"#000"},extra:{maginTop:t._.md,opacity:.6}})},"./src/screens/discovery/award/component/web-view/index.web.tsx":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/web.timers.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js");var t=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t(r("react"));var a=r("./src/components/index.ts"),i=r("./src/utils/index.ts"),s=r("./src/utils/hooks/index.ts"),d=r("./src/constants/index.ts"),o=r("./node_modules/react/jsx-runtime.js"),l="screen-award-web-view";function c(n){var e=n.source;(0,s.useMount)((function(){setTimeout((function(){document.querySelector("."+l).addEventListener("click",(function(n){if(n.target.closest("a."+l+"__link")){n.preventDefault();var e=n.target.closest("a").getAttribute("data-href");(0,i.appNavigate)(e,(0,i.navigationReference)())}}))}),4e3)}));var r=e.html.replace(/<(script)\b[^<]*(?:(?!<\/(script)>)<[^<]*)*<\/(script)>/g,"").replace('<link rel="preconnect" href="https://fonts.googleapis.com">',"").replace('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',"").replace('<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@500;900&display=swap" rel="stylesheet">',"").replace(/href="\//g,'href="'+d.HOST+"/").replace(/src="\/img\/no_icon_subject.png"/g,'src="'+d.IMG_DEFAULT+'"').replace(/<a href="/g,'<a class="'+l+'__link" data-href="');return(0,o.jsx)(a.ScrollView,{children:(0,o.jsx)("div",{className:l,dangerouslySetInnerHTML:{__html:r}})})}e.default=c;try{c.displayName="WebView",c.__docgenInfo={description:"",displayName:"WebView",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/award/component/web-view/index.web.tsx#WebView"]={docgenInfo:c.__docgenInfo,name:"WebView",path:"src/screens/discovery/award/component/web-view/index.web.tsx#WebView"})}catch(n){}},"./src/screens/discovery/award/ds.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.NAMESPACE=e.LIGHT_CONTENT_YEARS=e.COMPONENT=void 0;var t=e.COMPONENT="Award";e.NAMESPACE="Screen"+t,e.LIGHT_CONTENT_YEARS=["2022","2020","2016","2015","2012","2011"]},"./src/screens/discovery/award/index.tsx":(n,e,r)=>{var t=r("./node_modules/@babel/runtime/regenerator/index.js");r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.reflect.construct.js"),r("./node_modules/core-js/modules/es.array.concat.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),r("./node_modules/core-js/modules/es.array.includes.js"),r("./node_modules/core-js/modules/es.string.includes.js"),r("./node_modules/core-js/modules/es.string.trim.js"),r("./node_modules/core-js/modules/web.timers.js"),r("./node_modules/core-js/modules/es.string.split.js");var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(r("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),s=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),d=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),o=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),l=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),h=a(r("react")),m=r("./src/components/index.ts"),v=r("./src/utils/index.ts"),g=r("./src/utils/decorators/index.ts"),w=r("./src/utils/fetch/index.ts"),f=r("./src/constants/index.ts"),y=a(r("./src/screens/discovery/award/component/extra/index.tsx")),x=a(r("./src/screens/discovery/award/component/loading/index.tsx")),b=a(r("./src/screens/discovery/award/component/web-view/index.web.tsx")),_=a(r("./src/screens/discovery/award/reset-style.ts")),S=r("./src/screens/discovery/award/utils.ts"),j=r("./src/screens/discovery/award/ds.ts"),k=r("./src/screens/discovery/award/styles.ts"),O=r("./node_modules/react/jsx-runtime.js");function T(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,t=(0,p.default)(n);if(e){var a=(0,p.default)(this).constructor;r=Reflect.construct(t,arguments,a)}else r=t.apply(this,arguments);return(0,c.default)(this,r)}}var W={},N=function(n){(0,l.default)(a,n);var e,r=T(a);function a(){var n,e;(0,s.default)(this,a);for(var d=arguments.length,l=new Array(d),c=0;c<d;c++)l[c]=arguments[c];return n=r.call.apply(r,[this].concat(l)),(0,u.default)((0,o.default)(n),"state",{loading:!0,redirectCount:0,html:""}),(0,u.default)((0,o.default)(n),"loaded",!1),(0,u.default)((0,o.default)(n),"redirectCount",0),(0,u.default)((0,o.default)(n),"fetch",(0,i.default)(t.mark((function e(){var r;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.fetchHTML)({url:f.HOST+"/award/"+n.year});case 3:r=e.sent,"2022"!=n.year&&(r=(0,v.removeCF)(r)),r=r.replace(/>\s+</g,"><"),"2022"!=n.year&&"2023"!=n.year&&(r=r.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")),r=(r.replace(/href="javascript:void\(0\)"/g,"").replace(/<div id="headerNeue2">(.+?)<div id="awardWrapper"/g,'<div id="awardWrapper"').replace(/<div class="shareBtn">(.+?)<\/div>/,"").replace(/<div id="dock">(.+?)<div id="robot"/g,'<div id="robot"').replace(/<div id="main" class="png_bg"><div id="footer">(.+?)<\/div><div class="homeBg">/g,'</div><div class="homeBg">').replace(/\/r\/400\/pic/g,"/r/200/pic")+"<style>"+_.default[n.year]+"</style><script>"+S.injectedStaticJavaScript+"<\/script>").replace(/\/r\/400\/pic/g,"/r/200/pic"),W[n.year]=r,n.setState({html:r}),f.STORYBOOK&&(0,v.setStorage)(j.NAMESPACE+"|html|"+n.year,r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n.onError();case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))),(0,u.default)((0,o.default)(n),"onError",(function(){n.props.navigation.goBack(),(0,v.info)("网络似乎出了点问题，请重试"),(0,w.t)("年鉴.错误",{uri:n.uri})})),(0,u.default)((0,o.default)(n),"onOpen",(function(){(0,v.open)(n.uri),(0,w.t)("年鉴.浏览器打开",{uri:n.uri})})),(0,u.default)((0,o.default)(n),"onMessage",(e=(0,i.default)(t.mark((function e(r){var a,i,s;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,a=JSON.parse(r.nativeEvent.data),i=a.type,s=a.data,e.t0=i,e.next="onclick"===e.t0?5:7;break;case 5:return n.onDirect(s),e.abrupt("break",8);case 7:return e.abrupt("break",8);case 8:e.next=13;break;case 10:e.prev=10,e.t1=e.catch(0),n.onError();case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(n){return e.apply(this,arguments)})),(0,u.default)((0,o.default)(n),"onDirect",(function(e){if(null!=e&&e.href){var r=n.props.navigation,t=e.href,a=e.innerHTML,i=e.nextInnerHTML,s={};if(t.includes("/subject/")&&(a&&(s._image=(0,v.cheerio)(a)("img").attr("src")||""),i)){var d=(0,v.cheerio)(i);s._jp=d(".title").text().trim(),s._cn=d(".subtitle").text().trim()}var o={id:"年鉴.跳转",data:{year:n.year}};(0,v.appNavigate)(t,r,s,o)}})),(0,u.default)((0,o.default)(n),"onLoad",(function(){n.setState({loading:!1})})),n}return(0,d.default)(a,[{key:"componentDidMount",value:(e=(0,i.default)(t.mark((function n(){var e,r,a;return t.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=this,!(r=W[this.year])){n.next=6;break}return this.setState({html:r}),this.onLoad(),n.abrupt("return");case 6:if(!f.STORYBOOK){n.next=17;break}return n.next=9,(0,v.getStorage)(j.NAMESPACE+"|html|"+this.year);case 9:if(n.t0=n.sent,n.t0){n.next=12;break}n.t0="";case 12:if(!(a=n.t0)){n.next=17;break}return this.setState({html:a}),this.onLoad(),n.abrupt("return");case 17:this.fetch(),setTimeout((function(){e.onLoad()}),3e3);case 19:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"uri",get:function(){var n,e;return(null==(n=this.props.route)||null==(e=n.params)?void 0:e.uri)||""}},{key:"year",get:function(){var n=this.uri.split("/");return n[n.length-1]}},{key:"barStyle",get:function(){return!this.state.loading&&j.LIGHT_CONTENT_YEARS.includes(this.year)?"dark-content":"light-content"}},{key:"source",get:function(){return{html:this.state.html,baseUrl:f.HOST}}},{key:"render",value:function(){var n=this.state,e=n.loading,r=n.redirectCount,t=n.html;return(0,O.jsx)(m.Component,{id:"screen-award",children:(0,O.jsxs)(m.Page,{style:k.styles.container,children:[e&&(0,O.jsx)(x.default,{redirectCount:r,onOpen:this.onOpen}),!!t&&(0,O.jsx)(b.default,{year:this.year,source:this.source,onLoad:this.onLoad,onError:this.onError,onMessage:this.onMessage}),(0,O.jsx)(y.default,{year:this.year})]})})}}]),a}(h.default.Component);e.default=(0,g.ob)(N);try{award.displayName="award",award.__docgenInfo={description:"",displayName:"award",props:{navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"Navigation"}},route:{defaultValue:null,description:"",name:"route",required:!1,type:{name:"{ params?: { uri?: string; }; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/screens/discovery/award/index.tsx#award"]={docgenInfo:award.__docgenInfo,name:"award",path:"src/screens/discovery/award/index.tsx#award"})}catch(n){}},"./src/screens/discovery/award/reset-style.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),r("./node_modules/core-js/modules/es.string.replace.js"),r("./node_modules/core-js/modules/es.regexp.exec.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=20*1.32+"vw";function a(n){return n.replace(/;/g," !important;")}e.default={2023:a("\n    #awardWrapper {\n      padding-top: 0;\n    }\n  "),2020:a("\n    .pattern_bgm38:before {\n      animation: initial;\n    }\n  "),2019:a("\n    /* 频道 */\n    .channelStatsWrapper .columnGrid ul.grid li span.cover,\n    .channelStatsWrapper .columnGrid ul.grid li span.cover span.overlay {\n      width: 30vw;\n      height: 30vw;\n      background-size: 30vw;\n    }\n\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: "+t+";\n    }\n\n    /* 标签 */\n    #chl_crt span.tags,\n    #chl_community span.tags {\n      display: block;\n      padding: 0 8px;\n    }\n  "),2018:a("\n    /* 频道 */\n    .channelStatsWrapper .columnGrid ul.grid li span.cover,\n    .channelStatsWrapper .columnGrid ul.grid li span.cover span.overlay {\n      width: 30vw;\n      height: 30vw;\n      background-size: 30vw;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: "+t+";\n    }\n    /* 标签 */\n    #chl_crt span.tags,\n    #chl_community span.tags {\n      display: block;\n      padding: 0 8px;\n    }\n  "),2017:a("\n    /* 频道 */\n    .channelStatsWrapper .columnGrid ul.grid li span.cover,\n    .channelStatsWrapper .columnGrid ul.grid li span.cover span.overlay {\n      width: 30vw;\n      height: 30vw;\n      background-size: 30vw;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: "+t+";\n    }\n  "),2016:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    /* 大标题 */\n    #headerVertical {\n      width: 100%;\n    }\n    /* 个人 */\n    #personalStatsWrapper .columns,\n    #personalStatsWrapper .columnStats {\n      width: 100%;\n    }\n    /* 频道 */\n    .channelStatsWrapper .columns {\n      width: 100%;\n    }\n    .channelStatsWrapper .columnGrid div.inner {\n      margin: 0 0 0 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 30vw;\n      height: 30vw;\n      background-size: 30vw;\n    }\n    .channelStatsWrapper .columns {\n      margin-top: 0;\n    }\n    .channelStatsWrapper ul.listRank li,\n    .channelStatsWrapper ul.listRank li dl dd {\n      width: 100%;\n    }\n    .channelStatsWrapper div.topicRank h3 {\n      padding: 0 5px;\n    }\n    .channelStatsWrapper div.topicRank ul li {\n      width: 100%;\n      padding-left: 8px;\n    }\n    .channelStatsWrapper div.topicRank span.tags {\n      display: block;\n      padding: 0 8px;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: "+t+";\n    }\n    /* 帖子 */\n    .channelStatsWrapper div.topicRank ul li span.cover {\n      margin-right: 8px;\n    }\n    /* 底部 */\n    #awardOMT h2.channelSbjTitle {\n      padding: 100px 0;\n      font-size: 36px;\n    }\n    #awardFooter .inner {\n      padding: 20px 8px;\n      width: 100%;\n      font-size: 14px;\n    }\n    #awardSpecial {\n      padding: 16px 0 50px 16px;\n    }\n    #awardSpecial h2.channelSbjTitle {\n      padding: 50px 0 0 0;\n    }\n    #awardSpecial p.bubble {\n      width: 80%;\n    }\n    #awardSpecial p.sign {\n      width: 100%;\n    }\n  "),2015:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    #awardWrapper,\n    #chl_community {\n      background: #f3f2ee;\n    }\n    /* 大标题 */\n    #headerVertical {\n      display: none;\n    }\n    #headerVertical {\n      width: 100%;\n    }\n    #headerAward h1 {\n      width: 100%;\n      background-size: contain;\n    }\n    /* 频道 */\n    .channelStatsWrapper {\n      padding-top: 20px;\n      border: 10px solid #f3f2ee;\n    }\n    .channelStatsWrapper .columns {\n      width: 100%;\n      padding: 0;\n    }\n    h2.channelSbjTitle {\n      display: none;\n    }\n    .channelStatsWrapper .columnGrid div.inner {\n      margin: 8px;\n    }\n    .channelStatsWrapper .columnGrid h3.chl {\n      font-size: 28px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 28vw;\n      height: 28vw;\n      background-size: 28vw;\n      border: 0;\n    }\n    .channelStatsWrapper .columnGrid h3,\n    .channelStatsWrapper ul.listRank li dl dt {\n      animation: initial;\n    }\n    /* 章节 */\n    .channelStatsWrapper div.topicRank h3 {\n      padding: 0 5px;\n    }\n    .channelStatsWrapper div.topicRank ul li {\n      width: 100%;\n      padding: 0 8px;\n    }\n    .channelStatsWrapper div.topicRank ul li span.cover {\n      margin-right: 8px;\n      border: 0;\n    }\n    /* 标签 */\n    .tags {\n      display: block;\n      padding: 0 8px;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: 20vw;\n    }\n    .columnGrid ul.grid li span.avatar {\n      width: 20vw;\n      height: 20vw;\n      background-size: contain;\n    }\n    .columnGrid ul.grid li.avatar span.title,\n    .columnGrid ul.grid li.avatar small.fade {\n      width: 100%;\n    }\n    .columnGrid ul.grid li span.avatar {\n      border: 0;\n    }\n    /* 条目创建 */\n    .columnGrid ul.grid li.avatar span.title {\n      color: #444;\n    }\n    #chl_community a,\n    #chl_community span.tip_i {\n      color: #444;\n    }\n    // #headerAward div.musume,\n    #awardFooter {\n      display: none;\n    }\n  "),2014:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    #headerVertical {\n      width: 100%;\n      padding: 40px 0;\n    }\n    /* 章节 */\n    .channelStatsWrapper .columns {\n      width: 100%;\n    }\n    h2.channelSbjTitle {\n      display: none;\n    }\n    .channelStatsWrapper .columnGrid div.inner {\n      margin: 8px;\n    }\n    .channelStatsWrapper div.topicRank ul li span.cover {\n      margin-right: 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 28vw;\n      height: 28vw;\n      background-size: 28vw;\n    }\n    /* 关注榜 */\n    .channelStatsWrapper ul.listRank li,\n    .channelStatsWrapper ul.listRank li dl dd {\n      width: 100%;\n    }\n    /* 年度章节 */\n    .channelStatsWrapper div.topicRank h3 {\n      padding: 0 8px;\n    }\n    .channelStatsWrapper div.topicRank ul li {\n      width: 100%;\n      padding: 0 8px;\n    }\n    /* 标签 */\n    .tags {\n      display: block;\n      padding: 0 8px;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: 20vw;\n    }\n    .columnGrid ul.grid li span.avatar {\n      width: 20vw;\n      height: 20vw;\n      background-size: contain;\n    }\n    .columnGrid ul.grid li.avatar span.title,\n    .columnGrid ul.grid li.avatar small.fade {\n      width: 100%;\n    }\n  "),2013:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    /* 章节 */\n    .channelStatsWrapper {\n      padding-top: 40px;\n    }\n    .channelStatsWrapper .columns {\n      width: 100%;\n      padding: 0;\n    }\n    h2.channelSbjTitle {\n      display: none;\n    }\n    .channelStatsWrapper .columnGrid div.inner {\n      margin: 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 28vw;\n      height: 28vw;\n      background-size: 28vw;\n      border: 0;\n    }\n    /* 榜单 */\n    .channelStatsWrapper ul.listRank li {\n      width: 100%;\n    }\n    .channelStatsWrapper ul.listRank li dl dd {\n      width: 100%;\n    }\n    /* 标签 */\n    .tags {\n      display: block;\n      padding: 0 8px;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: 20vw;\n    }\n    .columnGrid ul.grid li span.avatar {\n      width: 20vw;\n      height: 20vw;\n      background-size: contain;\n    }\n    .columnGrid ul.grid li.avatar span.title,\n    .columnGrid ul.grid li.avatar small.fade {\n      width: 100%;\n    }\n    .columnGrid ul.grid li span.avatar {\n      border: 0;\n    }\n  "),2012:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    #headerAward h1 {\n      padding: 20px 0;\n      background-size: contain;\n    }\n    #awardNav {\n      display: none;\n    }\n    /* 章节 */\n    .channelStatsWrapper .columns {\n      width: 100%;\n      padding: 0;\n    }\n    .channelStatsWrapper .columnGrid {\n      margin: 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 28vw;\n      height: 28vw;\n      background-size: 28vw;\n    }\n    /* 榜单 */\n    .channelStatsWrapper ul.listRank li {\n      width: 100%;\n    }\n    .channelStatsWrapper ul.listRank li dl dd {\n      width: 100%;\n    }\n    /* 标签 */\n    .tags {\n      display: block;\n      padding: 0 8px;\n    }\n    /* 人物 */\n    .columnGrid ul.grid li.avatar {\n      width: 20vw;\n      height: 20vw;\n    }\n    .columnGrid ul.grid li span.avatar {\n      width: 20vw;\n      height: 20vw;\n      background-size: contain;\n    }\n    .columnGrid ul.grid li.avatar span.title,\n    .columnGrid ul.grid li.avatar small.fade {\n      width: 100%;\n    }\n  "),2011:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    /* 榜单 */\n    .channelStatsWrapper .columns {\n      padding: 0;\n      width: 100%;\n    }\n    .channelStatsWrapper .columnGrid {\n      width: 100%;\n      margin: 0;\n    }\n    .channelStatsWrapper .columnGrid h3 {\n      margin: 0;\n      padding: 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid {\n      padding: 0 8px;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.cover {\n      width: 28vw;\n      height: 28vw;\n      background-size: 28vw;\n    }\n    /* 章节 */\n    .channelStatsWrapper ul.listRank li {\n      width: 100%;\n    }\n    .channelStatsWrapper ul.listRank li dl dd {\n      width: 100%;\n    }\n    /* 标签 */\n    .tip_i {\n      display: block;\n      padding: 8px;\n    }\n    /* 人物 */\n    .channelStatsWrapper .columnGrid ul.grid li span.avatar {\n      width: 20vw;\n      height: 20vw;\n      background-size: 20vw;\n    }\n    .channelStatsWrapper .columnGrid ul.grid li span.avatar span.overlay {\n      width: 100%;\n      height: 100%;\n    }\n  "),2010:a("\n    /* 文档 */\n    html,\n    body {\n      width: 100%;\n      overflow-x: hidden;\n    }\n    #headerAward div.inner {\n      width: 100%;\n    }\n    /* 榜单 */\n    .columnsAward {\n      width: 100%;\n    }\n    #columnChartSubject {\n      width: 100%;\n      padding: 8px;\n    }\n    ul.chartTopList li {\n      padding-right: 0;\n      margin-right: 20px;\n    }\n    ul.chartTopList li img.cover {\n      width: 28vw;\n      height: 28vw;\n    }\n    ul.chartSecList li {\n      width: 50%;\n    }\n    #columnChartSubject a.outerlink {\n      display: none;\n    }\n    /* 章节 */\n    #columnChartUser {\n      width: 100%;\n    }\n    /* 标签 */\n    .tip_i {\n      display: block;\n      padding: 8px;\n    }\n  ")}},"./src/screens/discovery/award/styles.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.styles=void 0;var t=r("./src/stores/index.ts");e.styles=t._.create({container:{backgroundColor:"#000"}})},"./src/screens/discovery/award/utils.ts":(n,e,r)=>{r("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(e,"__esModule",{value:!0}),e.injectedStaticJavaScript=void 0;var t=r("./src/utils/index.ts"),a=r("./src/constants/index.ts");e.injectedStaticJavaScript=(0,t.HTMLTrim)("(function(){\n  setTimeout(() => {\n    /* webview 的 postMessage 不是马上生效的 */\n    var __timeoutId = null;\n    var __isBridgeOk = false;\n\n    function waitForBridge() {\n      if (!__isBridgeOk && !window"+(a.SDK>=36?".ReactNativeWebView":"")+'.postMessage) {\n        __timeoutId = setTimeout(waitForBridge, 400);\n      } else {\n        clearTimeout(__timeoutId);\n        __timeoutId = null;\n        __isBridgeOk = true;\n\n        setTimeout(() => {\n          /* 由于现在安卓的 webview 没有能阻止跳转的办法, 把 href 抹掉后加 postMessage 解决 */\n          var aNodes = document.getElementsByTagName("a");\n          for (let i = 0; i < aNodes.length; i++) {\n            let href = aNodes[i].href;\n            if (href && !href.includes("#")) {\n              aNodes[i].setAttribute("data-href", aNodes[i].href);\n              aNodes[i].removeAttribute("href");\n              aNodes[i].addEventListener("click", function () {\n                var innerHTML = "";\n                var nextInnerHTML = "";\n                try {\n                  innerHTML = aNodes[i].innerHTML;\n                  nextInnerHTML = aNodes[i].nextElementSibling.innerHTML\n                } catch (ex) {}\n\n                window'+(a.SDK>=36?".ReactNativeWebView":"")+'.postMessage(JSON.stringify({\n                  type: "onclick",\n                  data: {\n                    href: href,\n                    innerHTML: innerHTML,\n                    nextInnerHTML: nextInnerHTML\n                  }\n                }));\n              })\n            }\n          }\n        }, 0);\n      }\n    }\n\n    waitForBridge();\n  }, 1000)\n}());')}}]);