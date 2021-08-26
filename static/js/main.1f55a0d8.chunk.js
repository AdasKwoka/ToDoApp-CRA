(this["webpackJsonptodoapp-react"]=this["webpackJsonptodoapp-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(8),r=n.n(s),c=(n(14),n(6)),o=n(2),l=n(3),d=n(5),h=n(4),j=n(9),u=(n(15),n(0)),b=function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).minDate=(new Date).toISOString().slice(0,10),t.state={text:"",prioritize:!1,date:t.minDate},t.handleFormChange=function(e){"checkbox"===e.target.type?t.setState({prioritize:e.target.checked}):t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.text,i=n.prioritize,s=n.date,r=!1;a.length>2?r=t.props.addTask(a,s,i):alert("Zbyt kr\xf3tka nazwa zadania. Powinna mie\u0107 przynajmniej 3 znaki!"),r&&t.setState({text:"",prioritize:!1,date:"2021-08-17"})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=parseInt(this.minDate.slice(0,4))+1;return t+="-12-31",Object(u.jsx)("div",{className:"add-form",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsxs)("label",{htmlFor:"text",children:["Wpisz tre\u015b\u0107 zadania: ",Object(u.jsx)("input",{type:"text",id:"text",name:"text",value:this.state.text,onChange:this.handleFormChange})]}),Object(u.jsxs)("label",{htmlFor:"prioritize",children:[Object(u.jsx)("input",{type:"checkbox",name:"prioritize",id:"prioritize",checked:this.state.prioritize,onChange:this.handleFormChange})," Priorytet"]}),Object(u.jsxs)("label",{htmlFor:"date",children:["Czas wykonania zadania: ",Object(u.jsx)("input",{type:"date",name:"date",id:"date",value:this.state.date,min:this.minDate,max:t,onChange:this.handleFormChange})]}),Object(u.jsx)("button",{children:"Dodaj"})]})})}}]),n}(a.Component),k=function(t){var e=new Date(t.task.finishDate).toLocaleString();return t.task.active?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{style:t.task.important?{color:"red"}:null,children:t.task.text}),Object(u.jsxs)("span",{className:"when",children:["- do ",Object(u.jsx)("em",{children:t.task.date})]}),Object(u.jsx)("button",{className:"btnT",onClick:function(){return t.move(t.task.id)},children:"\u2713"}),Object(u.jsx)("button",{className:"btnT",onClick:function(){return t.delete(t.task.id)},children:"X"})]}):Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:t.task.text}),Object(u.jsxs)("span",{className:"deadline",children:[" (termin: ",t.task.date,")"]}),Object(u.jsx)("button",{className:"btnT doneT",onClick:function(){return t.delete(t.task.id)},children:"X"}),Object(u.jsxs)("span",{className:"dT",children:[" - wykonane w ",Object(u.jsx)("strong",{children:e})]})]})},m=(n(17),function(t){t.active.sort((function(t,e){return(t=t.text.toLowerCase())>(e=e.text.toLowerCase())?1:t<e?-1:0}));var e=t.active.map((function(e){return Object(u.jsx)(k,{task:e,delete:t.delete,move:t.move},e.id)}));return Object(u.jsxs)("div",{className:"tasks active",children:[Object(u.jsx)("h1",{children:"Zadania do wykonania"}),Object(u.jsx)("ul",{children:e})]})}),x=function(t){t.done.sort((function(t,e){return(t=t.finishDate)>(e=e.finishDate)?-1:t<e?1:0}));var e=t.done.map((function(e){return Object(u.jsx)(k,{task:e,delete:t.delete},e.id)}));return Object(u.jsxs)("div",{className:"tasks done",children:[Object(u.jsxs)("h1",{children:["Zadania wykonane (",t.done.length,")"]}),e.length>5&&Object(u.jsx)("p",{className:"message",children:"Wy\u015bwietlone zosta\u0142o tylko 5 ostatnio wykonanych zada\u0144"}),Object(u.jsx)("ul",{children:e.length>5?e.slice(0,5):e})]})},O=(n(18),function(t){Object(d.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).counter=0,t.state={tasks:[]},t.handleDeleteTask=function(e){var n=Object(c.a)(t.state.tasks);n=n.filter((function(t){return t.id!==e})),t.setState({tasks:n})},t.handleDoneTask=function(e){var n=Object(c.a)(t.state.tasks);n=n.map((function(t){return t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime()),t})),t.setState({tasks:n})},t.handleAddTask=function(e,n,a){var i={id:t.counter,text:e,date:n,important:a,finishDate:null,active:!0};return t.counter++,t.setState((function(t){return{tasks:[].concat(Object(c.a)(t.tasks),[i])}})),!0},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.tasks.filter((function(t){return t.active})),e=this.state.tasks.filter((function(t){return!t.active}));return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{addTask:this.handleAddTask}),Object(u.jsx)(m,{active:t,move:this.handleDoneTask,delete:this.handleDeleteTask}),Object(u.jsx)(x,{done:e,delete:this.handleDeleteTask})]})}}]),n}(a.Component));r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1f55a0d8.chunk.js.map