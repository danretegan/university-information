import{r as n,a as y,s as b,b as f,d as w,j as e,E as L,l as S,e as E,f as R}from"./index--aj_GH3-.js";function P(){const[o,i]=n.useState(""),[l,c]=n.useState(""),[g,d]=n.useState(""),[u,h]=n.useState(""),t=y(b),r=f(),p=w(),j=async s=>{s.preventDefault();try{console.log("Attempting login..."),await r(S({email:o,password:l})),t.isAuthenticated?p("/university-information/"):(i(""),c(""))}catch(a){console.error("Failed to login the user",a)}},m=async s=>{s.preventDefault();try{console.log("Attempting registration..."),await r(E({email:g,password:u})),d(""),h("")}catch(a){console.error("Failed to register the user",a)}},v=s=>{s.preventDefault(),r(R()),p("/university-information/")},x=(t==null?void 0:t.error)||"";return e.jsxs("section",{children:[e.jsx("code",{children:JSON.stringify(t)}),x.length>0&&e.jsx(L,{message:x}),e.jsxs("form",{onSubmit:j,children:[e.jsx("h2",{children:"Login:"}),e.jsxs("label",{children:[e.jsx("span",{children:"Email:"}),e.jsx("input",{type:"text",onChange:s=>i(s.target.value),value:o})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Password:"}),e.jsx("input",{type:"password",onChange:s=>c(s.target.value),value:l})]}),e.jsx("button",{children:"Login"})]}),e.jsxs("form",{onSubmit:m,children:[e.jsx("h2",{children:"Register:"}),e.jsxs("label",{children:[e.jsx("span",{children:"Email:"}),e.jsx("input",{type:"text",onChange:s=>d(s.target.value),value:g})]}),e.jsxs("label",{children:[e.jsx("span",{children:"Password:"}),e.jsx("input",{type:"password",onChange:s=>h(s.target.value),value:u})]}),e.jsx("button",{children:"Register"})]}),e.jsx("button",{onClick:v,children:"Logout"})]})}export{P as default};