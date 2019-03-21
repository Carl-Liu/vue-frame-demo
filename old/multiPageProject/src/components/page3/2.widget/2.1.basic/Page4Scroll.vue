<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">scroll</div>
    <div class="describe">
      界面内控制滚动条滚动的工具方法
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">scroll 1</div>
    <div class="describe">
      scroll 1
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="scroll_1">scroll</button>
            <div id="scrollParent1" class="scrollParent">
              <div id="scrollContent1" class="scrollContent"></div>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
              <pre>
                <code class="js">
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
    <!--2级 start-->
    <div class="title level2">scroll 2</div>
    <div class="describe">
      scroll 2
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems2">
        <marvel-tab-item :isActive="tabItems2[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="scroll_2">scroll</button>
            <div id="scrollParent2" class="scrollParent" style="position: relative">
              <div id="scrollContent2" class="scrollContent"></div>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems2[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="js">
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
    <!--2级 start-->
    <div class="title level2">scroll 3</div>
    <div class="describe">
      scroll 3
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems3">
        <marvel-tab-item :isActive="tabItems3[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="scroll_3">scroll</button>
            <div id="scrollParent3" class="scrollParent" style="position: relative">
              <div class="otherContent"></div><br>
              <div class="otherContent"></div><br>
              <div class="otherContent"></div><br>
              <div id="scrollContent3" class="scrollContent"></div>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems3[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="js">
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
    <!--2级 start-->
    <div class="title level2">scroll 4</div>
    <div class="describe">
      scroll 4
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems4">
        <marvel-tab-item :isActive="tabItems4[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="scroll_4">scroll</button>
            <div id="scrollParent4" class="scrollParent" style="position: relative">
              <div class="otherContent"></div><br>
              <div class="otherContent"></div><br>
              <div id="scrollContent4" class="scrollContent"></div><br>
              <div class="otherContent"></div><br>
              <div class="otherContent"></div><br>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems4[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="js">
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
  </div>
</template>

<script>
  import MarvelTab from "@/walle/widget/tab/MarvelTab";
  import MarvelTabItem from "@/walle/widget/tab/MarvelTabItem";
  import ScrollUtilsEx1 from  "../../../../walle/component/scroll/scroll1"
  import ScrollUtilsEx2 from  "../../../../walle/component/scroll/scroll2"
  import ScrollUtilsEx3 from  "../../../../walle/component/scroll/scroll3"
  import ScrollUtilsEx4 from  "../../../../walle/component/scroll/scroll4"

  export default {
    name: 'page4Scroll',
    components: {
      MarvelTab,
      MarvelTabItem
    },
    data: function() {
      return {
        //#region document data
        tabItems1: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        tabItems2: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        tabItems3: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        tabItems4: [{
          label: "Demo View",
          isActive: true
        }, {
          label: "Code View",
          isActive: false
        }],
        //#endregion
      }
    },
    mounted:function () {
      //#region custom
      //#endregion
    },
    methods:{
      //#region inner
      //#region scroll

      scroll_1: function() {
        ScrollUtilsEx1.scroll("#scrollContent1", "#scrollParent1");
      },
      scroll_2: function() {
        ScrollUtilsEx2.scroll("#scrollContent2", "#scrollParent2");
      },
      scroll_3: function() {
        ScrollUtilsEx3.scroll("#scrollContent3", "#scrollParent3");
      },
      scroll_4: function() {
        ScrollUtilsEx4.scroll("#scrollContent4", "#scrollParent4", 80);
      },

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
  /*document fix style start*/
  .widgetShowSession {
    padding: 20px 100px;
    width: 100%;
    box-sizing: border-box;
  }
  .title {
    color: #4d4d4d;
  }
  .level1 {
    font-size: 32px;
    line-height: 54px;
  }
  .describe {
    font-size: 14px;
    color: #666;
    line-height: 36px;
  }
  .codeArea {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
    overflow: auto;
  }
  .codeArea pre, .codeArea code {
    padding: 0;
    margin: 0;
    min-width: 100%;
    float: left;
  }
  .showAreaInner {
    padding-top: 36px;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  /*document fix  style end*/
  /*document custom style start*/
  .showArea {
    width: 100%;
    height: 400px;
  }

  .scrollParent{
    background-color: #aaa;
    overflow: auto;
    width: 100%;
    height: 100px;
  }
  .otherContent{
    background-color: #00ff00;
    width: 100px;
    height: 200px;
  }
  .scrollContent{
    background-color: #ff0000;
    width: 100px;
    height: 200px;
  }
  /*document custom style end*/

  /*region dark theme*/

  .dark .title {
    color: #ffffff;
  }
  .dark .describe {
    color: #8b90b3;
  }

  /*endregion*/
</style>
