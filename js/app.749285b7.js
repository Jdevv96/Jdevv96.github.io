(function(){"use strict";var e={9190:function(e,t,o){var n=o(9242),a=o(3396);function i(e,t,o,n,i,s){const c=(0,a.up)("nav-section"),r=(0,a.up)("router-view"),l=(0,a.up)("FooterSection");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c),(0,a.Wm)(r),(0,a.Wm)(l)],64)}const s={class:"nav-container"},c={class:"links-container"};function r(e,t,o,n,i,r){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",c,[(0,a.Wm)(l,{to:"/",class:"item","active-class":"active"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Wm)(l,{to:"/about",class:"item","active-class":"active"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),(0,a.Wm)(l,{to:"/projects",class:"item","active-class":"active"},{default:(0,a.w5)((()=>[(0,a.Uk)("Featured Projects")])),_:1}),(0,a.Wm)(l,{to:"/contact",class:"item","active-class":"active"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact")])),_:1})])])}var l={name:"NavSection"},d=o(89);const u=(0,d.Z)(l,[["render",r]]);var p=u;const f={class:"footer-container"},v=(0,a._)("footer",{id:"footer"},[(0,a._)("div",{id:"copyright"}," | © 2022 All rights reserved. | Josue Omar Tejada | Dev | ")],-1),m=[v];function h(e,t,o,n,i,s){return(0,a.wg)(),(0,a.iD)("div",f,m)}var g={name:"FooterSection"};const b=(0,d.Z)(g,[["render",h]]);var w=b,_={name:"App",components:{NavSection:p,FooterSection:w}};const k=(0,d.Z)(_,[["render",i]]);var y=k,j=o(2483);function S(e,t,o,n,i,s){const c=(0,a.up)("hero-section");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c)])}const D={class:"hero-container"},x={class:"middle"},W=(0,a._)("div",{class:"hero-a"},[(0,a._)("h1",{class:"hero-title"},"Josue Omar Tejada"),(0,a._)("h3",{class:"hero-description"}," Software Engineer | Full-Stack Developer ")],-1),O={class:"links"},T={class:"linkedin"},I=(0,a._)("a",{href:"https://www.linkedin.com/in/josue-o-tejada/",target:"_blank"},"Linkedin.com/in/josue-o-tejada",-1),J={class:"github"},U=(0,a._)("a",{href:"https://github.com/Jdevv96",target:"_blank"},"Github.com/Jdevv96",-1);function C(e,t,o,n,i,s){const c=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",x,[W,(0,a._)("div",O,[(0,a._)("div",T,[(0,a.Wm)(c,{icon:"fa-brands fa-linkedin",size:"xl",style:{color:"#ffffff"}}),I]),(0,a._)("div",J,[(0,a.Wm)(c,{icon:"fa-brands fa-github",size:"xl",style:{color:"#ffffff"}}),U])])])])}var M={name:"HeroSection"};const A=(0,d.Z)(M,[["render",C]]);var F=A,Z={components:{HeroSection:F}};const L=(0,d.Z)(Z,[["render",S]]);var P=L;function H(e,t,o,n,i,s){const c=(0,a.up)("about-section");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c)])}const B={class:"about-container"},z={class:"about-section"},E=(0,a._)("h2",{class:"about-heading"},"About Me",-1),G={class:"about-details"},N=(0,a._)("p",null," Hey there! My name's Josue, (pronounced ho-sway), but you can call me Omar. I'm a soon-to-be graduate from Tech Elevators Full-Stack Web Development program. ",-1),q=(0,a._)("p",null," I'm all about creating efficient and clean, user-friendly solutions and I love to collaborate with others to bring ideas to life. As a developer, I'm passionate about learning and growing to stay agile in an ever-changing digital world. I'm always eager to take on new challenges and tackle new technologies. ",-1),V=(0,a._)("a",{href:"https://www.linkedin.com/in/josue-o-tejada/",class:"page-link",target:"_blank"},"LinkedIn",-1),R=(0,a._)("p",null,"Thanks for stopping by!",-1);function $(e,t,o,n,i,s){const c=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",B,[(0,a._)("div",z,[E,(0,a._)("div",G,[N,q,(0,a._)("p",null,[(0,a.Uk)(" If you're looking for a developer that's dedicated to delivering high-quality work, please don't hesitate to get in touch via my "),V,(0,a.Uk)(" or "),(0,a.Wm)(c,{to:"/contact",class:"page-link"},{default:(0,a.w5)((()=>[(0,a.Uk)("contact form")])),_:1}),(0,a.Uk)(", and feel free to browse my portfolio of projects in the meantime. ")]),R])])])}var K={name:"AboutSection"};const Y=(0,d.Z)(K,[["render",$]]);var Q=Y,X={components:{AboutSection:Q}};const ee=(0,d.Z)(X,[["render",H]]);var te=ee;function oe(e,t,o,n,i,s){const c=(0,a.up)("projects-section");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c)])}var ne=o.p+"img/arithmetic-2.ead35440.jpg",ae=o.p+"img/productivity.a3e9d126.png";const ie={class:"projects-container"},se={class:"projects-section-body"},ce=(0,a._)("div",{class:"section-title"},[(0,a._)("h2",null,"Featured Projects"),(0,a._)("p",null,"Below are a few of the recent projects I've been working on.")],-1),re={class:"cards-section"},le={class:"card",id:"first-card"},de=(0,a.uE)('<a href="https://github.com/Jdevv96/countOnMe" target="_blank" class="card-image"><img src="'+ne+'" alt=""></a><div class="card-text"><h3 class="card-title">Count On Me</h3><p class="card-description"> A simple to use arithmetic calculator app. The app can perform basic functions like addition, subtraction, multiplication and division. Built using HTML, CSS and JavaScript. </p><p class="mobile-description"> A simple to use arithmetic calculator app. Built using HTML CSS and JavaScript. </p></div><div class="card-tech-stack"><img alt="HTML" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"><img alt="CSS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"><img alt="JavaScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></div>',3),ue={class:"view-project"},pe={href:"https://github.com/Jdevv96/countOnMe",class:"repo-link",target:"_blank"},fe={class:"source-code"},ve={href:"https://jdevv96.github.io/countOnMe/",class:"live-link",target:"_blank"},me={class:"demo"},he={class:"card",id:"second-card"},ge=(0,a.uE)('<a href="https://github.com/Jdevv96/dailyDoesIt-Tracker" class="card-image" target="_blank"><img src="'+ae+'" alt=""></a><h3 class="card-title">Daily Does It | Tracker</h3><p class="card-description"> A helpful to-do list app that allows you to add, complete and track your overall progress. The focus of this app was to explore a new framework while implementing a solution aimed toward productivity enthusiasts. Built with Vue.js. </p><p class="mobile-description"> A helpful to-do list front-end app that allows you to track and complete daily tasks. Built using Vue.js. </p><div class="card-tech-stack"><img alt="vuejs" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"></div>',5),be={class:"view-project"},we={href:"https://github.com/Jdevv96/dailyDoesIt-Tracker",class:"repo-link",target:"_blank"},_e={class:"source-code"},ke={href:"https://jdevv96.github.io/dailyDoesIt-Tracker/",class:"live-link",target:"_blank"},ye={class:"demo"},je=(0,a._)("div",{class:"view-repo"},[(0,a._)("a",{href:"https://github.com/Jdevv96?tab=repositories",target:"_blank"},[(0,a._)("button",{class:"repo"},"View My Repo")])],-1),Se=(0,a._)("p",{class:"footer-p"},[(0,a.Uk)(" Check out my Github for a full look at what I'm working on and what new technologies I'm exploring. "),(0,a._)("br"),(0,a.Uk)(" Be sure to check back often as I'm constantly taking on new challenges. ")],-1);function De(e,t,o,n,i,s){const c=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("section",se,[ce,(0,a._)("section",re,[(0,a._)("article",le,[de,(0,a._)("div",ue,[(0,a._)("a",pe,[(0,a._)("button",fe,[(0,a.Uk)(" Source Code "),(0,a.Wm)(c,{icon:"fa-solid fa-circle-arrow-right"})])]),(0,a._)("a",ve,[(0,a._)("button",me,[(0,a.Uk)(" Live Demo "),(0,a.Wm)(c,{icon:"fa-solid fa-circle-play"})])])])]),(0,a._)("article",he,[ge,(0,a._)("div",be,[(0,a._)("a",we,[(0,a._)("button",_e,[(0,a.Uk)(" Source Code "),(0,a.Wm)(c,{icon:"fa-solid fa-circle-arrow-right"})])]),(0,a._)("a",ke,[(0,a._)("button",ye,[(0,a.Uk)(" Live Demo "),(0,a.Wm)(c,{icon:"fa-solid fa-circle-play"})])])])])]),je,Se])])}var xe={name:"ProjectsSection"};const We=(0,d.Z)(xe,[["render",De]]);var Oe=We,Te={components:{ProjectsSection:Oe}};const Ie=(0,d.Z)(Te,[["render",oe]]);var Je=Ie;function Ue(e,t,o,n,i,s){const c=(0,a.up)("contact-section");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(c)])}const Ce={class:"contact-container"},Me=(0,a._)("h2",{class:"contact-heading"},"Contact Me",-1),Ae={class:"contact-section"},Fe=(0,a._)("form",{action:"https://getform.io/f/d25c15a4-217c-44cc-a345-470d535e62dc",method:"POST"},[(0,a._)("h3",null,"Get In Touch"),(0,a._)("label",{for:"name"},"Name:"),(0,a._)("input",{type:"text",name:"name",id:"name",required:""}),(0,a._)("label",{for:"email"},"Email:"),(0,a._)("input",{type:"email",name:"email",id:"email",required:""}),(0,a._)("label",{for:"message"},"Message:"),(0,a._)("textarea",{name:"message",id:"message",rows:"4"}),(0,a._)("button",{class:"send"},"Send")],-1),Ze={class:"social-links"},Le={class:"linkedin"},Pe=(0,a._)("a",{href:"https://www.linkedin.com/in/josue-o-tejada/",target:"_blank"},"Linkedin.com/in/josue-o-tejada",-1),He={class:"github"},Be=(0,a._)("a",{href:"https://github.com/Jdevv96",target:"_blank"},"Github.com/Jdevv96",-1),ze={class:"resume-pdf"},Ee=(0,a._)("a",{class:"resume",href:"https://drive.google.com/uc?export=download&id=12AgBLSD9vuuLWki0n-Tm2Cg88K_2GFh5",download:"",target:"_blank"},"Download PDF Resume ",-1);function Ge(e,t,o,n,i,s){const c=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("div",Ce,[Me,(0,a._)("div",Ae,[Fe,(0,a._)("div",Ze,[(0,a._)("div",Le,[(0,a.Wm)(c,{icon:"fa-brands fa-linkedin",size:"xl",style:{color:"#ffffff"}}),Pe]),(0,a._)("div",He,[(0,a.Wm)(c,{icon:"fa-brands fa-github",size:"xl",style:{color:"#ffffff"}}),Be]),(0,a._)("div",ze,[(0,a.Wm)(c,{icon:"fa-solid fa-file-pdf",style:{color:"#ffffff"},size:"xl"}),Ee])])])])}var Ne={name:"ContactSection"};const qe=(0,d.Z)(Ne,[["render",Ge]]);var Ve=qe,Re={components:{ContactSection:Ve}};const $e=(0,d.Z)(Re,[["render",Ue]]);var Ke=$e;const Ye=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:te},{path:"/projects",name:"projects",component:Je},{path:"/contact",name:"contact",component:Ke}],Qe=(0,j.p7)({history:(0,j.PO)(),routes:Ye});var Xe=Qe,et=o(3494),tt=o(7749),ot=o(4551),nt=o(8539);(0,n.ri)(y).use(Xe).component("font-awesome-icon",tt.GN).mount("#app"),et.vI.add(ot.zhw,ot.D9H,nt.gSj,ot.P$n,nt.swf,nt.iiS,nt.FU$)}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,i){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var c=!0,r=0;r<n.length;r++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(c=!1,i<s&&(s=i));if(c){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,s=n[0],c=n[1],r=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(r)var d=r(o)}for(t&&t(n);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(d)},n=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9190)}));n=o.O(n)})();
//# sourceMappingURL=app.749285b7.js.map