"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"table-search",title:"Table Search"},i=void 0,s={unversionedId:"advanced-tutorials/search/table-search",id:"version-3.xx.xx/advanced-tutorials/search/table-search",title:"Table Search",description:"We can make extensive search / filter operations using the useTable hook on the listing pages.",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/search/table-search.md",sourceDirName:"advanced-tutorials/search",slug:"/advanced-tutorials/search/table-search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/table-search",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/search/table-search.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683032576,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{id:"table-search",title:"Table Search"},sidebar:"someSidebar",previous:{title:"Search",permalink:"/docs/3.xx.xx/advanced-tutorials/search/"},next:{title:"Remix",permalink:"/docs/3.xx.xx/advanced-tutorials/ssr/remix"}},l={},c=[{value:"Example",id:"example",level:2}],p=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can make extensive search / filter operations using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook on the listing pages."),(0,a.kt)("p",null,"First, we create a form by extracting ",(0,a.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable"),". We will use this form for search / filtering."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'import {\n    // highlight-start\n    Form,\n    Table,\n    useTable,\n    // highlight-end\n    Row,\n    Col,\n    Icons,\n    List,\n    Button,\n    DatePicker,\n    Space,\n    Input,\n} from "@pankod/refine-antd";\n\nconst { RangePicker } = DatePicker;\n\nexport const ListPage: React.FC = () => {\n    // highlight-next-line\n    const { searchFormProps } = useTable<IPost>();\n\n    return (\n        // highlight-start\n        <Row gutter={[16, 16]}>\n            <Col lg={6} xs={24}>\n                <Form layout="vertical" {...searchFormProps}>\n                    <Form.Item label="Search" name="q">\n                        <Input\n                            placeholder="ID, Title, Content, etc."\n                            prefix={<Icons.SearchOutlined />}\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button htmlType="submit" type="primary">\n                            Filter\n                        </Button>\n                    </Form.Item>\n                </Form>\n            </Col>\n            <Col lg={18} xs={24}>\n                <List>\n                    <Table>...</Table>\n                </List>\n            </Col>\n        </Row>\n        // highlight-end\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    createdAt: string;\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/table-search/form.png"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"When the form is submitted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. We have to return an object of type ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#crudfilters"},(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," for this method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'...\nimport { HttpError } from "@pankod/refine-core";\nimport { Dayjs } from "dayjs";\n\nconst { searchFormProps } = useTable<IPost, HttpError, { title: string; createdAt: [Dayjs, Dayjs] }>({\n    onSearch: (params) => {\n        const filters: CrudFilters = [];\n        const { q, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "q",\n                    operator: "eq",\n                    value: q,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n        return filters;\n    },\n});\n...\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"CrudFilters")," types object has ",(0,a.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"operator"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(p,{path:"table-antd-table-filter",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);