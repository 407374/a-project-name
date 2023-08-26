(function(){"use strict";var e={4391:function(e,t,o){var n=o(9242),a=o(3396);function r(e,t,o,n,r,l){const i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i)}var l={created(){}},i=o(89);const u=(0,i.Z)(l,[["render",r]]);var c=u,s=o(2483);function d(e,t,o,n,r,l){const i=(0,a.up)("router-view"),u=(0,a.up)("van-tabbar-item"),c=(0,a.up)("van-tabbar");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,null,{default:(0,a.w5)((({Component:e})=>[((0,a.wg)(),(0,a.j4)(a.Ob,null,[((0,a.wg)(),(0,a.j4)((0,a.LL)(e)))],1024))])),_:1}),(0,a.Wm)(c,{modelValue:r.active,"onUpdate:modelValue":t[0]||(t[0]=e=>r.active=e),placeholder:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{icon:"home-o",to:"/home"},{default:(0,a.w5)((()=>[(0,a.Uk)("首页")])),_:1}),(0,a.Wm)(u,{icon:"setting-o",to:"/setting"},{default:(0,a.w5)((()=>[(0,a.Uk)("设置")])),_:1})])),_:1},8,["modelValue"])],64)}var m={name:"IndexView",data(){return{active:0}}};const p=(0,i.Z)(m,[["render",d]]);var f=p;function g(e,t,o,n,r,l){const i=(0,a.up)("van-nav-bar"),u=(0,a.up)("van-field"),c=(0,a.up)("van-cell-group"),s=(0,a.up)("van-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{title:"设置"}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:n.Token,"onUpdate:modelValue":t[0]||(t[0]=e=>n.Token=e),label:"Token",placeholder:"请输入Token"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem",background:"#F7F8FA"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{round:"",block:"",type:"primary",text:"更改Token",onClick:n.confirmToken},null,8,["onClick"])])),_:1}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:n.NotionToken,"onUpdate:modelValue":t[1]||(t[1]=e=>n.NotionToken=e),label:"Notion令牌",placeholder:"请输入Notion令牌",disabled:!e.$store.state.tokenAvailable},null,8,["modelValue","disabled"])])),_:1}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:n.DataSourceID,"onUpdate:modelValue":t[2]||(t[2]=e=>n.DataSourceID=e),label:"Notion页面ID",placeholder:"请输入Notion页面ID",disabled:!e.$store.state.tokenAvailable},null,8,["modelValue","disabled"])])),_:1}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem",background:"#F7F8FA"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{round:"",block:"",type:"primary",text:"更改设置",onClick:n.confirmSetting,disabled:!e.$store.state.tokenAvailable},null,8,["onClick","disabled"])])),_:1}),(0,a.Wm)(c,{inset:"",style:{"margin-top":"1rem",background:"#F7F8FA"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{round:"",block:"",type:"primary",text:"测试",onClick:n.test},null,8,["onClick"])])),_:1})])}var v=o(8677),h=o(776),k=o(4161),b={name:"SettingView",setup(){let e=(0,a.FN)(),t=(0,v.iH)(localStorage.getItem("NotionToken")),o=(0,v.iH)(localStorage.getItem("DataSourceID")),n=(0,v.iH)(localStorage.getItem("Token")),r=()=>{localStorage.setItem("Token",n.value),(0,h.NU)({type:"success",message:"设置成功"}),e.appContext.config.globalProperties.a.auth()},l=()=>{localStorage.setItem("NotionToken",t.value),localStorage.setItem("DataSourceID",o.value),(0,h.NU)({type:"success",message:"设置成功"})},i=()=>{(0,k.Z)({method:"get",url:"/test"}).then((e=>{console.log(e.data)}))};return{NotionToken:t,DataSourceID:o,Token:n,confirmToken:r,confirmSetting:l,test:i}},created(){"yes"===(0,s.yj)().params.showTip&&(console.log((0,s.yj)().params),(0,h.NU)({type:"danger",message:"Token无效,请先设置"}))}};const y=(0,i.Z)(b,[["render",g]]);var w=y,D=o(7139);function _(e,t,o,n,r,l){const i=(0,a.up)("van-nav-bar"),u=(0,a.up)("van-search"),c=(0,a.up)("van-divider"),s=(0,a.up)("van-button"),d=(0,a.up)("van-card");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{title:"首页"}),(0,a.Wm)(u,{modelValue:n.searchText,"onUpdate:modelValue":t[1]||(t[1]=e=>n.searchText=e),placeholder:"请输入搜索关键词","input-align":"center","action-text":"hah","show-action":!0,onSearch:n.onSearchText},{action:(0,a.w5)((()=>[(0,a._)("div",{onClick:t[0]||(t[0]=e=>n.onSearchText(this.searchText))},"搜索")])),_:1},8,["modelValue","onSearch"]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.goodInfos,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a.Wm)(c,{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0 16px"}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,D.zw)(e.kindName),1)])),_:2},1024),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.goodArray,((e,t)=>((0,a.wg)(),(0,a.j4)(d,{price:e.GOOD_PRICE,desc:e.GOOD_DESC,title:e.GOOD_NAME,thumb:e.GOOD_IMG,num:e.GOOD_NUM,key:t},{footer:(0,a.w5)((()=>[(0,a.Wm)(s,{size:"small",type:"primary",to:{name:"detail",params:{goodId:e.GOOD_ID}}},{default:(0,a.w5)((()=>[(0,a.Uk)("查看详情")])),_:2},1032,["to"]),(0,a.Wm)(s,{size:"small",type:"success"},{default:(0,a.w5)((()=>[(0,a.Uk)("联系购买")])),_:1})])),_:2},1032,["price","desc","title","thumb","num"])))),128))])))),128))],64)}o(7658);var T={name:"HomeView",setup(){const e=(0,s.tv)();let t=(0,v.iH)(""),o=function(e){alert(e)},n=(0,v.qj)([]),r=function(){k.Z.get("/good/infos").then((function(e){let t=e.data,o=[];for(let n of t)o[o.length-1]!=n.KIND_NAME&&o.push(n.KIND_NAME);let a=[];for(let n of o)a.push({kindName:n,goodArray:[]});let r=0;for(let n of a)for(r;r<t.length;r++){if(n.kindName!=t[r].KIND_NAME){for(let e=0;e<n.goodArray.length-1;e++)for(let t=0;t<n.goodArray.length-1-e;t++)if(n.goodArray[t].KIND_ORDER>n.goodArray[t+1].KIND_ORDER){let e=n.goodArray[t];n.goodArray[t]=n.goodArray[t+1],n.goodArray[t+1]=e}break}n.goodArray.push(t[r])}n.push(...a),console.log(n)}))},l=function(){e.push({name:"detail",state:{params:{id:123}},params:{id:456}})};return(0,a.bv)((function(){console.log("onMounted"),r()})),{searchText:t,onSearchText:o,goodInfos:n,to:l}}};const I=(0,i.Z)(T,[["render",_]]);var N=I;function O(e,t,o,n,r,l){const i=(0,a.up)("van-nav-bar");return(0,a.wg)(),(0,a.j4)(i,{title:"详情","left-text":"返回","left-arrow":"",onClickLeft:t[0]||(t[0]=t=>e.$router.back())})}var S={name:"DetailView",setup(){return(0,a.bv)((function(){console.log("参数:"+JSON.stringify((0,s.yj)().params))})),{}}};const A=(0,i.Z)(S,[["render",O]]);var W=A;const x=[{path:"/",component:f,redirect:"/home",children:[{path:"/setting",component:w},{path:"/home",component:N},{name:"detail",path:"/detail/:goodId",component:W}]}],V=(0,s.p7)({history:(0,s.r5)(),routes:x});var j=V,C=o(65),U=(0,C.MT)({state:{tokenAvailable:!0,aaa:"123"},getters:{},mutations:{},actions:{},modules:{}}),F=o(80);o(5110);const Z=(0,n.ri)(c);k.Z.interceptors.request.use((e=>(localStorage.getItem("Token")&&(e.headers.Token=localStorage.getItem("Token")),e))),Z.config.globalProperties.$axios=k.Z,Z.config.globalProperties.a={auth(){}},Z.use(F.ZPm).use(U).use(j).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,r){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],r=e[s][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(s--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[n,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,r,l=n[0],i=n[1],u=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(u)var s=u(o)}for(t&&t(n);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(s)},n=self["webpackChunkvant_app"]=self["webpackChunkvant_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4391)}));n=o.O(n)})();
//# sourceMappingURL=app.da961fc9.js.map