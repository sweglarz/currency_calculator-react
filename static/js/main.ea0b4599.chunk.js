(this["webpackJsonpcurrency-calculator-react"]=this["webpackJsonpcurrency-calculator-react"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r,a,c,o,i,u,s,b,l,d,j,f=t(1),x=t.n(f),m=t(9),h=t.n(m),p=t(2),g=t(3),O=t.p+"static/media/background.e6793f55.jpg",v=Object(g.a)(r||(r=Object(p.a)(["\nhtml {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    font-family: 'Nunito', sans-serif;\n  }\n  \n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n  \n  body{\n    margin: 0 auto;\n    height: 100vh;\n    max-width: 1000px;\n    padding: 30px;\n    background-image: url(\"",'");\n    background-position: center;\n    background-size: cover;\n  }\n'])),O),y=t(4),w=g.b.form(a||(a=Object(p.a)(["\n    max-width: 700px;\n    margin: 0 auto;\n"]))),k=g.b.fieldset(c||(c=Object(p.a)(["\n    background-color: rgba(0, 0, 0, 0.700);\n    border: none;\n    border-radius: 5px;\n    padding: 15px 40px;\n"]))),z=g.b.p(o||(o=Object(p.a)(["\n    color: #fff;\n"]))),S=g.b.legend(i||(i=Object(p.a)(["\n    background-color: #e08e16;\n    color: #fff;\n    padding: 7px;\n    border-radius: 10px;\n    font-weight: 700;\n"]))),F=g.b.span(u||(u=Object(p.a)(["\n    display: inline-block;\n    max-width: 200px;\n    width: 100%;\n"]))),C=g.b.input(s||(s=Object(p.a)(["\n    max-width: 200px;\n    width: 100%;\n    padding: 7px;\n\n    @media(max-width: 550px){\n        min-width: 100%;\n    }\n"]))),D=g.b.button(b||(b=Object(p.a)(["\n    width: 100%;\n    padding: 10px;\n    background-color: #e08e16;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    margin: 20px 0;\n    cursor: pointer;\n\n    &:hover{\n        background-color: #f19f17;\n    }\n    &:active{\n        background-color: #f29f28;\n    }\n"]))),P=g.b.p(l||(l=Object(p.a)(["\n    font-size: 18px;\n    color: #fff;\n"]))),I=t(0),E=function(n){var e=n.result;return Object(I.jsxs)(P,{children:["Otrzymasz:\xa0",void 0!==e&&Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("strong",{className:"form__result",children:[e.afterConversion.toFixed(2),"\xa0",e.currency]})})]})},L=g.b.p(d||(d=Object(p.a)(["\n    font-family: 'Space Mono', monospace;\n    color: #fff;\n    font-size: 14px;\n    text-align: right;\n    margin-bottom: 40px;\n\n    @media (max-width: 550px){\n        text-align: center\n    };\n"]))),B=function(n){return"".concat(n.toLocaleString(void 0,{weekday:"long",hour:"2-digit",minute:"2-digit",second:"2-digit",day:"numeric",month:"long"}))},N=function(){var n=function(){var n=Object(f.useState)(new Date),e=Object(y.a)(n,2),t=e[0],r=e[1];return Object(f.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(n)}}),[]),t}();return Object(I.jsxs)(L,{children:["Dzisiaj jest ",B(n)]})},R=[{summary:"EUR",name:"Euro",rate:4.54},{summary:"USD",name:"Dolar Ameryka\u0144ski",rate:3.79},{summary:"GBP",name:"Funt Szterling",rate:5.22}],J=function(n){var e=n.calculateResult,t=n.result,r=Object(f.useState)(""),a=Object(y.a)(r,2),c=a[0],o=a[1],i=Object(f.useState)(R[0].summary),u=Object(y.a)(i,2),s=u[0],b=u[1];return Object(I.jsx)(w,{onSubmit:function(n){n.preventDefault(),e(c,s)},children:Object(I.jsxs)(k,{children:[Object(I.jsx)(S,{children:"Kalkulator Walut"}),Object(I.jsx)(N,{}),Object(I.jsx)(z,{children:Object(I.jsxs)("label",{children:[Object(I.jsx)(F,{children:"Podaj kwot\u0119 w PLN*:"}),Object(I.jsx)(C,{value:c,onChange:function(n){var e=n.target;return o(e.value)},type:"number",min:"1",step:"1",required:!0,placeholder:"Podaj kwot\u0119"})]})}),Object(I.jsx)(z,{children:Object(I.jsxs)("label",{children:[Object(I.jsx)(F,{children:"Wymieniam na:"}),Object(I.jsxs)(C,{as:"select",value:s,onChange:function(n){var e=n.target;return b(e.value)},children:[R.map((function(n){return Object(I.jsx)("option",{value:n.summary,children:n.name},n.summary)})),";"]})]})}),Object(I.jsx)(D,{children:"Przelicz"}),Object(I.jsx)(E,{result:t})]})})},M=g.b.h1(j||(j=Object(p.a)(["\n    text-align: center;\n    color: #fff;\n    text-shadow: 3px 3px 3px #000;\n"]))),T=function(){return Object(I.jsx)(M,{children:"Internetowy kantor wymiany walut"})};var U=function(){var n=Object(f.useState)(),e=Object(y.a)(n,2),t=e[0],r=e[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(T,{}),Object(I.jsx)(J,{calculateResult:function(n,e){var t=R.find((function(n){return n.summary===e})).rate;r({afterConversion:+n/t,currency:e})},result:t})]})},W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),c(n),o(n)}))};h.a.render(Object(I.jsxs)(x.a.StrictMode,{children:[Object(I.jsx)(v,{}),Object(I.jsx)(U,{})]}),document.getElementById("root")),W()}},[[20,1,2]]]);
//# sourceMappingURL=main.ea0b4599.chunk.js.map