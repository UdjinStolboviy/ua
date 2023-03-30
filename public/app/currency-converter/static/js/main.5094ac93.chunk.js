(this["webpackJsonpcrypto-converter"]=this["webpackJsonpcrypto-converter"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(152),l=a(153),u=a(23),s=a(143),m=a(147),p=a(146),f=a(138),b=a(144),d=a(145),g=a(142),y=Object(u.b)("currenciesStore","converterStore")(Object(u.c)((function(e){var t=e.classes,a=e.currenciesStore,n=e.converterStore,c=a.getItems,i=a.getDiffObj;r.a.useEffect((function(){a&&(a.fetchCoins(),setInterval((function(){a.fetchCoins()}),3e4))}),[]);return r.a.createElement(f.a,{component:g.a},r.a.createElement(s.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(b.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null),r.a.createElement(p.a,{align:"left"},"Name"),r.a.createElement(p.a,{align:"left"},"UAH"),r.a.createElement(p.a,{align:"left"},"Price bay"),r.a.createElement(p.a,{align:"left"},"Price sell"))),r.a.createElement(m.a,null,c.length?c.map((function(e){return r.a.createElement(d.a,{onClick:function(){return function(e){n&&n.setSelectedCoin(e)}(e)},className:t.rowCurrency,hover:!0,key:e.name},r.a.createElement(p.a,null,r.a.createElement("img",{className:t.currencyIcon,src:e.imageUrl,alt:"img"})),r.a.createElement(p.a,{align:"left"},e.name),r.a.createElement(p.a,{align:"left"},e.fullName),r.a.createElement(p.a,{className:i[e.name]&&t["".concat(i[e.name],"Column")],align:"left"},"$",e.price),r.a.createElement(p.a,{align:"left"},"$",e.volume24Hour))})):"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")))}))),v=a(48),E=a(39),O=a(40),h=a(157),j=a(154),S=a(155),C=a(148),I=a(158);function N(e,t){var a;switch(t.type){case"SET_VALUE":return Object(O.a)(Object(O.a)({},e),{},(a={},Object(E.a)(a,t.payload.name,t.payload.value),Object(E.a)(a,"value2",String(Number(t.payload.value)*e.inPrice/e.outPrice)),a));case"SET_PRICES":return Object(O.a)(Object(O.a)({},e),{},{inPrice:t.payload.in,outPrice:t.payload.out});default:return e}}var w=Object(u.b)("currenciesStore","converterStore")(Object(u.c)((function(e){var t,a=e.classes,n=e.currenciesStore,c=e.converterStore,i=r.a.useState("USD"),o=Object(v.a)(i,2),l=o[0],u=o[1],s=n.getItems.map((function(e){return e.name})),m=Number(null===c||void 0===c?void 0:c.getSelectedCoin.price)||0,p=Number(null===(t=n.getItems.find((function(e){return e.name===l})))||void 0===t?void 0:t.price)||0,f=r.a.useReducer(N,{value1:"",value2:"",inPrice:m,outPrice:p}),b=Object(v.a)(f,2),d=b[0],y=b[1];r.a.useEffect((function(){y({type:"SET_PRICES",payload:{in:m,out:p}})}),[m,p]);return r.a.createElement(g.a,{className:a.paper},r.a.createElement("div",{className:a.cryptoInputBox},r.a.createElement(C.a,{className:a.currencyInput},r.a.createElement(h.a,{type:"number",value:d.value1,onChange:function(e){return t="value1",a=e.target.value,void y({type:"SET_VALUE",payload:{name:t,value:a}});var t,a},label:"\u0421\u0443\u043c\u043c\u0430"})),r.a.createElement(C.a,{className:a.currencyType},r.a.createElement(I.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"\u0412\u0430\u043b\u044e\u0442\u0430"),r.a.createElement(j.a,{value:(null===c||void 0===c?void 0:c.getSelectedCoin.name)||""},s.map((function(e){return r.a.createElement(S.a,{value:e},e)}))))),r.a.createElement("div",{className:a.cryptoInputBox},r.a.createElement(C.a,{className:a.currencyInput},r.a.createElement(h.a,{type:"number",value:d.value2,label:"\u0421\u0443\u043c\u043c\u0430"})),r.a.createElement(C.a,{className:a.currencyType},r.a.createElement(I.a,{shrink:!0,id:"demo-simple-select-placeholder-label-label"},"\u0412\u0430\u043b\u044e\u0442\u0430"),r.a.createElement(j.a,{onChange:function(e){return u(e.target.value)},value:l},r.a.createElement(S.a,{value:"USD"},"USD"),s.map((function(e){return r.a.createElement(S.a,{value:e},e)}))))))}))),k=a(151),P=a(156),x=Object(k.a)((function(e){return Object(P.a)({root:{padding:e.spacing(10)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},cryptoInputBox:{marginBottom:20,marginTop:20},currencyInput:{minWidth:"calc(70% - 10px)",marginRight:10},currencyType:{minWidth:"30%"},table:{minWidth:650},currencyIcon:{width:18,height:18,borderRadius:30},redColumn:{backgroundColor:"#d8ffc4"},greenColumn:{backgroundColor:"#ffdada"},rowCurrency:{cursor:"pointer"}})}));var D,T,U,z,B,R,_,A=function(){var e=x();return r.a.createElement(o.a,{className:e.root,maxWidth:"lg"},r.a.createElement(l.a,{container:!0,spacing:3},r.a.createElement(l.a,{item:!0,xs:8},r.a.createElement(y,{classes:e})),r.a.createElement(l.a,{item:!0,xs:4},r.a.createElement(w,{classes:e}))))},W=a(28),H=a(46),J=a(47),L=a(16),V=(a(55),a(5)),$=(D=function(){function e(){Object(H.a)(this,e),Object(W.a)(this,"selectedCoin",T,this)}return Object(J.a)(e,[{key:"setSelectedCoin",value:function(e){this.selectedCoin={name:e.name,price:e.price}}},{key:"getSelectedCoin",get:function(){return this.selectedCoin}}]),e}(),T=Object(L.a)(D.prototype,"selectedCoin",[V.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{name:"",price:0}}}),Object(L.a)(D.prototype,"getSelectedCoin",[V.g],Object.getOwnPropertyDescriptor(D.prototype,"getSelectedCoin"),D.prototype),Object(L.a)(D.prototype,"setSelectedCoin",[V.f],Object.getOwnPropertyDescriptor(D.prototype,"setSelectedCoin"),D.prototype),D),M=a(65),q=a.n(M),F=(U=function(){function e(){Object(H.a)(this,e),Object(W.a)(this,"items",z,this),Object(W.a)(this,"diffObj",B,this),Object(W.a)(this,"setItems",R,this),Object(W.a)(this,"fetchCoins",_,this)}return Object(J.a)(e,[{key:"diffCurrencies",value:function(e,t){return e.filter((function(e,a){return e.price!==t[a].price}))}},{key:"getItems",get:function(){return this.items}},{key:"getDiffObj",get:function(){return this.diffObj}}]),e}(),z=Object(L.a)(U.prototype,"items",[V.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=Object(L.a)(U.prototype,"diffObj",[V.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),Object(L.a)(U.prototype,"getItems",[V.g],Object.getOwnPropertyDescriptor(U.prototype,"getItems"),U.prototype),Object(L.a)(U.prototype,"getDiffObj",[V.g],Object.getOwnPropertyDescriptor(U.prototype,"getDiffObj"),U.prototype),R=Object(L.a)(U.prototype,"setItems",[V.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.diffObj=e.diffCurrencies(e.items,t).reduce((function(a,n){var r=t.find((function(e){return e.name===n.name})),c=e.items.find((function(e){return e.name===r.name})),i=r.price===c.price?"":r.price>c.price?"green":"red";return a[r.name]=i,a}),{}),e.items=t,setTimeout((function(){e.diffObj={}}),1e4)}}}),_=Object(L.a)(U.prototype,"fetchCoins",[V.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){q.a.get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11").then((function(t){var a=t.data.map((function(e){return{name:e.ccy,fullName:e.base_ccy,imageUrl:"https://udjinstolboviy.github.io/ua/app/currency-converter/money.png",price:e.buy,volume24Hour:e.sale}}));e.setItems(a),G.converterStore.setSelectedCoin(a[0])}))}}}),U),G={converterStore:new $,currenciesStore:new F};a(99);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,G,r.a.createElement(A,null))),document.getElementById("root"))},75:function(e,t,a){e.exports=a(100)},99:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.5094ac93.chunk.js.map