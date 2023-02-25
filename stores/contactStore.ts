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
            phone: string,
            language: number
        ) {
            this.loading = true
            try {
                const body = {
                    primary,
                    phone,
                    language
                }
                const response = await apiManager(aURL, body, null, 'POST')
                this.data = response.data
                console.log(aURL)
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
