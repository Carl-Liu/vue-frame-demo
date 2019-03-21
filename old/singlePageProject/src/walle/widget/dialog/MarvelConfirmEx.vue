<template>
  <div class="tipDialogBg" v-bind:class="{uiSink: !showConfirm}">
    <div class="tipDialogWrapper" :id="confirmId" :style="{'margin-top': marginTop,'margin-left':marginLeft}">
      <div class="tipDialogTitleArea">
        <div class="titleName">{{confirmTitle}}</div>
        <div class="closeBtn icon-marvelIcon-20"
             v-on:click="onClickCancel"></div>
      </div>
      <div class="tipDialogContArea">
        <div class="leftMessageIcon" :class="confirmIcon" :style="{color: confirmIconColor}"></div>
        <div class="rightMessageCont">
          <div class="MessageTitle">{{confirmSubTitle}}</div>
          <div name="dialogCont" class="customContArea">
            <div class="contentSession" v-for="content in confirmCont" :key="content.key">
              <div class="sessionKey">{{content.key}}</div>
              <div class="sessionValue">{{content.value}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tipDialogBtnArea">
        <marvel-primary-button v-if="showOkBtn" :label="$t('marvelConfirm_confirm')" classCustom="buttonClassCustom"
                               v-on:onClick="onClickOK"></marvel-primary-button>
        <marvel-primary-button v-if="showCancelBtn" :label="$t('marvelConfirm_cancel')" classCustom="buttonClassCustom"
                               v-on:onClick="onClickCancel"></marvel-primary-button>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
  "en": {
  "marvelConfirm_confirm": "OK",
  "marvelConfirm_cancel": "Cancel"
  },
  "zh": {
  "marvelConfirm_confirm": "确定",
  "marvelConfirm_cancel": "取消"
  }
  }
</i18n>

<script>
  import StringUtilsEx from '../../component/str'
  import MarvelPrimaryButton from "../button/MarvelPrimaryButton";

  export default {
    components: {MarvelPrimaryButton},
    name: 'MarvelConfirmEx',
    props: {
      showConfirm:{
        type: Boolean,
        default: false,
      },
      showOkBtn:{
        type: Boolean,
        default: true,
      },
      showCancelBtn:{
        type: Boolean,
        default: true,
      },
      confirmTitle:{
        type: String,
        default: "Confirm",
      },
      confirmIcon:{
        type: String,
        default: "icon-notification",
      },
      confirmIconColor:{
        type: String,
        default: "#ff8833",
      },
      confirmSubTitle:{
        type: String,
        default: "Confirm",
      },
      confirmCont:Array,
    },
    data: function() {
        return {
          confirmId: StringUtilsEx.uuid(),
          marginLeft:"0",
          marginTop:"0",
        }
    },
    mounted: function(){
      //#region init
      this._initEx();
      //#endregion
    },
    methods: {
      //#region inner
      _initEx: function(){
        this._calcConfirmPos();
      },
      _calcConfirmPos: function(){
        var iConfirmW = parseInt($("#" + this.confirmId).width());
        var iConfirmH = parseInt($("#" + this.confirmId).height());

        this.marginLeft = -iConfirmW/2 + "px";
        this.marginTop = -iConfirmH/2 + "px";
      },
      onClickOK: function () {
        this.$emit("onClickOK");
      },
      onClickCancel: function(){
        this.$emit("onClickCancel");
      }
      //#endregion
      //#region callback
      //#endregion
      //#region 3rd
      //#endregion
    },
    watch: {
      confirmCont: {
        handler() {
          this.$nextTick(function () {
            this._calcConfirmPos();
          });
        },
        deep: true
      },
    },
  }
</script>

