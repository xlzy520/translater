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
  // console.log(a,TKK);
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

// var zhtext = process.argv.splice(2).toString();
// console.log(decodeURI(zhtext));

// var tktext = process.argv.splice(3).toString();
// console.log(tktext);

// res=tk('你好', '413794.873502576');
// res=tk(decodeURI('%E5%82%BB%E9%80%BC'), '413789.1384542795');
// console.log(res);
console.log(tk('love'))
exports.b = b
exports.tk = tk
