<template>
  <div class="search-box">
    <a-space direction="vertical" size="large" class="searchPage">
      <a-input-search
        size="large"
        :style="{ width: '1024px' }"
        placeholder="Please enter something"
        search-button
      >
        <template #button-icon>
          <icon-search />
        </template>
        <template #button-default> Search</template>
      </a-input-search>
    </a-space>
    <my-divider />
    <a-tabs>
      <a-tab-pane key="1">
        <template #title>
          <icon-calendar />
          题目
        </template>
        <QuestionList></QuestionList>
      </a-tab-pane>

      <a-tab-pane key="2">
        <template #title>
          <icon-clock-circle />
          用户
        </template>
        <user-list></user-list>
      </a-tab-pane>

      <a-tab-pane key="3">
        <template #title>
          <icon-user />
          帖子
        </template>
        <PostList></PostList>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script setup lang="ts">
import MyDivider from '@/components/MyDivider.vue'
import UserList from '@/components/UserList.vue'
import QuestionList from '@/components/QuestionList.vue'
import PostList from '@/components/PostList.vue'





</script>

<style scoped>
.search-box {
  padding: 50px;
  max-width: 1024px;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
}
</style>
