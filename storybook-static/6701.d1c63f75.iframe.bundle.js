"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":(e,t,n)=>{n.r(t),n.d(t,{renderDocs:()=>u,unmountDocs:()=>m});n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.promise.js");var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/index.js"),a={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},s={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},c={textAlign:"center"},l=function(){return r.createElement("div",{style:a,className:"sb-nodocs sb-wrapper"},r.createElement("div",{style:s},r.createElement("h1",{style:c},"No Docs"),r.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",r.createElement("code",null,"docs")," parameter. If you think this is an error:"),r.createElement("ul",null,r.createElement("li",null,"Please check the story definition."),r.createElement("li",null,"Please check the Storybook config."),r.createElement("li",null,"Try reloading the page.")),r.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))};function i(e,t,n,r,o,a,s){try{var c=e[a](s),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function u(e,t,n,r){return function(e,t,n){return d.apply(this,arguments)}(e,t,n).then(r)}function d(){var e;return e=regeneratorRuntime.mark((function e(t,n,a){var s,c,i,u,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null!=(i=t.parameters.docs)&&i.getPage||null!=i&&i.page)||null!=i&&i.getContainer||null!=i&&i.container){e.next=3;break}throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");case 3:if(e.t1=i.container,e.t1){e.next=8;break}return e.next=7,null===(s=i.getContainer)||void 0===s?void 0:s.call(i);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(e){var t=e.children;return r.createElement(r.Fragment,null,t)};case 11:if(u=e.t0,e.t3=i.page,e.t3){e.next=17;break}return e.next=16,null===(c=i.getPage)||void 0===c?void 0:c.call(i);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=l;case 20:return d=e.t2,m=r.createElement(u,{key:t.componentId,context:n},r.createElement(d,null)),e.next=24,new Promise((function(e){o.render(m,a,e)}));case 24:case"end":return e.stop()}}),e)})),d=function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){i(a,r,o,s,c,"next",e)}function c(e){i(a,r,o,s,c,"throw",e)}s(void 0)}))},d.apply(this,arguments)}function m(e){o.unmountComponentAtNode(e)}l.displayName="NoDocs"}}]);