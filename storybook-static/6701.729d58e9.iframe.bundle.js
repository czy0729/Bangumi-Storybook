"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6701],{"./node_modules/@storybook/preview-web/dist/esm/renderDocs.js":(e,t,n)=>{n.r(t),n.d(t,{renderDocs:()=>function(e,t,n,r){return function(){return a.apply(this,arguments)}(e,t,n).then(r)},unmountDocs:()=>function(e){d.unmountComponentAtNode(e)}});n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/core-js/modules/es.object.to-string.js"),n("./node_modules/core-js/modules/es.promise.js");function u(){return i.createElement("div",{style:r,className:"sb-nodocs sb-wrapper"},i.createElement("div",{style:o},i.createElement("h1",{style:s},"No Docs"),i.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",i.createElement("code",null,"docs")," parameter. If you think this is an error:"),i.createElement("ul",null,i.createElement("li",null,"Please check the story definition."),i.createElement("li",null,"Please check the Storybook config."),i.createElement("li",null,"Try reloading the page.")),i.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")))}var i=n("./node_modules/react/index.js"),d=n("./node_modules/react-dom/index.js"),r={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},o={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},s={textAlign:"center"};function l(e,t,n,r,o,s,a){try{var c=e[s](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function a(){var c;return c=regeneratorRuntime.mark(function e(t,n,r){var o,s,a,c,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((null!=(s=t.parameters.docs)&&s.getPage||null!=s&&s.page)&&!(null!=s&&s.getContainer||null!=s&&s.container))throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");e.next=3;break;case 3:if(e.t1=s.container,e.t1){e.next=8;break}return e.next=7,null==(o=s.getContainer)?void 0:o.call(s);case 7:e.t1=e.sent;case 8:if(e.t0=e.t1,e.t0){e.next=11;break}e.t0=function(e){e=e.children;return i.createElement(i.Fragment,null,e)};case 11:if(a=e.t0,e.t3=s.page,e.t3){e.next=17;break}return e.next=16,null==(o=s.getPage)?void 0:o.call(s);case 16:e.t3=e.sent;case 17:if(e.t2=e.t3,e.t2){e.next=20;break}e.t2=u;case 20:return c=e.t2,l=i.createElement(a,{key:t.componentId,context:n},i.createElement(c,null)),e.next=24,new Promise(function(e){d.render(l,r,e)});case 24:case"end":return e.stop()}},e)}),(a=function(){var e=this,a=arguments;return new Promise(function(t,n){var r=c.apply(e,a);function o(e){l(r,t,n,o,s,"next",e)}function s(e){l(r,t,n,o,s,"throw",e)}o(void 0)})}).apply(this,arguments)}u.displayName="NoDocs"}}]);