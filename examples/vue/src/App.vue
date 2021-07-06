<template>
  <div>
    height:
    <select v-model="height">
      <option value="600px">600px</option>
      <option value="800px">800px</option>
    </select>
    text:
    <input v-model="titleText" />
    <vite-react-webcomponents userName="Joe_Sky" :titleText="titleText" :height="height">
      <i>Try modifying the textbox at the top</i>
    </vite-react-webcomponents>
  </div>
</template>

<script>
import '@joe-sky/vite-react-webcomponents/vue';

export default {
  name: 'App',
  data: () => ({
    height: '600px',
    titleText: ['ViteReactWebcomponents', ' example with Vue v3!']
  })
};
</script>

<style lang="less" scoped>
select {
  margin-bottom: 10px;
  margin-right: 15px;
}

input {
  width: 300px;
}
</style>
