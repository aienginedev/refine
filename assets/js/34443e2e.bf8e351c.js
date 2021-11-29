"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36129],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=n(8694),i=["components"],s={id:"useStepsForm",title:"useStepsForm"},p=void 0,d={unversionedId:"api-references/hooks/form/useStepsForm",id:"version-1.0.xx/api-references/hooks/form/useStepsForm",isDocsHomePage:!1,title:"useStepsForm",description:"useStepsForm hook allows you to split your form under an Ant Design based Steps component and provides you with a few useful functionalities that will help you manage your form.",source:"@site/versioned_docs/version-1.0.xx/api-references/hooks/form/useStepsForm.md",sourceDirName:"api-references/hooks/form",slug:"/api-references/hooks/form/useStepsForm",permalink:"/docs/1.0.xx/api-references/hooks/form/useStepsForm",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/api-references/hooks/form/useStepsForm.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useStepsForm",title:"useStepsForm"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"useDrawerForm",permalink:"/docs/1.0.xx/api-references/hooks/form/useDrawerForm"},next:{title:"useTable",permalink:"/docs/1.0.xx/api-references/hooks/table/useTable"}},m=[{value:"Usage",id:"usage",children:[{value:"Create",id:"create",children:[],level:3},{value:"Edit",id:"edit",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return Values",id:"return-values",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook allows you to split your form under an Ant Design based ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/steps/"},"Steps")," component and provides you with a few useful functionalities that will help you manage your form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useStepsForm } from "@pankod/refine";\n\nconst { stepsProps, formProps } = useStepsForm<IPost>();\n')),(0,o.kt)("p",null,"All we have to do is to pass the props it returns to our ",(0,o.kt)("inlineCode",{parentName:"p"},"<Steps>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<Form>")," components."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We'll do two examples, one for creating and one for editing a post. Let's see how ",(0,o.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is used in both."),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"For the sake of simplicity, in this example we're going to build a ",(0,o.kt)("inlineCode",{parentName:"p"},"Post")," create form that consists of only a ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and a relational ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," field."),(0,o.kt)("p",null,"To split your form items under a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Steps>")," component, first import and use ",(0,o.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook in your page:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx" {4-11}',title:'"pages/posts/create.tsx"',"{4-11}":!0},'import { useStepsForm } from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        current,\n        gotoStep,\n        stepsProps,\n        formProps,\n        saveButtonProps,\n        queryResult,\n    } = useStepsForm<IPost>();\n\n    return null;\n};\n\ninterface ICategory {\n    id: string;\n    title: string;\n}\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useStepsForm")," is generic over the type form data to help you type check your code."),(0,o.kt)("p",null,"This hook returns a set of useful values to render steps form. Given ",(0,o.kt)("inlineCode",{parentName:"p"},"current")," value, you should have a way to render your form items conditionally with this index value. You can use an array to achieve this."),(0,o.kt)("p",null,"Here, each item of ",(0,o.kt)("inlineCode",{parentName:"p"},"formList")," corresponds to one step in form:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx" {1, 12-14,16-43}',title:'"pages/posts/create.tsx"',"{1,":!0,"12-14,16-43}":!0},'import { useStepsForm, useSelect, Form, Input, Select } from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        current,\n        gotoStep,\n        stepsProps,\n        formProps,\n        saveButtonProps,\n    } = useStepsForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    const formList = [\n        <>\n            <Form.Item\n                label="Title"\n                name="title"\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Input />\n            </Form.Item>\n        </>,\n        <>\n            <Form.Item\n                label="Category"\n                name={["category", "id"]}\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Select {...categorySelectProps} />\n            </Form.Item>\n        </>,\n    ];\n    \n    return null;\n};\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," is a relational data, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect")," to fetch its data."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.xx/api-references/hooks/field/useSelect"},"Refer to ",(0,o.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for detailed usage. ","\u2192")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You should use ",(0,o.kt)("inlineCode",{parentName:"p"},"stepsProps")," on ",(0,o.kt)("inlineCode",{parentName:"p"},"<Steps>")," component, ",(0,o.kt)("inlineCode",{parentName:"p"},"formProps")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Form>")," component respectively. And as the last step, you should render the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Steps>")," component besides the form like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx" {7-8, 55-63}',title:'"pages/posts/create.tsx"',"{7-8,":!0,"55-63}":!0},'import {\n    useStepsForm,\n    useSelect,\n    Form,\n    Input,\n    Select,\n    Create,\n    Steps,\n} from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        current,\n        gotoStep,\n        stepsProps,\n        formProps,\n        saveButtonProps,\n        queryResult,\n    } = useStepsForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    const formList = [\n        <>\n            <Form.Item\n                label="Title"\n                name="title"\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Input />\n            </Form.Item>\n        </>,\n        <>\n            <Form.Item\n                label="Category"\n                name={["category", "id"]}\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Select {...categorySelectProps} />\n            </Form.Item>\n        </>,\n    ];\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Steps {...stepsProps}>\n                <Steps.Step title="First Step" />\n                <Steps.Step title="Second Step" />\n            </Steps>\n            <Form {...formProps} layout="vertical">\n                {formList[current]}\n            </Form>\n        </Create>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure to add as much ",(0,o.kt)("inlineCode",{parentName:"p"},"<Steps.Step>")," components as the number of steps in the ",(0,o.kt)("inlineCode",{parentName:"p"},"formList")," array."))),(0,o.kt)("br",null),(0,o.kt)("p",null,"To help users navigate between steps in the form, you can use action buttons. Your navigation buttons should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoStep")," function that was previously returned from the the ",(0,o.kt)("inlineCode",{parentName:"p"},"useStepsForm")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/create.tsx" {9-10, 59-87}',title:'"pages/posts/create.tsx"',"{9-10,":!0,"59-87}":!0},'import {\n    useStepsForm,\n    useSelect,\n    Form,\n    Input,\n    Select,\n    Create,\n    Steps,\n    Button,\n    SaveButton,\n} from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        current,\n        gotoStep,\n        stepsProps,\n        formProps,\n        saveButtonProps,\n        queryResult,\n        submit,\n    } = useStepsForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n    });\n\n    const formList = [\n        <>\n            <Form.Item\n                label="Title"\n                name="title"\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Input />\n            </Form.Item>\n        </>,\n        <>\n            <Form.Item\n                label="Category"\n                name={["category", "id"]}\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Select {...categorySelectProps} />\n            </Form.Item>\n        </>,\n    ];\n\n    return (\n        <Create\n            actionButtons={\n                <>\n                    {current > 0 && (\n                        <Button\n                            onClick={() => {\n                                gotoStep(current - 1);\n                            }}\n                        >\n                            Previous\n                        </Button>\n                    )}\n                    {current < formList.length - 1 && (\n                        <Button\n                            onClick={() => {\n                                gotoStep(current + 1);\n                            }}\n                        >\n                            Next\n                        </Button>\n                    )}\n                    {current === formList.length - 1 && (\n                        <SaveButton\n                            {...saveButtonProps}\n                            style={{ marginRight: 10 }}\n                            onClick={() => submit()}\n                        />\n                    )}\n                </>\n            }\n        >\n            <Steps {...stepsProps}>\n                <Steps.Step title="First Step" />\n                <Steps.Step title="Second Step" />\n            </Steps>\n            <Form {...formProps} layout="vertical">\n                {formList[current]}\n            </Form>\n        </Create>\n    );\n};\n')),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"Steps form example"})),(0,o.kt)("h3",{id:"edit"},"Edit"),(0,o.kt)("p",null,"In this example, we'll just look at what's different from the example above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/edit.tsx" {10,20, 24, 28, 60-98}',title:'"pages/posts/edit.tsx"',"{10,20,":!0,"24,":!0,"28,":!0,"60-98}":!0},'import {\n    useStepsForm,\n    useSelect,\n    Form,\n    Input,\n    Select,\n    Steps,\n    Button,\n    SaveButton,\n    Edit,\n} from "@pankod/refine";\n\nexport const PostCreate: React.FC = () => {\n    const {\n        current,\n        gotoStep,\n        stepsProps,\n        formProps,\n        saveButtonProps,\n        queryResult,\n        submit,\n    } = useStepsForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "categories",\n        defaultValue: postData?.category.id,\n    });\n\n    const formList = [\n        <>\n            <Form.Item\n                label="Title"\n                name="title"\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Input />\n            </Form.Item>\n        </>,\n        <>\n            <Form.Item\n                label="Category"\n                name={["category", "id"]}\n                rules={[\n                    {\n                        required: true,\n                    },\n                ]}\n            >\n                <Select {...categorySelectProps} />\n            </Form.Item>\n        </>,\n    ];\n\n    return (\n        <Edit\n            actionButtons={\n                <>\n                    {current > 0 && (\n                        <Button\n                            onClick={() => {\n                                gotoStep(current - 1);\n                            }}\n                        >\n                            Previous\n                        </Button>\n                    )}\n                    {current < formList.length - 1 && (\n                        <Button\n                            onClick={() => {\n                                gotoStep(current + 1);\n                            }}\n                        >\n                            Next\n                        </Button>\n                    )}\n                    {current === formList.length - 1 && (\n                        <SaveButton\n                            {...saveButtonProps}\n                            style={{ marginRight: 10 }}\n                            onClick={() => submit()}\n                        />\n                    )}\n                </>\n            }\n        >\n            <Steps {...stepsProps}>\n                <Steps.Step title="First Step" />\n                <Steps.Step title="Second Step" />\n            </Steps>\n            <Form {...formProps} layout="vertical">\n                {formList[current]}\n            </Form>\n        </Edit>\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"action ",(0,o.kt)("div",{className:" required"},"Required")),(0,o.kt)("td",{parentName:"tr",align:null},"Type of form mode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"create"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultCurrent"),(0,o.kt)("td",{parentName:"tr",align:null},"Default step, counting from 0"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"total"),(0,o.kt)("td",{parentName:"tr",align:null},"Total count of steps steps"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"isBackValidate"),(0,o.kt)("td",{parentName:"tr",align:null},"Should validate if went to the previous step step"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"true"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"form"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,o.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>"))),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/1.0.xx/guides-and-concepts/mutation-mode"},"Determines when mutations are executed"),". If not explicitly configured, it is read from the mutation mode config of the resource in current route"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(error: any, variables: any, context: any) => void")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,o.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(data: UpdateResponse<M>, variables: any, context: any) => void")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"redirect"),(0,o.kt)("td",{parentName:"tr",align:null},"Page to redirect after a succesfull mutation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"show')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"edit')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"list"'),"*","*"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submit"),(0,o.kt)("td",{parentName:"tr",align:null},"Submit the form"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(values?: TVariables) => Promise<TData>")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submitOnEnter"),(0,o.kt)("td",{parentName:"tr",align:null},"Listen ",(0,o.kt)("inlineCode",{parentName:"td"},"Enter")," key press to submit form"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,o.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,o.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"warnWhenUnsavedChanges"),(0,o.kt)("td",{parentName:"tr",align:null},"Shows notification when unsaved changes exist"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"),"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,o.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/1.0.xx/api-references/interfaceReferences#successerrornotification"},(0,o.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,o.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,o.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,o.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,o.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/1.0.xx/api-references/interfaceReferences#successerrornotification"},(0,o.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,o.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,o.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,o.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,o.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,o.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metaData"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,o.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/1.0.xx/api-references/interfaceReferences#metadataquery"},(0,o.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,o.kt)("td",{parentName:"tr",align:null},"{}")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,o.kt)("strong",{parentName:"p"},"<",(0,o.kt)("a",{parentName:"strong",href:"/docs/1.0.xx/api-references/components/refine-config"},"Refine"),">")," component. ",(0,o.kt)("inlineCode",{parentName:"p"},"useModalForm")," will use what is passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"**"),": If not explicitly configured, default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect")," depends on which ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," used. If ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," (created resources edit page). if ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," instead, ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),".")),(0,o.kt)("h3",{id:"return-values"},"Return Values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stepsProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design steps props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/steps/#API"},(0,o.kt)("inlineCode",{parentName:"a"},"StepsProps")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"current"),(0,o.kt)("td",{parentName:"tr",align:null},"Current step, counting from 0."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gotoStep"),(0,o.kt)("td",{parentName:"tr",align:null},"Go to the target step"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(step: number) => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#Form"},(0,o.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"form"),(0,o.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,o.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,o.kt)("td",{parentName:"tr",align:null},"Loading status of form"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"defaultFormValuesLoading"),(0,o.kt)("td",{parentName:"tr",align:null},"DefaultFormValues loading status of form"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"submit"),(0,o.kt)("td",{parentName:"tr",align:null},"Submit method, the parameter is the value of the form fields"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,o.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"UseMutationResult<"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"{ data: TData },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"TError,"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"}," { resource: string; values: TVariables; },"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"}," unknown>"),"](",(0,o.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"https://react-query.tanstack.com/reference/useMutation"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"editId"),(0,o.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"setEditId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"editId")," setter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cloneId"),(0,o.kt)("td",{parentName:"tr",align:null},"Record id for clone action"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"setCloneId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cloneId")," setter"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,o.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"undefined>>"))))),(0,o.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Desription"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TData"),(0,o.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ","[",(0,o.kt)("inlineCode",{parentName:"td"},"BaseRecord"),"][BaseRecord]"),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("inlineCode",{parentName:"td"},"BaseRecord"),"][BaseRecord]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TError"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ","[",(0,o.kt)("inlineCode",{parentName:"td"},"HttpError"),"][HttpError]"),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("inlineCode",{parentName:"td"},"HttpError"),"][HttpError]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,o.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-steps-form-example-ok968?autoresize=1&fontsize=14&module=%2Fsrc%2Fpages%2Fposts%2Fedit.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-steps-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0},8694:function(e,t,n){t.Z=n.p+"assets/images/example-fa797d7b778813b98c55fe4c1acd7a9b.gif"}}]);