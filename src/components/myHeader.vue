<template>
  <div class="home-view">
    <header class="navigator" :class="{active:isactive}">
      <h1 class="logo">
        <cube-button href="#" @click="showAlert">
          <span>I ღ you</span>
        </cube-button>
      </h1>
      <div class="tabs">
       <a href="#" class="tab right router-link-exact-active router-link-active">
         <span>首页</span>
       </a>
        <a href="#" class="tab right">
          <span>文档</span>
        </a>
        <a href="#" class="tab right">
          <span>示例</span>
        </a>
        <span class="langs">
          <a href="#" class="active">中</a>
          <a href="#" class="">En</a>
        </span>
      </div>
      <span class="toggle-nav" @click="tabs_show()">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTEwNjQ5NDAxODMzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ1OTEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1MS45OTA4MTMgMTc1Ljk5MDYyNWg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyNC43NDM4MDdhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE4aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOFYyMTEuOTkwMzQ0YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXogbTAgMjg4Ljc0MTc0NGg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyMi41MTE4MjRhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE5aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOXYtMjIuNTExODI0YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXogbTAgMjg2LjUwOTc2Mmg3MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE4IDM1Ljk5OTcxOXYyNC43NDM4MDZhMzUuOTk5NzE5IDM1Ljk5OTcxOSAwIDAgMS0zNS45OTk3MTggMzUuOTk5NzE5aC03MTkuOTk0Mzc1YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEtMzUuOTk5NzE5LTM1Ljk5OTcxOXYtMjQuNzQzODA2YTM1Ljk5OTcxOSAzNS45OTk3MTkgMCAwIDEgMzUuOTk5NzE5LTM1Ljk5OTcxOXoiIHAtaWQ9IjQ1OTIiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4=">
      </span>
    </header>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
    return {
      isactive: false,
      title: '汉译日'
    }
  },
  methods: {
    tabs_show: function () {
      this.isactive = this.isactive !== true
    },
    showAlert: function () {
      this.$createDialog({
        type: 'alert',
        title: '我是标题',
        content: '我是内容',
        icon: 'cubeic-alert'
      }).show()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  my_blue=#1296db
  didi_color=#fc9153;
  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, input, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin 0;
    padding 0;
    border 0;
    font-size 100%;
    font-weight 400;
    vertical-align baseline;
  }
  h1, h2 {
    font-weight normal;
  }
  ul {
    list-style-type none;
    padding 0;
  }
  li {
    display inline-block;
    margin 0 10px;
  }
  a {
    color didi_color;
  }

  .home-view {
    height 100%
    padding-top: 70px
    box-sizing border-box;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;

    .navigator{
      height 64px
      opacity 0.9
      line-height 62px;
      margin-top: -70px
      background-color #96D9E4;
      -webkit-transition all .3s ease;
      transition all .3s ease;
      overflow hidden;

      .logo{
        float left;
        background-color #fc9153;
        .cube-btn{
          display inline-block;
          padding 0 28px;
          color #fff;
          font-size 20px;
          &:before{
            content "";
            display inline-block;
            background url('../assets/翻译1.png') no-repeat;
            background-position center
            width 64px;
            height 64px;
            margin-right 10px;
            vertical-align middle;
          }
          span{
            color my_blue
            vertical-align middle;
          }
        }
      }
      .tabs{
        background-color #4a4c5b
        float right;
        padding 0 30px;
        -webkit-transition all .25s ease;
        transition all .25s ease;
        .tab{
          display: inline-block;
          margin: 0 10px;
          color: #fff;
          -webkit-transition: color .2s;
          transition: color .2s;
          &:hover{
            color didi_color
          }
        }
        .router-link-active{
          color didi_color
        }
        .langs{
          display: inline-block;
          margin: 0 20px;
          .active {
            color: didi_color
          }
          a{
            color #fff
            &:after{
              content: "/";
              padding: 0 5px;
            }
            &:hover{
              color didi_color
            }
          }

        }
      }
      .toggle-nav{
        display none;
      }
      @media screen and (max-width 960px){
        .logo {
          float none;
          background-color transparent;
          text-align center;
          a {
            display inline-block;
          }
        }
        .tabs{
          float none;
          padding 0;
          border-top 1px solid hsla(0,0%,100%,.5);
          .tab{
            display: block;
            line-height: 45px;
            margin: 0 20px;
          }
          .langs{
            display: block;
            line-height: 45px;
            margin: 0 20px;
          }
        }
        .toggle-nav{
          display -webkit-box;
          display flex;
          position absolute;
          left 10px;
          top 0;
          width 40px;
          height 64px;
          -webkit-box-align center;
          align-items center;
          -webkit-box-pack center;
          justify-content center;
        }
      }
    }

    .active{
      height 243px
    }
  }
</style>
