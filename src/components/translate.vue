<template>
  <div class="translate-frame">
    <div class="page">
      <div class="main-header">
        <div class="ls-wrap">
          <div class="sl-selector lang-list">
            <div class="lang-btn">

              <cube-button @click="showActive" class="ls-select new-ls-select sl-btn">中文</cube-button>
            </div>
          </div><div class="swap-wrap"><div class="swap"><div class="swap-btn-img"></div></div>
        </div><div class="tl-selector lang-list">
            <div class="lang-btn">
              <a class="ls-select new-ls-select">日语</a>
            </div>
          </div>
        </div>
        <div class="source-wrap"></div>
      </div>
      <div class="clist"></div>
      <div class="footer-history"></div>
    </div>
    <div class="page" style="display: none"></div>
    <div class="page" style="display: none"></div>
  </div>
</template>

<script>
    export default {
      name: 'translate',
      data () {
        return {}
      },
      methods: {
        showActive () {
          this.$createActionSheet({
            title: '选择语言',
            active: 0,
            data: [
              {
                content: '中文'
              },
              {
                content: '英语'
              },
              {
                content: '日语'
              }
            ],
            onSelect: (item, index) => {
              this.$createToast({
                txt: `Clicked${item.content},第${index + 1}个`,
                type: 'warn',
                time: 1000
              }).show()
            },
            onCancel: () => {
              this.$createToast({
                txt: `Clicked Canceled`,
                type: `warn`,
                time: 1000
              }).show()
            }
          }).show()
        }
      }
    }
</script>

<style lang="stylus">

  .translate-frame {
    width 100%

    .page {
      height 100%
      width 100%
      position relative

      .main-header {
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.35)

        .ls-wrap {
          border-top: 1px solid rgba(0, 0, 0, 0.12)
          border-bottom: 1px solid rgba(0, 0, 0, 0.12)
          background #fff
          box-sizing border-box
          height 48px

          .lang-list {
            display inline-block
            width 50%
            margin 0
            word-break normal
            .lang-btn {
              background-color #fff
              font-size 14px
              height 46px
              position: relative;
              .cube-btn{
                padding 0
              }
              .ls-select {
                -webkit-appearance: none;
                background-color: transparent;
                border: none;
                box-sizing: border-box;
                color: #4285f4;
                font-family: inherit;
                font-size: 16px;
                height: 47px;
                line-height: 45px;
                outline: none;
                padding-left: 16px;
                padding-right: 30px;
                position: absolute;
                width: 100%;
              }
              .new-ls-select {
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.14px;
                line-height: 48px;
                overflow-x: hidden;
                overflow-y: hidden;
                text-align: center;
                text-overflow: ellipsis;
                text-transform: uppercase;
                white-space: pre;
              }
            }



          }
          .sl-selector .lang-btn {
            margin-right 25px
          }
          .tl-selector .lang-btn {
            margin-left 25px
          }
          .swap-wrap {
            background-color #fff
            display inline-block
            margin 0 -25px
            vertical-align top

            .swap {
              white-space: nowrap;
              background-color #fff
              width 50px
              height 46px
              line-height 48px
              cursor pointer
              transition all 0.4s
              min-width 34px
              text-align center
              .swap-btn-img {
                background-image  -webkit-image-set(url('../assets/1x_mobile.png') 1x,
                url('../assets/2x_mobile.png') 2x)
                height 24px
                width 24px
                display inline-block
                background-repeat no-repeat
                background-position 0 -48px
                opacity 0.55
                user-select none
                vertical-align middle
                margin-top -3px
              }
            }
          }
        }
        .source-wrap {

        }
      }
    }
  }
</style>
