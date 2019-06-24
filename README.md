# translater
仿造谷歌翻译手机版，调用的也是谷歌的接口，通过计算谷歌token算法获取tk，反向代理解决跨域

# 如何获取Google翻译API校验tk
`utils/Gettk.js`
```javascript
var b = function (a, b) {
  for (var d = 0; d < b.length - 2; d += 3) {
    var c = b.charAt(d + 2),
      c = c >= 'a' ? c.charCodeAt(0) - 87 : Number(c),
      c = b.charAt(d + 1) == '+' ? a >>> c : a << c
    a = b.charAt(d) == '+' ? a + c & 4294967295 : a ^ c
  }
  return a
}

var tk = function (a) {
  let TKK = eval('((function(){var a\x3d1654874418;var b\x3d2044911403;return 420120+\x27.\x27+(a+b)})())')
  for (var e = TKK.split('.'), h = Number(e[0]) || 0, g = [], d = 0, f = 0; f < a.length; f++) {
    var c = a.charCodeAt(f)
    c < 128 ? g[d++] = c : (c < 2048 ? g[d++] = c >> 6 | 192 : ((c & 64512) == 55296 && f + 1 < a.length && (a.charCodeAt(f + 1) & 64512) == 56320 ? (c = 65536 + ((c & 1023) << 10) + (a.charCodeAt(++f) & 1023), g[d++] = c >> 18 | 240, g[d++] = c >> 12 & 63 | 128) : g[d++] = c >> 12 | 224, g[d++] = c >> 6 & 63 | 128), g[d++] = c & 63 | 128)
  }
  a = h
  for (d = 0; d < g.length; d++) a += g[d], a = b(a, '+-a^+6')
  a = b(a, '+-3^+b+-f')
  a ^= Number(e[1]) || 0
  a < 0 && (a = (a & 2147483647) + 2147483648)
  a %= 1E6
  return a.toString() + '.' + (a ^ h)
}
exports.b = b
exports.tk = tk

```

# 如何使用
```javascript
import tk from '../utils/Gettk'
  axios.get('/api?client=t&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&' +
          'ie=UTF-8&oe=UTF-8&source=btn&ssel=0&tsel=0&kc=0',
          {
            params:{
              sl:this.sl.abbr,//source language， for example：en，zh-CN（中文），ja（日语）
              tl:this.tl.abbr, // to language
              tk:tk.tk(this.sourceText),//use tk method
              q:this.sourceText,
            }
          })
```

# 代理
```
proxyTable: {
      '/api':{
        target:'https://translate.google.cn/translate_a/single',
        changeOrigin:true,
        pathRewrite:{'^/api':""}
      }
    }
```
