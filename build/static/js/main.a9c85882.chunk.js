(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,t,n){},294:function(e,t,n){e.exports=n(445)},299:function(e,t,n){},443:function(e,t,n){},444:function(e,t,n){},445:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(43),i=n.n(o);n(299),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=n(29),u=n(146),s=(n(222),n(27)),d=n(111),m=function(e,t){console.log("Err value: ".concat(e,", result value : ").concat(t))},g=function(e){if(e.content.type&&"AdaptiveCard"===e.content.type){var t={height:void 0,width:600,title:e.preview.title,url:void 0,card:e.content,completionBotId:e.botId};s.tasks.startTask(t,m)}else alert("Could not load data, card type is not supported.")},f=function(e){return d.parseUrl(e).query.commandId},p=function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText||""},b=n(81),v=n(103),h=n(66),C=function(e,t,n){s.bot.sendQuery(e,t,n)},k=function(){var e=r.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.useState(""),i=Object(l.a)(o,2),c=(i[0],i[1]),u=r.useState(""),d=Object(l.a)(u,2),m=d[0],g=d[1],f=r.useState("JSONTabDefault"),p=Object(l.a)(f,2),C=p[0],k=p[1],w=function(e){alert(e)},y=function(e){a(e),s.appInitialization.notifySuccess()},E=function(e){c(e.id),e.initialRun?g("https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=".concat(e.id,"&initialRun=").concat(e.initialRun)):g("https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=".concat(e.id)),s.settings.setValidityState(!0)},x=function(e){s.settings.setSettings({entityId:"JSONTab",contentUrl:m,suggestedDisplayName:C}),e.notifySuccess()};return r.useEffect(function(){s.initialize(),s.appInitialization.notifyAppLoaded(),s.settings.registerOnSaveHandler(x),function(e,t){s.bot.getSupportedCommands(e,t)}(y,w)}),r.createElement("div",null,r.createElement("div",null,r.createElement(b.a,{size:"medium",content:"Name your tab"})),r.createElement(v.a,{fluid:!0,placeholder:"Tab name",onChange:function(e){k(e.target.value)}}),r.createElement("div",{style:{marginTop:"16px"}},r.createElement(b.a,{size:"medium",content:"Select the command you'd like query your bot with"})),r.createElement(h.a,{fluid:!0,items:n.map(function(e){return e.title}),noResultsMessage:"We couldn't find any matches.",onSelectedChange:function(e,t){var r=n.find(function(e){return e.title===t.value});r&&E(r)},placeholder:"Select the command"}))},w=n(47),y=n(67),E=n(452);!function(e){e.List="List",e.Grid="Grid"}(c||(c={}));var x,S=function(e){var t=function(t,n){e.onChange(n.value)},n=[{key:"list",icon:{name:"menu",outline:!0},"aria-label":"List View",onClick:function(e){return t(0,{value:c.List})}},{key:"card",icon:{name:"gallery",outline:!0},"aria-label":"Card View",onClick:function(e){return t(0,{value:c.Grid})}}];return a.a.createElement(w.a,{styles:e.styles,vAlign:"center"},a.a.createElement(y.a,{items:n,defaultActiveIndex:0,accessibility:E.a,iconOnly:!0}))},I=n(286);!function(e){e.List="List",e.Grid="Grid"}(x||(x={}));var T,L=function(e){var t=a.a.useState(""),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(I.debounce)(e.onSearch,300);return a.a.createElement(w.a,{gap:"gap.small",vAlign:"center"},a.a.createElement(w.a.Item,{push:!0},a.a.createElement(w.a,null,a.a.createElement(S,{onChange:function(t){var n=t===x.List?x.List:x.Grid;e.onViewChange(n)},styles:{margin:"0 0 16px 0"}}))),a.a.createElement(v.a,{placeholder:"Search",icon:{name:"search",outline:!0},input:{styles:{width:"250px"}},styles:{margin:"0px 0px 16px 0px"},onChange:function(e){var t=e.currentTarget.value;e.currentTarget.value.length>=1?i(t):i(""),o(t)},onKeyPress:function(t){"Enter"===t.key&&e.onSearch(r)}}))},z=n(44),O=n(99),B=function(e){var t=0,n=e.itemList.map(function(e){return{key:++t,content:a.a.createElement(w.a,{vAlign:"center",fill:!0,gap:"gap.small"},a.a.createElement(w.a.Item,{styles:{width:"32px",height:"100%"}},a.a.createElement(z.a,{src:e.preview.heroImageSrc,className:"listItemImage"})),a.a.createElement(w.a.Item,{size:"size.medium"},a.a.createElement(b.a,{truncated:!0,size:"medium",weight:"semibold",content:p(e.preview.title)})),e.preview.subTitle?a.a.createElement(w.a.Item,{grow:!0,size:"size.medium"},a.a.createElement(b.a,{truncated:!0,size:"medium",weight:"regular",content:p(e.preview.subTitle)})):null,e.preview.text?a.a.createElement(w.a.Item,{grow:!0,size:"size.half"},a.a.createElement(b.a,{truncated:!0,size:"medium",weight:"regular",content:p(e.preview.text)})):null),styles:{margin:"2px 2px 0 0"},onClick:function(){return g(e)}}});return a.a.createElement("div",null,a.a.createElement(O.a,{selectable:!0,items:n}))},R=n(144),j=n(145),W=n(450),A=function(e){var t=function(e){return Math.floor(e/278)},n=a.a.useState(t(window.innerWidth)),r=Object(l.a)(n,2),o=r[0],i=r[1],c=function(){i(t(window.innerWidth))};a.a.useEffect(function(){return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}},[o]);return a.a.createElement("div",{style:{margin:"0 0 0 8px"}},a.a.createElement(j.a,{columns:o,accessibility:W.a,content:e.itemList.map(function(e){return a.a.createElement(R.a,{"data-is-focusable":"true",styles:{margin:"0 0 16px 12px",height:"146px",padding:"20px 20px 20px 20px",borderRadius:"3px",boxShadow:"0px 2px 4px -0.75px rgba(0,0,0,0.1)"},onClick:function(){return g(e)},onKeyPress:function(t){"Enter"===t.key&&g(e)}},a.a.createElement(w.a,{gap:"gap.small"},a.a.createElement(w.a.Item,null,a.a.createElement(z.a,{styles:{width:"48px",height:"100%"},src:e.preview.heroImageSrc,className:"listItemImage"})),a.a.createElement(w.a.Item,{size:"size.half",grow:!0},a.a.createElement(w.a,{column:!0,styles:{textAlign:"left"}},a.a.createElement(w.a.Item,{styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden"}},a.a.createElement(b.a,{content:p(e.preview.title),styles:{margin:"0 0 2px 0"},size:"medium",weight:"semibold"})),e.preview.subTitle?a.a.createElement(w.a.Item,{styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:1,overflow:"hidden"}},a.a.createElement(b.a,{content:p(e.preview.subTitle),styles:{margin:"0 0 2px 0"},weight:"regular",size:"medium"})):null,e.preview.text?a.a.createElement(w.a.Item,{grow:!0,size:"size.half",styles:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:3,overflow:"hidden"}},a.a.createElement(b.a,{content:p(e.preview.text),weight:"regular",size:"medium"})):null))))})}))};!function(e){e.List="List",e.Grid="Grid"}(T||(T={}));var V,N=function(e){return a.a.createElement("div",null,e.viewOption===T.List?a.a.createElement(B,{itemList:e.results}):a.a.createElement(A,{itemList:e.results}))},P=n(147),q=(n(443),function(e){return a.a.createElement("div",{className:"loadIcon"}," ",e.isLoading?a.a.createElement(P.a,null):null," ")}),G=n(46),D=(n(444),function(e){var t="";e.buttonText&&e.onClick&&(t=a.a.createElement(G.a,{id:"button",content:e.buttonText,onClick:e.onClick,primary:!0}));var n="";e.message&&(n=e.message);var r="error.svg";return e.imageSrc&&(r=e.imageSrc),a.a.createElement("div",{className:"EmptyScreenView"},a.a.createElement(z.a,{id:"image",src:r}),a.a.createElement("div",{id:"textblock"},a.a.createElement(b.a,{id:"title",size:"large",weight:"bold",content:e.title}),a.a.createElement(b.a,{styles:{marginTop:"8px"},size:"medium",content:a.a.createElement("p",null,e.subTitle)}),a.a.createElement(b.a,{id:"error",size:"small",content:n})),t)}),F=function(e){return a.a.createElement(D,{title:"There was a problem communicating with the bot",subTitle:"You may not be able to use this feature",message:e.message})},U=function(e){var t=a.a.useState(""),n=Object(l.a)(t,2),r=n[0],o=n[1],i=function(t){e.onAuthenticated({data:t,type:s.bot.ResponseType.Results})},c=function(e){o("Something went wrong, please try again")};return a.a.createElement(D,{buttonText:"Sign In",title:e.title,subTitle:"You'll need to sign in to use this app.",message:r,onClick:function(){var t={query:e.currentQuery.query,commandId:e.currentQuery.commandId,url:e.url};s.bot.authenticate(t,i,c)}})},H=n(40);!function(e){e.Loading="Loading",e.Error="Error",e.Render="Render",e.Auth="Auth",e.NoResults="NoResults"}(V||(V={}));var J,Q=function(e){var t=a.a.useState("List"),n=Object(l.a)(t,2),r=n[0],o=n[1],i=a.a.useState([]),c=Object(l.a)(i,2),u=c[0],m=c[1],g=a.a.useState(V.Render),p=Object(l.a)(g,2),b=p[0],v=p[1],h=a.a.useState(""),k=Object(l.a)(h,2),w=k[0],y=k[1],E=a.a.useState({url:"",title:"Sign in"}),x=Object(l.a)(E,2),S=x[0],I=x[1],T=a.a.useState({query:"",commandId:f(window.location.href)}),z=Object(l.a)(T,2),O=z[0],B=z[1],R=function(e){v(V.Error),y(e)},j=function(e){if(e.type===s.bot.ResponseType.Auth){var t=e.data;I({url:t.url,title:t.title}),v(V.Auth)}else{var n=e.data;m(function(e){return e&&e.attachments?e.attachments.map(function(t){return function(e,t){var n="";return e.previewRawPayload.content.hasOwnProperty("images")&&e.previewRawPayload.content.images&&e.previewRawPayload.content.images[0]&&e.previewRawPayload.content.images[0].url&&(n=e.previewRawPayload.content.images[0].url),{contentType:"AdaptiveCard",content:e.card.content,preview:{title:e.previewRawPayload.content.title,subTitle:e.previewRawPayload.content.subtitle,text:e.previewRawPayload.content.text,heroImageSrc:n},botId:t}}(t,e.botId)}):[]}(n)),W(n.attachments),s.appInitialization.notifySuccess()}},W=function(e){0===e.length?v(V.NoResults):v(V.Render)};a.a.useEffect(function(){if(s.initialize(),s.appInitialization.notifyAppLoaded(),s.registerOnThemeChangeHandler(e.onThemeChange),function(){var e=d.parseUrl(window.location.href);return null!=e.query.initialRun&&"true"==e.query.initialRun}()){var t={query:"",commandId:f(window.location.href)};C(t,j,R)}},[e.onThemeChange]);var A=a.a.createElement(N,{results:u,viewOption:r});switch(b){case"Loading":A=a.a.createElement(q,{isLoading:!0});break;case"Error":A=a.a.createElement(F,{message:w});break;case"Auth":A=a.a.createElement(U,{title:S.title,url:S.url,currentQuery:O,onAuthenticated:j});break;case"NoResults":A=a.a.createElement(D,{title:"We couldn't find any results",subTitle:"Search, or try refining your query!"})}return a.a.createElement("div",{className:e.customClass},a.a.createElement(L,{onSearch:function(e){void 0!==e&&(B({query:e,commandId:f(window.location.href)}),C(O,j,R),v(V.Loading))},onViewChange:function(e){e&&o(e)}}),A)},M=Object(H.createComponent)({displayName:"ContentViewWrapper",render:function(e){var t=e.stardust,n=e.onThemeChange,r=t.classes;return a.a.createElement(Q,{customClass:r.root,onThemeChange:n})}}),K=function(e){var t,n=window.location.href;return"settings"===(t=n,d.parseUrl(t).query.frameContext)?a.a.createElement("div",null,a.a.createElement(k,null)):a.a.createElement(M,{onThemeChange:e.onThemeChange})},Y=n(23);!function(e){e.Dark="dark",e.Default="default",e.Contrast="contrast"}(J||(J={}));var $=function(e){var t;switch(e){case J.Contrast:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){return{backgroundColor:e.colorScheme.default.background}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.brand.background,hoverTextColor:t.default.foregroundFocus3,activeBackgroundColor:t.brand.backgroundPressed,activeTextColor:t.default.foregroundFocus3}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(Y.a)(H.themes.teamsHighContrast,t);case J.Dark:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){return{backgroundColor:e.colorScheme.default.background}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.brand.background,hoverTextColor:t.default.foregroundFocus3,activeBackgroundColor:t.brand.backgroundPressed,activeTextColor:t.default.foregroundFocus3}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(Y.a)(H.themes.teamsDark,t);default:return t={componentVariables:{ContentViewWrapper:function(e){return{backgroundColor:e.colorScheme.default.background2}},ListItem:function(e){return{backgroundColor:e.colorScheme.default.background}},Segment:function(e){var t=e.colorScheme;return{backgroundColor:t.default.background,hoverBackgroundColor:t.brand.background,hoverTextColor:t.default.foregroundFocus3,activeBackgroundColor:t.brand.backgroundPressed,activeTextColor:t.default.foregroundFocus3}},Input:function(e){return{inputBackgroundColor:e.colorScheme.default.background}}},componentStyles:{ContentViewWrapper:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},ListItem:{root:function(e){return{backgroundColor:e.variables.backgroundColor}}},Input:{input:function(e){return{backgroundColor:e.variables.inputBackgroundColor}}},Segment:{root:function(e){var t=e.variables;return{":hover":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor},":active":{backgroundColor:t.activeBackgroundColor,color:t.activeTextColor},":focus":{backgroundColor:t.hoverBackgroundColor,color:t.hoverTextColor}}}}}},Object(Y.a)(H.themes.teams,t)}};i.a.render(a.a.createElement(function(){var e=$(function(e){var t=d.parseUrl(e).query.theme;return t||"default"}(window.location.href)),t=a.a.useState(e),n=Object(l.a)(t,2),r=n[0],o=n[1];return a.a.createElement(u.a,{theme:r},a.a.createElement(K,{onThemeChange:function(e){o($(e))}}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[294,1,2]]]);
//# sourceMappingURL=main.a9c85882.chunk.js.map