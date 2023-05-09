"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30836],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),m=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=m(t),c=r,f=d["".concat(l,".").concat(c)]||d[c]||p[c]||o;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),m=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:t,block:i,defaultValue:d,values:c,groupId:f,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,s.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,l.U)(),[C,F]=(0,r.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,m.o5)();if(null!=f){const e=y[f];null!=e&&e!==C&&k.some((n=>n.value===e))&&F(e)}const T=e=>{const n=e.currentTarget,t=w.indexOf(n),a=k[t].value;a!==C&&(S(n),F(a),null!=f&&N(f,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>w.push(e),onKeyDown:x,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function c(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},43584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var a=t(87462),r=(t(67294),t(3905)),o=t(65488),i=t(85162);const s={id:"faq",title:"FAQ"},l=void 0,m={unversionedId:"faq",id:"faq",title:"FAQ",description:"How can I change the form data before submitting it to the API?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/faq.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683641442,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool vs Redwood",permalink:"/docs/comparison"},next:{title:"Contributing",permalink:"/docs/contributing"}},u={},p=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice",id:"why-are-api-calls-triggering-twice",level:2},{value:"How can I add an item to the Sider component?",id:"how-can-i-add-an-item-to-the-sider-component",level:2}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,r.kt)("p",null,"You may need to modify the form data before it is sent to the API."),(0,r.kt)("p",null,"For example, Let's send the values we received from the user in two separate inputs, ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"surname"),", to the API as ",(0,r.kt)("inlineCode",{parentName:"p"},"fullName"),"."),(0,r.kt)(o.Z,{defaultValue:"core",values:[{label:"Core Form",value:"core"},{label:"Ant Design Form",value:"antd"},{label:"React Hook Form",value:"react-hook-form"},{label:"Material UI + React Hook Form",value:"mui-react-hook-form"},{label:"Chakra UI + React Hook Form",value:"chakra-ui-react-hook-form"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"core",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useForm } from "@refinedev/core";\n\nexport const UserCreate: React.FC = () => {\n    const [name, setName] = useState();\n    const [surname, setSurname] = useState();\n\n    const { onFinish } = useForm();\n\n    const onSubmit = (e) => {\n        e.preventDefault();\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            fullName: fullName,\n            name,\n            surname,\n        });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <input onChange={(e) => setName(e.target.value)} />\n            <input onChange={(e) => setSurname(e.target.value)} />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"antd",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n\nexport const UserCreate: React.FC = () => {\n    const { formProps } = useForm();\n\n    return (\n        <Form\n            {...formProps}\n            onFinish={(values) => {\n                const { name, surname } = values;\n                const fullName = `${name} ${surname}`;\n\n                return (\n                    formProps.onFinish &&\n                    formProps.onFinish({\n                        ...values,\n                        fullName,\n                    })\n                );\n            }}\n        >\n            <Form.Item label="Name" name="name">\n                <Input />\n            </Form.Item>\n            <Form.Item label="Surname" name="surname">\n                <Input />\n            </Form.Item>\n        </Form>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@refinedev/react-hook-form";\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish, formLoading },\n        register,\n        handleSubmit,\n    } = useForm();\n\n    const handleSubmitPostCreate = (values) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <input {...register("name")} />\n            <input {...register("surname")} />\n        </form>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"mui-react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Button, Box, TextField } from "@mui/material";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish },\n        register,\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Box component="form" onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <TextField\n                {...register("name", {\n                    required: "This field is required",\n                })}\n                name="name"\n                label="Name"\n                error={!!errors.name}\n                helperText={errors.name?.message}\n            />\n            <TextField\n                {...register("surname", {\n                    required: "This field is required",\n                })}\n                name="surname"\n                label="Surname"\n                error={!!errors.surname}\n                helperText={errors.surname?.message}\n            />\n            <Button type="submit">Submit</Button>\n        </Box>\n    );\n};\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/create/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"<Create>"))," component, you can override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"saveButtonProps"))," prop to modify the form data before submitting it to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { Create } from "@refinedev/mui";\nimport { useForm } from "@refinedev/react-hook-form";\nimport { Button, Box, TextField } from "@mui/material";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { onFinish },\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Create\n            saveButtonProps={{\n                ...saveButtonProps,\n                onClick: handleSubmit(handleSubmitForm),\n            }}\n        >\n            <Box component="form">\n                <TextField\n                    {...register("name", {\n                        required: "This field is required",\n                    })}\n                    name="name"\n                    label="Name"\n                    error={!!errors.name}\n                    helperText={errors.name?.message}\n                />\n                <TextField\n                    {...register("surname", {\n                        required: "This field is required",\n                    })}\n                    name="surname"\n                    label="Surname"\n                    error={!!errors.surname}\n                    helperText={errors.surname?.message}\n                />\n            </Box>\n        </Create>\n    );\n};\n'))),(0,r.kt)(i.Z,{value:"chakra-ui-react-hook-form",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information. ","\u2192")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\nimport {\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n    Button,\n} from "@chakra-ui/react";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        refineCore: { onFinish },\n        register,\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n            <FormControl mb="3" isInvalid={!!errors?.name}>\n                <FormLabel>Name</FormLabel>\n                <Input\n                    id="name"\n                    type="text"\n                    {...register("name", { required: "Name is required" })}\n                />\n                <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>\n            </FormControl>\n            <FormControl mb="3" isInvalid={!!errors?.surname}>\n                <FormLabel>Surname</FormLabel>\n                <Input\n                    id="surname"\n                    type="text"\n                    {...register("surname", {\n                        required: "Surname is required",\n                    })}\n                />\n                <FormErrorMessage>\n                    {`${errors.title?.surname}`}\n                </FormErrorMessage>\n                <Button type="submit">Submit</Button>\n            </FormControl>\n        </form>\n    );\n};\n')),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/basic-views/create/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"<Create>"))," component, you can override the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/#savebuttonprops"},(0,r.kt)("inlineCode",{parentName:"a"},"saveButtonProps"))," prop to modify the form data before submitting it to the API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { HttpError } from "@refinedev/core";\nimport { Create } from "@refinedev/chakra-ui";\nimport { useForm } from "@refinedev/react-hook-form";\nimport {\n    FormControl,\n    FormErrorMessage,\n    FormLabel,\n    Input,\n    Button,\n} from "@chakra-ui/react";\n\ntype FormValues = {\n    name: string;\n    surname: string;\n};\n\nexport const UserCreate: React.FC = () => {\n    const {\n        saveButtonProps,\n        refineCore: { onFinish },\n        handleSubmit,\n    } = useForm<FormValues, HttpError, FormValues>();\n\n    const handleSubmitPostCreate = (values: FormValues) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n        onFinish({\n            ...value,\n            fullName,\n        });\n    };\n\n    return (\n        <Create\n            saveButtonProps={{\n                ...saveButtonProps,\n                onClick: handleSubmit(handleSubmitForm),\n            }}\n        >\n            <form>\n                <FormControl mb="3" isInvalid={!!errors?.name}>\n                    <FormLabel>Name</FormLabel>\n                    <Input\n                        id="name"\n                        type="text"\n                        {...register("name", { required: "Name is required" })}\n                    />\n                    <FormErrorMessage>{`${errors.name?.message}`}</FormErrorMessage>\n                </FormControl>\n                <FormControl mb="3" isInvalid={!!errors?.surname}>\n                    <FormLabel>Surname</FormLabel>\n                    <Input\n                        id="surname"\n                        type="text"\n                        {...register("surname", {\n                            required: "Surname is required",\n                        })}\n                    />\n                    <FormErrorMessage>\n                        {`${errors.title?.surname}`}\n                    </FormErrorMessage>\n                </FormControl>\n            </form>\n        </Create>\n    );\n};\n')))),(0,r.kt)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refine")," automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,r.kt)(o.Z,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"refetch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@refinedev/core";\n\n// All "data" related hooks provided by Refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,r.kt)(i.Z,{value:"useinvalidate",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@refinedev/core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n    resource: "posts",\n    invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n    resource: "posts",\n    invalidates: ["detail"],\n    id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n    resource: "posts",\n    dataProviderName: "second-data-provider",\n    invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n    dataProviderName: "second-data-provider",\n    invalidates: ["all"],\n});\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/invalidate/useInvalidate"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useInvalidate hook documentation for more information. \u2192")))),(0,r.kt)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refine"),"'s way of doing this is with the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,r.kt)("p",null,"For example, If you want to make a request of the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@refinedev/core";\n\nuseTable({\n    resource: "/users/1/posts",\n});\n')),(0,r.kt)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,r.kt)("inlineCode",{parentName:"p"},"useMany"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,r.kt)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,r.kt)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,r.kt)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,r.kt)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n    resource: "categories",\n    ids: categoryIds,\n    // highlight-next-line\n    queryOptions: { enabled: categoryIds.length > 0 },\n});\n')),(0,r.kt)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Yes!")," You can work with JavaScript!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/with-javascript"},"Refer to ",(0,r.kt)("strong",{parentName:"a"},"Refine JavaScript")," example \u2192 ")),(0,r.kt)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,r.kt)("p",null,"In some cases, you may need to override functions of Refine data providers. The simplest way to do this is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,r.kt)("p",null,"For example, Let's override the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," function of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/next/packages/simple-rest"},(0,r.kt)("inlineCode",{parentName:"a"},"@refinedev/simple-rest")),". ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/simple-rest")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," HTTP method for ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", let's change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," without forking the whole data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@refinedev/simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables }) => {\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient.put(url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,r.kt)("p",null,"What if we want to select ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," on a request basis?"),(0,r.kt)("p",null,"\ud83d\udca5 We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," for this. Remember, ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," can be used in all ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"form")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," hooks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// PATCH Request\nuseUpdate({\n    resource: "this-is-patch",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    meta: {\n        httpMethod: "patch",\n    },\n});\n\n// PUT Request\nuseUpdate({\n    resource: "this-is-put",\n    id: 1,\n    variables: {\n        foo: "bar",\n    },\n    meta: {\n        httpMethod: "put",\n    },\n});\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n    ...simpleRestProvider,\n    update: async ({ resource, id, variables, meta }) => {\n        const method = meta.httpMethod ?? "patch";\n\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        const { data } = await httpClient[method](url, variables);\n\n        return {\n            data,\n        };\n    },\n};\n')),(0,r.kt)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice"),(0,r.kt)("p",null,"This is the expected behavior if you use ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")),". In this mode, React will render the components twice in development mode to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems."),(0,r.kt)("admonition",{title:"note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>"))," checks are run in development mode only; they do not impact the production build.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,r.kt)("inlineCode",{parentName:"a"},"<React.StrictMode>")," documentation")," for more information. ","\u2192")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query issue")," for more information. ","\u2192")),(0,r.kt)("h2",{id:"how-can-i-add-an-item-to-the-sider-component"},"How can I add an item to the Sider component?"),(0,r.kt)("p",null,"There are three ways to add an extra navigation link to the sider."),(0,r.kt)("p",null,"The first and simplest way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component shows the resources whose ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," property is set. So, you can have an extra navigation link by adding a resource with the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," attribute."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@refinedev/core";\n\n<Refine\n    ...\n    resources={[\n        {\n            name: "dashboard",\n            list: "/",\n            meta: {\n                label: "Dashboard",\n                icon: "\ud83c\udfe0",\n            },\n        },\n    ]}\n/>;\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"The second way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider>")," component. The ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," property is a function that receives an object with the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," properties. The ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," property is the list of navigation items and the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," property is the logout button."),(0,r.kt)(o.Z,{defaultValue:"antd",values:[{label:"Ant Design",value:"antd"},{label:"Material UI",value:"mui"},{label:"Mantine",value:"mantine"},{label:"Chakra UI",value:"chakra-ui"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"antd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/antd";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(i.Z,{value:"mui",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mui";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(i.Z,{value:"mantine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/mantine";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n'))),(0,r.kt)(i.Z,{value:"chakra-ui",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Layout, Sider } from "@refinedev/chakra-ui";\n\nconst CustomSider = () => {\n    return (\n        <Sider\n            render={({ items, logout }) => {\n                return (\n                    <>\n                        <a href="https://refine.dev/">\ud83d\udc4b Navigation Link</a>\n                        {items}\n                        {logout}\n                    </>\n                );\n            }}\n        />\n    );\n};\n\nconst CustomLayout = () => {\n    return <Layout Sider={CustomSider}>...</Layout>;\n};\n')))),(0,r.kt)("br",null),(0,r.kt)("p",null,"The third way is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzle")," command."),(0,r.kt)("p",null,"You can use the command to copy the default ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component to your project. This will allow you to customize the sider as you want."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli/#swizzle"},"Refer to the swizzle documentation for more information. ","\u2192")))}c.isMDXComponent=!0}}]);