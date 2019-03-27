<template>
  <div>
    <div>{{$t('L.HELLO_WORLD')}} 1</div>
    <img src="../../static/image/logo.png">
    <div class="bg"></div>
  </div>
</template>

<script>
  import HttpUtils from "../pages/index/components/0.common/httpUtil/httpUtils";

  export default {
    name: 'demo1',
    data: function() {
      return {
        //#region const
        debug:false,
        //#endregion
      }
    },
    mounted:function(){
      //#region custom

      this._initEx();

      //#endregion
    },
    destroyed:function(){
      //#region custom

      this._killMe();

      //#endregion
    },
    methods:{
      //#region inner

      //#region lifeCycle

      _initEx: function () {
        console.log(this.$t('L.HELLO_WORLD'));

        /**
         * http demo :demoPost
         *
         * a {String} 参数说明
         */
        var reqBody = {
          reqBuVoStr: JSON.stringify({
            a:"a"
          })
        };
        HttpUtils.post("demoPost", reqBody).then(res => {});

      },

      _killMe: function () {

      }

      //#endregion

      //#endregion
      //#region callback

      //#endregion
      //#region 3rd

      //#endregion
    }
  }
</script>

<style scoped>

  .bg{
    width: 200px;
    height: 200px;
    background: url("../../static/image/logo.png");
  }

</style>
