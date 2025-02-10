<template>
  <BasicLayout></BasicLayout>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import store from '@/store'
import BasicLayout from '@/layout/BasicLayout.vue'
import { onMounted } from 'vue'

const router = useRouter()
/**
 *  全局初始化函数，有全局单词调用的代码，都可以写到这里
 */

const doInit = () => {
  console.log("hello 欢迎来到我的项目");
}
onMounted(() => {
  doInit();
});

router.beforeEach((to, from, next) => {
  if (to.meta?.access === 'canAdmin') {
    if (store.state.user.loginUser?.role !== 'admin') {
      next('/noAuth')
      return
    }
  }
  next()
})
</script>
<style scoped></style>
