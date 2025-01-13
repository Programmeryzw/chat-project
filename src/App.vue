<template>
  <div>
    <!-- <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <img src="./assets//微信图片_20241231172606.png" alt="">
    <p>father count: {{ showCount }}</p>
    <p>appInfo: {{ appInfo }}</p>
  </div>
  <HelloWorld 
    ref="child" 
    msg="Vite + Vue" 
    :appInfo="appInfo" 
    @addCount="addCount"
    v-bind="{name: 'ano', age: 18}" 
    class="child" id="22" @click="alertFn"/>
  <input ref="input" type="text">
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch, provide } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

interface IprovideData {
  data: string
}


const count = ref(0);
const appInfo = reactive({
  name: 'app'
});
const child = ref();
const provideData: IprovideData = reactive({
  data: 'data'
});

provide('provideData', provideData);

onMounted(() => {
  console.log('father onMounted', child.value);
  console.log(child.value.childFn());
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

<style scoped>
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
</style>
