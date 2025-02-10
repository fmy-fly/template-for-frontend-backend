<template>
  <div class="globalHeader">
    <a-row  align="center" :wrap = "false">
      <a-col flex="auto">
        <a-menu
          v-model:value="searchParams.text"
          mode="horizontal"
          theme="light"
          class="menu"
          :selected-keys="[route.path]"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item key="0" disabled>
            <div>
              <img src="../assets/suda.jpg" class="collegePicture" alt="Suda Image" />
            </div>
          </a-menu-item>
          <!--      <a-menu-item class="SystemName">-->
          <!--        <div id="suda" style="font-size: 16px">Soochow University Oj System</div>-->
          <!--      </a-menu-item>-->

          <a-menu-item v-for="item in visibleRoutes" :key="item.path" style="font-size: 16px">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="600px">
        <a-input-search
          v-model:value="searchParams.text"
          class="searchLabel"
          :style="{ width: '380px' }"
          placeholder="Please enter something"
          search-button
          @search="clickSearch"
        />
      </a-col>
      <a-col flex="100px" style="font-size: 16px">
        {{ store.state.user?.loginUser?.userName ?? '注册或登录' }}
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { routes } from '../router/routes.ts'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import checkAccess from '@/access/checkAccess.ts'
import AccessEnum from '@/access/accessEnum.ts'

const router = useRouter()
//默认主页
const route = useRoute()
const store = useStore()
const loginUser = store.state.user.loginUser

const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false
    }
    console.log(item.name + ' ' + checkAccess(loginUser, item?.meta?.access))
    //  根据权限过滤菜单
    return checkAccess(store.state.user.loginUser, item?.meta?.access)
  })
})

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  })
}
const searchParams = ref({
  text: '', // 默认为空
  pageSize: 10,
  pageNum: 1,
})
const clickSearch = () => {
  router.push({
    path: '/',
  })
}

setTimeout(() => {
  store.dispatch('user/getLoginUser', {
    userName: 'fmy',
    userRole: AccessEnum.ADMIN,
  })
}, 3000)
</script>

<style scoped>
.globalHeader {
  box-sizing: border-box;
  width: 100%;
}

.menu {
  height: 80px; /* Set a fixed height for the menu */
}

.collegePicture {
  width: 120px; /* Maintain the aspect ratio of the image */
}

.searchLabel {
  margin-left: 6%;
}

.user {
  margin: 0 auto;
}
</style>
