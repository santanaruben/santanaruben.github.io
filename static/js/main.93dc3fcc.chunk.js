<<<<<<< Updated upstream:static/js/main.93dc3fcc.chunk.js
(this.webpackJsonprubensantana=this.webpackJsonprubensantana||[]).push([[0],{30:function(e,t){e.exports={colocar:function(){document.getElementById("content").classList.add("blurring"),document.getElementById("loader").classList.add("loader")},quitar:function(){setTimeout((function(){document.getElementById("loader").classList.remove("loader"),document.getElementById("content").classList.remove("blurring")}),800)},colocarInicio:function(){document.getElementById("contentInicio").classList.add("blurring"),document.getElementById("loaderInicio").classList.add("loader")},quitarInicio:function(){document.getElementById("loaderInicio").classList.remove("loader"),document.getElementById("contentInicio").classList.remove("blurring")}}},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e){e.exports=JSON.parse('[{"id":0,"name":"Ethereum Certification System","description":"Decentralized application for certification of courses and university degrees","img":"./img/trabajos/certification-system.mp4","type":"video","link":"upta.000webhostapp.com/?cedula=18110778","repo":"github.com/santanaruben/certificados"},{"id":1,"name":"CryptoJustice","description":"System for Legal Procedures using Ethereum and React","img":"./img/trabajos/cryptojustice.jpg","type":"img","link":"thecryptojustice.com","repo":"github.com/santanaruben/cryptojustice"},{"id":2,"name":"Toll Road System","description":"Ethereum regulated system of toll roads on which vehicles pay to drive on them","img":"./img/trabajos/tollRoad-system.jpg","type":"img","link":"git.academy.b9lab.com/ETH-SUB-exam-projects/rubensantana-code","repo":"github.com/santanaruben/TollRoadSystem"},{"id":3,"name":"Ethereum Rock Paper Scissors Game","description":"Classic game where the players bet an ETH amount, then each player submits their move, and the contract rewards the winner with the Ether wagered","img":"./img/trabajos/rockPaperScissors-system.png","type":"img","link":null,"repo":"github.com/santanaruben/rockPaperScissors"},{"id":4,"name":"Descentralized Library","description":"Ethereum library system where users can have book\'s ownership and transfer their books (ERC-721) to the library and to other users","img":"./img/trabajos/library-system.jpg","type":"img","link":null,"repo":"github.com/santanaruben/ethereum/tree/master/projects/biblioteca"},{"id":5,"name":"Descentralized Store","description":"Ethereum Store system, using an ERC-20 as the coin necesary to make transactions","img":"./img/trabajos/store-system.png","type":"img","link":null,"repo":"github.com/santanaruben/store"},{"id":6,"name":"eCommerce","description":"The store and services provided by Armani Engineering Corporation","img":"./img/trabajos/armani-engr.jpg","type":"img","link":"armani-engr.com","repo":null},{"id":7,"name":"Shortener","description":"A corporate link shortener with statistics page, and traffic location","img":"./img/trabajos/armani-shortener.png","type":"img","link":"files.armani-engr.com","repo":null},{"id":8,"name":"Business Website","description":"Enterprise website for design and engineering services","img":"./img/trabajos/designsmiranda.jpg","type":"img","link":"designsmiranda.com","repo":null},{"id":9,"name":"Splitter System","description":"Amount splitter application for ethereum","img":"./img/trabajos/splitter-system.png","type":"img","link":null,"repo":"github.com/santanaruben/splitter"},{"id":10,"name":"Remittance System","description":"Remittance application for ethereum","img":"./img/trabajos/remittance.jpg","type":"img","link":null,"repo":"github.com/santanaruben/remittance"}]')},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),c=(a(36),a(17)),l=a.n(c),s=a(23),m=a(2),u=a(3),d=a(4),p=a(5),b=(a(38),a(39),a(42),a(43),a(44),a(45),a(46),a(47),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"verCredencial",value:function(e,t,a,n){e.preventDefault();var r=document.getElementById("myModal"),o=document.createElement("img");document.getElementById("divModalImagen").appendChild(o),o.setAttribute("id","img01"),o.setAttribute("class","modal-content");var i=document.getElementById("caption");r.style.display="block",o.src="./img/credenciales/"+t+"."+a,i.innerHTML=t.toUpperCase()+n.toUpperCase(),document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",r.style.display="none"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("img",{id:"fotoAbout",src:"./img/ruben.jpg",className:"img-fluid align-self-center rounded",alt:""}),r.a.createElement("hr",null),r.a.createElement("p",{className:"textoAbout"},"I'm Rub\xe9n, I specialize in creating decentralized applications using Ethereum Smart Contracts. I'm a Computer Science Engineer and I have a Master's Degree in Software Development. Also I have an online career as an Ethereum Developer from ",r.a.createElement("a",{className:"linkClaro",href:"https://academy.b9lab.com/",target:"_blank",rel:"noopener noreferrer"},"B9LabAcademy"),"."),r.a.createElement("p",{className:"textoAbout"},"I worked as a Sap Abap Developer in Unicon-ArcelorMittal for two years and as a Teacher for the UPT Aragua the last seven years."),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mb-3"},r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Degrees")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"ENG"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"ingenieria","jpg","")},href:"#"},r.a.createElement("i",{className:"fa fa-user-graduate fa-3x",title:"Click to see the credential"}))),r.a.createElement("div",null,r.a.createElement("span",null,"MSC"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"maestria","png"," - versi\xf3n digital, en espera de recibimiento")},href:"#"},r.a.createElement("i",{className:"fa fa-user-graduate fa-3x",title:"Click to see the credential"}))))),r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Certifications")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"ETH"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://certificates.b9lab.com/certificate.html?uuid=4908444d-5c73-4ea9-bc8b-d28ed59c9661",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-ethereum fa-3x",title:"Click to see the credential"}))),r.a.createElement("div",null,r.a.createElement("span",null,"SAP"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.cvosoft.com/certificaciones/sap/legajo-UU86K.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-certificate fa-3x",title:"Click to see the credential"})))))),r.a.createElement("div",{className:"row justify-content-center mb-2"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("hr",null),r.a.createElement("a",{className:"btn btn-light",href:"./docs/CV_Ruben_Santana_2020_en.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,"Resume")))))}}]),a}(n.Component)),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",id:"home"},r.a.createElement("div",{className:"row align-items-center",id:"contenido"},r.a.createElement("div",{className:"col-12 titulo"},"Rub\xe9n Santana"),r.a.createElement("div",{className:"col-12 subtitulo"},"SOFTWARE \xa0 DEVELOPER")))}}]),a}(n.Component),h=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"zoom",value:function(e){e.preventDefault();var t=document.getElementById("myModal"),a=document.createElement(this.props.trabajo.type);document.getElementById("divModalImagen").appendChild(a),a.setAttribute("id","img01"),a.setAttribute("class","modal-content"),a.setAttribute("controls","true"),a.setAttribute("autoplay","true");var n=document.getElementById("caption");t.style.display="block",a.src=this.props.trabajo.img,n.innerHTML=this.props.trabajo.name,document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",t.style.display="none"}}},{key:"render",value:function(){return void 0==this.props.trabajo?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("div",{className:"divCuboTitulo"},r.a.createElement("h3",null,this.props.trabajo.name)),r.a.createElement("div",{className:"divCuboImagen"},r.a.createElement(this.props.trabajo.type,{onClick:this.zoom.bind(this),src:this.props.trabajo.img,alt:this.props.trabajo.name,controls:!0,autoPlay:!1})),r.a.createElement("div",{className:"divCuboBotones"},r.a.createElement("a",{href:"http://"+this.props.trabajo.repo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"github",className:"fab fa-github fa-3x ",title:"Repo"})),r.a.createElement("a",{href:"https://"+this.props.trabajo.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"linkApp",className:"fa fa-link fa-3x",title:"Link"}))))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cubo_cara "+this.props.clase},r.a.createElement(h,{trabajo:this.props.trabajo}))}}]),a}(n.Component),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.trabajos;return r.a.createElement("div",{className:"escena--cubo"},r.a.createElement("div",{className:"cubo cubo--rotar comienza-girando mostrar-frente"},this.props.clasesCara.map((function(t,a){return r.a.createElement(g,{key:a,clase:t,trabajo:e[a]})}))))}}]),a}(n.Component);E.defaultProps={clasesCara:["cubo_cara--frente","cubo_cara--derecha","cubo_cara--detras","cubo_cara--izquierda","cubo_cara--arriba","cubo_cara--abajo"]};var v=E,y=a(24),j=a.n(y),k=[{id:0,name:null,description:null,img:null,type:"img",link:null,repo:null}],w=["mostrar-frente","mostrar-derecha","mostrar-detras","mostrar-izquierda","mostrar-arriba","mostrar-abajo"],N=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={claseSeleccionada:0,trabajos:k,listaTrabajos:k},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;"localhost"===document.location.hostname||"127.0.0.1"===document.location.hostname?(k=a(51),this.setState({trabajos:k,listaTrabajos:k})):fetch("https://raw.githubusercontent.com/santanaruben/santanaruben.github.io/master/json/trabajos.json").then((function(e){return e.json()})).then((function(t){e.setState({trabajos:t,listaTrabajos:t})})),window.Spinner.quitar()}},{key:"render",value:function(){var e=this,t=this.state.trabajos,a=[];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioCubo"},r.a.createElement(v,{trabajos:this.state.listaTrabajos})),r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioTabla mb-4"},r.a.createElement(j.a,{columns:[{name:"Name",selector:"name",sortable:!0,center:!0,maxWidth:"150px"},{name:"Description",selector:"description",sortable:!0,center:!0}],data:t,noHeader:!0,keyField:"id",pointerOnHover:!0,pagination:!0,paginationPerPage:6,paginationRowsPerPageOptions:[6],paginationComponentOptions:{noRowsPerPage:!0},onRowClicked:function(n){return function(n){for(var r=6*(Math.trunc(n/6)+1-1);r<t.length;r++)a.push(t[r]);e.setState({listaTrabajos:a});var o=n%6,i=w[e.state.claseSeleccionada],c=document.querySelector(".cubo");c.classList.remove(i),c.classList.add(w[o]),e.setState({claseSeleccionada:o}),document.querySelector(".divPortafolioCubo").scrollIntoView({block:"center"})}(n.id)}}))))}}]),n}(n.Component),C=a(28),S=a.n(C);a(54);function I(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"tituloForm"},"CONTACT ME"),r.a.createElement("form",{id:"formularioCorreo",className:"topBefore",onSubmit:function(e){e.preventDefault(),window.Spinner.colocar(),S.a.sendForm("service_b5p5kxb","template_pg5umlj",e.target,"user_MZ9TV3NwdAxHZ8Hn8ADhT").then((function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has been sent",document.getElementById("formularioCorreo").reset(),console.log(e.text)}),(function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has not been sent. Try again later!",console.log(e.text)}))}},r.a.createElement("input",{type:"hidden",name:"to_name",value:"Ruben"}),r.a.createElement("input",{type:"text",name:"from_name",placeholder:"NAME",required:!0}),r.a.createElement("input",{type:"email",name:"reply_to",placeholder:"E-MAIL",required:!0}),r.a.createElement("textarea",{name:"message",type:"text",placeholder:"MESSAGE",required:!0}),r.a.createElement("input",{id:"submit",type:"submit",value:"SEND!"})))}var O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid mt-5",style:{color:"white"}},r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement(I,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"or use a social channel")),r.a.createElement("div",{className:"row justify-content-center divCredenciales textoAboutCredenciales mt-1"},r.a.createElement("div",{className:"col-6 col-md-4 mb-2"},r.a.createElement("a",{href:"https://twitter.com/_rubensantana",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter fa-3x",title:"Twitter"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://wa.me/584122516268",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-whatsapp fa-3x",title:"Whatsapp"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://t.me/rubensantana",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-telegram-plane fa-3x",title:"Telegram"})))))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("span",{className:"closeModal"},"\xd7"),r.a.createElement("div",{id:"divModalImagen"}),r.a.createElement("div",{id:"caption"}))}}]),a}(n.Component),M=a(14),x=a(9),B=a(55),T=[{nombre:"Home",ruta:"/"},{nombre:"About",ruta:"/about"},{nombre:"Portfolio",ruta:"/portfolio"},{nombre:"Contact",ruta:"/contact"}],_=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).componentDidMount=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new B("GreatDayPersonalUse"),a=new B("Montserrat-Thin"),n=new B("OstrichSans-Medium"),Promise.all([t.load(null,3e5),a.load(null,3e5),n.load(null,3e5)]).then((function(){var e=document.getElementById("myVideo");setTimeout((function(){e.play()}),100),window.Spinner.quitarInicio()})),new B("fa-brands-400").load(null,3e5),new B("fa-solid-900").load(null,3e5);case 8:case"end":return e.stop()}}),e)}))),e.state={linkActual:0},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"divHeader"},r.a.createElement("header",{className:"App-header header"},r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},T.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(M.b,{to:t.ruta,onClick:function(){return t=a,e.state.linkActual!==t&&(window.Spinner.colocar(),e.setState({linkActual:t})),void(document.body.offsetWidth<768&&document.getElementById("menu-btn").click());var t}},t.nombre))}))))),r.a.createElement("video",{id:"myVideo",muted:!0,loop:!0,playsInline:!0,src:"./video/intro.mp4",type:"video/mp4",onLoadStart:function(){window.Spinner.colocarInicio()}}),r.a.createElement("div",{id:"loaderInicio",className:"loader"}),r.a.createElement("div",{id:"loader",className:"loader"}),r.a.createElement("div",{id:"contentInicio",className:"blurring"},r.a.createElement("div",{id:"content",className:"blurring"},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:f}),r.a.createElement(x.a,{path:"/about",component:b}),r.a.createElement(x.a,{path:"/portfolio",component:N}),r.a.createElement(x.a,{path:"/contact",component:O})),r.a.createElement(A,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(30),L=a.n(D);window.Spinner=L.a,i.a.render(r.a.createElement(M.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.93dc3fcc.chunk.js.map
=======
(this.webpackJsonprubensantana=this.webpackJsonprubensantana||[]).push([[0],{30:function(e,t){e.exports={colocar:function(){document.getElementById("content").classList.add("blurring"),document.getElementById("loader").classList.add("loader")},quitar:function(){setTimeout((function(){document.getElementById("loader").classList.remove("loader"),document.getElementById("content").classList.remove("blurring")}),800)},colocarInicio:function(){document.getElementById("contentInicio").classList.add("blurring"),document.getElementById("loaderInicio").classList.add("loader")},quitarInicio:function(){document.getElementById("loaderInicio").classList.remove("loader"),document.getElementById("contentInicio").classList.remove("blurring")}}},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e){e.exports=JSON.parse('[{"id":0,"name":"Ethereum Certification System","description":"Decentralized application for certification of courses and university degrees","img":"./img/trabajos/certification-system.mp4","type":"video","link":"upta.000webhostapp.com/?cedula=18110778","repo":"github.com/santanaruben/certificados"},{"id":1,"name":"CryptoJustice","description":"System for Legal Procedures using Ethereum and React","img":"./img/trabajos/cryptojustice.jpg","type":"img","link":"thecryptojustice.com","repo":"github.com/santanaruben/cryptojustice"},{"id":2,"name":"Toll Road System","description":"Ethereum regulated system of toll roads on which vehicles pay to drive on them","img":"./img/trabajos/tollRoad-system.jpg","type":"img","link":"git.academy.b9lab.com/ETH-SUB-exam-projects/rubensantana-code","repo":"github.com/santanaruben/TollRoadSystem"},{"id":3,"name":"Ethereum Rock Paper Scissors Game","description":"Classic game where the players bet an ETH amount, then each player submits their move, and the contract rewards the winner with the Ether wagered","img":"./img/trabajos/rockPaperScissors-system.png","type":"img","link":null,"repo":"github.com/santanaruben/rockPaperScissors"},{"id":4,"name":"Descentralized Library","description":"Ethereum library system where users can have book\'s ownership and transfer their books (ERC-721) to the library and to other users","img":"./img/trabajos/library-system.jpg","type":"img","link":null,"repo":"github.com/santanaruben/ethereum/tree/master/projects/biblioteca"},{"id":5,"name":"Descentralized Store","description":"Ethereum Store system, using an ERC-20 as the coin necesary to make transactions","img":"./img/trabajos/store-system.png","type":"img","link":null,"repo":"github.com/santanaruben/store"},{"id":6,"name":"eCommerce","description":"The store and services provided by Armani Engineering Corporation","img":"./img/trabajos/armani-engr.jpg","type":"img","link":"armani-engr.com","repo":null},{"id":7,"name":"Shortener","description":"A corporate link shortener with statistics page, and traffic location","img":"./img/trabajos/armani-shortener.png","type":"img","link":"files.armani-engr.com","repo":null},{"id":8,"name":"Business Website","description":"Enterprise website for design and engineering services","img":"./img/trabajos/designsmiranda.jpg","type":"img","link":"designsmiranda.com","repo":null},{"id":9,"name":"Splitter System","description":"Amount splitter application for ethereum","img":"./img/trabajos/splitter-system.png","type":"img","link":null,"repo":"github.com/santanaruben/splitter"},{"id":10,"name":"Remittance System","description":"Remittance application for ethereum","img":"./img/trabajos/remittance.jpg","type":"img","link":null,"repo":"github.com/santanaruben/remittance"}]')},54:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),c=(a(36),a(17)),l=a.n(c),s=a(23),m=a(2),u=a(3),d=a(4),p=a(5),b=(a(38),a(39),a(42),a(43),a(44),a(45),a(46),a(47),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"verCredencial",value:function(e,t,a,n){e.preventDefault();var r=document.getElementById("myModal"),o=document.createElement("img");document.getElementById("divModalImagen").appendChild(o),o.setAttribute("id","img01"),o.setAttribute("class","modal-content");var i=document.getElementById("caption");r.style.display="block",o.src="./img/credenciales/"+t+"."+a,i.innerHTML=t.toUpperCase()+n.toUpperCase(),document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",r.style.display="none"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("img",{id:"fotoAbout",src:"./img/ruben.jpg",className:"img-fluid align-self-center rounded",alt:""}),r.a.createElement("hr",null),r.a.createElement("p",{className:"textoAbout"},"I'm Rub\xe9n, I specialize in creating decentralized applications using Ethereum Smart Contracts. I'm a Computer Science Engineer and I have a Master's Degree in Software Development. Also I have an online career as an Ethereum Developer from ",r.a.createElement("a",{className:"linkClaro",href:"https://academy.b9lab.com/",target:"_blank",rel:"noopener noreferrer"},"B9LabAcademy"),"."),r.a.createElement("p",{className:"textoAbout"},"I worked as a Sap Abap Developer in Unicon-ArcelorMittal for two years and as a Teacher for the UPT Aragua the last seven years."),r.a.createElement("hr",null))),r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mb-3"},r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Degrees")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"ENG"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"ingenieria","jpg","")},href:"#"},r.a.createElement("i",{className:"fa fa-user-graduate fa-3x",title:"Click to see the credential"}))),r.a.createElement("div",null,r.a.createElement("span",null,"MSC"),r.a.createElement("br",null),r.a.createElement("span",{onClick:function(t){return e.verCredencial(t,"maestria","png"," - versi\xf3n digital, en espera de recibimiento")},href:"#"},r.a.createElement("i",{className:"fa fa-user-graduate fa-3x",title:"Click to see the credential"}))))),r.a.createElement("div",{className:"col-6 col-md-4"},r.a.createElement("h6",null,r.a.createElement("b",null,"Certifications")),r.a.createElement("div",{className:"divCredenciales"},r.a.createElement("div",null,r.a.createElement("span",null,"ETH"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://certificates.b9lab.com/certificate.html?uuid=4908444d-5c73-4ea9-bc8b-d28ed59c9661",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-ethereum fa-3x",title:"Click to see the credential"}))),r.a.createElement("div",null,r.a.createElement("span",null,"SAP"),r.a.createElement("br",null),r.a.createElement("a",{href:"http://www.cvosoft.com/certificaciones/sap/legajo-UU86K.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-certificate fa-3x",title:"Click to see the credential"})))))),r.a.createElement("div",{className:"row justify-content-center mb-2"},r.a.createElement("div",{className:"col-11 col-md-8"},r.a.createElement("hr",null),r.a.createElement("a",{className:"btn btn-light",href:"./docs/CV_Ruben_Santana_2021_en.pdf",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("b",null,"Resume")))))}}]),a}(n.Component)),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",id:"home"},r.a.createElement("div",{className:"row align-items-center",id:"contenido"},r.a.createElement("div",{className:"col-12 titulo"},"Rub\xe9n Santana"),r.a.createElement("div",{className:"col-12 subtitulo"},"SOFTWARE \xa0 DEVELOPER")))}}]),a}(n.Component),h=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"zoom",value:function(e){e.preventDefault();var t=document.getElementById("myModal"),a=document.createElement(this.props.trabajo.type);document.getElementById("divModalImagen").appendChild(a),a.setAttribute("id","img01"),a.setAttribute("class","modal-content"),a.setAttribute("controls","true"),a.setAttribute("autoplay","true");var n=document.getElementById("caption");t.style.display="block",a.src=this.props.trabajo.img,n.innerHTML=this.props.trabajo.name,document.getElementsByClassName("closeModal")[0].onclick=function(){document.getElementById("divModalImagen").innerHTML="",t.style.display="none"}}},{key:"render",value:function(){return void 0==this.props.trabajo?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",null,r.a.createElement("div",{className:"divCuboTitulo"},r.a.createElement("h3",null,this.props.trabajo.name)),r.a.createElement("div",{className:"divCuboImagen"},r.a.createElement(this.props.trabajo.type,{onClick:this.zoom.bind(this),src:this.props.trabajo.img,alt:this.props.trabajo.name,controls:!0,autoPlay:!1})),r.a.createElement("div",{className:"divCuboBotones"},r.a.createElement("a",{href:"http://"+this.props.trabajo.repo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"github",className:"fab fa-github fa-3x ",title:"Repo"})),r.a.createElement("a",{href:"https://"+this.props.trabajo.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{id:"linkApp",className:"fa fa-link fa-3x",title:"Link"}))))}}]),a}(n.Component),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"cubo_cara "+this.props.clase},r.a.createElement(h,{trabajo:this.props.trabajo}))}}]),a}(n.Component),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.trabajos;return r.a.createElement("div",{className:"escena--cubo"},r.a.createElement("div",{className:"cubo cubo--rotar comienza-girando mostrar-frente"},this.props.clasesCara.map((function(t,a){return r.a.createElement(g,{key:a,clase:t,trabajo:e[a]})}))))}}]),a}(n.Component);E.defaultProps={clasesCara:["cubo_cara--frente","cubo_cara--derecha","cubo_cara--detras","cubo_cara--izquierda","cubo_cara--arriba","cubo_cara--abajo"]};var v=E,y=a(24),j=a.n(y),k=[{id:0,name:null,description:null,img:null,type:"img",link:null,repo:null}],w=["mostrar-frente","mostrar-derecha","mostrar-detras","mostrar-izquierda","mostrar-arriba","mostrar-abajo"],N=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={claseSeleccionada:0,trabajos:k,listaTrabajos:k},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;"localhost"===document.location.hostname||"127.0.0.1"===document.location.hostname?(k=a(51),this.setState({trabajos:k,listaTrabajos:k})):fetch("https://raw.githubusercontent.com/santanaruben/santanaruben.github.io/master/json/trabajos.json").then((function(e){return e.json()})).then((function(t){e.setState({trabajos:t,listaTrabajos:t})})),window.Spinner.quitar()}},{key:"render",value:function(){var e=this,t=this.state.trabajos,a=[];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioCubo"},r.a.createElement(v,{trabajos:this.state.listaTrabajos})),r.a.createElement("div",{className:"col-12 col-lg-6 divPortafolioTabla mb-4"},r.a.createElement(j.a,{columns:[{name:"Name",selector:"name",sortable:!0,center:!0,maxWidth:"150px"},{name:"Description",selector:"description",sortable:!0,center:!0}],data:t,noHeader:!0,keyField:"id",pointerOnHover:!0,pagination:!0,paginationPerPage:6,paginationRowsPerPageOptions:[6],paginationComponentOptions:{noRowsPerPage:!0},onRowClicked:function(n){return function(n){for(var r=6*(Math.trunc(n/6)+1-1);r<t.length;r++)a.push(t[r]);e.setState({listaTrabajos:a});var o=n%6,i=w[e.state.claseSeleccionada],c=document.querySelector(".cubo");c.classList.remove(i),c.classList.add(w[o]),e.setState({claseSeleccionada:o}),document.querySelector(".divPortafolioCubo").scrollIntoView({block:"center"})}(n.id)}}))))}}]),n}(n.Component),C=a(28),S=a.n(C);a(54);function I(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"tituloForm"},"CONTACT ME"),r.a.createElement("form",{id:"formularioCorreo",className:"topBefore",onSubmit:function(e){e.preventDefault(),window.Spinner.colocar(),S.a.sendForm("service_b5p5kxb","template_pg5umlj",e.target,"user_MZ9TV3NwdAxHZ8Hn8ADhT").then((function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has been sent",document.getElementById("formularioCorreo").reset(),console.log(e.text)}),(function(e){window.Spinner.quitar(),document.getElementById("submit").value="Your message has not been sent. Try again later!",console.log(e.text)}))}},r.a.createElement("input",{type:"hidden",name:"to_name",value:"Ruben"}),r.a.createElement("input",{type:"text",name:"from_name",placeholder:"NAME",required:!0}),r.a.createElement("input",{type:"email",name:"reply_to",placeholder:"E-MAIL",required:!0}),r.a.createElement("textarea",{name:"message",type:"text",placeholder:"MESSAGE",required:!0}),r.a.createElement("input",{id:"submit",type:"submit",value:"SEND!"})))}var O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.Spinner.quitar()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid mt-5",style:{color:"white"}},r.a.createElement("div",{className:"row justify-content-center textoAboutCredenciales mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement(I,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"or use a social channel")),r.a.createElement("div",{className:"row justify-content-center divCredenciales textoAboutCredenciales mt-1"},r.a.createElement("div",{className:"col-6 col-md-4 mb-2"},r.a.createElement("a",{href:"https://twitter.com/_rubensantana",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter fa-3x",title:"Twitter"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://wa.me/584124435919",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-whatsapp fa-3x",title:"Whatsapp"})),"\xa0\xa0\xa0",r.a.createElement("a",{href:"https://t.me/rubensantana",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-telegram-plane fa-3x",title:"Telegram"})))))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("span",{className:"closeModal"},"\xd7"),r.a.createElement("div",{id:"divModalImagen"}),r.a.createElement("div",{id:"caption"}))}}]),a}(n.Component),M=a(14),x=a(9),B=a(55),T=[{nombre:"Home",ruta:"/"},{nombre:"About",ruta:"/about"},{nombre:"Portfolio",ruta:"/portfolio"},{nombre:"Contact",ruta:"/contact"}],_=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).componentDidMount=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new B("GreatDayPersonalUse"),a=new B("Montserrat-Thin"),n=new B("OstrichSans-Medium"),Promise.all([t.load(null,3e5),a.load(null,3e5),n.load(null,3e5)]).then((function(){var e=document.getElementById("myVideo");setTimeout((function(){e.play()}),100),window.Spinner.quitarInicio()})),new B("fa-brands-400").load(null,3e5),new B("fa-solid-900").load(null,3e5);case 8:case"end":return e.stop()}}),e)}))),e.state={linkActual:0},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"divHeader"},r.a.createElement("header",{className:"App-header header"},r.a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),r.a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},r.a.createElement("span",{className:"navicon"})),r.a.createElement("ul",{className:"menu"},T.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(M.b,{to:t.ruta,onClick:function(){return t=a,e.state.linkActual!==t&&(window.Spinner.colocar(),e.setState({linkActual:t})),void(document.body.offsetWidth<768&&document.getElementById("menu-btn").click());var t}},t.nombre))}))))),r.a.createElement("video",{id:"myVideo",muted:!0,loop:!0,playsInline:!0,src:"./video/intro.mp4",type:"video/mp4",onLoadStart:function(){window.Spinner.colocarInicio()}}),r.a.createElement("div",{id:"loaderInicio",className:"loader"}),r.a.createElement("div",{id:"loader",className:"loader"}),r.a.createElement("div",{id:"contentInicio",className:"blurring"},r.a.createElement("div",{id:"content",className:"blurring"},r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:f}),r.a.createElement(x.a,{path:"/about",component:b}),r.a.createElement(x.a,{path:"/portfolio",component:N}),r.a.createElement(x.a,{path:"/contact",component:O})),r.a.createElement(A,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(30),L=a.n(D);window.Spinner=L.a,i.a.render(r.a.createElement(M.a,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.abb47910.chunk.js.map
>>>>>>> Stashed changes:static/js/main.abb47910.chunk.js
