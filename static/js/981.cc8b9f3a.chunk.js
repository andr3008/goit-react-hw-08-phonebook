"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[981],{9981:function(n,t,e){e.r(t),e.d(t,{default:function(){return st}});var r,o,i,a,s=function(n){return n.contacts.filter},u=function(n){var t=function(n){return n.contacts.items}(n),e=s(n).toLowerCase();return t.filter((function(n){return n.name.toLowerCase().includes(e)}))},c=e(3487),d=e(168),l=e(2093),f=l.Z.div(r||(r=(0,d.Z)(["\n\tmargin: 20px auto;\n\tpadding: 20px;\n\tmax-width: 380px;\n\tbackground-color: rgb(36, 196, 196);\n\tborder: 1px solid rgb(57, 133, 168);\n\tborder-radius: 6px;\n\tbox-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);\n"]))),p=l.Z.h1(o||(o=(0,d.Z)(["\n\tcolor: white;\n"]))),m=l.Z.h2(i||(i=(0,d.Z)(["\n\tcolor: white;\n"]))),g=l.Z.p(a||(a=(0,d.Z)(["\n\tpadding-top: 15px;\n\tcolor: white;\n"]))),v=e(2791),b=e(6030),h=e(4942),x={data:""},y=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||x},T=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,w=/\/\*[^]*?\*\/|\s\s+|\n/g,A=function n(t,e){var r="",o="",i="",a=function(a){var u=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+u+";":o+="f"==a[1]?n(u,a):a+"{"+n(u,"k"==a[1]?"":e)+"}":"object"==typeof u?o+=n(u,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=u&&(a=a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(a,u):a+":"+u+";"),s=a};for(var s in t)a(s);return r+(e&&i?e+"{"+i+"}":i)+o},S={},E=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},O=function(n,t,e,r,o){var i=E(n),a=S[i]||(S[i]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(i));if(!S[a]){var s=i!==n?n:function(n){for(var t,e=[{}];t=T.exec(n.replace(w,""));)t[4]?e.shift():t[3]?e.unshift(e[0][t[3]]=e[0][t[3]]||{}):e[0][t[1]]=t[2];return e[0]}(n);S[a]=A(o?(0,h.Z)({},"@keyframes "+a,s):s,e?"":"."+a)}return function(n,t,e){-1==t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(S[a],t,r),a},_=function(n,t,e){return n.reduce((function(n,r,o){var i=t[o];if(i&&i.call){var a=i(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=s?"."+s:a&&"object"==typeof a?a.props?"":A(a,""):!1===a?"":a}return n+r+(null==i?"":i)}),"")};function j(n){var t=this||{},e=n.call?n(t.p):n;return O(e.unshift?e.raw?_(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,y(t.target),t.g,t.o,t.k)}j.bind({g:1});var Z,k,D,P=j.bind({k:1});function z(n,t){var e=this||{};return function(){var r=arguments;function o(i,a){var s=Object.assign({},i),u=s.className||o.className;e.p=Object.assign({theme:k&&k()},s),e.o=/ *go\d+/.test(u),s.className=j.apply(e,r)+(u?" "+u:""),t&&(s.ref=a);var c=n;return n[0]&&(c=s.as||n,delete s.as),D&&c[0]&&D(s),Z(c,s)}return t?t(o):o}}function C(){return C=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},C.apply(this,arguments)}function I(n,t){return t||(t=n.slice(0)),n.raw=t,n}var U,M=function(n,t){return function(n){return"function"===typeof n}(n)?n(t):n},N=function(){var n=0;return function(){return(++n).toString()}}(),R=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!==typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(U||(U={}));var F=new Map,L=function(n){if(!F.has(n)){var t=setTimeout((function(){F.delete(n),B({type:U.REMOVE_TOAST,toastId:n})}),1e3);F.set(n,t)}},V=function n(t,e){switch(e.type){case U.ADD_TOAST:return C({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case U.UPDATE_TOAST:return e.toast.id&&function(n){var t=F.get(n);t&&clearTimeout(t)}(e.toast.id),C({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?C({},n,e.toast):n}))});case U.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:U.UPDATE_TOAST,toast:r}):n(t,{type:U.ADD_TOAST,toast:r});case U.DISMISS_TOAST:var o=e.toastId;return o?L(o):t.toasts.forEach((function(n){L(n.id)})),C({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?C({},n,{visible:!1}):n}))});case U.REMOVE_TOAST:return void 0===e.toastId?C({},t,{toasts:[]}):C({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case U.START_PAUSE:return C({},t,{pausedAt:e.time});case U.END_PAUSE:var i=e.time-(t.pausedAt||0);return C({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return C({},n,{pauseDuration:n.pauseDuration+i})}))})}},q=[],H={toasts:[],pausedAt:void 0},B=function(n){H=V(H,n),q.forEach((function(n){n(H)}))},K={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Y=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),C({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||N()})}(t,n,e);return B({type:U.UPSERT_TOAST,toast:r}),r.id}},$=function(n,t){return Y("blank")(n,t)};$.error=Y("error"),$.success=Y("success"),$.loading=Y("loading"),$.custom=Y("custom"),$.dismiss=function(n){B({type:U.DISMISS_TOAST,toastId:n})},$.remove=function(n){return B({type:U.REMOVE_TOAST,toastId:n})},$.promise=function(n,t,e){var r=$.loading(t.loading,C({},e,null==e?void 0:e.loading));return n.then((function(n){return $.success(M(t.success,n),C({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){$.error(M(t.error,n),C({id:r},e,null==e?void 0:e.error))})),n};var G=function(n){var t=function(n){void 0===n&&(n={});var t=(0,v.useState)(H),e=t[0],r=t[1];(0,v.useEffect)((function(){return q.push(r),function(){var n=q.indexOf(r);n>-1&&q.splice(n,1)}}),[e]);var o=e.toasts.map((function(t){var e,r,o;return C({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||K[t.type],style:C({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return C({},e,{toasts:o})}(n),e=t.toasts,r=t.pausedAt;(0,v.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return $.dismiss(t.id)}),e);t.visible&&$.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,v.useMemo)((function(){return{startPause:function(){B({type:U.START_PAUSE,time:Date.now()})},endPause:function(){r&&B({type:U.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return B({type:U.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,u=void 0===s?8:s,c=o.defaultPosition,d=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),l=d.findIndex((function(t){return t.id===n.id})),f=d.filter((function(n,t){return t<l&&n.visible})).length,p=(r=d.filter((function(n){return n.visible}))).slice.apply(r,a?[f+1]:[0,f]).reduce((function(n,t){return n+(t.height||0)+u}),0);return p}}}),[e,r]);return{toasts:e,handlers:o}};function J(){var n=I(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return J=function(){return n},n}function Q(){var n=I(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return Q=function(){return n},n}function W(){var n=I(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return W=function(){return n},n}function X(){var n=I(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return X=function(){return n},n}var nn=P(X()),tn=P(W()),en=P(Q()),rn=z("div")(J(),(function(n){return n.primary||"#ff4b4b"}),nn,tn,(function(n){return n.secondary||"#fff"}),en);function on(){var n=I(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return on=function(){return n},n}function an(){var n=I(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return an=function(){return n},n}var sn=P(an()),un=z("div")(on(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),sn);function cn(){var n=I(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return cn=function(){return n},n}function dn(){var n=I(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return dn=function(){return n},n}function ln(){var n=I(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return ln=function(){return n},n}var fn=P(ln()),pn=P(dn()),mn=z("div")(cn(),(function(n){return n.primary||"#61d345"}),fn,pn,(function(n){return n.secondary||"#fff"}));function gn(){var n=I(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return gn=function(){return n},n}function vn(){var n=I(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return vn=function(){return n},n}function bn(){var n=I(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return bn=function(){return n},n}function hn(){var n=I(["\n  position: absolute;\n"]);return hn=function(){return n},n}var xn=z("div")(hn()),yn=z("div")(bn()),Tn=P(vn()),wn=z("div")(gn(),Tn),An=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"===typeof e?(0,v.createElement)(wn,null,e):e:"blank"===r?null:(0,v.createElement)(yn,null,(0,v.createElement)(un,Object.assign({},o)),"loading"!==r&&(0,v.createElement)(xn,null,"error"===r?(0,v.createElement)(rn,Object.assign({},o)):(0,v.createElement)(mn,Object.assign({},o))))};function Sn(){var n=I(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return Sn=function(){return n},n}function En(){var n=I(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return En=function(){return n},n}var On=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},_n=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},jn=z("div",v.forwardRef)(En()),Zn=z("div")(Sn()),kn=(0,v.memo)((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,i=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=R()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[On(e),_n(e)],o=r[1];return{animation:t?P(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":P(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},a=(0,v.createElement)(An,{toast:t}),s=(0,v.createElement)(Zn,Object.assign({},t.ariaProps),M(t.message,t));return(0,v.createElement)(jn,{className:t.className,style:C({},i,r,t.style)},"function"===typeof o?o({icon:a,message:s}):(0,v.createElement)(v.Fragment,null,a,s))}));function Dn(){var n=I(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return Dn=function(){return n},n}!function(n,t,e,r){A.p=t,Z=n,k=e,D=r}(v.createElement);var Pn,zn,Cn,In,Un=j(Dn()),Mn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,i=n.gutter,a=n.children,s=n.containerStyle,u=n.containerClassName,c=G(o),d=c.toasts,l=c.handlers;return(0,v.createElement)("div",{style:C({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:u,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map((function(n){var e,o=n.position||r,s=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return C({left:0,right:0,display:"flex",position:"absolute",transition:R()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(o,l.calculateOffset(n,{reverseOrder:t,gutter:i,defaultPosition:r})),u=n.height?void 0:(e=function(t){l.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return(0,v.createElement)("div",{ref:u,className:n.visible?Un:"",key:n.id,style:s},"custom"===n.type?M(n.message,n):a?a(n):(0,v.createElement)(kn,{toast:n,position:o}))})))},Nn=$,Rn=e(885),Fn=l.Z.form(Pn||(Pn=(0,d.Z)(["\n\tmargin-top: 10px;\n\tmargin-bottom: 30px;\n"]))),Ln=l.Z.label(zn||(zn=(0,d.Z)(["\n\tdisplay: block;\n\tmargin-bottom: 20px;\n\tcolor: rgb(57, 133, 168);\n\tfont-weight: 500;\n\tfont-size: 15px;\n"]))),Vn=l.Z.input(Cn||(Cn=(0,d.Z)(["\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tpadding: 10px;\n\tborder: 1px solid rgba(33, 33, 33, 0.2);\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tfont-size: 15px;\n"]))),qn=l.Z.button(In||(In=(0,d.Z)(["\n\tpadding: 5px;\n\tmargin: 7px 0;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 6px;\n\tbackground-color: rgb(57, 133, 168);\n\tcolor: #fff;\n\tcursor: pointer;\n\ttext-transform: capitalize;\n\tbox-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);\n\ttransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\t&:hover {\n\t\tbackground-color: rgb(129, 214, 164);\n\t\tcolor: white;\n\t}\n"])));var Hn,Bn,Kn,Yn,$n=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",e=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&e[n];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},Gn=e(184);function Jn(){var n=(0,v.useState)(""),t=(0,Rn.Z)(n,2),e=t[0],r=t[1],o=(0,v.useState)(""),i=(0,Rn.Z)(o,2),a=i[0],s=i[1],d=(0,b.v9)(u),l=(0,b.I0)(),f=function(){r(""),s("")},p=$n(),m=$n();return(0,Gn.jsxs)(Fn,{onSubmit:function(n){n.preventDefault(),f(),d.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?Nn.error("".concat(e," is already in contacts.")):d.find((function(n){return n.number===a}))?Nn.error("".concat(a," is already in contacts.")):l((0,c.uK)({name:e,number:a}))},children:[(0,Gn.jsxs)(Ln,{htmlFor:p,children:["Name",(0,Gn.jsx)(Vn,{type:"text",name:"name",id:p,value:e,onChange:function(n){return r(n.target.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Andrei Potapov"})]}),(0,Gn.jsxs)(Ln,{htmlFor:m,children:["Number",(0,Gn.jsx)(Vn,{type:"tel",name:"number",id:m,value:a,onChange:function(n){return s(n.target.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"111-11-11"})]}),(0,Gn.jsx)(qn,{type:"sumbit",children:"Add contact"})]})}var Qn,Wn,Xn=l.Z.button(Hn||(Hn=(0,d.Z)(["\n\tpadding: 5px;\n\tmargin: 10px 0;\n\tborder: none;\n\toutline: none;\n\tborder-radius: 6px;\n\tbackground-color: rgb(57, 133, 168);\n\tcolor: #fff;\n\tcursor: pointer;\n\ttext-transform: capitalize;\n\tbox-shadow: 7px 7px 13px 0px rgba(0, 0, 0, 0.38);\n\ttransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\t&:hover {\n\t\tbackground-color: rgb(129, 214, 164);\n\t\tcolor: white;\n\t}\n"]))),nt=l.Z.ul(Bn||(Bn=(0,d.Z)(["\n\tmargin-top: 30px;\n\tcolor: var(--secondaryTextColor);\n\tfont-weight: 500;\n\tfont-size: 18px;\n"]))),tt=l.Z.li(Kn||(Kn=(0,d.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n"]))),et=l.Z.p(Yn||(Yn=(0,d.Z)(["\n\tcolor: rgb(57, 133, 168);\n"])));function rt(){var n=(0,b.v9)(u),t=(0,b.I0)();return(0,Gn.jsx)(nt,{children:n.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,Gn.jsxs)(tt,{children:[(0,Gn.jsxs)(et,{children:[r,": ",o]}),(0,Gn.jsx)(Xn,{type:"button",onClick:function(){return function(n){return t((0,c.GK)(n))}(e)},children:"Delete"})]},e)}))})}var ot=l.Z.label(Qn||(Qn=(0,d.Z)(["\n\tdisplay: block;\n\tmargin-top: 10px;\n\tcolor: rgb(57, 133, 168);\n\tfont-weight: 500;\n\tfont-size: 18px;\n"]))),it=l.Z.input(Wn||(Wn=(0,d.Z)(["\n\tdisplay: block;\n\tmargin-top: 10px;\n\tpadding: 10px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: 1px solid rgba(33, 33, 33, 0.2);\n\tborder-radius: 4px;\n\tcursor: pointer;\n\tfont-size: 15px;\n"])));function at(){var n=(0,b.I0)(),t=(0,b.v9)(s),e=$n();return(0,Gn.jsx)(ot,{htmlFor:e,children:(0,Gn.jsx)(it,{type:"text",name:"name",value:t,id:e,onChange:function(t){!function(t){n((0,c.M6)(t))}(t.target.value)},placeholder:"Find contacts by name"})})}function st(){var n=(0,b.v9)(u),t=(0,b.I0)();return(0,v.useEffect)((function(){return t((0,c.yF)())}),[t]),(0,Gn.jsxs)(f,{children:[(0,Gn.jsx)(Mn,{}),(0,Gn.jsx)(p,{children:"Phonebook"}),(0,Gn.jsx)(Jn,{}),(0,Gn.jsx)(m,{children:"Contacts"}),(0,Gn.jsx)(at,{}),n.length>0?(0,Gn.jsx)(rt,{contacts:n}):(0,Gn.jsx)(g,{children:"Your phonebook is empty."})]})}}}]);
//# sourceMappingURL=981.cc8b9f3a.chunk.js.map