<template>
  <div>
    <div>{{$t('L.HELLO_WORLD')}}</div>
    <img src="../../static/image/logo.png">
    <div class="bg"></div>
  </div>
  </template>

<script>
  export default {
    name: 'demo',
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
