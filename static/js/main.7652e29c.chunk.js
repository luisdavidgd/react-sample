(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=a(12),i=a(11),u=(a(30),a(22)),s=a.n(u);var m=a(16),p=a(2),d=a(3),h=a(5),b=a(4),f=a(6),E=function(e){return r.a.createElement("header",{className:"App-title"},r.a.createElement("h1",null,e.title))};E.defaultProps={title:"Default App Title"};var j=E,v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",a,r.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),className:"button-success"},"Remove")))}}]),t}(n.Component),O=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return r.a.createElement(v,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:""},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(e){a.setState({title:e.target.value})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add todo...",value:this.state.title,onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}})))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:"To Do App",todos:[{id:Math.random(),title:"Take out the trash",completed:!1},{id:Math.random(),title:"Dinner with wife",completed:!1},{id:Math.random(),title:"Meeting with boss",completed:!1}]},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.delTodo=function(e){a.setState({todos:Object(m.a)(a.state.todos.filter(function(t){return t.id!==e}))})},a.addTodo=function(e){var t={id:Math.random(),title:e,completed:!1};a.setState({todos:[].concat(Object(m.a)(a.state.todos),[t])})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(j,{title:this.state.title}),r.a.createElement(k,{addTodo:this.addTodo}),r.a.createElement(O,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),t}(n.Component),C=a(10),N=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this))).state={count:e.count},a.incrementCount=a.incrementCount.bind(Object(C.a)(Object(C.a)(a))),a.decrementCount=a.decrementCount.bind(Object(C.a)(Object(C.a)(a))),a.resetCount=a.resetCount.bind(Object(C.a)(Object(C.a)(a))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"incrementCount",value:function(){this.setState(function(e){return{count:e.count+1}})}},{key:"decrementCount",value:function(){this.setState(function(e){return{count:e.count-1}})}},{key:"resetCount",value:function(){this.setState(function(){return{count:0}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,this.state.count),r.a.createElement("button",{className:"pure-button",onClick:this.incrementCount},"+"),r.a.createElement("button",{className:"pure-button",onClick:this.resetCount},"reset"),r.a.createElement("button",{className:"pure-button",onClick:this.decrementCount},"-"))}}]),t}(n.Component);N.defaultProps={count:0};var g=N,A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Clicker App"},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{title:this.state.title}),r.a.createElement(g,null))}}]),t}(n.Component),w=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Sorry, we lost this section code. xD"))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={title:"Timer App"},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{title:this.state.title}),r.a.createElement(w,null))}}]),t}(n.Component),S=r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"pure-menu pure-menu-horizontal"},r.a.createElement(l.b,{to:"./",className:"pure-menu-heading pure-menu-link"},"React JS"),r.a.createElement("ul",{className:"pure-menu-list"},r.a.createElement("li",{className:"pure-menu-item pure-menu-has-children pure-menu-allow-hover"},r.a.createElement("a",{href:"#!",id:"menuLink1",className:"pure-menu-link"},"Apps"),r.a.createElement("ul",{className:"pure-menu-children"},r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement(l.b,{to:"./todo",className:"pure-menu-link"},"To do")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement(l.b,{to:"./clicker",className:"pure-menu-link"},"Clicker")),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement(l.b,{to:"./timer",className:"pure-menu-link"},"Timer")))),r.a.createElement("li",{className:"pure-menu-item"},r.a.createElement(l.b,{to:"./about",className:"pure-menu-link"},"About")))),r.a.createElement(i.a,{exact:!0,path:"/react-sample/",component:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Home Page")))}}),r.a.createElement(i.a,{path:"/react-sample/todo",component:y}),r.a.createElement(i.a,{path:"/react-sample/clicker",component:A}),r.a.createElement(i.a,{path:"/react-sample/timer",component:T}),r.a.createElement(i.a,{path:"/react-sample/about",component:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-title"},r.a.createElement("h1",null,"About")),r.a.createElement("p",null,"This is other page, come on, you know it."))}})));o.a.render(S,document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7652e29c.chunk.js.map