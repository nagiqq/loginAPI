import { defineStore } from 'pinia'
import { apiManager } from '~/composables/useFetchManage'

const aURL: string = 'auth/users/login'
export interface Response {
    data: string
    loadingFilter: boolean
    error: any | null
}
export const useContactStore = defineStore('useContactStore', {
    state: (): Response => {
        return {
            data: null,
            loading: false,
            error: null,
        }
    },
    actions: {
        async requestContact(
            primary: string,
            password: string,
            language_id: number
        ) {
            this.loading = true
            try {
                const body = {
                    primary,
                    password,
                    language_id
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
