(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},37:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=t(14),l=t(3),i=t(2),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d).then(function(e){return e.data})},f=function(e,n){return m.a.post(d,e).catch(function(e){return n("".concat(JSON.stringify(e.response.data.error))),setTimeout(function(){n(null)},5e3),"Error handled"}).then(function(e){return e.data})},h=function(e,n,t){return m.a.put("".concat(d,"/").concat(e),n).catch(function(e){return t("the information of '".concat(n.name,"' was already deleted from the server")),setTimeout(function(){t(null)},3e3),"Error handled"}).then(function(e){return e.data})},b=function(e,n,t){if(window.confirm("Delete ".concat(n,"?")))return m.a.delete("".concat(d,"/").concat(e)).then(function(e){return e.data}).then(t)},p=function(e){var n=e.persons,t=e.updatePersonsFromDb,a=e.newFilterString;return n.map(function(e,n){return e.name.toLowerCase().includes(a.toLowerCase())?r.a.createElement("p",{key:n},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return b(e.id,e.name,t)}},"Delete")):""})},w=function(e){var n=e.newFilterString,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with:  ",r.a.createElement("input",{value:n,onChange:t}))},E=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNumber,o=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),d=i[0],b=i[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),C=v[0],O=v[1],j=Object(a.useState)(""),N=Object(l.a)(j,2),S=N[0],k=N[1],y=Object(a.useState)(null),F=Object(l.a)(y,2),D=F[0],P=F[1];Object(a.useEffect)(function(){m.a.get("/api/persons").then(function(e){u(e.data)})},[]);var T=function(){s().then(function(e){u(e)})};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(function(e){var n=e.message;return null===n?null:n.includes("already deleted")?r.a.createElement("div",{className:"error-red"},n):r.a.createElement("div",{className:"error-green"},n)},{message:D}),r.a.createElement(w,{newFilterString:S,handleFilterChange:function(e){k(e.target.value)}}),r.a.createElement("h3",null,"Add a new..."),r.a.createElement(E,{addPerson:function(e){if(e.preventDefault(),"undefined"!=typeof t.find(function(e){return e.name===d}))if(window.confirm("".concat(d," already exists in the phonebook. Replace old number with new number?"))){var n=t.find(function(e){return e.name===d}).id;h(n,{name:d,number:C},P).then(T),P("".concat(d," was updated in the phonebook")),setTimeout(function(){P(null)},3e3)}else console.log("Cancelled");else u([].concat(Object(c.a)(t),[{name:d,number:C}]),P),f({name:d,number:C},P).then(T),P("".concat(d," was added to the phonebook")),setTimeout(function(){P(null)},3e3)},newName:d,handleNameChange:function(e){b(e.target.value)},newNumber:C,handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(p,{persons:t,updatePersonsFromDb:T,newFilterString:S}))};t(37);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.c7fc2654.chunk.js.map