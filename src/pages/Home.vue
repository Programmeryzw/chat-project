<template>
  <div class="top">
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <img src="./assets//微信图片_20241231172606.png" alt="">
    <p class="count">father count: {{ showCount }}</p>
    <p>appInfo: {{ appInfo }}</p>
  </div>
  <HelloWorld 
    ref="child" 
    msg="Vite + Vue" 
    :appInfo="appInfo" 
    @addCount="addCount"
    @click="alertFn"
    v-bind="{name: 'ano', age: 18}" 
    class="child" />
  <input ref="input" type="text">

  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>

  <div>
    <button @click="router.push({name: 'Details'})">goto details</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, provide } from 'vue';
import { useHomeStore } from '@/store/home'
import { useRouter } from 'vue-router';
import http from '@/utils/axios';

import { ElButton } from 'element-plus';
import 'element-plus/es/components/button/style/css'
import HelloWorld from '@/components/HelloWorld.vue'

const homeStore = useHomeStore();
const router = useRouter();

const count = ref(0);
const appInfo = reactive({
  name: 'Home'
});
const child = ref<InstanceType<typeof HelloWorld> | null>(null);
const provideData: IprovideData = reactive({
  data: 'data'
});

provide('provideData', provideData);

onMounted(() => {
  console.log('father onMounted', child.value);
  console.log(child.value?.childFn());
  homeStore.chatInfo = {
    type: 'gpt4'
  }
  console.log(homeStore.chatInfo);

  http.get('https://jsonplaceholder.typicode.com/todos/1', {}).then(res => {
    console.log(res)
  })
})

const showCount = computed(() => count.value + 1);

watch(count, (n, o) => {
  console.log('count change', n , o);
})

const addCount = (childCount: number) => {
  console.log('子組件', childCount);
  count.value = childCount;
}

const alertFn = () => {
  alert('soyo')
}

</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.top {
  .count {
    color: $color;
  }
}
</style>
