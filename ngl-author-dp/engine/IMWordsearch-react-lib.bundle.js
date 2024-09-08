(window.webpackJsonpReactComponents=window.webpackJsonpReactComponents||[]).push([[1],{190:function(t,e){function a(){return t.exports=a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,a.apply(this,arguments)}t.exports=a,t.exports.default=t.exports,t.exports.__esModule=!0},202:function(t,e,a){"use strict";var i=a(190),r=a.n(i),c=a(12),n=a.n(c),s=a(71),o=a.n(s),d=a(72),l=a(73);e.a=(t,e)=>{const a=a=>{const i={...a},{wrappedActivityData:s,activityType:o,activityId:d}=a;delete i.wrappedActivityData,Object(c.useEffect)(()=>{e({activityType:o,activityId:d})},[]);let l=s||{};return s?n.a.createElement(t,r()({},i,l)):null};a.propTypes={wrappedActivityData:o.a.shape({screenId:o.a.number,activityId:o.a.string,activityType:o.a.string})};return Object(d.connect)((t,e)=>({wrappedActivityData:Object(l.a)(t,e)}),null)(a)}},203:function(t,e,a){"use strict";a.d(e,"b",(function(){return c})),a.d(e,"a",(function(){return n}));var i=a(18);const r={},c=({activityType:t,reducer:e,saga:a})=>{e&&Object(i.d)(e),a&&Object(i.e)(a),r[t]=!0},n=t=>Boolean(r[t])},204:function(t,e,a){"use strict";var i=a(190),r=a.n(i),c=a(12),n=a.n(c),s=a(71),o=a.n(s),d=a(84);const l=({correct:t,wrong:e,revealed:a,classNames:i,tooltip:c,Component:s=d.a,...o})=>{const l=n.a.createElement(s,r()({correct:t,wrong:e,revealed:a,classNames:i},o));return c?n.a.createElement(d.c,{tooltip:c},l):l};l.propTypes={correct:o.a.bool,wrong:o.a.bool,revealed:o.a.bool,classNames:o.a.array},e.a=l},335:function(t,e,a){"use strict";a.r(e);var i=a(12),r=a.n(i),c=a(202),n=a(14),s=a(10),o=a(203),d=a(32),l=a(63),y=a(2),u=a(9),v=a(76);const m=new u.b.Entity("cellsItemData",{markings:v.a}),p=[m];var D=a(3);const f=Object(D.c)({name:"imwordsearch_cell_itemData",initialState:{},reducers:{addCellsItemData:(t,e)=>({...t,...e.payload.data}),clearCellsItemData:(t,{payload:{data:e}})=>Object.keys(t).reduce((a,i)=>(e.includes(i)||(a[i]=t[i]),a),{}),setCellsItemData:(t,e)=>{e.payload.data.forEach(e=>{t[e.id]={...t[e.id],...e}})}}}),b=f.reducer,x=f.actions;var g={imwordsearch_cells_itemData:b};const I={...x};var O=a(7),h=a.n(O),j=a(6),C=a(73),T=a(45),k=a(22),E=a(40),R=a(46);const w=(t,e)=>e.activityId,A=(t,e)=>e.markings,U=h()([C.a],t=>{if(t)return t.metadata.gridSize})(w),M=h()([T.getActivityItemData,R.getActivityUIDataDataTypeSolution,k.getActivityUserData],(t,e,a)=>{if(t&&e&&a)return t.filter(t=>{const i=a.find(e=>e.id===t.id),r=e.find(e=>e.id===t.id);return i||r})})(w,{selectorCreator:j.a}),S=h()([R.getActivityUIData,A],(t,e)=>{if(t&&e)return t.filter(t=>e.includes(t.id))})(w,{selectorCreator:j.a}),q=h()([E.getActivityValidationData,A],(t,e)=>{if(t&&e)return t.filter(t=>e.includes(t.id))})(w,{selectorCreator:j.a}),N=(t,e)=>({dx:Math.sign(e.x-t.x),dy:Math.sign(e.y-t.y)}),_=(t,e)=>Math.max(Math.abs(e.x-t.x),Math.abs(e.y-t.y))+1,$=(t,e)=>{const a=N(t,e),i=_(t,e);let{x:r,y:c}=t;const n=[];return Array.from({length:i}).forEach(()=>{n.push({x:r,y:c}),r+=a.dx,c+=a.dy}),n},J=(t,e)=>t.filter(({x0:t,y0:a,x1:i,y1:r})=>((t,e,a)=>$(e,a).some(({x:e,y:a})=>t.x===e&&t.y===a))(e,{x:t,y:a},{x:i,y:r})),W=(t,e)=>{const a=((t,e)=>_({x:t.x0,y:t.y0},e)-1)(t,e),i=_({x:t.x0,y:t.y0},{x:t.x1,y:t.y1});return 1===i?["first","last"]:0===a?["first"]:a===i-1?["last"]:["middle"]},z=(t,e)=>`${t}_${e}`,P=(t,e)=>`${z(t.x,t.y)}_${z(e.x,e.y)}`,B=(t,e)=>t.x>e.x||t.x===e.x&&t.y>e.y?{start:e,end:t}:{start:t,end:e},F=t=>t.imwordsearch_cells_itemData,V=(t,e)=>e.activityId,L=(t,e)=>e.id,G=Object(j.a)([F],t=>{if(t)return Object.values(t)}),Y=h()([F,L],(t,e)=>{if(t&&e)return t[e]})(L),H=h()([G,V],(t,e)=>{if(t&&e)return t.filter(t=>t.activityId===e)})(V,{selectorCreator:j.a}),K=h()([Y,M],(t,e)=>{if(t&&e)return e.filter(e=>t.markings.includes(e.id))})(L,{selectorCreator:j.a}),Q=h()([(t,e)=>{const{x0:a,y0:i,x1:r,y1:c}=e;return $({x:a,y:i},{x:r,y:c})},H],(t,e)=>{if(t&&e)return t.map(({x:t,y:a})=>e.find(e=>e.x===t&&e.y===a))})(L,{selectorCreator:j.a});function*X(t){const{id:e,itemData:a,solutionData:i,metadata:r}=t,{cells:c,...n}=r,s=a.map(t=>{const{x0:a,y0:i,x1:r,y1:c}=t,{start:n,end:s}=B({x:a,y:i},{x:r,y:c}),o=P(n,s);return{id:`${e}_${o}`,...t,activityId:e}}),o=i.map(t=>{const{x0:a,y0:i,x1:r,y1:c}=t,{start:n,end:s}=B({x:a,y:i},{x:r,y:c}),o=P(n,s);return{id:`${e}_${o}`,value:o,activityId:e}}),l=c.map(t=>{const a=J(s,t),i=z(t.x,t.y);return{id:`${e}_${i}`,...t,markings:a,activityId:e}}),y=(v=l,Object(u.a)(v,p)).entities.cellsItemData;var v;const m=yield d.b.addActivities({...t,itemData:s,solutionData:o,metadata:n}),D=I.addCellsItemData({data:y});return m.concat([D])}function*Z(t){const{id:e}=t,a=(yield Object(y.c)(H,{activityId:e})).map(({id:t})=>t),i=yield d.b.removeActivities(t),r=I.clearCellsItemData({data:a});return i.concat([r])}var tt=a(8),et=a(26),at=a(15),it=a(23),rt=a(25);const ct=Object(tt.a)({path:"sagas",name:"itemData",processors:{setItemData:({data:t,activityType:e})=>{const a=Object(v.b)(t).entities.itemData;return[et.a.addItemData({activityType:e,data:a})].filter(t=>t.payload.data)},clearItemData:({ids:t,activityType:e})=>[et.a.clearItemData({activityType:e,data:t}),at.a.clearUIData({activityType:e,data:t}),rt.a.clearValidation({activityType:e,data:t}),it.a.clearUserData({activityType:e,data:t})].filter(t=>{var e;return null===(e=t.payload.data)||void 0===e?void 0:e.length})}}),nt=(ct.register,ct.process,ct.processors);function*st({data:t,activityType:e,activityId:a}){const i=t.map(t=>{const{x0:e,y0:i,x1:r,y1:c}=t,{start:n,end:s}=B({x:e,y:i},{x:r,y:c}),o=P(n,s);return{id:`${a}_${o}`,value:o,...t}}),r=i.map(({id:t,value:e})=>({id:t,value:e,activityId:a})),c=yield Object(y.c)(T.getActivityItemData,{activityId:a}),n=i.filter(t=>!c.find(e=>e.id===t.id)).map(t=>{const{value:e,...i}=t;return{...i,isDistractor:!0,activityId:a}});let s=[];yield*n.map((function*(t){const e=yield Object(y.c)(Q,{...t,activityId:a});s=s.concat(e.map(e=>({...e,markings:[...e.markings,t.id]})))}));const o=yield l.b.setUserData({data:r,activityType:e}),d=yield nt.setItemData({data:n,activityType:e}),u=I.setCellsItemData({data:s});return o.concat(d,[u])}function*ot({ids:t,activityType:e,activityId:a}){const i=(yield Object(y.c)(T.getActivityItemData,{activityId:a})).filter(e=>t.find(t=>e.id===t&&e.isDistractor));let r=[];yield*i.map((function*(t){const e=yield Object(y.c)(Q,t);r=r.concat(e.map(e=>({...e,markings:e.markings.filter(e=>e!==t.id)})))}));const c=i.map(t=>t.id),n=yield nt.clearItemData({ids:c,activityType:e}),s=I.setCellsItemData({data:r});return(yield l.b.clearUserData({ids:t,activityType:e})).concat(n,[s])}const dt="imwordsearch";var lt=({activityType:t,activityId:e})=>{Object(o.a)(t)||(Object(d.c)("addActivities",dt,X),Object(d.c)("removeActivities",dt,Z),Object(l.c)("setUserData",dt,st),Object(l.c)("clearUserData",dt,ot),Object(o.b)({activityType:t,reducer:g})),Object(n.c)(s.b.READY,{type:t,id:e})},yt=a(72),ut=a(71),vt=a.n(ut),mt=a(37);const pt=r.a.createContext({});pt.displayName="IMWordsearchUserDataContext";const Dt=({setUserData:t,removeUserData:e,children:a})=>r.a.createElement(pt.Provider,{value:{markingEvt:e=>{e&&t(e)},erasingEvt:t=>{t&&e(t)}}},a);Dt.propTypes={setUserData:vt.a.func.isRequired,removeUserData:vt.a.func.isRequired,children:vt.a.object};var ft=Object(yt.connect)(null,(t,{activityType:e,activityId:a})=>({setUserData:i=>{t(mt.a.setUserData({data:[i],activityType:e,activityId:a}))},removeUserData:({id:i})=>{t(mt.a.clearUserData({ids:[i],activityType:e,activityId:a}))}}))(Dt);const bt=DPReactComponents.components.activities.IMWordsearch.IMWordsearch,xt=DPReactComponents.components.activities.IMWordsearch.IMWordsearchGrid,gt=DPReactComponents.components.activities.IMWordsearch.IMWordsearchCell,It=DPReactComponents.components.activities.IMWordsearch.IMWordsearchCheckmark;var Ot=a(190),ht=a.n(Ot),jt=a(204);const Ct=t=>{const{direction:e}=t;return r.a.createElement(jt.a,ht()({Component:It,direction:e},t))};Ct.propTypes={direction:vt.a.shape({dx:vt.a.number,dy:vt.a.number}).isRequired};var Tt=Ct;const kt=(t,e,a)=>{const i=a.find(e=>e.id===t.id),r=e.find(e=>e.id===t.id);return{isEnabled:Boolean(null==r?void 0:r.enabled),isValidated:Boolean(i),isSolution:Boolean("solution"===(null==r?void 0:r.dataType)),isCorrect:Boolean(null==i?void 0:i.correct),isFilled:Boolean(null==i?void 0:i.filled),classes:(null==r?void 0:r.extra)||[]}},Et=r.a.memo(({letter:t,x:e,y:a,markings:c,uiData:n,validationData:s,enabled:o})=>{const[d,l]=Object(i.useState)([]),[y,u]=Object(i.useState)([]),v=y.map((t,e)=>({isLastCell:t.isLastCell,isFirstCell:t.isFirstCell,checkmark:r.a.createElement(Tt,{key:e,correct:t.isCorrect,wrong:!t.isCorrect,revealed:!t.isFilled,classNames:t.classNames,direction:t.direction})}));return Object(i.useEffect)(()=>{u([]);const t=c.map(t=>{const i=kt(t,n,s),{isValidated:r}=i,c=W(t,{x:e,y:a}),o=c.includes("last"),d=c.includes("first"),l=N({x:t.x0,y:t.y0},{x:t.x1,y:t.y1}),y=((t,e)=>{const a=N(t,e),i=JSON.stringify([a.dx,a.dy]);return i===JSON.stringify([0,1])?"bottom":i===JSON.stringify([0,-1])?"top":i===JSON.stringify([1,0])?"right":i===JSON.stringify([-1,0])?"left":i===JSON.stringify([-1,-1])?"top-left":i===JSON.stringify([1,-1])?"top-right":i===JSON.stringify([-1,1])?"bottom-left":i===JSON.stringify([1,1])?"bottom-right":void 0})({x:t.x0,y:t.y0},{x:t.x1,y:t.y1});if(r){const t={classNames:[y],direction:l,isFirstCell:d,isLastCell:o,...i};u(e=>[...e,t])}return{relativePosition:c,direction:y,...i}});l(t)},[c,n,s]),r.a.createElement(gt,{letter:t,orientations:d,checkmarks:v,disabled:!o&&!c.length})});Et.propTypes={letter:vt.a.string.isRequired,x:vt.a.number.isRequired,y:vt.a.number.isRequired,markings:vt.a.array.isRequired,uiData:vt.a.array.isRequired,validationData:vt.a.array.isRequired,enabled:vt.a.bool};var Rt=Object(yt.connect)((t,e)=>({markings:K(t,e),uiData:S(t,e),validationData:q(t,e)}))(Et);const wt=({cells:t,size:e,markings:a,uiData:c,validationData:n,activityId:s,screenId:o})=>{const d=a.map(t=>{const e=kt(t,c,n);return{...t,...e}}),l=c.some(({enabled:t})=>t),y=t.map(t=>r.a.createElement(Rt,ht()({key:t.id},t,{enabled:l,activityId:s,screenId:o}))),u=Object(i.useContext)(pt);return r.a.createElement(xt,{size:e,markings:d,onMarking:t=>{u.markingEvt(t)},onErasing:t=>{u.erasingEvt(t)},enabled:l},y)};wt.propTypes={cells:vt.a.array.isRequired,size:vt.a.number.isRequired,markings:vt.a.array.isRequired,uiData:vt.a.array.isRequired,validationData:vt.a.array.isRequired,activityId:vt.a.string.isRequired,screenId:vt.a.number.isRequired};var At=wt;e.default=Object(c.a)(Object(yt.connect)((t,e)=>({cells:H(t,e),gridSize:U(t,e),markings:M(t,e),uiData:Object(R.getActivityUIData)(t,e),validationData:Object(E.getActivityValidationData)(t,e)}))(({cells:t,gridSize:e,markings:a,uiData:i,validationData:c,activityId:n,activityType:s,screenId:o})=>r.a.createElement(ft,{activityId:n,activityType:s,screenId:o},r.a.createElement(bt,null,r.a.createElement(At,{cells:t,size:e,markings:a,uiData:i,validationData:c,activityId:n,screenId:o})))),lt)}}]);