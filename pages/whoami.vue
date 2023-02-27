<template>
  <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center">
        <h2 v-if="userInfo" class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">您已登入</h2>
        <h2 v-else class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">登出</h2>
      </div>
    </div>

    <div class="mt-6 flex w-full max-w-md flex-col items-center">
      <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="requestAbouts"
      >
        顯示當前使用者的狀態，通常在使用者刷先頁面的時候去敲的
      </button>
      <button
          type="button"
          class="mt-2 w-fit rounded-sm bg-emerald-500 py-2 px-4 text-sm text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          @click="logout"
      >
        登出
      </button>
    </div>

    <div v-if="getData" class="mt-8 flex w-full max-w-md flex-col">
      取得資料
    </div>
  </div>
</template>

<script setup>
import {useAboutMeStore} from "~/stores/aboutMeStore";
import {storeToRefs} from "pinia";

definePageMeta({
  middleware: 'auth'
})
const userInfo = useCookie('token', {maxAge: 60})

function logout() {
  userInfo.value = null
}

const store = useAboutMeStore()
const {getData} = storeToRefs(store)
const {requestAbouts} = store


</script>
