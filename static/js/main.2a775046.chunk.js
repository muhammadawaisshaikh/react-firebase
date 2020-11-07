(this["webpackJsonpreact-firebase"]=this["webpackJsonpreact-firebase"]||[]).push([[0],{34:function(e,a,t){e.exports=t(60)},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},46:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(31),r=t.n(l),i=(t(39),t(40),t(10));t(41);var s=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4 col-md-4 col-lg-4"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"#"},"Logo"))),c.a.createElement("div",{className:"col-sm-8 col-md-8 col-lg-8"},c.a.createElement("div",{className:"nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/react-firebase/addItem"},"Add Item")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/react-firebase/allItems"},"All Items")))))))))},o=t(21),m=t(14),d=t(15),u=t(17),p=t(16),f=(t(46),t(22));t(55),t(56);f.initializeApp({apiKey:"AIzaSyDqukwPeFeFa7opYa-ONN0aR96iGXhKkyk",authDomain:"react-firebase-64377.firebaseapp.com",databaseURL:"https://react-firebase-64377.firebaseio.com",projectId:"react-firebase-64377",storageBucket:"react-firebase-64377.appspot.com",messagingSenderId:"987685646386",appId:"1:987685646386:web:907f4270d02ee1c8674c2b",measurementId:"G-D1CG2T67Z6"}),f.analytics();var g=f,E=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.addItem=function(){var e=g.database().ref("items"),a={image:n.state.imageAsUrl,description:n.state.description};e.push(a,(function(e){e?alert("Item could not be created."+e):alert("Item Created successfully.")})),n.setState({loading:!0}),n.props.history.push("/allItems")},n.handleImageAsFile=function(e){var a=e.target.files[0];n.setState({imageAsFile:a})},n.handleFireBaseUpload=function(e){e.preventDefault(),n.setState({loading:!1});var a=g.storage();a.ref("/images/".concat(n.state.imageAsFile.name)).put(n.state.imageAsFile).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){a.ref("images").child(n.state.imageAsFile.name).getDownloadURL().then((function(e){n.setState({imageAsUrl:e}),n.addItem()}))}))},n.state={data:[],loading:!0,description:"",imageAsFile:"",imageAsUrl:""},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("AddItem")}},{key:"render",value:function(){var e=this;return c.a.createElement("section",null,c.a.createElement("div",{className:"add"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-4 col-lg-4"},c.a.createElement("h3",null,"Add Items"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group mt-4"},c.a.createElement("input",{type:"file",className:"form-control",onChange:function(a){e.handleImageAsFile(a)}}),c.a.createElement("input",{type:"text",name:"description",className:"form-control",placeholder:"Description",onChange:function(a){e.handleChange(a)}}))),c.a.createElement("div",{className:"pt-4 text-center"},this.state.loading?c.a.createElement("a",{className:"press",onClick:function(a){e.handleFireBaseUpload(a)}},"Save"):c.a.createElement("p",null,"Uploading Data ...")))))))}}]),t}(c.a.Component),h=t(33),v=(t(57),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).getAll=function(){n.setState({loading:!0});var e=[];g.database().ref("items").on("value",(function(a){var t=a.val();for(var c in t)e.push(Object(h.a)({id:c},t[c]));n.setState({data:e}),n.setState({loading:!1})}))},n.state={data:[],loading:!1},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){return c.a.createElement("div",{className:"all"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-12 col-md-12 col-lg-12"},c.a.createElement("h1",{className:"text-center"},"All Items")),this.state.loading?c.a.createElement("p",{className:"py-5"},"Loading ..."):this.state.data&&this.state.data.map((function(e,a){return c.a.createElement("div",{className:"col-12 col-md-12 col-lg-12",key:a},c.a.createElement("div",{className:"row main"},c.a.createElement("div",{className:"col-12 col-md-2 col-lg-2"},c.a.createElement("img",{src:e.image})),c.a.createElement("div",{className:"col-12 col-md-10 col-lg-10 bg-light p-4 rounded"},c.a.createElement("h3",{className:"text-capitalize"},e.description?e.description:"No Description"),c.a.createElement("p",null,e.description?e.description:"No Description"),c.a.createElement(i.b,{to:{pathname:"/detail",state:e}},c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-arrow-right"}))))))})))))}}]),t}(c.a.Component)),b=(t(58),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={data:e.location.state,loading:!1},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row main py-5"},c.a.createElement("div",{className:"col-12 col-md-4 col-lg-4"},c.a.createElement("img",{src:this.state.data.image})),c.a.createElement("div",{className:"col-12 col-md-8 col-lg-8"},c.a.createElement(i.b,{className:"badge badge-pill badge-light px-3 py-2 back-btn",to:"/allItems"},c.a.createElement("i",{className:"fas fa-chevron-left border-0 p-0"}),c.a.createElement("span",{className:"pl-2"},"Back")),c.a.createElement("h3",{className:"text-capitalize"},this.state.data.description?this.state.data.description:"No Description"),c.a.createElement("p",null,this.state.data.description?this.state.data.description:"No Description"))))))}}]),t}(c.a.Component)),N=t(3);var I=function(){return c.a.createElement(i.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement("div",null,c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/react-firebase",component:v}),c.a.createElement(N.a,{exact:!0,path:"/react-firebase/addItem",component:E}),c.a.createElement(N.a,{exact:!0,path:"/react-firebase/allItems",component:v}),c.a.createElement(N.a,{exact:!0,path:"/react-firebase/detail",component:b})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(59);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2a775046.chunk.js.map