(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),i=n.n(r),c=(n(14),n(1)),u=n(2),o=n(4),s=n(3),p=n(5),h=(n(16),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",null,"TODO LIST")}}]),t}(a.Component)),d=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).state={inputText:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onChangeText",value:function(e){var t=e.target.value;this.setState({inputText:t})}},{key:"onClickAdd",value:function(){var e=this.state.inputText;0!==e.trim().length&&(this.setState({inputText:""}),this.props.onAdd(e.trim()))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("input",{type:"text",id:"js-inputTask",onChange:function(t){return e.onChangeText(t)},placeholder:"\u30bf\u30b9\u30af\u3092\u5165\u529b\u3057\u3066\u306d"}),l.a.createElement("button",{onClick:function(t){return e.onClickAdd(t)}},"\u8ffd\u52a0"))}}]),t}(a.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.taskList.filter(function(t){switch(e.props.filterType){case"completed":return!0===t.completed;case"active":return!1===t.completed;default:return!0}}).map(function(t){var n=!0===t.completed?l.a.createElement("del",null,t.label):l.a.createElement("span",null,t.label);return l.a.createElement("li",{key:t.key},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(n){return e.props.onChangeItem(t.key)}}),n))});return l.a.createElement("ul",{className:"App-todolist"},t)}}]),t}(a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("input",{type:"radio",value:"all",onChange:function(t){return e.props.handleFilterChange(t.target.value)},checked:"all"===this.props.filterType}),"\u5168\u3066"),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",value:"active",onChange:function(t){return e.props.handleFilterChange(t.target.value)},checked:"active"===this.props.filterType}),"\u672a\u5b8c\u4e86\u306e\u307f"),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",value:"completed",onChange:function(t){return e.props.handleFilterChange(t.target.value)},checked:"completed"===this.props.filterType}),"\u5b8c\u4e86\u306e\u307f"))}}]),t}(a.Component),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(s.a)(t).call(this))).state={taskList:[],filterType:"all"},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleAddClick",value:function(e){var t=this.state.taskList.concat(),n=document.getElementById("js-inputTask");t.push({key:Date.now(),completed:!1,label:e}),this.setState({taskList:t}),n.value=""}},{key:"handleListChange",value:function(e){for(var t=this.state.taskList.concat(),n=0;n<t.length;n++)t[n].key===e&&(t[n].completed=!t[n].completed);this.setState({taskList:t})}},{key:"handleFilterChange",value:function(e){this.setState({filterType:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(d,{onAdd:function(t){return e.handleAddClick(t)}}),l.a.createElement(m,{taskList:this.state.taskList,onChangeItem:function(t){return e.handleListChange(t)},filterType:this.state.filterType}),l.a.createElement(f,{handleFilterChange:function(t){return e.handleFilterChange(t)},filterType:this.state.filterType}))}}]),t}(a.Component);i.a.render(l.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.d4521d0d.chunk.js.map