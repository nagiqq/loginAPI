import { useUserStore } from '@/stores/userStore'
export default defineNuxtRouteMiddleware((to,from) => {
    // console.log(to)
    // console.log(from)
    if (process.client) {
        const userStore = useUserStore()
        const token = useCookie('token')
        // console.log(token)
        if (!userStore.data?.token && !token.value) {
            return navigateTo('/login')
        }
    } else {
        return navigateTo(to.fullPath)
    }
})


