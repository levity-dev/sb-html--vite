const c=({numberColor:r="#ffffff",bubbleBackgroundColor:o="#804c8a",bubbleSize:t="1.4em",strongText:l="Read the answers.",italicText:i="Then write a question with why for each answer."})=>`
    <p><span style="${`color: ${r}; background-color: ${o};  width: ${t}; height: ${t}; line-height: ${t}; border-radius: 50%; text-align: center; margin-right: .5em; display: inline-block;`}">
    <strong>2</strong></span><strong>${l}</strong> <em>${i}</em>
    </p>
  `,d={title:"Our World/Inline Number Bubble",tags:["autodocs"],parameters:{layout:"centered"}},u=r=>c(r),e=u.bind({});e.args={numberColor:"#ffffff",bubbleBackgroundColor:"#804c8a",bubbleSize:"1.4em",strongText:"Read the answers.",italicText:"Then write a question with why for each answer."};var n,a,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  // Generate HTML string from component
  return InlineNumberBubble(args);
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,d as default};
