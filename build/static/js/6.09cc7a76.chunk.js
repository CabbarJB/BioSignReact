(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[6],{463:function(e,t,n){"use strict";var c=n(464),s=n.n(c),r=n(36),a=n(465).a(),i=n(30),o=n(281),l=s.a.create({baseURL:r.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(i.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(a.push(d),window.location.reload()),e}),(function(e){o.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(i.b),a.push(d),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),o.a.error(t),Promise.reject(e)}));var j=l,h={login:function(e){return j({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return j({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=h},466:function(e,t,n){"use strict";var c=n(4),s=n(0),r=n.n(s),a=n(39),i=n(2),o=n(1),l=n(6),d=n.n(l),j=n(54),h=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(c=Object.getOwnPropertySymbols(e);s<c.length;s++)t.indexOf(c[s])<0&&Object.prototype.propertyIsEnumerable.call(e,c[s])&&(n[c[s]]=e[c[s]])}return n},u=function(e){return s.createElement(j.a,null,(function(t){var n,c=t.getPrefixCls,r=t.direction,a=e.prefixCls,l=e.type,j=void 0===l?"horizontal":l,u=e.orientation,b=void 0===u?"center":u,m=e.className,p=e.children,x=e.dashed,g=e.plain,O=h(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=c("divider",a),v=b.length>0?"-".concat(b):b,w=!!p,y=d()(f,"".concat(f,"-").concat(j),(n={},Object(o.a)(n,"".concat(f,"-with-text"),w),Object(o.a)(n,"".concat(f,"-with-text").concat(v),w),Object(o.a)(n,"".concat(f,"-dashed"),!!x),Object(o.a)(n,"".concat(f,"-plain"),!!g),Object(o.a)(n,"".concat(f,"-rtl"),"rtl"===r),n),m);return s.createElement("div",Object(i.a)({className:y},O,{role:"separator"}),p&&s.createElement("span",{className:"".concat(f,"-inner-text")},p))}))},b=n(90),m=n(508),p=n(507),x=n(446),g=n(496),O=n(509),f=function(){return Object(c.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(c.jsxs)("g",{children:[Object(c.jsx)("path",{fill:"#59C36A",d:"M827.301,875.968c-84.521,71.388-194.169,116.693-313.528,116.693c-177.609,0-333.52-97.848-418.041-240.62\r l31.646-145.858l140.255-26.039c32.553,105.078,130.779,182.178,246.141,182.178c55.964,0,107.937-17.703,150.767-49.112\r l134.777,20.558L827.301,875.968z"}),Object(c.jsx)("path",{fill:"#00A66C",d:"M827.301,875.968l-27.984-142.201l-134.777-20.558c-42.83,31.409-94.803,49.112-150.767,49.112v230.34\r C633.132,992.661,742.779,947.355,827.301,875.968z"}),Object(c.jsx)("g",{id:"Connected_Home_1_",children:Object(c.jsx)("g",{children:Object(c.jsx)("g",{children:Object(c.jsx)("g",{children:Object(c.jsx)("path",{fill:"#FFDA2D",d:"M256.781,505.331c0,26.267,3.998,51.396,10.851,74.813l-171.9,171.897\r c-42.83-71.957-69.29-156.48-69.29-246.71c0-90.233,26.46-174.754,69.29-246.711l137.965,23.743l33.936,148.154\r C260.779,453.932,256.781,479.06,256.781,505.331L256.781,505.331z"})})})})}),Object(c.jsx)("path",{fill:"#4086F4",d:"M1001.103,505.331c0,148.48-68.719,281.547-173.802,370.637L664.539,713.209\r c33.121-23.988,61.107-55.971,79.384-93.66h-230.15c-15.993,0-28.556-12.567-28.556-28.554V419.666\r c0-15.99,12.563-28.554,28.556-28.554h450.78c13.707,0,25.698,9.708,27.983,23.412\r C998.247,444.225,1001.103,475.063,1001.103,505.331L1001.103,505.331z"}),Object(c.jsx)("path",{fill:"#4175DF",d:"M743.924,619.549c-18.275,37.689-46.264,69.672-79.382,93.66l162.759,162.759\r c105.083-89.09,173.802-222.153,173.802-370.637c0-30.269-2.855-61.106-8.567-90.807c-2.284-13.704-14.278-23.412-27.984-23.412\r H513.772v228.437H743.924z"}),Object(c.jsx)("path",{fill:"#FF641A",d:"M835.297,154.107c0.571,7.996-2.855,15.422-7.996,21.131L705.086,296.881\r c-9.704,10.278-25.694,11.421-37.118,2.855c-45.119-33.693-98.231-51.396-154.195-51.396\r c-115.361,0-213.588,77.095-246.141,182.178L95.731,258.62C180.253,115.848,336.163,18,513.772,18\r c113.647,0,224.439,41.88,311.244,114.978C831.298,138.119,834.723,146.112,835.297,154.107L835.297,154.107z"}),Object(c.jsx)("path",{fill:"#F03800",d:"M667.966,299.736c11.422,8.567,27.411,7.423,37.119-2.855l122.214-121.643\r c5.143-5.709,8.569-13.133,7.996-21.131c-0.575-7.997-3.999-15.988-10.279-21.13C738.212,59.88,627.42,18,513.772,18v230.34\r C569.736,248.34,622.849,266.043,667.966,299.736z"})]})})},v=function(){return Object(c.jsx)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:"currentColor",children:Object(c.jsxs)("g",{children:[Object(c.jsx)("path",{fill:"#4A7AFF",d:"M1015.363,506.525c0,279.749-226.775,506.524-506.525,506.524c-279.749,0-506.524-226.775-506.524-506.524\r C2.313,226.775,229.089,0,508.838,0C788.588,0,1015.363,226.775,1015.363,506.525z"}),Object(c.jsx)("path",{fill:"#FFFFFF",d:"M663.688,149.015v114.697c0,0-131.686-19.113-131.686,65.843v84.957h118.941L636.08,544.072H532.002v337.709\r H400.316V544.072l-112.572-2.126V414.512H398.19V316.81c0,0-7.288-145.343,135.938-172.038\r C593.602,133.68,663.688,149.015,663.688,149.015z"}),Object(c.jsx)("path",{fill:"#DCE1EB",d:"M663.688,263.712V149.015c0,0-70.086-15.335-129.56-4.243c-9.291,1.73-17.932,3.973-25.993,6.623v730.387\r h23.867V544.072h104.07l14.871-129.561H532.002c0,0,0,0,0-84.957C532.002,244.599,663.688,263.712,663.688,263.712z"})]})})},w=n(5),y=n(18),C=n(68),L=s.forwardRef((function(e,t){var n=e.className,c=e.component,r=e.viewBox,a=e.spin,i=e.rotate,o=e.tabIndex,l=e.onClick,j=e.children,h=Object(y.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(C.g)(Boolean(c||j),"Should have `component` prop or `children`."),Object(C.f)();var u=d()("anticon",n),b=d()({"anticon-spin":!!a}),m=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,p=Object(w.a)(Object(w.a)({},C.e),{},{className:b,style:m,viewBox:r});r||delete p.viewBox;var x=o;return void 0===x&&l&&(x=-1),s.createElement("span",Object.assign({role:"img"},h,{ref:t,tabIndex:x,onClick:l,className:u}),c?s.createElement(c,Object.assign({},p),j):j?(Object(C.g)(Boolean(r)||1===s.Children.count(j)&&s.isValidElement(j)&&"use"===s.Children.only(j).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),s.createElement("svg",Object.assign({},p,{viewBox:r}),j)):null)}));L.displayName="AntdIcon";var H=L,N=r.a.forwardRef((function(e,t){return Object(c.jsx)(H,{component:e.svg,className:e.className})})),F=n(55),M=n(463),V=n(44),k=n(467),B=function(e){var t=Object(V.g)(),n=e.otherSignIn,r=e.showForgetPassword,a=e.hideAuthMessage,i=e.onForgetPasswordClick,o=e.showLoading,l=e.extra,d=e.loading,j=e.showMessage,h=e.message,w=e.authenticated,y=e.showAuthMessage,C=e.token,L=e.redirect,H=e.allowRedirect;Object(s.useEffect)((function(){null!==C&&H&&t.push(L),j&&setTimeout((function(){a()}),3e3)}));var F=Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{children:Object(c.jsx)("span",{className:"text-muted font-size-base font-weight-normal",children:"or connect with"})}),Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)(b.a,{onClick:function(){o()},className:"mr-2",disabled:d,icon:Object(c.jsx)(N,{svg:f}),children:"Google"}),Object(c.jsx)(b.a,{onClick:function(){o()},icon:Object(c.jsx)(N,{svg:v}),disabled:d,children:"Facebook"})]})]});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:j?1:0,marginBottom:j?20:0},children:Object(c.jsx)(m.a,{type:"error",showIcon:!0,message:h})}),Object(c.jsxs)(p.a,{layout:"vertical",name:"login-form",onFinish:function(e){o();M.a.login(e).then((function(e){w("fakeToken")})).then((function(e){y(e)}))},children:[Object(c.jsx)(p.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a validate email!"}],children:Object(c.jsx)(x.a,{prefix:Object(c.jsx)(g.a,{className:"text-primary"})})}),Object(c.jsx)(p.a.Item,{name:"password",label:Object(c.jsxs)("div",{className:"".concat(r?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(c.jsx)("span",{children:"Password"}),r&&Object(c.jsx)("span",{onClick:function(){return i},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(c.jsx)(x.a.Password,{prefix:Object(c.jsx)(O.a,{className:"text-primary"})})}),Object(c.jsx)(p.a.Item,{children:Object(c.jsx)(b.a,{type:"primary",htmlType:"submit",block:!0,loading:d,children:"Sign In"})}),n?F:null,l]})]})};B.defaultProps={otherSignIn:!0,showForgetPassword:!1};var P={showAuthMessage:F.c,showLoading:F.d,hideAuthMessage:F.b,authenticated:F.a};t.a=Object(a.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),P)(B)},477:function(e,t,n){"use strict";n.r(t);var c=n(19),s=n(4),r=n(0),a=(n(466),n(129)),i=n(77),o=n(439),l=n(39),d=n(79),j=n(80),h=n(95),u=n(94),b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onLogin=function(){},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"esign-login-wrapper",children:[Object(s.jsxs)("div",{className:"esign-login-title text-center",children:[Object(s.jsx)("h3",{style:{fontSize:"32px"},children:"Sign in"}),Object(s.jsx)("span",{style:{fontSize:"12px",color:"#3B405B",opacity:.7},children:"Log in to your account by your electronic signature"})]}),Object(s.jsx)("div",{style:{marginTop:"35px"},className:"esign-btn-wrapper",children:Object(s.jsxs)("a",{style:{boxShadow:"0 0 10px #4666EB",backgroundColor:"#4666EB",borderRadius:"10px",display:"flex",color:"white",justifyContent:"space-between",alignItems:"center"},className:"esign-btn w-100 p-4",href:"",children:[Object(s.jsx)("svg",{width:"119",height:"41",viewBox:"0 0 119 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M57.3212 20.6459H53.2575L61.3483 5.81231H63.5148L68.5823 15.1141L73.662 5.81231H75.8285L81.8752 16.9019L90.5291 9.46565H82.0344V5.74754H96.1107V9.4786L87.4446 16.9148H100.786L107.923 3.83019L119 24.1179L116.968 27.836H38.6303C36.2802 32.1025 33.9627 36.3647 31.6778 40.6226H0V0.15094H45.6073L43.5754 3.88201H5.2878V16.6687H15.08V24.1179H5.2878V36.9045H29.646C31.9635 32.638 34.285 28.3758 36.6107 24.1179H105.499L107.947 19.6613L110.395 24.1179H114.667L107.959 11.8364L103.161 20.6459H79.9045L74.7514 11.3312L69.6717 20.6329H67.5051L62.4254 11.3312L57.3212 20.6977V20.6459ZM21.7387 15.6711V25.1154L29.4746 20.3997L21.7387 15.6841V15.6711ZM47.6514 3.88201H51.1644V0.15094H49.6833L47.6514 3.88201V3.88201ZM47.6514 5.74754V20.6459H51.1644V5.74754H47.6514Z",fill:"white"})}),Object(s.jsxs)("svg",{width:"35",height:"37",viewBox:"0 0 35 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("g",{"clip-path":"url(#clip0)",children:Object(s.jsx)("path",{d:"M34.599 17.3825C34.5986 17.3821 34.5983 17.3816 34.5978 17.3812L27.4539 10.0035C26.9188 9.45082 26.0531 9.45288 25.5204 10.0083C24.9877 10.5637 24.9898 11.462 25.525 12.0148L30.3213 16.968H1.36719C0.61209 16.968 0 17.6032 0 18.3868C0 19.1704 0.61209 19.8056 1.36719 19.8056H30.3213L25.525 24.7588C24.9899 25.3116 24.9878 26.2099 25.5205 26.7653C26.0532 27.3208 26.9189 27.3227 27.454 26.7701L34.5978 19.3924C34.5983 19.392 34.5986 19.3915 34.5991 19.3911C35.1345 18.8365 35.1328 17.9353 34.599 17.3825Z",fill:"white"})}),Object(s.jsx)("defs",{children:Object(s.jsx)("clipPath",{id:"clip0",children:Object(s.jsx)("rect",{width:"35",height:"36.3208",fill:"white",transform:"translate(0 0.22641)"})})})]})]})})]})}}]),n}(r.Component);t.default=function(e){Object(l.c)((function(e){return e.theme.currentTheme}));return Object(s.jsx)("div",{className:"h-100",children:Object(s.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(s.jsx)(a.a,{justify:"center",children:Object(s.jsx)(i.a,{xs:20,sm:20,md:20,lg:9,children:Object(s.jsx)(o.a,{children:Object(s.jsx)("div",{className:"my-4",children:Object(s.jsx)(a.a,{justify:"center",children:Object(s.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(s.jsx)(b,Object(c.a)({},e))})})})})})})})})}}}]);
//# sourceMappingURL=6.09cc7a76.chunk.js.map