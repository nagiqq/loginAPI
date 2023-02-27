export const apiManager = async (
    url: string,
    body: any | null,
    query: any | null,
    method: string = "GET"
) => {
    const runtimeConfig = useRuntimeConfig()
    const baseURL = runtimeConfig.public.apiBase
    return await $fetch(url, {
        baseURL,
        method,
        body,
        query,
        parseResponse: JSON.parse,
        headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
            "Content-Type": "application/json",
            "Content-Language": "1",
            "Time-Zone": "Asia/Taipei",
        },
        async onRequest({ request, options }) {
            // Log request
            // TODO: 根據 env 環境顯示, 環境有 local staging dev production
            console.log('[fetch request]', request, options)
        },
        async onRequestError({ request, options, error }) {
            // Log error
            // TODO: 根據 env 環境顯示, 環境有 local staging dev production
            console.error("[fetch request error]", request, error)
        },
        async onResponse({ request, response, options }) {
            // Log response
            // TODO: 根據 env 環境顯示, 環境有 local staging dev production
            console.log('[fetch response]', request, response.status, response.body)
        },
        async onResponseError({ request, response, options }) {
            // Log error
            // TODO: 根據 env 環境顯示, 環境有 local staging dev production
            console.error(
                "[fetch response error]",
                request,
                response.status,
                response.body
            )
        },
    })
}
