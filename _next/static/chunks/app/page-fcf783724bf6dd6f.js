(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3219:function(e,t,n){Promise.resolve().then(n.bind(n,3792))},3792:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7437),o=n(2265),r=n(8474),s=n(1752),l=n.n(s),c=n(7583),i=n.n(c),u=n(7346),d=n(5211),p=n(6594),_=n.n(p);d.kL.register(d.uw,d.f$,d.ZL,d.qi,d.u,d.De);var m=e=>{let{isOpen:t,onRequestClose:n,attendees:o,averageSalary:r,totalCost:s,duration:l}=e,c=o.length,d=new Set(o.map(e=>e.department)).size,p=new Set(o.map(e=>e.role)).size;return(0,a.jsxs)(i(),{isOpen:t,onRequestClose:n,className:_().modal,overlayClassName:_().overlay,children:[(0,a.jsx)("div",{className:_().closeButton,onClick:n,children:"\xd7"}),(0,a.jsx)("h2",{className:_().reportTitle,children:"Meeting Report"}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Total Cost: €",s.toFixed(2)]}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Duration: ",l]}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Average Salary: €",r.toFixed(2)]}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Total Attendees: ",c]}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Unique Roles: ",p]}),(0,a.jsxs)("p",{className:_().reportDetail,children:["Unique Departments: ",d]}),(0,a.jsxs)("div",{className:_().chartContainer,children:[(0,a.jsx)("h3",{children:"Attendees by Role"}),(0,a.jsx)(u.$Q,{data:(()=>{let e=o.reduce((e,t)=>(e[t.role]=(e[t.role]||0)+1,e),{});return{labels:Object.keys(e),datasets:[{label:"# of Attendees by Role",data:Object.values(e),backgroundColor:["#007bff","#28a745","#dc3545","#ffc107","#17a2b8","#6c757d"]}]}})(),width:400,height:200})]}),(0,a.jsxs)("div",{className:_().chartContainer,children:[(0,a.jsx)("h3",{children:"Attendees by Department"}),(0,a.jsx)(u.by,{data:(()=>{let e=o.reduce((e,t)=>(e[t.department]=(e[t.department]||0)+1,e),{});return{labels:Object.keys(e),datasets:[{label:"# of Attendees by Department",data:Object.values(e),backgroundColor:["#007bff","#28a745","#dc3545","#ffc107"]}]}})(),width:400,height:200})]})]})},h=e=>{let{averageSalary:t,attendees:n,onStop:s}=e,[c,i]=(0,o.useState)(0),[u,d]=(0,o.useState)(!1),[p,_]=(0,o.useState)(!1),h=t/160/3600*n.length*c,b=(0,r.q_)({from:{number:0},number:c,delay:0,config:{mass:1,tension:120,friction:30}}),x=(0,r.q_)({from:{number:0},number:h,delay:0,config:{mass:1,tension:10,friction:10}});(0,o.useEffect)(()=>{let e;return u||(e=setInterval(()=>{i(e=>e+1)},1e3)),()=>clearInterval(e)},[u]);let C=e=>"".concat(Math.floor(e/3600).toString().padStart(2,"0"),":").concat(Math.floor(e%3600/60).toString().padStart(2,"0"),":").concat((e%60).toString().padStart(2,"0"));return(0,a.jsxs)("div",{className:l().counterContainer,children:[(0,a.jsx)("h1",{className:l().counterTitle,children:"Meeting Cost Counter"}),(0,a.jsxs)("p",{className:l().counterText,children:["Time Elapsed: ",(0,a.jsx)(r.q.span,{children:b.number.to(e=>C(Math.floor(e)))})]}),(0,a.jsxs)("p",{className:l().counterText,children:["Meeting Cost: €",(0,a.jsx)(r.q.span,{children:x.number.to(e=>e.toFixed(2))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"".concat(l().button," ").concat(l().buttonPause),onClick:()=>d(!u),children:u?"Resume":"Pause"}),(0,a.jsx)("button",{className:"".concat(l().button," ").concat(l().buttonStop),onClick:s,children:"Stop"}),u&&(0,a.jsx)("button",{className:"".concat(l().button," ").concat(l().buttonReport),onClick:()=>{_(!0)},children:"Generate Report"})]}),(0,a.jsx)(m,{isOpen:p,onRequestClose:()=>_(!1),attendees:n,averageSalary:t,totalCost:h,duration:C(c)})]})},b=n(3580);function x(){return(0,a.jsx)(b.Ix,{})}n(4193);var C=n(9671),j=n.n(C);let v=["Frontend Dev","Backend Dev","QA","HR","Project Manager","Designer"],g=["Development","Product Development","QA","Management"];var f=()=>{let[e,t]=(0,o.useState)(0),[n,r]=(0,o.useState)([{name:"",role:"",department:""}]),[s,l]=(0,o.useState)(!1),[c,i]=(0,o.useState)(null),[u,d]=(0,o.useState)(null),p=(0,o.useRef)(null),_=(e,t)=>{r(n.map((n,a)=>a===e?t:n))},m=e=>{i(e),setTimeout(()=>{r(n.filter((t,n)=>n!==e)),i(null)},500)};return(0,o.useEffect)(()=>{p.current&&p.current.scrollIntoView({behavior:"smooth"})},[n]),(0,a.jsxs)("div",{className:j().container,children:[(0,a.jsx)(x,{}),!s&&(0,a.jsxs)("div",{className:"".concat(j().formContainer," ").concat(j().fadeIn),children:[(0,a.jsx)("h1",{className:j().title,children:"Meeting Cost Counter"}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{className:j().label,children:["Average Salary (monthly):",(0,a.jsx)("input",{className:j().input,type:"number",placeholder:"Average Salary",value:e||"",onChange:e=>t(parseFloat(e.target.value))})]})}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"".concat(j().button," ").concat(j().buttonAdd),onClick:()=>{r([...n,{name:"",role:"",department:""}])},children:"Add Attendee"})}),(0,a.jsxs)("div",{className:j().attendeesContainer,children:[n.map((e,t)=>(0,a.jsx)("div",{className:"".concat(j().attendeeContainer," ").concat(c===t?j().fadeOut:j().fadeIn),children:(0,a.jsxs)("div",{className:j().inputsContainer,children:[(0,a.jsx)("input",{className:j().input,type:"text",placeholder:"Attendee Name",value:e.name,onChange:n=>_(t,{...e,name:n.target.value})}),(0,a.jsxs)("select",{className:j().input,value:e.role,onChange:n=>_(t,{...e,role:n.target.value}),children:[(0,a.jsx)("option",{value:"",children:"Select Role"}),v.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]}),(0,a.jsxs)("select",{className:j().input,value:e.department,onChange:n=>_(t,{...e,department:n.target.value}),children:[(0,a.jsx)("option",{value:"",children:"Select Department"}),g.map(e=>(0,a.jsx)("option",{value:e,children:e},e))]}),(0,a.jsx)("button",{className:"".concat(j().button," ").concat(j().buttonRemove),onClick:()=>m(t),children:"Remove"})]})},t)),(0,a.jsx)("div",{ref:p})]}),(0,a.jsxs)("div",{className:j().buttonsContainer,children:[(0,a.jsx)("button",{className:"".concat(j().button," ").concat(j().buttonStart),onClick:()=>{e>0&&n.length>0?(l(!0),b.Am.success("Meeting started!")):b.Am.error("Please enter average salary and add at least one attendee.")},children:"Start Meeting"}),(0,a.jsx)("button",{className:"".concat(j().button," ").concat(j().buttonCalculate),onClick:()=>{d(e/160/60*n.length)},children:"Calculate Cost Per Minute"})]}),null!==u&&(0,a.jsxs)("p",{className:j().costPerMinute,children:["Cost per minute: €",u.toFixed(2)]})]}),s&&(0,a.jsx)(h,{averageSalary:e,attendees:n,onStop:()=>{l(!1),r([{name:"",role:"",department:""}]),t(0),d(null),b.Am.info("Meeting stopped")}})]})}},9671:function(e){e.exports={container:"page_container__aoG4z",formContainer:"page_formContainer__17w8w",fadeIn:"page_fadeIn__wvzG6",title:"page_title__3jonF",label:"page_label__2GA72",input:"page_input___cVLA",attendeesContainer:"page_attendeesContainer__FmAuu",attendeeContainer:"page_attendeeContainer__miBX9",inputsContainer:"page_inputsContainer__QUDnU",fadeOut:"page_fadeOut__Cdvqk",button:"page_button__vnlhW",buttonAdd:"page_buttonAdd__2sSdl",buttonRemove:"page_buttonRemove__HiRAG",buttonStart:"page_buttonStart__vSp2p",buttonCalculate:"page_buttonCalculate___a3pF",costPerMinute:"page_costPerMinute__NfnJf",buttonsContainer:"page_buttonsContainer__CVJnq"}},1752:function(e){e.exports={counterContainer:"Counter_counterContainer__4UjhL",fadeIn:"Counter_fadeIn__J2KLJ",counterTitle:"Counter_counterTitle__akKED",counterText:"Counter_counterText__x7SfF",button:"Counter_button__xO7Gb",buttonPause:"Counter_buttonPause__GDwl7",buttonStop:"Counter_buttonStop__0fl5O",buttonReport:"Counter_buttonReport__3ZxuV"}},6594:function(e){e.exports={overlay:"ReportModal_overlay__Fa9ds",modal:"ReportModal_modal__i9SLn",reportTitle:"ReportModal_reportTitle__IEPrE",reportDetail:"ReportModal_reportDetail__BNWLL",chartContainer:"ReportModal_chartContainer__JAiLw",closeButton:"ReportModal_closeButton__gg3Zl"}}},function(e){e.O(0,[7,674,382,971,23,744],function(){return e(e.s=3219)}),_N_E=e.O()}]);