(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={input:"filter_input__FPiZc"}},14:function(t,e,n){t.exports={section:"Phonebook_section__1hWtq"}},16:function(t,e,n){t.exports=n(23)},23:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),l=n(15),i=n(1),u=n(2),s=n(4),m=n(3),h=n(6),d=n.n(h),p=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return c.a.createElement("ul",{className:d.a.list},e.map((function(t){var e=t.id,a=t.name,r=t.number;return c.a.createElement("li",{className:d.a.items,key:e},a," : ",r,c.a.createElement("button",{className:d.a.button,type:"button",id:e,onClick:function(t){return n(t.target.id)}},"Delete"))})))}}]),n}(a.Component),b=n(11),f=n.n(b);function v(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{className:f.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}}))}var g=n(12),E=n(5),C=n.n(E),_=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(g.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(t.props.addContact(t.state.name,t.state.number),t.setState({name:"",number:""}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C.a.form,onSubmit:this.handleSubmit},c.a.createElement("label",null,"Name ",c.a.createElement("input",{className:C.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Enter name"})),c.a.createElement("br",null),c.a.createElement("label",null,"Number ",c.a.createElement("input",{className:C.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,placeholder:"Enter number"})),c.a.createElement("br",null),c.a.createElement("button",{className:C.a.button,type:"submit"},"Add contact"))}}]),n}(a.Component),y=n(13),O=n(14),j=n.n(O),S=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={name:e,number:n,id:Object(y.v4)()};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[a])}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleDelete=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return c.a.createElement("div",{className:j.a.section},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(_,{addContact:this.addContact,contacts:e}),c.a.createElement("h2",null,"Contacts"),e.length>1&&c.a.createElement(v,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&c.a.createElement(p,{deleteContact:this.handleDelete,contacts:e}))}}]),n}(a.Component);function k(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null))}o.a.render(c.a.createElement(a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))},5:function(t,e,n){t.exports={input:"contactForm_input__1feaQ",button:"contactForm_button__3tlHR",form:"contactForm_form__26RF_"}},6:function(t,e,n){t.exports={list:"contactList_list__3RoUO",items:"contactList_items__3A7xB",button:"contactList_button__3m33Z"}}},[[16,1,2]]]);
//# sourceMappingURL=main.28706d7a.chunk.js.map