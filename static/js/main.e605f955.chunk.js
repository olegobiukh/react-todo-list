(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n(1),c=n(3),r=n(4),l=n(7),i=n(5),d=n(8),u=n(0),s=n.n(u),m=n(6),h=n.n(m),f=function(e){var t=e.newItemText,n=e.onNewItemTextChange,a=e.onItemAdded;return s.a.createElement(s.a.Fragment,null,s.a.createElement("input",{type:"text",className:"Todo__input",value:t,onChange:function(e){n(e.target.value)},defaultChecked:!0}),s.a.createElement("button",{className:"Todo__add-button btn",onClick:function(){return a()}},"Add"))},I=function(e){var t=e.todos,n=e.filterValue,a=e.onChange,o=e.archiveItems,c=function(e,t){return"all"===t?e:"active"===t?e.filter(function(e){return!1===e.done}):"completed"===t?e.filter(function(e){return e.done}):void 0}(t,n),r="archived"===n?o:c||t;return s.a.createElement("div",{className:"Todo__list"},r.map(function(e){return s.a.createElement("label",{key:e.id,className:e.done?"Todo__Item-checked checkbox-custom-label":"checkbox-custom-label"},s.a.createElement("input",{className:"checkbox-custom",type:"checkbox",checked:e.done,onChange:function(){return a(e.id)}}),s.a.createElement("span",{className:"check"}),e.text)}))},v=function(e){var t=e.changeFIlter,n=e.onCleanArchived;return s.a.createElement("div",null,s.a.createElement("button",{className:"Todo__all-button btn",onClick:function(){return t("all")}},"All"),s.a.createElement("button",{className:"Todo__active-button btn",onClick:function(){return t("active")}},"Active"),s.a.createElement("button",{className:"Todo__completed-button btn",onClick:function(){return t("completed")}},"Completed"),s.a.createElement("button",{className:"Todo__archived-button btn",onClick:function(){return t("archived")}},"Archived"),s.a.createElement("button",{className:"Todo__clean-button btn",onClick:function(){return n()}},"Clean archived"))},b=function(e){var t=e.todos,n=e.newItemText,a=e.onItemSelected,o=e.onItemAdded,c=e.onNewItemTextChange,r=e.onItemsArchive,l=e.onCleanArchived,i=(e.uniqueId,e.changeFIlter),d=e.filterValue,u=e.filterItems,m=e.archiveItems;return s.a.createElement("div",{className:"Todo"},s.a.createElement("div",{className:"Todo-center"},s.a.createElement("h2",{className:"Todo__title"},"My Todo"),s.a.createElement("button",{className:"Todo__archive-button btn",onClick:function(){return r()}},"Archive")),s.a.createElement(I,{todos:t,archiveItems:m,filterValue:d,onChange:function(e){a(e)},filterItems:u}),s.a.createElement("div",{className:"Todo-center"},s.a.createElement(f,{newItemText:n,onNewItemTextChange:c,onItemAdded:o}),s.a.createElement(v,{changeFIlter:i,onCleanArchived:l}),s.a.createElement("p",{className:"Todo__items-left"},t.filter(function(e){return!1===e.done}).length," has left")))},T=(n(16),function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,d=new Array(r),u=0;u<r;u++)d[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(d)))).state={todos:[],archiveItems:[],newItemText:"",uniqueId:0,filterValue:""},n.findWithProp=function(e,t,n){for(var a=0;a<e.length;a+=1)if(e[a][t]===n)return a;return-1},n.handleItemSelection=function(e){var t=Object(o.a)(n.state.todos),c=n.findWithProp(t,"id",+e),r=n.state.todos[c].done;t[c]=Object(a.a)({},t[c],{done:!r}),n.setState({todos:t})},n.handleItemAdded=function(){var e=n.state,t=e.uniqueId,a=e.newItemText;if(t+=Math.floor(100*Math.random()),a){var c={id:t,text:a,done:!1};n.setState(function(e){var n=e.todos;return{todos:[].concat(Object(o.a)(n),[c]),newItemText:"",uniqueId:t}})}},n.handleNewItemTextChange=function(e){n.setState({newItemText:e})},n.handleItemsArchive=function(){var e=n.state.todos,t=e.filter(function(e){return!0===e.done}),a=e.filter(function(e){return!1===e.done});n.setState(function(e){var n=e.archiveItems;return{todos:a,archiveItems:[].concat(Object(o.a)(n),Object(o.a)(t))}})},n.handleFIlterChange=function(e){n.setState({filterValue:e})},n.handleCleanArchive=function(){n.setState({archiveItems:[]})},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.uniqueId,n=e.todos,a=e.archiveItems,o=e.newItemText,c=e.filterValue;return s.a.createElement("div",{className:"App"},s.a.createElement(b,{todos:n,archiveItems:a,newItemText:o,onItemSelected:this.handleItemSelection,onItemAdded:this.handleItemAdded,onNewItemTextChange:this.handleNewItemTextChange,onItemsArchive:this.handleItemsArchive,onCleanArchived:this.handleCleanArchive,uniqueId:t,changeFIlter:this.handleFIlterChange,filterValue:c,filterItems:this.handleFilterItems}))}}]),t}(s.a.Component)),C=document.getElementById("root");h.a.render(s.a.createElement(T,null),C)}},[[10,1,2]]]);
//# sourceMappingURL=main.e605f955.chunk.js.map