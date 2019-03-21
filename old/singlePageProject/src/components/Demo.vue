<template>
  <div>{{$t('L.HELLO_WORLD')}}</div>
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
    destroyed:function(){},
    methods:{
      //#region inner
      _initEx: function () {
        console.log(this.$t('L.HELLO_WORLD'));
      }
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
