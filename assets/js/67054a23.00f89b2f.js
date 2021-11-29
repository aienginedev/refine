"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54701:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(70771),s=["components"],c={id:"table-search",title:"Table Search"},l=void 0,p={unversionedId:"guides-and-concepts/search/table-search",id:"guides-and-concepts/search/table-search",isDocsHomePage:!1,title:"Table Search",description:"We can make extensive search / filter operations using the useTable hook on the listing pages.",source:"@site/docs/guides-and-concepts/search/table-search.md",sourceDirName:"guides-and-concepts/search",slug:"/guides-and-concepts/search/table-search",permalink:"/docs/next/guides-and-concepts/search/table-search",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/search/table-search.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"table-search",title:"Table Search"},sidebar:"someSidebar",previous:{title:"Search",permalink:"/docs/next/guides-and-concepts/search/search"},next:{title:"List Search",permalink:"/docs/next/guides-and-concepts/search/list-search"}},d=[{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We can make extensive search / filter operations using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook on the listing pages."),(0,o.kt)("p",null,"First, we create a form by extracting ",(0,o.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable"),". We will use this form for search / filtering."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'import {\n// highlight-start\n    Form,\n    Table,\n    useTable,\n// highlight-end\n    Row,\n    Col,\n    Icons,\n    List,\n    Button,\n    DatePicker,\n    Space,\n    Input,\n} from "@pankod/refine";\n\nconst { RangePicker } = DatePicker;\n\nexport const ListPage: React.FC = () => {\n// highlight-next-line\n    const { searchFormProps } = useTable<IPost>();\n\n    return (\n// highlight-start\n        <Row gutter={[16, 16]}>\n            <Col lg={6} xs={24}>\n                <Form layout="vertical" {...searchFormProps}>\n                    <Form.Item label="Search" name="q">\n                        <Input\n                            placeholder="ID, Title, Content, etc."\n                            prefix={<Icons.SearchOutlined />}\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                    <Form.Item>\n                        <Button htmlType="submit" type="primary">\n                            Filter\n                        </Button>\n                    </Form.Item>\n                </Form>\n            </Col>\n            <Col lg={18} xs={24}>\n                <List>\n                    <Table>...</Table>\n                </List>\n            </Col>\n        </Row>\n// highlight-end\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    createdAt: string;\n}\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z})),(0,o.kt)("br",null),(0,o.kt)("p",null,"When the form is submitted, the ",(0,o.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. We have to return an object of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/interfaceReferences#crudfilters"},(0,o.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," for this method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/list.tsx"',title:'"pages/list.tsx"'},'...\nimport { Dayjs } from "dayjs";\n\nconst { searchFormProps } = useTable<IPost, { title: string; createdAt: [Dayjs, Dayjs] }>({\n    onSearch: (params) => {\n        const filters: CrudFilters = [];\n        const { q, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "q",\n                    operator: "eq",\n                    value: q,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n        return filters;\n    },\n});\n...\n')),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"CrudFilters")," types object has ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data."))),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-table-filter-example-fdzc4?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-table-filter-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0},70771:function(e,t,n){t.Z=n.p+"assets/images/form-3abfa22cf27b801fd3b54c45c55e83a9.png"}}]);