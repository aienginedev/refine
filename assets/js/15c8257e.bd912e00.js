"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=n(91401),s=n(53359),c=["components"],l={id:"list-search",title:"List Search"},p=void 0,d={unversionedId:"guides-and-concepts/search/list-search",id:"version-1.0.xx/guides-and-concepts/search/list-search",isDocsHomePage:!1,title:"List Search",description:"We will examine how to make an extensive search and filtering with the useSimpleList hook that works with the Ant Design's `` component.",source:"@site/versioned_docs/version-1.0.xx/guides-and-concepts/search/list-search.md",sourceDirName:"guides-and-concepts/search",slug:"/guides-and-concepts/search/list-search",permalink:"/docs/1.0.xx/guides-and-concepts/search/list-search",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/guides-and-concepts/search/list-search.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"list-search",title:"List Search"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"Table Search",permalink:"/docs/1.0.xx/guides-and-concepts/search/table-search"},next:{title:"CSV Import",permalink:"/docs/1.0.xx/guides-and-concepts/import-export/csv-import"}},m=[{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We will examine how to make an extensive search and filtering with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.xx/api-references/hooks/show/useSimpleList"},(0,i.kt)("inlineCode",{parentName:"a"},"useSimpleList"))," hook that works with the Ant Design's ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/list"},(0,i.kt)("inlineCode",{parentName:"a"},"<List>"))," component."),(0,i.kt)("p",null,"To do this, let's list posts using the posts resource."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx" {3-4, 14, 55}',title:'"pages/posts/list.tsx"',"{3-4,":!0,"14,":!0,"55}":!0},'import {\n    List,\n    useSimpleList,\n    useMany,\n    AntdList,\n    Typography,\n    Space,\n    NumberField,\n} from "@pankod/refine";\n\nconst { Text } = Typography;\n\nexport const PostList: React.FC = () => {\n    const { listProps } = useSimpleList<IPost>();\n\n    const categoryIds =\n        listProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    const renderItem = (item: IPost) => {\n        const { title, hit, content } = item;\n\n        const categoryTitle = data?.data.find(\n            (category: ICategory) => category.id === item.category.id,\n        )?.title;\n\n        return (\n            <AntdList.Item\n                actions={[\n                    <Space key={item.id} direction="vertical" align="end">\n                        <NumberField\n                            value={hit}\n                            options={{\n                                // @ts-ignore\n                                notation: "compact",\n                            }}\n                        />\n                        <Text>{categoryTitle}</Text>\n                    </Space>,\n                ]}\n            >\n                <AntdList.Item.Meta title={title} description={content} />\n            </AntdList.Item>\n        );\n    };\n\n    return (\n        <List>\n            <AntdList {...listProps} renderItem={renderItem} />\n        </List>\n    );\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    content: string;\n    hit: number;\n    category: ICategory;\n}\n')),(0,i.kt)("p",null,"Let's pass the list page we created to our ",(0,i.kt)("inlineCode",{parentName:"p"},"<Resource>")," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"{6, 13}","{6,":!0,"13}":!0},'import { Refine, Resource } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine dataProvider={dataProvider(API_URL)}>\n            <Resource name="posts" list={PostList} />\n        </Refine>\n    );\n};\n\nexport default App;\n')),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:o.Z,alt:"basic list"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"We will create a form by extracting ",(0,i.kt)("inlineCode",{parentName:"p"},"searchFormProps")," from ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.xx/api-references/hooks/show/useSimpleList"},(0,i.kt)("inlineCode",{parentName:"a"},"useSimpleList")),". We will use this form for search/filtering. We will also create an interface to determine the types of values from the form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx" {5, 13-36, 40-43, 47-64}',title:'"pages/posts/list.tsx"',"{5,":!0,"13-36,":!0,"40-43,":!0,"47-64}":!0},'...\n\nimport {\n    ...\n    CrudFilters,\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const { listProps, searchFormProps } = useSimpleList<\n        IPost,\n        IPostFilterVariables\n    >({\n        onSearch: (params) => {\n            const filters: CrudFilters = [];\n            const { category, createdAt } = params;\n\n            filters.push(\n                {\n                    field: "category.id",\n                    operator: "eq",\n                    value: category,\n                },\n                {\n                    field: "createdAt",\n                    operator: "gte",\n                    value: createdAt ? createdAt[0].toISOString() : undefined,\n                },\n                {\n                    field: "createdAt",\n                    operator: "lte",\n                    value: createdAt ? createdAt[1].toISOString() : undefined,\n                },\n            );\n\n            return filters;\n        },\n    });\n\n    // ...\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    return (\n        <List>\n            <Form\n                {...searchFormProps}\n                layout="vertical"\n                onValuesChange={() => searchFormProps.form?.submit()}\n            >\n                <Space wrap>\n                    <Form.Item label="Category" name="category">\n                        <Select\n                            {...categorySelectProps}\n                            allowClear\n                            placeholder="Search Categories"\n                        />\n                    </Form.Item>\n                    <Form.Item label="Created At" name="createdAt">\n                        <RangePicker />\n                    </Form.Item>\n                </Space>\n            </Form>\n            <AntdList {...listProps} renderItem={renderItem} />\n        </List>\n    );\n};\n\ninterface IPostFilterVariables {\n    category: string;\n    createdAt: [Dayjs, Dayjs];\n}\n')),(0,i.kt)("p",null,"When the form is submitted, the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSearch")," method runs and we get the search form values. Then the ",(0,i.kt)("inlineCode",{parentName:"p"},"listProps")," is refreshed according to the criteria."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:s.Z,alt:"form list"})),(0,i.kt)("br",null),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"/docs/1.0.xx/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters"))," type object has ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"operator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," properties. These properties help us to filter in which field, with which operator, and with which data."))),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-simple-list-example-vcq4d?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Flist.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-simple-list-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0},91401:function(e,t,n){t.Z=n.p+"assets/images/basic-list-704080fb6219486835a9e817f65686e3.png"},53359:function(e,t,n){t.Z=n.p+"assets/images/form-list-ff7bb6f8804b21bfff549b7a5ecc8017.png"}}]);