<template>
  <div class="chart4Force" v-bind:id="id"></div>
</template>

<script>
  export default {
    name: 'MarvelChartForce',
    props: ["id", "theme", "onItemClick"],
    data: function () {
      return {
        chartObj: undefined,
      }
    },
    mounted: function () {
      //#region custom

      //#endregion
    },
    beforeDestroy: function(){
      //#region custom

      this._destroy();

      //#endregion
    },
    methods: {
      //#region inner

      //#region lifeCycle

      _destroy: function(){
        window.removeEventListener('resize', this._resizeEcharts);
      },

      //#endregion

      _resizeEcharts: function(){
        this._throttle(100, this.chartObj.resize());
      },

      _clearEcharts: function(){
        this.chartObj.clear();
      },

      _throttle: function(delay, action){
        let last = 0;
        return function () {
          let curr = +new Date();
          if(curr - last > delay){
            action.apply(this, arguments);
            last = curr;
          }
        }
      },

      //#endregion

      //#region callback
      //#endregion

      //#region 3rd

      init: function(){
        var self = this;
        this.chartObj = echarts.init(document.getElementById(this.id), this.theme);
        window.addEventListener('resize', this._resizeEcharts);

        this.chartObj.on('click', function (params) {
          self.$emit("onItemClick", params);
        })
      },

      setData: function(oGraph, oCategories, bShowLegend){
        let repulsion = 30;
        if(oGraph.nodes.length < 50){
          repulsion = 150;
        }else if(oGraph.nodes.length < 200){
          repulsion = 50;
        }
        let option = {
          title:null,
          tooltip:null,
          legend: bShowLegend ? [{
            textStyle:{
              fontSize:15,
              color:"#999"
            },
            data: oCategories.map(function (a) {
              return a.name;
            })
          }]:null,
          animation:false,
          series:[{
            name: null,
            type:'graph',
            layout:'force',
            data: oGraph.nodes,
            links: oGraph.links,
            categories: oCategories,
            roam: true,
            label:{
              normal:{
                position:"right",
                textStyle:{
                  fontSize: 18,
                  fontWight: 200
                }
              }
            },
            force: {
              repulsion: repulsion
            }
          }]
        };

        this.chartObj.setOption(option);
      },

      //#endregion

    }
  }
</script>

<style scoped>
  .chart4Force {
    width: 100%;
    height: 100%;
  }
</style>
