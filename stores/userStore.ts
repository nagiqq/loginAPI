import { defineStore } from 'pinia'
import { apiManager } from '~/composables/useFetchManage'

const aURL: string = 'login'
export interface Response {
    data: string
    loadingFilter: boolean
    error: any | null
}
export const useUserStore = defineStore('useUserStore', {
    state: (): Response => {
        return {
            data: null,
            loading: false,
            error: null,
        }
    },
    actions: {
        async requestContact(
            email: string,
            password: string
        ) {
            this.loading = true
            try {
                const body = {
                    email,
                    password
                }
                const response = await apiManager(aURL, body, null, 'POST')
                this.data = response.data
                console.log(response.data)
                if (!response) {
                    return '登入失敗'
                }else{
                    const token = useCookie('token')
                    token.value = response?.data?.token
                    navigateTo('/whoami')
                }
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
            return this.data
        },
    },
    getters: {
        getData: (state) => state.data,
    },
})
