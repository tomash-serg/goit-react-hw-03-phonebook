(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{190:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(72),c=n.n(o),i=(n(83),n(8)),s=n(2),l=n(3),u=n(6),d=n(7),g=n(9);var b=Object(g.a)("div",{target:"e1wohsxh0"})({name:"g46w8s",styles:"margin-bottom:30px"}),h=n(1),j=function(t){var e=t.children,n=t.addFindFilterValue;return Object(h.jsxs)(b,{children:[Object(h.jsx)("h3",{children:"Find contact by name"}),Object(h.jsx)("input",{type:"text",onChange:n}),e]})},m=n(48),p=n(25),x=(n(185),p.object().shape({name:p.string().min(2,"\u0418\u043c\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435").max(20,"\u0418\u043c\u044f \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"),tel:p.string().phone("",!1,"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430").required()})),f=n(19),O=n(193),v=n(26);var y=Object(g.a)("div",{target:"ew247sc0"})({name:"1hurozw",styles:"display:flex;justify-content:center;align-items:center;padding:5px 10px;background-color:tomato;position:absolute;top:30px;left:0;color:#fff;border-radius:2px;box-shadow:0px 0px 5px 3px #ff0000"}),k=function(t){var e=t.errors,n=t.touched,a=t.children;return Object(h.jsxs)(f.b,{children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsx)(f.a,{id:"name",name:"name",placeholder:"Enter name"}),n.name&&e.name&&Object(h.jsx)(y,{children:e.name}),Object(h.jsx)("label",{htmlFor:"tel",children:"Phone"}),Object(h.jsx)(f.a,{id:"tel",name:"tel",placeholder:"Enter phone number"}),n.tel&&e.tel&&Object(h.jsx)(y,{style:{left:"238px"},children:e.tel}),Object(h.jsx)("button",{type:"submit",children:"add"}),a]})},S={width:"30px",height:"30px"},C=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={toggleButton:!1},t.toggleForm=function(){t.setState((function(t){return{toggleButton:!t.toggleButton}}))},t.onSubmitForm=function(e,n){var a=Object(O.a)();t.props.submit(Object(m.a)(Object(m.a)({},e),{},{id:a})),n.resetForm()},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",onClick:this.toggleForm,children:this.state.toggleButton?Object(h.jsx)(v.c,{style:S}):Object(h.jsx)(v.b,{style:S})}),this.state.toggleButton&&Object(h.jsx)(f.c,{initialValues:{name:"",tel:""},onSubmit:this.onSubmitForm,validationSchema:x,children:function(e){var n=e.errors,a=e.touched;return Object(h.jsx)(k,{errors:n,touched:a,children:t.state.toggleButton&&t.props.children})}})]})}}]),n}(a.Component);var w=Object(g.a)("button",{target:"ernn8bc0"})({name:"h215zd",styles:"display:flex;align-items:center;justify-content:center;border-radius:50%;border:none;outline:none;padding:8px"}),F={width:"20px",height:"20px"},B=function(t){var e=t.contacts,n=t.onDeleteClick,a=t.noContactsMessage;return Object(h.jsx)(h.Fragment,{children:e.length?e.map((function(t){return Object(h.jsxs)("li",{children:[t.name," : ",t.tel,Object(h.jsx)(w,{type:"button","data-id":t.id,onClick:n,"aria-label":"delete contact",children:Object(h.jsx)(v.a,{style:F})})]},t.id)})):a})};B.defaultProps={noContactsMessage:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u043f\u0443\u0441\u0442\u0430!"};var M=B,D=function(t){var e=setTimeout((function(){t.state.toggleMessage&&t.setState({toggleMessage:!1}),clearTimeout(e)}),2e3)},V=n(78),E=n.n(V),J=function(t,e){var n=!0;return e.forEach((function(e){e.name===t&&(n=!n)})),n},L=function(t,e){return(null===t||void 0===t?void 0:t.length)>(null===e||void 0===e?void 0:e.length)?"\u0412 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043c\u0435\u043d\u0438":"\u0412\u044b \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430"};var q=Object(g.a)("div",{target:"e1yrkwg00"})({name:"cl37f4",styles:"box-sizing:border-box;padding:20px 30px;width:1200px;background:rgb(34, 193, 195);background:linear-gradient(\n    0deg,\n    rgba(34, 193, 195, 1) 0%,\n    rgba(123, 90, 149, 1) 100%\n  );form{display:inline-block;margin-right:40px;position:relative;margin-bottom:30px;}&>button{margin-bottom:30px;display:flex;align-items:center;justify-content:center;border-radius:50%;padding:0px;border:none;outline:none;}margin:0 auto;h1{margin-bottom:30px;}h2{margin-bottom:20px;}h3{margin-bottom:20px;}input{margin-right:10px;}label{margin-right:10px;}"});var z=Object(g.a)("ul",{target:"e11x55aq0"})({name:"wcji64",styles:"width:400px;li{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;}"}),I=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:"",toggleSort:!1,toggleMessage:!1},t.getContact=function(e){t.setState((function(t){var n=t.contacts,a=t.toggleMessage;return J(e.name,n)?{contacts:[].concat(Object(i.a)(n),[e])}:{toggleMessage:!a}}))},t.onDeleteBtnClick=function(e){var n=e.currentTarget.dataset.id;t.setState((function(t){var e=t.contacts.filter((function(t){return t.id!==n}));return{contacts:Object(i.a)(e)}}))},t.onSortBtnClick=function(){t.setState((function(t){var e=E()(t.contacts,"name",{reverse:t.toggleSort});return{contacts:Object(i.a)(e),toggleSort:!t.toggleSort}}))},t.addFindFilterValue=function(e){var n=e.target.value.toLowerCase();t.setState({filter:n})},t.getFilterdContactList=function(){var e=t.state,n=e.filter,a=e.contacts;if(n)return a.filter((function(t){return t.name.toLowerCase().includes(n)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("state"));t&&this.setState({contacts:Object(i.a)(t)})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;e.contacts.length!==n.length&&localStorage.setItem("state",JSON.stringify(n)),D(this)}},{key:"render",value:function(){var t=this.state,e=t.toggleMessage,n=t.contacts,a=this.getFilterdContactList(),r=L(n,a);return Object(h.jsxs)(q,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(C,{submit:this.getContact,children:e&&Object(h.jsx)(y,{children:"\u0422\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"})}),Object(h.jsx)("h2",{children:"contacts"}),Object(h.jsx)(j,{addFindFilterValue:this.addFindFilterValue,children:Object(h.jsx)("button",{type:"button",onClick:this.onSortBtnClick,children:"sort contact"})}),Object(h.jsx)(z,{children:Object(h.jsx)(M,{contacts:a||n,onDeleteClick:this.onDeleteBtnClick,noContactsMessage:r})})]})}}]),n}(a.Component),N=function(){return Object(h.jsx)(I,{})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))},83:function(t,e,n){}},[[190,1,2]]]);
//# sourceMappingURL=main.d7b2a791.chunk.js.map