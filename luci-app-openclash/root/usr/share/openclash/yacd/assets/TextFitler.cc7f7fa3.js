import{g as i,r as n,O as l,N as u,j as p}from"./vendor.38e754a4.js";import{d as x}from"./debounce.76599460.js";const _="_rotate_1dspl_1",g="_isRotating_1dspl_5",d="_rotating_1dspl_1";var r={rotate:_,isRotating:g,rotating:d};function E({isRotating:t}){const e=i(r.rotate,{[r.isRotating]:t});return n.exports.createElement("span",{className:e},n.exports.createElement(l,{width:16}))}const{useCallback:m,useState:R,useMemo:f}=p;function h(t){const[,e]=u(t),[a,c]=R(""),o=f(()=>x(e,300),[e]);return[m(s=>{c(s.target.value),o(s.target.value)},[o]),a]}const v="_input_16a1f_1";var T={input:v};function N(t){const[e,a]=h(t.textAtom);return n.exports.createElement("input",{className:T.input,type:"text",value:a,onChange:e,placeholder:t.placeholder})}export{E as R,N as T};
