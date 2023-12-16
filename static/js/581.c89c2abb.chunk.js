"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[581],{3581:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var r,o,i,c,u,a,s,l,m,d,h,f,p,g,x=t(2791),b=t(9434),j=t(4270),w=t(168),Z=t(5867),v=Z.ZP.div(r||(r=(0,w.Z)(["\n    width: 600px;\n    margin: "," auto;\n    padding: ",";\n    background-color: ",";\n    border-radius: ",";\n    border: none;\n    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);\n        text-align: center;\n\n"])),(function(n){return n.theme.spacing(15)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.lightGrey}),(function(n){return n.theme.radii.lg})),k=Z.ZP.h1(o||(o=(0,w.Z)(["\n    color: ",";\n    margin-bottom: ",";\n    font-size: 40px;\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.spacing(6)})),y=Z.ZP.h2(i||(i=(0,w.Z)(["\n    color: ",";\n    margin-bottom: ",";\n    font-size: 32px;\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.spacing(2)})),P=t(5705),z=t(6727),C=t(5218),X=(0,Z.ZP)(P.l0)(c||(c=(0,w.Z)(["\n    display: inline-flex;\n    flex-direction: column;\n    width: 400px;\n    gap: ",";\n    margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(8)})),_=Z.ZP.label(u||(u=(0,w.Z)(["\n    text-align: start;\n    font-size: 16px;\n    font-weight: 500;\n    color: ",";\n\n"])),(function(n){return n.theme.colors.black})),F=(0,Z.ZP)(P.gN)(a||(a=(0,w.Z)(["\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    font-size: 18px;\n    font-weight: 400;\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.md})),N=(0,Z.ZP)(P.Bc)(s||(s=(0,w.Z)(["\n    color: ",";\n    font-size: 16px;\n    font-weight: 500;\n    margin-right: auto;\n"])),(function(n){return n.theme.colors.red})),q=Z.ZP.button(l||(l=(0,w.Z)(["\n    width: 180px;\n    padding: ",";\n    margin-right: auto;\n    margin-left: auto;\n    margin-top: ",";\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n    border: 4px solid ",";\n    font-size: 18px;\n    font-weight: 400;\n    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\n    &:hover,\n    &:focus {\n        border: 4px solid ",";\n        color: ",";\n        font-weight: 600;\n    }\n\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.darkGreen}),(function(n){return n.theme.colors.darkGreen})),I=t(6916),L=function(n){return n.contacts.items},S=function(n){return n.contacts.isLoading},G=function(n){return n.contacts.error},A=function(n){return n.filter},E=(0,I.P1)([L,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))})),J=t(3634),K=t(184),B=z.Ry().shape({name:z.Z_().min(2,"Name must contain at least 2 characters").max(30,"Too long name").required("Name is required!"),number:z.Z_().matches(/^\d{3}-\d{3}-\d{4}$/,{message:"Invalid Phone Number! Use the format 050-123-4567.",excludeEmptyString:!1}).required("Phone number is required!").max(12,"Invalid phone number!")}),D=function(){var n=(0,b.v9)(L),e=(0,b.I0)();return(0,K.jsx)(P.J9,{initialValues:{name:"",number:""},validationSchema:B,onSubmit:function(t,r){if(n.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return r.resetForm(),void C.Am.error("".concat(t.name," is alredy in contacts."));e((0,J.uK)(t)),r.resetForm()},children:(0,K.jsxs)(X,{children:[(0,K.jsx)(_,{htmlFor:"name",children:"Name"}),(0,K.jsx)(F,{type:"text",name:"name",id:"name",autoComplete:"on",placeholder:"John Smith"}),(0,K.jsx)(N,{name:"name",component:"div"}),(0,K.jsx)(_,{htmlFor:"number",children:"Number"}),(0,K.jsx)(F,{type:"tel",name:"number",id:"number",autoComplete:"on",placeholder:"XXX-XXX-XXXX"}),(0,K.jsx)(N,{name:"number",component:"div"}),(0,K.jsx)(q,{type:"submit",children:"Add contact"})]})})},M=Z.ZP.li(m||(m=(0,w.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 400px;\n    margin: 0 auto;\n    margin-top: ",";\n\n"])),(function(n){return n.theme.spacing(3)})),R=Z.ZP.div(d||(d=(0,w.Z)(["\n    display: flex;\n    width: 320px;\n    justify-content: space-between;\n    color: ",";\n    font-size: 16px;\n    font-weight: 500;\n\n"])),(function(n){return n.theme.colors.black})),T=Z.ZP.button(h||(h=(0,w.Z)(["\n    padding: ",";\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n    border: none;\n    font-size: 16px;\n    font-weight: 400;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\n    &:hover,\n    &:focus {\n        background-color: ",";\n        font-weight: 600;\n    }\n"])),(function(n){return n.theme.spacing(1.5)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.colors.red})),U=function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,i=(0,b.I0)();return(0,K.jsxs)(M,{children:[(0,K.jsxs)(R,{children:[(0,K.jsxs)("span",{children:[t,":"]}),(0,K.jsx)("span",{children:r})]}),(0,K.jsx)(T,{type:"button",onClick:function(){return i((0,J.GK)(o))},children:"Delete"})]})},V=function(){var n=(0,b.v9)(E);return(0,K.jsx)("ul",{children:n.map((function(n){return(0,K.jsx)(U,{contact:n},n.id)}))})},Y=Z.ZP.h3(f||(f=(0,w.Z)(["\n    margin-bottom: ",";\n    color: ",";\n    font-size: 20px;\n    font-weight: 500;\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.colors.black})),$=Z.ZP.input(p||(p=(0,w.Z)(["\n    width: 400px;\n    padding: "," ",";\n    border: 1px solid ",";\n    border-radius: ",";\n    font-size: 18px;\n    font-weight: 400;\n"])),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.md})),H=t(4808),O=function(){var n=(0,b.v9)(A),e=(0,b.I0)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Y,{children:"Find contacts by name"}),(0,K.jsx)($,{type:"text",name:"filter",id:"filter",value:n,required:!0,onChange:function(n){return e((0,H.M6)(n.target.value))}})]})},Q=t(2598),W=Z.ZP.div(g||(g=(0,w.Z)(["\n    display: flex;\n    justify-content: center;\n"]))),nn=function(){return(0,K.jsx)(W,{children:(0,K.jsx)(Q.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},en=function(){var n=(0,b.I0)(),e=(0,b.v9)(S),t=(0,b.v9)(G);return(0,x.useEffect)((function(){n((0,J.yF)())}),[n]),(0,K.jsxs)(K.Fragment,{children:[e&&!t&&(0,K.jsx)(nn,{}),(0,K.jsx)(j.q,{children:(0,K.jsx)("title",{children:"Your tasks"})}),(0,K.jsxs)(v,{children:[(0,K.jsx)(k,{children:"Phonebook"}),(0,K.jsx)(D,{}),(0,K.jsx)(y,{children:"Contacts"}),(0,K.jsx)(O,{}),(0,K.jsx)(V,{})]})]})}}}]);
//# sourceMappingURL=581.c89c2abb.chunk.js.map