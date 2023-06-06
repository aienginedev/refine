"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58659:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"appwrite",title:"Appwrite"},i=void 0,s={unversionedId:"advanced-tutorials/multi-tenancy/appwrite",id:"version-3.xx.xx/advanced-tutorials/multi-tenancy/appwrite",title:"Appwrite",description:"What is Multitenancy?",source:"@site/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-tenancy/appwrite.md",sourceDirName:"advanced-tutorials/multi-tenancy",slug:"/advanced-tutorials/multi-tenancy/appwrite",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/advanced-tutorials/multi-tenancy/appwrite.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1686044782,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"appwrite",title:"Appwrite"},sidebar:"someSidebar",previous:{title:"Multi Level Menu",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-level-menu/"},next:{title:"Strapi-v4",permalink:"/docs/3.xx.xx/advanced-tutorials/multi-tenancy/strapi-v4"}},l={},p=[{value:"What is Multitenancy?",id:"what-is-multitenancy",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Usage",id:"usage",level:2},{value:"Create Collections",id:"create-collections",level:2},{value:"Store Context",id:"store-context",level:2},{value:"Shop Select to Sider Component",id:"shop-select-to-sider-component",level:2},{value:"Product List Page",id:"product-list-page",level:2},{value:"Product Create Page",id:"product-create-page",level:2},{value:"Bonus - Realtime Feature",id:"bonus---realtime-feature",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],c=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-multitenancy"},"What is Multitenancy?"),(0,o.kt)("p",null,"Multitenancy refers to a kind of architecture where a single instance of software runs on a server and serves multiple customers. In a multi-tenant environment, separate customers tap into the same hardware and data storage, creating a dedicated instance for each customer. Each tenant\u2019s data is isolated and remains invisible to others, but is running on the same server."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide, we will create an application with you in the logic of Multi Tenant(Multitenancy). We can say multi tenant application is separate and manage multiple contents independently from each other in a single application."),(0,o.kt)("p",null,"We will make a Cake House application using ",(0,o.kt)("strong",{parentName:"p"},"refine")," and ",(0,o.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite"),". Our Cake House will consist of two separate stores and there will be special products for these stores. We will explain step by step how to manage these stores, products, and orders separately."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide has been prepared to assume you know the basics of ",(0,o.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),".")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pankod/refine-appwrite\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To make this example more visual, we used the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package. If you are using Refine headless, you need to provide the components, hooks, or helpers imported from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/refine-antd"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-antd"))," package.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport { dataProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            //highlight-start\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n            //highlight-end\n            routerProvider={routerProvider}\n            Layout={Layout}\n            ReadyPage={ReadyPage}\n            notificationProvider={notificationProvider}\n            catchAll={<ErrorComponent />}\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"create-collections"},"Create Collections"),(0,o.kt)("p",null,"We need three collections for our Cake House application. Let's create these collections in the appwrite database."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/data-provider/appwrite/#create-collections"},"Check out how you can create collections with refine Appwrite guide \u2192"))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/collections.png",alt:"Collections"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"stores")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Title: text")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"products")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Title: text"),(0,o.kt)("li",{parentName:"ul"},"Description: text"),(0,o.kt)("li",{parentName:"ul"},"Image: text"),(0,o.kt)("li",{parentName:"ul"},"StoreId: text")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"orders")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ProductId: text"),(0,o.kt)("li",{parentName:"ul"},"Customer Name: text"),(0,o.kt)("li",{parentName:"ul"},"Customer Address: text"),(0,o.kt)("li",{parentName:"ul"},"Status: text"),(0,o.kt)("li",{parentName:"ul"},"Quantitiy: numeric"),(0,o.kt)("li",{parentName:"ul"},"StoreId: text")),(0,o.kt)("p",null,"Now that we have completed the setup and our collections, we can now log in with the ",(0,o.kt)("strong",{parentName:"p"},"refine")," and start the listing processes."),(0,o.kt)("h2",{id:"store-context"},"Store Context"),(0,o.kt)("p",null,"To view the products and orders of two different stores separately, we need to filter by ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),". We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," information in more than one place. For example, when creating a store-specific order."),(0,o.kt)("p",null,"For this reason, we will create a ",(0,o.kt)("a",{parentName:"p",href:"https://en.reactjs.org/docs/context.html"},"React Context")," and keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," state information in it and send it to the relevant ",(0,o.kt)("strong",{parentName:"p"},"refine")," components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { createContext, useState } from "react";\n\nexport const StoreContext = createContext<any[]>([]);\n\nexport const StoreProvider = (props: any) => {\n    const [store, setStore] = useState("61cdb05132609");\n\n    return <StoreContext.Provider value={[store, setStore]} {...props} />;\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";\nimport { dataProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nimport { StoreProvider } from "context/store";\n\nconst App: React.FC = () => {\n    return (\n          //highlight-start\n        <StoreProvider>\n            <Refine\n                dataProvider={dataProvider(appwriteClient)}\n                authProvider={authProvider}\n                routerProvider={routerProvider}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                notificationProvider={notificationProvider}\n                catchAll={<ErrorComponent />}\n            />\n        <StoreProvider>\n         //highlight-end\n    );\n};\n')),(0,o.kt)("h2",{id:"shop-select-to-sider-component"},"Shop Select to Sider Component"),(0,o.kt)("p",null,"We will create a select component in the Sider Menu where the user will select the stores. Let's create our select component first, then let's see how we can define it in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," Sider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="scr/components/select/StoreSelect.tsx"',title:'"scr/components/select/StoreSelect.tsx"'},'import { useContext } from "react";\nimport { Select, useSelect } from "@pankod/refine-antd";\n\nimport { StoreContext } from "context/store";\nimport { IStore } from "interfaces";\n\n\nexport const StoreSelect: React.FC = ({ onSelect }) => {\n    //highlight-start\n    const [store, setStore] = useContext(StoreContext);\n    //highlight-end\n\n    const { selectProps: storeSelectProps } = useSelect<IStore>({\n        resource: "61cd62db95f92",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    //highlight-start\n    const handleChange = (selectedValue: string) => {\n        setStore(selectedValue);\n    };\n    //highlight-end\n\n    return (\n        <Select\n            defaultValue={store}\n            style={{ width: 130 }}\n            onChange={handleChange}\n            onSelect={() => false)}\n        >\n            {storeSelectProps.options?.map(({ value, label }) => (\n                <Select.Option key={value} value={value}>\n                    {label}\n                </Select.Option>\n            ))}\n        </Select>\n    );\n};\n')),(0,o.kt)("p",null,"Here we have created a select component. Then we fetch the store id and title we created in the Appwrite database with ",(0,o.kt)("inlineCode",{parentName:"p"},"useSelect"),". Now we can place the store information we have in the state we created in the Store Context."),(0,o.kt)("p",null,"Let's define the select component in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," Sider Menu. First, we need to customize the default Sider."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/examples/customization/customSider/"},"Check out how you can customize Sider Menu \u2192")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/sider/CustomSider.tsx"',title:'"src/components/sider/CustomSider.tsx"'},'import React, { useState } from "react";\nimport {\n    useTitle,\n    useMenu,\n    ITreeMenu,\n    CanAccess,\n    useRouterContext,\n} from "@pankod/refine-core";\nimport { AntdLayout, Menu, Grid, Icons } from "@pankod/refine-antd";\nimport { antLayoutSider, antLayoutSiderMobile } from "./styles";\n\nimport { StoreSelect } from "components/select";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n    const { Link } = useRouterContext();\n    const Title = useTitle();\n    const { SubMenu } = Menu;\n    const { menuItems, selectedKey } = useMenu();\n    const breakpoint = Grid.useBreakpoint();\n\n    const isMobile =\n        typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n\n            if (children.length > 0) {\n                return (\n                    <SubMenu\n                        key={name}\n                        icon={icon ?? <Icons.UnorderedListOutlined />}\n                        title={label}\n                    >\n                        {renderTreeView(children, selectedKey)}\n                    </SubMenu>\n                );\n            }\n            const isSelected = route === selectedKey;\n            const isRoute = !(\n                parentName !== undefined && children.length === 0\n            );\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                >\n                    <Menu.Item\n                        key={route}\n                        style={{\n                            fontWeight: isSelected ? "bold" : "normal",\n                        }}\n                        icon={\n                            icon ?? (isRoute && <Icons.UnorderedListOutlined />)\n                        }\n                    >\n                        <Link to={route}>{label}</Link>\n                        {!collapsed && isSelected && (\n                            <div className="ant-menu-tree-arrow" />\n                        )}\n                    </Menu.Item>\n                </CanAccess>\n            );\n        });\n    };\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsedWidth={isMobile ? 0 : 80}\n            collapsed={collapsed}\n            breakpoint="lg"\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n                onClick={() => {\n                    if (!breakpoint.lg) {\n                        setCollapsed(true);\n                    }\n                }}\n            >\n                //highlight-start\n                <Menu.Item key={"/"} icon={<Icons.AppstoreAddOutlined />}>\n                    <StoreSelect />\n                </Menu.Item>\n                //highlight-end\n                {renderTreeView(menuItems, selectedKey)}\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n')))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/sider.png",alt:"sider"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("em",{parentName:"td"},"As you can see, you can now choose the store you want and create products and orders specifically for the store we have chosen according to the ",(0,o.kt)("inlineCode",{parentName:"em"},"storeId")," information."))))),(0,o.kt)("h2",{id:"product-list-page"},"Product List Page"),(0,o.kt)("p",null,"Now we can list the products of the selected store according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," information by filtering it. We can do this filtering by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"permanetFilter")," property within the ",(0,o.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useSimpleList")," hook."),(0,o.kt)("p",null,"We separate the products of different stores by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"permanentFilter")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," we get from the Store Context. So we can control more than single content in one application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'//highlight-start\nconst [store] = useContext(StoreContext);\n//highlight-end\nconst { listProps } = useSimpleList<IProduct>({\n    //highlight-start\n    permanentFilter: [{ field: "storeId", operator: "eq", value: store }],\n    //highlight-end\n});\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/ProductList.tsx"',title:'"src/pages/ProductList.tsx"'},'import { useContext } from "react";\nimport { IResourceComponentsProps } from "@pankod/refine-core";\nimport {\n    useSimpleList,\n    AntdList,\n    useModalForm,\n    useDrawerForm,\n    CreateButton,\n    List,\n} from "@pankod/refine";\n\nimport { IProduct } from "interfaces";\nimport { ProductItem } from "components/product";\nimport { StoreContext } from "context/store";\n\nexport const ProductList: React.FC<IResourceComponentsProps> = () => {\n    //highlight-start\n    const [store] = useContext(StoreContext);\n    const { listProps } = useSimpleList<IProduct>({\n        permanentFilter: [{ field: "storeId", operator: "eq", value: store }],\n    });\n    //highlight-end\n\n    return (\n        <>\n            <List\n                headerProps={{\n                    extra: <CreateButton onClick={() => createShow()} />,\n                }}\n            >\n                <AntdList\n                    grid={{ gutter: 16, xs: 1 }}\n                    style={{\n                        justifyContent: "center",\n                    }}\n                    {...listProps}\n                    renderItem={(item) => (\n                        <AntdList.Item>\n                            <ProductItem item={item} editShow={editShow} />\n                        </AntdList.Item>\n                    )}\n                />\n            </List>\n        </>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/store-filter.gif",alt:"Store Filter"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"product-create-page"},"Product Create Page"),(0,o.kt)("p",null,"Now let's see how we can create store-specific products. Which store we choose in Sider, the product we will create will automatically be the product of the selected store."),(0,o.kt)("p",null,"By overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"onFinish")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"form")," and sending the selected ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId"),", we specify which store it will be the product of."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"//highlight-start\nconst [store] = useContext(StoreContext);\n// highlight-end\n\n<Form\n    {...formProps}\n    ...\n     //highlight-start\n    onFinish={(values) => {\n        return (\n            formProps.onFinish?.({\n                ...values,\n                storeId: store,\n            })\n        );\n    }}\n    //highlight-end\n>\n...\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="CreateProduct"',title:'"CreateProduct"'},'import { useContext } from "react";\nimport {\n    Create,\n    Drawer,\n    DrawerProps,\n    Form,\n    FormProps,\n    Input,\n    ButtonProps,\n    Upload,\n    Grid,\n    RcFile,\n} from "@pankod/refine-antd";\n\nimport { appwriteClient, normalizeFile } from "utility";\nimport { StoreContext } from "context/store";\n\ntype CreateProductProps = {\n    drawerProps: DrawerProps;\n    formProps: FormProps;\n    saveButtonProps: ButtonProps;\n};\n\nexport const CreateProduct: React.FC<CreateProductProps> = ({\n    drawerProps,\n    formProps,\n    saveButtonProps,\n}) => {\n    const breakpoint = Grid.useBreakpoint();\n    //highlight-start\n    const [store, setStore] = useContext(StoreContext);\n    // highlight-end\n\n    return (\n        <Drawer\n            {...drawerProps}\n            width={breakpoint.sm ? "500px" : "100%"}\n            bodyStyle={{ padding: 0 }}\n        >\n            <Create saveButtonProps={saveButtonProps}>\n                <Form\n                    {...formProps}\n                    layout="vertical"\n                    initialValues={{\n                        isActive: true,\n                    }}\n                    //highlight-start\n                    onFinish={(values) => {\n                        return formProps.onFinish?.({\n                            ...values,\n                            storeId: store,\n                            image: JSON.stringify(values.image),\n                        });\n                    }}\n                    //highlight-end\n                >\n                    <Form.Item\n                        label="Title"\n                        name="title"\n                        rules={[\n                            {\n                                required: true,\n                            },\n                        ]}\n                    >\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Description" name="description">\n                        <Input />\n                    </Form.Item>\n\n                    <Form.Item label="Images">\n                        <Form.Item\n                            name="image"\n                            valuePropName="fileList"\n                            normalize={normalizeFile}\n                            noStyle\n                            rules={[\n                                {\n                                    required: true,\n                                },\n                            ]}\n                        >\n                            <Upload.Dragger\n                                name="file"\n                                listType="picture"\n                                multiple\n                                customRequest={async ({\n                                    file,\n                                    onError,\n                                    onSuccess,\n                                }) => {\n                                    try {\n                                        const rcFile = file as RcFile;\n\n                                        const { $id } =\n                                            await appwriteClient.storage.createFile(\n                                                "default",\n                                                rcFile.name,\n                                                rcFile,\n                                                ["role:all"],\n                                                ["role:all"],\n                                            );\n\n                                        const url =\n                                            appwriteClient.storage.getFileView(\n                                                "default",\n                                                $id,\n                                            );\n\n                                        onSuccess?.(\n                                            { url },\n                                            new XMLHttpRequest(),\n                                        );\n                                    } catch (error) {\n                                        onError?.(new Error("Upload Error"));\n                                    }\n                                }}\n                            >\n                                <p className="ant-upload-text">\n                                    Drag &amp; drop a file in this area\n                                </p>\n                            </Upload.Dragger>\n                        </Form.Item>\n                    </Form.Item>\n                </Form>\n            </Create>\n        </Drawer>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/multi-tenant/appwrite/create.gif",alt:"create"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"bonus---realtime-feature"},"Bonus - Realtime Feature"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," lets you add Realtime support to your app via ",(0,o.kt)("inlineCode",{parentName:"p"},"liveProvider")," prop for ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>")),". It can be used to update and show data in Realtime throughout your app. ",(0,o.kt)("strong",{parentName:"p"},"refine")," remains agnostic in its API to allow different solutions(",(0,o.kt)("a",{parentName:"p",href:"https://ably.com"},"Ably"),", ",(0,o.kt)("a",{parentName:"p",href:"https://socket.io/"},"Socket.IO"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mercure.rocks/"},"Mercure"),", ",(0,o.kt)("a",{parentName:"p",href:"https://supabase.com"},"supabase"),", etc.) to be integrated."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/live-provider/"},"Refer to the Live Provider documentation for detailed information. \u2192")),(0,o.kt)("p",null,"Appwrite Realtime API support is out-of-the-box supported by ",(0,o.kt)("strong",{parentName:"p"},"refine"),", just add two lines to make your App Realtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine } from "@pankod/refine-core";\nimport {\n    Layout,\n    ReadyPage,\n    notificationProvider,\n    ErrorComponent,\n} from "@pankod/refine-antd";\nimport { dataProvider, liveProvider } from "@pankod/refine-appwrite";\nimport routerProvider from "@pankod/refine-react-router-v6";\n\nimport "@pankod/refine-antd/dist/reset.css";\n\nimport { appwriteClient } from "utility";\nimport { authProvider } from "./authProvider";\n\nimport { CustomSider } from "components/sider";\nimport { Login } from "pages/login";\nimport { ProductList } from "pages/products";\nimport { ProductShow } from "components/product";\nimport { StoreProvider } from "context/store";\n\nfunction App() {\n    return (\n        <StoreProvider>\n            <Refine\n                routerProvider={routerProvider}\n                //highlight-start\n                liveProvider={liveProvider(appwriteClient)}\n                options={{ liveMode: "auto" }}\n                //highlight-end\n                dataProvider={dataProvider(appwriteClient)}\n                authProvider={authProvider}\n                LoginPage={Login}\n                Sider={CustomSider}\n                resources={[\n                    {\n                        name: "61cb01b17ef57",\n                        list: ProductList,\n                        show: ProductShow,\n                        options: {\n                            label: "Products",\n                            route: "products",\n                        },\n                    },\n                ]}\n                Layout={Layout}\n                ReadyPage={ReadyPage}\n                notificationProvider={notificationProvider}\n                catchAll={<ErrorComponent />}\n            />\n        </StoreProvider>\n    );\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this guide and in our example app, we talked about how we can build Multitenancy apps with ",(0,o.kt)("strong",{parentName:"p"},"refine"),". Developing a Multitenancy application with ",(0,o.kt)("strong",{parentName:"p"},"refine")," is quite simple. By creating a context and with the hooks that ",(0,o.kt)("strong",{parentName:"p"},"refine")," provides, you can quickly and easily produce similar applications in this logic."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)(c,{path:"multi-tenancy-appwrite",mdxType:"CodeSandboxExample"}))}m.isMDXComponent=!0}}]);