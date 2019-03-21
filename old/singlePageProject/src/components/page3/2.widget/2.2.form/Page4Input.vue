<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">输入框</div>
    <div class="describe">
      输入框控件，支持正常输入、错误提示、禁用等功能。
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">正常输入</div>
    <div class="describe">
      正常输入，可以获取用户输入的信息
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:200px;">
              <button v-on:click="onClick4Input1">获取</button>
              <marvel-input ref="ref0" :status="status1" placeHolder="please..." errMsg="输入错误..."
                            :inputMsg="inputMsg" size="mini"
                            @onBlur="onBlur1"
                            @onInput="onInput1"></marvel-input>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
&lt;marvel-input ref="ref0" :status="status1" placeHolder="please..." errMsg="输入错误..." :inputMsg = "inputMsg" size="mini"&gt;&lt;/marvel-input&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">错误提示</div>
    <div class="describe">
      当判断输入信息非法或者错误时，可以提示错误。
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems2">
        <marvel-tab-item :isActive="tabItems2[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:200px;">
              <button v-on:click="onClick4Input2">触发错误</button>
              <marvel-input :status="status2" placeHolder="please..." errMsg="输入错误..." type="password"></marvel-input>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems2[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
&lt;marvel-input :status="status2" placeHolder="please..." errMsg="输入错误..."&gt;&lt;/marvel-input&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">禁用</div>
    <div class="describe">
      将input框设置为禁用状态
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems3">
        <marvel-tab-item :isActive="tabItems3[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:200px;">
              <button v-on:click="onClick4Input3">disable</button>
              <marvel-input :status="status3" placeHolder="please..." errMsg="输入错误..."></marvel-input>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems3[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
&lt;marvel-input :status="status3" placeHolder="please..." errMsg="输入错误..."&gt;&lt;/marvel-input&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">多行文本框</div>
    <div class="describe">
      多行文本框
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems4">
        <marvel-tab-item :isActive="tabItems4[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:200px;">
              <button v-on:click="onClick4Input4">获取</button>
              <marvel-multi-input ref="ref1" :status="status4" placeHolder="please..."
                                  :inputMsg="inputMsg2" size="mini"
                                  @onBlur="onBlur2"
                                  @onInput="onInput2">
              </marvel-multi-input>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems4[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
&lt;marvel-multi-input ref="ref1" :status="status4" placeHolder="please..."
                    :inputMsg="inputMsg2" size="mini"&gt;
&lt;/marvel-multi-input&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->

    <!--2级 start-->
    <div class="title level2">列表输入</div>
    <div class="describe">
      列表输入
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems5">
        <marvel-tab-item :isActive="tabItems5[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <div style="width:360px;">
              <button v-on:click="setLisInputData">设置值</button>
              <button v-on:click="getLisInputData">获取值</button>
              <button v-on:click="setLisInputError">设置报错状态</button>
              <button v-on:click="clearLisInputError">清除报错状态</button>
              <marvel-list-input ref="ref2" @onValueChange="onListInputValueChange"></marvel-list-input>
            </div>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems5[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
  </div>
</template>

<script>
  import MarvelTab from "^/widget/tab/MarvelTab";
  import MarvelTabItem from "^/widget/tab/MarvelTabItem";
  import MarvelInput from "^/widget/input/MarvelInput";
  import MarvelMultiInput from "^/widget/input/MarvelMultiInput";
  import MarvelListInput from "^/widget/input/MarvelListInput";

  export default {
    name: 'page4Input',
    components: {
      MarvelListInput,
      MarvelMultiInput,
      MarvelInput,
      MarvelTab,
      MarvelTabItem
    },
    data: function () {
      return {
        //#region document data
        tabItems1: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
        tabItems2: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
        tabItems3: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
        tabItems4: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
        tabItems5: [
          {
            label: "Demo View",
            isActive: true
          },
          {
            label: "Code View",
            isActive: false
          }
        ],
        //#endregion
        //#region input1
        inputMsg: "",
        status1: "",
        //#endregion
        //#region input2
        status2: "",
        //#endregion
        //#region input3
        status3: "",
        //#endregion
        //#region multiInput
        inputMsg2: "",
        status4: "",
        //#endregion
        //#region listInput
        listInputOptions:{
          placeHolder:"place holder",
          listInputItems:[{
            value:"nameA"
          },{
            value:"nameB"
          },{
            value:"nameC"
          }]
        }
        //#endregion
      }
    },
    mounted: function(){
      this.initEx();
    },
    methods: {
      //#region inner

      //#region lifeCycle
      initEx:function(){
        //listInput
        this.$refs.ref2.init(this.listInputOptions);
      },
      //#endregion

      //#region input1

      onClick4Input1: function () {
        console.log(this.$refs.ref0.getInputMsg());
      },

      onInput1: function (strMsg) {
        console.log(strMsg);
      },

      onBlur1: function (strMsg) {
        console.log("onBlur:");
        console.log(strMsg);
      },

      //#endregion

      //#region input2

      onClick4Input2: function () {
        this.status2 = "error";
      },

      //#endregion

      //#region input3

      onClick4Input3: function () {
        this.status3 = "disable";
      },

      //#endregion

      //#region multiInput

      onClick4Input4: function () {
        console.log(this.$refs.ref1.getInputMsg());
      },

      onInput2: function (strMsg) {
        console.log(strMsg);
      },

      onBlur2: function (strMsg) {
        console.log("onBlur:");
        console.log(strMsg);
      },

      //#endregion

      //#region listInput

      setLisInputData: function () {
        this.$refs.ref2.setListInputMsg([{
          value:"nameD"
        },{
          value:"nameE"
        },]);
      },

      getLisInputData: function () {
        var oData = this.$refs.ref2.getListInputMsg();
        console.log(oData);
      },

      setLisInputError: function () {
        this.$refs.ref2.setErrStatus([1,3], "error tip");
      },

      clearLisInputError: function () {
        this.$refs.ref2.clearErrorStatus();
      },

      onListInputValueChange: function () {
        this.getLisInputData();
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

  /*document custom style end*/
  /*custom style start*/

  /*custom style end*/

  /*region dark theme*/

  .dark .title {
    color: #ffffff;
  }
  .dark .describe {
    color: #8b90b3;
  }

  /*endregion*/
</style>
