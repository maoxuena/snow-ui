<template>
  <div class="cascader-item">
    {{sourceItem.name}}
    <template v-if="sourceItem.children">
      <snow-cascader-item
        v-for="(item, key) in sourceItem.children"
        :sourceItem="item"
        :key="key"
      ></snow-cascader-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: "SnowCascaderItem",
    props: {
      sourceItem: {
        type: Object
      }
    }
  }
</script>

<style scoped lang="scss">
  .cascader-item {
    border: 1px solid red;
    margin: 10px;
  }
</style>