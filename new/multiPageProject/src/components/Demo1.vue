<template>
  <div>{{$t('L.HELLO_WORLD')}} 1</div>
</template>

<script>
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

</style>
