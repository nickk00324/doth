(this["webpackJsonppoetry-app"]=this["webpackJsonppoetry-app"]||[]).push([[0],{23:function(e,t,i){e.exports=i(48)},28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},47:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(10),c=i.n(o),s=(i(28),i(3)),r=i(6),d=i(7),u=i(11),l=i(12),h=i(14),p=i(13),g=i(2),m=i(15),b=i(9),E=i.n(b),f=(i(29),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={onStop:this.props.onStop,onDrag:this.props.handleDrag};return a.a.createElement(E.a,Object.assign({bounds:"parent"},e),a.a.createElement("div",{textid:this.props.textId,className:"text",onDoubleClick:this.props.editText,style:{position:"absolute",top:this.props.editLocation?"".concat(this.props.editLocation.y,"px"):"0px",left:this.props.editLocation?"".concat(this.props.editLocation.x,"px"):"0px"}},this.props.children))}}]),t}(a.a.Component)),w=(i(30),function(e){return a.a.createElement("div",{className:"input",onKeyPress:function(t){13===t.which&&e.doneEditing("ADD_LINE")},style:{position:"absolute",top:"".concat(e.editLocation.y,"px"),left:"".concat(e.editLocation.x,"px")}},a.a.createElement("input",{type:"text",autoFocus:!0,defaultValue:e.editValue,className:"input-text",onChange:e.handleInput}),a.a.createElement("button",{className:"input-button add-button",onClick:function(){return e.doneEditing("ADD_LINE")}},"add"),a.a.createElement("button",{className:"input-button exit-button",onClick:function(){return e.doneEditing("EXIT")}},"exit"),a.a.createElement("button",{className:"input-button remove-button",onClick:function(){return e.doneEditing("REMOVE_LINE")}},"remove"))}),y=(i(31),function(){return"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}),x=function(e){function t(e){var i;return Object(u.a)(this,t),(i=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={lines:{},isEditing:!1,editValue:"",pendingLine:"",currentDraggedLine:"",editLocation:{x:"",y:""}},i.editLine=i.editLine.bind(Object(g.a)(i)),i.doneEditing=i.doneEditing.bind(Object(g.a)(i)),i.handleInput=i.handleInput.bind(Object(g.a)(i)),i.editText=i.editText.bind(Object(g.a)(i)),i.addLine=i.addLine.bind(Object(g.a)(i)),i.generateKey=i.generateKey.bind(Object(g.a)(i)),i.onStop=i.onStop.bind(Object(g.a)(i)),i.handleDrag=i.handleDrag.bind(Object(g.a)(i)),i}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onStop",value:function(){if(this.state.currentDraggedLine){var e=this.createText(this.state.currentDraggedLine.props.children,this.state.currentDraggedLine.key);this.setState({lines:Object(d.a)({},this.state.lines,Object(r.a)({},e.key,e)),currentDraggedLine:""})}}},{key:"handleDrag",value:function(e){this.state.currentDraggedLine||this.setState({currentDraggedLine:this.state.lines[e.target.getAttribute("textid")]})}},{key:"editLine",value:function(e){var t=this.props.pageSize,i=t.width,n=t.height;this.state.isEditing||(this.setState({isEditing:!0}),"page"===e.target.getAttribute("class")?this.setState({editLocation:{x:e.clientX-(window.innerWidth-i)/2,y:e.clientY-(window.innerHeight-n)/2}}):this.setState({editLocation:{x:e.target.getBoundingClientRect().x-(window.innerWidth-i)/2,y:e.target.getBoundingClientRect().y-(window.innerHeight-n)/2}}))}},{key:"editText",value:function(e){e.stopPropagation(),this.editLine(e);var t=this.state.lines[e.target.getAttribute("textid")];this.setState({pendingLine:t}),this.setState({lines:Object(d.a)({},this.state.lines,Object(r.a)({},e.target.getAttribute("textid"),""))}),this.setState({editValue:t.props.children})}},{key:"doneEditing",value:function(e){switch(e){case"ADD_LINE":this.addLine(this.state.editValue);break;case"EXIT":if(this.state.pendingLine){var t=this.createText(this.state.pendingLine.props.children,this.state.pendingLine.key);this.setState({lines:Object(d.a)({},this.state.lines,Object(r.a)({},this.state.pendingLine.key,t))})}this.setState({pendingLine:""});break;case"REMOVE_LINE":this.setState({lines:Object(d.a)({},this.state.lines,Object(r.a)({},this.state.pendingLine.key,""))}),this.setState({pendingLine:""})}this.setState({isEditing:!1}),this.setState({editValue:""}),this.setState({pendingLine:""})}},{key:"createText",value:function(e,t,i){var n=t||this.generateKey(),o=i||this.state.editLocation;return a.a.createElement(f,{editText:this.editText,editLocation:o,onStop:this.onStop,handleDrag:this.handleDrag,key:n,textId:n},e)}},{key:"generateKey",value:function(){return(new Date).toISOString()}},{key:"addLine",value:function(e){if(""!==e.trim()){var t=this.generateKey();this.setState({lines:Object(d.a)({},this.state.lines,Object(r.a)({},t,this.createText(e,t)))})}}},{key:"handleInput",value:function(e){this.setState({editValue:e.target.value})}},{key:"render",value:function(){var e=this.props.pageSize,t=e.width,i=e.height,n=y()?"0px":"".concat((window.innerHeight-i)/2,"px");return a.a.createElement("div",{className:"page",onDoubleClick:this.editLine,style:{marginTop:n,height:"".concat(i,"px"),width:"".concat(t,"px")}},this.props.horizontalGuides,this.props.verticalGuides,Object.values(this.state.lines),this.state.isEditing?a.a.createElement(w,{doneEditing:this.doneEditing,handleInput:this.handleInput,editValue:this.state.editValue,editLocation:this.state.editLocation}):"")}}]),t}(a.a.Component),v=i(4),S=i(5),O=function(e){return a.a.createElement(n.Fragment,null,a.a.createElement("button",{onClick:e.capturePage,className:"capture-button icon-button"},a.a.createElement("div",{className:"icon"},a.a.createElement(v.a,{icon:S.a}))))},j=function(e){var t=function(){return"horizontal"===e.orientation?a.a.createElement(v.a,{icon:S.b}):a.a.createElement(v.a,{icon:S.c})};return a.a.createElement(n.Fragment,null,e.guidesHidden?a.a.createElement("button",{className:"guide-button icon-button",onClick:function(){return e.showGuides(e.orientation)}},a.a.createElement("div",{className:"icon"},t())):a.a.createElement("button",{className:"guide-button icon-button",onClick:function(){return e.hideGuides(e.orientation)}},a.a.createElement("div",{className:"icon"},t())))},L=function(e){return a.a.createElement("button",{className:"print-button icon-button",onClick:window.print},a.a.createElement("div",{className:"icon"},a.a.createElement(v.a,{icon:S.d})))},k=(i(37),function(e){return a.a.createElement("div",{className:"settings",style:{width:"".concat(e.pageSize.width,"px")}},a.a.createElement(L,null),a.a.createElement(O,{capturePage:e.capturePage}),a.a.createElement(j,{showGuides:e.showGuides,hideGuides:e.hideGuides,guidesHidden:e.guidesHiddenVertical,orientation:"vertical"}),a.a.createElement(j,{showGuides:e.showGuides,hideGuides:e.hideGuides,guidesHidden:e.guidesHiddenHorizontal,orientation:"horizontal"}))}),N=(i(38),function(e){return"vertical"===e.orientation?a.a.createElement(E.a,{axis:"x",bounds:"parent",onStop:e.onGuideStop},e.isHidden?a.a.createElement("div",{className:"guide-vertical guide",onClick:e.selectGuide,guideid:e.guideid,style:{display:"none",height:"".concat(e.pageSize.height,"px"),left:"".concat(e.position,"px")}}):a.a.createElement("div",{className:"guide-vertical guide",onClick:e.selectGuide,guideid:e.guideid,style:{height:"".concat(e.pageSize.height,"px"),left:"".concat(e.position,"px")}})):a.a.createElement(E.a,{axis:"y",bounds:"parent",onStop:e.onGuideStop},e.isHidden?a.a.createElement("div",{className:"guide-horizontal guide",onClick:e.selectGuide,guideid:e.guideid,style:{display:"none",width:"".concat(e.pageSize.width,"px"),top:"".concat(e.position,"px")}}):a.a.createElement("div",{className:"guide-horizontal guide",onClick:e.selectGuide,guideid:e.guideid,style:{width:"".concat(e.pageSize.width,"px"),top:"".concat(e.position,"px")}}))}),z=i(8),D=i.n(z),C=i(22),G=i.n(C);i(47);D.a.setAppElement("#root");var H=function(){window.addEventListener("resize",(function(){return console.log("please don't resize the window, because that makes everything wonky")}));var e=Object(n.useState)({width:500,height:700}),t=Object(s.a)(e,2),i=t[0],o=t[1],c=Object(n.useState)([i.width/2,i.width/2]),r=Object(s.a)(c,2),d=r[0],u=r[1],l=Object(n.useState)([i.height/2,i.height/2]),h=Object(s.a)(l,2),p=h[0],g=h[1],m=function(e,t){for(var n="horizontal"===e?p:d,o=[],c=0;c<2;c++){var s=c+(new Date).toISOString();o.push(a.a.createElement(N,{pageSize:i,orientation:e,isHidden:t,key:s,guideid:s,position:n[c]}))}return o},b=Object(n.useState)(!0),E=Object(s.a)(b,2),f=E[0],w=E[1],O=Object(n.useState)(!0),j=Object(s.a)(O,2),L=j[0],z=j[1],C=Object(n.useState)(m("horizontal",!0)),H=Object(s.a)(C,2),I=H[0],T=H[1],V=Object(n.useState)(m("vertical",!0)),A=Object(s.a)(V,2),R=A[0],W=A[1],B=Object(n.useState)(!1),K=Object(s.a)(B,2),P=K[0],_=K[1],q=Object(n.useState)(""),F=Object(s.a)(q,2),M=F[0],X=F[1],J=function(){_(!1)};function U(e){var t=document.querySelectorAll(".guide-".concat(e)),n=[];"horizontal"===e?(t.forEach((function(e){n.push(e.getBoundingClientRect().y-(window.innerHeight-i.height)/2)})),g(n)):(t.forEach((function(e){n.push(e.getBoundingClientRect().x-(window.innerWidth-i.width)/2)})),u(n))}a.a.useEffect((function(){if(y()){var e=document.querySelector(".settings").offsetHeight;o({width:window.innerWidth,height:window.innerHeight-e-30}),D.a.defaultStyles.overlay.width="".concat(window.innerWidth,"px"),D.a.defaultStyles.overlay.height="".concat(window.innerHeight,"px")}}),[]);var Y=y()?{content:{width:"".concat(i.width-50,"px"),height:"".concat(i.height-70,"px"),margin:"0 auto",padding:"0",position:"fixed"}}:{content:{width:"".concat(i.width,"px"),height:"".concat(i.height,"px"),margin:"40px auto",padding:"0"}};return D.a.defaultStyles.overlay.backgroundColor="pink",a.a.createElement(n.Fragment,null,a.a.createElement(D.a,{isOpen:P,onRequestClose:J,transparent:!0,style:Y,portalClassName:"modal"},a.a.createElement("button",{className:"icon-button modal-close",onClick:J},a.a.createElement(v.a,{icon:S.e})),y()?a.a.createElement("img",{className:"capture-img",src:M,width:"".concat(i.width-100,"px"),alt:"your poem silly!"}):a.a.createElement("img",{className:"capture-img",src:M,height:"".concat(i.height,"px"),width:"".concat(i.width,"px"),alt:"your poem silly!"})),a.a.createElement(x,{pageSize:i,horizontalGuides:I,verticalGuides:R}),a.a.createElement(k,{pageSize:i,showGuides:function(e){"horizontal"===e?(T(m(e,!1)),w(!1)):(W(m(e,!1)),z(!1))},hideGuides:function(e){"horizontal"===e?(T(m(e,!0)),w(!0),U(e)):(W(m(e,!0)),z(!0),U(e))},guidesHiddenHorizontal:f,guidesHiddenVertical:L,capturePage:function(){G()(document.querySelector(".page"),{scale:4}).then((function(e){X(e.toDataURL())})),_(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.75c44061.chunk.js.map