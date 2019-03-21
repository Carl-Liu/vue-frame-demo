<template>
  <div class="defaultBtn"
       v-bind:class="[size, status, classCustom, {tip:isWarn}]"
       v-on:click="onClick">{{ label }}</div>
</template>

<script>
  export default {
    name: 'MarvelButton',
    props: ["size", "classCustom", "label", "isWarn", "status"],
    data: function() {
        return {

        }
    },
    mounted: function(){

    },
    methods: {
      onClick: function(){
        this.$emit('onClick');
      }
    }
  }
</script>

<style scoped>
  .defaultBtn{
    border: 1px solid #ccc;
    color: #333;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding: 0 20px;
    display: inline-block;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
  }
  .defaultBtn:hover{
    border: 1px solid #60b0ff;
  }
  .tip:after{
    content:"";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #ff4400;
  }
  .large{
    height: 40px;
    padding: 0 30px;
    font-size: 16px;
    line-height: 40px;
  }

  .small{
    height: 26px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 26px;
  }

  .mini{
    height: 22px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 22px;
  }

  .mouseDown{
    background-color: #f1f8ff;
    color: #3399ff;
    border: 1px solid #3399ff;
  }
  .focus{
    color: #3399ff;
    border: 1px solid #3399ff;
  }
  .disable{
    background-color: #f0f0f0;
    color: #999;
    border: 1px solid #ccc;
    pointer-events: none;
  }

  /*region dark theme*/

  .dark .defaultBtn{
    border: 1px solid #36365b;
    color: #ffffff;
    border-radius: 32px;
    background-color: #36365b;
  }
  .dark .defaultBtn:hover{
    border: 1px solid #6262a8;
  }
  .dark .mouseDown{
    background-color: #6262a8;
    color: #3dcca6;
    border: 1px solid #3dcca6;
  }
  .dark .focus{
    color: #3dcca6;
    border: 1px solid #3dcca6;
  }
  .dark .disable{
    background-color: #15153d;
    color: #36365b;
    border: 1px solid #15153d;
  }

  /*endregion*/

  /*blackBg theme*/

  .blackBg .defaultBtn{
    border: 1px solid #999;
    color: #ffffff;
  }
  .blackBg .defaultBtn:hover{
    border: 1px solid #60b0ff;
    background-color: rgba(0,127,255,0.3);
  }
  .blackBg .mouseDown{
    background-color: rgba(0,127,255,0.3);
    color: #3399ff;
    border: 1px solid #3399ff;
  }
  .blackBg .focus{
    color: #3399ff;
    border: 1px solid #3399ff;
  }
  .blackBg .disable{
    background-color: rgba(255,255,255,0.2);
    color: #aaa;
    border: 1px solid #999;
  }

  /*endregion*/
</style>
