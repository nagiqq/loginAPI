<template>
  <div>
      <label for="mail">primary：</label>
      <input id="primary" type="text" placeholder="請輸入帳號"  name="primary" v-model="primary">
      <br>
      <label for="phone">password：</label>
      <input id="phone" type="text" placeholder="請輸入密碼" name="phone" v-model="phone">
      <br>
      <button type="submit" class="blog_more mt10"  @click="submitLogin">
        提交表單
      </button>
  </div>
</template>

<script lang="ts" setup>
import { useContactStore } from "~/stores/contactStore"
const primary = ref("tasb00429@gmail.com")
const phone = ref("tasb00429")
function submitLogin(e) {
  const { requestContact } = useContactStore()
  requestContact(
      primary.value,
      phone.value,
      1
  )
  console.log(e)
}
</script>
