(this.webpackJsonpgit_react=this.webpackJsonpgit_react||[]).push([[0],{19:function(e,a,t){e.exports=t(30)},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(11),l=t(0),r=t.n(l),c=t(12),s=t.n(c),o=(t(24),t(1)),m=t(2),i=t(4),u=t(3),h=t(5),E=t(13),p=t.n(E),d=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,l=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"\u30d7\u30ed\u30b0\u30e9\u30de\u30fc",e,"\u3067\u3059\u3002"),r.a.createElement("h3",null,"I'm a ",n," based ",r.a.createElement("span",null,a),". ",t,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},l))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(l.Component),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{data:this.state.resumeData.main}))}}]),a}(r.a.Component),b=t(6),v=t(14),N=t.n(v);function j(){var e=Object(n.a)(["\n",";\nbody{\n    background-color:#ecf0f1;\n}"]);return j=function(){return e},e}var g=Object(b.createGlobalStyle)(j(),N.a);s.a.render(r.a.createElement(l.Fragment,null,r.a.createElement(g,null),r.a.createElement(f,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad6eba0a.chunk.js.map