<style scoped>
  .uiSink{
    opacity: 0 !important;
    position: absolute !important;
    z-index: -1 !important;
  }
  .tipDialogBg{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 3000;
    background-color: rgba(0,0,0,0.2);
  }
  .tipDialogBg .tipDialogWrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 800px;
    border-radius: 2px;
    box-shadow: 0 0 30px 2px rgba(0,0,0,0.2);
    background-color: #ffffff;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogTitleArea{
    height: 52px;
    width: 100%;
    clear: both;
  }
  .tipDialogTitleArea .titleName:before{
    width: 3px;
    display: inline-block;
    content: "";
    background-color: #3399ff;
    height: 22px;
    margin-right: 30px;
  }
  .tipDialogTitleArea .titleName{
    height: 100%;
    float: left;
    padding-top: 30px;
    font-size: 24px;
    line-height: 24px;
    color: #333333;
    box-sizing: border-box;
    font-family: arial, "微软雅黑", sans-serif;
  }
  .tipDialogTitleArea .closeBtn{
    height: 100%;
    padding-top: 10px;
    margin-right: 10px;
    font-size: 10px;
    color: #777777;
    cursor:pointer;
    float: right;
    box-sizing: border-box;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea{
    padding: 20px 33px;
    width: 100%;
    height:calc(100% - 105px);
    box-sizing: border-box;
    clear: both;
    overflow: hidden;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .leftMessageIcon{
    width: 45px;
    height: 45px;
    float: left;
    line-height: 45px;
    font-size: 45px;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont{
    width: calc(100% - 45px);
    height: 100%;
    float: left;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .MessageTitle{
    font-size: 18px;
    line-height: 45px;
    margin-bottom: 10px;
    color: #333333;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea{
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
    color: #999;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea .contentSession{
    overflow: hidden;
    font-size: 16px;
    line-height: 32px;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea .contentSession .sessionKey{
    width: 120px;
    margin-right: 10px;
    float: left;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea .contentSession .sessionValue{
    width: calc(100% - 130px);
    float: right;
    color: #333;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogBtnArea{
    height: 53px;
    width: 100%;
    padding-top: 9.5px;
    box-sizing: border-box;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-color: #f5f5f5;
    position: relative;
    clear: both;
    text-align: center;
  }
  .tipDialogBg .tipDialogWrapper .tipDialogBtnArea .buttonClassCustom{
    margin-right: 16px;
  }
  @media (max-width: 440px){
    .tipDialogBg .tipDialogWrapper{
      width: 90%;
      left: 5%;
      margin-left: 0px;
    }
  }

  /*region dark theme*/

  .dark .tipDialogBg{
    background-color: rgba(0,0,0,0.7);
  }
  .dark .tipDialogWrapper{
    box-shadow: 0 0 30px 2px rgba(0,0,0,0);
    background-color: #282746;
  }
  .dark .tipDialogWrapper .tipDialogTitleArea{}
  .dark .titleName:before{
    background-color: #02a888;
  }
  .dark .titleName{
    color: #ffffff;
  }
  .dark .closeBtn{
    color: #8b90b3;
  }
  .dark .tipDialogWrapper .tipDialogContArea{}
  .dark .tipDialogWrapper .tipDialogContArea .rightMessageCont .MessageTitle{
    color: #ffffff;
  }
  .dark .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea{
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 6px;
    color: #8b90b3;
  }
  .dark .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea .contentSession .sessionValue{
    color: #ffffff;
  }
  .dark .tipDialogWrapper .tipDialogBtnArea{
    background-color: #1e1f36;
  }

  /*endregion*/

  /*blackBg theme*/

  .blackBg .tipDialogBg{
    background-color: rgba(0,0,0,0.7);
  }
  .blackBg .tipDialogWrapper{
    box-shadow: 0 0 30px 2px rgba(255,255,255,0.2);
    background-color: #000;
  }
  .blackBg .titleName:before{
    background-color: #3399ff;
  }
  .blackBg .titleName{
    color: #eee;
  }
  .blackBg .closeBtn{
    color: #aaa;
  }
  .blackBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .MessageTitle{
    color: #ffffff;
  }
  .blackBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea{
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 6px;
    color: #aaa;
  }
  .blackBg .tipDialogWrapper .tipDialogContArea .rightMessageCont .customContArea .contentSession .sessionValue{
    color: #999;
  }
  .blackBg .tipDialogWrapper .tipDialogBtnArea{
    background-color: rgba(255,255,255,0.2);
  }

  /*endregion*/

</style>
