<template>
  <div class="translate-frame">
    <div class="page">
      <div class="main-header">
        <div class="ls-wrap">
          <div class="sl-selector lang-list">
            <div class="lang-btn">
              <cube-button @click="lang_select" class="ls-select new-ls-select sl-btn">{{sl.content}}</cube-button>
            </div>
          </div><div class="swap-wrap" @click="swap">
            <div class="swap">
              <div class="swap-btn-img btn-img"></div>
            </div>
          </div><div class="tl-selector lang-list">
            <div class="lang-btn">
              <cube-button @click="lang_select" class="ls-select new-ls-select tl-btn">{{tl.content}}</cube-button>
            </div>
          </div>
        </div>
        <div class="source-wrap">
          <div class="source-input">
            <div class="source-header">
              <div class="clear-wrap lzy-btn">
                <div class="clear-btn btn-img" @click="clearInput"></div>
              </div>
              <div class="go-wrap lzy-btn">
                <div class="go-btn btn-img" @click="queryInput"></div>
              </div>
            </div>
            <div class="input-wrap">
              <textarea id="source" class="source_input" placeholder="触摸即可输入文字" rows="1" autocomplete="off"
                        v-model="sourceText" :style="{height:adapter_height+'px'}" ref="source">{{sourceText}}</textarea>
              <div class="source-transliteration-container transliteration-container">
                <div class="transliteration-content src-translit" id="src-translit">{{transliteration_content}}</div>
              </div>
            </div>
            <div class="source-footer-wrap"></div>
          </div>
        </div>
      </div>
      <div class="cllist">
        <div class="result_dict_wrapper" :style="{display: result_dict_wrapper}">
          <div class="result">
            <div class="result_header"></div>
            <div class="text_wrap">
              <div class="result_container">
                <span class="translation">{{translation_target}}</span>
                <span class="trans_verified_btn" role="button"></span>
              </div>
              <span class="transliteration_target">{{transliteration_target}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-history"></div>
    </div>
    <div class="page" style="display: none"></div>
    <div class="page" style="display: none"></div>
  </div>
</template>

<script>
  import tk from '../utils/Gettk'
  import axios from 'axios'
  export default {
    name: 'translate',
    data () {
      return {
        adapter_height:'32',

        sourceText: '',//输入的文字
        transliteration_content:'',
        translation_target:'',
        transliteration_target: '',

        sl: {content: '中文', active: 0,abbr:'zh-CN'},
        tl: {content: '日语', active: 2,abbr:'ja'},

        result_dict_wrapper:'none'
      }
    },
    methods: {
      lang_select (e) {
        let arg
        if (e.target.className.indexOf('sl-btn') !== -1) {
          arg = this.sl
        } else {
          arg = this.tl
        }
        this.$createActionSheet({
          title: '选择语言',
          active: arg.active,
          data: [
            {
              content: '中文',
              abbr:'zh-CN'
            },
            {
              content: '英语',
              abbr:'en'
            },
            {
              content: '日语',
              abbr:'ja'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `选择${item.content},第${index + 1}个`,
              type: 'correct',
              time: 500
            }).show()
            arg.content = item.content
            arg.active = index
            arg.abbr=item.abbr
          },
          onCancel: () => {
            this.$createToast({
              txt: ``,
              type: `warn`,
              time: 500
            })
          }
        }).show()
      },
      swap () {
        [this.sl, this.tl] = [this.tl, this.sl]
      },
      clearInput () {
        this.result_dict_wrapper='none'
        this.sourceText = null
        this.transliteration_content=null
        this.transliteration_target=null
        this.translation_target=null
      },
      queryInput () {
        if(this.sourceText==null){
          return
        }
        axios.get('/api?client=t&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&' +
          'ie=UTF-8&oe=UTF-8&source=btn&ssel=0&tsel=0&kc=0',
          {
            params:{
              sl:this.sl.abbr,
              tl:this.tl.abbr,
              tk:tk.tk(this.sourceText),
              q:this.sourceText,
            }
          }).then((data)=>{
          this.translation_target=data.data[0][0][0]
          this.transliteration_content=data.data[0][1][3]
          this.transliteration_target=data.data[0][1][2]
          this.result_dict_wrapper='block'
        })

      },
    },
    watch:{
      sourceText:function () {
        this.queryInput()
        this.$refs.source.style.height=this.$refs.source.scrollTop+this.$refs.source.scrollHeight+'px'
        // document.getElementById('source').style.height=document.getElementById('source').scrollTop+
        //   document.getElementById('source').scrollHeight+'px'
        // console.log(document.getElementById('source').style.height);
        // console.log(e.indexOf('\n'))
      }
    }
  }
</script>

<style lang="stylus">
  textarea {
    background-image none
    border-radius 0
  }

  .translate-frame {
    width 100%
    .btn-img {
      background-image url('../assets/1x_mobile.png')
      height 24px
      width 24px
      display inline-block
      background-repeat no-repeat
    }
    .page {
      height 100%
      width 100%
      position relative
      .translation {
        font-size: 16px;
        padding-right: 8px;
        min-height: 20px;
        line-height: 20px;
      }
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
              .cube-btn {
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
          position relative
          .source-input {
            position relative
            background-color #fff
            padding 16px 0 10px 0
            z-index 0
            .source-header {
              position absolute
              right 12px
              z-index 1
              padding-left 16px
              .clear-wrap {
                display inline-block
                float right
                .clear-btn {
                  background-position: 0 -192px;
                  opacity: .55 !important;
                  margin-top: 0;
                }
              }
              .go-wrap {
                display inline-block
                float: right
                line-height 24px
                box-shadow 0 1px 2px rgba(0, 0, 0, .54)
                background-color #4285f4
                margin-right 24px
                .go-btn {
                  background-position: 0 -72px;
                  margin-left: 0;
                  vertical-align: bottom;
                }
              }
              .lzy-btn {
                border 0
                border-radius 50%
                width 24px
                height 24px
                min-width 24px
              }
            }
          }
          .input-wrap {
            position relative
            margin-bottom 12px
            #src-translit {
              color: #777;
              direction: ltr;
              font-family: inherit;
              font-size: 14px;
              padding: 0 48px 0 16px;
              white-space: pre-wrap;
            }
            .source_input {
              word-wrap break-word
              width 100%
              border none
              border-color #ddd
              font-family 'Roboto', arial, sans-serif
              color #333
              margin-top -4px
              outline none
              resize none
              padding-left 16px
              font-size 23px
              padding-right 90px
              min-height 31px
              box-sizing border-box
              overflow-x hidden
              overflow-y hidden
            }
          }
        }
      }
      .cllist {
        padding-top 8px
        padding-bottom 24px
        .result_dict_wrapper {
          box-shadow 0 1px 4px 0 rgba(0, 0, 0, 0.37)
          .translation {
            color #fff
            white-space pre-wrap
            font-size 23px
            line-height normal
          }
          .result {
            background-color #4285f4
            padding 16px 16px 16px 16px
            position: relative
            min-height: 96px
            .text_wrap {
              min-height: 18px
              .result_container {
                .translation {
                  padding 0 8px 0 0
                }
                .trans_verified_btn {

                }
              }
              .transliteration_target {
                color #c6dafc
                direction ltr
                display block
                font-family inherit
                font-size 14px
                padding-right 32px
                white-space pre-wrap
              }
            }
          }
        }
      }
    }
  }
</style>
