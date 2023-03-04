import { defineStore } from 'pinia'
import { apiManage } from '~/composables/useFetchManageSecret'
import { ResponseObject } from '~/interface/interface'

// about interface
export interface about {
    data:  String
}

export interface Response {
    data: about
    loading: boolean
    error: any | null
}

const aURL: string = '/me'

export const useAboutMeStore = defineStore('useAboutMeStore', {
    state: (): Response => {
        return {
            data: null,
            loading: false,
            error: null,
        }
    },
    actions: {
        requestAbouts: async function (): Promise<about> {
            this.loading = true
            try {
                const response: ResponseObject<about> = await apiManage(aURL)
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
