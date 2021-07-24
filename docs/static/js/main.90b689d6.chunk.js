(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var i,c=n(1),o=n.n(c),r=n(9),s=n.n(r),u=(n(16),n(3)),l=n(8),a=n(2),h=Object(c.createContext)(null),b=n(6),j=n(10),d=function(){function t(e){Object(b.a)(this,t),this.ctx=void 0,this.objects=void 0,this.ctx=e,this.objects=[]}return Object(j.a)(t,[{key:"addObject",value:function(t){var e=this.objects.findIndex((function(e){return e.id===t.id}));-1===e?this.objects.push(t):this.objects[e]=t,this.draw()}},{key:"onEvent",value:function(t){var e=this;return function(n){for(var i=n.nativeEvent,c=i.offsetX,o=i.offsetY,r=0;r<e.objects.length;r++){var s=e.objects[r],u=s.events[t];if(s.path&&u){var l=e.ctx.isPointInPath(s.path,c,o),a=e.ctx.isPointInStroke(s.path,c,o);(l||a)&&u({id:s.id,type:s.type,eventType:t,event:n})}}}}},{key:"draw",value:function(){this.clear();for(var t=0;t<this.objects.length;t++){var e=this.objects[t];this.resetStyle(),e.draw(this.ctx)}}},{key:"resetStyle",value:function(){this.ctx.strokeStyle="#000",this.ctx.fillStyle="#000",this.ctx.lineCap="butt",this.ctx.lineDashOffset=0,this.ctx.lineJoin="miter",this.ctx.lineWidth=1,this.ctx.miterLimit=10}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}}]),t}(),f=n(0),v=function(t){var e=t.children,n=Object(c.useRef)(null),i=Object(c.useState)(null),o=Object(a.a)(i,2),r=o[0],s=o[1],u=Object(c.useMemo)((function(){return null!==r?new d(r):null}),[r]);return Object(c.useEffect)((function(){if(n.current){var t=n.current.getContext("2d");if(t){var e=n.current.getBoundingClientRect();n.current.width=e.width,n.current.height=e.height,s(t)}}}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("canvas",{ref:n,style:{width:"100%",height:"100%"},onClick:null===u||void 0===u?void 0:u.onEvent("onClick"),onContextMenu:null===u||void 0===u?void 0:u.onEvent("onContextMenu"),onDoubleClick:null===u||void 0===u?void 0:u.onEvent("onDoubleClick"),onMouseDown:null===u||void 0===u?void 0:u.onEvent("onMouseDown"),onMouseMove:null===u||void 0===u?void 0:u.onEvent("onMouseMove"),onMouseUp:null===u||void 0===u?void 0:u.onEvent("onMouseUp"),onPointerDown:null===u||void 0===u?void 0:u.onEvent("onPointerDown"),children:"\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442<canvas> \u044d\u043b\u0435\u043c\u0435\u043d\u0442."}),r?Object(f.jsx)(h.Provider,{value:u,children:e}):null]})},O=n(11);!function(t){t.TEXT="TEXT",t.ARC="ARC",t.RECT="RECT",t.LINE="LINE"}(i||(i={}));var x=function t(e,n,i,c,o,r){Object(b.a)(this,t),this.id=void 0,this.type=void 0,this.draw=void 0,this.path=void 0,this.events=void 0,this.params=void 0,this.id=e,this.type=n,this.draw=i,this.path=c,this.events=o,this.params=r};var g=function(t){var e=t.x,n=t.y,o=t.width,r=t.height,s=t.stroke,u=t.fill,l=Object(c.useContext)(h),a=Object(c.useRef)(Object(O.a)()),b=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&"on"===n.slice(0,2)&&(e[n]=t[n]);return e}(t);return Object(c.useEffect)((function(){var t=new Path2D,c={x:e,y:n,width:o,height:r,stroke:s,fill:u},h=new x(a.current,i.RECT,(function(i){t.rect(e,n,o,r),u&&(i.fillStyle=u,i.fill(t)),s&&(i.strokeStyle=s,i.stroke(t))}),t,b,c);l.addObject(h)}),[b,u,r,l,s,o,e,n]),null},y=function(t){var e=t.label,n=t.type,i=t.value,c=t.onChange;return Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{children:e}),Object(f.jsx)("input",{type:n,value:i,onChange:function(t){return c(t.target.value)}})]})},p={x:0,y:0,width:100,height:100,stroke:"",fill:"#004cff"};function m(t,e){switch(e.type){case"setParams":return Object(u.a)(Object(u.a)({},t),e.payload);default:throw new Error}}var C=function(t){var e=t.onAddRect,n=t.onHide,i=Object(c.useReducer)(m,p),o=Object(a.a)(i,2),r=o[0],s=o[1],l=function(t){return s({type:"setParams",payload:Object(u.a)(Object(u.a)({},r),t)})};return Object(f.jsx)("div",{className:"create-rect",onClick:n,children:Object(f.jsxs)("div",{className:"create-rect-modal",onClick:function(t){return t.stopPropagation()},children:[Object(f.jsx)("h6",{children:"Set Rect Params"}),Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r),n()},children:[Object(f.jsx)(y,{label:"x",type:"number",value:String(r.x),onChange:function(t){return l({x:Number(t)})}}),Object(f.jsx)(y,{label:"y",type:"number",value:String(r.y),onChange:function(t){return l({y:Number(t)})}}),Object(f.jsx)(y,{label:"width",type:"number",value:String(r.width),onChange:function(t){return l({width:Number(t)})}}),Object(f.jsx)(y,{label:"height",type:"number",value:String(r.height),onChange:function(t){return l({height:Number(t)})}}),Object(f.jsx)(y,{label:"stroke",type:"color",value:String(r.stroke),onChange:function(t){return l({stroke:t})}}),Object(f.jsx)(y,{label:"fill",type:"color",value:String(r.fill),onChange:function(t){return l({fill:t})}}),Object(f.jsx)("button",{type:"submit",children:"Add Rect"})]})]})})},w=function(t){var e=t.object,n=t.onModifyObject;return Object(f.jsxs)("div",{className:"controls",children:[Object(f.jsx)("h5",{children:"Controls"}),Object(f.jsxs)("form",{className:"controls-form",children:[Object(f.jsx)(y,{label:"x",type:"number",value:String(e.x),onChange:function(t){return n({x:Number(t)})}}),Object(f.jsx)(y,{label:"y",type:"number",value:String(e.y),onChange:function(t){return n({y:Number(t)})}}),Object(f.jsx)(y,{label:"width",type:"number",value:String(e.width),onChange:function(t){return n({width:Number(t)})}}),Object(f.jsx)(y,{label:"height",type:"number",value:String(e.height),onChange:function(t){return n({height:Number(t)})}}),Object(f.jsx)(y,{label:"stroke",type:"color",value:e.stroke,onChange:function(t){return n({stroke:t})}}),Object(f.jsx)(y,{label:"fill",type:"color",value:e.fill,onChange:function(t){return n({fill:t})}})]})]})},k=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)(),r=Object(a.a)(o,2),s=r[0],h=r[1],b=Object(c.useState)(!1),j=Object(a.a)(b,2),d=j[0],O=j[1];return Object(c.useEffect)((function(){d&&h(void 0)}),[d]),Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)("h1",{children:"React-Canva"}),Object(f.jsx)("button",{onClick:function(){return O(!0)},children:"Add Rect"}),d&&Object(f.jsx)(C,{onAddRect:function(t){i([].concat(Object(l.a)(n),[t]))},onHide:function(){return O(!1)}}),void 0!==s&&Object(f.jsx)(w,{object:n[s],onModifyObject:function(t){if(void 0!==s){var e=Object(l.a)(n),c=e[s];e[s]=Object(u.a)(Object(u.a)({},c),t),i(e)}}}),Object(f.jsx)("div",{className:"canvas",children:Object(f.jsx)(v,{children:n.map((function(t,e){return Object(f.jsx)(g,{x:t.x,y:t.y,width:t.width,height:t.height,onClick:function(t){return function(t,e){h(t),console.log(e)}(e,t)},fill:t.fill,stroke:s===e?"#ff0015":""})}))})})]})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),c(t),o(t),r(t)}))};s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.90b689d6.chunk.js.map