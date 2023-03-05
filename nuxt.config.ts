// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt'],
    // runtimeConfig: {
    //     jwtSignSecret: 'PLEASE_REPLACE_WITH_YOUR_KEY',
    //     public: {
    //         // googleClientId: '這邊放上你的 Google Client ID'
    //         // 記得設定重新導向url http://localhost:3000
    //         googleClientId: '21885618974-bhktms4psl62ckfcd8sl1ptc9ge2nhod.apps.googleusercontent.com'
    //     }
    // }
    runtimeConfig: {
        // The private keys which ar`e only available server-side
        apiSecret: "",
        // Keys within public are also exposed client-side
        public: {
            apiBase: "https://52myartapi.warmy-tracker.com/api/v1/members/",
        },
    }
})
