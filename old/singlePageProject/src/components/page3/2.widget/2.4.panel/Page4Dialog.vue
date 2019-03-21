<template>
  <div class="widgetShowSession">
    <!--1级 start-->
    <div class="title level1">Dialog</div>
    <div class="describe">
      Dialog
    </div>
    <!--1级 end-->
    <!--2级 start-->
    <div class="title level2">Dialog</div>
    <div class="describe">
      Dialog
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems1">
        <marvel-tab-item :isActive="tabItems1[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="onClickDialogShow">show</button>
            <marvel-dialog :showDialog="showDialog" :canDrag="true"
                           title="上传" width="500" height="300"
                           v-on:onClickDialogClose="onClickDialogClose">
              <div slot="dialogCont">111111</div>
              <div slot="dialogFoot">

              </div>
            </marvel-dialog>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems1[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
                  &lt;button v-on:click="onClickDialogShow"&gt;show&lt;/button&gt;
                  &lt;marvel-dialog :showDialog="showDialog"
                  title="上传" width="500" height="300"
                  v-on:onClickDialogClose="onClickDialogClose"&gt;
                  &lt;div slot="dialogCont"&gt;111111&lt;/div&gt;
                  &lt;div slot="dialogFoot"&gt;

                  &lt;/div&gt;
                  &lt;/marvel-dialog&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
    <!--2级 start-->
    <div class="title level2">Confirm Dialog</div>
    <div class="describe">
      Confirm Dialog
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems2">
        <marvel-tab-item :isActive="tabItems2[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="onClickConfirmShow">show</button>
            <marvel-confirm :showConfirm="showConfirm"
                            :showOkBtn="false"
                            :showCancelBtn="true"
                            confirmCont="这是一个提示确认框"
                            tipType="tip"
                            :canDrag="true"
                            v-on:onClickOK="onClickConfirmOK"
                            v-on:onClickCancel="onClickConfirmCancel"></marvel-confirm>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems2[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
                  &lt;button v-on:click="onClickConfirmShow"&gt;show&lt;/button&gt;
                  &lt;marvel-confirm :showConfirm="showConfirm"
                                  v-on:onClickConfirmClose="onClickConfirmClose"
                                  confirmCont="这是一个提示确认框"
                                  tipType="tip"
                  &gt;&lt;/marvel-confirm&gt;
                </code>
              </pre>
            <!--2级CodeView end-->
          </div>
        </marvel-tab-item>
      </marvel-tab>
    </div>
    <!--2级 end-->
    <!--2级 start-->
    <div class="title level2">ConfirmEx Dialog</div>
    <div class="describe">
      ConfirmEx Dialog
    </div>
    <div class="showArea">
      <marvel-tab :tabItems="tabItems2">
        <marvel-tab-item :isActive="tabItems2[0].isActive">
          <div class="showAreaInner">
            <!--2级DemoView start-->
            <button v-on:click="onClickConfirmShowEx">show</button>
            <marvel-confirm-ex :showConfirm="showConfirmEx"
                               :showOkBtn="showOkBtn4ConfirmEx"
                               :showCancelBtn="showCancelBtn4ConfirmEx"
                               :confirmTitle="confirmTitle4ConfirmEx"
                               :confirmIcon="confirmIcon4ConfirmEx"
                               :confirmIconColor="confirmIconColor4ConfirmEx"
                               :confirmSubTitle="confirmSubTitle4ConfirmEx"
                               :confirmCont="confirmExContent4ConfirmEx"
                               :canDrag="true"
                               v-on:onClickOK="onClickConfirmExOK"
                               v-on:onClickCancel="onClickConfirmExCancel"></marvel-confirm-ex>
            <!--2级DemoView end-->
          </div>
        </marvel-tab-item>
        <marvel-tab-item :isActive="tabItems2[1].isActive">
          <div class="codeArea">
            <!--2级CodeView start-->
            <pre>
                <code class="html">
                  &lt;button v-on:click="onClickConfirmShow"&gt;show&lt;/button&gt;
                  &lt;marvel-confirm :showConfirm="showConfirm"
                                  v-on:onClickConfirmClose="onClickConfirmClose"
                                  confirmCont="这是一个提示确认框"
                                  tipType="tip"
                  &gt;&lt;/marvel-confirm&gt;
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
  import MarvelTab from "^/widget/tab/MarvelTab";
  import MarvelTabItem from "^/widget/tab/MarvelTabItem";
  import MarvelDialog from "^/widget/dialog/MarvelDialog";
  import MarvelConfirm from "^/widget/dialog/MarvelConfirm";
  import MarvelButton from "^/widget/button/MarvelButton";
  import MarvelConfirmEx from "^/widget/dialog/MarvelConfirmEx";

  export default {
    name: 'page4Dialog',
    components: {
      MarvelConfirmEx,
      MarvelButton,
      MarvelDialog,
      MarvelConfirm,
      MarvelTabItem,
      MarvelTab,
    },
    data: function () {
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
        //#endregion
        //#region custom data
        //#region dialog
        showDialog: false,
        //#endregion
        //#region confirm
        showConfirm: false,
        //#endregion
        //#region confirm
        showConfirmEx:false,
        showOkBtn4ConfirmEx:true,
        showCancelBtn4ConfirmEx:true,
        confirmTitle4ConfirmEx:"ConfirmEx",
        confirmIcon4ConfirmEx:"icon-cancel-circle",
        confirmIconColor4ConfirmEx:"#ff4040",
        confirmSubTitle4ConfirmEx:"Operation Failed",
        confirmExContent4ConfirmEx:[{
          key:"Description:",
          value:"Failed to create services."
        },{
          key:"Reason:",
          value:"Failed to create services."
        },{
          key:"Detail:",
          value:"Failed to create services."
        },{
          key:"Repair advice:",
          value:"Please contact technical support."
        },]
        //#endregion
        //#endregion
      }
    },
    mounted: function () {
      //#region custom

      //#endregion
    },
    methods: {
      //#region inner

      //#region dialog

      onClickDialogShow: function () {
        this.showDialog = true;
      },
      onClickDialogClose: function(){
        this.showDialog = false;
      },

      //#endregion

      //#region confirm dialog

      onClickConfirmShow: function () {
        this.showConfirm = true;
      },
      onClickConfirmOK: function(){
        this.showConfirm = false;
      },
      onClickConfirmCancel: function(){
        this.showConfirm = false;
      },

      //#endregion

      //#region confirmEx dialog

      onClickConfirmShowEx: function () {
        this.showConfirmEx = true;
      },
      onClickConfirmExOK: function(){
        this.showConfirmEx = false;
      },
      onClickConfirmExCancel: function(){
        this.showConfirmEx = false;
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
