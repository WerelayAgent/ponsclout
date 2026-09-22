import{o as e}from"./rolldown-runtime-C_s2cVnS.js";import{n as t,t as n}from"./jsx-runtime-B3HjJOrC.js";import{k as r}from"./context-xV99-GKt-CW76F8gs.js";import{h as i}from"./isAddress-DL9EZBe8.js";import{b as a,t as o}from"./storage-j7ai9Sne-DTTUdBoM.js";import{f as s}from"./privy-context-i6NfqAl1-wX5E9_it.js";import{c,d as l,s as u}from"./Loader-UAZqxsnw-Dbvt7oz2.js";import{t as d}from"./react-FpCAAyaj.js";import{d as f}from"./wallet-connect-MWSDFRmF-DPxP9-um.js";import{r as p}from"./events-context-BJ75xIIf-B_ziofW0.js";var m=e(t(),1),h=n(),g=e=>{let[t,n]=(0,m.useState)(`auto`);return(0,m.useEffect)((()=>{let t=new ResizeObserver((e=>{n(e[0]?.contentRect.height??`auto`)}));return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}}),[e.current]),t},_=c.div`
  text-align: left;
  flex-grow: 1;
`,v=c.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,y=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,b=c(y)`
  ${e=>e.$colorScheme===`light`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;`:e.$colorScheme===`dark`?`background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;`:void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,x=u`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,S=c.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,C=c.button.attrs({className:`login-method-button`})`
  ${x}
`;c.a`
  ${x}
`;var w=c.div`
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.$fullSize?`0`:`4px`};
  background: ${e=>e.$fullSize?`transparent`:`var(--privy-color-background-2)`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${e=>e.$fullSize?`32px`:`18px`};
    height: ${e=>e.$fullSize?`32px`:`18px`};
    color: ${e=>e.$fullSize?`inherit`:`var(--privy-color-icon-muted)`};
  }
`,T=c.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.$if?`display: none;`:``}
`,E=c.div`
  width: 100%;
  height: 100%;
  padding: ${e=>e.$withPadding?`64px 0px`:`0px`};
`,D=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;async function O(e,t,n){if(!t.shouldEnforceDefaultChainOnConnect)return;let r=Number(e.chainId.replace(`eip155:`,``));if(!t.chains.find((e=>e.id===r))&&(e.connectorType!==`wallet_connect_v2`||e.walletClientType!==`metamask`)){n?.();try{await e.switchChain(t.defaultChain.id),e.chainId=a(i(t.defaultChain.id))}catch{f.warn(`Unable to switch to default chain after connect`,{chainId:t.defaultChain.id})}}}var k=(0,m.createContext)({}),A=({children:e})=>{let t=r(),[n,i]=(0,m.useState)({});return p(`login`,{onComplete:({loginAccount:e})=>{e&&e.type!==`passkey`&&e.type!==`cross_app`&&(e.type!==`wallet`||e.walletClientType!==`privy`)&&(o.put(j(t.id),e.type),e.type===`wallet`?(o.put(M(t.id),e.walletClientType),o.put(N(t.id),e.chainType),i({accountType:e.type,walletClientType:e.walletClientType,chainType:e.chainType})):(o.del(M(t.id)),o.del(N(t.id)),i({accountType:e.type})))}}),(0,m.useEffect)((()=>{if(!t.id)return;let e=o.get(j(t.id)),n=o.get(M(t.id)),r=o.get(N(t.id));e&&i(e===`wallet`?{accountType:e,walletClientType:n,chainType:r}:{accountType:e})}),[t.id]),(0,h.jsx)(k.Provider,{value:n,children:e})},j=e=>`privy:${e}:recent-login-method`,M=e=>`privy:${e}:recent-login-wallet-client`,N=e=>`privy:${e}:recent-login-chain-type`,P=()=>(0,m.useContext)(k),F=e=>{p(`fundWallet`,e);let{fundWallet:t}=l();return{fundWallet:({address:e,options:n})=>t(e,n)}};function I(e){let{login:t}=(0,m.useContext)(s);return p(`login`,e),{login:t}}function L(e){let{logout:t}=(0,m.useContext)(s);return p(`logout`,e),{logout:t}}function R(e){let{connectWallet:t}=(0,m.useContext)(s);return p(`connectWallet`,e),{connectWallet:t}}var z=d((()=>({isModalOpen:!1,resolvers:null})));d((()=>({})));var B=({address:e,client:t,appId:n})=>{let r=`${t}:${e}`;n&&o.put(V(n),r),z.setState({wallet:r})},V=e=>`privy:${e}:active-wallet-connection`;export{g as _,F as a,C as c,O as d,A as f,B as g,w as h,E as i,D as l,y as m,b as n,I as o,v as p,P as r,L as s,_ as t,T as u,R as v,S as y};