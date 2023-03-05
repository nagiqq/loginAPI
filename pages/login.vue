<template>
  <div>
    <label for="mail">email：</label>
    <input id="email" type="text" placeholder="請輸入帳號" name="email" v-model="email">
    <br>
    <label for="phone">password：</label>
    <input id="password" type="text" placeholder="請輸入密碼" name="password" v-model="password">
    <br>
    <button type="submit" class="blog_more mt10" @click="submitLogin">
      提交表單
    </button>

    <h1 v-if="getData">{{ getData }}</h1>
  </div>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useUserStore} from "~/stores/userStore"

const email = ref("tasb00429+2@gmail.com")
const password = ref("tasb00429+2")
const store = useUserStore()
const {getData} = storeToRefs(store)

function submitLogin(e) {
  const {requestContact} = useUserStore()
  // requestContact(
  //     email.value,
  //     phone.value,
  //     1
  // )

  const userInfo =  requestContact(
      email.value,
      password.value
  )
      .then((response) => response.data)
      .catch(() => null)
  console.log(userInfo)
  if (!userInfo) {
    return '登入失敗'
  }else{
    const token = useCookie('token')
    token.value = getData.token
    navigateTo('/whoami')
  }
}



</script>
