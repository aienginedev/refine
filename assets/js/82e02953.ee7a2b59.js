"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},79715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));a(65488),a(85162),a(75338),a(44160),a(51635);const i={title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["refine","react-admin","react","admin-panel"],image:"/img/placeholder.png",hide_table_of_contents:!1},l=void 0,o={permalink:"/blog/refine-vs-react-admin",source:"@site/blog/2021-11-26-refine-vs-react-admin.md",title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react-admin",permalink:"/blog/tags/react-admin"},{label:"react",permalink:"/blog/tags/react"},{label:"admin-panel",permalink:"/blog/tags/admin-panel"}],readingTime:14.575,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",slug:"refine-vs-react-admin",authors:"melih",tags:["refine","react-admin","react","admin-panel"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},nextItem:{title:"Create Your Easy Customizable Internal Issue Tracker With Refine and Supabase",permalink:"/blog/customizable-issue-tracker-with-refine-and-supabase"},relatedPosts:[{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"},{title:"Create E-mail Subscription Panel with Refine and Strapi",permalink:"/blog/e-mail-subscription-panel-with-refine",formattedDate:"October 25, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.925,date:"2021-10-25T00:00:00.000Z"},{title:"Redirect in React Router V6 with useNavigate hook",permalink:"/blog/usenavigate-react-router-redirect",formattedDate:"September 19, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],readingTime:5.285,date:"2022-09-19T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.485,date:"2022-04-29T00:00:00.000Z"},{title:"Create Full Featured Admin Panel with React and Ant Design",permalink:"/blog/refine-react-ant-design-admin-panel-framework",formattedDate:"February 21, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.8,date:"2022-02-21T00:00:00.000Z"},{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",formattedDate:"February 14, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.035,date:"2022-02-14T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},s=[],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you are reading this, chances are you are a developer researching options for delivering an admin panel or another internal tool. Together with you, we will take a look at the best admin panel frameworks in response to this need."))}u.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),i=a(86010),l=a(72389),o=a(67392),c=a(7094),s=a(12466);const m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:d,groupId:h,className:f}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,o.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,c.U)(),[T,E]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,a=O.indexOf(t),r=g[a].value;r!==T&&(D(t),E(r),null!=h&&w(h,String(r)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,n.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},75338:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/admin_flow-a47b27c6306b409280ca8110729448c1.png"},51635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/project_setup-ff605f3638aff8a9a46c2c21f7dc062f.gif"},44160:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/refine_flow-3900c017d7457201e2d8f306c9dec91f.png"}}]);