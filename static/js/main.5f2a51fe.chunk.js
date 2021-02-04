(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},111:function(e,t,a){},347:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a(86),n=a.n(s),i=(a(108),a(90)),r=a(8),o=a(87),l=a(88),j=a(93),h=a(92),b=(a(109),a(3));var m=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"project",children:[Object(b.jsx)("img",{src:e.imgSrc,alt:e.imgAlt}),Object(b.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[Object(b.jsxs)("div",{className:"project-overlay",children:[Object(b.jsx)("div",{className:"overlay"}),Object(b.jsxs)("div",{className:"project-info",children:[Object(b.jsx)("h1",{className:"project-title",children:e.projectName}),Object(b.jsx)("h2",{className:"project-description",children:e.projectDescription})]})]}),e.language?Object(b.jsx)("figure",{className:"language-figure",children:e.language}):Object(b.jsx)(b.Fragment,{})]})]})})};a(111);var p,d=function(e){return Object(b.jsxs)("div",{className:"tool",children:[Object(b.jsx)("div",{className:"progress-bar-fill",style:{width:e.width}}),Object(b.jsx)("div",{className:"progress-bar",children:Object(b.jsx)("p",{children:"".concat(e.progress,"%")})}),Object(b.jsx)("div",{className:"language",children:e.language})]})},g=a(89),u=a.n(g),x=a(2),O=a(94),f=a(48),v=a.n(f),N=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).frontPageTimeline=new x.d,c}return Object(l.a)(a,[{key:"componentDidMount",value:function(){O.a.to(document.querySelector(".home"),0,{css:{visibility:"visible"}}),p=new v.a.Controller;var e=this.fontPageContent.querySelector("h1"),t=this.fontPageContent.querySelector("h3"),a=this.fontPageContent.querySelector("a"),c=this.about.querySelector(".about");this.frontPageTimeline.from(e,1.3,{x:-1300,ease:x.b.easeInOut}).from(t,{x:-1300,ease:x.b.easeInOut},1).from(a,{x:-1300,ease:x.b.easeInOut},1.3).from(this.navbar,{y:100,ease:x.b.easeInOut},1.4),console.log(c),new v.a.Scene({triggerElement:c,duration:"100%",triggerHook:.5}).setTween(c,{color:"red"}).addTo(p)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"home-page",ref:function(t){return e.home=t},children:[Object(b.jsxs)("div",{className:"front-page",id:"font-page",children:[Object(b.jsxs)("div",{className:"font-page-content",ref:function(t){return e.fontPageContent=t},children:[Object(b.jsxs)("h1",{children:["Hello, I'm ",Object(b.jsx)("span",{children:"Chase Burr"})]}),Object(b.jsx)("h3",{children:"I'm a Software Engineer"}),Object(b.jsx)("a",{href:"#portfolio",children:Object(b.jsxs)("button",{className:"btn btn-primary",children:["View My Work"," ",Object(b.jsx)("i",{className:"fas fa-arrow-down"})]})})]}),Object(b.jsx)("div",{className:"particles",children:Object(b.jsx)(u.a,{})}),Object(b.jsxs)("div",{className:"navbar",ref:function(t){return e.navbar=t},children:[Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#font-page",className:"home active",children:"home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"about",href:"#about",children:"about"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"portfolio",href:"#portfolio",children:"portfolio"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-contact",href:"#contact",children:"contact"})})]}),Object(b.jsxs)("div",{className:"social-links",children:[Object(b.jsx)("a",{href:"https://github.com/chaseburr",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-github github"})}),Object(b.jsx)("a",{href:"https://linkedin.com/in/chaseburr",target:"_blank",children:Object(b.jsx)("i",{className:"fab fa-linkedin linkedin"})})]})]})]}),Object(b.jsxs)("div",{className:"about-section",id:"about",ref:function(t){return e.about=t},children:[Object(b.jsx)("h1",{className:"section-header",children:"ABOUT"}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile-description",children:[Object(b.jsx)("h3",{align:"center",children:"Who's this guy?"}),Object(b.jsxs)("p",{align:"center",children:["Engaged, creative Computer Science graduate from"," ",Object(b.jsx)("b",{children:"Weber State University"}),"seeking to improve skills as a software engineer. Strong foundation in Object Oriented programming and troubleshooting. Quick learner and ability to adapt to new languages. I may not have much experience job wise, but I will dedicate a lot of time learning and adapting to new environments."]})]}),Object(b.jsxs)("ul",{className:"tools",children:[Object(b.jsx)(d,{progress:"95",width:"450px",language:"html"}),Object(b.jsx)(d,{progress:"80",width:"400px",language:"css"}),Object(b.jsx)(d,{progress:"85",width:"425px",language:"javascript"}),Object(b.jsx)(d,{progress:"70",width:"350px",language:"C++"}),Object(b.jsx)(d,{progress:"70",width:"350px",language:"C#"}),Object(b.jsx)(d,{progress:"85",width:"425px",language:"Python"}),Object(b.jsx)(d,{progress:"50",width:"250px",language:"Java"})]})]})]}),Object(b.jsxs)("div",{className:"project-section",id:"portfolio",children:[Object(b.jsx)("h1",{className:"section-header",children:"PROJECTS"}),Object(b.jsxs)("div",{className:"project-list",children:[Object(b.jsx)(m,{imgSrc:"/images/Netflix-Clone.png",link:"https://chaseburr.github.io/Netflix-Clone/",projectName:"Netflix Clone",projectDescription:"A Netflix clone made with ReactJS",language:"ReactJS"}),Object(b.jsx)(m,{imgSrc:"/images/Hulu-Clone.png",link:"https://chaseburr.github.io/Hulu-Clone/",projectName:"Hulu Clone",projectDescription:"A Hulu clone made with ReactJS",language:"ReactJS"}),Object(b.jsx)(m,{imgSrc:"/images/Entertainment-App.png",link:"https://chaseburr.github.io/Entertainment-App/",projectName:"Entertainment App",projectDescription:"A project that uses's themoviedb.org API",language:"ReactJS"}),Object(b.jsx)(m,{imgSrc:"/images/Athletic-Shop.png",link:"https://chaseburr.github.io/Athletic-Shop/",projectName:"Athletic Store",projectDescription:"An athletic store that is meant to demonstrate my ability of ReactJS",language:"ReactJS"}),Object(b.jsx)(m,{imgSrc:"/images/giphy.png",link:"https://chaseburr.github.io/giphy-search/",projectName:"Giphy",projectDescription:"A simple Giphy project using Giphy's API",language:"JavaScripts"}),Object(b.jsx)(m,{imgSrc:"/images/gameoflife.png",link:"https://github.com/ChaseBurr/CS3750AS3",projectName:"Conway's Game of Life",projectDescription:"Conway's game of life recreated in C# and JavaScript",language:"C# / JavaScript"})]})]}),Object(b.jsx)("div",{className:"contact",id:"contact",children:Object(b.jsxs)("form",{action:"",className:"contact-form",children:[Object(b.jsx)("h1",{children:"Contact Me"}),Object(b.jsx)("input",{placeholder:"Name",name:"name",type:"text"}),Object(b.jsx)("input",{placeholder:"Email",name:"email",type:"email"}),Object(b.jsx)("input",{placeholder:"Message",name:"message",type:"text"}),Object(b.jsx)("button",{className:"btn",children:"Submit"})]})})]})}}]),a}(c.Component);var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsx)(r.c,{children:Object(b.jsx)(r.a,{exact:!0,path:"/",component:N})})})})};n.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}},[[347,1,2]]]);
//# sourceMappingURL=main.5f2a51fe.chunk.js.map