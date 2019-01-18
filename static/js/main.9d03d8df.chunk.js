(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{245:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(35),r=n.n(o),l=(n(46),n(48),n(250)),u=n(251),s=n(252),i=n(249),m=n(247),E="/",f="/react-hooks/",h="/react-hooks/useState/",b=function(){return c.a.createElement("div",{className:"App-header"},c.a.createElement("button",{className:"button"},c.a.createElement(m.a,{to:h},"UseState")))},d=n(6),p=n(36),k=n(8),j=n(7),v=n(9),N=n(5),O=n(248),S=n(40),w=function(t){var e=Object(a.useState)(!0),n=Object(N.a)(e,2),o=n[0],r=n[1],l=Object(a.useState)(),u=Object(N.a)(l,2),s=u[0],i=u[1];return Object(a.useEffect)(function(){var e;o&&(fetch((e=t.filePath,"https://raw.githubusercontent.com/cbrannen9a/react-hooks/master/src/components/"+e)).then(function(t){if(!t.ok)throw new Error(t.statusText);return t.text()}).then(function(t){i(t)}).catch(function(t){i(t.toString())}),r(!1))}),o?c.a.createElement("div",null,"Loading..."):c.a.createElement("div",null,c.a.createElement(O.a,{language:"javascript",style:S.tomorrow,customStyle:{borderRadius:"10px",padding:"1.5em"}},s))},C=function(){var t=Object(a.useState)(0),e=Object(N.a)(t,2),n=e[0],o=e[1];return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"UseState"),c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("button",{className:"button",onClick:function(){return o(n+1)}},"Click me"))},g=function(t){var e=Object(a.useState)(t.count),n=Object(N.a)(e,2),o=n[0],r=n[1];return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"UseState with props"),c.a.createElement("p",null,"You clicked ",o," times"),c.a.createElement("button",{className:"button",onClick:function(){return r(o+1)}},"Click me"))},x=function(){var t=Object(a.useState)(0),e=Object(N.a)(t,2),n=e[0],o=e[1];return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"UseState with function"),c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("button",{className:"button",onClick:function(){o(n+2*(n+1))}},"Click me"))},y=function(){var t=Object(a.useState)(0),e=Object(N.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(1),l=Object(N.a)(r,2),u=l[0],s=l[1],i={"+":function(){o(n+u)},"*":function(){o(n*u)},"-":function(){o(n-u)},"/":function(){o(n/u)}};return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"UseState with multiple functions"),c.a.createElement("p",null,"You clicked ",n," times"),[1,2,3,4,5,6,7,8,9,"\ud83e\udd84"].map(function(t){return c.a.createElement("button",{className:"button",key:t,onClick:function(){return s("\ud83e\udd84"===(e=t)?Math.round(1e3*Math.random(),0):e);var e}},t)}),c.a.createElement("div",null,["+","*","-","/"].map(function(t){return c.a.createElement("button",{className:"button",key:t,onClick:function(){return i[t]()}},t,u)})),c.a.createElement("button",{className:"button",onClick:function(){return o(0)}},"Reset"))},H=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(k.a)(this,Object(j.a)(e).call(this,t))).render=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"WithState"),c.a.createElement("p",null,"You clicked ",n.state.count," times"),c.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:n.state.count+1})}},"Click me"))},n.state={count:0},n}return Object(v.a)(e,t),e}(a.Component),P=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(k.a)(this,Object(j.a)(e).call(this,t))).render=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"WithState from props"),c.a.createElement("p",null,"You clicked ",n.state.count," times"),c.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:n.state.count+1})}},"Click me"))},n.state={count:n.props.count},n}return Object(v.a)(e,t),e}(a.Component),B=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(k.a)(this,Object(j.a)(e).call(this,t))).updateCount=function(){var t=2*(n.state.count+1);n.setState({count:n.state.count+t})},n.render=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"WithState with function"),c.a.createElement("p",null,"You clicked ",n.state.count," times"),c.a.createElement("button",{className:"button",onClick:function(){return n.updateCount()}},"Click me"))},n.state={count:0},n}return Object(v.a)(e,t),e}(a.Component),W=function(t){function e(t){var n;return Object(d.a)(this,e),(n=Object(k.a)(this,Object(j.a)(e).call(this,t))).updateFactor=function(t){return"\ud83e\udd84"===t?n.setState({factor:Math.round(1e3*Math.random(),0)}):n.setState({factor:t})},n.updateCount=function(t){return{"+":function(){n.setState({count:n.state.count+n.state.factor})},"*":function(){n.setState({count:n.state.count*n.state.factor})},"-":function(){n.setState({count:n.state.count-n.state.factor})},"/":function(){n.setState({count:n.state.count/n.state.factor})}}[t]()},n.render=function(){return c.a.createElement("div",{className:"content"},c.a.createElement("h4",null,"WithState from props"),c.a.createElement("p",null,"You clicked ",n.state.count," times"),[1,2,3,4,5,6,7,8,9,"\ud83e\udd84"].map(function(t){return c.a.createElement("button",{className:"button",key:t,onClick:function(){return n.updateFactor(t)}},t)}),c.a.createElement("div",null,["+","*","-","/"].map(function(t){return c.a.createElement("button",{className:"button",key:t,onClick:function(){return n.updateCount(t)}},t,n.state.factor)})),c.a.createElement("button",{className:"button",onClick:function(){return n.setState({count:0})}},"Reset"))},n.state={count:0,factor:1},n}return Object(v.a)(e,t),e}(a.Component),Y=function(t){function e(){return Object(d.a)(this,e),Object(k.a)(this,Object(j.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App-header"},c.a.createElement("button",{className:"button"},c.a.createElement(m.a,{to:f},"Back")),c.a.createElement("div",{className:"contentBox"},c.a.createElement("h3",{className:"content"},"With Hooks"),c.a.createElement("h3",{className:"content"},"Without Hooks")),c.a.createElement("div",{className:"contentBox"},c.a.createElement(C,null),c.a.createElement(H,null)),c.a.createElement("div",null,c.a.createElement(w,{filePath:"withHooks/useState.js"}),c.a.createElement(w,{filePath:"withoutHooks/withState.js"})),c.a.createElement("div",{className:"contentBox"},c.a.createElement(g,{count:100}),c.a.createElement(P,{count:100})),c.a.createElement("div",null,c.a.createElement(w,{filePath:"withHooks/useState.2.js"}),c.a.createElement(w,{filePath:"withoutHooks/withState.2.js"})),c.a.createElement("div",{className:"contentBox"},c.a.createElement(x,null),c.a.createElement(B,null)),c.a.createElement("div",null,c.a.createElement(w,{filePath:"withHooks/useState.3.js"}),c.a.createElement(w,{filePath:"withoutHooks/withState.3.js"})),c.a.createElement("div",{className:"contentBox"},c.a.createElement(y,null),c.a.createElement(W,null)),c.a.createElement("div",null,c.a.createElement(w,{filePath:"withHooks/useState.4.js"}),c.a.createElement(w,{filePath:"withoutHooks/withState.4.js"})))}}]),e}(a.Component),U=function(){return c.a.createElement("div",{className:"App-header"},c.a.createElement("h1",{className:"NotFound-title"},"Oops! Page not found"),c.a.createElement("button",{className:"button"},c.a.createElement(m.a,{to:f,className:"NotFound-link"},"Go to home page")))},A=function(){return c.a.createElement(l.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(u.a,null,c.a.createElement(s.a,{exact:!0,path:f,component:b}),c.a.createElement(s.a,{exact:!0,path:h,component:Y}),c.a.createElement(s.a,{component:U}),c.a.createElement(i.a,{from:E,to:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},41:function(t,e,n){t.exports=n(245)},46:function(t,e,n){},48:function(t,e,n){}},[[41,2,1]]]);
//# sourceMappingURL=main.9d03d8df.chunk.js.map