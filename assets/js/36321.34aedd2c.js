"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36321],{36321:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`useEditeableTable` allows you to implement edit feature on the table with ease,\\non top of all the features that {@link https://refine.dev/docs/api-reference/core/hooks/useTable/ `useTable`} provides.\\n`useEditableTable` return properties that can be used on Ant Design\'s {@link https://ant.design/components/table/ `<Table>`}\\nand {@link https://ant.design/components/form/ `<Form>`} components.","displayName":"useEditableTable","props":{"resource":{"defaultValue":{"value":"Resource name that it reads from route\\nResource name that it reads from route"},"description":"Resource name for API data interactions","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route\\nResource name that it reads from route"}},"meta":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for dataProvider","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.\\n`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"liveMode":{"defaultValue":{"value":"`\\"off\\"`"},"description":"Whether to update data automatically (\\"auto\\") or not (\\"manual\\") if a related live event is received. The \\"off\\" value is used to avoid creating a subscription.","name":"liveMode","required":false,"type":{"name":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`](/docs/api-reference/core/providers/live-provider/#livemode)"},"tags":{"type":"[`\\"auto\\" | \\"manual\\" | \\"off\\"`] (/docs/api-reference/core/providers/live-provider/#livemode)","default":"`\\"off\\"`"}},"liveParams":{"defaultValue":{"value":"`undefined`"},"description":"Params to pass to liveProvider\'s subscribe method if liveMode is enabled.","name":"liveParams","required":false,"type":{"name":"[`{ ids?: BaseKey[]; [key: string]: any; }`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`{ ids?: BaseKey[]; [key: string]: any; }`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"onLiveEvent":{"defaultValue":{"value":"`undefined`"},"description":"Callback to handle all related live events of this hook.","name":"onLiveEvent","required":false,"type":{"name":"[`(event: LiveEvent) => void`](/docs/api-reference/core/interfaceReferences/#livemodeprops)"},"tags":{"type":"[`(event: LiveEvent) => void`] (/docs/api-reference/core/interfaceReferences/#livemodeprops)","default":"`undefined`"}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options\\nreact-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options of useOne hook used while in edit mode.","name":"queryOptions","required":false,"type":{"name":"(UseQueryOptions<GetListResponse<TQueryFnData>, TError, GetListResponse<TData>, QueryKey> & UseQueryOptions<...>)"},"tags":{}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}},"syncWithLocation":{"defaultValue":{"value":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"},"description":"Sortings, filters, page index and records shown per page are tracked by browser history","name":"syncWithLocation","required":false,"type":{"name":"boolean"},"tags":{"default":"Value set in [Refine](/docs/api-reference/core/components/refine-config/#syncwithlocation). If a custom resource is given, it will be `false`"}},"onSearch":{"defaultValue":null,"description":"","name":"onSearch","required":false,"type":{"name":"((data: TSearchVariables) => CrudFilters | Promise<CrudFilters>)"},"tags":{}},"initialCurrent":{"defaultValue":{"value":"1"},"description":"Initial page index","name":"initialCurrent","required":false,"type":{"name":"number"},"tags":{"default":"1","deprecated":"`initialCurrent` property is deprecated. Use `pagination.current` instead."}},"initialPageSize":{"defaultValue":{"value":"10"},"description":"Initial number of items per page","name":"initialPageSize","required":false,"type":{"name":"number"},"tags":{"default":"10","deprecated":"`initialPageSize` property is deprecated. Use `pagination.pageSize` instead."}},"hasPagination":{"defaultValue":{"value":"`true`"},"description":"Whether to use server side pagination or not.","name":"hasPagination","required":false,"type":{"name":"boolean"},"tags":{"default":"`true`","deprecated":"`hasPagination` property is deprecated. Use `pagination.mode` instead."}},"pagination":{"defaultValue":null,"description":"Configuration for pagination","name":"pagination","required":false,"type":{"name":"Pagination"},"tags":{}},"initialSorter":{"defaultValue":null,"description":"Initial sorter state","name":"initialSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"deprecated":"`initialSorter` property is deprecated. Use `sorters.initial` instead."}},"permanentSorter":{"defaultValue":{"value":"`[]`"},"description":"Default and unchangeable sorter state","name":"permanentSorter","required":false,"type":{"name":"[CrudSorting](/docs/api-reference/core/interfaceReferences/#crudsorting)"},"tags":{"default":"`[]`","deprecated":"`permanentSorter` property is deprecated. Use `sorters.permanent` instead."}},"initialFilter":{"defaultValue":null,"description":"Initial filter state","name":"initialFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{"deprecated":"`initialFilter` property is deprecated. Use `filters.initial` instead."}},"permanentFilter":{"defaultValue":{"value":"`[]`"},"description":"Default and unchangeable filter state","name":"permanentFilter","required":false,"type":{"name":"[CrudFilters](/docs/api-reference/core/interfaceReferences/#crudfilters)"},"tags":{"default":"`[]`","deprecated":"`permanentFilter` property is deprecated. Use `filters.permanent` instead."}},"defaultSetFilterBehavior":{"defaultValue":{"value":"`\\"merge\\"`"},"description":"Default behavior of the `setFilters` function","name":"defaultSetFilterBehavior","required":false,"type":{"name":"\\"merge\\" | \\"replace\\"","raw":"SetFilterBehavior","value":[{"value":"\\"merge\\""},{"value":"\\"replace\\""}]},"tags":{"default":"`\\"merge\\"`","deprecated":"`defaultSetFilterBehavior` property is deprecated. Use `filters.defaultBehavior` instead."}},"filters":{"defaultValue":null,"description":"Filter configs","name":"filters","required":false,"type":{"name":"{ initial?: CrudFilters; permanent?: CrudFilters; defaultBehavior?: SetFilterBehavior | undefined; mode?: \\"off\\" | ... 1 more ... | undefined; } | undefined"},"tags":{}},"sorters":{"defaultValue":null,"description":"Sort configs","name":"sorters","required":false,"type":{"name":"{ initial?: CrudSorting; permanent?: CrudSorting; mode?: \\"off\\" | \\"server\\" | undefined; } | undefined"},"tags":{}},"id":{"defaultValue":{"value":"Id that it reads from the URL"},"description":"Record id for fetching","name":"id","required":false,"type":{"name":"[BaseKey](/docs/api-reference/core/interfaceReferences/#basekey)"},"tags":{"default":"Id that it reads from the URL"}},"redirect":{"defaultValue":{"value":"`\\"list\\"`"},"description":"Page to redirect after a succesfull mutation","name":"redirect","required":false,"type":{"name":"`\\"show\\" | \\"edit\\" | \\"list\\" | \\"create\\" | false`"},"tags":{"type":"`\\"show\\" | \\"edit\\" | \\"list\\" | \\"create\\" | false`","default":"`\\"list\\"`"}},"queryMeta":{"defaultValue":null,"description":"Metadata to pass for the `useOne` query","name":"queryMeta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"mutationMeta":{"defaultValue":null,"description":"Metadata to pass for the mutation (`useCreate` for `create` and `clone` actions, `useUpdate` for `edit` action)","name":"mutationMeta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"mutationMode":{"defaultValue":{"value":"`\\"pessimistic\\"*`"},"description":"[Determines when mutations are executed](/advanced-tutorials/mutation-mode.md)","name":"mutationMode","required":false,"type":{"name":"\\"pessimistic\\" | \\"optimistic\\" | \\"undoable\\"","raw":"MutationMode","value":[{"value":"\\"pessimistic\\""},{"value":"\\"optimistic\\""},{"value":"\\"undoable\\""}]},"tags":{"default":"`\\"pessimistic\\"*`"}},"onMutationSuccess":{"defaultValue":null,"description":"Called when a mutation is successful","name":"onMutationSuccess","required":false,"type":{"name":"((data: UpdateResponse<TQueryFnData> | CreateResponse<TQueryFnData>, variables: TVariables, context: any) => void)"},"tags":{}},"onMutationError":{"defaultValue":null,"description":"Called when a mutation encounters an error","name":"onMutationError","required":false,"type":{"name":"((error: TError, variables: TVariables, context: any) => void)"},"tags":{}},"undoableTimeout":{"defaultValue":{"value":"`5000*`"},"description":"Duration to wait before executing mutations when `mutationMode = \\"undoable\\"`","name":"undoableTimeout","required":false,"type":{"name":"number"},"tags":{"default":"`5000*`"}},"invalidates":{"defaultValue":{"value":"`[\\"list\\", \\"many\\", \\"detail\\"]`"},"description":"You can use it to manage the invalidations that will occur at the end of the mutation.","name":"invalidates","required":false,"type":{"name":"`all`, `resourceAll`, `list`, `many`, `detail`, `false`"},"tags":{"type":"`all`, `resourceAll`, `list`, `many`, `detail`, `false`","default":"`[\\"list\\", \\"many\\", \\"detail\\"]`"}},"createMutationOptions":{"defaultValue":null,"description":"react-query\'s [useMutation](https://tanstack.com/query/v4/docs/reference/useMutation) options of useCreate hook used while submitting in create and clone modes.","name":"createMutationOptions","required":false,"type":{"name":"Omit<UseMutationOptions<CreateResponse<TQueryFnData>, TError, useCreateParams<TQueryFnData, TError, TVariables>, unknown>, \\"mutationFn\\" | ... 1 more ... | \\"onSuccess\\">"},"tags":{}},"updateMutationOptions":{"defaultValue":null,"description":"react-query\'s [useMutation](https://tanstack.com/query/v4/docs/reference/useMutation) options of useUpdate hook used while submitting in edit mode.","name":"updateMutationOptions","required":false,"type":{"name":"Omit<UseMutationOptions<UpdateResponse<TQueryFnData>, TError, UpdateParams<TQueryFnData, TError, TVariables>, PrevContext<...>>, \\"mutationFn\\" | ... 3 more ... | \\"onSettled\\">"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: UpdateResponse<TQueryFnData> | CreateResponse<TQueryFnData>, values?: TVariables | ... 1 more ..., resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: TVariables | { id: BaseKey; values: TVariables; }, resource?: string | undefined) => OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"action":{"defaultValue":{"value":"Action that it reads from route otherwise \\"create\\" is used"},"description":"Type of the form mode","name":"action","required":false,"type":{"name":"\\"create\\" | \\"edit\\" | \\"clone\\"","raw":"FormAction","value":[{"value":"\\"create\\""},{"value":"\\"edit\\""},{"value":"\\"clone\\""}]},"tags":{"default":"Action that it reads from route otherwise \\"create\\" is used"}},"autoSubmitClose":{"defaultValue":{"value":"true"},"description":"When true, row will be closed after successful submit.","name":"autoSubmitClose","required":false,"type":{"name":"boolean"},"tags":{}}},"generatedAt":1687456953560}')}}]);