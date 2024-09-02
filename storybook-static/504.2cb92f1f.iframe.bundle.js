(self.webpackChunkweb=self.webpackChunkweb||[]).push([[504],{"./node_modules/react-native-render-html/src/HTMLDefaultStyles.js":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateDefaultBlockStyles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return{div:{},ul:{paddingLeft:20,marginBottom:e},ol:{paddingLeft:20,marginBottom:e},iframe:{height:200},hr:{marginTop:e/2,marginBottom:e/2,height:1,backgroundColor:"#CCC"}}},t.generateDefaultTextStyles=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return{u:{textDecorationLine:"underline"},em:{fontStyle:"italic"},i:{fontStyle:"italic"},b:{fontWeight:"bold"},s:{textDecorationLine:"line-through"},strong:{fontWeight:"bold"},big:{fontSize:1.2*e},small:{fontSize:.8*e},a:{textDecorationLine:"underline",color:"#245dc1"},h1:i(e,2,.67),h2:i(e,1.5,.83),h3:i(e,1.17,1),h4:i(e,1,1.33),h5:i(e,.83,1.67),h6:i(e,.67,2.33),sub:{textAlignVertical:"top",fontSize:.8*e,marginTop:e/2},sup:{textAlignVertical:"top",fontSize:.8*e,marginBottom:e/2},p:{marginTop:e,marginBottom:e}}};var r=14;function i(e,t,r){return{fontSize:e*t,marginTop:e*t*r,marginBottom:e*t*r,fontWeight:"bold"}}},"./node_modules/react-native-render-html/src/HTMLImage.js":(e,t,r)=>{var i=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=i(r("./node_modules/@babel/runtime/helpers/createClass.js")),a=i(r("./node_modules/@babel/runtime/helpers/inherits.js")),d=i(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=i(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),s=i(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var a=o?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=e[n]}return i.default=e,r&&r.set(e,i),i}(r("react")),f=i(r("./node_modules/react-native-web/dist/exports/Image/index.js")),h=i(r("./node_modules/react-native-web/dist/exports/View/index.js")),g=i(r("./node_modules/react-native-web/dist/exports/Text/index.js")),c=i(r("./node_modules/prop-types/index.js")),p=r("./node_modules/react/jsx-runtime.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,i=(0,l.default)(e);if(t){var o=(0,l.default)(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return(0,d.default)(this,r)}}var S=t.default=function(e){(0,a.default)(r,e);var t=b(r);function r(e){var i;return(0,o.default)(this,r),(i=t.call(this,e)).state={width:e.imagesInitialDimensions.width,height:e.imagesInitialDimensions.height},i}return(0,n.default)(r,[{key:"componentDidMount",value:function(){this.getImageSize(),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentWillReceiveProps",value:function(e){this.getImageSize(e)}},{key:"getDimensionsFromStyle",value:function(e,t,r){var i,o;return t&&(o=t),r&&(i=r),Array.isArray(e)?e.forEach((function(e){!r&&e.width&&(i=e.width),!t&&e.height&&(o=e.height)})):(!r&&e.width&&(i=e.width),!t&&e.height&&(o=e.height)),{styleWidth:i,styleHeight:o}}},{key:"getImageSize",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,r=t.source,i=t.imagesMaxWidth,o=t.style,n=t.height,a=t.width,d=this.getDimensionsFromStyle(o,n,a),l=d.styleWidth,s=d.styleHeight;if(l&&s)return this.mounted&&this.setState({width:"string"==typeof l&&-1!==l.search("%")?l:parseInt(l,10),height:"string"==typeof s&&-1!==s.search("%")?s:parseInt(s,10)});f.default.getSize(r.uri,(function(t,r){if(!i)return e.mounted&&e.setState({width:t,height:r});var o=i<=t?i:t,n=o*r/t;e.mounted&&e.setState({width:o,height:n,error:!1})}),(function(){e.mounted&&e.setState({error:!0})}))}},{key:"validImage",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,p.jsx)(f.default,Object.assign({source:e,style:[t,{width:this.state.width,height:this.state.height,resizeMode:"cover"}]},r))}},{key:"errorImage",get:function(){return(0,p.jsx)(h.default,{style:{width:50,height:50,borderWidth:1,borderColor:"lightgray",overflow:"hidden",justifyContent:"center"},children:!!this.props.alt&&(0,p.jsx)(g.default,{style:{textAlign:"center",fontStyle:"italic"},children:this.props.alt})})}},{key:"render",value:function(){var e=this.props,t=e.source,r=e.style,i=e.passProps;return this.state.error?this.errorImage:this.validImage(t,r,i)}}]),r}(u.PureComponent);(0,s.default)(S,"propTypes",{source:c.default.object.isRequired,alt:c.default.string,height:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number]),style:c.default.any,imagesMaxWidth:c.default.number,imagesInitialDimensions:c.default.shape({width:c.default.number,height:c.default.number})}),(0,s.default)(S,"defaultProps",{imagesInitialDimensions:{width:100,height:100}})},"./node_modules/react-native-render-html/src/HTMLStyles.js":(e,t,r)=>{var i=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t._constructStyles=function(e){var t=e.tagName,r=e.htmlAttribs,i=e.passProps,o=e.additionalStyles,d=e.styleSet,l=void 0===d?"VIEW":d,u=e.baseFontSize,f=(0,a.generateDefaultTextStyles)(u),g=(0,a.generateDefaultBlockStyles)(u);i.ignoredStyles.forEach((function(e){r[e]&&delete r[e]}));var c=[("VIEW"===l?g:f)[t],i.tagsStyles?i.tagsStyles[t]:void 0,s(r,i.classesStyles),r.style?h(r.style,n.STYLESETS[l],Object.assign({},i,{parentTag:t})):void 0];o&&(c=c.concat(o.length?o:[o]));return c.filter((function(e){return void 0!==e}))},t._getElementCSSClasses=u,t._getElementClassStyles=s,t.computeTextStyles=function(e,t){var r={};return l(e,t).forEach((function(e){Object.keys(e).forEach((function(t){var i=e[t];r[t]||(r[t]=i)}))})),Object.assign({},t.baseFontStyle,r)},t.cssObjectToString=function(e){var t="";return Object.keys(e).forEach((function(r){t+=r+":"+e[r]+";"})),t},t.cssStringToObject=d,t.cssStringToRNStyle=h;var o=i(r("./node_modules/@babel/runtime/helpers/slicedToArray.js")),n=r("./node_modules/react-native-render-html/src/HTMLUtils.js"),a=r("./node_modules/react-native-render-html/src/HTMLDefaultStyles.js");function d(e){return e.split(";").map((function(e){return e.split(":")})).reduce((function(e,t){return 2===t.length&&(e[t[0].trim()]=t[1].trim()),e}),{})}function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=e.attribs,o=e.name,a=t.classesStyles,d=t.tagsStyles,u=t.defaultTextStyles,f=i&&i.style?h(i.style,n.STYLESETS.TEXT,t):{},g=s(i,a),c=d[o],p=u[o],m=Object.assign({},p,c,g,f);return r.push(m),e.parent?l(e.parent,t,r):r}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=u(e),i={};return r.forEach((function(e){t[e]&&(i=Object.assign({},i,t[e]))})),i}function u(e){return e&&e.class?e.class.split(" "):[]}function f(e,t,r){var i=r.emSize,a=r.ptSize,d=r.ignoredStyles,l=r.allowedStyles,s=n.stylePropTypes[t];return Object.keys(e).filter((function(e){return!l||-1!==l.indexOf(e)})).filter((function(e){return-1===(d||[]).indexOf(e)})).map((function(t){return[t,e[t]]})).map((function(e){var t=(0,o.default)(e,2),r=t[0],i=t[1];return[r.split("-").map((function(e,t){return 0===t?e:e[0].toUpperCase()+e.substr(1)})).join(""),i]})).map((function(e){var t=(0,o.default)(e,2),r=t[0],d=t[1];if(-1!==s.indexOf(r)){if("string"==typeof d){if(-1!==d.search("inherit")||-1!==d.search("calc")||-1!==d.search("normal"))return;if(-1!==(d=d.replace("!important","")).search("%")&&-1!==n.PERC_SUPPORTED_STYLES.indexOf(r))return[r,d];if(-1!==d.search("em"))return[r,parseFloat(d.replace("em",""))*i];if(-1!==d.search("pt"))return[r,parseFloat(d.replace("pt",""))*a];var l=parseFloat(d.replace("px",""));if("fontWeight"!==r&&!isNaN(l)&&-1!==s.indexOf(r))return[r,l];if("fontSize"===r)return function(e,t){var r=t;n.ABSOLUTE_FONT_SIZE.hasOwnProperty(t)&&(r=n.ABSOLUTE_FONT_SIZE[t]);return[e,r]}(r,d)}return[r,d]}})).filter((function(e){return void 0!==e})).reduce((function(e,t){var r=(0,o.default)(t,2),i=r[0],n=r[1];return e[i]=n,e}),{})}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.STYLESETS.TEXT,r=arguments.length>2?arguments[2]:void 0;return f(d(e),t,r)}},"./node_modules/react-native-render-html/src/HTMLUtils.js":(e,t,r)=>{var i=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.TextOnlyPropTypes=t.TEXT_TAGS_IGNORING_ASSOCIATION=t.TEXT_TAGS=t.STYLESETS=t.PREFORMATTED_TAGS=t.PERC_SUPPORTED_STYLES=t.MIXED_TAGS=t.IGNORED_TAGS=t.BLOCK_TAGS=t.ABSOLUTE_FONT_SIZE=void 0,t.getClosestNodeParentByTag=function e(t,r){if(!t||!t.parent)return;if(t.parent.name===r)return t.parent;return e(t.parent,r)},t.getParentsTagsRecursively=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t)return r;return t.name&&r.push(t.name),t.parent?e(t.parent,r):r},t.stylePropTypes=void 0;var o,n=i(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=["display","width","height","start","end","top","left","right","bottom","minWidth","maxWidth","minHeight","maxHeight","margin","marginVertical","marginHorizontal","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd","padding","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","borderWidth","borderTopWidth","borderStartWidth","borderEndWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","position","flexDirection","flexWrap","justifyContent","alignItems","alignSelf","alignContent","overflow","flex","flexGrow","flexShrink","flexBasis","aspectRatio","zIndex","direction","shadowColor","shadowOffset","shadowOpacity","shadowRadius","transform","transformMatrix","decomposedMatrix","scaleX","scaleY","rotation","translateX","translateY","backfaceVisibility","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","borderStartColor","borderEndColor","borderRadius","borderTopLeftRadius","borderTopRightRadius","borderTopStartRadius","borderTopEndRadius","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStartRadius","borderBottomEndRadius","borderStyle","opacity","elevation"],d=["display","width","height","start","end","top","left","right","bottom","minWidth","maxWidth","minHeight","maxHeight","margin","marginVertical","marginHorizontal","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd","padding","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","borderWidth","borderTopWidth","borderStartWidth","borderEndWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","position","flexDirection","flexWrap","justifyContent","alignItems","alignSelf","alignContent","overflow","flex","flexGrow","flexShrink","flexBasis","aspectRatio","zIndex","direction","shadowColor","shadowOffset","shadowOpacity","shadowRadius","transform","transformMatrix","decomposedMatrix","scaleX","scaleY","rotation","translateX","translateY","backfaceVisibility","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","borderStartColor","borderEndColor","borderRadius","borderTopLeftRadius","borderTopRightRadius","borderTopStartRadius","borderTopEndRadius","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStartRadius","borderBottomEndRadius","borderStyle","opacity","elevation","color","fontFamily","fontSize","fontStyle","fontWeight","fontVariant","textShadowOffset","textShadowRadius","textShadowColor","letterSpacing","lineHeight","textAlign","textAlignVertical","includeFontPadding","textDecorationLine","textDecorationStyle","textDecorationColor","textTransform","writingDirection"],l=(t.TextOnlyPropTypes=d.filter((function(e){return-1===a.indexOf(e)})),t.BLOCK_TAGS=["address","article","aside","footer","hgroup","nav","section","blockquote","dd","dl","dt","figure","hr","li","main","ol","ul","cite","data","rp","rtc","ruby","area","img","map","center"],t.TEXT_TAGS=["h1","h2","h3","h4","h5","h6","figcaption","p","pre","abbr","b","bdi","bdo","code","dfn","i","kbd","mark","q","rt","s","samp","small","big","span","strong","sub","sup","time","u","var","wbr","del","ins","blink","font","em","bold","br"],t.PREFORMATTED_TAGS=["pre"],t.MIXED_TAGS=["a"],t.TEXT_TAGS_IGNORING_ASSOCIATION=["p","h1","h2","h3","h4","h5","h6"],t.ABSOLUTE_FONT_SIZE={medium:14,"xx-small":8.5,"x-small":10,small:12,large:17,"x-large":20,"xx-large":24,smaller:13.3,larger:16,length:null,initial:null,inherit:null,unset:null},t.IGNORED_TAGS=["head","scripts","audio","video","track","embed","object","param","source","canvas","noscript","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr","button","datalist","fieldset","form","input","label","legend","meter","optgroup","option","output","progress","select","textarea","details","diaglog","menu","menuitem","summary"],t.PERC_SUPPORTED_STYLES=["width","height","top","bottom","left","right","margin","marginBottom","marginTop","marginLeft","marginRight","marginHorizontal","marginVertical","padding","paddingBottom","paddingTop","paddingLeft","paddingRight","paddingHorizontal","paddingVertical"],t.STYLESETS=Object.freeze({VIEW:"view",TEXT:"text",IMAGE:"image"}));t.stylePropTypes=(o={},(0,n.default)(o,l.VIEW,a),(0,n.default)(o,l.TEXT,d),(0,n.default)(o,l.IMAGE,["display","width","height","start","end","top","left","right","bottom","minWidth","maxWidth","minHeight","maxHeight","margin","marginVertical","marginHorizontal","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd","padding","paddingVertical","paddingHorizontal","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","borderWidth","borderTopWidth","borderStartWidth","borderEndWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","position","flexDirection","flexWrap","justifyContent","alignItems","alignSelf","alignContent","overflow","flex","flexGrow","flexShrink","flexBasis","aspectRatio","zIndex","direction","shadowColor","shadowOffset","shadowOpacity","shadowRadius","transform","transformMatrix","decomposedMatrix","scaleX","scaleY","rotation","translateX","translateY","resizeMode","backfaceVisibility","backgroundColor","borderColor","borderRadius","tintColor","opacity","overlayColor","borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]),o)}}]);