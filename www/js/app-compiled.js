function e(a) {
  throw a;
}
var h = void 0, k = !0, l = null, p = !1;
function aa() {
  return function() {
  }
}
function ba(a) {
  return function(b) {
    this[a] = b
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function r(a) {
  return function() {
    return a
  }
}
var u, ca = ca || {}, x = this;
function da() {
}
function ea(a) {
  a.ja = function() {
    return a.Hf ? a.Hf : a.Hf = new a
  }
}
function fa(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ga(a) {
  return a !== h
}
function y(a) {
  return"array" == fa(a)
}
function ha(a) {
  var b = fa(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function z(a) {
  return"string" == typeof a
}
function ia(a) {
  return"number" == typeof a
}
function ja(a) {
  return"function" == fa(a)
}
function ka(a) {
  var b = typeof a;
  return"object" == b && a != l || "function" == b
}
function la(a) {
  return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + (1E9 * Math.random() >>> 0), na = 0;
function pa(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function qa(a, b, c) {
  a || e(Error());
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function ra(a, b, c) {
  ra = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
  return ra.apply(l, arguments)
}
function sa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
}
var ta = Date.now || function() {
  return+new Date
};
function A(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.b = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ua(a, b) {
  a != l && this.append.apply(this, arguments)
}
u = ua.prototype;
u.F = "";
u.set = function(a) {
  this.F = "" + a
};
u.append = function(a, b, c) {
  this.F += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.F += arguments[d]
    }
  }
  return this
};
u.clear = function() {
  this.F = ""
};
u.toString = q("F");
var va = {}, wa = {};
var xa;
function ya(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
function Aa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function Ba(a) {
  if(!Ca.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(Da, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(Ea, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(Fa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Ga, "&quot;"));
  return a
}
var Da = /&/g, Ea = /</g, Fa = />/g, Ga = /\"/g, Ca = /[&<>\"]/;
function Ha(a) {
  var b = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, c = document.createElement("div");
  return a.replace(Ia, function(a, f) {
    var g = b[a];
    if(g) {
      return g
    }
    if("#" == f.charAt(0)) {
      var m = Number("0" + f.substr(1));
      isNaN(m) || (g = String.fromCharCode(m))
    }
    g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = g
  })
}
function Ja(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"&";
      case "lt":
        return"<";
      case "gt":
        return">";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if(!isNaN(d)) {
            return String.fromCharCode(d)
          }
        }
        return a
    }
  })
}
var Ia = /&([^;\s<&]+);?/g;
var B = Array.prototype, Ka = B.indexOf ? function(a, b, c) {
  return B.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(z(a)) {
    return!z(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, La = B.forEach ? function(a, b, c) {
  B.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = z(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && b.call(c, f[g], g, a)
  }
}, Ma = B.filter ? function(a, b, c) {
  return B.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = [], g = 0, m = z(a) ? a.split("") : a, n = 0;n < d;n++) {
    if(n in m) {
      var s = m[n];
      b.call(c, s, n, a) && (f[g++] = s)
    }
  }
  return f
}, Na = B.map ? function(a, b, c) {
  return B.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = Array(d), g = z(a) ? a.split("") : a, m = 0;m < d;m++) {
    m in g && (f[m] = b.call(c, g[m], m, a))
  }
  return f
}, Oa = B.every ? function(a, b, c) {
  return B.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = z(a) ? a.split("") : a, g = 0;g < d;g++) {
    if(g in f && !b.call(c, f[g], g, a)) {
      return p
    }
  }
  return k
};
function Pa(a) {
  var b;
  a: {
    b = Qa;
    for(var c = a.length, d = z(a) ? a.split("") : a, f = 0;f < c;f++) {
      if(f in d && b.call(h, d[f], f, a)) {
        b = f;
        break a
      }
    }
    b = -1
  }
  return 0 > b ? l : z(a) ? a.charAt(b) : a[b]
}
function Ra(a, b) {
  return 0 <= Ka(a, b)
}
function Sa(a, b) {
  var c = Ka(a, b), d;
  (d = 0 <= c) && B.splice.call(a, c, 1);
  return d
}
function Ta(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Ua(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], f;
    if(y(d) || (f = ha(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d)
    }else {
      if(f) {
        for(var g = a.length, m = d.length, n = 0;n < m;n++) {
          a[g + n] = d[n]
        }
      }else {
        a.push(d)
      }
    }
  }
}
function Va(a, b, c, d) {
  B.splice.apply(a, Wa(arguments, 1))
}
function Wa(a, b, c) {
  return 2 >= arguments.length ? B.slice.call(a, b) : B.slice.call(a, b, c)
}
;function Xa(a) {
  a = a.className;
  return z(a) && a.match(/\S+/g) || []
}
function Ya(a, b) {
  for(var c = Xa(a), d = Wa(arguments, 1), f = c.length + d.length, g = c, m = 0;m < d.length;m++) {
    Ra(g, d[m]) || g.push(d[m])
  }
  a.className = c.join(" ");
  return c.length == f
}
function Za(a, b) {
  var c = Xa(a), d = Wa(arguments, 1), f = $a(c, d);
  a.className = f.join(" ");
  return f.length == c.length - d.length
}
function $a(a, b) {
  return Ma(a, function(a) {
    return!Ra(b, a)
  })
}
;function ab(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function bb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function cb(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
function db(a, b, c) {
  b in a && e(Error('The object already contains the key "' + b + '"'));
  a[b] = c
}
var eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function fb(a, b) {
  for(var c, d, f = 1;f < arguments.length;f++) {
    d = arguments[f];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < eb.length;g++) {
      c = eb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
function gb(a) {
  var b = arguments.length;
  if(1 == b && y(arguments[0])) {
    return gb.apply(l, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = k
  }
  return c
}
;var hb, ib, jb, kb, lb, mb;
function nb() {
  return x.navigator ? x.navigator.userAgent : l
}
function ob() {
  return x.navigator
}
kb = jb = ib = hb = p;
var pb;
if(pb = nb()) {
  var qb = ob();
  hb = 0 == pb.lastIndexOf("Opera", 0);
  ib = !hb && (-1 != pb.indexOf("MSIE") || -1 != pb.indexOf("Trident"));
  jb = !hb && -1 != pb.indexOf("WebKit");
  kb = !hb && !jb && !ib && "Gecko" == qb.product
}
var rb = hb, C = ib, D = kb, E = jb, sb, tb = ob();
sb = tb && tb.platform || "";
lb = -1 != sb.indexOf("Mac");
mb = -1 != sb.indexOf("Win");
var ub = !!ob() && -1 != (ob().appVersion || "").indexOf("X11");
function vb() {
  var a = x.document;
  return a ? a.documentMode : h
}
var wb;
a: {
  var xb = "", yb;
  if(rb && x.opera) {
    var zb = x.opera.version, xb = "function" == typeof zb ? zb() : zb
  }else {
    if(D ? yb = /rv\:([^\);]+)(\)|;)/ : C ? yb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : E && (yb = /WebKit\/(\S+)/), yb) {
      var Ab = yb.exec(nb()), xb = Ab ? Ab[1] : ""
    }
  }
  if(C) {
    var Bb = vb();
    if(Bb > parseFloat(xb)) {
      wb = String(Bb);
      break a
    }
  }
  wb = xb
}
var Cb = {};
function F(a) {
  var b;
  if(!(b = Cb[a])) {
    b = 0;
    for(var c = Aa(String(wb)).split("."), d = Aa(String(a)).split("."), f = Math.max(c.length, d.length), g = 0;0 == b && g < f;g++) {
      var m = c[g] || "", n = d[g] || "", s = RegExp("(\\d*)(\\D*)", "g"), v = RegExp("(\\d*)(\\D*)", "g");
      do {
        var t = s.exec(m) || ["", "", ""], w = v.exec(n) || ["", "", ""];
        if(0 == t[0].length && 0 == w[0].length) {
          break
        }
        b = ((0 == t[1].length ? 0 : parseInt(t[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == t[1].length ? 0 : parseInt(t[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == t[2].length) < (0 == w[2].length) ? -1 : (0 == t[2].length) > (0 == w[2].length) ? 1 : 0) || (t[2] < w[2] ? -1 : t[2] > w[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Cb[a] = 0 <= b
  }
  return b
}
function Db(a) {
  return C && Eb >= a
}
var Hb = x.document, Eb = !Hb || !C ? h : vb() || ("CSS1Compat" == Hb.compatMode ? parseInt(wb, 10) : 5);
function G(a, b) {
  this.width = a;
  this.height = b
}
function Ib(a, b) {
  return a == b ? k : !a || !b ? p : a.width == b.width && a.height == b.height
}
G.prototype.pa = function() {
  return new G(this.width, this.height)
};
G.prototype.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
G.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
G.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var Jb = !C || Db(9), Kb = !D && !C || C && Db(9) || D && F("1.9.1"), Lb = C && !F("9");
function H(a, b) {
  this.x = ga(a) ? a : 0;
  this.y = ga(b) ? b : 0
}
H.prototype.pa = function() {
  return new H(this.x, this.y)
};
function Mb(a, b) {
  return new H(a.x - b.x, a.y - b.y)
}
H.prototype.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this
};
H.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
H.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function I(a) {
  return a ? new Nb(J(a)) : xa || (xa = new Nb)
}
function K(a) {
  return z(a) ? document.getElementById(a) : a
}
function Ob(a) {
  var b = document;
  b.querySelectorAll && b.querySelector ? a = b.querySelector("." + a) : (b = document, a = (b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : b.getElementsByClassName ? b.getElementsByClassName(a) : Pb(document, "*", a, h))[0]);
  return a || l
}
function Pb(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      d = {};
      for(var f = 0, g = 0, m;m = a[g];g++) {
        b == m.nodeName && (d[f++] = m)
      }
      d.length = f;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(g = f = 0;m = a[g];g++) {
      b = m.className, "function" == typeof b.split && Ra(b.split(/\s+/), c) && (d[f++] = m)
    }
    d.length = f;
    return d
  }
  return a
}
function Qb(a, b) {
  ab(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Rb ? a.setAttribute(Rb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Rb = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Sb(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new G(a.clientWidth, a.clientHeight)
}
function Tb(a) {
  return!E && "CSS1Compat" == a.compatMode ? a.documentElement : a.body || a.documentElement
}
function Ub(a, b, c) {
  return Vb(document, arguments)
}
function Vb(a, b) {
  var c = b[0], d = b[1];
  if(!Jb && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', Ba(d.name), '"');
    if(d.type) {
      c.push(' type="', Ba(d.type), '"');
      var f = {};
      fb(f, d);
      delete f.type;
      d = f
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (z(d) ? c.className = d : y(d) ? Ya.apply(l, [c].concat(d)) : Qb(c, d));
  2 < b.length && Wb(a, c, b, 2);
  return c
}
function Wb(a, b, c, d) {
  function f(c) {
    c && b.appendChild(z(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    if(ha(g) && !(ka(g) && 0 < g.nodeType)) {
      var m;
      a: {
        if(g && "number" == typeof g.length) {
          if(ka(g)) {
            m = "function" == typeof g.item || "string" == typeof g.item;
            break a
          }
          if(ja(g)) {
            m = "function" == typeof g.item;
            break a
          }
        }
        m = p
      }
      La(m ? Ta(g) : g, f)
    }else {
      f(g)
    }
  }
}
function Xb(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
}
function Yb(a) {
  var b = document.body;
  b.insertBefore(a, b.childNodes[0] || l)
}
function Zb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : l
}
function $b(a) {
  return Kb && a.children != h ? a.children : Ma(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function ac(a) {
  if(a.firstElementChild != h) {
    a = a.firstElementChild
  }else {
    for(a = a.firstChild;a && 1 != a.nodeType;) {
      a = a.nextSibling
    }
  }
  return a
}
function bc(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
}
function J(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function cc(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(3 == a.nodeType) {
      a.data = b
    }else {
      if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild)
        }
        a.firstChild.data = b
      }else {
        Xb(a), a.appendChild(J(a).createTextNode(String(b)))
      }
    }
  }
}
var dc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, ec = {IMG:" ", BR:"\n"};
function fc(a) {
  a = a.getAttributeNode("tabindex");
  return a != l && a.specified
}
function gc(a) {
  a = a.tabIndex;
  return ia(a) && 0 <= a && 32768 > a
}
function hc(a) {
  if(Lb && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    ic(a, b, k);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Lb || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
}
function jc(a) {
  var b = [];
  ic(a, b, p);
  return b.join("")
}
function ic(a, b, c) {
  if(!(a.nodeName in dc)) {
    if(3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in ec) {
        b.push(ec[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          ic(a, b, c), a = a.nextSibling
        }
      }
    }
  }
}
function kc(a) {
  try {
    return a && a.activeElement
  }catch(b) {
  }
  return l
}
function Nb(a) {
  this.k = a || x.document || document
}
u = Nb.prototype;
u.e = I;
function lc(a) {
  return a.k
}
u.a = function(a) {
  return z(a) ? this.k.getElementById(a) : a
};
u.f = function(a, b, c) {
  return Vb(this.k, arguments)
};
u.createElement = function(a) {
  return this.k.createElement(a)
};
u.createTextNode = function(a) {
  return this.k.createTextNode(String(a))
};
function mc(a) {
  return"CSS1Compat" == a.k.compatMode
}
function nc(a) {
  var b = a.k;
  a = Tb(b);
  b = b.parentWindow || b.defaultView;
  return C && F("10") && b.pageYOffset != a.scrollTop ? new H(a.scrollLeft, a.scrollTop) : new H(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
u.ee = function(a) {
  return kc(a || this.k)
};
u.appendChild = function(a, b) {
  a.appendChild(b)
};
u.append = function(a, b) {
  Wb(J(a), a, arguments, 1)
};
u.removeNode = Zb;
u.Mb = $b;
u.vf = ac;
u.contains = bc;
u.Ja = function(a) {
  var b;
  (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!fc(a) || gc(a)) : fc(a) && gc(a)) && C ? (a = ja(a.getBoundingClientRect) ? a.getBoundingClientRect() : {height:a.offsetHeight, width:a.offsetWidth}, a = a != l && 0 < a.height && 0 < a.width) : a = b;
  return a
};
function oc(a, b) {
  var c;
  c = b || pc;
  c = '\t<div id="split-container" class="goog-splitpane"><div class="goog-splitpane-first-container"><img src="' + qc(c.Bh) + '" id="anotation-img" class="img-full"></div><div class="goog-splitpane-second-container"><h2><a href=\'/dir/' + qc(c.dir) + "'>" + qc(c.dir) + "</a>/" + qc(c.file) + " (" + qc(c.position) + ")</h2><h6>user " + qc(c.We) + ' | <span id="timer"></span> |<a href="/help" target="_blank">help</a> | <a href=\'/login\'>log out</a></h6><div id="tree-container" style="width:400px"></div><br><input type="text" id="main-input" class="form-control" placeholder="Add new text"><a href="#" id="more-options-show">More options</a> <small>&copy; &reg; &trade;</small><div class="well hide" id="more-options"><div id="char-picker"></div><textarea id="notes" placeholder="Notes" class="form-control" rows="3">' + 
  (c.Sf ? qc(c.Sf) : "") + '</textarea><div class="checkbox"><label><input type="checkbox" ' + (c.Og ? "checked" : "") + ' id="dontUnderstandLanguage">I don\'t understand the language in the picture</label><br><label><input type="checkbox" ' + (c.Ph ? "checked" : "") + ' id="noText">No text</label></div></div><center><div id="save-buttons" class="btn-group"><input type="button" id="prev" value="< Previous" class="btn btn-default"><input type="button" id="save" value="Save"  class="btn btn-default"><input type="button" id="next" value="Next >"  class="btn btn-default"></div></center></div><div class="goog-splitpane-handle"></div></div>';
  a.innerHTML = rc(c)
}
function rc(a) {
  if(!ka(a)) {
    return String(a)
  }
  if(p) {
    if(a.Xd === va) {
      return a.content
    }
    if(a.Xd === wa) {
      return Ba(a.content)
    }
  }
  return"zSoyz"
}
var pc = {};
C && F(8);
function qc(a) {
  return a && a.Xd && a.Xd === va ? a.content : String(a).replace(sc, tc)
}
var uc = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function tc(a) {
  return uc[a]
}
var sc = /[\x00\x22\x26\x27\x3c\x3e]/g;
function wc(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
u = wc.prototype;
u.pa = function() {
  return new wc(this.top, this.right, this.bottom, this.left)
};
u.contains = function(a) {
  return!this || !a ? p : a instanceof wc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
u.expand = function(a, b, c, d) {
  ka(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
function xc(a, b) {
  var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0, d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
  return Math.sqrt(c * c + d * d)
}
u.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this
};
u.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
u.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function yc(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
u = yc.prototype;
u.pa = function() {
  return new yc(this.left, this.top, this.width, this.height)
};
function zc(a) {
  return new wc(a.top, a.left + a.width, a.top + a.height, a.left)
}
u.If = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if(b <= c) {
    var d = Math.max(this.top, a.top);
    a = Math.min(this.top + this.height, a.top + a.height);
    if(d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, k
    }
  }
  return p
};
u.contains = function(a) {
  return a instanceof yc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
u.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this
};
u.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
u.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function Ac(a, b) {
  var c = J(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, l)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Bc(a, b) {
  return Ac(a, b) || (a.currentStyle ? a.currentStyle[b] : l) || a.style && a.style[b]
}
function Cc(a) {
  return Bc(a, "position")
}
function Dc(a, b, c) {
  var d, f = D && (lb || ub) && F("1.9");
  b instanceof H ? (d = b.x, b = b.y) : (d = b, b = c);
  a.style.left = Ec(d, f);
  a.style.top = Ec(b, f)
}
function Fc(a) {
  return new H(a.offsetLeft, a.offsetTop)
}
function Gc(a) {
  a = a ? J(a) : document;
  return C && !Db(9) && !mc(I(a)) ? a.body : a.documentElement
}
function Hc(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  }catch(c) {
    return{left:0, top:0, right:0, bottom:0}
  }
  C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function Ic(a) {
  if(C && !Db(8)) {
    return a.offsetParent
  }
  var b = J(a), c = Bc(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = Bc(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return l
}
function Jc(a) {
  for(var b = new wc(0, Infinity, Infinity, 0), c = I(a), d = c.k.body, f = c.k.documentElement, g = Tb(c.k);a = Ic(a);) {
    if((!C || 0 != a.clientWidth) && (!E || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != Bc(a, "overflow")) {
      var m = Kc(a), n;
      n = a;
      if(D && !F("1.9")) {
        var s = parseFloat(Ac(n, "borderLeftWidth"));
        if(Lc(n)) {
          var v = n.offsetWidth - n.clientWidth - s - parseFloat(Ac(n, "borderRightWidth")), s = s + v
        }
        n = new H(s, parseFloat(Ac(n, "borderTopWidth")))
      }else {
        n = new H(n.clientLeft, n.clientTop)
      }
      m.x += n.x;
      m.y += n.y;
      b.top = Math.max(b.top, m.y);
      b.right = Math.min(b.right, m.x + a.clientWidth);
      b.bottom = Math.min(b.bottom, m.y + a.clientHeight);
      b.left = Math.max(b.left, m.x)
    }
  }
  d = g.scrollLeft;
  g = g.scrollTop;
  b.left = Math.max(b.left, d);
  b.top = Math.max(b.top, g);
  c = Sb(c.k.parentWindow || c.k.defaultView || window);
  b.right = Math.min(b.right, d + c.width);
  b.bottom = Math.min(b.bottom, g + c.height);
  return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : l
}
function Mc(a, b, c) {
  var d = Kc(a), f = Kc(b), g = Nc(b), m = d.x - f.x - g.left, d = d.y - f.y - g.top, f = b.clientWidth - a.offsetWidth;
  a = b.clientHeight - a.offsetHeight;
  g = b.scrollLeft;
  b = b.scrollTop;
  c ? (g += m - f / 2, b += d - a / 2) : (g += Math.min(m, Math.max(m - f, 0)), b += Math.min(d, Math.max(d - a, 0)));
  return new H(g, b)
}
function Kc(a) {
  var b, c = J(a), d = Bc(a, "position"), f = D && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), g = new H(0, 0), m = Gc(c);
  if(a == m) {
    return g
  }
  if(a.getBoundingClientRect) {
    b = Hc(a), a = nc(I(c)), g.x = b.left + a.x, g.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !f) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(m), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY
    }else {
      b = a;
      do {
        g.x += b.offsetLeft;
        g.y += b.offsetTop;
        b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
        if(E && "fixed" == Cc(b)) {
          g.x += c.body.scrollLeft;
          g.y += c.body.scrollTop;
          break
        }
        b = b.offsetParent
      }while(b && b != a);
      if(rb || E && "absolute" == d) {
        g.y -= c.body.offsetTop
      }
      for(b = a;(b = Ic(b)) && b != c.body && b != m;) {
        if(g.x -= b.scrollLeft, !rb || "TR" != b.tagName) {
          g.y -= b.scrollTop
        }
      }
    }
  }
  return g
}
function Oc(a) {
  var b;
  if(a.getBoundingClientRect) {
    b = Hc(a), b = new H(b.left, b.top)
  }else {
    b = nc(I(a));
    var c = Kc(a);
    b = new H(c.x - b.x, c.y - b.y)
  }
  if(D && !F(12)) {
    var d;
    C ? d = "-ms-transform" : E ? d = "-webkit-transform" : rb ? d = "-o-transform" : D && (d = "-moz-transform");
    var f;
    d && (f = Bc(a, d));
    f || (f = Bc(a, "transform"));
    f ? (a = f.match(Pc), a = !a ? new H(0, 0) : new H(parseFloat(a[1]), parseFloat(a[2]))) : a = new H(0, 0);
    a = new H(b.x + a.x, b.y + a.y)
  }else {
    a = b
  }
  return a
}
function Qc(a) {
  if(1 == a.nodeType) {
    return Oc(a)
  }
  var b = ja(a.Tg), c = a;
  a.targetTouches ? c = a.targetTouches[0] : b && a.U.targetTouches && (c = a.U.targetTouches[0]);
  return new H(c.clientX, c.clientY)
}
function Ec(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function Rc(a, b) {
  a.style.height = Ec(b, k)
}
function Sc(a) {
  var b = Tc;
  if("none" != Bc(a, "display")) {
    return b(a)
  }
  var c = a.style, d = c.display, f = c.visibility, g = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  a = b(a);
  c.display = d;
  c.position = g;
  c.visibility = f;
  return a
}
function Tc(a) {
  var b = a.offsetWidth, c = a.offsetHeight, d = E && !b && !c;
  return(!ga(b) || d) && a.getBoundingClientRect ? (a = Hc(a), new G(a.right - a.left, a.bottom - a.top)) : new G(b, c)
}
function Uc(a) {
  var b = Kc(a);
  a = Sc(a);
  return new yc(b.x, b.y, a.width, a.height)
}
function L(a, b) {
  a.style.display = b ? "" : "none"
}
function Lc(a) {
  return"rtl" == Bc(a, "direction")
}
var Vc = D ? "MozUserSelect" : E ? "WebkitUserSelect" : l;
function Wc(a, b, c) {
  c = !c ? a.getElementsByTagName("*") : l;
  if(Vc) {
    if(b = b ? "none" : "", a.style[Vc] = b, c) {
      a = 0;
      for(var d;d = c[a];a++) {
        d.style[Vc] = b
      }
    }
  }else {
    if(C || rb) {
      if(b = b ? "on" : "", a.setAttribute("unselectable", b), c) {
        for(a = 0;d = c[a];a++) {
          d.setAttribute("unselectable", b)
        }
      }
    }
  }
}
function Xc(a) {
  return new G(a.offsetWidth, a.offsetHeight)
}
function Yc(a, b) {
  var c = mc(I(J(a)));
  if(C && (!c || !F("8"))) {
    var d = a.style;
    if(c) {
      var c = Zc(a), f = Nc(a);
      d.pixelWidth = b.width - f.left - c.left - c.right - f.right;
      d.pixelHeight = b.height - f.top - c.top - c.bottom - f.bottom
    }else {
      d.pixelWidth = b.width, d.pixelHeight = b.height
    }
  }else {
    d = a.style, D ? d.MozBoxSizing = "border-box" : E ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(b.width, 0) + "px", d.height = Math.max(b.height, 0) + "px"
  }
}
function $c(a) {
  var b = J(a), c = C && a.currentStyle;
  if(c && mc(I(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) {
    return b = ad(a, c.width, "width", "pixelWidth"), a = ad(a, c.height, "height", "pixelHeight"), new G(b, a)
  }
  c = Xc(a);
  b = Zc(a);
  a = Nc(a);
  return new G(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
}
function ad(a, b, c, d) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var f = a.style[c], g = a.runtimeStyle[c];
  a.runtimeStyle[c] = a.currentStyle[c];
  a.style[c] = b;
  b = a.style[d];
  a.style[c] = f;
  a.runtimeStyle[c] = g;
  return b
}
function bd(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : l;
  return c ? ad(a, c, "left", "pixelLeft") : 0
}
function Zc(a) {
  if(C) {
    var b = bd(a, "paddingLeft"), c = bd(a, "paddingRight"), d = bd(a, "paddingTop");
    a = bd(a, "paddingBottom");
    return new wc(d, c, a, b)
  }
  b = Ac(a, "paddingLeft");
  c = Ac(a, "paddingRight");
  d = Ac(a, "paddingTop");
  a = Ac(a, "paddingBottom");
  return new wc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var cd = {thin:2, medium:4, thick:6};
function dd(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : l)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : l;
  return c in cd ? cd[c] : ad(a, c, "left", "pixelLeft")
}
function Nc(a) {
  if(C && !Db(9)) {
    var b = dd(a, "borderLeft"), c = dd(a, "borderRight"), d = dd(a, "borderTop");
    a = dd(a, "borderBottom");
    return new wc(d, c, a, b)
  }
  b = Ac(a, "borderLeftWidth");
  c = Ac(a, "borderRightWidth");
  d = Ac(a, "borderTopWidth");
  a = Ac(a, "borderBottomWidth");
  return new wc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Pc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function ed() {
  0 != fd && (this.ni = Error().stack, gd[la(this)] = this)
}
var fd = 0, gd = {};
ed.prototype.Lb = p;
ed.prototype.R = function() {
  if(!this.Lb && (this.Lb = k, this.g(), 0 != fd)) {
    var a = la(this);
    delete gd[a]
  }
};
ed.prototype.g = function() {
  if(this.Dc) {
    for(;this.Dc.length;) {
      this.Dc.shift()()
    }
  }
};
function hd(a) {
  a && "function" == typeof a.R && a.R()
}
;var id = "closure_listenable_" + (1E6 * Math.random() | 0);
function jd(a) {
  try {
    return!(!a || !a[id])
  }catch(b) {
    return p
  }
}
var kd = 0;
function ld(a, b, c, d, f) {
  this.rb = a;
  this.Dd = l;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.hd = f;
  this.key = ++kd;
  this.Zb = this.Vc = p
}
function md(a) {
  a.Zb = k;
  a.rb = l;
  a.Dd = l;
  a.src = l;
  a.hd = l
}
;function nd(a) {
  this.src = a;
  this.V = {};
  this.Pc = 0
}
nd.prototype.add = function(a, b, c, d, f) {
  var g = this.V[a];
  g || (g = this.V[a] = [], this.Pc++);
  var m = od(g, b, d, f);
  -1 < m ? (a = g[m], c || (a.Vc = p)) : (a = new ld(b, this.src, a, !!d, f), a.Vc = c, g.push(a));
  return a
};
nd.prototype.remove = function(a, b, c, d) {
  if(!(a in this.V)) {
    return p
  }
  var f = this.V[a];
  b = od(f, b, c, d);
  return-1 < b ? (md(f[b]), B.splice.call(f, b, 1), 0 == f.length && (delete this.V[a], this.Pc--), k) : p
};
function pd(a, b) {
  var c = b.type;
  if(!(c in a.V)) {
    return p
  }
  var d = Sa(a.V[c], b);
  d && (md(b), 0 == a.V[c].length && (delete a.V[c], a.Pc--));
  return d
}
nd.prototype.Ya = function(a) {
  var b = 0, c;
  for(c in this.V) {
    if(!a || c == a) {
      for(var d = this.V[c], f = 0;f < d.length;f++) {
        ++b, md(d[f])
      }
      delete this.V[c];
      this.Pc--
    }
  }
  return b
};
nd.prototype.uc = function(a, b, c, d) {
  a = this.V[a];
  var f = -1;
  a && (f = od(a, b, c, d));
  return-1 < f ? a[f] : l
};
function od(a, b, c, d) {
  for(var f = 0;f < a.length;++f) {
    var g = a[f];
    if(!g.Zb && g.rb == b && g.capture == !!c && g.hd == d) {
      return f
    }
  }
  return-1
}
;var qd = !C || Db(9), rd = !C || Db(9), sd = C && !F("9");
!E || F("528");
D && F("1.9b") || C && F("8") || rb && F("9.5") || E && F("528");
D && !F("8") || C && F("9");
function M(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
u = M.prototype;
u.g = aa();
u.R = aa();
u.Xa = p;
u.defaultPrevented = p;
u.ag = k;
u.stopPropagation = function() {
  this.Xa = k
};
u.preventDefault = function() {
  this.defaultPrevented = k;
  this.ag = p
};
function td(a) {
  a.stopPropagation()
}
function ud(a) {
  a.preventDefault()
}
;function vd(a) {
  vd[" "](a);
  return a
}
vd[" "] = da;
function wd(a, b) {
  a && xd(this, a, b)
}
A(wd, M);
var yd = [1, 4, 2];
u = wd.prototype;
u.target = l;
u.relatedTarget = l;
u.offsetX = 0;
u.offsetY = 0;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.button = 0;
u.keyCode = 0;
u.charCode = 0;
u.ctrlKey = p;
u.altKey = p;
u.shiftKey = p;
u.metaKey = p;
u.Ke = p;
u.U = l;
function xd(a, b, c) {
  var d = a.type = b.type;
  M.call(a, d);
  a.target = b.target || b.srcElement;
  a.currentTarget = c;
  if(c = b.relatedTarget) {
    if(D) {
      var f;
      a: {
        try {
          vd(c.nodeName);
          f = k;
          break a
        }catch(g) {
        }
        f = p
      }
      f || (c = l)
    }
  }else {
    "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement)
  }
  a.relatedTarget = c;
  a.offsetX = E || b.offsetX !== h ? b.offsetX : b.layerX;
  a.offsetY = E || b.offsetY !== h ? b.offsetY : b.layerY;
  a.clientX = b.clientX !== h ? b.clientX : b.pageX;
  a.clientY = b.clientY !== h ? b.clientY : b.pageY;
  a.screenX = b.screenX || 0;
  a.screenY = b.screenY || 0;
  a.button = b.button;
  a.keyCode = b.keyCode || 0;
  a.charCode = b.charCode || ("keypress" == d ? b.keyCode : 0);
  a.ctrlKey = b.ctrlKey;
  a.altKey = b.altKey;
  a.shiftKey = b.shiftKey;
  a.metaKey = b.metaKey;
  a.Ke = lb ? b.metaKey : b.ctrlKey;
  a.state = b.state;
  a.U = b;
  b.defaultPrevented && a.preventDefault();
  delete a.Xa
}
function zd(a) {
  return(qd ? 0 == a.U.button : "click" == a.type ? k : !!(a.U.button & yd[0])) && !(E && lb && a.ctrlKey)
}
u.stopPropagation = function() {
  wd.b.stopPropagation.call(this);
  this.U.stopPropagation ? this.U.stopPropagation() : this.U.cancelBubble = k
};
u.preventDefault = function() {
  wd.b.preventDefault.call(this);
  var a = this.U;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = p, sd) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
u.Tg = q("U");
u.g = aa();
var Ad = "closure_lm_" + (1E6 * Math.random() | 0), Bd = {}, Cd = 0;
function N(a, b, c, d, f) {
  if(y(b)) {
    for(var g = 0;g < b.length;g++) {
      N(a, b[g], c, d, f)
    }
    return l
  }
  c = Dd(c);
  return jd(a) ? a.c(b, c, d, f) : Ed(a, b, c, p, d, f)
}
function Ed(a, b, c, d, f, g) {
  b || e(Error("Invalid event type"));
  var m = !!f, n = Fd(a);
  n || (a[Ad] = n = new nd(a));
  c = n.add(b, c, d, f, g);
  if(c.Dd) {
    return c
  }
  d = Gd();
  c.Dd = d;
  d.src = a;
  d.rb = c;
  a.addEventListener ? a.addEventListener(b, d, m) : a.attachEvent(b in Bd ? Bd[b] : Bd[b] = "on" + b, d);
  Cd++;
  return c
}
function Gd() {
  var a = Hd, b = rd ? function(c) {
    return a.call(b.src, b.rb, c)
  } : function(c) {
    c = a.call(b.src, b.rb, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Id(a, b, c, d, f) {
  if(y(b)) {
    for(var g = 0;g < b.length;g++) {
      Id(a, b[g], c, d, f)
    }
    return l
  }
  c = Dd(c);
  return jd(a) ? a.ud(b, c, d, f) : Ed(a, b, c, k, d, f)
}
function O(a, b, c, d, f) {
  if(y(b)) {
    for(var g = 0;g < b.length;g++) {
      O(a, b[g], c, d, f)
    }
  }else {
    if(c = Dd(c), jd(a)) {
      a.W(b, c, d, f)
    }else {
      if(a && (a = Fd(a))) {
        (b = a.uc(b, c, !!d, f)) && Jd(b)
      }
    }
  }
}
function Jd(a) {
  if(ia(a) || !a || a.Zb) {
    return p
  }
  var b = a.src;
  if(jd(b)) {
    return pd(b.Ha, a)
  }
  var c = a.type, d = a.Dd;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Bd ? Bd[c] : Bd[c] = "on" + c, d);
  Cd--;
  (c = Fd(b)) ? (pd(c, a), 0 == c.Pc && (c.src = l, b[Ad] = l)) : md(a);
  return k
}
function Kd(a, b, c, d) {
  var f = 1;
  if(a = Fd(a)) {
    if(b = a.V[b]) {
      b = Ta(b);
      for(a = 0;a < b.length;a++) {
        var g = b[a];
        g && (g.capture == c && !g.Zb) && (f &= Ld(g, d) !== p)
      }
    }
  }
  return Boolean(f)
}
function Ld(a, b) {
  var c = a.rb, d = a.hd || a.src;
  a.Vc && Jd(a);
  return c.call(d, b)
}
function Hd(a, b) {
  if(a.Zb) {
    return k
  }
  if(!rd) {
    var c;
    if(!(c = b)) {
      a: {
        c = ["window", "event"];
        for(var d = x, f;f = c.shift();) {
          if(d[f] != l) {
            d = d[f]
          }else {
            c = l;
            break a
          }
        }
        c = d
      }
    }
    f = c;
    c = new wd(f, this);
    d = k;
    if(!(0 > f.keyCode || f.returnValue != h)) {
      a: {
        var g = p;
        if(0 == f.keyCode) {
          try {
            f.keyCode = -1;
            break a
          }catch(m) {
            g = k
          }
        }
        if(g || f.returnValue == h) {
          f.returnValue = k
        }
      }
      f = [];
      for(g = c.currentTarget;g;g = g.parentNode) {
        f.push(g)
      }
      for(var g = a.type, n = f.length - 1;!c.Xa && 0 <= n;n--) {
        c.currentTarget = f[n], d &= Kd(f[n], g, k, c)
      }
      for(n = 0;!c.Xa && n < f.length;n++) {
        c.currentTarget = f[n], d &= Kd(f[n], g, p, c)
      }
    }
    return d
  }
  return Ld(a, new wd(b, this))
}
function Fd(a) {
  a = a[Ad];
  return a instanceof nd ? a : l
}
var Md = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Dd(a) {
  return ja(a) ? a : a[Md] || (a[Md] = function(b) {
    return a.handleEvent(b)
  })
}
;function P() {
  ed.call(this);
  this.Ha = new nd(this);
  this.og = this
}
A(P, ed);
P.prototype[id] = k;
u = P.prototype;
u.Bd = l;
u.Re = ba("Bd");
u.addEventListener = function(a, b, c, d) {
  N(this, a, b, c, d)
};
u.removeEventListener = function(a, b, c, d) {
  O(this, a, b, c, d)
};
u.dispatchEvent = function(a) {
  var b, c = this.Bd;
  if(c) {
    for(b = [];c;c = c.Bd) {
      b.push(c)
    }
  }
  var c = this.og, d = a.type || a;
  if(z(a)) {
    a = new M(a, c)
  }else {
    if(a instanceof M) {
      a.target = a.target || c
    }else {
      var f = a;
      a = new M(d, c);
      fb(a, f)
    }
  }
  var f = k, g;
  if(b) {
    for(var m = b.length - 1;!a.Xa && 0 <= m;m--) {
      g = a.currentTarget = b[m], f = Nd(g, d, k, a) && f
    }
  }
  a.Xa || (g = a.currentTarget = c, f = Nd(g, d, k, a) && f, a.Xa || (f = Nd(g, d, p, a) && f));
  if(b) {
    for(m = 0;!a.Xa && m < b.length;m++) {
      g = a.currentTarget = b[m], f = Nd(g, d, p, a) && f
    }
  }
  return f
};
u.g = function() {
  P.b.g.call(this);
  !this.Ha || this.Ha.Ya(h);
  this.Bd = l
};
u.c = function(a, b, c, d) {
  return this.Ha.add(String(a), b, p, c, d)
};
u.ud = function(a, b, c, d) {
  return this.Ha.add(String(a), b, k, c, d)
};
u.W = function(a, b, c, d) {
  return this.Ha.remove(String(a), b, c, d)
};
function Nd(a, b, c, d) {
  b = a.Ha.V[String(b)];
  if(!b) {
    return k
  }
  b = Ta(b);
  for(var f = k, g = 0;g < b.length;++g) {
    var m = b[g];
    if(m && !m.Zb && m.capture == c) {
      var n = m.rb, s = m.hd || m.src;
      m.Vc && pd(a.Ha, m);
      f = n.call(s, d) !== p && f
    }
  }
  return f && d.ag != p
}
u.uc = function(a, b, c, d) {
  return this.Ha.uc(String(a), b, c, d)
};
function Od(a, b) {
  P.call(this);
  this.md = a || 1;
  this.dc = b || Pd;
  this.Vd = ra(this.ji, this);
  this.Be = ta()
}
A(Od, P);
Od.prototype.enabled = p;
var Pd = x;
u = Od.prototype;
u.B = l;
u.ji = function() {
  if(this.enabled) {
    var a = ta() - this.Be;
    0 < a && a < 0.8 * this.md ? this.B = this.dc.setTimeout(this.Vd, this.md - a) : (this.B && (this.dc.clearTimeout(this.B), this.B = l), this.dispatchEvent(Qd), this.enabled && (this.B = this.dc.setTimeout(this.Vd, this.md), this.Be = ta()))
  }
};
u.start = function() {
  this.enabled = k;
  this.B || (this.B = this.dc.setTimeout(this.Vd, this.md), this.Be = ta())
};
u.stop = function() {
  this.enabled = p;
  this.B && (this.dc.clearTimeout(this.B), this.B = l)
};
u.g = function() {
  Od.b.g.call(this);
  this.stop();
  delete this.dc
};
var Qd = "tick";
function Rd(a, b, c) {
  ja(a) ? c && (a = ra(a, c)) : a && "function" == typeof a.handleEvent ? a = ra(a.handleEvent, a) : e(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : Pd.setTimeout(a, b || 0)
}
;var Sd = {8:"backspace", 9:"tab", 13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"caps-lock", 27:"esc", 32:"space", 33:"pg-up", 34:"pg-down", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 45:"insert", 46:"delete", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:"semicolon", 61:"equals", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 
84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 93:"context", 96:"num-0", 97:"num-1", 98:"num-2", 99:"num-3", 100:"num-4", 101:"num-5", 102:"num-6", 103:"num-7", 104:"num-8", 105:"num-9", 106:"num-multiply", 107:"num-plus", 109:"num-minus", 110:"num-period", 111:"num-division", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 186:"semicolon", 187:"equals", 189:"dash", 188:",", 190:".", 191:"/", 192:"~", 219:"open-square-bracket", 
220:"\\", 221:"close-square-bracket", 222:"single-quote", 224:"win"};
function Td(a) {
  if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return p
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return p;
    case 0:
      return!D;
    default:
      return 166 > a.keyCode || 183 < a.keyCode
  }
}
function Ud(a, b, c, d, f) {
  if(!C && (!E || !F("525"))) {
    return k
  }
  if(lb && f) {
    return Vd(a)
  }
  if(f && !d) {
    return p
  }
  ia(b) && (b = Wd(b));
  if(!c && (17 == b || 18 == b || lb && 91 == b)) {
    return p
  }
  if(E && d && c) {
    switch(a) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case 188:
      ;
      case 190:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return p
    }
  }
  if(C && d && b == a) {
    return p
  }
  switch(a) {
    case 13:
      return!(C && Db(9));
    case 27:
      return!E
  }
  return Vd(a)
}
function Vd(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || E && 0 == a) {
    return k
  }
  switch(a) {
    case 32:
    ;
    case 63:
    ;
    case 107:
    ;
    case 109:
    ;
    case 110:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case 188:
    ;
    case 190:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return k;
    default:
      return p
  }
}
function Wd(a) {
  if(D) {
    a = Xd(a)
  }else {
    if(lb && E) {
      a: {
        switch(a) {
          case 93:
            a = 91;
            break a
        }
      }
    }
  }
  return a
}
function Xd(a) {
  switch(a) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 173:
      return 189;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return a
  }
}
;function Yd(a) {
  P.call(this);
  this.Kc = {};
  this.La = {Bb:[], time:0};
  this.Xg = gb(Zd);
  this.ii = gb($d);
  this.ug = k;
  this.qg = this.vg = p;
  this.Mh = k;
  this.tg = p;
  this.Ka = a;
  N(this.Ka, "keydown", this.Qb, p, this);
  lb && (D && F("1.8")) && N(this.Ka, "keyup", this.xf, p, this);
  mb && !D && (N(this.Ka, "keypress", this.Bf, p, this), N(this.Ka, "keyup", this.Cf, p, this))
}
var ae;
A(Yd, P);
var Zd = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19], $d = "color date datetime datetime-local email month number password search tel text time url week".split(" "), be = {ng:"shortcut", mg:"shortcut_"};
u = Yd.prototype;
u.o = function(a, b) {
  var c = ce, d = this.Kc, f = arguments;
  if(z(f[1])) {
    for(var f = f[1], f = f.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase(), f = f.split(" "), g = [], m, n = 0;m = f[n];n++) {
      var s = m.split("+"), v;
      m = 0;
      for(var t, w = 0;t = s[w];w++) {
        switch(t) {
          case "shift":
            m |= 1;
            continue;
          case "ctrl":
            m |= 2;
            continue;
          case "alt":
            m |= 4;
            continue;
          case "meta":
            m |= 8;
            continue
        }
        v = t;
        if(!ae) {
          s = {};
          t = h;
          for(t in Sd) {
            s[Sd[t]] = t
          }
          ae = s
        }
        v = ae[v];
        break
      }
      g.push({keyCode:v, Rf:m})
    }
    f = g
  }else {
    g = f;
    n = 1;
    y(f[1]) && (g = f[1], n = 0);
    for(f = [];n < g.length;n += 2) {
      f.push({keyCode:g[n], Rf:g[n + 1]})
    }
  }
  c(d, f, a)
};
u.g = function() {
  Yd.b.g.call(this);
  this.Kc = {};
  O(this.Ka, "keydown", this.Qb, p, this);
  lb && (D && F("1.8")) && O(this.Ka, "keyup", this.xf, p, this);
  mb && !D && (O(this.Ka, "keypress", this.Bf, p, this), O(this.Ka, "keyup", this.Cf, p, this));
  this.Ka = l
};
u.xf = function(a) {
  if(224 == a.keyCode) {
    this.Pf = k, Rd(function() {
      this.Pf = p
    }, 400, this)
  }else {
    var b = a.metaKey || this.Pf;
    if((67 == a.keyCode || 88 == a.keyCode || 86 == a.keyCode) && b) {
      a.metaKey = b, this.Qb(a)
    }
  }
};
function de(a) {
  return mb && !D && a.ctrlKey && a.altKey && !a.shiftKey
}
u.Bf = function(a) {
  32 < a.keyCode && de(a) && (this.Jf = k)
};
u.Cf = function(a) {
  !this.Jf && de(a) && this.Qb(a)
};
function ce(a, b, c) {
  var d = b.shift(), d = d.keyCode & 255 | d.Rf << 8, f = a[d];
  f && (c && (0 == b.length || z(f))) && e(Error("Keyboard shortcut conflicts with existing shortcut"));
  b.length ? (f || (f = a[d] = {}), ce(f, b, c)) : a[d] = c
}
function ee(a, b, c, d) {
  c = c || 0;
  return(d = (d || a.Kc)[b[c]]) && !z(d) && 1 < b.length - c ? ee(a, b, c + 1, d) : d
}
u.Qb = function(a) {
  var b;
  b = a.keyCode;
  if(16 == b || 17 == b || 18 == b) {
    b = p
  }else {
    var c = a.target, d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName, f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
    b = !d && !f || this.Xg[b] || this.qg ? k : f ? p : this.Mh && (a.altKey || a.ctrlKey || a.metaKey) ? k : "INPUT" == c.tagName && this.ii[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.tg ? k : 32 != b : p
  }
  if(b) {
    if("keydown" == a.type && de(a)) {
      this.Jf = p
    }else {
      b = (D ? Xd(a.keyCode) : a.keyCode) & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
      var g, m, c = ta();
      this.La.Bb.length && 1500 >= c - this.La.time ? g = ee(this, this.La.Bb) : this.La.Bb.length = 0;
      g = g ? g[b] : this.Kc[b];
      g || (g = this.Kc[b], this.La.Bb = []);
      g && z(g) ? m = g : g ? (this.La.Bb.push(b), this.La.time = c, D && a.preventDefault()) : this.La.Bb.length = 0;
      m && (this.ug && a.preventDefault(), this.vg && a.stopPropagation(), g = a.target, b = this.dispatchEvent(new fe(be.ng, m, g)), (b &= this.dispatchEvent(new fe(be.mg + m, m, g))) || a.preventDefault(), this.La.Bb.length = 0)
    }
  }
};
function fe(a, b, c) {
  M.call(this, a, c);
  this.identifier = b
}
A(fe, M);
var ge = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), he = E;
function ie(a, b) {
  if(he) {
    he = p;
    var c = x.location;
    if(c) {
      var d = c.href;
      if(d && (d = (d = ie(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        he = k, e(Error())
      }
    }
  }
  return b.match(ge)[a] || l
}
;function je(a) {
  if("function" == typeof a.Ra) {
    return a.Ra()
  }
  if(z(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return bb(a)
}
function ke(a) {
  if("function" == typeof a.Nb) {
    return a.Nb()
  }
  if("function" != typeof a.Ra) {
    if(ha(a) || z(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return cb(a)
  }
}
function le(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ha(a) || z(a)) {
      La(a, b, c)
    }else {
      for(var d = ke(a), f = je(a), g = f.length, m = 0;m < g;m++) {
        b.call(c, f[m], d && d[m], a)
      }
    }
  }
}
;function me(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  e(Error("Invalid JSON string: " + a))
}
function ne(a) {
  var b = [];
  oe(new pe, a, b);
  return b.join("")
}
function pe() {
  this.Ed = h
}
function oe(a, b, c) {
  switch(typeof b) {
    case "string":
      qe(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == l) {
        c.push("null");
        break
      }
      if(y(b)) {
        var d = b.length;
        c.push("[");
        for(var f = "", g = 0;g < d;g++) {
          c.push(f), f = b[g], oe(a, a.Ed ? a.Ed.call(b, String(g), f) : f, c), f = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (f = b[g], "function" != typeof f && (c.push(d), qe(g, c), c.push(":"), oe(a, a.Ed ? a.Ed.call(b, g, f) : f, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      e(Error("Unknown type: " + typeof b))
  }
}
var re = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, se = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function qe(a, b) {
  b.push('"', a.replace(se, function(a) {
    if(a in re) {
      return re[a]
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return re[a] = f + b.toString(16)
  }), '"')
}
;function te() {
}
te.prototype.Uc = l;
var ue;
function ve() {
}
A(ve, te);
function we(a) {
  return(a = xe(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function ye(a) {
  var b = {};
  xe(a) && (b[0] = k, b[1] = k);
  return b
}
function xe(a) {
  if(!a.Gf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Gf = d
      }catch(f) {
      }
    }
    e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.Gf
}
ue = new ve;
function ze(a, b) {
  this.S = {};
  this.w = [];
  this.Xe = this.Gb = 0;
  var c = arguments.length;
  if(1 < c) {
    c % 2 && e(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Qd(a)
  }
}
u = ze.prototype;
u.Ra = function() {
  Ae(this);
  for(var a = [], b = 0;b < this.w.length;b++) {
    a.push(this.S[this.w[b]])
  }
  return a
};
u.Nb = function() {
  Ae(this);
  return this.w.concat()
};
u.df = function(a) {
  return Be(this.S, a)
};
u.clear = function() {
  this.S = {};
  this.Xe = this.Gb = this.w.length = 0
};
u.remove = function(a) {
  return Be(this.S, a) ? (delete this.S[a], this.Gb--, this.Xe++, this.w.length > 2 * this.Gb && Ae(this), k) : p
};
function Ae(a) {
  if(a.Gb != a.w.length) {
    for(var b = 0, c = 0;b < a.w.length;) {
      var d = a.w[b];
      Be(a.S, d) && (a.w[c++] = d);
      b++
    }
    a.w.length = c
  }
  if(a.Gb != a.w.length) {
    for(var f = {}, c = b = 0;b < a.w.length;) {
      d = a.w[b], Be(f, d) || (a.w[c++] = d, f[d] = 1), b++
    }
    a.w.length = c
  }
}
u.get = function(a, b) {
  return Be(this.S, a) ? this.S[a] : b
};
u.set = function(a, b) {
  Be(this.S, a) || (this.Gb++, this.w.push(a), this.Xe++);
  this.S[a] = b
};
u.Qd = function(a) {
  var b;
  a instanceof ze ? (b = a.Nb(), a = a.Ra()) : (b = cb(a), a = bb(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
u.pa = function() {
  return new ze(this)
};
function Be(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function Ce(a) {
  this.S = new ze;
  a && this.Qd(a)
}
function De(a) {
  var b = typeof a;
  return"object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
u = Ce.prototype;
u.add = function(a) {
  this.S.set(De(a), a)
};
u.Qd = function(a) {
  a = je(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.add(a[c])
  }
};
u.Ya = function(a) {
  a = je(a);
  for(var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c])
  }
};
u.remove = function(a) {
  return this.S.remove(De(a))
};
u.clear = function() {
  this.S.clear()
};
u.contains = function(a) {
  return this.S.df(De(a))
};
u.If = function(a) {
  var b = new Ce;
  a = je(a);
  for(var c = 0;c < a.length;c++) {
    var d = a[c];
    this.contains(d) && b.add(d)
  }
  return b
};
u.Ra = function() {
  return this.S.Ra()
};
u.pa = function() {
  return new Ce(this)
};
function Fe() {
}
;function Ge(a) {
  P.call(this);
  this.headers = new ze;
  this.hc = a || l;
  this.Pa = p;
  this.Od = this.n = l;
  this.Nf = this.td = "";
  this.zc = 0;
  this.Ac = "";
  this.qb = this.ue = this.kd = this.$d = p;
  this.Nc = 0;
  this.Ld = l;
  this.$f = He;
  this.Nd = this.li = p
}
A(Ge, P);
var He = "", Ie = /^https?$/i, Je = ["POST", "PUT"];
u = Ge.prototype;
u.send = function(a, b, c, d) {
  this.n && e(Error("[goog.net.XhrIo] Object is active with another request=" + this.td + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.td = a;
  this.Ac = "";
  this.zc = 0;
  this.Nf = b;
  this.$d = p;
  this.Pa = k;
  this.n = this.hc ? we(this.hc) : we(ue);
  this.Od = this.hc ? this.hc.Uc || (this.hc.Uc = ye(this.hc)) : ue.Uc || (ue.Uc = ye(ue));
  this.n.onreadystatechange = ra(this.Vf, this);
  try {
    Fe(Ke(this, "Opening Xhr")), this.ue = k, this.n.open(b, a, k), this.ue = p
  }catch(f) {
    Fe(Ke(this, "Error opening Xhr: " + f.message));
    Le(this, f);
    return
  }
  a = c || "";
  var g = this.headers.pa();
  d && le(d, function(a, b) {
    g.set(b, a)
  });
  d = Pa(g.Nb());
  c = x.FormData && a instanceof x.FormData;
  Ra(Je, b) && (!d && !c) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  le(g, function(a, b) {
    this.n.setRequestHeader(b, a)
  }, this);
  this.$f && (this.n.responseType = this.$f);
  "withCredentials" in this.n && (this.n.withCredentials = this.li);
  try {
    Me(this), 0 < this.Nc && (this.Nd = C && F(9) && ia(this.n.timeout) && ga(this.n.ontimeout), Fe(Ke(this, "Will abort after " + this.Nc + "ms if incomplete, xhr2 " + this.Nd)), this.Nd ? (this.n.timeout = this.Nc, this.n.ontimeout = ra(this.jg, this)) : this.Ld = Rd(this.jg, this.Nc, this)), Fe(Ke(this, "Sending request")), this.kd = k, this.n.send(a), this.kd = p
  }catch(m) {
    Fe(Ke(this, "Send error: " + m.message)), Le(this, m)
  }
};
function Qa(a) {
  return"content-type" == a.toLowerCase()
}
u.jg = function() {
  "undefined" != typeof ca && this.n && (this.Ac = "Timed out after " + this.Nc + "ms, aborting", this.zc = 8, Ke(this, this.Ac), this.dispatchEvent("timeout"), this.abort(8))
};
function Le(a, b) {
  a.Pa = p;
  a.n && (a.qb = k, a.n.abort(), a.qb = p);
  a.Ac = b;
  a.zc = 5;
  Ne(a);
  Oe(a)
}
function Ne(a) {
  a.$d || (a.$d = k, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
u.abort = function(a) {
  this.n && this.Pa && (Ke(this, "Aborting"), this.Pa = p, this.qb = k, this.n.abort(), this.qb = p, this.zc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Oe(this))
};
u.g = function() {
  this.n && (this.Pa && (this.Pa = p, this.qb = k, this.n.abort(), this.qb = p), Oe(this, k));
  Ge.b.g.call(this)
};
u.Vf = function() {
  this.Lb || (!this.ue && !this.kd && !this.qb ? this.Vh() : Pe(this))
};
u.Vh = function() {
  Pe(this)
};
function Pe(a) {
  if(a.Pa && "undefined" != typeof ca) {
    if(a.Od[1] && 4 == Qe(a) && 2 == Re(a)) {
      Ke(a, "Local request error detected and ignored")
    }else {
      if(a.kd && 4 == Qe(a)) {
        Rd(a.Vf, 0, a)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == Qe(a)) {
          Ke(a, "Request complete");
          a.Pa = p;
          try {
            var b = Re(a), c, d;
            a: {
              switch(b) {
                case 200:
                ;
                case 201:
                ;
                case 202:
                ;
                case 204:
                ;
                case 206:
                ;
                case 304:
                ;
                case 1223:
                  d = k;
                  break a;
                default:
                  d = p
              }
            }
            if(!(c = d)) {
              var f;
              if(f = 0 === b) {
                var g = ie(1, String(a.td));
                if(!g && self.location) {
                  var m = self.location.protocol, g = m.substr(0, m.length - 1)
                }
                f = !Ie.test(g ? g.toLowerCase() : "")
              }
              c = f
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.zc = 6;
              var n;
              try {
                n = 2 < Qe(a) ? a.n.statusText : ""
              }catch(s) {
                n = ""
              }
              a.Ac = n + " [" + Re(a) + "]";
              Ne(a)
            }
          }finally {
            Oe(a)
          }
        }
      }
    }
  }
}
function Oe(a, b) {
  if(a.n) {
    Me(a);
    var c = a.n, d = a.Od[0] ? da : l;
    a.n = l;
    a.Od = l;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(f) {
    }
  }
}
function Me(a) {
  a.n && a.Nd && (a.n.ontimeout = l);
  ia(a.Ld) && (Pd.clearTimeout(a.Ld), a.Ld = l)
}
u.xc = function() {
  return!!this.n
};
function Qe(a) {
  return a.n ? a.n.readyState : 0
}
function Re(a) {
  try {
    return 2 < Qe(a) ? a.n.status : -1
  }catch(b) {
    return-1
  }
}
function Ke(a, b) {
  return b + " [" + a.Nf + " " + a.td + " " + Re(a) + "]"
}
;var Se = l;
function Te(a) {
  for(;4 > a.length;) {
    a = "0" + a
  }
  return a
}
function Ue(a) {
  return a == l || !(0 <= a && 1114111 >= a) ? l : 65536 <= a && 1114111 >= a ? String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320) : String.fromCharCode(a)
}
function Ve(a) {
  var b = a.charCodeAt(0);
  return 55296 <= b && 56319 >= b && 1 < a.length && (a = a.charCodeAt(1), 56320 <= a && 57343 >= a) ? 55296 <= b && 56319 >= b && 56320 <= a && 57343 >= a ? (b << 10) - 56623104 + (a - 56320 + 65536) : l : b
}
function We(a) {
  Se || (Se = {"\u0601":"Arabic Sign Sanah", "\u1400":"Canadian Syllabics Hyphen", "\u0603":"Arabic Sign Safha", "\u0602":"Arabic Footnote Marker", "\u2005":"Four-per-em Space", "\u2004":"Three-per-em Space", "\u2007":"Figure Space", "\u1806":"Mongolian Soft Hyphen", "\u2009":"Thin Space", "\u00ad":"Soft Hyphen", "\u200b":"Zero Width Space", "\u058a":"Armenian Hyphen", "\u200d":"Zero Width Joiner", "\u2003":"Em Space", "\u070f":"Syriac Abbreviation Mark", "\u180e":"Mongolian Vowel Separator", "\u2011":"Non-breaking Hyphen", 
  "\u2010":"Hyphen", "\u2001":"Em Quad", "\u2002":"En Space", "\u2015":"Horizontal Bar", "\u2014":"Em Dash", "\u2e17":"Double Oblique Hyphen", "\u1d17A":"Musical Symbol End Phrase", "\u205f":"Medium Mathematical Space", "\u301c":"Wave Dash", " ":"Space", "\u2e1a":"Hyphen With Diaeresis", "\u2000":"En Quad", "\u202b":"Right-to-left Embedding", "\u2006":"Six-per-em Space", "-":"Hyphen-minus", "\u202c":"Pop Directional Formatting", "\u202f":"Narrow No-break Space", "\u202e":"Right-to-left Override", 
  "\ufe31":"Presentation Form For Vertical Em Dash", "\u3030":"Wavy Dash", "\ufe32":"Presentation Form For Vertical En Dash", "\u17b5":"Khmer Vowel Inherent Aa", "\u17b4":"Khmer Vowel Inherent Aq", "\u2008":"Punctuation Space", "\uffa0":"Halfwidth Hangul Filler", "\u110bD":"Kaithi Number Sign", "\u202a":"Left-to-right Embedding", "\u05be":"Hebrew Punctuation Maqaf", "\u3000":"Ideographic Space", "\u200a":"Hair Space", "\u00a0":"No-break Space", "\uff0d":"Fullwidth Hyphen-minus", 8233:"Paragraph Separator", 
  "\u202d":"Left-to-right Override", "\ufe63":"Small Hyphen-minus", "\u034f":"Combining Grapheme Joiner", "\u200c":"Zero Width Non-joiner", "\u1d179":"Musical Symbol Begin Phrase", "\u0600":"Arabic Number Sign", "\u200f":"Right-to-left Mark", "\u1680":"Ogham Space Mark", "\ufe58":"Small Em Dash", "\u200e":"Left-to-right Mark", "\u06dd":"Arabic End Of Ayah", "\u115f":"Hangul Choseong Filler", "\u3164":"Hangul Filler", "\u2061":"Function Application", "\u1160":"Hangul Jungseong Filler", "\u2063":"Invisible Separator", 
  "\u2062":"Invisible Times", "\u2064":"Invisible Plus", "\u2060":"Word Joiner", 8232:"Line Separator", "\u30a0":"Katakana-hiragana Double Hyphen", "\u2013":"En Dash", "\u1d173":"Musical Symbol Begin Beam", "\u2012":"Figure Dash", "\u1d175":"Musical Symbol Begin Tie", "\u1d174":"Musical Symbol End Beam", "\u1d177":"Musical Symbol Begin Slur", "\u1d176":"Musical Symbol End Tie", "\ufff9":"Interlinear Annotation Anchor", "\u1d178":"Musical Symbol End Slur", "\ufffb":"Interlinear Annotation Terminator", 
  "\ufffa":"Interlinear Annotation Separator", "\ufeff":"Zero Width No-break Space"});
  var b = Se, c = Ve(a);
  return a in b ? b[a] : c + "" in b ? b[c] : 65024 <= c && 65039 >= c || 917760 <= c && 917999 >= c ? "Variation Selector - " + (65024 <= c && 65039 >= c ? c - 65023 : c - 917743) : l
}
;function Xe() {
}
Xe.prototype.getName = function(a, b) {
  var c = We(a);
  c || l.vi("No local name defined for character " + a);
  b(c)
};
function Ye(a, b) {
  return a.dataset ? a.dataset[b] : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
}
;function Ze(a) {
  ed.call(this);
  this.Y = a;
  this.w = {}
}
A(Ze, ed);
var $e = [];
u = Ze.prototype;
u.c = function(a, b, c, d, f) {
  y(b) || ($e[0] = b, b = $e);
  for(var g = 0;g < b.length;g++) {
    var m = N(a, b[g], c || this.handleEvent, d || p, f || this.Y || this);
    if(!m) {
      break
    }
    this.w[m.key] = m
  }
  return this
};
u.ud = function(a, b, c, d, f) {
  a: {
    if(y(b)) {
      for(var g = 0;g < b.length;g++) {
        this.ud(a, b[g], c, d, f)
      }
    }else {
      a = Id(a, b, c || this.handleEvent, d, f || this.Y || this);
      if(!a) {
        a = this;
        break a
      }
      this.w[a.key] = a
    }
    a = this
  }
  return a
};
u.W = function(a, b, c, d, f) {
  if(y(b)) {
    for(var g = 0;g < b.length;g++) {
      this.W(a, b[g], c, d, f)
    }
  }else {
    c = c || this.handleEvent, f = f || this.Y || this, c = Dd(c), d = !!d, b = jd(a) ? a.uc(b, c, d, f) : a ? (a = Fd(a)) ? a.uc(b, c, d, f) : l : l, b && (Jd(b), delete this.w[b.key])
  }
  return this
};
u.Ya = function() {
  ab(this.w, Jd);
  this.w = {}
};
u.g = function() {
  Ze.b.g.call(this);
  this.Ya()
};
u.handleEvent = function() {
  e(Error("EventHandler.handleEvent not implemented"))
};
function af() {
}
ea(af);
af.prototype.Oh = 0;
function Q(a) {
  P.call(this);
  this.ba = a || I();
  this.Za = bf
}
A(Q, P);
Q.prototype.zh = af.ja();
var bf = l;
function cf(a, b) {
  switch(a) {
    case 1:
      return b ? "disable" : "enable";
    case 2:
      return b ? "highlight" : "unhighlight";
    case 4:
      return b ? "activate" : "deactivate";
    case 8:
      return b ? "select" : "unselect";
    case 16:
      return b ? "check" : "uncheck";
    case 32:
      return b ? "focus" : "blur";
    case 64:
      return b ? "open" : "close"
  }
  e(Error("Invalid component state"))
}
u = Q.prototype;
u.Ua = l;
u.j = p;
u.d = l;
u.Za = l;
u.Ge = l;
u.T = l;
u.Q = l;
u.K = l;
u.kg = p;
function df(a) {
  return a.Ua || (a.Ua = ":" + (a.zh.Oh++).toString(36))
}
function ef(a, b) {
  if(a.T && a.T.K) {
    var c = a.T.K, d = a.Ua;
    d in c && delete c[d];
    db(a.T.K, b, a)
  }
  a.Ua = b
}
u.a = q("d");
function ff(a, b) {
  a.d = b
}
u.da = function() {
  return this.Pb || (this.Pb = new Ze(this))
};
function gf(a, b) {
  a == b && e(Error("Unable to set parent component"));
  b && (a.T && a.Ua && a.T.K && a.Ua && (a.Ua in a.T.K && a.T.K[a.Ua]) && a.T != b) && e(Error("Unable to set parent component"));
  a.T = b;
  Q.b.Re.call(a, b)
}
u.getParent = q("T");
u.Re = function(a) {
  this.T && this.T != a && e(Error("Method not supported"));
  Q.b.Re.call(this, a)
};
u.e = q("ba");
u.f = function() {
  this.d = this.ba.createElement("div")
};
function hf(a, b, c) {
  a.j && e(Error("Component already rendered"));
  a.d || a.f();
  b ? b.insertBefore(a.d, c || l) : a.ba.k.body.appendChild(a.d);
  (!a.T || a.T.j) && a.s()
}
u.v = function(a) {
  this.j && e(Error("Component already rendered"));
  if(a && this.aa(a)) {
    this.kg = k;
    var b = J(a);
    if(!this.ba || this.ba.k != b) {
      this.ba = I(a)
    }
    this.ia(a);
    this.s()
  }else {
    e(Error("Invalid element to decorate"))
  }
};
u.aa = r(k);
u.ia = ba("d");
u.s = function() {
  this.j = k;
  R(this, function(a) {
    !a.j && a.a() && a.s()
  })
};
u.O = function() {
  R(this, function(a) {
    a.j && a.O()
  });
  this.Pb && this.Pb.Ya();
  this.j = p
};
u.g = function() {
  this.j && this.O();
  this.Pb && (this.Pb.R(), delete this.Pb);
  R(this, function(a) {
    a.R()
  });
  !this.kg && this.d && Zb(this.d);
  this.T = this.Ge = this.d = this.K = this.Q = l;
  Q.b.g.call(this)
};
u.C = function(a, b) {
  this.Aa(a, jf(this), b)
};
u.Aa = function(a, b, c) {
  a.j && (c || !this.j) && e(Error("Component already rendered"));
  (0 > b || b > jf(this)) && e(Error("Child component index out of bounds"));
  if(!this.K || !this.Q) {
    this.K = {}, this.Q = []
  }
  if(a.getParent() == this) {
    var d = df(a);
    this.K[d] = a;
    Sa(this.Q, a)
  }else {
    db(this.K, df(a), a)
  }
  gf(a, this);
  Va(this.Q, b, 0, a);
  a.j && this.j && a.getParent() == this ? (c = this.z(), c.insertBefore(a.a(), c.childNodes[b] || l)) : c ? (this.d || this.f(), b = S(this, b + 1), hf(a, this.z(), b ? b.d : l)) : this.j && (!a.j && a.d && a.d.parentNode && 1 == a.d.parentNode.nodeType) && a.s()
};
u.z = q("d");
function kf(a) {
  a.Za == l && (a.Za = Lc(a.j ? a.d : a.ba.k.body));
  return a.Za
}
u.ac = function(a) {
  this.j && e(Error("Component already rendered"));
  this.Za = a
};
function T(a) {
  return!!a.Q && 0 != a.Q.length
}
function jf(a) {
  return a.Q ? a.Q.length : 0
}
function S(a, b) {
  return a.Q ? a.Q[b] || l : l
}
function R(a, b, c) {
  a.Q && La(a.Q, b, c)
}
function lf(a, b) {
  return a.Q && b ? Ka(a.Q, b) : -1
}
u.removeChild = function(a, b) {
  if(a) {
    var c = z(a) ? a : df(a);
    a = this.K && c ? (c in this.K ? this.K[c] : h) || l : l;
    if(c && a) {
      var d = this.K;
      c in d && delete d[c];
      Sa(this.Q, a);
      b && (a.O(), a.d && Zb(a.d));
      gf(a, l)
    }
  }
  a || e(Error("Child is not in parent component"));
  return a
};
var mf;
function nf(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role")
}
function U(a, b, c) {
  ha(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || c == h ? (mf || (mf = {atomic:p, autocomplete:"none", dropeffect:"none", haspopup:p, live:"off", multiline:p, multiselectable:p, orientation:"vertical", readonly:p, relevant:"additions text", required:p, sort:"none", busy:p, disabled:p, hidden:p, invalid:"false"}), c = mf, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
;var of = !!x.DOMTokenList, pf = of ? function(a) {
  return a.classList
} : function(a) {
  a = a.className;
  return z(a) && a.match(/\S+/g) || []
}, qf = of ? function(a, b) {
  return a.classList.contains(b)
} : function(a, b) {
  return Ra(pf(a), b)
}, V = of ? function(a, b) {
  a.classList.add(b)
} : function(a, b) {
  qf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, rf = of ? function(a, b) {
  La(b, function(b) {
    V(a, b)
  })
} : function(a, b) {
  var c = {};
  La(pf(a), function(a) {
    c[a] = k
  });
  La(b, function(a) {
    c[a] = k
  });
  a.className = "";
  for(var d in c) {
    a.className += 0 < a.className.length ? " " + d : d
  }
}, sf = of ? function(a, b) {
  a.classList.remove(b)
} : function(a, b) {
  qf(a, b) && (a.className = Ma(pf(a), function(a) {
    return a != b
  }).join(" "))
};
function tf(a, b) {
  Q.call(this, b);
  this.wa = a || ""
}
A(tf, Q);
tf.prototype.Ba = l;
tf.prototype.Hh = 10;
var uf = "placeholder" in document.createElement("input");
u = tf.prototype;
u.Tb = p;
u.f = function() {
  this.d = this.e().f("input", {type:"text"})
};
u.ia = function(a) {
  tf.b.ia.call(this, a);
  this.wa || (this.wa = a.getAttribute("label") || "");
  kc(J(a)) == a && (this.Tb = k, a = this.a(), sf(a, this.ic));
  uf ? this.a().placeholder = this.wa : (a = this.a(), U(a, "label", this.wa))
};
u.s = function() {
  tf.b.s.call(this);
  this.Ud();
  vf(this);
  this.a().Gh = this
};
u.O = function() {
  tf.b.O.call(this);
  this.Zc();
  this.a().Gh = l
};
u.Ud = function() {
  var a = new Ze(this);
  a.c(this.a(), "focus", this.Sa);
  a.c(this.a(), "blur", this.ke);
  if(uf) {
    this.l = a
  }else {
    D && a.c(this.a(), ["keypress", "keydown", "keyup"], this.ih);
    var b = J(this.a());
    a.c(b ? b.parentWindow || b.defaultView : window, "load", this.wh);
    this.l = a;
    wf(this)
  }
};
function wf(a) {
  !a.Sg && (a.l && a.a().form) && (a.l.c(a.a().form, "submit", a.jh), a.Sg = k)
}
u.Zc = function() {
  this.l && (this.l.R(), this.l = l)
};
u.g = function() {
  tf.b.g.call(this);
  this.Zc()
};
u.ic = "label-input-label";
u.Sa = function() {
  this.Tb = k;
  var a = this.a();
  sf(a, this.ic);
  if(!uf && !xf(this) && !this.te) {
    var b = this, a = function() {
      b.a() && (b.a().value = "")
    };
    C ? Rd(a, 10) : a()
  }
};
u.ke = function() {
  uf || (this.l.W(this.a(), "click", this.Sa), this.Ba = l);
  this.Tb = p;
  vf(this)
};
u.ih = function(a) {
  27 == a.keyCode && ("keydown" == a.type ? this.Ba = this.a().value : "keypress" == a.type ? this.a().value = this.Ba : "keyup" == a.type && (this.Ba = l), a.preventDefault())
};
u.jh = function() {
  xf(this) || (this.a().value = "", Rd(this.Yg, 10, this))
};
u.Yg = function() {
  xf(this) || (this.a().value = this.wa)
};
u.wh = function() {
  vf(this)
};
u.hasFocus = q("Tb");
function xf(a) {
  return!!a.a() && "" != a.a().value && a.a().value != a.wa
}
u.clear = function() {
  this.a().value = "";
  this.Ba != l && (this.Ba = "")
};
u.xb = function(a) {
  this.Ba != l && (this.Ba = a);
  this.a().value = a;
  vf(this)
};
u.X = function() {
  return this.Ba != l ? this.Ba : xf(this) ? this.a().value : ""
};
function vf(a) {
  var b = a.a();
  uf ? a.a().placeholder != a.wa && (a.a().placeholder = a.wa) : (wf(a), U(b, "label", a.wa));
  xf(a) ? (b = a.a(), sf(b, a.ic)) : (!a.te && !a.Tb && (b = a.a(), V(b, a.ic)), uf || Rd(a.di, a.Hh, a))
}
u.na = function(a) {
  this.a().disabled = !a;
  var b = this.a(), c = this.ic + "-disabled";
  !a ? V(b, c) : sf(b, c)
};
u.isEnabled = function() {
  return!this.a().disabled
};
u.Qg = function() {
  this.te = p
};
u.di = function() {
  this.a() && (!xf(this) && !this.Tb) && (this.a().value = this.wa)
};
function W(a, b, c) {
  Q.call(this, c);
  this.N = b || yf;
  this.Ef = a
}
A(W, Q);
var zf = {};
u = W.prototype;
u.Pe = p;
u.qc = p;
u.ki = l;
u.pg = "";
u.pd = p;
u.Yc = -1;
u.g = function() {
  W.b.g.call(this);
  this.cb && (this.cb.removeNode(this), this.cb = l);
  this.d = l
};
u.ld = function() {
  var a = this.a();
  if(a) {
    var b = Af(this);
    b && !b.id && (b.id = df(this) + ".label");
    nf(a, "treeitem");
    U(a, "selected", p);
    U(a, "expanded", p);
    U(a, "level", this.kb());
    b && U(a, "labelledby", b.id);
    (a = this.dd()) && nf(a, "presentation");
    (a = this.cd()) && nf(a, "presentation");
    if(a = Bf(this)) {
      if(nf(a, "group"), a.hasChildNodes()) {
        a = jf(this);
        for(b = 1;b <= a;b++) {
          var c = S(this, b - 1).a();
          U(c, "setsize", a);
          U(c, "posinset", b)
        }
      }
    }
  }
};
u.f = function() {
  var a = new ua;
  Cf(this, a);
  var b;
  b = this.e().k;
  var c = a.toString(), a = b.createElement("div");
  C ? (a.innerHTML = "<br>" + c, a.removeChild(a.firstChild)) : a.innerHTML = c;
  if(1 == a.childNodes.length) {
    b = a.removeChild(a.firstChild)
  }else {
    for(b = b.createDocumentFragment();a.firstChild;) {
      b.appendChild(a.firstChild)
    }
  }
  this.d = b
};
u.s = function() {
  W.b.s.call(this);
  zf[df(this)] = this;
  this.ld()
};
u.O = function() {
  W.b.O.call(this);
  delete zf[df(this)]
};
u.Aa = function(a, b) {
  var c = S(this, b - 1), d = S(this, b);
  W.b.Aa.call(this, a, b);
  a.vb = c;
  a.xa = d;
  c ? c.xa = a : this.tf = a;
  d ? d.vb = a : this.Lf = a;
  var f = this.H();
  f && Df(a, f);
  Ef(a, this.kb() + 1);
  if(this.a() && (this.gc(), this.ca())) {
    f = Bf(this);
    a.a() || a.f();
    var g = a.a(), m = d && d.a();
    f.insertBefore(g, m);
    this.j && a.s();
    d || (c ? c.gc() : (L(f, k), this.ab(this.ca())))
  }
};
u.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.Aa(a, b ? lf(this, b) : jf(this));
  return a
};
u.removeChild = function(a) {
  var b = this.H(), c = b ? b.q : l;
  if(c == a || a.contains(c)) {
    b.hasFocus(), this.select()
  }
  W.b.removeChild.call(this, a);
  this.Lf == a && (this.Lf = a.vb);
  this.tf == a && (this.tf = a.xa);
  a.vb && (a.vb.xa = a.xa);
  a.xa && (a.xa.vb = a.vb);
  c = !a.xa;
  a.cb = l;
  a.Yc = -1;
  if(b && (b.removeNode(this), this.j)) {
    b = Bf(this);
    if(a.j) {
      var d = a.a();
      b.removeChild(d);
      a.O()
    }
    c && (c = S(this, jf(this) - 1)) && c.gc();
    T(this) || (b.style.display = "none", this.gc(), this.dd().className = this.ad())
  }
  return a
};
u.remove = W.prototype.removeChild;
u.kb = function() {
  var a = this.Yc;
  0 > a && (a = (a = this.getParent()) ? a.kb() + 1 : 0, Ef(this, a));
  return a
};
function Ef(a, b) {
  if(b != a.Yc) {
    a.Yc = b;
    var c = Ff(a);
    if(c) {
      var d = Math.max(0, (a.kb() - 1) * a.N.ve) + "px";
      kf(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
    }
    R(a, function(a) {
      Ef(a, b + 1)
    })
  }
}
u.contains = function(a) {
  for(;a;) {
    if(a == this) {
      return k
    }
    a = a.getParent()
  }
  return p
};
u.Mb = function() {
  var a = [];
  R(this, function(b) {
    a.push(b)
  });
  return a
};
u.xe = q("Pe");
u.select = function() {
  var a = this.H();
  a && Gf(a, this)
};
function Hf(a, b) {
  if(a.Pe != b) {
    a.Pe = b;
    If(a);
    var c = a.a();
    c && (U(c, "selected", b), b && (c = a.H().a(), U(c, "activedescendant", df(a))))
  }
}
u.ca = q("qc");
u.ab = function(a) {
  var b = a != this.qc;
  if(!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    var c;
    this.qc = a;
    c = this.H();
    var d = this.a();
    if(T(this)) {
      if(!a && (c && this.contains(c.q)) && this.select(), d) {
        if(c = Bf(this)) {
          if(L(c, a), a && this.j && !c.hasChildNodes()) {
            var f = new ua;
            R(this, function(a) {
              Cf(a, f)
            });
            c.innerHTML = f.toString();
            R(this, function(a) {
              a.s()
            })
          }
        }
        this.gc()
      }
    }else {
      (c = Bf(this)) && L(c, p)
    }
    d && (this.dd().className = this.ad(), U(d, "expanded", a));
    b && this.dispatchEvent(a ? "expand" : "collapse")
  }
};
u.toggle = function() {
  this.ab(!this.ca())
};
u.expand = function() {
  this.ab(k)
};
function Jf(a) {
  R(a, function(a) {
    Kf(a)
  })
}
function Kf(a) {
  Jf(a);
  a.expand()
}
u.Me = function() {
  var a = this.getParent();
  a && (a.ab(k), a.Me())
};
function Cf(a, b) {
  var c = a.H(), c = !c.yb || c == a.getParent() && !c.Se ? a.N.hf : a.N.gf, d = a.ca() && T(a);
  b.append('<div class="', a.N.Hg, '" id="', df(a), '">', Lf(a), '<div class="', c, '" style="', "background-position:" + Mf(a) + ";", d ? "" : "display:none;", '">');
  d && R(a, function(a) {
    Cf(a, b)
  });
  b.append("</div></div>")
}
function Lf(a) {
  var b = new ua;
  b.append('<div class="', a.fd(), '" style="padding-', kf(a) ? "right:" : "left:", Math.max(0, (a.kb() - 1) * a.N.ve), 'px">', a.uf(), '<span style="display:inline-block" class="' + a.ad() + '"></span>', Nf(a), "</div>");
  return b.toString()
}
u.fd = function() {
  return this.N.Lg + (this.xe() ? " " + this.N.Kg : "")
};
function Nf(a) {
  var b = a.ki, c = new ua;
  c.append('<span class="', a.N.Ig, '"', b ? ' title="' + Ba(b) + '"' : "", ">", a.he(), "</span>", "<span>", a.pg, "</span>");
  return c.toString()
}
u.uf = function() {
  return'<span type="expand" style="display:inline-block" class="' + Of(this) + '"></span>'
};
function Of(a) {
  var b = a.H(), c = !b.yb || b == a.getParent() && !b.Se, d = a.N, f = new ua;
  f.append(d.Hb, " ", d.zg, " ");
  if(T(a)) {
    var g = 0;
    b.hi && a.pd && (g = a.ca() ? 2 : 1);
    c || (g = !a.xa ? g + 4 : g + 8);
    switch(g) {
      case 1:
        f.append(d.Dg);
        break;
      case 2:
        f.append(d.Cg);
        break;
      case 4:
        f.append(d.mf);
        break;
      case 5:
        f.append(d.Bg);
        break;
      case 6:
        f.append(d.Ag);
        break;
      case 8:
        f.append(d.nf);
        break;
      case 9:
        f.append(d.Fg);
        break;
      case 10:
        f.append(d.Eg);
        break;
      default:
        f.append(d.lf)
    }
  }else {
    c ? f.append(d.lf) : !a.xa ? f.append(d.mf) : f.append(d.nf)
  }
  return f.toString()
}
function Mf(a) {
  return(!a.xa ? "-100" : (a.kb() - 1) * a.N.ve) + "px 0"
}
u.a = function() {
  var a = W.b.a.call(this);
  a || (this.d = a = this.e().a(df(this)));
  return a
};
function Ff(a) {
  return(a = a.a()) ? a.firstChild : l
}
u.cd = function() {
  var a = Ff(this);
  return a ? a.firstChild : l
};
u.dd = function() {
  var a = Ff(this);
  return a ? a.childNodes[1] : l
};
function Af(a) {
  return(a = Ff(a)) && a.lastChild ? a.lastChild.previousSibling : l
}
function Bf(a) {
  return(a = a.a()) ? a.lastChild : l
}
u.Ic = function(a) {
  this.Id(Ba(a))
};
u.lb = function() {
  var a = this.he();
  return-1 != a.indexOf("&") ? "document" in x ? Ha(a) : Ja(a) : a
};
u.Id = function(a) {
  this.Ef = a;
  var b = Af(this);
  b && (b.innerHTML = a);
  (a = this.H()) && Pf(a.ec, this)
};
u.he = q("Ef");
function If(a) {
  var b = Ff(a);
  b && (b.className = a.fd())
}
u.gc = function() {
  var a = this.cd();
  a && (a.className = Of(this));
  if(a = Bf(this)) {
    a.style.backgroundPosition = Mf(this)
  }
};
u.Rh = ud;
function Qf(a) {
  return!a.ca() || !T(a) ? a : Qf(S(a, jf(a) - 1))
}
function Rf(a) {
  if(T(a) && a.ca()) {
    return S(a, 0)
  }
  for(var b = a, c;b != a.H();) {
    c = b.xa;
    if(c != l) {
      return c
    }
    b = b.getParent()
  }
  return l
}
function Sf(a) {
  var b = a.vb;
  if(b != l) {
    return Qf(b)
  }
  b = a.getParent();
  a = a.H();
  return!a.Lc && b == a ? l : b
}
function Df(a, b) {
  a.cb != b && (a.cb = b, Pf(b.ec, a), R(a, function(a) {
    Df(a, b)
  }))
}
;function Tf(a, b, c) {
  W.call(this, a, b, c)
}
A(Tf, W);
Tf.prototype.cb = l;
Tf.prototype.H = function() {
  if(this.cb) {
    return this.cb
  }
  var a = this.getParent();
  return a && (a = a.H()) ? (Df(this, a), a) : l
};
Tf.prototype.ad = function() {
  var a = this.ca();
  if(a && this.ae) {
    return this.ae
  }
  if(!a && this.se) {
    return this.se
  }
  var b = this.N;
  if(T(this)) {
    if(a && b.of) {
      return b.Hb + " " + b.of
    }
    if(!a && b.jf) {
      return b.Hb + " " + b.jf
    }
  }else {
    if(b.qf) {
      return b.Hb + " " + b.qf
    }
  }
  return""
};
function Uf(a) {
  this.ha = h;
  this.M = {};
  if(a) {
    var b = ke(a);
    a = je(a);
    for(var c = 0;c < b.length;c++) {
      this.set(b[c], a[c])
    }
  }
}
u = Uf.prototype;
u.set = function(a, b) {
  Vf(this, a, b, p)
};
u.add = function(a, b) {
  Vf(this, a, b, k)
};
function Vf(a, b, c, d) {
  for(var f = 0;f < b.length;f++) {
    var g = b.charAt(f);
    a.M[g] || (a.M[g] = new Uf);
    a = a.M[g]
  }
  d && a.ha !== h && e(Error('The collection already contains the key "' + b + '"'));
  a.ha = c
}
u.get = function(a) {
  for(var b = this, c = 0;c < a.length;c++) {
    var d = a.charAt(c);
    if(!b.M[d]) {
      return
    }
    b = b.M[d]
  }
  return b.ha
};
u.Ra = function() {
  var a = [];
  Wf(this, a);
  return a
};
function Wf(a, b) {
  a.ha !== h && b.push(a.ha);
  for(var c in a.M) {
    Wf(a.M[c], b)
  }
}
u.Nb = function(a) {
  var b = [];
  if(a) {
    for(var c = this, d = 0;d < a.length;d++) {
      var f = a.charAt(d);
      if(!c.M[f]) {
        return[]
      }
      c = c.M[f]
    }
    Xf(c, a, b)
  }else {
    Xf(this, "", b)
  }
  return b
};
function Xf(a, b, c) {
  a.ha !== h && c.push(b);
  for(var d in a.M) {
    Xf(a.M[d], b + d, c)
  }
}
u.df = function(a) {
  return this.get(a) !== h
};
u.clear = function() {
  this.M = {};
  this.ha = h
};
u.remove = function(a) {
  for(var b = this, c = [], d = 0;d < a.length;d++) {
    var f = a.charAt(d);
    b.M[f] || e(Error('The collection does not have the key "' + a + '"'));
    c.push([b, f]);
    b = b.M[f]
  }
  a = b.ha;
  for(delete b.ha;0 < c.length;) {
    f = c.pop();
    b = f[0];
    f = f[1];
    a: {
      d = h;
      for(d in b.M[f].M) {
        d = p;
        break a
      }
      d = k
    }
    if(d) {
      delete b.M[f]
    }else {
      break
    }
  }
  return a
};
u.pa = function() {
  return new Uf(this)
};
function Yf() {
  this.sb = new Uf
}
u = Yf.prototype;
u.F = "";
u.Ee = l;
u.wd = l;
u.Bc = 0;
u.Xb = 0;
function Pf(a, b) {
  var c = b.lb();
  if(c && !/^[\s\xa0]*$/.test(c == l ? "" : String(c))) {
    var c = c.toLowerCase(), d = a.sb.get(c);
    d ? d.push(b) : a.sb.set(c, [b])
  }
}
function Zf(a, b) {
  var c = p, d = a.sb.Nb(b);
  if(d && d.length && (a.Xb = 0, a.Bc = 0, c = a.sb.get(d[0]), c = $f(a, c))) {
    a.Ee = d
  }
  return c
}
function $f(a, b) {
  var c;
  b && (a.Xb < b.length && (c = b[a.Xb], a.wd = b), c && (c.Me(), c.select()));
  return!!c
}
u.clear = function() {
  this.F = ""
};
function ag(a, b) {
  P.call(this);
  a && this.jc(a, b)
}
A(ag, P);
u = ag.prototype;
u.d = l;
u.qd = l;
u.ye = l;
u.rd = l;
u.fa = -1;
u.Wa = -1;
u.Sd = p;
var bg = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, cg = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, dg = C || 
E && F("525"), eg = lb && D;
u = ag.prototype;
u.Qb = function(a) {
  if(E && (17 == this.fa && !a.ctrlKey || 18 == this.fa && !a.altKey || lb && 91 == this.fa && !a.metaKey)) {
    this.Wa = this.fa = -1
  }
  -1 == this.fa && (a.ctrlKey && 17 != a.keyCode ? this.fa = 17 : a.altKey && 18 != a.keyCode ? this.fa = 18 : a.metaKey && 91 != a.keyCode && (this.fa = 91));
  dg && !Ud(a.keyCode, this.fa, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Wa = Wd(a.keyCode), eg && (this.Sd = a.altKey))
};
u.nh = function(a) {
  this.Wa = this.fa = -1;
  this.Sd = a.altKey
};
u.handleEvent = function(a) {
  var b = a.U, c, d, f = b.altKey;
  C && "keypress" == a.type ? (c = this.Wa, d = 13 != c && 27 != c ? b.keyCode : 0) : E && "keypress" == a.type ? (c = this.Wa, d = 0 <= b.charCode && 63232 > b.charCode && Vd(c) ? b.charCode : 0) : rb ? (c = this.Wa, d = Vd(c) ? b.keyCode : 0) : (c = b.keyCode || this.Wa, d = b.charCode || 0, eg && (f = this.Sd), lb && (63 == d && 224 == c) && (c = 191));
  var g = c = Wd(c), m = b.keyIdentifier;
  c ? 63232 <= c && c in bg ? g = bg[c] : 25 == c && a.shiftKey && (g = 9) : m && m in cg && (g = cg[m]);
  a = g == this.fa;
  this.fa = g;
  b = new fg(g, d, a, b);
  b.altKey = f;
  this.dispatchEvent(b)
};
u.a = q("d");
u.jc = function(a, b) {
  this.rd && this.detach();
  this.d = a;
  this.qd = N(this.d, "keypress", this, b);
  this.ye = N(this.d, "keydown", this.Qb, b, this);
  this.rd = N(this.d, "keyup", this.nh, b, this)
};
u.detach = function() {
  this.qd && (Jd(this.qd), Jd(this.ye), Jd(this.rd), this.rd = this.ye = this.qd = l);
  this.d = l;
  this.Wa = this.fa = -1
};
u.g = function() {
  ag.b.g.call(this);
  this.detach()
};
function fg(a, b, c, d) {
  d && xd(this, d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
A(fg, wd);
function gg(a) {
  P.call(this);
  this.d = a;
  a = C ? "focusout" : "blur";
  this.Jh = N(this.d, C ? "focusin" : "focus", this, !C);
  this.Kh = N(this.d, a, this, !C)
}
A(gg, P);
gg.prototype.handleEvent = function(a) {
  var b = new wd(a.U);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b)
};
gg.prototype.g = function() {
  gg.b.g.call(this);
  Jd(this.Jh);
  Jd(this.Kh);
  delete this.d
};
function hg(a, b, c) {
  W.call(this, a, b, c);
  this.qc = k;
  Hf(this, k);
  this.q = this;
  this.ec = new Yf;
  if(C) {
    try {
      document.execCommand("BackgroundImageCache", p, k)
    }catch(d) {
    }
  }
}
A(hg, W);
u = hg.prototype;
u.L = l;
u.be = l;
u.de = p;
u.Rg = l;
u.yb = k;
u.hi = k;
u.Lc = k;
u.Se = k;
u.H = function() {
  return this
};
u.kb = r(0);
u.Me = aa();
u.Sa = function() {
  this.de = k;
  V(this.a(), "focused");
  this.q && this.q.select()
};
u.ke = function() {
  this.de = p;
  sf(this.a(), "focused")
};
u.hasFocus = q("de");
u.ca = function() {
  return!this.Lc || hg.b.ca.call(this)
};
u.ab = function(a) {
  this.Lc ? hg.b.ab.call(this, a) : this.qc = a
};
u.uf = r("");
u.dd = function() {
  var a = Ff(this);
  return a ? a.firstChild : l
};
u.cd = r(l);
u.gc = aa();
u.fd = function() {
  return hg.b.fd.call(this) + (this.Lc ? "" : " " + this.N.Gg)
};
u.ad = function() {
  var a = this.ca();
  if(a && this.ae) {
    return this.ae
  }
  if(!a && this.se) {
    return this.se
  }
  var b = this.N;
  return a && b.pf ? b.Hb + " " + b.pf : !a && b.kf ? b.Hb + " " + b.kf : ""
};
function Gf(a, b) {
  if(a.q != b) {
    var c = p;
    a.q && (c = a.q == a.Rg, Hf(a.q, p));
    if(a.q = b) {
      Hf(b, k), c && b.select()
    }
    a.dispatchEvent("change")
  }
}
function ig(a) {
  function b(a) {
    var m = Bf(a);
    if(m) {
      var n = !d || c == a.getParent() && !f ? a.N.hf : a.N.gf;
      m.className = n;
      if(m = a.cd()) {
        m.className = Of(a)
      }
    }
    R(a, b)
  }
  var c = a, d = c.yb, f = c.Se;
  b(a)
}
u.ld = function() {
  hg.b.ld.call(this);
  var a = this.a();
  nf(a, "tree");
  U(a, "labelledby", Af(this).id)
};
u.s = function() {
  hg.b.s.call(this);
  var a = this.a();
  a.className = this.N.Jg;
  a.setAttribute("hideFocus", "true");
  this.Ud();
  this.ld()
};
u.O = function() {
  hg.b.O.call(this);
  this.Zc()
};
u.Ud = function() {
  var a = this.a();
  a.tabIndex = 0;
  var b = this.L = new ag(a), c = this.be = new gg(a);
  this.da().c(c, "focusout", this.ke).c(c, "focusin", this.Sa).c(b, "key", this.ka).c(a, "mousedown", this.ne).c(a, "click", this.ne).c(a, "dblclick", this.ne)
};
u.Zc = function() {
  this.L.R();
  this.L = l;
  this.be.R();
  this.be = l
};
u.ne = function(a) {
  var b;
  a: {
    b = l;
    for(var c = a.target;c != l;) {
      if(b = zf[c.id]) {
        break a
      }
      if(c == this.a()) {
        break
      }
      c = c.parentNode
    }
    b = l
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        "expand" == a.target.getAttribute("type") && T(b) ? b.pd && b.toggle() : (b.select(), If(b));
        break;
      case "click":
        b.Rh(a);
        break;
      case "dblclick":
        "expand" == a.target.getAttribute("type") && T(b) || b.pd && b.toggle()
    }
  }
};
u.ka = function(a) {
  var b = p, b = this.ec, c = p;
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
      if(a.ctrlKey) {
        var c = 40 == a.keyCode ? 1 : -1, d = b.Ee;
        if(d) {
          var f = l, g = p;
          if(b.wd) {
            var m = b.Xb + c;
            0 <= m && m < b.wd.length ? (b.Xb = m, f = b.wd) : g = k
          }
          f || (m = b.Bc + c, 0 <= m && m < d.length && (b.Bc = m), d.length > b.Bc && (f = b.sb.get(d[b.Bc])), f && (f.length && g) && (b.Xb = -1 == c ? f.length - 1 : 0));
          $f(b, f) && (b.Ee = d)
        }
        c = k
      }
      break;
    case 8:
      d = b.F.length - 1;
      c = k;
      0 < d ? (b.F = b.F.substring(0, d), Zf(b, b.F)) : 0 == d ? b.F = "" : c = p;
      break;
    case 27:
      b.F = "", c = k
  }
  if(!(b = c)) {
    if(b = this.q) {
      if(b = this.q, c = k, !a.metaKey && !a.ctrlKey) {
        switch(a.keyCode) {
          case 39:
            if(a.altKey) {
              break
            }
            T(b) && (b.ca() ? S(b, 0).select() : b.ab(k));
            break;
          case 37:
            if(a.altKey) {
              break
            }
            T(b) && b.ca() && b.pd ? b.ab(p) : (d = b.getParent(), f = b.H(), d && (f.Lc || d != f) && d.select());
            break;
          case 40:
            (d = Rf(b)) && d.select();
            break;
          case 38:
            (d = Sf(b)) && d.select();
            break;
          default:
            c = p
        }
        c && (a.preventDefault(), (f = b.H()) && f.ec.clear());
        b = c
      }else {
        b = h
      }
    }
    if(!b) {
      b = this.ec;
      c = p;
      if(!a.ctrlKey && !a.altKey && (d = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.F))) {
        b.F += d, c = Zf(b, b.F)
      }
      b = c
    }
  }
  b && a.preventDefault();
  return b
};
u.createNode = function(a) {
  return new Tf(a || "", this.N, this.e())
};
u.removeNode = function(a) {
  var b = this.ec, c = a.lb();
  if(c && !/^[\s\xa0]*$/.test(c == l ? "" : String(c))) {
    var c = c.toLowerCase(), d = b.sb.get(c);
    d && (Sa(d, a), d.length && b.sb.remove(c))
  }
};
var yf = {ve:19, Jg:"goog-tree-root goog-tree-item", Gg:"goog-tree-hide-root", Hg:"goog-tree-item", gf:"goog-tree-children", hf:"goog-tree-children-nolines", Lg:"goog-tree-row", Ig:"goog-tree-item-label", Hb:"goog-tree-icon", zg:"goog-tree-expand-icon", Dg:"goog-tree-expand-icon-plus", Cg:"goog-tree-expand-icon-minus", Fg:"goog-tree-expand-icon-tplus", Eg:"goog-tree-expand-icon-tminus", Bg:"goog-tree-expand-icon-lplus", Ag:"goog-tree-expand-icon-lminus", nf:"goog-tree-expand-icon-t", mf:"goog-tree-expand-icon-l", 
lf:"goog-tree-expand-icon-blank", of:"goog-tree-expanded-folder-icon", jf:"goog-tree-collapsed-folder-icon", qf:"goog-tree-file-icon", pf:"goog-tree-expanded-folder-icon", kf:"goog-tree-collapsed-folder-icon", Kg:"selected"};
function jg() {
}
jg.prototype.Wd = "Symbol;Punctuation;Number;Format & Whitespace;Modifier;Latin;Other European Scripts;American Scripts;African Scripts;Middle Eastern Scripts;South Asian Scripts;Southeast Asian Scripts;Hangul;Other East Asian Scripts;Han 1-Stroke Radicals;Han 2-Stroke Radicals;Han 3-Stroke Radicals;Han 4-Stroke Radicals;Han 5-Stroke Radicals;Han 6-Stroke Radicals;Han 7-Stroke Radicals;Han 8-Stroke Radicals;Han 9-Stroke Radicals;Han 10-Stroke Radicals;Han 11~17-Stroke Radicals;Han - Other;Miscellaneous".split(";");
jg.prototype.ig = ["Arrows;Braille;Control Pictures;Currency;Game Pieces;Gender and Genealogical;Geometric Shapes;Keyboard and UI;Math;Miscellaneous;Musical;Stars/Asterisks;Subscript;Superscript;Technical;Weather and Astrological;Yijing / Tai Xuan Jing;Historic;Compatibility".split(";"), "ASCII Based;Dash/Connector;Other;Paired;Historic;Compatibility".split(";"), "Decimal Enclosed/Dotted Fractions/Related Other Historic Compatibility".split(" "), ["Format", "Variation Selector", "Whitespace", "Historic", 
"Compatibility"], ["Enclosing", "Nonspacing", "Spacing", "Historic", "Compatibility"], "Common;Enclosed;Flipped/Mirrored;Other;Phonetics (IPA);Phonetics (X-IPA);Historic;Compatibility".split(";"), "Armenian;Cyrillic;Georgian;Greek;Historic - Coptic;Historic - Cypriot;Historic - Cyrillic;Historic - Georgian;Historic - Glagolitic;Historic - Gothic;Historic - Greek;Historic - Linear B;Historic - Ogham;Historic - Old Italic;Historic - Runic;Historic - Shavian;Compatibility - Armenian;Compatibility - Greek".split(";"), 
["Canadian Aboriginal", "Cherokee", "Historic - Deseret"], "Ethiopic;Nko;Tifinagh;Vai;Historic - Nko;Historic - Osmanya".split(";"), "Arabic;Hebrew;Thaana;Historic - Arabic;Historic - Carian;Historic - Cuneiform;Historic - Hebrew;Historic - Lycian;Historic - Lydian;Historic - Old Persian;Historic - Phoenician;Historic - Syriac;Historic - Ugaritic;Compatibility - Arabic;Compatibility - Hebrew".split(";"), "Bengali;Devanagari;Gujarati;Gurmukhi;Kannada;Lepcha;Limbu;Malayalam;Ol Chiki;Oriya;Saurashtra;Sinhala;Tamil;Telugu;Tibetan;Historic;Historic - Kannada;Historic - Kharoshthi;Historic - Phags Pa;Historic - Syloti Nagri;Compatibility - Bengali;Compatibility - Devanagari;Compatibility - Gurmukhi;Compatibility - Oriya;Compatibility - Tibetan".split(";"), 
"Balinese;Cham;Kayah Li;Khmer;Lao;Myanmar;New Tai Lue;Tai Le;Thai;Historic - Buginese;Historic - Buhid;Historic - Hanunoo;Historic - Khmer;Historic - Rejang;Historic - Sundanese;Historic - Tagalog;Historic - Tagbanwa".split(";"), "Other \u1100 \u1102 \u1103 \u1105 \u1106 \u1107 \u1109 \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1159 Historic Compatibility".split(" "), "Bopomofo;Hiragana;Katakana;Mongolian;Yi;Compatibility - Bopomofo;Compatibility - Hiragana;Compatibility - Katakana;Compatibility - Yi".split(";"), 
"\u4e00;\u4e28;\u4e36;\u4e3f;\u4e59;\u4e85;Compatibility;Less Common".split(";"), "\u4e8c;\u4ea0;\u4eba;\u513f;\u5165;\u516b;\u5182;\u5196;\u51ab;\u51e0;\u51f5;\u5200;\u529b;\u52f9;\u5315;\u531a;\u5338;\u5341;\u535c;\u5369;\u5382;\u53b6;\u53c8;\u8ba0;Compatibility;Less Common".split(";"), "\u53e3;\u56d7;\u571f;\u58eb;\u5902;\u590a;\u5915;\u5927;\u5973;\u5b50;\u5b80;\u5bf8;\u5c0f;\u5c22;\u5c38;\u5c6e;\u5c71;\u5ddb;\u5de5;\u5df1;\u5dfe;\u5e72;\u5e7a;\u5e7f;\u5ef4;\u5efe;\u5f0b;\u5f13;\u5f50;\u5f61;\u5f73;\u7e9f;\u95e8;\u98de;\u9963;\u9a6c;Compatibility;Less Common".split(";"), 
"\u5fc3;\u6208;\u6236;\u624b;\u652f;\u6534;\u6587;\u6597;\u65a4;\u65b9;\u65e0;\u65e5;\u66f0;\u6708;\u6728;\u6b20;\u6b62;\u6b79;\u6bb3;\u6bcb;\u6bd4;\u6bdb;\u6c0f;\u6c14;\u6c34;\u706b;\u722a;\u7236;\u723b;\u723f;\u7247;\u7259;\u725b;\u72ac;\u89c1;\u8d1d;\u8f66;\u97e6;\u98ce;Compatibility;Less Common".split(";"), "\u7384;\u7389;\u74dc;\u74e6;\u7518;\u751f;\u7528;\u7530;\u758b;\u7592;\u7676;\u767d;\u76ae;\u76bf;\u76ee;\u77db;\u77e2;\u77f3;\u793a;\u79b8;\u79be;\u7a74;\u7acb;\u9485;\u957f;\u9e1f;\u9f99;Compatibility;Less Common".split(";"), 
"\u7af9;\u7c73;\u7cf8;\u7f36;\u7f51;\u7f8a;\u7fbd;\u8001;\u800c;\u8012;\u8033;\u807f;\u8089;\u81e3;\u81ea;\u81f3;\u81fc;\u820c;\u821b;\u821f;\u826e;\u8272;\u8278;\u864d;\u866b;\u8840;\u884c;\u8863;\u897e;\u9875;\u9f50;Compatibility;Less Common".split(";"), "\u5364;\u898b;\u89d2;\u8a00;\u8c37;\u8c46;\u8c55;\u8c78;\u8c9d;\u8d64;\u8d70;\u8db3;\u8eab;\u8eca;\u8f9b;\u8fb0;\u8fb5;\u9091;\u9149;\u91c6;\u91cc;\u9f9f;Compatibility;Less Common".split(";"), "\u91d1;\u9577;\u9580;\u961c;\u96b6;\u96b9;\u96e8;\u9751;\u975e;\u9c7c;\u9f7f;Compatibility;Less Common".split(";"), 
"\u9762;\u9769;\u97cb;\u97ed;\u97f3;\u9801;\u98a8;\u98db;\u98df;\u9996;\u9999;Compatibility;Less Common".split(";"), "\u99ac;\u9aa8;\u9ad8;\u9adf;\u9b25;\u9b2f;\u9b32;\u9b3c;Compatibility;Less Common".split(";"), "\u9b5a;\u9ce5;\u9e75;\u9e7f;\u9ea5;\u9ea6;\u9ebb;\u9ec3;\u9ecd;\u9ed1;\u9ef9;\u9efd;\u9efe;\u9f0e;\u9f13;\u9f20;\u9f3b;\u9f4a;\u9f52;\u9f8d;\u9f9c;\u9fa0;Compatibility;Less Common".split(";"), "Numerics;Punctuation;Compatibility;Less Common - Numerics;Pinyin;Ideographic Description;CJK Strokes".split(";"), 
["All"]];
jg.prototype.xg = ["2>807A;f10O728F1f4V1PNF2Wd78?PZl1%2l2 ;oA0FN (j90d3 H3XBMgq30w<40F2Y:Z0;+M01E]J6O6 Q6A06f5#1H2,]4M9Psv+V1I.V1@3W}8 2JA0sOc 2+90FN2U10t2H3kg3u0%E6OW6 ;O906$UGv771.Uv46 w010EGX26G6D010f1E:2v2894WX3:2v+]lEQ?60f2E11OH1P1M]1U11U]571WO6WUv1u,8OUmO6G68E8cOF18H6Ue6WGGu:26G8:2NO$M:16H8%2V28H211cvg.]4s9AnU?8ON4PNdkX4-1Gc^RO1t78V686GG6GM8|88k8-58MGs8k8d28M8U8Ok8-UGdQGd4bZw0:;c8%Ef1Ev28v28]BmM 1F68W8e2>90c8GN3]3uV1[72$Ef1E.U8t18W728M8MG-1148MO!GkgOv0 ;DA0k2mO1NM[d3Gl5O!f16ut2WN4 oUA0k873g510E I)B0>E30N18U XFX1x6e1oUg2701+6G|nE8I030QjW0 A-80PdsWF1GMG6$l7H1!%2N2G|mk]7? Q4A0F1mv3}1v8,uU YnK0#5A>E1-7 I{)0%4!P7|%4}3 (PD0MAbU1}2P1!".split(" "), 
"]2E8EG886[6O6f2H6]1u 14f4gX808M%36%1gu30 (s70:<.MO$EGGG8OEms88Iu3068G6n1 n36f48v2894X1;P80sP26[6^>10F1H76:2,va@1%5M]26;7106G,Q)s06 gm808kIr3072v1U8A(t06 Ig80e91E91686W8$EH1X36P162pw0,12-1G|8F18W86nDE8c8M[6O6X2E8f2886".split(" "), "P4,At10,HC,1I,fb,%A,%A,%A,%A,%A,%A,%A,%A,XK,%A,X6,PP,X6,Q]10,f3,PR,vB?1F,m,nG,]K,m,Yca0,vz,f3,1I,%A,]a, gs90V597@1Pvt2g+20,%2s8N1]2,n3N1 9G6eGEoX80Ocm,1IV1%3 ot20cvjE9Ck]Lcvd,^910#1oF10,(V60P2!QZV0,9Ts8^aP0sHn6%JsH2s](#2^5q0l1 o560EgM10,Yk10EGMo230w6u0}39175n1:aMv2$HCUXI,^E10cnQso,60@8 w.80-2o?30EHVM2Us0,w{#0?".split(" "), 
["vF;Z10Mwx406^H20UX2Uf4Ugn#0;`o0sbwt0vME", "]=gg50E^$zA#LDF1AV1", ":2;S60gC206", "w-10f4^#206IV10(970", "fEAQ80?P3P4wB40^@s0"], ["(y80M8E", "%+#5GG,8t1(#60E8718kWfJ,P4v%71WO|oWQ1En1sGk%2MT_t0k", "f!!^)30(C30f1H5E8?8l18d2X4N32D40XH", "%?71HP62x60M[F2926^Py0", "n<686"], ":5N2mN2P6}18#28V1G,GcGcGcGMW68cGsO6GcGMGMG6GMGd1G$W$6m6H16X9M15O8%c86$N2G8d2G86W86956g<60cH2878Lf706Gf6 ^x90}6^yX1#2G118GOOU$uP286G[MG ]r=i1jKjnjQq40L!401GCpwGi0Trh04pM83:liJK1qQMnmaJQE10jm10(;50Lj50wX50{W50A1i0TJd0bB506(T40v]a8zE50I0105010IUi0{Zh0:7=w*Uc:V%Dih:h`h9X%B41n1WSL1Qau9q`jh_Bnm4lPm*mHn6amfmSmH6;+80j630Lj50wX50{W50QW80P1T#806f=^Y40(d30gtZ0bUi06AL10D9102g70+M70(#80+q80P3*jA#80{z80 ]N6[6m6m6m6m6Gn1O6m6W6W6G6W6v186GM8688sGcGUGGEGk]1F3OE8-2md4A570@3%5718}2H9lBm#1Xyf2o]20}1u62cW0F1v6N1O6zIi081s868EG68s8E8EGcu8E8UGEw^60-41293N3v!H1f1U9AO11G6e6O88m11X186IWZ072f9E %8N2%96$uH4H3u:9M%CF28718M868UO?86G68E8868GHOeP1SPE8GW11OO6918Of26868886OV3WU%2Wg|70EO6 1uH1WGeE11G6GO8G868s HZ6uP268691s15P361Jd1oQ7068H8cHw!Y?20kAZW0sH26P1l6:BU HF8WWO8:A6116v5H6!P3E%KcA170!nR6vtM8E8?86GUGE8O8M8E86W8.U12-2Qd40HBMvE,et8:2Qtq0kg710N2mN2".split(" "), 
"(W10V3[V32Bg0l3zIg0k%36QEg0s 2510#B$7E4uHfWE Id40@2mML230Y230 ]]8E88#18@3P3$wC70@1GcGV3GcGs8888l1888888O#48U8eE8E88OEOUeE8k8eE8E88{l706W Q210F12$A0NAuk ^-+0cG8@386OG ^G106g^A0-2o,V0-2Gl1$d2 ;Y40V3]3cW2a70V3 ^tB0F48F4 ^l*0V2 ]@MG6OEX7EO71f18GU8E;{(0#6YBt0N6 (z)0|8N28t1868N1GF1937B o_50l2 oh*0#28M g|50N7 A;*0N4 oe10g^$0U XG%$e68%6Ef26OoN70888888n58Uu88EOu8EOu8E.886:Q".split(" "), ["gP50NuGd1]oN6TR10Xu6", "wG50t7", ";(*0F7"], ";(40l68MGk88MGt38MG@28MGk88MGN18758MG}5X3V1w<60}1.k8k8k8k8k8k8k8kr070t2%1, I520t2i3,13V1 o_B0-4. ^th0NOWV1[6*2Mf1, ^720E g?*0t2G,".split(" "), 
"os10N2m,f3MW-18F68H26[EGP774g7g0N6oDN05!%0MGN1mG6]2[#18F1G19f2,O62t606IwZ0l1oUR0#25W40 Il10V2eE`5#1P46o:$0 g|10V311KcP1O:5,%S? gr10c]2UH46%2f6k8V19D6 ;Y*0V4 gE=0-@HD@8H1M gf10#2:1M;>$0!f3 ^V*0l2 AA,0N2e Aw*0F3WF1 I7,0d2O wq10P1O]2[?X21DF18V5GE It*0t28 I!10MA($0-813@Wv1#5G-4v371fAE88FC 2a(08.F18U886868!".split(" "), "gj20sG6G@18k8OMOf1n16P16*C6f2E958kG6GE.[6G,G,:*6g4506 (X20-4Ov1X16f1mk(Eg0cODRg0M958d1GU91V1X]6g4506IGa0l1mE (*20!8E8@18k868UOv1X16y8E958s8E8E:16G,8fk6g4506 Av20cW6G@18k8GG693]1EyO69EE958UW6GEO:1|O%v6g4506 QR30s8E8}18,8UO936q86958k8E8Mu6116G,86g4506 oZ70F3%3E=3#1ON1 (r60l2O|W|WO| ^c30s8E8}18V1O936H2cSB6P5k8E8M.[6GV1OI[406 (h70t2i3,%2s Y[20sG6G@18k868UO13EX1yl6XbE958kG6GE$6[6G?]Y6g4506 oni0d4q46n4d1.| oo30l1O728!8GkC66X6Wc88sv1E2+406 ;3308cOE8MO6886O6OEO|1247X5UOE8M.P1-1 wF30s8E8}18,8UOX26m6y8EP5k8E8Mu6116G,$sPA6g4506 2{30%5E8M8M8M8M8M8|8Ef2MiC?8l4f468ek8c$E8M8M8M8M8M8|8E8N18k(i806e,Gs (u70M8M5f30M YZ30 gU,0M86es8E8V2WEW!$! wU6068AU606e,Gs2*V0}4w|M0M (bi0@3 Yr2068 Yf20s Qz20G93EG Q0306 A|30]4.WWW91.868$n1.WWW91YX#0M".split(" "), 
"(C70F4n1k*6UP4d111}3 Q`i0t392E8s43F191$6G,GM ^zi0d2S3,n2, ;I6073GE8?v3q3l28,W,m,Hi-2 g:3068G68GmM8k8E88G68M86.GU926`3Gc86.8cG, QK40-3:1f1cWMOO6uEW7191(xe0V18cOD-e0#18V1mMWE8EGkOMH1|8d1wxe0mE8 Y%60@3]1k42d1u6m?O6 2z60t2GU ;z30N48691c*1Gk11@1 2>60d2G6 2C606.#1 AA60}1 gM60v311 Y%i0F311 ^N70-3O| I760718k]26 2C606%3718E86".split(" "), "ozC0:42Pi0}1WV4Lbi0MO,8F1H1EmeEPqQ?r06 ;gj0}}-I (zk0Vr (+i0MAj20}}-I A,i0?2#30Vr A-i0EIS40Vr Y-i0EY]40}}-I w-i0IC60}}-I (-i06^U70Vr ^-i0Q`70}}-I I}r0Vr wqs0Vr 2.i02YA0Vr A.i0Y}A0Vr I.i0(qB0Vr Q.i0 oh40FN^L80d8 oJD0#2]5#2IGs0MX5#2OcGcGcGE".split(" "), 
"ozC0:4HIt3XA72IQv0l2{z+06I]B0MO,8F1.MGmeE2#v0EjK306 ozC0:4W#7iDMOF2X1c8eE986G68H86XD6^Bs061R946 ozC0:49978PMV1SkMOF2X1c8eE986eH8MHD6^Bs061R946 YX60738t4$t38aFN18,%3H9 oRg0-18}}-FL.U06e,Gs^rT0IG10@4 Ql)0M ^%C0996G1MF1gas0U2E$0 ^%C0996]8PDF1vRF48@7g`r0N18}3 Ql)0M".split(" "), "ItK071]BYL10TX10kOJE8F192426 ;wK0M8! AyK0Ef1a1M8 ^yK0,8E2y30{x30| Q#K0U^iL0>iL0EG}2 Q)K0k (bC0c]R]q8O8f2Eoeq0]116$f7fG;(k1E A(D0t3(rX1V288k8!8k8868|8l188U8718M8N48E88GE8#48MG@3oA20]G2P60;QB0]9^(20^7L0t2".split(" "), "^)K0M8N1 (+K0N2 A.K0VA15`4@48l6AGL05GL0VT86GZG68d39141|8t1 (gL0V3 IkL0MY870T8706 (kL0,gzK0bzK0U838c ;mL0#1Yw50 woL0-1 oqL0#4 YvL0-1 QxL0? QyL0d98sWC1$M8F3 Y;L0V58@2 ^^L0d2 g{L0U ^{L0l12KK0{JK0| w0M0! g1M0E8c838,(HK0zHK0U ^3M071 A5M0F2 Y7M0t2;ZD0+ZD0MeZU8| ACM0l1 (DM0V2IS10 Y]a0tD QcC0}1%P8]qG688P1W6G6mO8;fq0f1E9386H18e11Ee[n16[91e11.G$H1n18611$X2cX5kg(k1F28d292%B6f6%A15P1O ;+D0tN8l49H2i40kQRl0(Q+0uH3v1H788]9@18}2872Gk8E8|8s88E8G-18778@28lF8-6G,8@48#486GF28d28t18t48N3874868-78F58V18}28F48l48lG868d18N18#18!8FN8@98FP8s8}F8N28,8VG8F18tF8}2(s30%U;@101bI-50QE60^{40;X60IhB0}Oo_20d3".split(" "), 
"IGM0@X8U8?8F1=2n1P1t18V4HCyGf4t8Gk%38y46ul28?888s12`1@18#2f3a3V38,$xkGBGs ^`M0c^MJ0>MJ0F4OJE8N1 g3N0EAHJ05HJ0VDH2C2728V28-3=3]3d38U8U_eel88F32(I0{%I0?;%I0+%I0!8! QjN0!iXnXF1 YlN0k AmN0EJOU838 AnN0l1 (oN0738|4191d2 wvN0N28t6y6%6#18}18Mi2n2738s$i1$s8V78#2:2y5:2#28d7n1i1d18M8MRWl1 2DO0@283871 YHO0t1;260+260#18MRW#3:1*1#1871 QSO0?OJE8s YUO0k2?H0{>H0| AWO0@1 AYO08t4 2dO0E QdO0D#30I#30V28}44595@B8t1y1%1V88kpu?86BGU838E I.O0c8E A:O0| I;O071 Y<O0t68kp$!838@1 ^{O0s 2$K0oM40U A}O0@1OJE8-3mZU86x$@2I8H0D8H0c (9P0, wAP071 ;BP0s oCP0d5 AIP0d1 wJP0!8s QLP0!Y0H06b0H0l1mhc8U8,<[7186BGF1 (gX071[<,8dB wud0t4 obe0 wne0V386BG, (:e0V5 YeC0#2P=11Wm11686W(dq0G86:1mP26m6%1me%1E11X1OmEf1692Ge6H1%1Gm8GX3kX4[F1A,k1}18l58E8EGMP8:5]6]9 YAE0@G8V(I!20|I!10E:5fX18EA8k08QQ+0%1u8Gn3v11B1693P2uO91$8OH2H713vMXG%1%K:6]SG13%2H@vX93tU8F587w8}V8-68tA8dO8db8V38758V28t58F18k8#C8t!8V78V98tU8lT8de8}}V98lB8}B8#387987H8#38NJ8@78U8N18U8kgE10(L10v_X4ngA6109Nn2v2Ac101O1}HSQ*1094^.50N2:BP6Ay10Q<40]5;s20AE20V1H9^j20l1%g-3YY20YU10}zAv10@2;310F1]E72X3}1".split(" "), 
"oSP0NW]5=5-58M8V2a2f2d48F2K2P2l4 Y]P072mhc8!838838 o{P0-1 g}P0E2LG0{KG08kpus871C1H1?8}34494NO8?_11k8#5]6=6-38F24C9Ck8E874G*7P3H468l411_?8t28|4191#2838l186BGk ((Q0U I)Q0F2rI40wI40t2GB68@12dA0{cA0E (;Q0(OF0zOF0N1 I=Q071 Y>Q0-1 Q@Q0F1OJE8-1 ;^Q0U Q_Q0NA(+60j_B0(D50t1XDSDN2H1C1718V523F0{2F0,GB68-1 oJR0!8rS50gS5086868k (LR0V2;070+070U wOR0@59242}187LAuE05uE0#H2R10{Q10F886uOK1Gk8E8l6uH6=6k8768Ev4P1`5l48F18NAW8hM88!8F1m=1P1c8t1 2TS0E838d5 2ZS0I:D0D:D0@1 AbS0F5 YgS072 oiS0! YjS0k 2kS0t4 (oS0U IpS0-2 AsS06WRM8VE8N28!K3P3F18s8t5i6$%5}58V1a1f1}78#1G98KA:168}7872v5v1S7l5G718E8|v3a6H1f1-28k8t38V1`5f4f1d48728Mn4`4Wd48EG*7n768d28@2`213758-1=1]1k I$T0!%1y1t18tC8MRWl39444}38,838#291(350>450|8N1g^B0nI12DFC0t78Em<Oc8#1 ;GU0,jW70oW706 ^HU0U YIU0M IxK0gl90s gJU0l1 ALU06 QLU0N3838#3 wSU0tA$6)sGF1un1K2k868chuk86<[74 ;ba0U8? 2Sb0V6 I]b0#4 2Fe0k Aae0k838M ^SC0HE}2::MGEG.Ogeq0G$mEm6OGOEWE%1eE916Ou6m868W$6m6GU11OE8W91WEWGMmOG6eM$8e6W6mG611Of371136P2}18EH4M(!k1:8e#4G6G-28}2871]7$6 ^aE0]uFq8#@^U20U%LEY`k06AW+0f7HLfkX2vCH4vM(a10gv10IO10Yg30Hz}}VE8to8-w8@J8-28tK8td8N48FC8E8l68cGNM8V#8#98lK8-A8-A8|8728E8l287N8}}#E8@N8V%8tC88V88-88lC8N18@48t38l`;Y20(>101dYk201)XQ6nUv^Xao940kAi10cv3QF40UHdXG|fe8o^40}}l3YD10c]Ak]7@19YcX4U".split(" "), 
"QmU0U (mU0838N912`1M8d18,i2n2,8t2y2%2F78Wh8M8F186BG@4 o@U0, g[U0d4 2{U0k w{U0! g|U0s I}U0?838738k8mhcG!).V1 g7V0k A8V0t2[<,8d8muK1c8k872[<,8}1838l1 ;SV0k gTV0|=Q]QN3 ^XV0s^;A0>;A0! gZV0N2GB68l1 (dV0t5v1q1l1G38V1IzA0DzA0N18|4191V98EJO QzV0k ^zV0d1 g#V0N15]20A]20FB8t2%1i4%2t18!upk872Gu<68k8t7 I5W0-1IV40^-50DFA0}18!).!11^L40{M40?8-3Q6A0L6A0s wGW0c((20 IHW0-5upk8}312`1-1Gs).t2GB6 (XW0-7 wfW0#1G?Qj70Lj70686BGs YOd0@L Ald0 ;-f0758MRW72 IIg0E QkC0}1n.O86n1;eq0$f2u6[P1[68$$P1P16926u[[E91$6.u:2UH4|f6O|11X1[Ew`k1V18V3 AoG0@:;12071n^kXD6I4R1:4WnB9d[15:49lHkX.1pP5Hw]nf]^H20()109d;u101@]2%KY!10:9f.;(307k8dL8}38@88-98?8V?WdA8}S87Q8748l!8-T8#d8d28lI8FK8#12@30nQI,10w^402B20F22,50-1AQ30}b(F10V49f}3]3".split(" "), 
";jW0?8F5K5P5@5%5y5t58s8,<[d213OS3@28E8F5e6hUGl1838s I[W0Mr990w990V2r?10w?10|eZU8l1[<,8}2eZU8s838U Q4X0@88d2i2n2F3%4y4t48686BGNA8686Ze728.a3X28!8}3 guX0U838#1 ^wX0t2OJE8}1 A$X0?8MLI20;H20W73 (*X0F5eZU8M ^;X0? ^<X0c g=X0@2 g@X0}211_?8718UZe? Y|X0, Q}X0}8n2i2d28N7bN90gN90l68V486BG, (UY0k YVY0! IWY0! 2XY0,86BGE gYY0N1 ;ZY0M IaY077 YhY0M (hY0c QiY0EY$70T$70768V11AiBf1@58EJOk8U8N28#18d2a7e]6d58V1(a70bk70v9t9H4(L70Lb70HBE8#38t88@3838lH8E8o=605>60O8N3P7K7N28kpud286H1a1G7188|8cI(60+(60m-1 gjZ0EDPA0IPA06872 ImZ0l28}283873a6f6c8t2y2%273%1X2C4t18N28d48k%8a9ut39444t3H4C4M8!8#1H2C2?8|8@1X1S1N18? ;2a0| ^3a0}1 26a06DVE0IVE0t6838#48t2y2%274838d1P1K1F18w^50r^50l2>YD0^YD06$xs (Va071 2Se0l4 oBg06 YmC0l2IPr0MemO68691Em6e6.6GO6n1Oem6P268me$6n19112Eue86WWW:168:4?v6G?%2^,k1Wn56XC-28U86G68M8@4 o5E0oq10;%10VE8VH91l;P^(ok08wb+0Q0101Io3102E20XZoi10n>2;10XUPN18e]1;n30v6m6(L40vHvCX1:8;g10A{30HM}}N@X2#B8F68@D8VI8@(8NQG#L8#68t18tO8#v8Na8##8VC8#^8tt(j10wB30YE30E(870NF13#hfxd1".split(" "), 
"w4M0(<J0 ^Wa069141!868d3 Yda0,86BG@1QC50LC50? oha0lC]1wp50rr50-18F5P1K1F18@88N12Y50bZ50X1}5 A7b0N1 g8b0N1 ;9b0@283 2Db0N3 YGb0}88V2 gYb0| oZb0cw-40r-40d5 wfb0!8}212C593@18#48M[S1W,8}3mn1C2c8d18d386B I$b0#2 2)b0738V1Aa40rb40f1772V40{U40F2 2|b0-1 ^}b0U Y0c0!TGD0YGD0}29141|8}B8OZ8E8U.)!OB68k YKc0-5838-9838c Abc0NB gmc0c 2nc0U (Ig0 oaC0XE#1X*en1Ydq086X1ev1[.mn1Gn18116P1[8m]111%1n1v1[G92G6P5kX7|v1o5l1n5F18E8! QAE0gj40lFu-8etLO#D2.k06(T,0PL9,AY30v9]_A^60Yl10;N50Az10oi10(I80F`8M8V58Nh8lCu}}}hml3Glb8N@;820o{80|m-3n3V3u-712#9nwv3".split(" "), 
"gnc0@3zLA0(LA0-AX2Yf30+h30k8l18N94B9BV48t28QO30LR30%28t88@12E305G3012l4mh8M8F4y4%4@3v1q1l18l2 Ykd0s Ild0@48?_11N3 Yzd0l58N1S1X1-6 Y<d0E w<d0F4 ^@d0d9 g1e071 w2e0M (Xf0@5871C1H1F2 ;Fg0F1 ;qC0!:(Ihq094m.uu14:1]1EWH191$H1m92v1:6X8MYzk1vf7186 QTJ0l8H1F4OV68-5:ss2?j0E2W+0AQ50Q>U0#88@yP2dcf1798N#8FJQn30@1^;106;y30l8f4@1P1N61OV39B!".split(" "), "23e0k w3e0-8 oCe0V18MRWc wFe0c IGe0zy706wy7071 gHe0t1eZU8,Gkx6ud18|4191#3 wWe0V3 Qbe0E wbe0V28UZeN2OJE872838-3 Qse0E ose0t1 wrC0?f)2vq0f298Ef56n8MIGl1N1 ooH0g520-Q8!IHS1:_P32-30ARC0YA40](^b70gd807Y8lBelaW728NG91}Zv1t288-4Iz70d1mt1n1|el1H2N1".split(" "), 
"Que0V68V1a1f176ob10jb10-2(Y10zY10M I@e0N4 o_e0k I`e0l211_?8d1WRM8k o2f0, g3f0E (3f0, w4f0t2 wsC0s;Lr0:9nTgHl1U ^_J077O#9wM(1gQ10#Y]3};gl60@192l2".split(" "), "Y7f0-2IB10DB10#2[<,8d1eZU8F2%3y3}2eZU88t2WRM8l31b`a#28EJOV1 Qhf0N38MRWt78]s=s#3838758MRWV18728EJO}2 w@f0! o[f0V3 2`f08d1 A`f0n1E 2|f0s (|f0, w}f0M 20g06>mI0^mI0c8#2 w3g0M 24g08| A4g091E o5g0U 26g071 I7g0V2 w9g0N1 2Bg0c (Bg0}3 AHg0E8s gIg0E ;Ig0c YtC0#1QIr0692H26ef66P5946H5nE.6Q,k1fYt1 IDK0t9$@9uNDGkoOR1fk^x102.20nDQf301=^N50;g202j30M^>90od80g320to12t!]1-H8F[GN6284075f3@394E8l2.G".split(" "), 
"ItK0GO8n7H4u8v36%2$P3]8va]59388:DnS8Em:6v3MH6n%fmuX4oZ10]B691E8PEn.X417IH10Q710H.AI10n)Yv20%j1d^L20WPB2W20P3e]3XBT(d0112T808YG40 ozC0:4>nC0]l8w%70886G6%m^u30U8?8V2GmO8Ewgs06 HF;S8091:IIk40F3PB|%CF2[U%8#2oyr06868EG8116Of28GX2MGMHB6O o(D0XB]`].o#V1]8XBv5^A2018$X1PUv1f2Qf60Qq10gt402ZA0 PK6mE86W6e68Wn1uX113v2]88888888 oxC0| AQC0N28M8d7H%F3".split(" "), ["o070><400V1*10%12#g0q40E1u^vQ0K506L[Q08LEc00s+:400F1Q#g0+;b00Eo;b00nnowQ005LR00UO0EA0P09)0U;d100{^Q00{Cc00ce0Y=b00o%P0Ae100{6%0o<b0fOL6h00}1G0YOh00N2$0kS10k[;qQ00}2eZ0M8071{2R00l588H20TOc00cf40i40#1%20*20,H1C10Um92`106W06i10UP1[<0sO0OJ06ZC1I<b00V3%1y10v1q10U8uh0EOJ0h[g|P00d6*T0#4**0-1:)0-1[0l1ww900@}0F9"]];
function kg(a, b) {
  a || e(Error("Invalid class name " + a));
  ja(b) || e(Error("Invalid decorator function " + b));
  lg[a] = b
}
var mg = {}, lg = {};
function ng() {
}
var og;
ea(ng);
u = ng.prototype;
u.ua = aa();
u.f = function(a) {
  var b = a.e().f("div", this.jb(a).join(" "), a.qa);
  pg(this, a, b);
  return b
};
u.z = function(a) {
  return a
};
u.pc = function(a, b, c) {
  if(a = a.a ? a.a() : a) {
    if(C && !F("7")) {
      var d = qg(Xa(a), b);
      d.push(b);
      sa(c ? Ya : Za, a).apply(l, d)
    }else {
      c ? Ya(a, b) : Za(a, b)
    }
  }
};
u.aa = r(k);
u.v = function(a, b) {
  b.id && ef(a, b.id);
  var c = this.z(b);
  c && c.firstChild ? rg(a, c.firstChild.nextSibling ? Ta(c.childNodes) : c.firstChild) : a.qa = l;
  var d = 0, f = this.m(), g = this.m(), m = p, n = p, c = p, s = Xa(b);
  La(s, function(a) {
    !m && a == f ? (m = k, g == f && (n = k)) : !n && a == g ? n = k : d |= this.ie(a)
  }, this);
  a.u = d;
  m || (s.push(f), g == f && (n = k));
  n || s.push(g);
  var v = a.ta;
  v && s.push.apply(s, v);
  if(C && !F("7")) {
    var t = qg(s);
    0 < t.length && (s.push.apply(s, t), c = k)
  }
  if(!m || !n || v || c) {
    b.className = s.join(" ")
  }
  pg(this, a, b);
  return b
};
u.Vb = function(a) {
  kf(a) && this.ac(a.a(), k);
  a.isEnabled() && this.bb(a, a.p())
};
function pg(a, b, c) {
  b.p() || U(c, "hidden", !b.p());
  b.isEnabled() || a.oa(c, 1, !b.isEnabled());
  b.A & 8 && a.oa(c, 8, b.xe());
  b.A & 16 && a.oa(c, 16, !!(b.u & 16));
  b.A & 64 && a.oa(c, 64, !!(b.u & 64))
}
u.Gc = function(a, b) {
  Wc(a, !b, !C && !rb)
};
u.ac = function(a, b) {
  this.pc(a, this.m() + "-rtl", b)
};
u.Ja = function(a) {
  var b;
  return a.A & 32 && (b = a.G()) ? fc(b) && gc(b) : p
};
u.bb = function(a, b) {
  var c;
  if(a.A & 32 && (c = a.G())) {
    if(!b && a.u & 32) {
      try {
        c.blur()
      }catch(d) {
      }
      a.u & 32 && a.mb(l)
    }
    (fc(c) && gc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
  }
};
u.t = function(a, b) {
  L(a, b);
  a && U(a, "hidden", !b)
};
u.ga = function(a, b, c) {
  var d = a.a();
  if(d) {
    var f = this.tc(b);
    f && this.pc(a, f, c);
    this.oa(d, b, c)
  }
};
u.oa = function(a, b, c) {
  og || (og = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  (b = og[b]) && U(a, b, c)
};
u.$a = function(a, b) {
  var c = this.z(a);
  if(c && (Xb(c), b)) {
    if(z(b)) {
      cc(c, b)
    }else {
      var d = function(a) {
        if(a) {
          var b = J(c);
          c.appendChild(z(a) ? b.createTextNode(a) : a)
        }
      };
      y(b) ? La(b, d) : ha(b) && !("nodeType" in b) ? La(Ta(b), d) : d(b)
    }
  }
};
u.G = function(a) {
  return a.a()
};
u.m = r("goog-control");
u.jb = function(a) {
  var b = this.m(), c = [b], d = this.m();
  d != b && c.push(d);
  b = a.Ia();
  for(d = [];b;) {
    var f = b & -b;
    d.push(this.tc(f));
    b &= ~f
  }
  c.push.apply(c, d);
  (a = a.ta) && c.push.apply(c, a);
  C && !F("7") && c.push.apply(c, qg(c));
  return c
};
function qg(a, b) {
  var c = [];
  b && (a = a.concat([b]));
  La([], function(d) {
    Oa(d, sa(Ra, a)) && (!b || Ra(d, b)) && c.push(d.join("_"))
  });
  return c
}
u.tc = function(a) {
  this.Wc || sg(this);
  return this.Wc[a]
};
u.ie = function(a) {
  if(!this.gg) {
    this.Wc || sg(this);
    var b = this.Wc, c = {}, d;
    for(d in b) {
      c[b[d]] = d
    }
    this.gg = c
  }
  a = parseInt(this.gg[a], 10);
  return isNaN(a) ? 0 : a
};
function sg(a) {
  var b = a.m();
  a.Wc = {1:b + "-disabled", 2:b + "-hover", 4:b + "-active", 8:b + "-selected", 16:b + "-checked", 32:b + "-focused", 64:b + "-open"}
}
;function X(a, b, c) {
  Q.call(this, c);
  if(!b) {
    b = this.constructor;
    for(var d;b;) {
      d = la(b);
      if(d = mg[d]) {
        break
      }
      b = b.b ? b.b.constructor : l
    }
    b = d ? ja(d.ja) ? d.ja() : new d : l
  }
  this.i = b;
  this.qa = ga(a) ? a : l
}
A(X, Q);
u = X.prototype;
u.qa = l;
u.u = 0;
u.A = 39;
u.kc = 255;
u.Ab = 0;
u.$ = k;
u.ta = l;
u.oe = k;
u.Rc = p;
u.Yf = l;
function tg(a, b) {
  a.j && b != a.oe && ug(a, b);
  a.oe = b
}
u.G = function() {
  return this.i.G(this)
};
u.ed = function() {
  return this.L || (this.L = new ag)
};
u.pc = function(a, b) {
  b ? a && (this.ta ? Ra(this.ta, a) || this.ta.push(a) : this.ta = [a], this.i.pc(this, a, k)) : a && (this.ta && Sa(this.ta, a)) && (0 == this.ta.length && (this.ta = l), this.i.pc(this, a, p))
};
u.f = function() {
  var a = this.i.f(this);
  this.d = a;
  var b = this.Yf || this.i.ua();
  b && nf(a, b);
  this.Rc || this.i.Gc(a, p);
  this.p() || this.i.t(a, p)
};
u.z = function() {
  return this.i.z(this.a())
};
u.aa = function(a) {
  return this.i.aa(a)
};
u.ia = function(a) {
  this.d = a = this.i.v(this, a);
  var b = this.Yf || this.i.ua();
  b && nf(a, b);
  this.Rc || this.i.Gc(a, p);
  this.$ = "none" != a.style.display
};
u.s = function() {
  X.b.s.call(this);
  this.i.Vb(this);
  if(this.A & -2 && (this.oe && ug(this, k), this.A & 32)) {
    var a = this.G();
    if(a) {
      var b = this.ed();
      b.jc(a);
      this.da().c(b, "key", this.ka).c(a, "focus", this.nb).c(a, "blur", this.mb)
    }
  }
};
function ug(a, b) {
  var c = a.da(), d = a.a();
  b ? (c.c(d, "mouseover", a.Ta).c(d, "mousedown", a.ob).c(d, "mouseup", a.pb).c(d, "mouseout", a.pe), a.vc != da && c.c(d, "contextmenu", a.vc), C && c.c(d, "dblclick", a.wf)) : (c.W(d, "mouseover", a.Ta).W(d, "mousedown", a.ob).W(d, "mouseup", a.pb).W(d, "mouseout", a.pe), a.vc != da && c.W(d, "contextmenu", a.vc), C && c.W(d, "dblclick", a.wf))
}
u.O = function() {
  X.b.O.call(this);
  this.L && this.L.detach();
  this.p() && this.isEnabled() && this.i.bb(this, p)
};
u.g = function() {
  X.b.g.call(this);
  this.L && (this.L.R(), delete this.L);
  delete this.i;
  this.ta = this.qa = l
};
u.$a = function(a) {
  this.i.$a(this.a(), a);
  this.qa = a
};
function rg(a, b) {
  a.qa = b
}
u.bd = function() {
  var a = this.qa;
  if(!a) {
    return""
  }
  a = z(a) ? a : y(a) ? Na(a, jc).join("") : hc(a);
  return ya(a)
};
u.ac = function(a) {
  X.b.ac.call(this, a);
  var b = this.a();
  b && this.i.ac(b, a)
};
u.Gc = function(a) {
  this.Rc = a;
  var b = this.a();
  b && this.i.Gc(b, a)
};
u.p = q("$");
u.t = function(a, b) {
  if(b || this.$ != a && this.dispatchEvent(a ? "show" : "hide")) {
    var c = this.a();
    c && this.i.t(c, a);
    this.isEnabled() && this.i.bb(this, a);
    this.$ = a;
    return k
  }
  return p
};
u.isEnabled = function() {
  return!(this.u & 1)
};
u.na = function(a) {
  var b = this.getParent();
  if((!b || "function" != typeof b.isEnabled || b.isEnabled()) && vg(this, 1, !a)) {
    a || (this.setActive(p), this.za(p)), this.p() && this.i.bb(this, a), this.ga(1, !a)
  }
};
u.za = function(a) {
  vg(this, 2, a) && this.ga(2, a)
};
u.xc = function() {
  return!!(this.u & 4)
};
u.setActive = function(a) {
  vg(this, 4, a) && this.ga(4, a)
};
u.xe = function() {
  return!!(this.u & 8)
};
u.J = function(a) {
  vg(this, 64, a) && this.ga(64, a)
};
u.Ia = q("u");
u.ga = function(a, b) {
  this.A & a && b != !!(this.u & a) && (this.i.ga(this, a, b), this.u = b ? this.u | a : this.u & ~a)
};
function Y(a, b, c) {
  a.j && (a.u & b && !c) && e(Error("Component already rendered"));
  !c && a.u & b && a.ga(b, p);
  a.A = c ? a.A | b : a.A & ~b
}
function Z(a, b) {
  return!!(a.kc & b) && !!(a.A & b)
}
function vg(a, b, c) {
  return!!(a.A & b) && !!(a.u & b) != c && (!(a.Ab & b) || a.dispatchEvent(cf(b, c))) && !a.Lb
}
u.Ta = function(a) {
  !wg(a, this.a()) && (this.dispatchEvent("enter") && this.isEnabled() && Z(this, 2)) && this.za(k)
};
u.pe = function(a) {
  !wg(a, this.a()) && this.dispatchEvent("leave") && (Z(this, 4) && this.setActive(p), Z(this, 2) && this.za(p))
};
u.vc = da;
function wg(a, b) {
  return!!a.relatedTarget && bc(b, a.relatedTarget)
}
u.ob = function(a) {
  this.isEnabled() && (Z(this, 2) && this.za(k), zd(a) && (Z(this, 4) && this.setActive(k), this.i.Ja(this) && this.G().focus()));
  !this.Rc && zd(a) && a.preventDefault()
};
u.pb = function(a) {
  this.isEnabled() && (Z(this, 2) && this.za(k), this.xc() && (this.ub(a) && Z(this, 4)) && this.setActive(p))
};
u.wf = function(a) {
  this.isEnabled() && this.ub(a)
};
u.ub = function(a) {
  if(Z(this, 16)) {
    var b = !(this.u & 16);
    vg(this, 16, b) && this.ga(16, b)
  }
  Z(this, 8) && vg(this, 8, k) && this.ga(8, k);
  Z(this, 64) && this.J(!(this.u & 64));
  b = new M("action", this);
  a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Ke = a.Ke);
  return this.dispatchEvent(b)
};
u.nb = function() {
  Z(this, 32) && vg(this, 32, k) && this.ga(32, k)
};
u.mb = function() {
  Z(this, 4) && this.setActive(p);
  Z(this, 32) && vg(this, 32, p) && this.ga(32, p)
};
u.ka = function(a) {
  return this.p() && this.isEnabled() && this.Da(a) ? (a.preventDefault(), a.stopPropagation(), k) : p
};
u.Da = function(a) {
  return 13 == a.keyCode && this.ub(a)
};
ja(X) || e(Error("Invalid component class " + X));
ja(ng) || e(Error("Invalid renderer class " + ng));
var xg = la(X);
mg[xg] = ng;
kg("goog-control", function() {
  return new X(l)
});
function yg() {
  this.cf = []
}
A(yg, ng);
ea(yg);
function zg(a, b) {
  var c = a.cf[b];
  if(!c) {
    switch(b) {
      case 0:
        c = a.m() + "-highlight";
        break;
      case 1:
        c = a.m() + "-checkbox";
        break;
      case 2:
        c = a.m() + "-content"
    }
    a.cf[b] = c
  }
  return c
}
u = yg.prototype;
u.ua = r("menuitem");
u.f = function(a) {
  var b = a.e().f("div", this.jb(a).join(" "), Ag(this, a.qa, a.e()));
  Bg(this, a, b, !!(a.A & 8) || !!(a.A & 16));
  pg(this, a, b);
  return b
};
u.z = function(a) {
  return a && a.firstChild
};
u.v = function(a, b) {
  var c = ac(b), d = zg(this, 2);
  c && qf(c, d) || b.appendChild(Ag(this, b.childNodes, a.e()));
  qf(b, "goog-option") && (a.Gd(k), this.Gd(a, b, k));
  return yg.b.v.call(this, a, b)
};
u.$a = function(a, b) {
  var c = this.z(a), d = Cg(this, a) ? c.firstChild : l;
  yg.b.$a.call(this, a, b);
  d && !Cg(this, a) && c.insertBefore(d, c.firstChild || l)
};
function Ag(a, b, c) {
  a = zg(a, 2);
  return c.f("div", a, b)
}
u.Gd = function(a, b, c) {
  b && (nf(b, c ? "menuitemcheckbox" : this.ua()), Bg(this, a, b, c))
};
function Cg(a, b) {
  var c = a.z(b);
  if(c) {
    var c = c.firstChild, d = zg(a, 1);
    return!!c && ka(c) && 1 == c.nodeType && qf(c, d)
  }
  return p
}
function Bg(a, b, c, d) {
  d != Cg(a, c) && (d ? V(c, "goog-option") : sf(c, "goog-option"), c = a.z(c), d ? (a = zg(a, 1), c.insertBefore(b.e().f("div", a), c.firstChild || l)) : c.removeChild(c.firstChild))
}
u.tc = function(a) {
  switch(a) {
    case 2:
      return zg(this, 0);
    case 16:
    ;
    case 8:
      return"goog-option-selected";
    default:
      return yg.b.tc.call(this, a)
  }
};
u.ie = function(a) {
  var b = zg(this, 0);
  switch(a) {
    case "goog-option-selected":
      return 16;
    case b:
      return 2;
    default:
      return yg.b.ie.call(this, a)
  }
};
u.m = r("goog-menuitem");
function Dg(a, b, c, d) {
  X.call(this, a, d || yg.ja(), c);
  this.xb(b)
}
A(Dg, X);
u = Dg.prototype;
u.X = function() {
  var a = this.Ge;
  return a != l ? a : this.bd()
};
u.xb = ba("Ge");
u.Gd = function(a) {
  Y(this, 16, a);
  var b = this.a();
  b && this.i.Gd(this, b, a)
};
u.bd = function() {
  var a = this.qa;
  return y(a) ? (a = Na(a, function(a) {
    return ka(a) && 1 == a.nodeType && (qf(a, "goog-menuitem-accel") || qf(a, "goog-menuitem-mnemonic-separator")) ? "" : jc(a)
  }).join(""), ya(a)) : Dg.b.bd.call(this)
};
u.pb = function(a) {
  var b = this.getParent();
  if(b) {
    var c = b.Wf;
    b.Wf = l;
    if(b = c && ia(a.clientX)) {
      b = new H(a.clientX, a.clientY), b = c == b ? k : !c || !b ? p : c.x == b.x && c.y == b.y
    }
    if(b) {
      return
    }
  }
  Dg.b.pb.call(this, a)
};
u.Da = function(a) {
  return a.keyCode == this.Qf && this.ub(a) ? k : Dg.b.Da.call(this, a)
};
u.Wg = q("Qf");
kg("goog-menuitem", function() {
  return new Dg(l)
});
function Eg(a, b, c, d, f, g, m, n, s) {
  var v, t;
  if(v = c.offsetParent) {
    var w = "HTML" == v.tagName || "BODY" == v.tagName;
    if(!w || "static" != Cc(v)) {
      t = Kc(v), w || (w = (w = Lc(v)) && D ? -v.scrollLeft : w && (!C || !F("8")) && "visible" != Bc(v, "overflowX") ? v.scrollWidth - v.clientWidth - v.scrollLeft : v.scrollLeft, t = Mb(t, new H(w, v.scrollTop)))
    }
  }
  v = t || new H;
  t = Uc(a);
  (w = Jc(a)) && t.If(new yc(w.left, w.top, w.right - w.left, w.bottom - w.top));
  var w = I(a), Fb = I(c);
  if(w.k != Fb.k) {
    var za = w.k.body, Fb = Fb.k.parentWindow || Fb.k.defaultView, vc = new H(0, 0), Gb = J(za) ? J(za).parentWindow || J(za).defaultView : window, Ee = za;
    do {
      var Lg = Gb == Fb ? Kc(Ee) : Oc(Ee);
      vc.x += Lg.x;
      vc.y += Lg.y
    }while(Gb && Gb != Fb && (Ee = Gb.frameElement) && (Gb = Gb.parent));
    za = Mb(vc, Kc(za));
    C && !mc(w) && (za = Mb(za, nc(w)));
    t.left += za.x;
    t.top += za.y
  }
  a = (b & 4 && Lc(a) ? b ^ 2 : b) & -5;
  b = new H(a & 2 ? t.left + t.width : t.left, a & 1 ? t.top + t.height : t.top);
  b = Mb(b, v);
  f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
  var oa;
  if(m) {
    if(s) {
      oa = s
    }else {
      if(oa = Jc(c)) {
        oa.top -= v.y, oa.right -= v.x, oa.bottom -= v.y, oa.left -= v.x
      }
    }
  }
  return Fg(b, c, d, g, oa, m, n)
}
function Fg(a, b, c, d, f, g, m) {
  a = a.pa();
  var n = 0, s = (c & 4 && Lc(b) ? c ^ 2 : c) & -5;
  c = Sc(b);
  m = m ? m.pa() : c.pa();
  if(d || 0 != s) {
    s & 2 ? a.x -= m.width + (d ? d.right : 0) : d && (a.x += d.left), s & 1 ? a.y -= m.height + (d ? d.bottom : 0) : d && (a.y += d.top)
  }
  if(g) {
    if(f) {
      d = a;
      n = 0;
      if(65 == (g & 65) && (d.x < f.left || d.x >= f.right)) {
        g &= -2
      }
      if(132 == (g & 132) && (d.y < f.top || d.y >= f.bottom)) {
        g &= -5
      }
      d.x < f.left && g & 1 && (d.x = f.left, n |= 1);
      d.x < f.left && (d.x + m.width > f.right && g & 16) && (m.width = Math.max(m.width - (d.x + m.width - f.right), 0), n |= 4);
      d.x + m.width > f.right && g & 1 && (d.x = Math.max(f.right - m.width, f.left), n |= 1);
      g & 2 && (n |= (d.x < f.left ? 16 : 0) | (d.x + m.width > f.right ? 32 : 0));
      d.y < f.top && g & 4 && (d.y = f.top, n |= 2);
      d.y <= f.top && (d.y + m.height < f.bottom && g & 32) && (m.height = Math.max(m.height - (f.top - d.y), 0), d.y = f.top, n |= 8);
      d.y >= f.top && (d.y + m.height > f.bottom && g & 32) && (m.height = Math.max(m.height - (d.y + m.height - f.bottom), 0), n |= 8);
      d.y + m.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - m.height, f.top), n |= 2);
      g & 8 && (n |= (d.y < f.top ? 64 : 0) | (d.y + m.height > f.bottom ? 128 : 0));
      f = n
    }else {
      f = 256
    }
    n = f;
    if(n & 496) {
      return n
    }
  }
  Dc(b, a);
  Ib(c, m) || Yc(b, m);
  return n
}
;var Gg, Hg;
Hg = Gg = p;
var Ig = nb();
Ig && (-1 != Ig.indexOf("Firefox") || -1 != Ig.indexOf("Camino") || (-1 != Ig.indexOf("iPhone") || -1 != Ig.indexOf("iPod") ? Gg = k : -1 != Ig.indexOf("iPad") && (Hg = k)));
var Jg = Gg, Kg = Hg;
function Mg() {
}
ea(Mg);
u = Mg.prototype;
u.ua = aa();
function Ng(a, b) {
  a && (a.tabIndex = b ? 0 : -1)
}
u.f = function(a) {
  return a.e().f("div", this.jb(a).join(" "))
};
u.z = function(a) {
  return a
};
u.aa = function(a) {
  return"DIV" == a.tagName
};
u.v = function(a, b) {
  b.id && ef(a, b.id);
  var c = this.m(), d = p, f = pf(b);
  f && La(f, function(b) {
    b == c ? d = k : b && (b == c + "-disabled" ? a.na(p) : b == c + "-horizontal" ? a.Qe(Og) : b == c + "-vertical" && a.Qe(Pg))
  }, this);
  d || V(b, c);
  Qg(this, a, this.z(b));
  return b
};
function Qg(a, b, c) {
  if(c) {
    for(var d = c.firstChild, f;d && d.parentNode == c;) {
      f = d.nextSibling;
      if(1 == d.nodeType) {
        var g = a.fe(d);
        g && (g.d = d, b.isEnabled() || g.na(p), b.C(g), g.v(d))
      }else {
        (!d.nodeValue || "" == Aa(d.nodeValue)) && c.removeChild(d)
      }
      d = f
    }
  }
}
u.fe = function(a) {
  a: {
    for(var b = pf(a), c = 0, d = b.length;c < d;c++) {
      if(a = b[c] in lg ? lg[b[c]]() : l) {
        break a
      }
    }
    a = l
  }
  return a
};
u.Vb = function(a) {
  a = a.a();
  Wc(a, k, D);
  C && (a.hideFocus = k);
  var b = this.ua();
  b && nf(a, b)
};
u.G = function(a) {
  return a.a()
};
u.m = r("goog-container");
u.jb = function(a) {
  var b = this.m(), c = [b, a.ya == Og ? b + "-horizontal" : b + "-vertical"];
  a.isEnabled() || c.push(b + "-disabled");
  return c
};
function Rg() {
}
A(Rg, ng);
ea(Rg);
Rg.prototype.f = function(a) {
  return a.e().f("div", this.m())
};
Rg.prototype.v = function(a, b) {
  b.id && ef(a, b.id);
  if("HR" == b.tagName) {
    var c = b;
    b = this.f(a);
    c.parentNode && c.parentNode.insertBefore(b, c);
    Zb(c)
  }else {
    V(b, this.m())
  }
  return b
};
Rg.prototype.$a = aa();
Rg.prototype.m = r("goog-menuseparator");
function Sg(a, b) {
  X.call(this, l, a || Rg.ja(), b);
  Y(this, 1, p);
  Y(this, 2, p);
  Y(this, 4, p);
  Y(this, 32, p);
  this.u = 1
}
A(Sg, X);
Sg.prototype.s = function() {
  Sg.b.s.call(this);
  var a = this.a();
  nf(a, "separator")
};
kg("goog-menuseparator", function() {
  return new Sg
});
function Tg() {
}
A(Tg, Mg);
ea(Tg);
u = Tg.prototype;
u.ua = r("menu");
u.aa = function(a) {
  return"UL" == a.tagName || Tg.b.aa.call(this, a)
};
u.fe = function(a) {
  return"HR" == a.tagName ? new Sg : Tg.b.fe.call(this, a)
};
u.fb = function(a, b) {
  return bc(a.a(), b)
};
u.m = r("goog-menu");
u.Vb = function(a) {
  Tg.b.Vb.call(this, a);
  a = a.a();
  U(a, "haspopup", "true")
};
kg("goog-menuseparator", function() {
  return new Sg
});
function Ug(a, b, c) {
  Q.call(this, c);
  this.i = b || Mg.ja();
  this.ya = a || Pg
}
A(Ug, Q);
var Og = "horizontal", Pg = "vertical";
u = Ug.prototype;
u.ze = l;
u.L = l;
u.i = l;
u.ya = l;
u.$ = k;
u.sa = k;
u.ce = k;
u.ea = -1;
u.I = l;
u.Ma = p;
u.rg = p;
u.Yh = k;
u.Ga = l;
u.G = function() {
  return this.ze || this.i.G(this)
};
u.ed = function() {
  return this.L || (this.L = new ag(this.G()))
};
u.f = function() {
  this.d = this.i.f(this)
};
u.z = function() {
  return this.i.z(this.a())
};
u.aa = function(a) {
  return this.i.aa(a)
};
u.ia = function(a) {
  this.d = this.i.v(this, a);
  "none" == a.style.display && (this.$ = p)
};
u.s = function() {
  Ug.b.s.call(this);
  R(this, function(a) {
    a.j && Vg(this, a)
  }, this);
  var a = this.a();
  this.i.Vb(this);
  this.t(this.$, k);
  this.da().c(this, "enter", this.le).c(this, "highlight", this.me).c(this, "unhighlight", this.re).c(this, "open", this.rh).c(this, "close", this.$g).c(a, "mousedown", this.ob).c(J(a), "mouseup", this.bh).c(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.Zg);
  this.Ja() && Wg(this, k)
};
function Wg(a, b) {
  var c = a.da(), d = a.G();
  b ? c.c(d, "focus", a.nb).c(d, "blur", a.mb).c(a.ed(), "key", a.ka) : c.W(d, "focus", a.nb).W(d, "blur", a.mb).W(a.ed(), "key", a.ka)
}
u.O = function() {
  this.wb(-1);
  this.I && this.I.J(p);
  this.Ma = p;
  Ug.b.O.call(this)
};
u.g = function() {
  Ug.b.g.call(this);
  this.L && (this.L.R(), this.L = l);
  this.i = this.I = this.Ga = this.ze = l
};
u.le = r(k);
u.me = function(a) {
  var b = lf(this, a.target);
  if(-1 < b && b != this.ea) {
    var c = Xg(this);
    c && c.za(p);
    this.ea = b;
    c = Xg(this);
    this.Ma && c.setActive(k);
    this.Yh && (this.I && c != this.I) && (c.A & 64 ? c.J(k) : this.I.J(p))
  }
  b = this.a();
  a.target.a() != l && U(b, "activedescendant", a.target.a().id)
};
u.re = function(a) {
  a.target == Xg(this) && (this.ea = -1);
  this.a().removeAttribute("aria-activedescendant")
};
u.rh = function(a) {
  if((a = a.target) && a != this.I && a.getParent() == this) {
    this.I && this.I.J(p), this.I = a
  }
};
u.$g = function(a) {
  a.target == this.I && (this.I = l)
};
u.ob = function(a) {
  this.sa && (this.Ma = k);
  var b = this.G();
  b && fc(b) && gc(b) ? b.focus() : a.preventDefault()
};
u.bh = function() {
  this.Ma = p
};
u.Zg = function(a) {
  var b;
  a: {
    b = a.target;
    if(this.Ga) {
      for(var c = this.a();b && b !== c;) {
        var d = b.id;
        if(d in this.Ga) {
          b = this.Ga[d];
          break a
        }
        b = b.parentNode
      }
    }
    b = l
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        b.ob(a);
        break;
      case "mouseup":
        b.pb(a);
        break;
      case "mouseover":
        b.Ta(a);
        break;
      case "mouseout":
        b.pe(a);
        break;
      case "contextmenu":
        b.vc(a)
    }
  }
};
u.nb = aa();
u.mb = function() {
  this.wb(-1);
  this.Ma = p;
  this.I && this.I.J(p)
};
u.ka = function(a) {
  return this.isEnabled() && this.p() && (0 != jf(this) || this.ze) && this.Da(a) ? (a.preventDefault(), a.stopPropagation(), k) : p
};
u.Da = function(a) {
  var b = Xg(this);
  if(b && "function" == typeof b.ka && b.ka(a) || this.I && this.I != b && "function" == typeof this.I.ka && this.I.ka(a)) {
    return k
  }
  if(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) {
    return p
  }
  switch(a.keyCode) {
    case 27:
      if(this.Ja()) {
        this.G().blur()
      }else {
        return p
      }
      break;
    case 36:
      Yg(this);
      break;
    case 35:
      Zg(this);
      break;
    case 38:
      if(this.ya == Pg) {
        $g(this)
      }else {
        return p
      }
      break;
    case 37:
      if(this.ya == Og) {
        kf(this) ? ah(this) : $g(this)
      }else {
        return p
      }
      break;
    case 40:
      if(this.ya == Pg) {
        ah(this)
      }else {
        return p
      }
      break;
    case 39:
      if(this.ya == Og) {
        kf(this) ? $g(this) : ah(this)
      }else {
        return p
      }
      break;
    default:
      return p
  }
  return k
};
function Vg(a, b) {
  var c = b.a(), c = c.id || (c.id = df(b));
  a.Ga || (a.Ga = {});
  a.Ga[c] = b
}
u.C = function(a, b) {
  Ug.b.C.call(this, a, b)
};
u.Aa = function(a, b, c) {
  a.Ab |= 2;
  a.Ab |= 64;
  (this.Ja() || !this.rg) && Y(a, 32, p);
  tg(a, p);
  Ug.b.Aa.call(this, a, b, c);
  a.j && this.j && Vg(this, a);
  b <= this.ea && this.ea++
};
u.removeChild = function(a, b) {
  if(a = z(a) ? this.K && a ? (a in this.K ? this.K[a] : h) || l : l : a) {
    var c = lf(this, a);
    -1 != c && (c == this.ea ? (a.za(p), this.ea = -1) : c < this.ea && this.ea--);
    var d = a.a();
    d && (d.id && this.Ga) && (c = this.Ga, d = d.id, d in c && delete c[d])
  }
  a = Ug.b.removeChild.call(this, a, b);
  tg(a, k);
  return a
};
u.Qe = function(a) {
  this.a() && e(Error("Component already rendered"));
  this.ya = a
};
u.p = q("$");
u.t = function(a, b) {
  if(b || this.$ != a && this.dispatchEvent(a ? "show" : "hide")) {
    this.$ = a;
    var c = this.a();
    c && (L(c, a), this.Ja() && Ng(this.G(), this.sa && this.$), b || this.dispatchEvent(this.$ ? "aftershow" : "afterhide"));
    return k
  }
  return p
};
u.isEnabled = q("sa");
u.na = function(a) {
  if(this.sa != a && this.dispatchEvent(a ? "enable" : "disable")) {
    a ? (this.sa = k, R(this, function(a) {
      a.lg ? delete a.lg : a.na(k)
    })) : (R(this, function(a) {
      a.isEnabled() ? a.na(p) : a.lg = k
    }), this.Ma = this.sa = p), this.Ja() && Ng(this.G(), a && this.$)
  }
};
u.Ja = q("ce");
u.bb = function(a) {
  a != this.ce && this.j && Wg(this, a);
  this.ce = a;
  this.sa && this.$ && Ng(this.G(), a)
};
u.wb = function(a) {
  (a = S(this, a)) ? a.za(k) : -1 < this.ea && Xg(this).za(p)
};
u.za = function(a) {
  this.wb(lf(this, a))
};
function Xg(a) {
  return S(a, a.ea)
}
function Yg(a) {
  bh(a, function(a, c) {
    return(a + 1) % c
  }, jf(a) - 1)
}
function Zg(a) {
  bh(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, 0)
}
function ah(a) {
  bh(a, function(a, c) {
    return(a + 1) % c
  }, a.ea)
}
function $g(a) {
  bh(a, function(a, c) {
    a--;
    return 0 > a ? c - 1 : a
  }, a.ea)
}
function bh(a, b, c) {
  c = 0 > c ? lf(a, a.I) : c;
  var d = jf(a);
  c = b.call(a, c, d);
  for(var f = 0;f <= d;) {
    var g = S(a, c);
    if(g && a.$e(g)) {
      a.wb(c);
      break
    }
    f++;
    c = b.call(a, c, d)
  }
}
u.$e = function(a) {
  return a.p() && a.isEnabled() && !!(a.A & 2)
};
function ch() {
}
A(ch, ng);
ea(ch);
ch.prototype.m = r("goog-menuheader");
function dh(a, b, c) {
  X.call(this, a, c || ch.ja(), b);
  Y(this, 1, p);
  Y(this, 2, p);
  Y(this, 4, p);
  Y(this, 32, p);
  this.u = 1
}
A(dh, X);
kg("goog-menuheader", function() {
  return new dh(l)
});
function eh(a, b) {
  Ug.call(this, Pg, b || Tg.ja(), a);
  this.bb(p)
}
A(eh, Ug);
u = eh.prototype;
u.Rd = k;
u.sg = p;
u.m = function() {
  return this.i.m()
};
u.fb = function(a) {
  if(this.i.fb(this, a)) {
    return k
  }
  for(var b = 0, c = jf(this);b < c;b++) {
    var d = S(this, b);
    if("function" == typeof d.fb && d.fb(a)) {
      return k
    }
  }
  return p
};
u.Hc = function(a, b) {
  var c = this.p();
  c || L(this.a(), k);
  var d = this.a(), f = a, g = b, m = Kc(d);
  f instanceof H && (g = f.y, f = f.x);
  Dc(d, d.offsetLeft + (f - m.x), d.offsetTop + (g - m.y));
  c || L(this.a(), p)
};
u.t = function(a, b, c) {
  (b = eh.b.t.call(this, a, b)) && (a && this.j && this.Rd) && this.G().focus();
  this.Wf = a && c && ia(c.clientX) ? new H(c.clientX, c.clientY) : l;
  return b
};
u.le = function(a) {
  this.Rd && this.G().focus();
  return eh.b.le.call(this, a)
};
u.$e = function(a) {
  return(this.sg || a.isEnabled()) && a.p() && !!(a.A & 2)
};
u.ia = function(a) {
  var b = this.i, c;
  c = this.e();
  c = Pb(c.k, "div", b.m() + "-content", a);
  for(var d = c.length, f = 0;f < d;f++) {
    Qg(b, this, c[f])
  }
  eh.b.ia.call(this, a)
};
u.Da = function(a) {
  var b = eh.b.Da.call(this, a);
  b || R(this, function(c) {
    !b && (c.Wg && c.Qf == a.keyCode) && (this.isEnabled() && this.za(c), b = c.ka(a))
  }, this);
  return b
};
u.wb = function(a) {
  eh.b.wb.call(this, a);
  if(a = S(this, a)) {
    var b = a.a();
    a = this.a();
    b = Mc(b, a, h);
    a.scrollLeft = b.x;
    a.scrollTop = b.y
  }
};
function fh() {
}
fh.prototype.ma = aa();
function gh(a, b, c) {
  this.element = a;
  this.oc = b;
  this.Zh = c
}
A(gh, fh);
gh.prototype.ma = function(a, b, c) {
  Eg(this.element, this.oc, a, b, h, c, this.Zh)
};
function hh(a, b, c, d) {
  gh.call(this, a, b);
  this.sd = c ? 5 : 0;
  this.Ie = d || h
}
A(hh, gh);
hh.prototype.Vg = q("sd");
hh.prototype.ma = function(a, b, c, d) {
  var f = Eg(this.element, this.oc, a, b, l, c, 10, d, this.Ie);
  if(f & 496) {
    var g = ih(f, this.oc);
    b = ih(f, b);
    f = Eg(this.element, g, a, b, l, c, 10, d, this.Ie);
    f & 496 && (g = ih(f, g), b = ih(f, b), Eg(this.element, g, a, b, l, c, this.sd, d, this.Ie))
  }
};
function ih(a, b) {
  a & 48 && (b ^= 2);
  a & 192 && (b ^= 1);
  return b
}
;function jh(a, b, c, d) {
  hh.call(this, a, b, c || d);
  if(c || d) {
    this.sd = 65 | (d ? 32 : 132)
  }
}
A(jh, hh);
function kh() {
}
A(kh, ng);
ea(kh);
u = kh.prototype;
u.ua = r("button");
u.oa = function(a, b, c) {
  switch(b) {
    case 8:
    ;
    case 16:
      U(a, "pressed", c);
      break;
    default:
    ;
    case 64:
    ;
    case 1:
      kh.b.oa.call(this, a, b, c)
  }
};
u.f = function(a) {
  var b = kh.b.f.call(this, a);
  this.Jc(b, a.Ob());
  var c = a.X();
  c && this.xb(b, c);
  a.A & 16 && this.oa(b, 16, !!(a.u & 16));
  return b
};
u.v = function(a, b) {
  b = kh.b.v.call(this, a, b);
  var c = this.X(b);
  a.ha = c;
  a.Ue = this.Ob(b);
  a.A & 16 && this.oa(b, 16, !!(a.u & 16));
  return b
};
u.X = da;
u.xb = da;
u.Ob = function(a) {
  return a.title
};
u.Jc = function(a, b) {
  a && b && (a.title = b)
};
u.m = r("goog-button");
function lh() {
}
A(lh, kh);
ea(lh);
u = lh.prototype;
u.ua = aa();
u.f = function(a) {
  tg(a, p);
  a.kc &= -256;
  Y(a, 32, p);
  return a.e().f("button", {"class":this.jb(a).join(" "), disabled:!a.isEnabled(), title:a.Ob() || "", value:a.X() || ""}, a.bd() || "")
};
u.aa = function(a) {
  return"BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
u.v = function(a, b) {
  tg(a, p);
  a.kc &= -256;
  Y(a, 32, p);
  if(b.disabled) {
    var c = this.tc(1);
    V(b, c)
  }
  return lh.b.v.call(this, a, b)
};
u.Vb = function(a) {
  a.da().c(a.a(), "click", a.ub)
};
u.Gc = da;
u.ac = da;
u.Ja = function(a) {
  return a.isEnabled()
};
u.bb = da;
u.ga = function(a, b, c) {
  lh.b.ga.call(this, a, b, c);
  if((a = a.a()) && 1 == b) {
    a.disabled = c
  }
};
u.X = function(a) {
  return a.value
};
u.xb = function(a, b) {
  a && (a.value = b)
};
u.oa = da;
function mh(a, b, c) {
  X.call(this, a, b || lh.ja(), c)
}
A(mh, X);
u = mh.prototype;
u.X = q("ha");
u.xb = function(a) {
  this.ha = a;
  this.i.xb(this.a(), a)
};
u.Ob = q("Ue");
u.Jc = function(a) {
  this.Ue = a;
  this.i.Jc(this.a(), a)
};
u.g = function() {
  mh.b.g.call(this);
  delete this.ha;
  delete this.Ue
};
u.s = function() {
  mh.b.s.call(this);
  if(this.A & 32) {
    var a = this.G();
    a && this.da().c(a, "keyup", this.Da)
  }
};
u.Da = function(a) {
  return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ub(a) : 32 == a.keyCode
};
kg("goog-button", function() {
  return new mh(l)
});
function nh() {
}
A(nh, kh);
ea(nh);
u = nh.prototype;
u.f = function(a) {
  var b = {"class":"goog-inline-block " + this.jb(a).join(" ")}, b = a.e().f("div", b, this.Xc(a.qa, a.e()));
  this.Jc(b, a.Ob());
  pg(this, a, b);
  return b
};
u.ua = r("button");
u.z = function(a) {
  return a && a.firstChild.firstChild
};
u.Xc = function(a, b) {
  return b.f("div", "goog-inline-block " + (this.m() + "-outer-box"), b.f("div", "goog-inline-block " + (this.m() + "-inner-box"), a))
};
u.aa = function(a) {
  return"DIV" == a.tagName
};
u.v = function(a, b) {
  oh(b, k);
  oh(b, p);
  var c;
  a: {
    c = a.e().vf(b);
    var d = this.m() + "-outer-box";
    if(c && qf(c, d) && (c = a.e().vf(c), d = this.m() + "-inner-box", c && qf(c, d))) {
      c = k;
      break a
    }
    c = p
  }
  c || b.appendChild(this.Xc(b.childNodes, a.e()));
  rf(b, ["goog-inline-block", this.m()]);
  return nh.b.v.call(this, a, b)
};
u.m = r("goog-custom-button");
function oh(a, b) {
  if(a) {
    for(var c = b ? a.firstChild : a.lastChild, d;c && c.parentNode == a;) {
      d = b ? c.nextSibling : c.previousSibling;
      if(3 == c.nodeType) {
        var f = c.nodeValue;
        if("" == Aa(f)) {
          a.removeChild(c)
        }else {
          c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : f.replace(/[\s\xa0]+$/, "");
          break
        }
      }else {
        break
      }
      c = d
    }
  }
}
;function ph() {
}
A(ph, nh);
ea(ph);
D && (ph.prototype.$a = function(a, b) {
  var c = ph.b.z.call(this, a && a.firstChild);
  if(c) {
    var d = this.createCaption(b, I(a)), f = c.parentNode;
    f && f.replaceChild(d, c)
  }
});
u = ph.prototype;
u.z = function(a) {
  a = ph.b.z.call(this, a && a.firstChild);
  D && (a && a.__goog_wrapper_div) && (a = a.firstChild);
  return a
};
u.oa = function(a, b, c) {
  64 != b && ph.b.oa.call(this, a, b, c)
};
u.v = function(a, b) {
  var c = Pb(document, "*", "goog-menu", b)[0];
  if(c) {
    L(c, p);
    J(c).body.appendChild(c);
    var d = new eh;
    d.v(c);
    qh(a, d)
  }
  return ph.b.v.call(this, a, b)
};
u.Xc = function(a, b) {
  return ph.b.Xc.call(this, [this.createCaption(a, b), b.f("div", "goog-inline-block " + (this.m() + "-dropdown"), "\u00a0")], b)
};
u.createCaption = function(a, b) {
  return b.f("div", "goog-inline-block " + (this.m() + "-caption"), a)
};
u.m = r("goog-menu-button");
function $(a, b, c, d) {
  mh.call(this, a, c || ph.ja(), d);
  Y(this, 64, k);
  this.xd = new jh(l, 5);
  b && qh(this, b);
  this.Lh = l;
  this.B = new Od(500);
  if((Jg || Kg) && !F("533.17.9")) {
    this.od = k
  }
}
A($, mh);
u = $.prototype;
u.od = p;
u.ci = p;
u.s = function() {
  $.b.s.call(this);
  this.h && rh(this, this.h, k);
  U(this.d, "haspopup", !!this.h)
};
u.O = function() {
  $.b.O.call(this);
  if(this.h) {
    this.J(p);
    this.h.O();
    rh(this, this.h, p);
    var a = this.h.a();
    a && Zb(a)
  }
};
u.g = function() {
  $.b.g.call(this);
  this.h && (this.h.R(), delete this.h);
  delete this.bi;
  this.B.R()
};
u.ob = function(a) {
  $.b.ob.call(this, a);
  this.xc() && (this.J(!(this.u & 64), a), this.h && (this.h.Ma = !!(this.u & 64)))
};
u.pb = function(a) {
  $.b.pb.call(this, a);
  this.h && !this.xc() && (this.h.Ma = p)
};
u.ub = function() {
  this.setActive(p);
  return k
};
u.ah = function(a) {
  this.h && (this.h.p() && !this.fb(a.target)) && this.J(p)
};
u.fb = function(a) {
  return a && bc(this.a(), a) || this.h && this.h.fb(a) || p
};
u.Da = function(a) {
  if(32 == a.keyCode) {
    if(a.preventDefault(), "keyup" != a.type) {
      return k
    }
  }else {
    if("key" != a.type) {
      return p
    }
  }
  if(this.h && this.h.p()) {
    var b = this.h.ka(a);
    return 27 == a.keyCode ? (this.J(p), k) : b
  }
  return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.J(k), k) : p
};
u.oh = function() {
  this.J(p)
};
u.ph = function() {
  this.xc() || this.J(p)
};
u.mb = function(a) {
  this.od || this.J(p);
  $.b.mb.call(this, a)
};
function qh(a, b) {
  var c = a.h;
  b != c && (c && (a.J(p), a.j && rh(a, c, p), delete a.h), a.j && U(a.d, "haspopup", !!b), b && (a.h = b, gf(b, a), b.t(p), c = a.od, (b.Rd = c) && b.bb(k), a.j && rh(a, b, k)))
}
u.t = function(a, b) {
  var c = $.b.t.call(this, a, b);
  c && !this.p() && this.J(p);
  return c
};
u.na = function(a) {
  $.b.na.call(this, a);
  this.isEnabled() || this.J(p)
};
u.J = function(a, b) {
  $.b.J.call(this, a);
  if(this.h && !!(this.u & 64) == a) {
    if(a) {
      if(!this.h.j) {
        if(this.ci) {
          var c = this.a().parentNode;
          hf(this.h, c)
        }else {
          hf(this.h, h)
        }
      }
      this.Cb = Jc(this.a());
      this.eb = Uc(this.a());
      sh(this);
      this.h.wb(-1)
    }else {
      if(this.setActive(p), this.h.Ma = p, (c = this.a()) && U(c, "activedescendant", ""), this.Ad != l && (this.Ad = h, c = this.h.a())) {
        var d = "", f;
        d instanceof G ? (f = d.height, d = d.width) : f = "";
        c.style.width = Ec(d, k);
        Rc(c, f)
      }
    }
    this.h.t(a, p, b);
    this.Lb || (c = this.da(), d = a ? c.c : c.W, d.call(c, lc(this.e()), "mousedown", this.ah, k), this.od && d.call(c, this.h, "blur", this.ph), d.call(c, this.B, Qd, this.Xh), a ? this.B.start() : this.B.stop())
  }
};
function sh(a) {
  if(a.h.j) {
    var b = a.bi || a.a(), c = a.xd;
    a.xd.element = b;
    b = a.h.a();
    a.h.p() || (b.style.visibility = "hidden", L(b, k));
    !a.Ad && (a.xd.Vg && a.xd.sd & 32) && (a.Ad = Sc(b));
    c.ma(b, c.oc ^ 1, a.Lh, a.Ad);
    a.h.p() || (L(b, p), b.style.visibility = "visible")
  }
}
u.Xh = function() {
  var a = Uc(this.a()), b = Jc(this.a());
  if(!(this.eb == a || (!this.eb || !a ? 0 : this.eb.left == a.left && this.eb.width == a.width && this.eb.top == a.top && this.eb.height == a.height)) || !(this.Cb == b || (!this.Cb || !b ? 0 : this.Cb.top == b.top && this.Cb.right == b.right && this.Cb.bottom == b.bottom && this.Cb.left == b.left))) {
    this.eb = a, this.Cb = b, sh(this)
  }
};
function rh(a, b, c) {
  var d = a.da();
  c = c ? d.c : d.W;
  c.call(d, b, "action", a.oh);
  c.call(d, b, "highlight", a.me);
  c.call(d, b, "unhighlight", a.re)
}
u.me = function(a) {
  var b = this.a();
  a.target.a() != l && U(b, "activedescendant", a.target.a().id)
};
u.re = function() {
  if(!Xg(this.h)) {
    var a = this.a();
    U(a, "activedescendant", "")
  }
};
kg("goog-menu-button", function() {
  return new $(l)
});
function th(a) {
  ed.call(this);
  this.Fb = a;
  this.l = new Ze(this);
  this.l.c(a, "highlight", this.Uh);
  this.l.c(a, "enter", this.Th);
  this.l.c(a, "aftershow", this.Qh);
  this.l.c(a, "hide", this.Na);
  uh(this, k)
}
A(th, ed);
u = th.prototype;
u.yc = l;
u.Oe = l;
u.Zd = p;
u.Th = function(a) {
  this.Zd ? a.preventDefault() : this.yc = a.target
};
u.Uh = function() {
  uh(this)
};
u.Qh = function() {
  this.Oe != l ? (this.Fb.a().scrollTop = this.Oe, uh(this, p)) : uh(this, k)
};
u.Na = function(a) {
  a.target == this.Fb && (this.yc = l, this.Oe = this.Fb.a().scrollTop)
};
function uh(a, b) {
  var c = Xg(a.Fb);
  if(a.Fb.p() && c && c != a.yc) {
    var d = a.Fb.a(), c = c.a(), c = Mc(c, d, b);
    d.scrollLeft = c.x;
    d.scrollTop = c.y;
    vh(a);
    a.yc = l
  }
}
function vh(a) {
  a.Zd = k;
  Rd(function() {
    this.Zd = p
  }, 0, a)
}
u.g = function() {
  th.b.g.call(this);
  this.l.R();
  this.yc = l
};
function wh() {
  if(!this.lc) {
    this.lc = {};
    for(var a = 0;89 > a;a++) {
      this.lc["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%()*+,-.:;<=>?@[]^_`{|}~".charAt(a)] = a
    }
  }
}
wh.prototype.lc = l;
function xh(a, b) {
  for(var c = [], d = 0, f = 0;f < b.length;) {
    var g = a.lc[b.charAt(f)] % 8, m = Math.floor(g / 3), g = g % 3 + 1;
    3 == g && g++;
    for(var n = 0, s = 0;s < g;s++) {
      n += a.lc[b.charAt(f + s)] * Math.pow(88, s)
    }
    s = c;
    n = Math.floor(n / 8);
    if(0 == m) {
      d += n + 1, Ua(s, Ue(d))
    }else {
      if(1 == m) {
        d -= n + 1, Ua(s, Ue(d))
      }else {
        if(2 == m) {
          for(m = 0;m <= n;m++) {
            d++, Ua(s, Ue(d))
          }
        }
      }
    }
    f += g
  }
  return c
}
;function yh(a, b) {
  P.call(this);
  this.Y = new Ze(this);
  this.Hd(a || l);
  b && (this.fc = b)
}
A(yh, P);
u = yh.prototype;
u.d = l;
u.wg = k;
u.Ze = l;
u.Wb = p;
u.fi = p;
u.Ae = -1;
u.Mf = -1;
u.yh = p;
u.Pg = k;
u.fc = "toggle_display";
u.a = q("d");
u.Hd = function(a) {
  this.Wb && e(Error("Can not change this state of the popup while showing."));
  this.d = a
};
u.da = q("Y");
u.p = q("Wb");
u.t = function(a) {
  this.Mc && this.Mc.stop();
  this.wc && this.wc.stop();
  if(a) {
    if(!this.Wb && this.He()) {
      this.d || e(Error("Caller must call setElement before trying to show the popup"));
      this.ma();
      a = J(this.d);
      this.yh && this.Y.c(a, "keydown", this.Sh, k);
      if(this.wg) {
        if(this.Y.c(a, "mousedown", this.Uf, k), C) {
          var b;
          try {
            b = a.activeElement
          }catch(c) {
          }
          for(;b && "IFRAME" == b.nodeName;) {
            try {
              var d = b.contentDocument || b.contentWindow.document
            }catch(f) {
              break
            }
            a = d;
            b = a.activeElement
          }
          this.Y.c(a, "mousedown", this.Uf, k);
          this.Y.c(a, "deactivate", this.Tf)
        }else {
          this.Y.c(a, "blur", this.Tf)
        }
      }
      "toggle_display" == this.fc ? (this.d.style.visibility = "visible", L(this.d, k)) : "move_offscreen" == this.fc && this.ma();
      this.Wb = k;
      this.Ae = ta();
      this.Mf = -1;
      this.Mc ? (Id(this.Mc, "end", this.zd, p, this), this.Mc.play()) : this.zd()
    }
  }else {
    zh(this)
  }
};
u.ma = da;
function zh(a, b) {
  if(!a.Wb || !a.dispatchEvent({type:"beforehide", target:b})) {
    return p
  }
  a.Y && a.Y.Ya();
  a.Wb = p;
  a.Mf = ta();
  a.wc ? (Id(a.wc, "end", sa(a.ef, b), p, a), a.wc.play()) : a.ef(b);
  return k
}
u.ef = function(a) {
  "toggle_display" == this.fc ? this.fi ? Rd(this.Df, 0, this) : this.Df() : "move_offscreen" == this.fc && (this.d.style.top = "-10000px");
  this.Na(a)
};
u.Df = function() {
  this.d.style.visibility = "hidden";
  L(this.d, p)
};
u.He = function() {
  return this.dispatchEvent("beforeshow")
};
u.zd = function() {
  this.dispatchEvent("show")
};
u.Na = function(a) {
  this.dispatchEvent({type:"hide", target:a})
};
u.Uf = function(a) {
  a = a.target;
  !bc(this.d, a) && ((!this.Ze || bc(this.Ze, a)) && !(150 > ta() - this.Ae)) && zh(this, a)
};
u.Sh = function(a) {
  27 == a.keyCode && zh(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
u.Tf = function(a) {
  if(this.Pg) {
    var b = J(this.d);
    if("undefined" != typeof document.activeElement) {
      if(a = b.activeElement, !a || bc(this.d, a) || "BODY" == a.tagName) {
        return
      }
    }else {
      if(a.target != b) {
        return
      }
    }
    150 > ta() - this.Ae || zh(this)
  }
};
u.g = function() {
  yh.b.g.call(this);
  this.Y.R();
  hd(this.Mc);
  hd(this.wc);
  delete this.d;
  delete this.Y
};
function Ah(a, b) {
  this.Yd = a instanceof H ? a : new H(a, b)
}
A(Ah, fh);
Ah.prototype.ma = function(a, b, c, d) {
  Eg(Gc(a), 0, a, b, this.Yd, c, l, d)
};
function Bh(a, b) {
  this.ai = 4;
  this.Cd = b || h;
  yh.call(this, a)
}
A(Bh, yh);
Bh.prototype.Hc = function(a) {
  this.Cd = a || h;
  this.p() && this.ma()
};
Bh.prototype.ma = function() {
  if(this.Cd) {
    var a = !this.p() && "move_offscreen" != this.fc, b = this.a();
    a && (b.style.visibility = "hidden", L(b, k));
    this.Cd.ma(b, this.ai, this.ri);
    a && L(b, p)
  }
};
function Ch(a, b, c) {
  this.ba = c || (a ? I(K(a)) : I());
  Bh.call(this, this.ba.f("div", {style:"position:absolute;display:none;"}));
  this.hb = new H(1, 1);
  this.Qa = new Ce;
  a && this.jc(a);
  b != l && this.Ic(b)
}
A(Ch, Bh);
var Dh = [];
u = Ch.prototype;
u.D = l;
u.className = "goog-tooltip";
u.gi = 500;
u.xh = 0;
u.e = q("ba");
u.jc = function(a) {
  a = K(a);
  this.Qa.add(a);
  N(a, "mouseover", this.Ta, p, this);
  N(a, "mouseout", this.Sb, p, this);
  N(a, "mousemove", this.Rb, p, this);
  N(a, "focus", this.nb, p, this);
  N(a, "blur", this.Sb, p, this)
};
u.detach = function(a) {
  if(a) {
    a = K(a), Eh(this, a), this.Qa.remove(a)
  }else {
    for(var b = this.Qa.Ra(), c = 0;a = b[c];c++) {
      Eh(this, a)
    }
    this.Qa.clear()
  }
};
function Eh(a, b) {
  O(b, "mouseover", a.Ta, p, a);
  O(b, "mouseout", a.Sb, p, a);
  O(b, "mousemove", a.Rb, p, a);
  O(b, "focus", a.nb, p, a);
  O(b, "blur", a.Sb, p, a)
}
u.ge = q("xh");
u.Ic = function(a) {
  cc(this.a(), a)
};
u.Id = function(a) {
  this.a().innerHTML = a
};
u.Hd = function(a) {
  var b = this.a();
  b && Zb(b);
  Ch.b.Hd.call(this, a);
  a && (b = this.ba.k.body, b.insertBefore(a, b.lastChild))
};
u.lb = function() {
  return hc(this.a())
};
u.he = function() {
  return this.a().innerHTML
};
u.Ia = function() {
  return this.bc ? this.p() ? 4 : 1 : this.Ub ? 3 : this.p() ? 2 : 0
};
u.nd = function(a) {
  if(!this.p()) {
    return p
  }
  var b = Kc(this.a()), c;
  c = this.a();
  c = Sc(c);
  return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
};
u.He = function() {
  if(!yh.prototype.He.call(this)) {
    return p
  }
  if(this.anchor) {
    for(var a, b = 0;a = Dh[b];b++) {
      bc(a.a(), this.anchor) || a.t(p)
    }
  }
  Ra(Dh, this) || Dh.push(this);
  a = this.a();
  a.className = this.className;
  Fh(this);
  N(a, "mouseover", this.qe, p, this);
  N(a, "mouseout", this.zf, p, this);
  Gh(this);
  return k
};
u.Na = function() {
  Sa(Dh, this);
  for(var a = this.a(), b, c = 0;b = Dh[c];c++) {
    b.anchor && bc(a, b.anchor) && b.t(p)
  }
  this.Xf && Hh(this.Xf);
  O(a, "mouseover", this.qe, p, this);
  O(a, "mouseout", this.zf, p, this);
  this.anchor = h;
  0 == this.Ia() && (this.Fd = p);
  yh.prototype.Na.call(this)
};
u.Fe = function(a, b) {
  this.anchor == a && this.Qa.contains(this.anchor) && (this.Fd || !this.ti ? (this.t(p), this.p() || (this.anchor = a, this.Hc(b || Ih(this, 0)), this.t(k))) : this.anchor = h);
  this.bc = h
};
u.ee = q("D");
u.Of = function(a) {
  this.Ub = h;
  a == this.anchor && (this.D == l || this.D != this.a() && !this.Qa.contains(this.D)) && (!this.Db || !this.Db.D) && this.t(p)
};
function Jh(a, b) {
  var c = nc(a.ba);
  a.hb.x = b.clientX + c.x;
  a.hb.y = b.clientY + c.y
}
u.Ta = function(a) {
  var b = Kh(this, a.target);
  this.D = b;
  Fh(this);
  b != this.anchor && (this.anchor = b, Lh(this, b), Mh(this), Jh(this, a))
};
function Kh(a, b) {
  try {
    for(;b && !a.Qa.contains(b);) {
      b = b.parentNode
    }
    return b
  }catch(c) {
    return l
  }
}
u.Rb = function(a) {
  Jh(this, a);
  this.Fd = k
};
u.nb = function(a) {
  this.D = a = Kh(this, a.target);
  this.Fd = k;
  if(this.anchor != a) {
    this.anchor = a;
    var b = Ih(this, 1);
    Fh(this);
    Lh(this, a, b);
    Mh(this)
  }
};
function Ih(a, b) {
  if(0 == b) {
    var c = a.hb.pa();
    return new Nh(c)
  }
  return new Oh(a.D)
}
function Mh(a) {
  if(a.anchor) {
    for(var b, c = 0;b = Dh[c];c++) {
      bc(b.a(), a.anchor) && (b.Db = a, a.Xf = b)
    }
  }
}
u.Sb = function(a) {
  var b = Kh(this, a.target), c = Kh(this, a.relatedTarget);
  b != c && (b == this.D && (this.D = l), Gh(this), this.Fd = p, this.p() && (!a.relatedTarget || !bc(this.a(), a.relatedTarget)) ? Hh(this) : this.anchor = h)
};
u.qe = function() {
  var a = this.a();
  this.D != a && (Fh(this), this.D = a)
};
u.zf = function(a) {
  var b = this.a();
  if(this.D == b && (!a.relatedTarget || !bc(b, a.relatedTarget))) {
    this.D = l, Hh(this)
  }
};
function Lh(a, b, c) {
  a.bc || (a.bc = Rd(ra(a.Fe, a, b, c), a.gi))
}
function Gh(a) {
  a.bc && (Pd.clearTimeout(a.bc), a.bc = h)
}
function Hh(a) {
  2 == a.Ia() && (a.Ub = Rd(ra(a.Of, a, a.anchor), a.ge()))
}
function Fh(a) {
  a.Ub && (Pd.clearTimeout(a.Ub), a.Ub = h)
}
u.g = function() {
  this.t(p);
  Gh(this);
  this.detach();
  this.a() && Zb(this.a());
  this.D = l;
  delete this.ba;
  Ch.b.g.call(this)
};
function Nh(a, b) {
  Ah.call(this, a, b)
}
A(Nh, Ah);
Nh.prototype.ma = function(a, b, c) {
  b = Gc(a);
  b = Jc(b);
  c = c ? new wc(c.top + 10, c.right, c.bottom, c.left + 10) : new wc(10, 0, 0, 10);
  Fg(this.Yd, a, 4, c, b, 9) & 496 && Fg(this.Yd, a, 4, c, b, 5)
};
function Oh(a) {
  gh.call(this, a, 3)
}
A(Oh, gh);
Oh.prototype.ma = function(a, b, c) {
  var d = new H(10, 0);
  Eg(this.element, this.oc, a, b, d, c, 9) & 496 && Eg(this.element, 2, a, 1, d, c, 5)
};
function Ph(a, b, c) {
  Ch.call(this, a, b, c)
}
A(Ph, Ch);
u = Ph.prototype;
u.Ng = p;
u.Mg = 100;
u.Oc = p;
u.zd = function() {
  Ph.b.zd.call(this);
  this.Sc = zc(Uc(this.a()));
  this.anchor && (this.Td = zc(Uc(this.anchor)));
  this.Oc = this.Ng;
  N(lc(this.e()), "mousemove", this.Rb, p, this)
};
u.Na = function() {
  O(lc(this.e()), "mousemove", this.Rb, p, this);
  this.Td = this.Sc = l;
  this.Oc = p;
  Ph.b.Na.call(this)
};
u.nd = function(a) {
  if(this.jd) {
    var b = Kc(this.a()), c;
    c = this.a();
    c = Sc(c);
    return b.x - this.jd.left <= a.x && a.x <= b.x + c.width + this.jd.right && b.y - this.jd.top <= a.y && a.y <= b.y + c.height + this.jd.bottom
  }
  return Ph.b.nd.call(this, a)
};
function Qh(a, b) {
  if(a.Td && a.Td.contains(b) || a.nd(b)) {
    return k
  }
  var c = a.Db;
  return!!c && c.nd(b)
}
u.Of = function(a) {
  this.Ub = h;
  a == this.anchor && (!Qh(this, this.hb) && (!this.ee() && (!this.Db || !this.Db.D)) && (!D || !(0 == this.hb.x && 0 == this.hb.y))) && this.t(p)
};
u.Rb = function(a) {
  var b = this.p();
  if(this.Sc) {
    var c = nc(this.e()), c = new H(a.clientX + c.x, a.clientY + c.y);
    Qh(this, c) ? b = p : this.Oc && (b = xc(this.Sc, c) >= xc(this.Sc, this.hb))
  }
  if(b) {
    if(Hh(this), this.D = l, b = this.Db) {
      b.D = l
    }
  }else {
    3 == this.Ia() && Fh(this)
  }
  Ph.b.Rb.call(this, a)
};
u.qe = function() {
  this.ee() != this.a() && (this.Oc = p, this.D = this.a())
};
u.ge = function() {
  return this.Oc ? this.Mg : Ph.b.ge.call(this)
};
function Rh(a, b, c, d) {
  Ch.call(this, l, l, c);
  ja(a) ? this.we = a : this.Ye = a;
  this.yg = b != p;
  this.Te = [];
  this.k = d || (c ? c.k : document);
  N(this.k, "mouseover", this.Af, p, this)
}
A(Rh, Ph);
u = Rh.prototype;
u.g = function() {
  Rh.b.g.call(this);
  O(this.k, "mouseover", this.Af, p, this)
};
u.we = function(a) {
  return a.tagName in this.Ye && !!a.getAttribute(this.Ye[a.tagName])
};
u.Af = function(a) {
  if(a = a.target) {
    if(this.we(a)) {
      this.Hc(l), Sh(this, a)
    }else {
      if(this.yg) {
        a: {
          var b = ra(this.we, this), c = this.si;
          a = a.parentNode;
          for(var d = c == l, f = 0;a && (d || f <= c);) {
            if(b(a)) {
              break a
            }
            a = a.parentNode;
            f++
          }
          a = l
        }
        a && (this.Hc(l), Sh(this, a))
      }
    }
  }
};
function Sh(a, b) {
  if(b == a.gb) {
    Fh(a)
  }else {
    if(b != a.anchor) {
      if(1 == a.Ia() || 4 == a.Ia()) {
        Gh(a), Th(a)
      }
      var c = new Uh("trigger", a, b, h);
      a.Qa.contains(b) || (a.jc(b), a.Te.push(b));
      a.anchor = b;
      a.dispatchEvent(c) ? Lh(a, b, a.Cd) : Th(a)
    }
  }
}
function Vh(a, b) {
  var c = Ka(a.Te, b);
  -1 != c && (a.detach(b), a.Te.splice(c, 1))
}
function Th(a) {
  a.dispatchEvent(new Uh("canceltrigger", a, a.anchor || l));
  Vh(a, a.anchor);
  delete a.anchor
}
u.Na = function() {
  Rh.b.Na.call(this);
  l != this.gb && Vh(this, this.gb);
  this.gb = l
};
u.Ta = function(a) {
  var b = Kh(this, a.target);
  b && b != this.anchor ? Sh(this, b) : Rh.b.Ta.call(this, a)
};
u.Sb = function(a) {
  var b = this.anchor, c = this.Ia();
  Rh.b.Sb.call(this, a);
  if(c != this.Ia() && (1 == c || 4 == c)) {
    this.anchor = b, Th(this)
  }
};
u.Fe = function(a, b) {
  Rh.b.Fe.call(this, a, b);
  this.p() ? (a != this.gb && Vh(this, this.gb), this.gb = a) : (Gh(this), Th(this))
};
function Uh(a, b, c, d) {
  M.call(this, a, b);
  this.anchor = c;
  this.data = d
}
A(Uh, M);
function Wh(a) {
  P.call(this);
  this.d = a;
  a = C || E && !F("531") && "TEXTAREA" == a.tagName;
  this.l = new Ze(this);
  this.l.c(this.d, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
}
A(Wh, P);
Wh.prototype.B = l;
Wh.prototype.handleEvent = function(a) {
  if("input" == a.type) {
    Xh(this), (!rb || this.d == J(this.d).activeElement) && this.dispatchEvent(Yh(a))
  }else {
    if("keydown" != a.type || Td(a)) {
      var b = "keydown" == a.type ? this.d.value : l;
      C && 229 == a.keyCode && (b = l);
      var c = Yh(a);
      Xh(this);
      this.B = Rd(function() {
        this.B = l;
        this.d.value != b && this.dispatchEvent(c)
      }, 0, this)
    }
  }
};
function Xh(a) {
  a.B != l && (Pd.clearTimeout(a.B), a.B = l)
}
function Yh(a) {
  a = new wd(a.U);
  a.type = "input";
  return a
}
Wh.prototype.g = function() {
  Wh.b.g.call(this);
  this.l.R();
  Xh(this);
  delete this.d
};
function Zh() {
}
A(Zh, kh);
ea(Zh);
u = Zh.prototype;
u.f = function(a) {
  var b = {"class":"goog-inline-block " + this.jb(a).join(" ")}, b = a.e().f("div", b, a.qa);
  this.Jc(b, a.Ob());
  pg(this, a, b);
  return b
};
u.ua = r("button");
u.aa = function(a) {
  return"DIV" == a.tagName
};
u.v = function(a, b) {
  V(b, "goog-inline-block");
  return Zh.b.v.call(this, a, b)
};
u.X = r("");
u.m = r("goog-flat-button");
kg("goog-flat-button", function() {
  return new mh(l, Zh.ja())
});
function $h(a, b, c, d, f, g, m, n) {
  Q.call(this, n);
  this.bf = b;
  this.Ib = a;
  this.Ch = d || 0;
  this.Dh = f || 0;
  this.nc = m || 10;
  this.je = (g || 10) * this.nc;
  this.Zf = this.nc + 1;
  this.Yb = c || [];
  this.l = new Ze(this);
  this.rf = new wh
}
A($h, Q);
u = $h.prototype;
u.Fc = l;
u.Ce = l;
u.h = l;
u.yd = l;
u.Oa = l;
u.Kd = l;
u.cc = l;
u.Ca = l;
u.Cc = l;
u.Fa = l;
u.Va = l;
u.tb = l;
u.mc = l;
u.Pd = l;
u.Md = l;
u.la = l;
u.f = function() {
  $h.b.f.call(this);
  this.ia(this.e().createElement("div"))
};
u.g = function() {
  hd(this.la);
  this.la = l;
  hd(this.l);
  this.l = l;
  $h.b.g.call(this)
};
u.ia = function(a) {
  $h.b.ia.call(this, a);
  var b = xh(this.rf, ":2%C^O80V1H2s2G40Q%s0");
  this.Ce = new Ce(b);
  this.h = new eh(this.e());
  for(var b = this.Ib.Wd, c = 0;c < this.Ib.Wd.length;c++) {
    this.h.C(ai(this, c, b[c]), k)
  }
  this.yd = new $("Category Menu", this.h, h, this.e());
  this.C(this.yd, k);
  this.Oa = new eh(this.e());
  this.Kd = new $("Subcategory Menu", this.Oa, h, this.e());
  this.C(this.Kd, k);
  b = new Q(this.e());
  this.C(b, k);
  c = new Q(this.e());
  b.C(c, k);
  this.cc = c.a();
  var d = new Q(this.e());
  c.C(d, k);
  this.hg = d.a();
  this.Ca = new Q(this.e());
  b.C(this.Ca, k);
  this.Cc = new Q(this.e());
  ff(this.Cc, this.e().f("div"));
  this.C(this.Cc, k);
  c = new Q(this.e());
  ff(c, this.e().f("span", l, "Recent Selections:"));
  this.C(c, k);
  this.Fa = new Q(this.e());
  this.C(this.Fa, k);
  c = new Q(this.e());
  ff(c, this.e().f("span", l, "U+"));
  this.C(c, k);
  this.Va = new tf("Hex Input", this.e());
  this.C(this.Va, k);
  this.tb = new mh("OK", h, this.e());
  this.C(this.tb, k);
  this.tb.na(p);
  this.Pd = this.e().f("div", {id:"zoom", className:"goog-char-picker-char-zoom"});
  this.mc = this.e().f("div", {id:"charName", className:"goog-char-picker-name"});
  this.Md = this.e().f("div", {id:"unicode", className:"goog-char-picker-unicode"});
  d = this.e().f("div", {id:"preview"}, this.Pd, this.mc, this.Md);
  L(d, p);
  this.la = new Rh({DIV:"char"}, h, this.e());
  this.la.Hd(d);
  var f = this;
  N(this.la, "beforeshow", function() {
    var a = bi(f.la.gb || f.la.anchor);
    a && (f.Pd.innerHTML = f.Ce.contains(a) ? "\u00a0" : a, f.Md.innerHTML = "U+" + Te(Ve(a).toString(16).toUpperCase()), f.mc.innerHTML = "", f.bf.getName(a, function(a) {
      a && (f.mc.innerHTML = a)
    }))
  });
  V(a, "goog-char-picker");
  V(this.hg, "goog-stick");
  V(this.cc, "goog-stickwrap");
  V(b.a(), "goog-char-picker-grid-container");
  V(this.Ca.a(), "goog-char-picker-grid");
  V(this.Fa.a(), "goog-char-picker-grid");
  V(this.Fa.a(), "goog-char-picker-recents");
  V(this.Cc.a(), "goog-char-picker-notice");
  V(c.a(), "goog-char-picker-uplus");
  V(this.Va.a(), "goog-char-picker-input-box");
  V(this.tb.a(), "goog-char-picker-okbutton");
  V(d, "goog-char-picker-hovercard");
  this.la.className = "goog-char-picker-hovercard";
  this.Ca.Tc = this.je;
  this.Fa.Tc = this.Zf;
  ci(this, this.Ca);
  ci(this, this.Fa);
  di(this, this.Fa, this.Yb);
  ei(this, this.Ch, this.Dh);
  new th(this.h);
  new th(this.Oa);
  V(this.h.a(), "goog-char-picker-menu");
  V(this.Oa.a(), "goog-char-picker-menu")
};
u.s = function() {
  $h.b.s.call(this);
  var a = new Wh(this.Va.a());
  this.L = new ag(this.Va.a());
  this.l.c(this.yd, "action", td).c(this.Kd, "action", td).c(this, "action", this.uh, k).c(a, "input", this.mh).c(this.L, "key", this.hh).c(this.Fa, "focus", this.Sa).c(this.Ca, "focus", this.Sa);
  N(this.tb.a(), "mousedown", this.yf, k, this);
  N(this.cc, "scroll", this.th, k, this)
};
u.Sa = function(a) {
  var b = a.target.a();
  a = bi(b);
  U(b, "label", "");
  a && this.bf.getName(a, function(a) {
    a && U(b, "label", a)
  })
};
u.th = function(a) {
  var b = Math.ceil(a.target.scrollTop * this.Kf.length / (this.nc * a.target.scrollHeight)) * this.nc;
  this.Fh != b && (this.Fh = b, fi(this, this.Ca, this.Kf, b));
  a.stopPropagation()
};
u.uh = function(a) {
  a.target.getParent() == this.h ? (this.h.t(p), ei(this, a.target.X())) : a.target.getParent() == this.Oa ? (this.Oa.t(p), gi(this, a.target.X())) : a.target.getParent() == this.Ca ? (a = a.target.a(), this.Fc = bi(a), hi(this, this.Fc)) : a.target.getParent() == this.Fa && (this.Fc = bi(a.target.a()))
};
u.mh = function() {
  var a = ii(this);
  if(a) {
    var b = "U+" + Te(Ve(a).toString(16).toUpperCase());
    this.Pd.innerHTML = a;
    this.Md.innerHTML = b;
    this.mc.innerHTML = "";
    a = new Oh(this.Va.a());
    this.la.Hc(a);
    Sh(this.la, this.Va.a());
    this.tb.na(k)
  }else {
    a = this.la, Gh(a), Th(a), this.la.t(p), this.tb.na(p)
  }
};
u.yf = function() {
  var a = ii(this);
  return a && a.charCodeAt(0) ? (this.Fc = a, hi(this, a), k) : p
};
u.hh = function(a) {
  return 13 == a.keyCode ? this.yf() ? this.dispatchEvent("action") : p : p
};
function bi(a) {
  return a.getAttribute("char")
}
function ai(a, b, c) {
  a = new Dg(c, b, a.e());
  a.t(k);
  return a
}
function ei(a, b, c) {
  a.af = b;
  for(a.yd.$a(a.Ib.Wd[b]);T(a.Oa);) {
    var d = a.Oa;
    d.removeChild(S(d, 0), k).R()
  }
  b = a.Ib.ig[b];
  for(d = 0;d < b.length;d++) {
    var f = ai(a, d, b[d]);
    a.Oa.C(f, k)
  }
  gi(a, c || 0)
}
function gi(a, b) {
  a.Kd.$a(a.Ib.ig[a.af][b]);
  var c = xh(a.rf, a.Ib.xg[a.af][b]);
  di(a, a.Ca, c)
}
function di(a, b, c) {
  b == a.Ca && (a.Cc.a().innerHTML = We(c[0]) ? "Please hover over each cell for the character name." : "", a.Kf = c, a.hg.style.height = 0 < a.cc.offsetHeight ? a.cc.offsetHeight * c.length / a.je + "px" : 3 * a.nc * c.length / a.je + "em", a.cc.scrollTop = 0);
  fi(a, b, c, 0)
}
function fi(a, b, c, d) {
  for(var f = 0;f < b.Tc && d < c.length;f++, d++) {
    var g = S(b, f), m = c[d], n = a.Ce.contains(m) ? "\u00a0" : m, s = g.a();
    s.innerHTML = n;
    s.setAttribute("char", m);
    g.t(k)
  }
  for(;f < b.Tc;f++) {
    S(b, f).t(p)
  }
}
function ci(a, b) {
  for(var c = 0;c < b.Tc;c++) {
    var d = new mh(" ", Zh.ja(), a.e());
    d.Ab |= 32;
    b.C(d, k);
    d.t(p);
    d.a().removeAttribute("role")
  }
}
function hi(a, b) {
  b && (b.charCodeAt(0) && !Ra(a.Yb, b)) && (a.Yb.unshift(b), a.Yb.length > a.Zf && a.Yb.pop(), di(a, a.Fa, a.Yb))
}
function ii(a) {
  a = a.Va.X();
  return Ue(parseInt(a, 16))
}
;function ji(a) {
  P.call(this);
  this.Qc = a || window;
  this.vd = N(this.Qc, "resize", this.sh, p, this);
  this.Jd = Sb(this.Qc || window)
}
A(ji, P);
u = ji.prototype;
u.vd = l;
u.Qc = l;
u.Jd = l;
u.g = function() {
  ji.b.g.call(this);
  this.vd && (Jd(this.vd), this.vd = l);
  this.Jd = this.Qc = l
};
u.sh = function() {
  var a = Sb(this.Qc || window);
  Ib(a, this.Jd) || (this.Jd = a, this.dispatchEvent("resize"))
};
function ki() {
  this.ra = p;
  var a = K("root");
  this.We = Ye(a, "username");
  this.dir = Ye(a, "dir");
  this.file = Ye(a, "file");
  this.qi = {anotations:["hello", "www", ["world", ["a", "b", "c", "d", "E"]], "XXXee"]};
  this.load()
}
u = ki.prototype;
u.load = function() {
  var a = new Ge;
  N(a, "complete", function(a) {
    200 != Re(a.target) ? alert("Sorry, I cant't load this annotation. :(") : (a = a.target, a = a.n ? me(a.n.responseText) : h, this.data = a, li(this, this.data))
  }, p, this);
  a.send("/api_get/" + this.dir + "/" + this.file)
};
function li(a, b) {
  var c = Ub("div", {id:"container"});
  oc(c, {Bh:"/img/" + a.dir + "/" + a.file, We:a.We, dir:a.dir, file:a.file, Ph:a.data.noText, Og:a.data.dontUnderstandLanguage, Sf:a.data.notes, ui:[], position:a.data.prevAndNext[2] + 1 + "/" + a.data.prevAndNext[3]});
  Yb(c);
  var c = new Q, d = new Q;
  (new mi(c, d, ni)).v(document.getElementById("split-container"));
  oi(a, b.anotations);
  pi(a);
  a.cg();
  qi(a);
  c = new $h(new jg, new Xe, ["\ud869\uded6", "a", "b", "c"], 10, 1);
  c.v(K("char-picker"));
  a.$h = c;
  N(c, "action", a.Ug, p, a);
  a.startTime = Date.now();
  setInterval(function() {
    var b = Math.floor((Date.now() - a.startTime) / 1E3), c = Math.floor(b / 60);
    cc(K("timer"), Math.floor(c / 60) + "h " + c % 60 + "m " + b % 60 + "s")
  }, 200);
  c = new ji;
  N(c, "resize", a.cg);
  N(K("anotation-img"), "click", function() {
    var a = K("anotation-img");
    !Ra(Xa(a), "img-full") ? Ya(a, "img-full") : Za(a, "img-full")
  });
  N(K("more-options-show"), "click", function() {
    var a = K("more-options");
    !Ra(Xa(a), "hide") ? Ya(a, "hide") : Za(a, "hide")
  });
  N(K("save"), "click", a.Ne, p, a);
  N(K("prev"), "click", a.Ne, p, a);
  N(K("next"), "click", a.Ne, p, a);
  window.onbeforeunload = function() {
    if(a.ra) {
      return"You have unsaved changes. Do you really want to leave this anotation?"
    }
  }
}
u.Ug = function() {
  var a = this.$h.Fc, b = this.va.a().value;
  this.va.a().value = b + a;
  this.va.a().focus()
};
function qi(a) {
  var b = new Yd(K("split-container"));
  b.o("save", "meta+S");
  b.o("save", "ctrl+S");
  b.o("next", "meta+shift+right");
  b.o("next", "ctrl+shift+right");
  b.o("prev", "meta+shift+left");
  b.o("prev", "ctrl+shift+left");
  N(b, "shortcut", a.kh, p, a)
}
u.kh = function(a) {
  K(a.identifier).click();
  return p
};
function oi(a, b) {
  var c = new hg("root", yf);
  ri(a, c, b);
  hf(c, document.getElementById("tree-container"));
  Kf(c);
  a.r = c;
  c = new Yd(c.z());
  c.o("ESC", "esc");
  c.o("DELETE", "delete");
  c.o("UP", "meta+up");
  c.o("UP", "ctrl+up");
  c.o("DOWN", "meta+down");
  c.o("DOWN", "ctrl+down");
  c.o("LEFT", "meta+left");
  c.o("LEFT", "ctrl+left");
  c.o("RIGHT", "meta+right");
  c.o("RIGHT", "ctrl+right");
  c.o("CUT", "meta+x");
  c.o("CUT", "ctrl+x");
  c.o("PASTE", "meta+v");
  c.o("PASTE", "ctrl+v");
  c.o("EDIT", "meta+e");
  c.o("EDIT", "ctrl+e");
  c.o("CASE", "meta+k");
  c.o("CASE", "ctrl+k");
  N(c, "shortcut", a.vh, p, a);
  a.r.da().c(K("tree-container"), "dblclick", a.sf, p, a)
}
u.sf = function() {
  var a = this.r.q;
  if(0 == a.Mb().length) {
    var b = a.lb(), b = window.prompt("Set text value:", b);
    0 < b.length && a.Ic(b)
  }
};
u.vh = function(a) {
  switch(a.identifier) {
    case "CASE":
      a = this.r.q;
      if(0 != a.Mb().length) {
        return
      }
      var b = a.lb(), c = b.toUpperCase();
      c == b && (c = b.toLowerCase());
      a.Ic(c);
      break;
    case "EDIT":
      this.sf();
      break;
    case "ESC":
      this.va.a().focus();
      break;
    case "DELETE":
      this.r.q.getParent() && this.r.q.getParent().removeChild(this.r.q);
      this.ra = k;
      break;
    case "UP":
      a = this.r.q;
      if(0 != a.Mb().length) {
        return
      }
      b = a.getParent();
      if(!Sf(a)) {
        return
      }
      if(Sf(a).getParent() == b) {
        c = lf(b, a), b.removeChild(a), b.Aa(a, c - 1)
      }else {
        for(c = a;;) {
          c = Sf(c);
          if(!c) {
            return
          }
          if(!S(c, 0)) {
            break
          }
        }
        b = c.getParent();
        if(!b) {
          return
        }
        a.getParent().removeChild(a);
        c = lf(b, c);
        b.Aa(a, c + 1)
      }
      Gf(this.r, a);
      this.ra = k;
      break;
    case "DOWN":
      a = this.r.q;
      if(0 != a.Mb().length) {
        return
      }
      b = a.getParent();
      c = Rf(a);
      if(!c) {
        return
      }
      if(c.getParent() == b && !T(c)) {
        c = lf(b, a), b.removeChild(a), b.Aa(a, c + 1)
      }else {
        for(c = a;!(c = Rf(c), !S(c, 0));) {
        }
        b = c.getParent();
        if(!b) {
          return
        }
        c = lf(b, c);
        a.getParent().removeChild(a);
        b.Aa(a, c)
      }
      Gf(this.r, a);
      this.ra = k;
      break;
    case "RIGHT":
      a = this.r.q;
      if(T(a)) {
        return
      }
      c = a.H().createNode(a.lb());
      a.Id("&nbsp;&nbsp;&nbsp;&nbsp");
      a.add(c);
      Gf(this.r, c);
      this.ra = k;
      break;
    case "RIGHT_OLD":
      return;
    case "LEFT":
      a = this.r.q;
      b = a.getParent();
      c = b.getParent();
      if(!c) {
        return
      }
      b.removeChild(a);
      c.add(a);
      Gf(this.r, a);
      this.ra = k;
      break;
    case "CUT":
      this.r.q && (this.Eb = this.r.q, this.Eb.getParent() && this.Eb.getParent().remove(this.Eb));
      this.ra = k;
      break;
    case "PASTE":
      this.r.q && this.Eb && (a = this.r.q, S(a, 0) || (a = a.getParent()), a.add(this.Eb), this.Eb = l), this.ra = k
  }
  Kf(this.r);
  this.refresh()
};
u.refresh = function() {
  var a = this.r;
  a.yb != p && (a.yb = p, a.j && ig(a));
  a = this.r;
  a.yb != k && (a.yb = k, a.j && ig(a))
};
function si(a) {
  for(var b = a.r.q;b.getParent();) {
    b = b.getParent()
  }
  a = ti(a, b);
  return ha(a) ? a : []
}
function ti(a, b) {
  var c = b.Mb();
  if(0 < c.length) {
    var d = [];
    La(c, function(a) {
      d.push(ti(this, a))
    }, a);
    return d
  }
  return b.lb()
}
function ri(a, b, c) {
  b.Id("&nbsp;&nbsp;&nbsp;&nbsp;");
  if(0 < c.length) {
    for(var d = 0;d < c.length;d++) {
      var f = b.H().createNode("");
      b.add(f);
      ha(c[d]) ? ri(a, f, c[d]) : f.Ic(c[d])
    }
  }
}
function pi(a) {
  a.va = new tf;
  var b = a.va;
  b.v(K("main-input"));
  var c = xf(b);
  b.te = k;
  b.a().focus();
  !c && !uf && (b.a().value = b.wa);
  b.a().select();
  uf || (b.l && b.l.ud(b.a(), "click", b.Sa), Rd(b.Qg, 10, b));
  b = new Yd(b.z());
  b.o("ESC", "esc");
  b.o("ENTER", "enter");
  b.o("CMD_ENTER", "meta+enter");
  b.o("CMD_ENTER", "ctrl+enter");
  b.o("CASE", "meta+k");
  b.o("CASE", "ctrl+k");
  N(b, "shortcut", a.lh, p, a)
}
u.lh = function(a) {
  if("ENTER" == a.identifier) {
    var b = this.va.X(), b = Aa(b);
    "" == b ? alert("Can't add empty string!") : (a = this.r.q, !S(a, 0) && a.getParent() && (a = a.getParent()), b = a.H().createNode(b), a.add(b), this.va.clear(), this.ra = k)
  }else {
    if("CMD_ENTER" == a.identifier) {
      if(b = this.va.X(), b = Aa(b), "" == b) {
        alert("Can't add empty string!")
      }else {
        a = this.r.q;
        !S(a, 0) && a.getParent() && (a = a.getParent());
        var c = a.H().createNode("&nbsp;&nbsp;&nbsp;&nbsp;"), b = a.H().createNode(b);
        a.add(c);
        c.add(b);
        this.va.clear();
        Kf(this.r);
        Gf(this.r, c);
        this.ra = k
      }
    }else {
      "CASE" == a.identifier ? (a = this.va.a(), c = a.value, b = c.toUpperCase(), b == c && (b = c.toLowerCase()), a.value = b) : this.r.a().focus()
    }
  }
};
u.cg = function() {
  var a = Sb(window).height, b;
  b = Ob("goog-splitpane-first-container");
  Rc(b, a);
  b = Ob("goog-splitpane-second-container");
  Rc(b, a);
  b = Ob("goog-splitpane-handle");
  Rc(b, a);
  b = K("split-container");
  Rc(b, a)
};
u.Ne = function(a) {
  var b = this.va.X(), b = Aa(b);
  "" != b ? alert("You have nonempty string in input box. Add it into annotation tree or delete it before saving.") : (this.ra = p, L(K("save-buttons"), p), this.Ih = a.target.id, this.data.anotations = si(this), this.data.noText = K("noText").checked, this.data.dontUnderstandLanguage = K("dontUnderstandLanguage").checked, this.data.notes = K("notes").value, a = new Ge, N(a, "complete", function(a) {
    L(K("save-buttons"), k);
    if(200 != Re(a.target)) {
      alert("Sorry, I cant't save that :(")
    }else {
      switch(this.Ih) {
        case "save":
          alert("Saved");
          break;
        case "prev":
          window.location = "/anotate/" + this.data.dir + "/" + this.data.prevAndNext[0];
          break;
        case "next":
          window.location = "/anotate/" + this.data.dir + "/" + this.data.prevAndNext[1]
      }
    }
  }, p, this), b = this.data, b = ne(b), b = encodeURIComponent(String(b)), a.send("/api_save/" + this.dir + "/" + this.file, "POST", b))
};
function ui(a, b, c) {
  P.call(this);
  this.target = a;
  this.handle = b || a;
  this.De = c || new yc(NaN, NaN, NaN, NaN);
  this.k = J(a);
  this.l = new Ze(this);
  a = sa(hd, this.l);
  this.Dc || (this.Dc = []);
  this.Dc.push(ra(a, h));
  N(this.handle, ["touchstart", "mousedown"], this.dg, p, this)
}
A(ui, P);
var vi = C || D && F("1.9.3");
u = ui.prototype;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.eg = 0;
u.fg = 0;
u.Jb = 0;
u.Kb = 0;
u.sa = k;
u.ib = p;
u.Ff = 0;
u.Nh = 0;
u.Ah = p;
u.Ve = p;
u.da = q("l");
u.na = ba("sa");
u.g = function() {
  ui.b.g.call(this);
  O(this.handle, ["touchstart", "mousedown"], this.dg, p, this);
  this.l.Ya();
  vi && this.k.releaseCapture();
  this.handle = this.target = l
};
function wi(a) {
  ga(a.Za) || (a.Za = Lc(a.target));
  return a.Za
}
u.dg = function(a) {
  var b = "mousedown" == a.type;
  if(this.sa && !this.ib && (!b || zd(a))) {
    xi(a);
    if(0 == this.Ff) {
      if(this.dispatchEvent(new yi("start", this, a.clientX, a.clientY, a))) {
        this.ib = k, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.k, c = b.documentElement, d = !vi;
    this.l.c(b, ["touchmove", "mousemove"], this.qh, d);
    this.l.c(b, ["touchend", "mouseup"], this.$c, d);
    vi ? (c.setCapture(p), this.l.c(c, "losecapture", this.$c)) : this.l.c(b ? b.parentWindow || b.defaultView : window, "blur", this.$c);
    C && this.Ah && this.l.c(b, "dragstart", ud);
    this.ei && this.l.c(this.ei, "scroll", this.Wh, d);
    this.clientX = this.eg = a.clientX;
    this.clientY = this.fg = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Ve ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == Cc(a) && (c = J(a).documentElement), c ? (D ? (d = Nc(c), b += d.left) : Db(8) && (d = Nc(c), b -= d.left), a = Lc(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.Jb = a;
    this.Kb = this.target.offsetTop;
    this.Je = nc(I(this.k));
    this.Nh = ta()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
u.$c = function(a, b) {
  this.l.Ya();
  vi && this.k.releaseCapture();
  if(this.ib) {
    xi(a);
    this.ib = p;
    var c = zi(this, this.Jb), d = Ai(this, this.Kb);
    this.dispatchEvent(new yi("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
};
function xi(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? xd(a, a.U.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && xd(a, a.U.changedTouches[0], a.currentTarget)
}
u.qh = function(a) {
  if(this.sa) {
    xi(a);
    var b = (this.Ve && wi(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.ib) {
      var d = this.eg - this.clientX, f = this.fg - this.clientY;
      if(d * d + f * f > this.Ff) {
        if(this.dispatchEvent(new yi("start", this, a.clientX, a.clientY, a))) {
          this.ib = k
        }else {
          this.Lb || this.$c(a);
          return
        }
      }
    }
    c = Bi(this, b, c);
    b = c.x;
    c = c.y;
    this.ib && this.dispatchEvent(new yi("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Ci(this, a, b, c), a.preventDefault())
  }
};
function Bi(a, b, c) {
  var d = nc(I(a.k));
  b += d.x - a.Je.x;
  c += d.y - a.Je.y;
  a.Je = d;
  a.Jb += b;
  a.Kb += c;
  b = zi(a, a.Jb);
  a = Ai(a, a.Kb);
  return new H(b, a)
}
u.Wh = function(a) {
  var b = Bi(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  Ci(this, a, b.x, b.y)
};
function Ci(a, b, c, d) {
  a.Ve && wi(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new yi("drag", a, b.clientX, b.clientY, b, c, d))
}
function zi(a, b) {
  var c = a.De, d = !isNaN(c.left) ? c.left : l, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != l ? d + c : Infinity, Math.max(d != l ? d : -Infinity, b))
}
function Ai(a, b) {
  var c = a.De, d = !isNaN(c.top) ? c.top : l, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != l ? d + c : Infinity, Math.max(d != l ? d : -Infinity, b))
}
function yi(a, b, c, d, f, g, m, n) {
  M.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.mi = f;
  this.left = ga(g) ? g : b.Jb;
  this.top = ga(m) ? m : b.Kb;
  this.pi = b;
  this.oi = !!n
}
A(yi, M);
function mi(a, b, c, d) {
  Q.call(this, d);
  this.ya = c;
  this.sc = a;
  this.C(a);
  this.Ec = b;
  this.C(b);
  this.Z = l
}
A(mi, Q);
u = mi.prototype;
u.zb = l;
u.P = l;
u.$b = l;
u.gd = 5;
u.Eh = l;
u.bg = l;
u.rc = l;
u.ff = k;
u.Ea = l;
var ni = "horizontal";
u = mi.prototype;
u.f = function() {
  var a = this.e(), b = a.f("div", "goog-splitpane-first-container"), c = a.f("div", "goog-splitpane-second-container"), d = a.f("div", "goog-splitpane-handle");
  this.d = a.f("div", "goog-splitpane", b, c, d);
  this.P = b;
  this.$b = c;
  this.Z = d;
  Di(this);
  Ei(this)
};
u.aa = function(a) {
  var b = Fi(a, "goog-splitpane-first-container");
  if(!b) {
    return p
  }
  this.P = b;
  b = Fi(a, "goog-splitpane-second-container");
  if(!b) {
    return p
  }
  this.$b = b;
  a = Fi(a, "goog-splitpane-handle");
  if(!a) {
    return p
  }
  this.Z = a;
  return k
};
function Fi(a, b) {
  for(var c = $b(a), d = 0;d < c.length;d++) {
    var f = c[d];
    if(qf(f, b)) {
      return f
    }
  }
  return Pb(document, l, b, a)[0]
}
u.ia = function(a) {
  mi.b.ia.call(this, a);
  Di(this);
  a = Xc(a);
  a = new G(a.width, a.height);
  Yc(this.a(), a);
  this.Ea && Yc(this.Ea, a);
  Gi(this);
  Ei(this)
};
function Ei(a) {
  var b = a.e();
  a.sc.a() || a.sc.f();
  b.appendChild(a.P, a.sc.a());
  a.Ec.a() || a.Ec.f();
  b.appendChild(a.$b, a.Ec.a());
  a.zb = new ui(a.Z, a.Z);
  a.P.style.position = "absolute";
  a.$b.style.position = "absolute";
  a = a.Z.style;
  a.position = "absolute";
  a.overflow = "hidden";
  a.zIndex = 2
}
u.s = function() {
  mi.b.s.call(this);
  var a = this.a();
  "static" == Cc(a) && (a.style.position = "relative");
  this.da().c(this.Z, "dblclick", this.dh).c(this.zb, "start", this.fh).c(this.zb, "drag", this.gh).c(this.zb, "end", this.eh);
  Gi(this, this.Eh)
};
function Hi(a) {
  return"vertical" == a.ya
}
function Di(a) {
  Hi(a) ? (a.Z.style.height = a.gd + "px", V(a.Z, "goog-splitpane-handle-vertical")) : (a.Z.style.width = a.gd + "px", V(a.Z, "goog-splitpane-handle-horizontal"))
}
u.Qe = function(a) {
  if(this.ya != a && (this.ya = a, a = Hi(this), this.j)) {
    if(Hi(this)) {
      var b = this.Z;
      qf(b, "goog-splitpane-handle-horizontal") && (sf(b, "goog-splitpane-handle-horizontal"), V(b, "goog-splitpane-handle-vertical"))
    }else {
      b = this.Z, qf(b, "goog-splitpane-handle-vertical") && (sf(b, "goog-splitpane-handle-vertical"), V(b, "goog-splitpane-handle-horizontal"))
    }
    ia(this.rc) ? (b = Xc(this.a()), Gi(this, this.rc * (a ? b.height / b.width : b.width / b.height))) : Gi(this)
  }
};
function Ii(a, b) {
  Dc(a, b.left, b.top);
  Yc(a, new G(Math.max(b.width, 0), Math.max(b.height, 0)))
}
function Gi(a, b) {
  var c = Xc(a.a()), d = Hi(a), f = ia(b) ? b : ia(a.rc) ? a.rc : Math.floor((d ? c.height : c.width) / 2);
  a.rc = f;
  var g, m, n, s, v, t, w;
  d ? (n = d = c.width, s = a.gd, m = c.height - f - s, g = c.width, w = 0 + f, t = 0, v = w + s, c = 0) : (d = f, f = c.height, n = a.gd, s = c.height, g = c.width - d - n, m = c.height, t = 0 + d, w = 0, c = t + n, v = 0);
  Ii(a.P, new yc(0, 0, d, f));
  "function" == typeof a.sc.Le && a.sc.Le(new G(d, f));
  Ii(a.Z, new yc(t, w, n, s));
  Ii(a.$b, new yc(c, v, g, m));
  "function" == typeof a.Ec.Le && a.Ec.Le(new G(g, m));
  a.dispatchEvent("change")
}
u.fh = function() {
  if(!this.Ea) {
    var a = "position: relative";
    C && !F("10") && (a += ";background-color: #000;filter: Alpha(Opacity=0)");
    this.Ea = this.e().f("div", {style:a});
    this.e().appendChild(this.a(), this.Ea)
  }
  this.Ea.style.zIndex = 1;
  Yc(this.Ea, Xc(this.a()));
  var b = Fc(this.P), c = a = 0, d = b.x, b = b.y, f = Xc(this.P), g = $c(this.P), m = $c(this.$b);
  Hi(this) ? (c = g.height + m.height, b += f.height - g.height) : (a = g.width + m.width, d += f.width - g.width);
  this.zb.De = new yc(d, b, a, c) || new yc(NaN, NaN, NaN, NaN)
};
u.gh = function(a) {
  this.ff && (Hi(this) ? Gi(this, a.top - Fc(this.P).y) : Gi(this, a.left - Fc(this.P).x), this.dispatchEvent("handle_drag"))
};
u.eh = function(a) {
  this.Ea.style.zIndex = -1;
  this.ff || (Hi(this) ? Gi(this, a.top - Fc(this.P).y) : Gi(this, a.left - Fc(this.P).x));
  this.dispatchEvent("handle_drag_end")
};
u.dh = function() {
  var a;
  a = this.P;
  var b = Qc(this.Z);
  a = Qc(a);
  a = new H(b.x - a.x, b.y - a.y);
  var c = Xc(this.P), d = $c(this.P);
  (b = Hi(this)) ? (c = c.height - d.height, a = a.y) : (c = c.width - d.width, a = a.x);
  c == a ? Gi(this, this.bg) : (this.bg = b ? Xc(this.P).height : Xc(this.P).width, Gi(this, c));
  this.dispatchEvent("handle_snap")
};
u.g = function() {
  hd(this.zb);
  this.zb = l;
  Zb(this.Ea);
  this.Ea = l;
  mi.b.g.call(this)
};
function Ji() {
  new ki
}
var Ki = ["app", "start"], Li = x;
!(Ki[0] in Li) && Li.execScript && Li.execScript("var " + Ki[0]);
for(var Mi;Ki.length && (Mi = Ki.shift());) {
  !Ki.length && Ji !== h ? Li[Mi] = Ji : Li = Li[Mi] ? Li[Mi] : Li[Mi] = {}
}
;
