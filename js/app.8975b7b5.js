(function(t){function e(e){for(var r,i,n=e[0],l=e[1],c=e[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);v&&v(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var n=a[i];0!==o[n]&&(r=!1)}r&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},i={app:0},o={app:0},s=[];function n(t){return l.p+"js/"+({404:"404",about:"about"}[t]||t)+"."+{404:"13b8f894",about:"5cd9a09f"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var r="css/"+({404:"404",about:"about"}[t]||t)+"."+{404:"31d6cfe0",about:"b6b1332a"}[t]+".css",o=l.p+r,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var c=s[n],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){c=d[n],u=c.getAttribute("data-href");if(u===r||u===o)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[t],v.parentNode.removeChild(v),a(s)},v.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=n(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,a[1](d)}o[t]=void 0}};var v=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/ecommerce/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var v=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a05":function(t,e,a){},"0aff":function(t,e,a){"use strict";a("e858")},"16db":function(t,e,a){"use strict";a("593b")},"367b":function(t,e,a){"use strict";a("7bc2")},"460f":function(t,e,a){"use strict";a("0a05")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[0==t.loading?a("div",[a("AppBar"),a("v-main",[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1):a("v-container",{attrs:{"fill-height":"",fluid:"",width:"100vw"}},[a("v-row",{attrs:{align:"center",height:"100%",justify:"center"}},[a("spring-spinner",{attrs:{"animation-duration":3e3,size:60,color:"blue"}})],1)],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.changeColorOnScroll,expression:"changeColorOnScroll"}],staticClass:"ml-5 mr-5",attrs:{"max-width":"100vw","max-height":"75",color:t.appBarcolor,app:"","elevate-on-scroll":"",dark:t.dark,height:"70"}},[r("v-toolbar-title",[t.checkMobileDesktop?r("v-btn",{attrs:{text:"",rounded:"",to:"/",color:"transparent",height:"70"}},[r("v-img",{staticClass:"mr-5",attrs:{src:a("cf05"),contain:"",width:"110",height:"70"}}),r("div",{class:t.appBarContentColor},[t._v(" Ecommerce ")])],1):r("v-btn",{staticClass:"mr-10",attrs:{text:"",rounded:"",to:"/",color:"transparent",height:"70"}},[r("v-img",{staticClass:"mr-5",attrs:{src:a("cf05"),contain:"",width:"70",height:"30"}}),r("div",{class:t.appBarContentColor},[t._v(" Ecommerce ")])],1)],1),r("v-spacer"),t.checkMobileDesktop?r("v-form",{attrs:{method:"POST",action:"#"}},[r("v-text-field",{staticClass:"ma-5",attrs:{filled:"",rounded:"",dense:"",outlined:"","hide-details":"","append-icon":"mdi-magnify","single-line":""},on:{"click:append":t.searchButton}})],1):t._e(),t.checkMobileDesktop?r("div",{attrs:{id:"nav"}},t._l(t.routes,(function(e){return r("v-btn",{key:e.name,attrs:{text:"",rounded:"",to:e.link,small:""}},[r("div",{class:t.appBarContentColor},[t._v(" "+t._s(e.name)+" ")])])})),1):t._e(),0==t.cart.length?r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-chip",t._g(t._b({staticClass:"ma-2",attrs:{outlined:""}},"v-chip",i,!1),a),[r("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cart ")]),t._v(" "+t._s(t.productQuantity)+" Cart ")],1)]}}],null,!1,3516869510)},[r("v-card",[r("v-card-title",[t._v(" Cart ")]),r("v-list",[r("v-list-item",[r("v-list-item-title",[t._v("No Items on the cart.")])],1)],1)],1)],1):t._e(),t.cart.length>0?r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-chip",t._g(t._b({staticClass:"ma-2",attrs:{outlined:""}},"v-chip",i,!1),a),[r("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cart ")]),t._v(" "+t._s(t.productQuantity)+" Cart ")],1)]}}],null,!1,3516869510),model:{value:t.cartDialog,callback:function(e){t.cartDialog=e},expression:"cartDialog"}},[r("Cart",{on:{cartDialog:function(e){t.cartDialog=!1}}})],1):t._e(),t.checkMobileDesktop?r("v-spacer"):t._e(),t.checkMobileDesktop?r("div",{staticClass:"hidden-xs-and-down mr-5"},[r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,i=e.on;return[r("v-btn",t._g(t._b({attrs:{text:"",rounded:""}},"v-btn",a,!1),i),[r("v-icon",[t._v(" mdi-account ")]),t._v(" Account ")],1)]}}],null,!1,149554882)},[r("v-list",[r("v-dialog",{attrs:{persistent:"","max-width":"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-list-item",[r("v-list-item-title",t._g(t._b({},"v-list-item-title",i,!1),a),[t._v(" Login ")])],1)]}}],null,!1,1633459383),model:{value:t.loginDialog,callback:function(e){t.loginDialog=e},expression:"loginDialog"}},[r("LoginCard",{on:{closeLoginDialog:function(e){t.loginDialog=!1}}})],1),r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-list-item",[r("v-list-item-title",t._g(t._b({},"v-list-item-title",i,!1),a),[t._v(" Register ")])],1)]}}],null,!1,2769283677),model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[r("RegisterCard",{on:{closeRegisterDialog:function(e){t.registerDialog=!1}}})],1)],1)],1)],1):r("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[r("v-app-bar-nav-icon",t._g(t._b({class:t.appBarContentColor,attrs:{dark:""}},"v-app-bar-nav-icon",i,!1),a))]}}]),model:{value:t.appNavDialog,callback:function(e){t.appNavDialog=e},expression:"appNavDialog"}},[r("v-card",[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[r("v-btn",{staticClass:"mr-10",attrs:{text:"",rounded:"",to:"/",color:"transparent",height:"70"}},[r("v-img",{attrs:{src:a("cf05"),contain:"",width:"70",height:"30"}}),r("div",{staticClass:"white--text"},[t._v(" Ecommerce ")])],1)],1),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.appNavDialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1)],1),r("v-list",{attrs:{"two-line":"",dense:""}},t._l(t.mobileRoutes,(function(e,a){return r("v-list-item",{key:a,attrs:{link:"",to:e.link,dense:""}},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1)],1)},n=[],l=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{width:"400",opacity:"10"}},[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("User Profile")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeLoginDialog()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeLoginDialog()}}},[t._v(" Login ")])],1)],1)}),c=[],u={methods:{closeLoginDialog:function(){this.$emit("closeLoginDialog")}}},d=u,v=a("2877"),m=a("6544"),p=a.n(m),h=a("8336"),f=a("b0af"),g=a("99d9"),b=a("62ad"),C=a("a523"),_=a("0fd9"),y=a("2fa4"),x=a("8654"),k=Object(v["a"])(d,l,c,!1,null,null,null),w=k.exports;p()(k,{VBtn:h["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:b["a"],VContainer:C["a"],VRow:_["a"],VSpacer:y["a"],VTextField:x["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("User Profile")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Email*",required:""}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1)],1)],1),a("small",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeRegisterDialog()}}},[t._v(" Close ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeRegisterDialog()}}},[t._v(" Submit ")])],1)],1)},S=[],D={methods:{closeRegisterDialog:function(){this.$emit("closeRegisterDialog")}}},T=D,O=Object(v["a"])(T,V,S,!1,null,null,null),B=O.exports;p()(O,{VBtn:h["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:b["a"],VContainer:C["a"],VRow:_["a"],VSpacer:y["a"],VTextField:x["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-cart-outline ")]),t._v(" Cart ")],1),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.cartDialogClicked}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-list",{attrs:{"three-line":"",subheader:""}},[a("v-subheader",[t._v("All Products on cart")]),t._l(t.cart,(function(e,r){return a("div",{key:r},[t.checkQuantity(e)?a("v-list-item",[a("v-row",[a("v-col",{attrs:{cols:"10"}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.product.title))]),a("v-list-item-subtitle",[t._v(" Quantity: "),a("v-chip",{staticClass:"primary white--text ml-2 mr-2",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(a){return t.addQuantity(e)}}},[a("h2",[t._v("+")])]),t._v(" "+t._s(e.quantity)+" "),a("v-chip",{staticClass:"ml-2 primary white--text",staticStyle:{cursor:"pointer"},attrs:{small:""},on:{click:function(a){return t.subtractQuantity(e)}}},[a("h2",[t._v("-")])])],1)],1)],1),a("v-col",{attrs:{cols:"2"}},[t._v(" Rs. "+t._s(t.price(e.product.price,e.quantity))+" ")])],1)],1):t._e()],1)}))],2),a("v-divider"),a("v-card-text",{staticClass:"text-h5 text-right mt-5"},[t._v(" Total: "),a("v-chip",{staticClass:"ml-2",attrs:{color:"primary"}},[t._v(" Rs. "+t._s(t.totalPrice)+" ")])],1)],1)},j=[],A={methods:{cartDialogClicked:function(){this.$emit("cartDialog")},subtractQuantity:function(t){this.$store.commit("subtractQuantity",t)},price:function(t,e){return t*e},addQuantity:function(t){this.$store.commit("addQuantity",t)},checkQuantity:function(t){return t.quantity>0}},computed:{cart:function(){return this.$store.state.cart},totalPrice:function(){return this.$store.dispatch("getTotalOfCart"),this.$store.state.totalPrice}}},$=A,E=a("cc20"),I=a("ce7e"),M=a("132d"),L=a("8860"),R=a("da13"),z=a("5d23"),N=a("e0c7"),F=a("71d9"),q=a("2a7f"),Q=Object(v["a"])($,P,j,!1,null,null,null),W=Q.exports;p()(Q,{VBtn:h["a"],VCard:f["a"],VCardText:g["b"],VChip:E["a"],VCol:b["a"],VDivider:I["a"],VIcon:M["a"],VList:L["a"],VListItem:R["a"],VListItemContent:z["a"],VListItemSubtitle:z["b"],VListItemTitle:z["c"],VRow:_["a"],VSpacer:y["a"],VSubheader:N["a"],VToolbar:F["a"],VToolbarItems:q["a"],VToolbarTitle:q["b"]});var H={name:"AppBar",components:{Cart:W,LoginCard:w,RegisterCard:B},data:function(){return{appNavDialog:!1,cartDialog:!1,routes:[{name:"About",link:"/about"},{name:"Deals",link:"/deals"},{name:"TOA",link:"/terms-and-conditions"},{name:"Stores",link:"/stores"},{name:"Categories",link:"/categories"}],mobileRoutes:[{name:"About",link:"/about"},{name:"Deals",link:"/deals"},{name:"TOA",link:"/terms-and-conditions"},{name:"Stores",link:"/stores"},{name:"Categories",link:"/categories"},{name:"Login",link:"/login"},{name:"Register",link:"/register"}],appBarcolor:"transparent",dark:!1,appBarContentColor:"blue--text",loginDialog:!1,registerDialog:!1}},methods:{searchButton:function(){},changeColorOnScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;e>20?(this.appBarcolor="primary",this.appBarContentColor="white--text",this.dark=!0):(this.appBarcolor="transparent",this.appBarContentColor="blue--text",this.dark=!1)}}},computed:{cart:function(){return this.$store.state.cart},productQuantity:function(){return this.$store.state.cart.length},checkMobileDesktop:function(){return"xs"!==this.$vuetify.breakpoint.name&&"sm"!==this.$vuetify.breakpoint.name}}},J=H,U=(a("460f"),a("40dc")),G=a("5bc1"),K=a("169a"),Y=a("4bd4"),X=a("adda"),Z=a("e449"),tt=a("269a"),et=a.n(tt),at=a("f977"),rt=Object(v["a"])(J,s,n,!1,null,"7cfd292e",null),it=rt.exports;p()(rt,{VAppBar:U["a"],VAppBarNavIcon:G["a"],VBtn:h["a"],VCard:f["a"],VCardTitle:g["c"],VChip:E["a"],VDialog:K["a"],VForm:Y["a"],VIcon:M["a"],VImg:X["a"],VList:L["a"],VListItem:R["a"],VListItemContent:z["a"],VListItemTitle:z["c"],VMenu:Z["a"],VSpacer:y["a"],VTextField:x["a"],VToolbar:F["a"],VToolbarItems:q["a"],VToolbarTitle:q["b"]}),et()(rt,{Scroll:at["b"]});var ot=a("4583"),st=(a("4de4"),a("a434"),a("a9e3"),a("d3b7"),a("2f62")),nt=a("bc3a"),lt=a.n(nt);r["a"].use(st["a"]);var ct=new st["a"].Store({state:{cart:[],products:[],featuredSales:[],categories:[],totalPrice:0},mutations:{total:function(t,e){t.totalPrice=e},setAll:function(t,e){t.featuredSales=e.details[0].sliders,t.categories=e.details[0].category,t.products=e.details[0].product_for_you},pushToCart:function(t,e){t.cart.push({product:e,quantity:1})},incrementItemQuantity:function(t,e){t.cart.filter((function(t){t.product.id===Number(e.id)&&t.quantity++}))},addQuantity:function(t,e){e.quantity++},subtractQuantity:function(t,e){if(e.quantity>1)e.quantity--;else{var a="";t.cart.filter((function(t,r){return t.product.id===Number(e.id)&&(a=r,!0)})),t.cart.splice(a,1)}}},actions:{fetchProducts:function(t){var e=t.commit;return new Promise((function(t,a){lt()("http://192.168.100.11:8000/api/v1/home/").then((function(a){e("setAll",a.data),t()}))}))},addProductsToCart:function(t,e){var a=t.state.cart.filter((function(t){return t.product.id===Number(e.id)}));a.length?t.commit("incrementItemQuantity",e):t.commit("pushToCart",e)},getTotalOfCart:function(t){var e,a=0;for(e in t.state.cart)a+=t.state.cart[e].quantity*t.state.cart[e].product.price;t.commit("total",a)}},modules:{}}),ut={name:"App",components:{AppBar:it,SpringSpinner:ot["a"]},data:function(){return{loading:!0}},beforeCreate:function(){var t=this;setTimeout((function(){t.loading=!1}),2e3),this.$router.beforeEach((function(e,a,r){t.loading=!0,r()})),this.$router.afterEach((function(){setTimeout((function(){t.loading=!1}),500)}))},mounted:function(){var t=this;t.loading=!0,ct.dispatch("fetchProducts").then((function(){return t.loading=!1})).catch((function(e){console.log(e),t.isError=!0}))}},dt=ut,vt=(a("367b"),a("7496")),mt=a("f6c4"),pt=Object(v["a"])(dt,i,o,!1,null,"40fe38a0",null),ht=pt.exports;p()(pt,{VApp:vt["a"],VContainer:C["a"],VMain:mt["a"],VRow:_["a"]});var ft=a("8c4f"),gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("CourselWithMenu"),a("FeaturedCategories"),a("FeaturedSales")],1)},bt=[],Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mt-2",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{elevation:"24"}},[a("v-carousel",{attrs:{"hide-delimiters":"",cycle:"",interval:"6000",progress:"","progress-color":"primary",height:"73vh"}},t._l(t.carouselItems,(function(e,r){return a("v-carousel-item",{key:r},[a("v-img",{staticClass:"fill-height",attrs:{src:e.src,"lazy-src":e.src},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)},[a("v-col",{attrs:{cols:"12"}},[a("v-sheet",{staticClass:"d-flex align-content-end flex-wrap",attrs:{color:"transparent",height:"72vh",tile:""}},[a("div",{staticClass:"pa-5"},[a("v-btn",{class:t.shopClasses,attrs:{text:"",to:e.src},on:{mouseover:t.hoverOver,mouseout:t.hoverOut}},[t._v(" Shop Now! ")])],1)])],1)],1)],1)})),1)],1)],1)],1)],1)],1)},_t=[],yt=(a("77ed"),{name:"CarouselWithMenu",methods:{hoverOver:function(){this.shopClasses=["text-h4","text-capitalize","animate__animated","animate__tada"]},hoverOut:function(){this.shopClasses=["text-h4","text-capitalize"]}},data:function(){return{shopClasses:["text-h4","text-capitalize"],carouselItems:[{src:"https://picsum.photos/1100/500?random=1"},{src:"https://picsum.photos/1100/500?random=2"},{src:"https://picsum.photos/1100/500?random=3"},{src:"https://picsum.photos/1100/500?random=4"}],selectedItem:1,items:[{items:[{title:"Dresses"},{title:"Handbags"},{title:"Shoes"},{title:"Jackets"},{title:"Shirts"}],active:!0,title:"Clothing"},{items:[{title:"Gaming"},{title:"Laptop Skins"},{title:"Apple"},{title:"Dell"},{title:"Lenovo"},{title:"Microsoft"},{title:"Asus"},{title:"Adapters"},{title:"Batteries"}],title:"Electronics"},{items:[{title:"Sport Wear"},{title:"Shorts"},{title:"School Bags"},{title:"Wipes"},{title:"Footwear"},{title:"Toys"},{title:"Bags"},{title:"Blazzers"}],title:"Education"},{items:[{title:"Sport Wear"},{title:"Shorts"},{title:"School Bags"},{title:"Wipes"},{title:"Footwear"},{title:"Toys"},{title:"Bags"},{title:"Blazzers"}],title:"Family"},{items:[{title:"Sport Wear"},{title:"Shorts"},{title:"School Bags"},{title:"Wipes"},{title:"Footwear"},{title:"Toys"},{title:"Bags"},{title:"Blazzers"}],title:"Health"},{items:[{title:"Chair"},{title:"Desk"},{title:"Stamps"}],title:"Office"},{items:[{title:"Sport Wear"},{title:"Shorts"},{title:"School Bags"},{title:"Wipes"},{title:"Footwear"},{title:"Toys"},{title:"Bags"},{title:"Blazzers"}],title:"Promotions"}]}}}),xt=yt,kt=(a("60a3"),a("5e66")),wt=a("3e35"),Vt=a("490a"),St=a("8dd9"),Dt=Object(v["a"])(xt,Ct,_t,!1,null,null,null),Tt=Dt.exports;p()(Dt,{VBtn:h["a"],VCard:f["a"],VCarousel:kt["a"],VCarouselItem:wt["a"],VCol:b["a"],VImg:X["a"],VProgressCircular:Vt["a"],VRow:_["a"],VSheet:St["a"]});var Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},[t.checkMobileDesktop?a("v-col",{staticClass:"d-flex",attrs:{cols:"10"}},t._l(t.categories,(function(e,r){return a("v-col",{key:r,attrs:{cols:"2",md:"2"}},[a("v-card",{staticClass:"cardToAnimateOnHover slide",attrs:{height:"150",to:e.link}},[a("v-card-text",[a("v-img",{staticClass:"ma-0 fill-height",attrs:{src:e.image,"lazy-src":e.image,height:"100"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1),a("v-card-actions",[a("v-row",{staticClass:"mb-3 subtitle-2 text",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(e.name)+" ")])],1)],1)],1)})),1):a("v-col",{staticClass:"ma-auto d-flex",attrs:{cols:"12"}},t._l(t.categories,(function(e,r){return a("v-col",{key:r,attrs:{cols:"6",md:"2",sm:"4",lg:"2"}},[r<2?a("v-card",{staticClass:"slide",attrs:{to:e.link}},[a("v-card-text",[a("v-img",{staticClass:"fill-height",attrs:{src:e.image,"lazy-src":e.image,contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)})],1),a("v-card-actions",[a("v-row",{staticClass:"mb-3 subtitle-2 text",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(e.name)+" ")])],1)],1):t._e()],1)})),1)],1)},Bt=[],Pt={name:"FeaturedCategories",data:function(){return{categories:[{name:"Clothing",image:"https://picsum.photos/1100/500?random=5",link:"/clothes"},{name:"Beauty",image:"https://picsum.photos/1100/500?random=6",link:"/beauty-products"},{name:"Appliances",image:"https://picsum.photos/1100/500?random=7",link:"/appliances"},{name:"Electronics",image:"https://picsum.photos/1100/500?random=8",link:"/electronics"},{name:"Fitness",image:"https://picsum.photos/1100/500?random=9",link:"/fitness"},{name:"Gadets",image:"https://picsum.photos/1100/500?random=10",link:"/gadets"}]}},computed:{checkMobileDesktop:function(){return"xs"!==this.$vuetify.breakpoint.name&&"sm"!==this.$vuetify.breakpoint.name}}},jt=Pt,At=(a("16db"),Object(v["a"])(jt,Ot,Bt,!1,null,"a6695a0c",null)),$t=At.exports;p()(At,{VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCol:b["a"],VImg:X["a"],VProgressCircular:Vt["a"],VRow:_["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mt-5",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",{staticClass:"mt-5 mb-10"},[a("v-divider")],1),a("v-row",[a("v-col",[a("div",{staticClass:"text-h4"},[t._v(" Flash Sale ")])])],1),t.checkMobileDesktop?a("v-card",{staticClass:"mt-2 pa-0",attrs:{elevation:"1"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"8"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"text-h6"},[t._v(" On Sale Now "),a("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[t._v(" "+t._s(t.time)+" ")])],1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"text-h6",staticStyle:{"margin-right":"20px"},attrs:{flat:""}},[a("v-card-text",{staticClass:"text-h6",staticStyle:{"text-align":"right!important","margin-right":"20px"}},[a("v-btn",{class:t.flashSalesClasses,attrs:{text:"",to:"flashSale",id:"animateButton",height:"60"},on:{mouseover:t.hoverOver,mouseout:t.hoverOut}},[a("div",{attrs:{id:"btn"}},[a("span",{staticClass:"noselect"},[t._v(" Show More ")]),a("div",{attrs:{id:"circle"}})])])],1)],1)],1)],1)],1):a("v-card",{staticClass:"mt-2 pa-0",attrs:{elevation:"1"}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{attrs:{flat:""}},[a("v-card-text",{staticClass:"text-h6"},[t._v(" On Sale Now "),a("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"white"}},[t._v(" "+t._s(t.time)+" ")])],1)],1)],1)],1),a("v-row",{staticClass:"text-left mt-0 mb-5"},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"text-h6",attrs:{flat:""}},[a("v-card-text",{staticClass:"text-h6"},[a("v-btn",{class:t.flashSalesClasses,attrs:{text:"",to:"flashSale",id:"animateButton",height:"60"},on:{mouseover:t.hoverOver,mouseout:t.hoverOut}},[a("div",{attrs:{id:"btn"}},[a("span",{staticClass:"noselect"},[t._v(" Show More ")]),a("div",{attrs:{id:"circle"}})])])],1)],1)],1)],1)],1),a("v-row",{staticClass:"mt-2 mb-10"},[a("v-carousel",{attrs:{"hide-delimiters":"",light:"",cycle:""},scopedSlots:t._u([{key:"prev",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary white--text",small:""}},"v-btn",i,!1),r),[a("v-icon",[t._v(" mdi-arrow-left-bold-circle-outline ")])],1)]}},{key:"next",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary white--text",small:""}},"v-btn",i,!1),r),[a("v-icon",[t._v(" mdi-arrow-right-bold-circle-outline ")])],1)]}}])},[t._l(t.salesProduct,(function(e,r){return[(r+1)%t.columns===1||1===t.columns?a("v-carousel-item",{key:r},[a("v-row",{staticClass:"flex-nowrap",staticStyle:{height:"100%"}},[t._l(t.columns,(function(i,o){return[+r+o<t.salesProduct.length?[a("v-col",{key:o},[+r+o<t.salesProduct.length?a("v-sheet",{attrs:{color:"white",height:"100%"}},[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[a("v-card",{staticClass:"mr-5"},[a("v-img",{staticClass:"fill-height",attrs:{src:e.image,"lazy-src":e.image,alt:e.alt,height:"300",width:"250",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)]},proxy:!0}],null,!0)}),a("v-card-text",[a("v-container",{staticClass:"productDetails",staticStyle:{width:"100%!important"},attrs:{color:"transparent"}},[a("div",{staticClass:"productDetailsCard",staticStyle:{width:"100%!important"},attrs:{color:"transparent"}},[a("div",{staticClass:"productCardContent",staticStyle:{width:"100%!important"}},[a("v-row",{staticClass:"d-flex"},[a("v-col",{attrs:{cols:"6"}},[a("h3",{attrs:{title:e.name},domProps:{textContent:t._s(e.name)}})]),a("v-col",{attrs:{cols:"6"}},[a("h5",{staticStyle:{color:"red!important"},attrs:{title:"Discount"}},[t._v(" Rs. "),a("strike",[t._v(t._s(e.old_price))]),t._v(" - "+t._s(e.product_discount)+" = Rs. "+t._s(e.product_price)+" ")],1)])],1),a("v-row",{staticClass:"d-flex"},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"productDetailsCard_hover_content"},[a("p",{domProps:{textContent:t._s(e.description)}})])])],1)],1)])])],1)],1)],1)],1):t._e()],1)]:t._e()]}))],2)],1):t._e()]}))],2)],1)],1)],1)},It=[],Mt={name:"FeaturedSales",data:function(){return{time:0,flashSalesClasses:["text-h4","text-capitalize"],deadline:new Date(Date.parse(new Date)+1296e6)}},methods:{initializeClock:function(){var t=this,e=setInterval((function(){var a=t.timeRemaining();t.time=a.days+" Days "+a.hours+" Hrs "+a.minutes+" Min "+a.seconds+" Sec ",a.total<=0&&clearInterval(e)}),1e3)},timeRemaining:function(){var t=Date.parse(this.deadline)-Date.parse(new Date),e=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24),i=Math.floor(t/864e5);return{total:t,days:i,hours:r,minutes:a,seconds:e}},hoverOver:function(){this.flashSalesClasses=["text-h4","text-capitalize","animate__animated","animate__tada"]},hoverOut:function(){this.flashSalesClasses=["text-h4","text-capitalize"]}},mounted:function(){this.initializeClock()},computed:{salesProduct:function(){var t=[{name:"try1",image:"dfad"},{name:"try2",image:"fadfdsfad"}];return t},columns:function(){return this.$vuetify.breakpoint.xl?4:this.$vuetify.breakpoint.lg?3:this.$vuetify.breakpoint.md?2:1},checkMobileDesktop:function(){return"xs"!==this.$vuetify.breakpoint.name&&"sm"!==this.$vuetify.breakpoint.name}}},Lt=Mt,Rt=(a("949b"),a("0aff"),Object(v["a"])(Lt,Et,It,!1,null,"2eb7ab50",null)),zt=Rt.exports;p()(Rt,{VBtn:h["a"],VCard:f["a"],VCardText:g["b"],VCarousel:kt["a"],VCarouselItem:wt["a"],VChip:E["a"],VCol:b["a"],VContainer:C["a"],VDivider:I["a"],VIcon:M["a"],VImg:X["a"],VProgressCircular:Vt["a"],VRow:_["a"],VSheet:St["a"]});var Nt={name:"Home",components:{CourselWithMenu:Tt,FeaturedCategories:$t,FeaturedSales:zt}},Ft=Nt,qt=Object(v["a"])(Ft,gt,bt,!1,null,null,null),Qt=qt.exports;r["a"].use(ft["a"]);var Wt=[{path:"/",name:"Home",component:Qt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/terms-and-conditions",name:"TOA",component:function(){return a.e("about").then(a.bind(null,"51c5"))}},{path:"/categories",name:"Categories",component:function(){return a.e("about").then(a.bind(null,"58c2"))}},{path:"*",name:"Error",component:function(){return a.e("404").then(a.bind(null,"9703"))}}],Ht=new ft["a"]({mode:"history",base:"/ecommerce/",routes:Wt}),Jt=Ht,Ut=a("f309");r["a"].use(Ut["a"]);var Gt=new Ut["a"]({icons:{iconfont:"mdi"}}),Kt=a("8f0d");r["a"].use(Kt["a"]),r["a"].config.productionTip=!1,new r["a"]({router:Jt,store:ct,vuetify:Gt,render:function(t){return t(ht)}}).$mount("#app")},"593b":function(t,e,a){},"60a3":function(t,e,a){"use strict";a("cb99")},"7bc2":function(t,e,a){},"949b":function(t,e,a){"use strict";a("eba3")},cb99:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.efd2697a.png"},e858:function(t,e,a){},eba3:function(t,e,a){}});
//# sourceMappingURL=app.8975b7b5.js.map