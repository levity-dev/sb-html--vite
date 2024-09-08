const d=({numberColor:r="#ffffff",bubbleBackgroundColor:u="#0088ff",bubbleSize:t="1.4em",numberFontSize:o=""})=>{const a=[`color: ${r}; background-color: ${u}; width: ${t}; height: ${t}; line-height: ${t}; border-radius: 50%; text-align: center; display: inline-block;`];return o&&a.push(`    font-size: ${o} !important;`),`
        <div style="${a.join("")}">
            <strong>2</strong>
        </div>
    `},f={title:"Global/Standalone Number Bubble",tags:["autodocs"],parameters:{layout:"centered"}},i=r=>d(r),e=i.bind({});e.args={numberColor:"#ffffff",bubbleBackgroundColor:"#0088ff",bubbleSize:"1.4em",numberFontSize:""};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  return StandaloneNumberBubble(args);
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
