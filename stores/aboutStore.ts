import { defineStore } from 'pinia'
import { apiManager } from '~/composables/useFetchManage'
import { ResponseObject } from '~/interface/interface'

// about interface
export interface about {
    Authorization:  String
}

export interface Response {
    data: about
    loading: boolean
    error: any | null
}

const aURL: string = 'auth/users/login'

export const useAboutStore = defineStore('useAboutStore', {
    state: (): Response => {
        return {
            data: {},
            loading: false,
            error: null,
        }
    },
    actions: {
        requestAbouts: async function (): Promise<about> {
            this.loading = true
            try {
                const response: ResponseObject<about> = await apiManager(aURL)
                this.data = response.data
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
            return this.data
        },
    },
    getters: {
        getData(state): about {
            return state.data
        },
    },
})
