import{j as e}from"./index-CJ7M0nsd.js";import{c as p,d as c,e as u}from"./index-CRfRdMsQ.js";import{r as d}from"./index-CgCoV-L-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DFo_SN73.js";const f={title:"Data Display/Toast",component:p,tags:["autodocs"],args:{open:!1,title:"Agendamento realizado",description:"Quarta-feira, 23 de Outubro às 16h"},argTypes:{duration:{control:{type:"number"}}},decorators:[r=>e.jsx(c,{children:r()})]},o={args:{open:!1,duration:5e3},render:r=>{const[i,t]=d.useState(r.open);return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>t(!0),children:"Show Toast"}),e.jsx(p,{...r,open:i,onOpenChange:t})]})}};var n,s,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    open: false,
    duration: 5000
  },
  render: (args: ToastProps) => {
    const [open, setOpen] = useState(args.open);
    return <>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>

        <Toast {...args} open={open} onOpenChange={setOpen} />
      </>;
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const h=["Primary"];export{o as Primary,h as __namedExportsOrder,f as default};
