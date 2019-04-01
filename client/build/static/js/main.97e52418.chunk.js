(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{269:function(e,t,a){e.exports=a(549)},548:function(e,t,a){},549:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(50),l=a.n(o),c=a(24),i=a(62),s=a(240),u=a(21),p=a(22),m=a(26),h=a(23),f=a(25),d=a(75),E=a(63),b=a(559),C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(b.a,{stackable:!0},r.a.createElement(d.b,{to:"/"},r.a.createElement(b.a.Item,{name:"Color Pic",active:"Color Pic"===e,onClick:this.handleItemClick},"Color Pic")),r.a.createElement(d.b,{to:"/MyPallettes"},r.a.createElement(b.a.Item,{name:"My Palettes",active:"My Palettes"===e,onClick:this.handleItemClick},"My Palettes")),r.a.createElement(d.b,{to:"/About"},r.a.createElement(b.a.Item,{name:"About",active:"About"===e,onClick:this.handleItemClick},"About")))}}]),t}(n.Component),O=a(562),v=function(){return r.a.createElement(O.a,{as:"h1",className:"header"},"Choose a picture and analyze")},y=(a(378),new(a(397).App)({apiKey:"bd8644854b19417dacdfa3adba21aab1"}));function I(e){return"#"===e.charAt(0)?e.substring(1,7):e}function g(e){return e=parseInt(e,10),isNaN(e)?"00":(e=Math.max(0,Math.min(e,255)),"0123456789ABCDEF".charAt((e-e%16)/16)+"0123456789ABCDEF".charAt(e%16))}var j=function(e){return function(t){y.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then(function(e){var a=[];e.outputs[0].data.colors.map(function(e){return a.push(e.raw_hex.slice(1,e.raw_hex.length))}),fetch("/api/colormind?colors="+a).then(function(e){return e.json()}).then(function(e){for(var a,n,r,o=[],l=e,c=0;c<l.length;c++)o.push({hexColor:(a=l[c][0],n=l[c][1],r=l[c][2],"#"+g(a)+g(n)+g(r)),alpha:1});t({type:"ANALYZE_IMAGE",payload:o})})}).catch(function(e){console.log(e),t({type:"ANALYZE_IMAGE_ERROR",error:e.data.status.details})})}},N=function(e,t){return function(a){var n=parseInt(I(e).substring(0,2),16),r=function(e){return parseInt(I(e).substring(2,4),16)}(e),o=function(e){return parseInt(I(e).substring(4,6),16)}(e);a({type:"SEND_COLOR_INFO",hexColor:e,R:n,G:r,B:o,alpha:t})}},k=function(){return function(e){e({type:"CLEAR_RECIEVED",status:""})}},x=function(){return function(e){e({type:"CLEAR_POSITION_INFO",position:0})}},R=function(){return function(e){e({type:"CLEAR_COLORS",colors:[]})}},A=function(e){return function(t){t({type:"SELECTED_COLOR",selectedColor:e})}},_=function(e){return function(t){t({type:"UPDATE_HEX_COLOR",newColorSet:e})}},S=function(e){return{type:"MAIN_IMAGE",url:e}},L=a(563),P=a(555),w=a(560),D=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.clearRecieved(),this.props.clearColorList(),this.props.analyzeImage(this.props.url)}},{key:"componentDidUpdate",value:function(e){if(this.props.url!==e.url&&(this.props.clearColorList(),this.props.analyzeImage(this.props.url)),"recieved"===this.props.status){var t=this.props.colors[0].hexColor,a=this.props.position;this.handleOnClickSquare(t,a,1),this.props.clearRecieved()}}},{key:"handleOnClickSquare",value:function(e,t,a){this.props.sendSelectedColor(e),this.props.sendColorInfo(e,a),this.props.sendPositionInfo(t)}},{key:"renderColor",value:function(e,t){return{backgroundColor:e,opacity:t}}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"colorsRender",value:function(){var e=this;return this.props.colors.length>=1?this.props.colors.map(function(t,a){return r.a.createElement("div",{key:t.hexColor,className:"color-square-container"},r.a.createElement("div",{className:"color-square",style:e.renderColor(t.hexColor,t.alpha),onClick:function(){return e.handleOnClickSquare(t.hexColor,a,t.alpha)}}),r.a.createElement("div",{style:e.renderCarot(a),className:"carot-container"},r.a.createElement("i",{className:"fas fa-caret-up fa-3x"})))}):r.a.createElement("div",{className:"color-loader"},r.a.createElement(L.a,{active:!0,inverted:!0},r.a.createElement(P.a,{size:"big",inverted:!0},"Loading Colors")))}},{key:"render",value:function(){return r.a.createElement(w.a.Column,{width:16},this.colorsRender())}}]),t}(n.Component),M=Object(c.b)(function(e){return{colors:e.colors.colors,selectedColor:e.colorInfo.selectedColor,position:e.colorInfo.position,url:e.url.url,error:e.error,status:e.colors.status}},{analyzeImage:j,sendColorInfo:N,sendPositionInfo:function(e){return function(t){t({type:"SEND_POSITION_INFO",position:e})}},sendSelectedColor:A,clearRecieved:k,clearColorList:R})(D),B=a(259),G=Object(c.b)(function(e){return{url:e.url.url}})(function(e){var t=e.url;return r.a.createElement(w.a.Column,{mobile:16,computer:13},r.a.createElement(B.a,{className:"sample-img",src:t,alt:"analyze main"}))}),H=a(248),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={input:""},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"submitURL",value:function(e){e.preventDefault(),console.log(this.state.input),this.props.analyzeImage(this.state.input),this.props.changeMainImage(this.state.input),this.props.addImageSelection(this.state.input),this.setState({input:""})}},{key:"render",value:function(){var e=this;return r.a.createElement(H.a,{trigger:r.a.createElement("button",{className:"modal-btn"}," Try Your Own Image "),modal:!0,closeOnDocumentClick:!0},function(t){return r.a.createElement("div",null,r.a.createElement("h3",null,"Try your own image"),r.a.createElement("form",null,r.a.createElement("div",{className:"ui action input"},r.a.createElement("input",{className:"url-input",type:"text",onChange:function(t){return e.setState({input:t.target.value})},value:e.state.input,placeholder:"Copy and paste Url..."}),r.a.createElement("button",{onClick:function(a){e.submitURL(a),t()},className:"ui button"},"Submit"))))})}}]),t}(n.Component),q=Object(c.b)(null,{analyzeImage:j,changeMainImage:S,addImageSelection:function(e){return{type:"ADD_URL",url:e}}})(U),z=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearRecieved(),this.props.clearPosition(),this.props.changeMainImage(e)}},{key:"renderBorder",value:function(e){return this.props.url===e?{border:"3px solid #0000CC",opacity:1}:null}},{key:"renderImages",value:function(){var e=this;return this.props.exampleUrl.map(function(t){return r.a.createElement("div",{className:"image-wrapper",key:t},r.a.createElement("img",{className:"image-selection",src:t,alt:"selection",style:e.renderBorder(t),onClick:function(){return e.handleClick(t)}}),r.a.createElement("div",{className:"circle"},r.a.createElement("i",{id:"delete-img",className:"fas fa-times-circle"})))})}},{key:"render",value:function(){return r.a.createElement(w.a.Column,{mobile:16,computer:3},r.a.createElement("div",{className:"image-modal-container"},r.a.createElement("div",{className:"images-container"},this.renderImages()),r.a.createElement("div",{className:"modal-container"},r.a.createElement(q,null))))}}]),t}(n.Component),T=Object(c.b)(function(e){return{url:e.url.url,exampleUrl:e.url.exampleImages}},{changeMainImage:S,clearRecieved:k,clearPosition:x,analyzeImage:j})(z),F=a(161),J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){var n=a.props.colors,r={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};n[a.props.position]=r,a.props.updateHexColor(n),a.props.sendColorInfo(e.hex.toUpperCase()),a.props.sendSelectedColor(e.hex.toUpperCase()),a.props.sendAlphaInfo(e.rgb.a)},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"renderColorPicker",value:function(){return this.props.colors.length>=1?r.a.createElement("div",{className:"color-picker"},r.a.createElement(F.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.colors[this.props.position].alpha},onChange:this.handleChange})):r.a.createElement(F.ChromePicker,{className:"color-picker"})}},{key:"render",value:function(){return r.a.createElement(w.a.Column,{mobile:16,computer:10},this.renderColorPicker())}}]),t}(n.Component),Y=Object(c.b)(function(e){return console.log(e),{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:_,sendColorInfo:N,sendSelectedColor:A,sendAlphaInfo:function(e){return function(t){t({type:"SEND_ALPHA_INFO",alpha:e})}}})(J),Q=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"color-info"},r.a.createElement("h5",null,"Hex"),r.a.createElement("input",{className:"hex-info-input",value:this.props.hexColor}),r.a.createElement("p",{className:"info-text"},"R"),r.a.createElement("p",{className:"info-text"},"G"),r.a.createElement("p",{className:"info-text"},"B"),r.a.createElement("p",{className:"info-text"},"a"),r.a.createElement("div",null,r.a.createElement("input",{className:"info-input",value:this.props.R}),r.a.createElement("input",{className:"info-input",value:this.props.G}),r.a.createElement("input",{className:"info-input",value:this.props.B}),r.a.createElement("input",{className:"info-input",value:this.props.a})))}}]),t}(n.Component),W=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:_})(Q),Z=a(550),V=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearColorList(),this.props.clearRecieved(),this.props.clearPosition(),this.props.analyzeImage(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(Z.a,{className:"regen-btn",content:"Regenerate",onClick:function(){return e.handleClick(e.props.url)}})}}]),t}(n.Component),X=Object(c.b)(function(e){return{url:e.url.url}},{analyzeImage:j,clearRecieved:k,clearPosition:x,clearColorList:R})(V),K=a(558),$=a(556),ee=a(65),te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"handleInput",value:function(e){console.log(e.target.value),this.setState({input:e.target.value})}},{key:"colorsRender",value:function(){return this.props.colors.map(function(e,t){return r.a.createElement("div",{key:e.hexColor,className:"color-square-container"},r.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}),r.a.createElement("p",null,e.hexColor))})}},{key:"render",value:function(){var e=this;return r.a.createElement(K.a,{trigger:r.a.createElement(Z.a,null,"Save Palette"),closeIcon:!0},r.a.createElement(K.a.Content,null,r.a.createElement(O.a,{as:"h2"},"Save Palette"),r.a.createElement($.a,{label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"Insert Palette Name"}),r.a.createElement("div",null,this.colorsRender())),r.a.createElement(K.a.Actions,null,r.a.createElement(Z.a,{color:"green"},r.a.createElement(ee.a,{name:"checkmark"})," Save")))}}]),t}(n.Component),ae=Object(c.b)(function(e){return{colors:e.colors.colors}},{})(te),ne=function(e){e.url;return r.a.createElement("div",{className:"footer"},"\xa9 2019")},re=a(557),oe=function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(re.a,{textAlign:"center"},r.a.createElement(v,null),r.a.createElement(w.a,{celled:!0},r.a.createElement(w.a.Row,null,r.a.createElement(T,null),r.a.createElement(G,null))),r.a.createElement(w.a,{celled:!0},r.a.createElement(w.a.Row,null,r.a.createElement(M,null))),r.a.createElement(w.a,{celled:!0},r.a.createElement(w.a.Row,null,r.a.createElement(Y,null),r.a.createElement(w.a.Column,{mobile:16,computer:6},r.a.createElement(W,null),r.a.createElement("div",{className:"regen-save-buttons"},r.a.createElement(X,null),r.a.createElement(ae,null))))),r.a.createElement(ne,null)))},le=function(){return r.a.createElement(O.a,{as:"h1",className:"header"},"My Color Pallettes")},ce=function(){return r.a.createElement(O.a,{as:"h1",className:"header"},"About this App")},ie=(a(548),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(C,null),r.a.createElement(E.a,{path:"/",exact:!0,component:oe}),r.a.createElement(E.a,{path:"/MyPallettes",component:le}),r.a.createElement(E.a,{path:"/About",component:ce})))}}]),t}(n.Component)),se=a(28),ue={colors:[],status:""},pe={url:"https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",exampleImages:["https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]},me={hexColor:"",R:"",G:"",B:"",alpha:"",position:0,selectedColor:""},he=Object(i.c)({colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE":return Object(se.a)({},e,{colors:t.payload,status:"recieved"});case"CLEAR_RECIEVED":return Object(se.a)({},e,{status:t.status});case"CLEAR_COLORS":return Object(se.a)({},e,{colors:t.colors});case"UPDATE_HEX_COLOR":return Object(se.a)({},e,{colors:function(e,t){return e.map(function(e,a){return a!==t.index?e:Object(se.a)({},e,t.item)})}(e.colors,t.newColorSet)});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE_ERROR":return t.error;default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_IMAGE":return Object(se.a)({},e,{url:t.url});case"RANDOM_IMAGE":return Object(se.a)({},e,{url:t.url,random_url:t.url});case"ADD_URL":return Object(se.a)({},e,{exampleImages:e.exampleImages.concat(t.url)});default:return e}},colorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_COLOR_INFO":return Object(se.a)({},e,{hexColor:t.hexColor,R:t.R,G:t.G,B:t.B,alpha:t.alpha});case"SEND_POSITION_INFO":case"CLEAR_POSITION_INFO":return Object(se.a)({},e,{position:t.position});case"SEND_ALPHA_INFO":return Object(se.a)({},e,{alpha:t.alpha});case"SELECTED_COLOR":return Object(se.a)({},e,{selectedColor:t.selectedColor});default:return e}}}),fe=Object(i.d)(he,Object(i.a)(s.a));l.a.render(r.a.createElement(c.a,{store:fe},r.a.createElement(ie,null)),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.97e52418.chunk.js.map