"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{8899:function(n,e,t){t.r(e),t.d(e,{default:function(){return rn}});var r,o,i,a,u,c,l,s,d,f,p=t(1413),h=t(2791),m=t(5984),x=t(168),v=t(612),b=v.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  padding-bottom: 24px;\n"]))),g=v.Z.form(o||(o=(0,x.Z)(["\n  padding: 10px;\n  border: 1px solid black;\n  width: 500px;\n"]))),Z=(v.Z.label(i||(i=(0,x.Z)(["\n  display: flex;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  margin-bottom: 10px;\n"]))),v.Z.button(a||(a=(0,x.Z)(["\n  margin-left: 30px;\n  display: flex;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: lightgrey;\n  :hover,\n  focus {\n    background-color: #6495ed;\n    transform: scale(1.08);\n  }\n"]))),v.Z.input(u||(u=(0,x.Z)(["\n  :focus {\n    outline: none;\n    border-radius: 3px;\n    border: 4px solid #6495ed;\n  }\n"]))),t(9040)),y=t(7957),j=t(158),k={name:"",number:""},w={name:{label:"Name contact",name:"name",type:"text",placeholder:"Name contact",required:!0},number:{label:"Phone number",name:"number",type:"tel",placeholder:"Phone number",required:!0}},C=t(3329),z=function(n){var e=n.onSubmit,t=(0,j.Z)({initialState:k,onSubmit:e}),r=t.state,o=t.handleChange,i=t.handleSubmit,a=(0,h.useMemo)((function(){return(0,m.x0)()}),[]),u=(0,h.useMemo)((function(){return(0,m.x0)()}),[]),c=r.name,l=r.number;return(0,C.jsxs)(g,{onSubmit:i,children:[(0,C.jsx)(b,{children:(0,C.jsx)(Z.Z,(0,p.Z)({id:a,value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:o},w.name))}),(0,C.jsx)(b,{children:(0,C.jsx)(Z.Z,(0,p.Z)({id:u,value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",required:!0,onChange:o},w.number))}),(0,C.jsx)(y.Z,{type:"submit",variant:"contained",size:"small",children:"Add contact"})]})},S=z;z.defaultProps={onSubmit:function(){}};v.Z.li(c||(c=(0,x.Z)(["\n  margin: 10px;\n"]))),v.Z.button(l||(l=(0,x.Z)(["\n  margin-left: 20px;\n  border: solid 1px grey;\n  border-radius: 3px;\n  background-color: lightgrey;\n  padding: 5px 10px;\n  cursor: pointer;\n  :hover,\n  focus {\n    background-color: #6495ed;\n    transform: scale(1.08);\n  }\n"])));var A=v.Z.table(s||(s=(0,x.Z)(["\n  width: 500px;\n  margin-bottom: 20px;\n  border: 15px solid #f2f8f8;\n  border-top: 5px solid #f2f8f8;\n  border-collapse: collapse;\n"]))),E=v.Z.th(d||(d=(0,x.Z)(["\n  font-weight: bold;\n  padding: 5px;\n  background: #f2f8f8;\n  border: none;\n  border-bottom: 5px solid #f2f8f8;\n  text-align: left;\n  font-weight: normal;\n"]))),N=(v.Z.td(f||(f=(0,x.Z)(["\n  padding: 5px;\n  border: none;\n  border-bottom: 5px solid #f2f8f8;\n"]))),t(7247)),q=function(n){var e=n.id,t=n.name,r=n.number,o=n.removeContact;return(0,C.jsxs)("tr",{children:[(0,C.jsx)(E,{children:t}),(0,C.jsx)(E,{children:r}),(0,C.jsx)(E,{children:(0,C.jsx)(y.Z,{variant:"contained",startIcon:(0,C.jsx)(N.Z,{}),size:"small",type:"button",onClick:function(){return o(e)},children:"Delete"})})]})},M=(0,h.memo)(q),O=function(n){var e=n.items,t=n.removeContact,r=e.map((function(n){return(0,C.jsx)(M,(0,p.Z)((0,p.Z)({},n),{},{removeContact:t}),n.id)}));return(0,C.jsxs)(A,{children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{children:"NAME"}),(0,C.jsx)("th",{children:"PHONE NUMBER"}),(0,C.jsx)("th",{})]})}),(0,C.jsx)("tbody",{children:r})]})};O.defaultProps={items:[]};var P,F,_,D,R=O,H=t(6445),I=v.Z.div(P||(P=(0,x.Z)(["\n  margin-bottom: 15px;\n"]))),L=v.Z.label(F||(F=(0,x.Z)(["\n  display: flex;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  font-size: 20px;\n  font-weight: bold;\n"]))),T=(v.Z.input(_||(_=(0,x.Z)(["\n  margin-bottom: 15px;\n  :focus {\n    outline: none;\n    border-radius: 3px;\n    border: 4px solid #6495ed;\n  }\n"]))),function(n){var e=n.value,t=n.onChange;return(0,C.jsxs)(I,{children:[(0,C.jsx)(L,{children:"Find contacts by name"}),(0,C.jsx)(Z.Z,{variant:"outlined",size:"small",type:"text",name:e,onChange:t})]})}),U=v.Z.div(D||(D=(0,x.Z)(["\n  padding: 32px;\n"]))),V=t(9434),Y=t(2984),B=t(5653),K=function(n){var e=n.contacts,t=n.filter.toLowerCase();return e.items.filter((function(n){return n.name.toLowerCase().includes(t)}))},$="NOT_FOUND";var G=function(n,e){return n===e};function J(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?G:r,i=t.maxSize,a=void 0===i?1:i,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:$},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return $}return{get:r,put:function(e,o){r(e)===$&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,c);function s(){var e=l.get(arguments);if(e===$){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function Q(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function W(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,d=void 0===s?t:s,f=Array.isArray(d)?d:[d],p=Q(r),h=n.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(f)),m=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:p,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var X=W(J),nn=function(n){var e=n.contacts;return{loading:e.loading,error:e.error}},en=X([function(n){return n.contacts.items}],(function(n){return n.length}));function tn(){var n=(0,V.v9)(K),e=(0,V.v9)(nn),t=e.loading,r=e.error,o=(0,V.v9)((function(n){return n.filter})),i=(0,V.v9)(en),a=(0,V.I0)();(0,h.useEffect)((function(){a((0,Y.yF)())}),[a]);return(0,C.jsxs)(U,{children:[(0,C.jsx)("h1",{children:"Phonebook"}),(0,C.jsx)(S,{onSubmit:function(n){var e=(0,Y.uK)(n);a(e)}}),(0,C.jsx)("h1",{children:"Contacts"}),(0,C.jsxs)("p",{children:["You have: ",i," books in our phonebook"]}),(0,C.jsx)(T,{type:"text",value:o,name:"filter",onChange:function(n){var e=n.target;console.log(e.value),a((0,B.T)(e.value))},placeholder:"filter"}),(0,C.jsx)(R,{items:n,removeContact:function(n){var e=(0,Y.zY)(n);a(e)}}),t&&(0,C.jsx)(H.Z,{}),r&&(0,C.jsx)("p",{children:"oops, something went wrong"})]})}var rn=function(){return(0,C.jsx)("div",{children:(0,C.jsx)(tn,{})})}},158:function(n,e,t){var r=t(4942),o=t(1413),i=t(885),a=t(2791);e.Z=function(n){var e=n.initialState,t=n.onSubmit,u=(0,a.useState)((0,o.Z)({},e)),c=(0,i.Z)(u,2),l=c[0],s=c[1];return{state:l,setState:s,handleChange:function(n){var e=n.target,t=e.value,i=e.name,a=e.type,u=e.checked,c="checkbox"===a?u:t;s((function(n){return(0,o.Z)((0,o.Z)({},n),{},(0,r.Z)({},i,c))}))},handleSubmit:function(n){n.preventDefault(),t((0,o.Z)({},l)),s((0,o.Z)({},e))}}}},7247:function(n,e,t){var r=t(1941);e.Z=void 0;var o=r(t(5649)),i=t(3329),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=a}}]);
//# sourceMappingURL=899.34ec45ef.chunk.js.map