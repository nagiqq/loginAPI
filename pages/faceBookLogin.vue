<template>
<div>    <label for="access_token">先代入已從第三方成功登入取得的access_token</label>
  <hr/>
  <input id="access_token" type="text" placeholder="請輸入密碼" name="access_token" v-model="access_token"></div>
  <button type="submit" class="blog_more mt10" @click="submitLogin">
    登入
  </button>
  <div v-if="getData">{{ getData }}</div>
</template>

<script lang="ts" setup>
import {storeToRefs} from "pinia"
import {useUserSocialStore} from "~/stores/userSocialStore"

const access_token = ref('EAAKlnIBZANT8BAP7ETOZCWP81FHE4zCN3kJqnvVLmkPG4rbB95DVfZCxNVUxaEMPSueZBLMgPfkWgh7TZBFhj9sEPSje6Cca8gLhNkWZAhZBKpJNslHOEtXAG7cY1zWKdv7aI8GYwhpP63AVzrjxZBDcrZAUGfqQH5L0tM7B2K88eHWhcZACyUra2cSnwK8asMTMkZD')
const store = useUserSocialStore()
const {getData} = storeToRefs(store)

function submitLogin(e) {
  const {requestContact} = useUserSocialStore()
  // requestContact(
  //     primary.value,
  //     phone.value,
  //     1
  // )

  const userInfo =  requestContact(
      access_token.value,
    'facebook'
  )
      .then((response) => response.data)
      .catch(() => null)
  console.log(userInfo)
  if (!userInfo) {
    return '登入失敗'
  }else{
    const token = useCookie('token')
    token.value = getData.token
    // navigateTo('/whoami')
  }
}

</script>

<style scoped>

</style>
