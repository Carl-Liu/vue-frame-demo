<template>
  <!--crumb Start-->
  <div class="crumbWrapper" :class="size">
    <div class="crumbItem" v-for="(item, index) in items">
      <div class="name" v-on:click="onCrumbItemClick(item.label, index, item)">{{ item.label }}</div>
      <div v-if="customSeparateSymbol == undefined" class="symbol icon-marvelIcon-02"></div>
      <div v-if="customSeparateSymbol != undefined" class="customSeparateSymbol">{{customSeparateSymbol}}</div>
    </div>
  </div>
  <!--crumb End-->
</template>

<script>
  export default {
    name: 'MarvelCrumb',
    props: ["items","customSeparateSymbol", "size"],
    data: function() {
        return {

        }
    },
    methods: {
      onCrumbItemClick: function(strItemLabel, iItemIndex, item){
        this.$emit("onCrumbItemClick", strItemLabel, iItemIndex, item);
      }
    }
  }
</script>

<style scoped>
  .crumbWrapper{
    overflow: hidden;
    min-height: 14px;
  }
  .crumbWrapper .crumbItem{
    float: left;
  }
  .crumbWrapper .crumbItem .name,.crumbWrapper .crumbItem .symbol{
    float: left;
    font-size: 12px;
    color: #333;
    line-height: 14px;
    margin-right: 5px;
    cursor: pointer;
  }
  .customSeparateSymbol{
    float: left;
    font-size: 12px;
    color: #666;
    line-height: 14px;
    margin-right: 5px;
  }
  .crumbWrapper .crumbItem .name:hover{
    color: #3399ff;
  }
  .crumbWrapper .crumbItem:last-child .name{
    font-weight: 600;
    pointer-events: none;
  }
  .crumbWrapper .crumbItem:last-child .name:hover{
    color: #666;
  }
  .crumbWrapper .crumbItem:last-child .symbol{
    display: none;
  }
  .crumbWrapper .crumbItem:last-child .customSeparateSymbol{
    display: none;
  }

  /*region large*/

  .large{
    height: 28px;
  }
  .large .crumbItem .name,.large .crumbItem .symbol{
    font-size: 14px;
    line-height: 28px;
  }
  .large .customSeparateSymbol{
    font-size: 14px;
    line-height: 28px;
  }

  /*endregion*/

  /*region dark theme*/

  .dark .crumbItem .name,.dark .crumbItem .symbol{
    color: #fff;
  }
  .dark .crumbItem .name,.dark .crumbItem .customSeparateSymbol{
    color: #fff;
  }
  .dark .crumbItem .name:hover{
    color: #3dcca6;
  }
  .dark .crumbItem:last-child .name:hover{
    color: #fff;
  }

  /*endregion*/

  /*blackBg theme*/
  .blackBg .crumbWrapper .crumbItem .name,.crumbWrapper .crumbItem .symbol{
    color: #aaa;
  }
  .blackBg .crumbWrapper .crumbItem .name,.crumbWrapper .crumbItem .customSeparateSymbol{
    color: #aaa;
  }
  .blackBg .crumbWrapper .crumbItem .name:hover{
    color: #3399ff;
  }
  .blackBg .crumbWrapper .crumbItem:last-child .name:hover{
    color: #aaa;
  }

  /*endregion*/
</style>
