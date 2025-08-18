import{j as e}from"./jsx-runtime-CDt2p4po.js";import{R as y}from"./index-GiUgBvb1.js";const s=({value:a,onChange:r,label:c,placeholder:O,helperText:m,errorMessage:g,disabled:f,invalid:p,variant:v="outlined",size:x="md",type:A="text",loading:U=!1,clearable:B=!1,passwordToggle:D=!1,id:G})=>{const[J,W]=y.useState(!1),b=G||y.useId(),K=x==="sm"?"size-sm":x==="lg"?"size-lg":"size-md",Q=v==="filled"?"input-filled":v==="ghost"?"input-ghost":"input-outlined";return e.jsxs("div",{className:"w-full",children:[c&&e.jsx("label",{htmlFor:b,className:"mb-1 block text-sm font-medium text-gray-400 dark:text-white",children:c}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{id:b,type:D&&J?"text":A,value:a,onChange:r,disabled:f,placeholder:O,className:`input-base ${Q} ${K} ${f?"bg-gray-200 dark:bg-gray-700 cursor-not-allowed":""} ${p?"border-red-500":""}`}),B&&a&&e.jsx("button",{type:"button","aria-label":"Clear",onClick:()=>r==null?void 0:r({target:{value:""}}),className:"absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white",children:"✕"})]}),m&&!p&&e.jsx("p",{className:"mt-1 text-xs text-gray-400 dark:text-gray-100",role:"note",children:m}),p&&g&&e.jsx("p",{className:"mt-1 text-xs text-red-600 dark:text-red-400",role:"alert",children:g})]})};s.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},invalid:{required:!1,tsType:{name:"boolean"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"filled" | "outlined" | "ghost"',elements:[{name:"literal",value:'"filled"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"outlined"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},passwordToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Components/InputField",component:s,args:{label:"Label",placeholder:"Type here",helperText:"Helper text",variant:"outlined",size:"md"},parameters:{layout:"centered"}},t={},l={args:{invalid:!0,errorMessage:"This field is required"}},i={args:{disabled:!0}},n={args:{loading:!0}},d={render:a=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(s,{...a,variant:"filled",label:"Filled"}),e.jsx(s,{...a,variant:"outlined",label:"Outlined"}),e.jsx(s,{...a,variant:"ghost",label:"Ghost"})]})},o={render:a=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsx(s,{...a,size:"sm",label:"Small"}),e.jsx(s,{...a,size:"md",label:"Medium"}),e.jsx(s,{...a,size:"lg",label:"Large"})]})},u={args:{clearable:!0,passwordToggle:!0,type:"password",label:"Password",helperText:"Try toggling visibility"}};var h,T,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var j,q,I;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    invalid: true,
    errorMessage: 'This field is required'
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var z,S,F;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(S=i.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var N,k,E;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var L,V,M;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-80">\r
      <InputField {...args} variant="filled" label="Filled" />\r
      <InputField {...args} variant="outlined" label="Outlined" />\r
      <InputField {...args} variant="ghost" label="Ghost" />\r
    </div>
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var C,P,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-80">\r
      <InputField {...args} size="sm" label="Small" />\r
      <InputField {...args} size="md" label="Medium" />\r
      <InputField {...args} size="lg" label="Large" />\r
    </div>
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var H,_,$;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    clearable: true,
    passwordToggle: true,
    type: 'password',
    label: 'Password',
    helperText: 'Try toggling visibility'
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const ee=["Basic","Invalid","Disabled","Loading","Variants","Sizes","ClearAndPassword"];export{t as Basic,u as ClearAndPassword,i as Disabled,l as Invalid,n as Loading,o as Sizes,d as Variants,ee as __namedExportsOrder,Z as default};
