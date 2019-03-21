<template>

  <div class="promptContainer" :class="classObj">
    <div class="left" :class="leftIconClass"></div>
    <div class="center">
      {{content}}
    </div>
    <div class="right icon-cross" @click="clickDel"></div>
  </div>

</template>

<script>
  import brower from '../../component/browser';
  export default {
    name: "MarvelPrompt",
    data: function(){
      return {

      };
    },
    props: {
      status:null,//status: '0'表示info,'1'代表提示,'2'表示警告
      content:null,
      disposeTimeOut:{
        type: Number,
        default: 10000,
      }
    },
    methods: {
      clickDel: function(){
        var oBrowser = brower.getBrowserInfo();
        if(oBrowser.name == 'msie'){
          //iE 浏览器下
          this.$el.removeNode(true);
        }else{
          //非IE
          this.$el.remove();
        }

      }
    },
    computed: {
      classObj: function(){
        if(this.status == '0'){
          return 'promptInfo';
        }
        if(this.status == '1'){
          return 'promptTip';
        }
        else{
          return 'promptError';
        }
      },
      leftIconClass: function(){
        if(this.status == '0'){
          return ["icon-checkmark", "leftInfo"];
        }
        else if(this.status == '1'){
          return ["icon-info", "leftTip"];
        }
        else{
          return ["icon-info", "leftError"];
        }
      }
    },
    mounted: function(){
      setTimeout(function(){
        this.clickDel();
      }.bind(this), this.disposeTimeOut);
    }
  }

</script>

<style scoped>
  .promptContainer {
    width: 400px;
    min-height: 40px;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 14px;
    border: 1px solid;
    overflow: hidden;
  }
  .promptInfo{
    background-color: rgba(61, 204, 166,0.3);
    border-color: #3dcca6;
    color: #3dcca6;
  }
  .promptTip{
    background-color: rgba(51, 153, 255, 0.3);
    border-color: #3399ff;
    color: #3399ff;
  }
  .promptError{
    background-color: rgba(255,76,76,0.3);
    border-color: #ff4c4c;
    color: #ff4c4c;
  }
  .promptContainer .left{
    float: left;
    margin-top: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    color: #FFFFFF;
    line-height: 16px;
    font-size: 8px;
    text-align: center;
  }
  .leftInfo{
    background-color: #3dcca6;
  }
  .leftTip{
    background-color: #3399ff;
  }
  .leftError{
    background-color: #ff4c4c;
  }
  .promptContainer .center{
    float: left;
    padding: 10px 15px 10px 10px;
    box-sizing: border-box;
    max-width: calc(100% - 36px);
  }
  .promptContainer .right{
    float: right;
    margin-top: 12px;
    line-height: 16px;
    font-size: 8px;
    text-align: center;
    width: 12px;
  }
</style>
