(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),c=n(12),i=n(10);var d=n(15),u=n(5),m=n(6),s=n(8),p=n(7),h=n(9);function b(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"Todo List"))}var f={backgroundColor:"#333",color:"#fff",textAlign:"center"},E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,t),style:v},"X")))}}]),t}(a.Component),v={background:"#ff0000",colo:"#fff",border:"none",padding:"5px 5px",borderRadius:"50%",cursor:"pointer",float:"right"},y=E,j=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(y,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.onSubmit=function(e){e.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(e){n.setState({title:e.target.value})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add todo...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}})))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:Math.random(),title:"Take out the trash",completed:!1},{id:Math.random(),title:"Dinner with wife",completed:!1},{id:Math.random(),title:"Meeting with boss",completed:!1}]},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delTodo=function(e){n.setState({todos:Object(d.a)(n.state.todos.filter(function(t){return t.id!==e}))})},n.addTodo=function(e){var t={id:Math.random(),title:e,completed:!1};n.setState({todos:[].concat(Object(d.a)(n.state.todos),[t])})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement(O,{addTodo:this.addTodo}),o.a.createElement(j,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),t}(a.Component),k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"xD i am timer D>")}}]),t}(a.Component),C=o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(c.b,{to:"./"},"Home")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"./todo"},"Todo App")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"./timer"},"Timer")),o.a.createElement("li",null,o.a.createElement(c.b,{to:"./about"},"About"))),o.a.createElement(i.a,{exact:!0,path:"/",component:function(){return o.a.createElement("div",null,"xD")}}),o.a.createElement(i.a,{path:"/todo",component:g}),o.a.createElement(i.a,{path:"/timer",component:k}),o.a.createElement(i.a,{path:"/about",component:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is other page, come on, you know it."))}})));l.a.render(C,document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a8242e5a.chunk.js.map