var re=Object.defineProperty;var X=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var Q=(s,a,t)=>a in s?re(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,P=(s,a)=>{for(var t in a||(a={}))se.call(a,t)&&Q(s,t,a[t]);if(X)for(var t of X(a))ne.call(a,t)&&Q(s,t,a[t]);return s};import{o as h,c as L,a as _,r as J,b as ie,g as M,d as E,u as Y,i,e as z,f as e,h as q,V as K,w as n,j as r,N as v,k,l as de,m as ce,n as pe,p as ge,q as me,s as he,t as fe,v as N,x as H,y as O,z as V,A as w,B as x,C as c,D as _e,E as ve,F as be,G as Ce,H as F,I as xe,J as Fe,K as ye,L as Be,M as Se,O as Ee}from"./vendor.7965f66f.js";const ke=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function d(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};ke();var R=(s,a)=>{for(const[t,d]of a)s[t]=d;return s};const we={},Te=_("div",{id:"bg"},null,-1),Ae={class:"flex flex-col w-screen h-screen",id:"page"};function ze(s,a){return h(),L("section",null,[Te,_("div",Ae,[J(s.$slots,"default")])])}var De=R(we,[["render",ze]]);const $e={},Ue={class:"w-full h-16 text-left shadow-sm"};function Le(s,a){return h(),L("header",Ue,[J(s.$slots,"default")])}var Ne=R($e,[["render",Le]]);const Oe={},Ie={class:"flex-1 overflow-auto"};function je(s,a){return h(),L("main",Ie,[J(s.$slots,"default")])}var Pe=R(Oe,[["render",je]]);const y=s=>localStorage.getItem(s),B=(s,a)=>localStorage.setItem(s,a),Me=s=>localStorage.removeItem(s),He="http://guxin.ip3x.com:2358",Z=ie.create({baseURL:He,timeout:1e3,headers:{"X-Custom-Header":"foobar"}}),ee=({code:s="",lang:a="c_cpp",input:t=""},d)=>{let o="/submissions?base64_encoded=true&wait=false",l=new Map([["c_cpp",53],["csharp",51],["golang",60],["kotlin",78],["java",62],["javascript",63],["typescript",74],["python",71],["php",68],["lua",64],["sh",46],["r",80],["lisp",55],["haskell",61],["assembly_x86",45]]);Z.post(o,{source_code:M.encode(s),language_id:l.get(a),stdin:M.encode(t),compiler_options:"",command_line_arguments:"",redirect_stderr_to_stdout:"true"}).then(u=>setTimeout(()=>te(u.data.token,d),1e3)).catch(u=>{console.error(u),d("error\uFF1A\u7B49\u5F85\u54CD\u5E94\u8D85\u65F6\uFF01")})},te=(s,a,t=0)=>{if(t===9)return console.log("\u91CD\u8BD5\u6B21\u6570\u8FBE\u52309\u6B21"),a("error\uFF1A\u4EE3\u7801\u8FD0\u884C\u65F6\u95F4\u8FC7\u957F\uFF01"),0;let d="submissions/"+s+"?base64_encoded=true";Z.get(d).then(o=>{if([1,2].includes(o.data.status.id))setTimeout(()=>te(s,a,t+1),1e3);else if(o.data.status.id===3){let l=o.data.time*1e3,u=o.data.memory,g=M.decode(o.data.stdout||""),b=`// time: ${l}ms,  memory: ${u}kb
${g}`;a(b)}else{let l=o.data.status.description,u=M.decode(o.data.compile_output||""),g=`${l}
${u}`;a(g)}}).catch(o=>{console.error(o),a("error\uFF1A\u7B49\u5F85\u54CD\u5E94\u8D85\u65F6\uFF01")})},Re=E({setup(s){const a=Y(),t=i("lang"),d=i("code"),o=i("input"),l=i("output"),u=i("tabSize"),g=i("textSize"),b=i("theme"),T=i("setOutput"),A=i("judging"),D=()=>{if(d.value.match(/^\s*$/))return a.warning("\u8BF7\u8F93\u5165\u4EE3\u7801"),0;A.value=!0;let C={code:d.value,lang:t.value,input:o.value};ee(C,m=>{T(m),A.value=!1})},$=C=>{let m=C.commands;m.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:function(S){B("code",d.value),B("input",o.value),B("output",l.value),a.success("\u5DF2\u4FDD\u5B58")}}),m.addCommand({name:"run",bindKey:{win:"Ctrl-R",mac:"Command-R"},exec:function(S){D()}})},U=`----------------------------
  \u5730\u5740\uFF1Aip3x.com
----------------------------


\u5FEB\u6377\u952E\uFF1A
  Ctrl + s \u4FDD\u5B58   Ctrl + r \u8FD0\u884C
  Ctrl + z \u8FD4\u56DE   Ctrl + y \u524D\u8FDB
  Ctrl + f \u67E5\u627E\u4E0E\u66FF\u6362
  Ctrl + d \u6E05\u9664\u5F53\u524D\u4E00\u884C

\u4F18\u70B9\uFF1A
    0\u3001\u65E0\u9700\u5B89\u88C5\u4EFB\u4F55\u5DE5\u5177\u3001\u914D\u7F6E\u7F16\u8BD1\u73AF\u5883\u3002
    1\u3001\u901A\u8FC7\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u7EC3\u4E60\uFF0C\u652F\u6301\u7F13\u5B58\u4EE3\u7801\u3002
    2\u3001\u53EF\u7528\u4E8E\u84DD\u6865\u676F\u3001XCPC\u3001\u9762\u8BD5\u5237\u9898\uFF0C\u63D0\u9AD8\u7761\u7720\u8D28\u91CF\u7B49\u3002
`;return(C,m)=>(h(),z(e(K),{value:e(d),"onUpdate:value":m[0]||(m[0]=S=>q(d)?d.value=S:null),onInit:$,lang:e(t),theme:e(b).editorTheme,placeholder:U,options:{useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,tabSize:e(u),fontSize:e(g)},style:{height:"100%"}},null,8,["value","lang","theme","options"]))}}),Je=E({setup(s){const a=i("input"),t=i("theme");return(d,o)=>(h(),z(e(K),{value:e(a),"onUpdate:value":o[0]||(o[0]=l=>q(a)?a.value=l:null),onInit:o[1]||(o[1]=()=>{}),theme:e(t).editorTheme,lang:"text",placeholder:"\u8F93\u5165\u63A7\u5236\u53F0",style:{height:"100%","font-size":"19px"}},null,8,["value","theme"]))}}),qe=E({setup(s){const a=i("output"),t=i("theme");return(d,o)=>(h(),z(e(K),{value:e(a),"onUpdate:value":o[0]||(o[0]=l=>q(a)?a.value=l:null),onInit:o[1]||(o[1]=()=>{}),theme:e(t).editorTheme,lang:"text",placeholder:"\u8F93\u51FA\u63A7\u5236\u53F0",style:{height:"100%","font-size":"19px"}},null,8,["value","theme"]))}});const Ke={},Ve={class:"flex flex-col items-center justify-center h-full px-12 w-max"},Ge=_("div",{class:"text-xl font-bold",id:"logo"},"Haut online IDE",-1),We=[Ge];function Xe(s,a){return h(),L("div",Ve,We)}var Qe=R(Ke,[["render",Xe]]);const Ye=E({props:{theme:null},setup(s){const t=s.theme;B("oldTheme",JSON.stringify(t));const d=["chrome","xcode","github","monokai","dracula"].map(o=>({label:o,value:o}));return(o,l)=>(h(),z(e(me),{model:e(t),ref:(u,g)=>{g.formRef=u},"label-placement":"top"},{default:n(()=>[r(e(ge),{cols:24,"x-gap":24},{default:n(()=>[r(e(v),{span:12,label:"\u7F16\u8F91\u5668\u80CC\u666F\u8272",path:"editorBgColor"},{default:n(()=>[r(e(k),{value:e(t).editorBgColor,"onUpdate:value":l[0]||(l[0]=u=>e(t).editorBgColor=u),swatches:["rgba(255,250,232,1)","rgba(238,232,213,1)"]},null,8,["value","swatches"])]),_:1}),r(e(v),{span:12,label:"\u7F16\u8F91\u5668\u9AD8\u4EAE\u65B9\u6848",path:"editorTheme"},{default:n(()=>[r(e(de),{placeholder:"Select",options:e(d),value:e(t).editorTheme,"onUpdate:value":l[1]||(l[1]=u=>e(t).editorTheme=u)},null,8,["options","value"])]),_:1}),r(e(v),{span:12,label:"\u7F16\u8F91\u5668\u4FA7\u680F\u8272",path:"editorBarColor"},{default:n(()=>[r(e(k),{value:e(t).editorBarBgColor,"onUpdate:value":l[2]||(l[2]=u=>e(t).editorBarBgColor=u),swatches:["rgba(255,250,232,1)","rgba(238,232,213,1)"]},null,8,["value","swatches"])]),_:1}),r(e(v),{span:12,label:"\u7F16\u8F91\u5668\u4FA7\u680F\u5B57\u4F53\u8272",path:"editorBarTextColor"},{default:n(()=>[r(e(k),{value:e(t).editorBarTextColor,"onUpdate:value":l[3]||(l[3]=u=>e(t).editorBarTextColor=u),swatches:["#333","#666"]},null,8,["value"])]),_:1}),r(e(v),{span:12,label:"\u9AD8\u4EAE\u884C\u80CC\u666F\u8272",path:"editorActiveLineBgColor"},{default:n(()=>[r(e(k),{value:e(t).editorActiveLineBgColor,"onUpdate:value":l[4]||(l[4]=u=>e(t).editorActiveLineBgColor=u),swatches:["rgba(255,250,232,1)","rgba(238,232,213,1)"],round:""},null,8,["value","swatches"])]),_:1}),r(e(v),{span:12,label:"\u9876\u90E8\u80CC\u666F\u8272",path:"headerBgColor"},{default:n(()=>[r(e(k),{value:e(t).headerBgColor,"onUpdate:value":l[5]||(l[5]=u=>e(t).headerBgColor=u),swatches:["rgba(255,250,232,1)","rgba(238,232,213,1)"]},null,8,["value","swatches"])]),_:1}),r(e(v),{span:12,label:"\u9876\u90E8\u5B57\u4F53\u8272",path:"headerTextColor"},{default:n(()=>[r(e(k),{value:e(t).headerTextColor,"onUpdate:value":l[6]||(l[6]=u=>e(t).headerTextColor=u),swatches:["#333","#666"]},null,8,["value"])]),_:1}),r(e(v),{span:12,label:"\u9876\u90E8\u6807\u9898\u8272",path:"headerLogoColor"},{default:n(()=>[r(e(k),{value:e(t).headerLogoColor,"onUpdate:value":l[7]||(l[7]=u=>e(t).headerLogoColor=u),swatches:["#333","#666"]},null,8,["value"])]),_:1}),r(e(v),{span:24,label:"\u80CC\u666F\u56FE\u94FE\u63A5\uFF08\u7528\u56FE\u5E8A\u4E0A\u4F20\uFF0C\u5982\uFF1Aimgurl.org\uFF09",path:"bgUrl"},{default:n(()=>[r(e(ce),{name:"bgUrl",value:e(t).bgUrl,"onUpdate:value":l[8]||(l[8]=u=>e(t).bgUrl=u),placeholder:"Eg: https://...",clearable:""},null,8,["value"])]),_:1}),r(e(v),{span:24,label:"\u80CC\u666F\u6A21\u7CCA\u5EA6",path:"bgUrl"},{default:n(()=>[r(e(pe),{value:e(t).bgBlur,"onUpdate:value":l[9]||(l[9]=u=>e(t).bgBlur=u),"format-tooltip":u=>`${u}%`},null,8,["value","format-tooltip"])]),_:1})]),_:1})]),_:1},8,["model"]))}}),Ze={class:"flex pr-6"},et={class:"flex space-x-3.5 pr-3.5"},tt=O(" help "),ot=O("\u8FD0\u884C\uFF08Run\uFF09");var lt=E({setup(s){const a=he(),t=Y(),d=fe(),o={editorBgColor:"rgba(255,250,232,1)",editorTheme:"xcode",editorActiveLineBgColor:"rgba(238,232,213,1)",editorBarBgColor:"rgba(238,232,213,1)",editorBarTextColor:"#333",headerBgColor:"rgba(238,232,213,1)",headerLogoColor:"#333",headerTextColor:"#333",bgUrl:"",bgBlur:0},l=i("theme"),u=i("setTheme"),g=[{label:"\u4E3B\u9898\u8272\u914D\u7F6E",props:{onClick:()=>d.success({title:"\u4E3B\u9898\u914D\u7F6E\u677F",content:()=>r(Ye,{theme:l},null),negativeText:"\u91CD\u7F6E",onNegativeClick:()=>{u(o),Me("theme"),t.success("\u5DF2\u6062\u590D\u9ED8\u8BA4\u4E3B\u9898!")},positiveText:"\u4FDD\u5B58",onPositiveClick:()=>{B("theme",JSON.stringify(l.value)),t.success("\u5DF2\u4FDD\u5B58\u4E3B\u9898\uFF01")},onClose:()=>{let f=JSON.parse(y("oldTheme"));u(f)},maskClosable:!1,style:{width:"auto"}})}},{label:"\u5185\u7F6E\u5FEB\u6377\u952E",props:{onClick:()=>a.info({title:"\u5FEB\u6377\u952E",description:"\u8FD9\u662F\u4E00\u4E9B\u5E38\u7528\u7684\u5185\u7F6E\u5FEB\u6377\u952E\u547D\u4EE4\u3002",content:`  Ctrl + s \u4FDD\u5B58   Ctrl + r \u8FD0\u884C
  Ctrl + z \u8FD4\u56DE   Ctrl + y \u524D\u8FDB
  Ctrl + f \u67E5\u627E\u4E0E\u66FF\u6362
  Ctrl + d \u6E05\u9664\u5F53\u524D\u4E00\u884C`})}},{label:"\u8D44\u6E90\u63A8\u8350",props:{onClick:()=>a.create({title:"\u8D44\u6E90",description:"\u8FD9\u91CC\u6709\u4E00\u4E9B\u9002\u5408\u7EC3\u4E60\u7684[\u901A\u7528\u7B97\u6CD5]\u5B66\u4E60\u8D44\u6E90\u63A8\u8350\u3002",content:()=>w("div",{class:"space-y-3"},[w("li",w("a",{href:"https://www.nowcoder.com/ta/job-code-high",target:"_blank",class:"text-base text-green-500"},"\u725B\u5BA2\u9AD8\u9891\u9898\u699C")),w("li",w("a",{href:"https://www.luogu.com.cn/training/list",target:"_blank",class:"text-base text-green-500"},"\u6D1B\u8C37\u7CBE\u9009\u9898\u5355")),w("li",w("a",{href:"https://leetcode-cn.com/problem-list/2cktkvj",target:"_blank",class:"text-base text-green-500"},"\u529B\u6263TOP100\u9898"))])})}},{label:"\u5173\u4E8E\u672C\u5E94\u7528",props:{onClick:()=>a.create({title:"\u5173\u4E8E",content:`\u540D\u79F0: Haut Online IDE
\u7248\u672C: 1.0.0
\u5F00\u53D1\u8005\u56E2\u961F: A02N119 \u5BDD\u5BA4
\u95EE\u9898\u53CD\u9988\u90AE\u7BB1\uFF1Aai-lab@foxmail.com`})}}],b=[{label:"C/C++",key:"c_cpp"},{label:"C#",key:"csharp"},{label:"Go",key:"golang"},{label:"Kotlin",key:"kotlin"},{label:"Java",key:"java"},{label:"JavaScript",key:"javascript"},{label:"TypeScript",key:"typescript"},{label:"Python",key:"python"},{label:"PHP",key:"php"},{label:"Lua",key:"lua"},{label:"shell(Bash)",key:"sh"},{label:"R",key:"r"},{label:"Lisp",key:"lisp"},{label:"haskell",key:"haskell"},{label:"assembly_x86(\u6C47\u7F16)",key:"assembly_x86"}],T=i("lang"),A=i("setLang"),D=f=>{A(f)},$=[{label:"2\u4E2A\u7A7A\u683C",key:2},{label:"4\u4E2A\u7A7A\u683C",key:4}],U=i("tabSize"),C=i("setTabSize"),m=f=>{C(f)},S=[{label:"27px",key:27},{label:"25px",key:25},{label:"23px",key:23},{label:"21px",key:21},{label:"19px",key:19},{label:"17px",key:17}],p=i("textSize"),G=i("setTextSize"),oe=f=>{G(f)},W=i("code"),le=i("input"),ae=i("setOutput"),I=i("judging"),ue=()=>{if(W.value.match(/^\s*$/))return t.warning("\u8BF7\u8F93\u5165\u4EE3\u7801"),0;I.value=!0;let f={code:W.value,lang:T.value,input:le.value};ee(f,j=>{ae(j),I.value=!1})};return(f,j)=>(h(),L("div",Ze,[_("div",et,[r(e(H),{trigger:"hover",onSelect:j[0]||(j[0]=()=>{}),placement:"bottom-start",options:g},{default:n(()=>[r(e(N),{text:""},{default:n(()=>[tt]),_:1})]),_:1}),r(e(H),{trigger:"hover",onSelect:m,placement:"bottom-start",options:$},{default:n(()=>[r(e(N),{text:""},{default:n(()=>[O(" tab: "+V(e(U)),1)]),_:1})]),_:1}),r(e(H),{trigger:"hover",onSelect:oe,placement:"bottom-start",options:S},{default:n(()=>[r(e(N),{text:""},{default:n(()=>[O(" size: "+V(e(p)),1)]),_:1})]),_:1}),r(e(H),{trigger:"hover",onSelect:D,placement:"bottom-start",options:b},{default:n(()=>[r(e(N),{text:""},{default:n(()=>[O(" lang: "+V(e(T)),1)]),_:1})]),_:1})]),r(e(N),{type:"primary",loading:e(I),disabled:e(I),onClick:ue,round:""},{default:n(()=>[ot]),_:1},8,["loading","disabled"])]))}});const at={class:"flex flex-row items-center justify-between w-full h-full"},ut={class:"flex flex-col-reverse w-full h-auto p-2 overflow-auto xl:p-3 lg:flex-row lg:h-full"},rt={class:"w-full h-screen pr-1 lg:h-full lg:w-1/3"},st={class:"w-full rounded-tr h-1/2"},nt={class:"w-full pt-1 rounded-br h-1/2"},it={class:"w-full h-screen rounded-tl rounded-bl-lg lg:w-2/3 lg:h-full"},dt=E({setup(s){const t=x(P(P({},{editorBgColor:"rgba(255,250,232,1)",editorTheme:"xcode",editorActiveLineBgColor:"rgba(238,232,213,1)",editorBarBgColor:"rgba(238,232,213,1)",editorBarTextColor:"#666",headerBgColor:"rgba(238,232,213,1)",headerLogoColor:"#333",headerTextColor:"#555",bgUrl:"",bgBlur:0}),JSON.parse(y("theme")))),d=p=>{t.value=P({},p)};c("theme",t),c("setTheme",d);const o=x(y("lang")||"c_cpp"),l=p=>{o.value=p,B("lang",o.value)};c("lang",o),c("setLang",l);const u=x(parseInt(y("tabSize"))||2),g=p=>{u.value=p,B("tabSize",u.value.toString())};c("tabSize",u),c("setTabSize",g);const b=x(parseInt(y("textSize"))||23),T=p=>{b.value=p,B("textSize",b.value.toString())};c("textSize",b),c("setTextSize",T);const A=`#include<stdio.h>

int main() {
  int a, b, sum = 0;
  scanf("%d %d", &a, &b);
  sum = a + b;
  printf("%d", sum);
  return 0;
}`,D=x(y("code")||A),$="1 2",U=x(y("input")||$),C=x(y("output")||""),m=p=>{C.value=p};c("code",D),c("input",U),c("output",C),c("setOutput",m);const S=x(!1);return c("judging",S),(p,G)=>(h(),z(De,{style:_e({"--editor-bgColor":t.value.editorBgColor,"--editorActiveLine-bgColor":t.value.editorActiveLineBgColor,"--editorBar-bgColor":t.value.editorBarBgColor,"--editorBar-textColor":t.value.editorBarTextColor,"--header-bgColor":t.value.headerBgColor,"--header-logoColor":t.value.headerLogoColor,"--header-textColor":t.value.headerTextColor,"--bg-url":`url('${t.value.bgUrl}')`,"--bg-blur":`${t.value.bgBlur/3}px`})},{default:n(()=>[r(Ne,null,{default:n(()=>[_("div",at,[r(Qe),r(lt)])]),_:1}),r(Pe,null,{default:n(()=>[_("div",ut,[_("div",rt,[_("div",st,[r(Je)]),_("div",nt,[r(qe)])]),_("div",it,[r(Re)])])]),_:1})]),_:1},8,["style"]))}});const ct=E({setup(s){return(a,t)=>(h(),z(e(Ce),null,{default:n(()=>[r(e(be),null,{default:n(()=>[r(e(ve),null,{default:n(()=>[r(dt)]),_:1})]),_:1})]),_:1}))}});F.require("ace/ext/language_tools");F.require("ace/ext/searchbox");F.require("ace/ext/prompt");F.config.setModuleUrl("ace/mode/base_worker",xe);F.config.setModuleUrl("ace/mode/coffee_worker",Fe);F.config.setModuleUrl("ace/snippets/c_cpp",ye);F.config.setModuleUrl("ace/snippets/java",Be);F.config.setModuleUrl("ace/snippets/python",Se);Ee(ct).mount("#app");
