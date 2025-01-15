<template>
  <h1>{{ props.msg }}</h1>
  <h1>{{ props.appInfo.name }}</h1>
  <h1>{{ $attrs}}</h1>
  
  <div class="card">
    <button type="button" @click="add">count is {{ count }}</button>
    <button type="button" @click="changeProvide">changeProvide {{ provideData }}</button>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref, useAttrs } from 'vue'
interface IappInfo {
  name: string
}

const provideData: IprovideData = inject('provideData') as IprovideData;
const emit = defineEmits<{
  addCount: [childCount: number]
}>();

const props = defineProps<{ 
  msg: string,
  appInfo: IappInfo,
  name:string,
  age: number,
}>()

const attrs = useAttrs();

onMounted(() => {
  console.log('child onMounted', provideData, props)
})

const count = ref(0)
const childRefVal = ref('rikki');

const add = () => {
  console.log('add click');
  count.value++;
  emit('addCount', count.value);
  (attrs.onAlertFn as (...args: any[]) => any)();
}

const changeProvide = () => {
  provideData.data = 'ano';
}

const childFn = () => {
  console.log('child fn')
}

defineExpose({
  childRefVal,
  childFn,
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
