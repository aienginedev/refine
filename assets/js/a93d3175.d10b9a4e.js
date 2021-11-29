"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74236],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(96193),o=["components"],s={id:"boolean",title:"Boolean"},p=void 0,d={unversionedId:"api-references/components/fields/boolean",id:"api-references/components/fields/boolean",isDocsHomePage:!1,title:"Boolean",description:"This field is used to display boolean values. It uses the `` values from Ant Design.",source:"@site/docs/api-references/components/fields/boolean.md",sourceDirName:"api-references/components/fields",slug:"/api-references/components/fields/boolean",permalink:"/docs/next/api-references/components/fields/boolean",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/components/fields/boolean.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"someSidebar",previous:{title:"Custom Inputs",permalink:"/docs/next/api-references/components/inputs/custom-inputs"},next:{title:"Url",permalink:"/docs/next/api-references/components/fields/url"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This field is used to display boolean values. It uses the ",(0,l.kt)("a",{parentName:"p",href:"https://ant.design/components/tooltip/#header"},(0,l.kt)("inlineCode",{parentName:"a"},"<Tooltip>"))," values from Ant Design."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Let's see how we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"<BooleanField>")," with the example in the post list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { \n    List,\n    Table,\n    // highlight-start\n    BooleanField,\n    Icons\n    // highlight-end\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { CloseCircleOutlined, CheckCircleOutlined } = Icons;\n\n    return (\n        <List>\n            <Table rowKey="id">\n                ...\n                <Table.Column\n                    dataIndex="status"\n                    title="Published"\n                    render={(value) => (\n                        // highlight-start\n                        <BooleanField\n                            value={value === "published"}\n                            trueIcon={<CheckCircleOutlined />}\n                            falseIcon={<CloseCircleOutlined />}\n                            valueLabelTrue="published"\n                            valueLabelFalse="unpublished"\n                        />\n                        // highlight-end\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,l.kt)("br",null),(0,l.kt)("div",{class:"img-container"},(0,l.kt)("div",{class:"window"},(0,l.kt)("div",{class:"control red"}),(0,l.kt)("div",{class:"control orange"}),(0,l.kt)("div",{class:"control green"})),(0,l.kt)("img",{src:i.Z,alt:"BooleanField"})),(0,l.kt)("h2",{id:"api-reference"},"API Reference"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"Field value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"unknown")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valueLabelTrue"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is a value, this is the text to use"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"true"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valueLabelFalse"),(0,l.kt)("td",{parentName:"tr",align:null},"If there no value, this is the text to use"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"false"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trueIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"If there is a value, this is the icon to use"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"React.FC")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,l.kt)("inlineCode",{parentName:"a"},"<CheckOutlined />")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"falseIcon"),(0,l.kt)("td",{parentName:"tr",align:null},"If there no value, this is the icon to use."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"React.FC")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/icon/"},(0,l.kt)("inlineCode",{parentName:"a"},"<CloseOutlined />")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AbstractTooltipProps"),(0,l.kt)("td",{parentName:"tr",align:null},"Ant Design ",(0,l.kt)("inlineCode",{parentName:"td"},"Tooltip")," properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://ant.design/components/tooltip/#API"},(0,l.kt)("inlineCode",{parentName:"a"},"AbstractTooltipProps"))),(0,l.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},96193:function(e,t,n){t.Z=n.p+"assets/images/booleanfield-9251dcad2775a42bcc8448ad723c9128.png"}}]);