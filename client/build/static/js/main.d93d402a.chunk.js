(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{272:function(e,t,a){e.exports=a(550)},549:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(77),l=a.n(o),c=a(23),i=a(66),s=a(247),u=a(17),p=a(18),h=a(21),m=a(19),d=a(20),f=a(36),C=a(67),E=a(568),b=a(567),O=a(561),g=a(566),y=a(556),v=a(70),I=function(){return"undefined"===typeof window?E.a.onlyTablet.minWidth:window.innerWidth},k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSidebarHide=function(){return a.setState({sidebarOpened:!1})},a.handleToggle=function(){return a.setState({sidebarOpened:!0})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return r.a.createElement(E.a,{as:b.a.Pushable,getWidth:I,maxWidth:E.a.onlyMobile.maxWidth},r.a.createElement(b.a,{as:O.a,animation:"push",onHide:this.handleSidebarHide,vertical:!0,visible:t},r.a.createElement(f.b,{to:"/"},r.a.createElement(O.a.Item,{as:"a"},"Color Pic")),r.a.createElement(f.b,{to:"/Generate"},r.a.createElement(O.a.Item,{as:"a"},"Generate")),r.a.createElement(f.b,{to:"/MyPallettes"},r.a.createElement(O.a.Item,{as:"a"},"My Palettes")),r.a.createElement(O.a.Item,{as:"a"},"Log In"),r.a.createElement(O.a.Item,{as:"a"},"Sign Up")),r.a.createElement(b.a.Pusher,{dimmed:t},r.a.createElement(g.a,{textAlign:"center",style:{minHeight:225,padding:"1em 0em"},vertical:!0},r.a.createElement(y.a,null,r.a.createElement(O.a,{pointing:!0,secondary:!0,size:"large"},r.a.createElement(O.a.Item,{onClick:this.handleToggle},r.a.createElement(v.a,{name:"sidebar"}))))),e))}}]),t}(n.Component),j=a(557),S=a(170),x=function(){return"undefined"===typeof window?E.a.onlyTablet.minWidth:window.innerWidth},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.hideFixedMenu=function(){return a.setState({fixed:!1})},a.showFixedMenu=function(){return a.setState({fixed:!0})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement(E.a,{getWidth:x,minWidth:E.a.onlyTablet.minWidth},r.a.createElement(j.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement(g.a,{textAlign:"center",style:{minHeight:80,padding:"1em 0em"},vertical:!0},r.a.createElement(O.a,{size:"large"},r.a.createElement(y.a,null,r.a.createElement(f.b,{to:"/"},r.a.createElement(O.a.Item,{as:"a"},"Color Pic")),r.a.createElement(f.b,{to:"/Generate"},r.a.createElement(O.a.Item,{as:"a"},"Generate")),r.a.createElement(f.b,{to:"/MyPallettes"},r.a.createElement(O.a.Item,{as:"a"},"My Palettes")),r.a.createElement(O.a.Item,{position:"right"},r.a.createElement(S.a,{as:"a"},"Log in"),r.a.createElement(S.a,{as:"a",style:{marginLeft:"0.5em"}},"Sign Up")))))),e)}}]),t}(n.Component),R=function(e){var t=e.children;return r.a.createElement("div",{className:"header-menu"},r.a.createElement(N,null,t),r.a.createElement(k,null,t))},A=a(564),_=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(y.a,null,r.a.createElement(A.a,null,"Color Pic App")))},D=a(562),P=a(69),w=a.n(P),L=function(){return function(e){w.a.get("/api/colors").then(function(t){return e({type:"GET_COLORS",payload:t.data})}).catch(function(e){return console.log(e)})}},M=a(558),G=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.show=function(){a.setState({open:!0})},a.handleConfirm=function(){a.props.deleteColorPalette(a.props.objectID),a.setState({open:!1})},a.handleCancel=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"confirm-delete-modal"},r.a.createElement(v.a,{size:"large",onClick:this.show,name:"trash alternate"}),r.a.createElement(M.a,{open:this.state.open,content:"Are you sure you want to delete ".concat(this.props.title," palette?"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,size:"small"}))}}]),t}(n.Component),U=Object(c.b)(function(e){return{deleteColor:e.myPalettes.DeleteColor}},{deleteColorPalette:function(e){return function(t){w.a.delete("/api/colors/".concat(e)).then(function(a){return t({type:"DELETE_COLORS",payload:e})}).catch(function(e){return console.log(e)})}}})(G),B=a(95),T=a(124),q=a(559),F=new(a(514).App)({apiKey:"bd8644854b19417dacdfa3adba21aab1"});function z(e){return"#"===e.charAt(0)?e.substring(1,7):e}function H(e){return e=parseInt(e,10),isNaN(e)?"00":(e=Math.max(0,Math.min(e,255)),"0123456789ABCDEF".charAt((e-e%16)/16)+"0123456789ABCDEF".charAt(e%16))}var W=function(e){return function(t){F.models.predict("eeed0b6733a644cea07cf4c60f87ebb7",e).then(function(e){var a=[];e.outputs[0].data.colors.map(function(e){return a.push(e.raw_hex.slice(1,e.raw_hex.length))}),fetch("/api/colormind?colors="+a).then(function(e){return e.json()}).then(function(e){for(var a,n,r,o=[],l=e,c=0;c<l.length;c++)o.push({hexColor:(a=l[c][0],n=l[c][1],r=l[c][2],"#"+H(a)+H(n)+H(r)),alpha:1});t({type:"ANALYZE_IMAGE",payload:o,status:"recieved",error:!1,open:!1,loader:"hide"})})}).catch(function(e){console.log(e),t({type:"ANALYZE_IMAGE_ERROR",errorData:e.data.status.details,error:!0,open:!0,loader:"hide"})})}},J=function(e,t){return function(a){var n=parseInt(z(e).substring(0,2),16),r=function(e){return parseInt(z(e).substring(2,4),16)}(e),o=function(e){return parseInt(z(e).substring(4,6),16)}(e);a({type:"SEND_COLOR_INFO",hexColor:e,R:n,G:r,B:o,alpha:t})}},Q=function(){return function(e){e({type:"CLEAR_RECIEVED",status:""})}},Y=function(e){return function(t){t({type:"SEND_POSITION_INFO",position:e})}},Z=function(){return function(e){e({type:"CLEAR_POSITION_INFO",position:0})}},V=function(){return function(e){e({type:"CLEAR_COLORS",colors:[]})}},X=function(e){return function(t){t({type:"SELECTED_COLOR",selectedColor:e})}},K=function(e){return function(t){t({type:"SEND_ALPHA_INFO",alpha:e})}},$=function(e){return{type:"MAIN_IMAGE",url:e}},ee=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value)}},{key:"render",value:function(){var e=this,t=this.props,a=t.hexInput,n=t.R,o=t.G,l=t.B,c=t.alpha;return r.a.createElement("div",{className:"color-info"},r.a.createElement("h5",null,"Hex"),r.a.createElement("input",{className:"hex-info-input",value:a,onChange:function(t){return e.props.hexColorOnChange(t)}}),r.a.createElement("p",{className:"info-text"},"R"),r.a.createElement("p",{className:"info-text"},"G"),r.a.createElement("p",{className:"info-text"},"B"),r.a.createElement("p",{className:"info-text"},"a"),r.a.createElement("div",null,r.a.createElement("input",{className:"info-input",value:n,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:o,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:l,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:c,onChange:function(t){return e.handleChange(t)}})))}}]),t}(n.Component),te=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,alpha:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{})(ee),ae=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,title:"",selectedSet:[],hexInput:""},a.handleChange=function(e){var t=a.state.selectedSet,n={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};t[a.props.position]=n,a.setState({selectedSet:t,hexInput:e.hex.toUpperCase()}),a.props.sendColorInfo(e.hex.toUpperCase()),a.props.sendSelectedColor(e.hex.toUpperCase()),a.props.sendAlphaInfo(e.rgb.a)},a.closeConfigShow=function(e,t){return function(){var n=a.props.colorPosition;a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0,title:a.props.data[n].title,selectedSet:a.props.data[n].colors,hexInput:a.props.data[n].colors[0].hexColor}),a.props.sendColorInfo(a.props.data[n].colors[0].hexColor,a.props.data[n].colors[0].alpha)}},a.cancel=function(){var e=a.props.colorPosition;a.setState({open:!1,title:a.props.data[e].title,hexInput:a.props.data[e].colors[0].hexColor,selectedSet:a.props.data[e].colors}),a.props.clearPosition(),a.props.getColors()},a.handleConfirm=function(){a.setState({open:!1});var e={title:a.state.title,colors:a.state.selectedSet};a.props.updateColorPalette(a.props.objectID,e),a.props.clearPosition()},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleTitleInput",value:function(e){this.setState({title:e.target.value})}},{key:"handleOnClickSquare",value:function(e,t,a){this.setState({hexInput:e}),this.props.sendSelectedColor(e),this.props.sendColorInfo(e,a),this.props.sendPositionInfo(t)}},{key:"renderColorPicker",value:function(){return r.a.createElement(B.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.alpha},onChangeComplete:this.handleChange})}},{key:"renderOneColorSet",value:function(){var e=this;return this.state.selectedSet.map(function(t,a){return r.a.createElement("div",{className:"color-square-container",key:t.hexColor},r.a.createElement("div",{className:"color-square",onClick:function(){return e.handleOnClickSquare(t.hexColor,a,t.alpha)},style:{backgroundColor:t.hexColor,opacity:t.alpha,cursor:"pointer"}}),r.a.createElement("div",{style:e.renderCarot(a),className:"carot-container"},r.a.createElement(v.a,{size:"big",name:"caret up"})))})}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"hexColorOnChange",value:function(e){var t=e.target.value.toUpperCase().trim();if(t.length<=7&&this.setState({hexInput:t}),7===t.length&&"#"===t[0]){var a=this.props.selectedSet,n={hexColor:t,alpha:this.props.a};a[this.props.position]=n,this.props.sendColorInfo(t),this.props.sendSelectedColor(t),this.props.sendAlphaInfo(this.props.a)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.closeOnEscape,o=t.closeOnDimmerClick,l=t.title,c=t.hexInput,i=t.selectedSet;return r.a.createElement("div",{className:"edit-modal"},r.a.createElement(v.a,{size:"large",onClick:this.closeConfigShow(!1,!0),name:"edit"}),r.a.createElement(T.a,{open:a,closeOnEscape:n,closeOnDimmerClick:o,onClose:this.close},r.a.createElement(T.a.Header,null,"Edit Palette"),r.a.createElement(T.a.Content,null,r.a.createElement(q.a,{className:"savepalette-modal-input",label:"Title",value:l,onChange:function(t){return e.handleTitleInput(t)},placeholder:"Edit Palette Name..."}),r.a.createElement("div",{className:"colors-render"},this.renderOneColorSet()),r.a.createElement(D.a,{stackable:!0,columns:2},r.a.createElement(D.a.Column,{width:10},r.a.createElement(g.a,null,this.renderColorPicker())),r.a.createElement(D.a.Column,{width:6},r.a.createElement(g.a,null,r.a.createElement(te,{hexInput:c,hexColorOnChange:function(t){return e.hexColorOnChange(t)},selectedSet:i}))))),r.a.createElement(T.a.Actions,null,r.a.createElement(S.a,{onClick:this.cancel},"Cancel"),r.a.createElement(S.a,{onClick:this.handleConfirm,color:"blue"},"Confirm"))))}}]),t}(n.Component),ne=Object(c.b)(function(e){return{data:e.myPalettes.Data,position:e.colorInfo.position,hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,alpha:e.colorInfo.alpha}},{updateColorPalette:function(e,t){return function(a){w.a.put("/api/colors/".concat(e),t).then(function(e){return a({type:"UPDATE_COLORS",payload:t})}).catch(function(e){console.log(e)}).then(function(){w.a.get("/api/colors").then(function(e){return a({type:"GET_COLORS",payload:e.data})}).catch(function(e){return console.log(e)})})}},sendPositionInfo:Y,sendSelectedColor:X,sendColorInfo:J,sendAlphaInfo:K,clearPosition:Z,getColors:L})(ae),re=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getColors()}},{key:"renderOneColorSet",value:function(e){return e.map(function(e){return r.a.createElement("div",{className:"color-square-container",key:e.hexColor},r.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}))})}},{key:"renderPalettes",value:function(){var e=this;if(void 0!==this.props.myPalettes)return this.props.myPalettes.map(function(t,a){return r.a.createElement(D.a.Column,{key:t._id,mobile:16,computer:8},r.a.createElement("div",{className:"palette-container"},r.a.createElement("p",null,t.title,r.a.createElement(U,{title:t.title,objectID:t._id}),r.a.createElement(ne,{title:t.title,objectID:t._id,colorPosition:a,selectedSet:t.colors})),e.renderOneColorSet(t.colors)))})}},{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(A.a,{as:"h1",className:"header"},"My Color Palettes"),r.a.createElement(D.a,null,this.renderPalettes()))}}]),t}(n.Component),oe=Object(c.b)(function(e){return console.log(e),{myPalettes:e.myPalettes.Data,addColor:e.myPalettes.AddColor,updateColor:e.myPalettes.UpdateColor}},{getColors:L})(re),le=function(){return r.a.createElement(A.a,{as:"h1",className:"header"},"Choose a picture and analyze")},ce=a(565),ie=a(560),se=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.colors.length<=1&&(this.props.clearRecieved(),this.props.clearColorList(),this.props.analyzeImage(this.props.url))}},{key:"componentDidUpdate",value:function(e){if(this.props.url!==e.url&&(this.props.clearColorList(),this.props.analyzeImage(this.props.url)),"recieved"===this.props.status){var t=this.props.colors[0].hexColor,a=this.props.position;this.handleOnClickSquare(t,a,1),this.props.clearRecieved()}}},{key:"handleOnClickSquare",value:function(e,t,a){this.props.sendSelectedColor(e),this.props.sendColorInfo(e,a),this.props.sendPositionInfo(t)}},{key:"renderColor",value:function(e,t){return{backgroundColor:e,opacity:t,cursor:"pointer"}}},{key:"renderCarot",value:function(e){return e===this.props.position?{color:"black"}:{color:"white"}}},{key:"colorsRender",value:function(){var e=this;return this.props.colors.length>=1?this.props.colors.map(function(t,a){return r.a.createElement("div",{key:t.hexColor,className:"color-square-container"},r.a.createElement("div",{className:"color-square",style:e.renderColor(t.hexColor,t.alpha),onClick:function(){return e.handleOnClickSquare(t.hexColor,a,t.alpha)}}),r.a.createElement("div",{style:e.renderCarot(a),className:"carot-container"},r.a.createElement(v.a,{size:"big",name:"caret up"})))}):r.a.createElement("div",{className:"color-loader"},r.a.createElement(ce.a,{active:!0,inverted:!0},r.a.createElement(ie.a,{size:"big",inverted:!0},"Loading Colors")))}},{key:"render",value:function(){return r.a.createElement(D.a.Column,{width:16},this.colorsRender())}}]),t}(n.Component),ue=Object(c.b)(function(e){return{colors:e.colors.colors,selectedColor:e.colorInfo.selectedColor,position:e.colorInfo.position,url:e.url.url,error:e.error,status:e.colors.status}},{analyzeImage:W,sendColorInfo:J,sendPositionInfo:Y,sendSelectedColor:X,clearRecieved:Q,clearColorList:V})(se),pe=a(264),he=Object(c.b)(function(e){return{url:e.url.url}})(function(e){var t=e.url;return r.a.createElement(D.a.Column,{mobile:16,computer:13},r.a.createElement(pe.a,{className:"sample-img",src:t,alt:"analyze main"}))}),me=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.close=function(){a.setState({input:""}),a.props.closeImgModal()},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t}),a.props.openImgModal()}},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"submitURL",value:function(e){e.preventDefault(),""===this.state.input&&this.props.sendErrorStatus(),"no duplicates"===this.checkForDuplicateUrls()&&""!==this.state.input&&(console.log("requested"),this.props.analyzeImage(this.state.input),this.props.newImgSubmit(),this.props.showModalLoader())}},{key:"checkForDuplicateUrls",value:function(){for(var e=0;e<this.props.exampleImages.length;e++)if(this.state.input===this.props.exampleImages[e])return"duplicate exists";return"no duplicates"}},{key:"componentDidUpdate",value:function(){!1===this.props.error&&"recieved"===this.props.status&&"new"===this.props.image&&(this.props.changeMainImage(this.state.input),this.props.addImageSelection(this.state.input),this.props.clearImgSubmit(),this.setState({input:""}))}},{key:"handleInput",value:function(e){this.setState({input:e.target.value}),this.props.clearErrorStatus()}},{key:"renderURLinput",value:function(){var e=this;return!0===this.props.error?r.a.createElement(q.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Please enter a url...",error:!0}):!1!==this.props.error?r.a.createElement(q.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Error! Please check url and try again...",error:!0}):r.a.createElement(q.a,{className:"url-input",type:"text",onChange:function(t){return e.handleInput(t)},value:this.state.input,placeholder:"Copy and paste image url..."})}},{key:"renderSubmitButton",value:function(){var e=this;return""===this.state.input?r.a.createElement(S.a,{onClick:function(t){return e.submitURL(t)},className:"ui button",color:"blue",style:{opacity:.7}},"Submit"):r.a.createElement(S.a,{onClick:function(t){return e.submitURL(t)},className:"ui button",color:"blue"},"Submit")}},{key:"renderErrorMessage",value:function(){return!0===this.props.error&&""!==this.state.input&&"no duplicates"===this.checkForDuplicateUrls()?r.a.createElement("p",null," Bad Request! Please check your URL and try again "):"duplicate exists"===this.checkForDuplicateUrls()?(this.props.sendErrorStatus(),r.a.createElement("p",null," Image URL already exists. Please try a different one")):void 0}},{key:"renderLoader",value:function(){if("show"===this.props.loader)return r.a.createElement(ce.a,{active:!0,inverted:!0},r.a.createElement(ie.a,{size:"big",inverted:!0}))}},{key:"render",value:function(){var e=this,t=this.state,a=(t.open,t.closeOnEscape),n=t.closeOnDimmerClick;return r.a.createElement("div",null,r.a.createElement(S.a,{onClick:this.closeConfigShow(!1,!0)},"Try your own image"),r.a.createElement(T.a,{open:this.props.open,closeOnEscape:a,closeOnDimmerClick:n,onClose:this.close},r.a.createElement(T.a.Content,{className:"add-image-modal"},r.a.createElement("h3",null,"Try your own image"),r.a.createElement("form",{onSubmit:function(t){return e.submitURL(t)}},this.renderURLinput(),this.renderSubmitButton()),this.renderErrorMessage(),this.renderLoader())))}}]),t}(n.Component),de=Object(c.b)(function(e){return{open:e.colors.open,error:e.colors.error,status:e.colors.status,loader:e.colors.loader,image:e.colors.image,exampleImages:e.url.exampleImages}},{analyzeImage:W,changeMainImage:$,addImageSelection:function(e){return{type:"ADD_URL",url:e}},closeImgModal:function(){return function(e){e({type:"OPEN_IMAGE_MODAL",open:!1,error:!1})}},openImgModal:function(){return function(e){e({type:"CLOSE_IMAGE_MODAL",open:!0,error:!1})}},newImgSubmit:function(){return function(e){e({type:"NEW_IMAGE_SUBMIT",image:"new"})}},clearImgSubmit:function(){return function(e){e({type:"CLEAR_IMAGE_SUBMIT",image:""})}},clearErrorStatus:function(){return function(e){e({type:"CLEAR_ERROR",error:!1})}},showModalLoader:function(){return function(e){e({type:"CLARIFAI_REQUEST_WAITING",loader:"show"})}},sendErrorStatus:function(){return function(e){e({type:"SEND_ERROR",error:!0})}}})(me),fe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearRecieved(),this.props.clearPosition(),this.props.changeMainImage(e)}},{key:"renderBorder",value:function(e){return this.props.url===e?{border:"3px solid #0000CC",opacity:1}:null}},{key:"renderImages",value:function(){var e=this;return this.props.exampleUrl.map(function(t){return r.a.createElement("div",{className:"image-wrapper",key:t},r.a.createElement("img",{className:"image-selection",src:t,alt:"selection",style:e.renderBorder(t),onClick:function(){return e.handleClick(t)}}),r.a.createElement("div",{className:"circle"},r.a.createElement("i",{id:"delete-img",className:"fas fa-times-circle"})))})}},{key:"render",value:function(){return r.a.createElement(D.a.Column,{mobile:16,computer:3},r.a.createElement("div",{className:"image-modal-container"},r.a.createElement("div",{className:"images-container"},this.renderImages()),r.a.createElement("div",{className:"modal-container"},r.a.createElement(de,null))))}}]),t}(n.Component),Ce=Object(c.b)(function(e){return{url:e.url.url,exampleUrl:e.url.exampleImages}},{changeMainImage:$,clearRecieved:Q,clearPosition:Z,analyzeImage:W})(fe),Ee=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){var n=a.props.colors,r={hexColor:e.hex.toUpperCase(),alpha:e.rgb.a};n[a.props.position]=r,a.props.updateHexColor(n),a.props.sendColorInfo(e.hex.toUpperCase()),a.props.sendSelectedColor(e.hex.toUpperCase()),a.props.sendAlphaInfo(e.rgb.a)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"renderColorPicker",value:function(){return this.props.colors.length>=1?r.a.createElement("div",{className:"color-picker"},r.a.createElement(B.ChromePicker,{className:"chrome-picker",style:{marginRight:"4em"},color:{r:this.props.R,g:this.props.G,b:this.props.B,a:this.props.colors[this.props.position].alpha},onChangeComplete:this.handleChange})):r.a.createElement(B.ChromePicker,{className:"color-picker"})}},{key:"render",value:function(){return r.a.createElement(D.a.Column,{mobile:16,computer:10},this.renderColorPicker())}}]),t}(n.Component),be=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,a:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{updateHexColor:function(e){return function(t){t({type:"UPDATE_HEX_COLOR",newColorSet:e})}},sendColorInfo:J,sendSelectedColor:X,sendAlphaInfo:K})(Ee),Oe=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"color-info"},r.a.createElement("h5",null,"Hex"),r.a.createElement("input",{className:"hex-info-input",value:this.props.hexColor}),r.a.createElement("p",{className:"info-text"},"R"),r.a.createElement("p",{className:"info-text"},"G"),r.a.createElement("p",{className:"info-text"},"B"),r.a.createElement("p",{className:"info-text"},"a"),r.a.createElement("div",null,r.a.createElement("input",{className:"info-input",value:this.props.R,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:this.props.G,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:this.props.B,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"info-input",value:this.props.alpha,onChange:function(t){return e.handleChange(t)}})))}}]),t}(n.Component),ge=Object(c.b)(function(e){return{hexColor:e.colorInfo.hexColor,R:e.colorInfo.R,G:e.colorInfo.G,B:e.colorInfo.B,alpha:e.colorInfo.alpha,colors:e.colors.colors,position:e.colorInfo.position}},{})(Oe),ye=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.clearColorList(),this.props.clearRecieved(),this.props.clearPosition(),this.props.analyzeImage(e)}},{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{className:"regen-btn",content:"Regenerate",onClick:function(){return e.handleClick(e.props.url)}})}}]),t}(n.Component),ve=Object(c.b)(function(e){return{url:e.url.url}},{analyzeImage:W,clearRecieved:Q,clearPosition:Z,clearColorList:V})(ye),Ie=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",open:!1,error:!1},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},a.close=function(){a.setState({input:"",open:!1,error:!1})},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleInput",value:function(e){this.setState({input:e.target.value,error:!1})}},{key:"handleConfirmClick",value:function(){this.props.newColorPalette({title:this.state.input,colors:this.props.colors}),this.close()}},{key:"setError",value:function(){this.setState({error:!0})}},{key:"renderConfirmButton",value:function(){var e=this;return""===this.state.input?r.a.createElement(S.a,{onClick:function(){return e.setError()},color:"blue",style:{opacity:.7}},"Create New"):r.a.createElement(f.b,{to:"/MyPallettes"},r.a.createElement(S.a,{color:"blue",style:{marginLeft:"0.75em"},onClick:function(){return e.handleConfirmClick()}},"Create New"))}},{key:"renderTitleInput",value:function(){var e=this;return!0===this.state.error?r.a.createElement(q.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"Title Required...",error:!0}):r.a.createElement(q.a,{className:"savepalette-modal-input",label:"Title",value:this.state.input,onChange:function(t){return e.handleInput(t)},placeholder:"New Palette Name..."})}},{key:"colorsRender",value:function(){return this.props.colors.map(function(e,t){return r.a.createElement("div",{key:e.hexColor,className:"color-square-container"},r.a.createElement("div",{className:"color-square",style:{backgroundColor:e.hexColor,opacity:e.alpha}}),r.a.createElement("p",null,e.hexColor))})}},{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.closeOnEscape,o=t.closeOnDimmerClick;return r.a.createElement("div",null,r.a.createElement(S.a,{onClick:this.closeConfigShow(!0,!1)},"Save Palette"),r.a.createElement(T.a,{open:a,closeOnEscape:n,closeOnDimmerClick:o,onClose:this.close},r.a.createElement(T.a.Content,null,r.a.createElement(A.a,{as:"h2"},"Save Palette"),this.renderTitleInput(),r.a.createElement("div",{className:"colors-render"},this.colorsRender())),r.a.createElement(T.a.Actions,null,r.a.createElement(S.a,{onClick:function(){return e.close()}},"Cancel"),this.renderConfirmButton())))}}]),t}(n.Component),ke=Object(c.b)(function(e){return{colors:e.colors.colors}},{newColorPalette:function(e){return function(t){w.a.post("/api/colors",e).then(function(e){return t({type:"ADD_COLORS",payload:e.data})}).catch(function(e){return console.log(e)})}}})(Ie),je=function(e){e.url;return r.a.createElement("div",{className:"footer"},"\xa9 2019")},Se=function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(y.a,{textAlign:"center"},r.a.createElement(le,null),r.a.createElement(D.a,{celled:!0},r.a.createElement(D.a.Row,null,r.a.createElement(Ce,null),r.a.createElement(he,null))),r.a.createElement(D.a,{celled:!0},r.a.createElement(D.a.Row,null,r.a.createElement(ue,null))),r.a.createElement(D.a,{celled:!0},r.a.createElement(D.a.Row,null,r.a.createElement(be,null),r.a.createElement(D.a.Column,{mobile:16,computer:6},r.a.createElement(ge,null),r.a.createElement("div",{className:"regen-save-buttons"},r.a.createElement(ve,null),r.a.createElement(ke,null))))),r.a.createElement(je,null)))},xe=(a(549),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(R,null),r.a.createElement(C.a,{path:"/",exact:!0,component:_}),r.a.createElement(C.a,{path:"/Generate",component:Se}),r.a.createElement(C.a,{path:"/MyPallettes",component:oe}))}}]),t}(n.Component)),Ne=a(16),Re={colors:[],status:"",error:!1,errorData:"",open:!1,loader:"hide",image:""},Ae={url:"https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",exampleImages:["https://images.unsplash.com/photo-1520633946251-dcf52b0276b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1429497612798-1f189166a08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1493804714600-6edb1cd93080?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]},_e={hexColor:"",R:"",G:"",B:"",alpha:"",position:0,selectedColor:""},De={Data:[],AddColor:"",DeleteColor:"",UpdateColor:""},Pe=Object(i.c)({colors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANALYZE_IMAGE":return Object(Ne.a)({},e,{colors:t.payload,status:t.status,open:t.open,error:t.error,loader:t.loader});case"CLARIFAI_REQUEST_WAITING":return Object(Ne.a)({},e,{loader:t.loader});case"CLEAR_RECIEVED":return Object(Ne.a)({},e,{status:t.status});case"CLEAR_COLORS":return Object(Ne.a)({},e,{colors:t.colors});case"NEW_IMAGE_SUBMIT":case"CLEAR_IMAGE_SUBMIT":return Object(Ne.a)({},e,{image:t.image});case"SEND_ERROR":case"CLEAR_ERROR":return Object(Ne.a)({},e,{error:t.error});case"ANALYZE_IMAGE_ERROR":return Object(Ne.a)({},e,{errorData:t.errorData,error:t.error,loader:t.loader,open:t.open});case"OPEN_IMAGE_MODAL":case"CLOSE_IMAGE_MODAL":return Object(Ne.a)({},e,{open:t.open,error:t.error});case"UPDATE_HEX_COLOR":return Object(Ne.a)({},e,{colors:function(e,t){return e.map(function(e,a){return a!==t.index?e:Object(Ne.a)({},e,t.item)})}(e.colors,t.newColorSet)});default:return e}},url:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAIN_IMAGE":return Object(Ne.a)({},e,{url:t.url});case"RANDOM_IMAGE":return Object(Ne.a)({},e,{url:t.url,random_url:t.url});case"ADD_URL":return Object(Ne.a)({},e,{exampleImages:e.exampleImages.concat(t.url)});default:return e}},colorInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_COLOR_INFO":return Object(Ne.a)({},e,{hexColor:t.hexColor,R:t.R,G:t.G,B:t.B,alpha:t.alpha});case"SEND_POSITION_INFO":case"CLEAR_POSITION_INFO":return Object(Ne.a)({},e,{position:t.position});case"SEND_ALPHA_INFO":return Object(Ne.a)({},e,{alpha:t.alpha});case"SELECTED_COLOR":return Object(Ne.a)({},e,{selectedColor:t.selectedColor});default:return e}},myPalettes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLORS":return Object(Ne.a)({},e,{Data:t.payload});case"ADD_COLORS":return Object(Ne.a)({},e,{Data:e.Data.concat(t.payload),AddColor:'"'.concat(t.payload.title,'" Created ').concat(t.payload._id)});case"UPDATE_COLORS":return Object(Ne.a)({},e,{UpdateColor:"".concat(t.payload," is the new update")});case"DELETE_COLORS":return Object(Ne.a)({},e,{Data:e.Data.filter(function(e){return e._id!==t.payload}),DeleteColor:"".concat(t.payload," was Deleted")});default:return e}}}),we=Object(i.d)(Pe,Object(i.a)(s.a));l.a.render(r.a.createElement(c.a,{store:we},r.a.createElement(xe,null)),document.getElementById("root"))}},[[272,1,2]]]);
//# sourceMappingURL=main.d93d402a.chunk.js.map