function f(a) {
  throw a;
}
var h = void 0, l = !0, m = null, p = !1;
function aa() {
  return function() {
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var s, ca = ca || {}, t = this;
function da() {
}
function ea(a) {
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
function u(a) {
  return"array" == ea(a)
}
function fa(a) {
  var b = ea(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function v(a) {
  return"string" == typeof a
}
function ga(a) {
  return"number" == typeof a
}
function ha(a) {
  return"function" == ea(a)
}
function ia(a) {
  var b = typeof a;
  return"object" == b && a != m || "function" == b
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || f(Error());
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
function na(a, b, c) {
  na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return na.apply(m, arguments)
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b)
  }
}
var pa = Date.now || function() {
  return+new Date
};
function x(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.c = b.prototype;
  a.prototype = new c
}
;function qa(a, b) {
  a != m && this.append.apply(this, arguments)
}
s = qa.prototype;
s.m = "";
s.set = function(a) {
  this.m = "" + a
};
s.append = function(a, b, c) {
  this.m += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.m += arguments[d]
    }
  }
  return this
};
s.clear = function() {
  this.m = ""
};
s.toString = q("m");
var ra = {}, sa = {};
var ta;
function ua(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function va(a) {
  if(!wa.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(za, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;"));
  return a
}
var xa = /&/g, ya = /</g, za = />/g, Aa = /\"/g, wa = /[&<>\"]/;
function Ba(a) {
  var b = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, c = document.createElement("div");
  return a.replace(Ca, function(a, e) {
    var g = b[a];
    if(g) {
      return g
    }
    if("#" == e.charAt(0)) {
      var k = Number("0" + e.substr(1));
      isNaN(k) || (g = String.fromCharCode(k))
    }
    g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = g
  })
}
function Da(a) {
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
var Ca = /&([^;\s<&]+);?/g;
var z = Array.prototype, Ea = z.indexOf ? function(a, b, c) {
  return z.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(v(a)) {
    return!v(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Fa = z.forEach ? function(a, b, c) {
  z.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = v(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a)
  }
}, Ga = z.filter ? function(a, b, c) {
  return z.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], g = 0, k = v(a) ? a.split("") : a, n = 0;n < d;n++) {
    if(n in k) {
      var r = k[n];
      b.call(c, r, n, a) && (e[g++] = r)
    }
  }
  return e
};
function Ha(a) {
  var b;
  a: {
    b = Ia;
    for(var c = a.length, d = v(a) ? a.split("") : a, e = 0;e < c;e++) {
      if(e in d && b.call(h, d[e], e, a)) {
        b = e;
        break a
      }
    }
    b = -1
  }
  return 0 > b ? m : v(a) ? a.charAt(b) : a[b]
}
function Ja(a, b) {
  return 0 <= Ea(a, b)
}
function Ka(a, b) {
  var c = Ea(a, b), d;
  (d = 0 <= c) && z.splice.call(a, c, 1);
  return d
}
function La(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
}
function Ma(a, b, c, d) {
  z.splice.apply(a, Na(arguments, 1))
}
function Na(a, b, c) {
  return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c)
}
;function Oa(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}
function Pa(a, b) {
  for(var c = Oa(a), d = Na(arguments, 1), e = c.length + d.length, g = c, k = 0;k < d.length;k++) {
    Ja(g, d[k]) || g.push(d[k])
  }
  a.className = c.join(" ");
  return c.length == e
}
function Qa(a, b) {
  var c = Oa(a), d = Na(arguments, 1), c = Ra(c, d);
  a.className = c.join(" ")
}
function Ra(a, b) {
  return Ga(a, function(a) {
    return!Ja(b, a)
  })
}
function Sa(a, b) {
  !Ja(Oa(a), b) ? Pa(a, b) : Qa(a, b)
}
;function Ta(a, b) {
  for(var c in a) {
    b.call(h, a[c], c, a)
  }
}
function Ua(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Va(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Xa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var g = 0;g < Wa.length;g++) {
      c = Wa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
function Ya(a) {
  var b = arguments.length;
  if(1 == b && u(arguments[0])) {
    return Ya.apply(m, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = l
  }
  return c
}
;var Za, $a, ab, bb, A, cb;
function db() {
  return t.navigator ? t.navigator.userAgent : m
}
function eb() {
  return t.navigator
}
bb = ab = $a = Za = p;
var fb;
if(fb = db()) {
  var gb = eb();
  Za = 0 == fb.lastIndexOf("Opera", 0);
  $a = !Za && (-1 != fb.indexOf("MSIE") || -1 != fb.indexOf("Trident"));
  ab = !Za && -1 != fb.indexOf("WebKit");
  bb = !Za && !ab && !$a && "Gecko" == gb.product
}
var hb = Za, B = $a, C = bb, D = ab, ib, jb = eb();
ib = jb && jb.platform || "";
A = -1 != ib.indexOf("Mac");
cb = -1 != ib.indexOf("Win");
var kb = !!eb() && -1 != (eb().appVersion || "").indexOf("X11");
function lb() {
  var a = t.document;
  return a ? a.documentMode : h
}
var mb;
a: {
  var nb = "", ob;
  if(hb && t.opera) {
    var pb = t.opera.version, nb = "function" == typeof pb ? pb() : pb
  }else {
    if(C ? ob = /rv\:([^\);]+)(\)|;)/ : B ? ob = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (ob = /WebKit\/(\S+)/), ob) {
      var qb = ob.exec(db()), nb = qb ? qb[1] : ""
    }
  }
  if(B) {
    var rb = lb();
    if(rb > parseFloat(nb)) {
      mb = String(rb);
      break a
    }
  }
  mb = nb
}
var sb = {};
function E(a) {
  var b;
  if(!(b = sb[a])) {
    b = 0;
    for(var c = ua(String(mb)).split("."), d = ua(String(a)).split("."), e = Math.max(c.length, d.length), g = 0;0 == b && g < e;g++) {
      var k = c[g] || "", n = d[g] || "", r = RegExp("(\\d*)(\\D*)", "g"), y = RegExp("(\\d*)(\\D*)", "g");
      do {
        var w = r.exec(k) || ["", "", ""], F = y.exec(n) || ["", "", ""];
        if(0 == w[0].length && 0 == F[0].length) {
          break
        }
        b = ((0 == w[1].length ? 0 : parseInt(w[1], 10)) < (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? -1 : (0 == w[1].length ? 0 : parseInt(w[1], 10)) > (0 == F[1].length ? 0 : parseInt(F[1], 10)) ? 1 : 0) || ((0 == w[2].length) < (0 == F[2].length) ? -1 : (0 == w[2].length) > (0 == F[2].length) ? 1 : 0) || (w[2] < F[2] ? -1 : w[2] > F[2] ? 1 : 0)
      }while(0 == b)
    }
    b = sb[a] = 0 <= b
  }
  return b
}
function G(a) {
  return B && tb >= a
}
var ub = t.document, tb = !ub || !B ? h : lb() || ("CSS1Compat" == ub.compatMode ? parseInt(mb, 10) : 5);
function H(a, b) {
  this.width = a;
  this.height = b
}
H.prototype.la = function() {
  return new H(this.width, this.height)
};
H.prototype.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
H.prototype.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
var vb = !B || G(9), wb = !C && !B || B && G(9) || C && E("1.9.1");
B && E("9");
function I(a, b) {
  this.x = a !== h ? a : 0;
  this.y = b !== h ? b : 0
}
I.prototype.la = function() {
  return new I(this.x, this.y)
};
I.prototype.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this
};
I.prototype.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this
};
function J(a) {
  return a ? new xb(K(a)) : ta || (ta = new xb)
}
function L(a) {
  return v(a) ? document.getElementById(a) : a
}
function yb(a) {
  var b = document;
  b.querySelectorAll && b.querySelector ? a = b.querySelector("." + a) : (b = document, a = (b.querySelectorAll && b.querySelector ? b.querySelectorAll("." + a) : b.getElementsByClassName ? b.getElementsByClassName(a) : zb("*", a, h))[0]);
  return a || m
}
function zb(a, b, c) {
  var d = document;
  c = c || d;
  a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, e = 0, g = 0, k;k = c[g];g++) {
        a == k.nodeName && (d[e++] = k)
      }
      d.length = e;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(g = e = 0;k = c[g];g++) {
      a = k.className, "function" == typeof a.split && Ja(a.split(/\s+/), b) && (d[e++] = k)
    }
    d.length = e;
    return d
  }
  return c
}
function Ab(a, b) {
  Ta(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Bb ? a.setAttribute(Bb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
  })
}
var Bb = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function Cb(a) {
  a = a.document;
  a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
  return new H(a.clientWidth, a.clientHeight)
}
function Db(a, b, c) {
  return Eb(document, arguments)
}
function Eb(a, b) {
  var c = b[0], d = b[1];
  if(!vb && d && (d.name || d.type)) {
    c = ["<", c];
    d.name && c.push(' name="', va(d.name), '"');
    if(d.type) {
      c.push(' type="', va(d.type), '"');
      var e = {};
      Xa(e, d);
      delete e.type;
      d = e
    }
    c.push(">");
    c = c.join("")
  }
  c = a.createElement(c);
  d && (v(d) ? c.className = d : u(d) ? Pa.apply(m, [c].concat(d)) : Ab(c, d));
  2 < b.length && Fb(a, c, b, 2);
  return c
}
function Fb(a, b, c, d) {
  function e(c) {
    c && b.appendChild(v(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var g = c[d];
    if(fa(g) && !(ia(g) && 0 < g.nodeType)) {
      var k;
      a: {
        if(g && "number" == typeof g.length) {
          if(ia(g)) {
            k = "function" == typeof g.item || "string" == typeof g.item;
            break a
          }
          if(ha(g)) {
            k = "function" == typeof g.item;
            break a
          }
        }
        k = p
      }
      Fa(k ? La(g) : g, e)
    }else {
      e(g)
    }
  }
}
function Gb(a) {
  var b = document.body;
  b.insertBefore(a, b.childNodes[0] || m)
}
function Hb(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : m
}
function Ib(a) {
  return wb && a.children != h ? a.children : Ga(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function K(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function xb(a) {
  this.s = a || t.document || document
}
s = xb.prototype;
s.M = J;
s.a = function(a) {
  return v(a) ? this.s.getElementById(a) : a
};
s.t = function(a, b, c) {
  return Eb(this.s, arguments)
};
s.createElement = function(a) {
  return this.s.createElement(a)
};
s.createTextNode = function(a) {
  return this.s.createTextNode(String(a))
};
function Jb(a) {
  return"CSS1Compat" == a.s.compatMode
}
function Kb(a) {
  var b = a.s;
  a = !D && "CSS1Compat" == b.compatMode ? b.documentElement : b.body || b.documentElement;
  b = b.parentWindow || b.defaultView;
  return B && E("10") && b.pageYOffset != a.scrollTop ? new I(a.scrollLeft, a.scrollTop) : new I(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
s.appendChild = function(a, b) {
  a.appendChild(b)
};
s.append = function(a, b) {
  Fb(K(a), a, arguments, 1)
};
s.removeNode = Hb;
s.Ga = Ib;
s.contains = function(a, b) {
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
};
function Lb(a, b) {
  var c;
  c = b || Mb;
  c = '\t<div id="split-container" class="goog-splitpane"><div class="goog-splitpane-first-container"><img src="' + Nb(c.Fd) + '" id="anotation-img" class="img-full"></div><div class="goog-splitpane-second-container"><h2><a href=\'/dir/' + Nb(c.dir) + "'>" + Nb(c.dir) + "</a>/" + Nb(c.file) + "</h2><h6>user " + Nb(c.Zb) + ' | <span id="timer"></span> | <a href="/help" target="_blank">help</a> | <a href=\'/login\'>log out</a></h6><div id="tree-container" style="width:400px"></div><br><input type="text" id="main-input" class="form-control" placeholder="Add new text"><a href="#" id="more-options-show">More options</a><div class="well hide" id="more-options"><h5>More options</h5><textarea id="notes" placeholder="Notes" class="form-control" rows="3">' + 
  (c.Bc ? Nb(c.Bc) : "") + '</textarea><div class="checkbox"><label><input type="checkbox" ' + (c.gd ? "checked" : "") + ' id="dontUnderstandLanguage">I don\'t understand to the language in the picture</label><br><label><input type="checkbox" ' + (c.Qd ? "checked" : "") + ' id="noText">No text</label></div></div><center><div id="save-buttons" class="btn-group"><input type="button" id="prev" value="< Previous" class="btn btn-default"><input type="button" id="save" value="Save"  class="btn btn-default"><input type="button" id="next" value="Next >"  class="btn btn-default"></div></center></div><div class="goog-splitpane-handle"></div></div>';
  a.innerHTML = Ob(c)
}
function Ob(a) {
  if(!ia(a)) {
    return String(a)
  }
  if(p) {
    if(a.Ab === ra) {
      return a.content
    }
    if(a.Ab === sa) {
      return va(a.content)
    }
  }
  return"zSoyz"
}
var Mb = {};
B && E(8);
function Nb(a) {
  return a && a.Ab && a.Ab === ra ? a.content : String(a).replace(Pb, Qb)
}
var Rb = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function Qb(a) {
  return Rb[a]
}
var Pb = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Sb(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
}
s = Sb.prototype;
s.la = function() {
  return new Sb(this.top, this.right, this.bottom, this.left)
};
s.contains = function(a) {
  return!this || !a ? p : a instanceof Sb ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
s.expand = function(a, b, c, d) {
  ia(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
s.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this
};
s.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this
};
function M(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d
}
M.prototype.la = function() {
  return new M(this.left, this.top, this.width, this.height)
};
M.prototype.contains = function(a) {
  return a instanceof M ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
M.prototype.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this
};
M.prototype.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this
};
function N(a, b) {
  var c = K(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function O(a, b) {
  return N(a, b) || (a.currentStyle ? a.currentStyle[b] : m) || a.style && a.style[b]
}
function Tb(a) {
  return new I(a.offsetLeft, a.offsetTop)
}
function Ub(a) {
  var b;
  try {
    b = a.getBoundingClientRect()
  }catch(c) {
    return{left:0, top:0, right:0, bottom:0}
  }
  B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
}
function Vb(a) {
  if(B && !G(8)) {
    return a.offsetParent
  }
  var b = K(a), c = O(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = O(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return m
}
function Wb(a) {
  if(1 == a.nodeType) {
    var b;
    if(a.getBoundingClientRect) {
      b = Ub(a), b = new I(b.left, b.top)
    }else {
      b = Kb(J(a));
      var c, d = K(a), e = O(a, "position"), g = C && d.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (c = d.getBoxObjectFor(a)) && (0 > c.screenX || 0 > c.screenY), k = new I(0, 0), n;
      c = d ? K(d) : document;
      n = B && !G(9) && !Jb(J(c)) ? c.body : c.documentElement;
      if(a != n) {
        if(a.getBoundingClientRect) {
          c = Ub(a), d = Kb(J(d)), k.x = c.left + d.x, k.y = c.top + d.y
        }else {
          if(d.getBoxObjectFor && !g) {
            c = d.getBoxObjectFor(a), d = d.getBoxObjectFor(n), k.x = c.screenX - d.screenX, k.y = c.screenY - d.screenY
          }else {
            c = a;
            do {
              k.x += c.offsetLeft;
              k.y += c.offsetTop;
              c != a && (k.x += c.clientLeft || 0, k.y += c.clientTop || 0);
              if(D && "fixed" == O(c, "position")) {
                k.x += d.body.scrollLeft;
                k.y += d.body.scrollTop;
                break
              }
              c = c.offsetParent
            }while(c && c != a);
            if(hb || D && "absolute" == e) {
              k.y -= d.body.offsetTop
            }
            for(c = a;(c = Vb(c)) && c != d.body && c != n;) {
              if(k.x -= c.scrollLeft, !hb || "TR" != c.tagName) {
                k.y -= c.scrollTop
              }
            }
          }
        }
      }
      b = new I(k.x - b.x, k.y - b.y)
    }
    if(C && !E(12)) {
      var r;
      B ? r = "-ms-transform" : D ? r = "-webkit-transform" : hb ? r = "-o-transform" : C && (r = "-moz-transform");
      var y;
      r && (y = O(a, r));
      y || (y = O(a, "transform"));
      y ? (a = y.match(Xb), a = !a ? new I(0, 0) : new I(parseFloat(a[1]), parseFloat(a[2]))) : a = new I(0, 0);
      a = new I(b.x + a.x, b.y + a.y)
    }else {
      a = b
    }
    return a
  }
  r = ha(a.ld);
  y = a;
  a.targetTouches ? y = a.targetTouches[0] : r && a.w.targetTouches && (y = a.w.targetTouches[0]);
  return new I(y.clientX, y.clientY)
}
function Yb(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a
}
function Zb(a, b) {
  a.style.display = b ? "" : "none"
}
function $b(a) {
  return"rtl" == O(a, "direction")
}
function ac(a) {
  return new H(a.offsetWidth, a.offsetHeight)
}
function bc(a, b) {
  var c = Jb(J(K(a)));
  if(B && (!c || !E("8"))) {
    var d = a.style;
    if(c) {
      var c = cc(a), e = dc(a);
      d.pixelWidth = b.width - e.left - c.left - c.right - e.right;
      d.pixelHeight = b.height - e.top - c.top - c.bottom - e.bottom
    }else {
      d.pixelWidth = b.width, d.pixelHeight = b.height
    }
  }else {
    d = a.style, C ? d.MozBoxSizing = "border-box" : D ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(b.width, 0) + "px", d.height = Math.max(b.height, 0) + "px"
  }
}
function ec(a) {
  var b = K(a), c = B && a.currentStyle;
  if(c && Jb(J(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) {
    return b = fc(a, c.width, "width", "pixelWidth"), a = fc(a, c.height, "height", "pixelHeight"), new H(b, a)
  }
  c = ac(a);
  b = cc(a);
  a = dc(a);
  return new H(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
}
function fc(a, b, c, d) {
  if(/^\d+px?$/.test(b)) {
    return parseInt(b, 10)
  }
  var e = a.style[c], g = a.runtimeStyle[c];
  a.runtimeStyle[c] = a.currentStyle[c];
  a.style[c] = b;
  b = a.style[d];
  a.style[c] = e;
  a.runtimeStyle[c] = g;
  return b
}
function gc(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : m;
  return c ? fc(a, c, "left", "pixelLeft") : 0
}
function cc(a) {
  if(B) {
    var b = gc(a, "paddingLeft"), c = gc(a, "paddingRight"), d = gc(a, "paddingTop");
    a = gc(a, "paddingBottom");
    return new Sb(d, c, a, b)
  }
  b = N(a, "paddingLeft");
  c = N(a, "paddingRight");
  d = N(a, "paddingTop");
  a = N(a, "paddingBottom");
  return new Sb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var hc = {thin:2, medium:4, thick:6};
function ic(a, b) {
  if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : m)) {
    return 0
  }
  var c = a.currentStyle ? a.currentStyle[b + "Width"] : m;
  return c in hc ? hc[c] : fc(a, c, "left", "pixelLeft")
}
function dc(a) {
  if(B && !G(9)) {
    var b = ic(a, "borderLeft"), c = ic(a, "borderRight"), d = ic(a, "borderTop");
    a = ic(a, "borderBottom");
    return new Sb(d, c, a, b)
  }
  b = N(a, "borderLeftWidth");
  c = N(a, "borderRightWidth");
  d = N(a, "borderTopWidth");
  a = N(a, "borderBottomWidth");
  return new Sb(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Xb = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function jc() {
  0 != kc && (this.ce = Error().stack, lc[this[ja] || (this[ja] = ++ka)] = this)
}
var kc = 0, lc = {};
jc.prototype.Za = p;
jc.prototype.S = function() {
  if(!this.Za && (this.Za = l, this.e(), 0 != kc)) {
    var a = this[ja] || (this[ja] = ++ka);
    delete lc[a]
  }
};
jc.prototype.e = function() {
  if(this.Na) {
    for(;this.Na.length;) {
      this.Na.shift()()
    }
  }
};
function mc(a) {
  a && "function" == typeof a.S && a.S()
}
;var nc = "closure_listenable_" + (1E6 * Math.random() | 0);
function oc(a) {
  try {
    return!(!a || !a[nc])
  }catch(b) {
    return p
  }
}
var pc = 0;
function qc(a, b, c, d, e) {
  this.ca = a;
  this.sb = m;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.hb = e;
  this.key = ++pc;
  this.ya = this.Wa = p
}
function rc(a) {
  a.ya = l;
  a.ca = m;
  a.sb = m;
  a.src = m;
  a.hb = m
}
;function sc(a) {
  this.src = a;
  this.u = {};
  this.Sa = 0
}
sc.prototype.add = function(a, b, c, d, e) {
  var g = this.u[a];
  g || (g = this.u[a] = [], this.Sa++);
  var k = tc(g, b, d, e);
  -1 < k ? (a = g[k], c || (a.Wa = p)) : (a = new qc(b, this.src, a, !!d, e), a.Wa = c, g.push(a));
  return a
};
sc.prototype.remove = function(a, b, c, d) {
  if(!(a in this.u)) {
    return p
  }
  var e = this.u[a];
  b = tc(e, b, c, d);
  return-1 < b ? (rc(e[b]), z.splice.call(e, b, 1), 0 == e.length && (delete this.u[a], this.Sa--), l) : p
};
function uc(a, b) {
  var c = b.type;
  if(!(c in a.u)) {
    return p
  }
  var d = Ka(a.u[c], b);
  d && (rc(b), 0 == a.u[c].length && (delete a.u[c], a.Sa--));
  return d
}
sc.prototype.xa = function(a) {
  var b = 0, c;
  for(c in this.u) {
    if(!a || c == a) {
      for(var d = this.u[c], e = 0;e < d.length;e++) {
        ++b, rc(d[e])
      }
      delete this.u[c];
      this.Sa--
    }
  }
  return b
};
sc.prototype.Ha = function(a, b, c, d) {
  a = this.u[a];
  var e = -1;
  a && (e = tc(a, b, c, d));
  return-1 < e ? a[e] : m
};
function tc(a, b, c, d) {
  for(var e = 0;e < a.length;++e) {
    var g = a[e];
    if(!g.ya && g.ca == b && g.capture == !!c && g.hb == d) {
      return e
    }
  }
  return-1
}
;var vc = !B || G(9), wc = !B || G(9), xc = B && !E("9");
!D || E("528");
C && E("1.9b") || B && E("8") || hb && E("9.5") || D && E("528");
C && !E("8") || B && E("9");
function P(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
s = P.prototype;
s.e = aa();
s.S = aa();
s.V = p;
s.defaultPrevented = p;
s.Ec = l;
s.stopPropagation = function() {
  this.V = l
};
s.preventDefault = function() {
  this.defaultPrevented = l;
  this.Ec = p
};
function yc(a) {
  a.preventDefault()
}
;function zc(a) {
  zc[" "](a);
  return a
}
zc[" "] = da;
function Ac(a, b) {
  a && Bc(this, a, b)
}
x(Ac, P);
var Cc = [1, 4, 2];
s = Ac.prototype;
s.target = m;
s.relatedTarget = m;
s.offsetX = 0;
s.offsetY = 0;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.button = 0;
s.keyCode = 0;
s.charCode = 0;
s.ctrlKey = p;
s.altKey = p;
s.shiftKey = p;
s.metaKey = p;
s.Vd = p;
s.w = m;
function Bc(a, b, c) {
  var d = a.type = b.type;
  P.call(a, d);
  a.target = b.target || b.srcElement;
  a.currentTarget = c;
  if(c = b.relatedTarget) {
    if(C) {
      var e;
      a: {
        try {
          zc(c.nodeName);
          e = l;
          break a
        }catch(g) {
        }
        e = p
      }
      e || (c = m)
    }
  }else {
    "mouseover" == d ? c = b.fromElement : "mouseout" == d && (c = b.toElement)
  }
  a.relatedTarget = c;
  a.offsetX = D || b.offsetX !== h ? b.offsetX : b.layerX;
  a.offsetY = D || b.offsetY !== h ? b.offsetY : b.layerY;
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
  a.Vd = A ? b.metaKey : b.ctrlKey;
  a.state = b.state;
  a.w = b;
  b.defaultPrevented && a.preventDefault();
  delete a.V
}
s.stopPropagation = function() {
  Ac.c.stopPropagation.call(this);
  this.w.stopPropagation ? this.w.stopPropagation() : this.w.cancelBubble = l
};
s.preventDefault = function() {
  Ac.c.preventDefault.call(this);
  var a = this.w;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = p, xc) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
s.ld = q("w");
s.e = aa();
var Dc = "closure_lm_" + (1E6 * Math.random() | 0), Ec = {}, Fc = 0;
function Q(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Q(a, b[g], c, d, e)
    }
    return m
  }
  c = Gc(c);
  return oc(a) ? a.i(b, c, d, e) : Hc(a, b, c, p, d, e)
}
function Hc(a, b, c, d, e, g) {
  b || f(Error("Invalid event type"));
  var k = !!e, n = Ic(a);
  n || (a[Dc] = n = new sc(a));
  c = n.add(b, c, d, e, g);
  if(c.sb) {
    return c
  }
  d = Jc();
  c.sb = d;
  d.src = a;
  d.ca = c;
  a.addEventListener ? a.addEventListener(b, d, k) : a.attachEvent(b in Ec ? Ec[b] : Ec[b] = "on" + b, d);
  Fc++;
  return c
}
function Jc() {
  var a = Kc, b = wc ? function(c) {
    return a.call(b.src, b.ca, c)
  } : function(c) {
    c = a.call(b.src, b.ca, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Lc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Lc(a, b[g], c, d, e)
    }
    return m
  }
  c = Gc(c);
  return oc(a) ? a.ob(b, c, d, e) : Hc(a, b, c, l, d, e)
}
function Mc(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      Mc(a, b[g], c, d, e)
    }
  }else {
    if(c = Gc(c), oc(a)) {
      a.vb(b, c, d, e)
    }else {
      if(a && (a = Ic(a))) {
        (b = a.Ha(b, c, !!d, e)) && R(b)
      }
    }
  }
}
function R(a) {
  if(ga(a) || !a || a.ya) {
    return p
  }
  var b = a.src;
  if(oc(b)) {
    return uc(b.L, a)
  }
  var c = a.type, d = a.sb;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in Ec ? Ec[c] : Ec[c] = "on" + c, d);
  Fc--;
  (c = Ic(b)) ? (uc(c, a), 0 == c.Sa && (c.src = m, b[Dc] = m)) : rc(a);
  return l
}
function Nc(a, b, c, d) {
  var e = 1;
  if(a = Ic(a)) {
    if(b = a.u[b]) {
      b = La(b);
      for(a = 0;a < b.length;a++) {
        var g = b[a];
        g && (g.capture == c && !g.ya) && (e &= Oc(g, d) !== p)
      }
    }
  }
  return Boolean(e)
}
function Oc(a, b) {
  var c = a.ca, d = a.hb || a.src;
  a.Wa && R(a);
  return c.call(d, b)
}
function Kc(a, b) {
  if(a.ya) {
    return l
  }
  if(!wc) {
    var c;
    if(!(c = b)) {
      a: {
        c = ["window", "event"];
        for(var d = t, e;e = c.shift();) {
          if(d[e] != m) {
            d = d[e]
          }else {
            c = m;
            break a
          }
        }
        c = d
      }
    }
    e = c;
    c = new Ac(e, this);
    d = l;
    if(!(0 > e.keyCode || e.returnValue != h)) {
      a: {
        var g = p;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(k) {
            g = l
          }
        }
        if(g || e.returnValue == h) {
          e.returnValue = l
        }
      }
      e = [];
      for(g = c.currentTarget;g;g = g.parentNode) {
        e.push(g)
      }
      for(var g = a.type, n = e.length - 1;!c.V && 0 <= n;n--) {
        c.currentTarget = e[n], d &= Nc(e[n], g, l, c)
      }
      for(n = 0;!c.V && n < e.length;n++) {
        c.currentTarget = e[n], d &= Nc(e[n], g, p, c)
      }
    }
    return d
  }
  return Oc(a, new Ac(b, this))
}
function Ic(a) {
  a = a[Dc];
  return a instanceof sc ? a : m
}
var Pc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Gc(a) {
  return ha(a) ? a : a[Pc] || (a[Pc] = function(b) {
    return a.handleEvent(b)
  })
}
;function S() {
  jc.call(this);
  this.L = new sc(this);
  this.Oc = this
}
x(S, jc);
S.prototype[nc] = l;
s = S.prototype;
s.rb = m;
s.Wb = function(a) {
  this.rb = a
};
s.addEventListener = function(a, b, c, d) {
  Q(this, a, b, c, d)
};
s.removeEventListener = function(a, b, c, d) {
  Mc(this, a, b, c, d)
};
s.dispatchEvent = function(a) {
  var b, c = this.rb;
  if(c) {
    for(b = [];c;c = c.rb) {
      b.push(c)
    }
  }
  var c = this.Oc, d = a.type || a;
  if(v(a)) {
    a = new P(a, c)
  }else {
    if(a instanceof P) {
      a.target = a.target || c
    }else {
      var e = a;
      a = new P(d, c);
      Xa(a, e)
    }
  }
  var e = l, g;
  if(b) {
    for(var k = b.length - 1;!a.V && 0 <= k;k--) {
      g = a.currentTarget = b[k], e = Qc(g, d, l, a) && e
    }
  }
  a.V || (g = a.currentTarget = c, e = Qc(g, d, l, a) && e, a.V || (e = Qc(g, d, p, a) && e));
  if(b) {
    for(k = 0;!a.V && k < b.length;k++) {
      g = a.currentTarget = b[k], e = Qc(g, d, p, a) && e
    }
  }
  return e
};
s.e = function() {
  S.c.e.call(this);
  !this.L || this.L.xa(h);
  this.rb = m
};
s.i = function(a, b, c, d) {
  return this.L.add(String(a), b, p, c, d)
};
s.ob = function(a, b, c, d) {
  return this.L.add(String(a), b, l, c, d)
};
s.vb = function(a, b, c, d) {
  return this.L.remove(String(a), b, c, d)
};
function Qc(a, b, c, d) {
  b = a.L.u[String(b)];
  if(!b) {
    return l
  }
  b = La(b);
  for(var e = l, g = 0;g < b.length;++g) {
    var k = b[g];
    if(k && !k.ya && k.capture == c) {
      var n = k.ca, r = k.hb || k.src;
      k.Wa && uc(a.L, k);
      e = n.call(r, d) !== p && e
    }
  }
  return e && d.Ec != p
}
s.Ha = function(a, b, c, d) {
  return this.L.Ha(String(a), b, c, d)
};
function Rc(a, b, c) {
  ha(a) ? c && (a = na(a, c)) : a && "function" == typeof a.handleEvent ? a = na(a.handleEvent, a) : f(Error("Invalid listener argument"));
  return 2147483647 < b ? -1 : t.setTimeout(a, b || 0)
}
;var Sc = {8:"backspace", 9:"tab", 13:"enter", 16:"shift", 17:"ctrl", 18:"alt", 19:"pause", 20:"caps-lock", 27:"esc", 32:"space", 33:"pg-up", 34:"pg-down", 35:"end", 36:"home", 37:"left", 38:"up", 39:"right", 40:"down", 45:"insert", 46:"delete", 48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:"semicolon", 61:"equals", 65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l", 77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 
84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z", 93:"context", 96:"num-0", 97:"num-1", 98:"num-2", 99:"num-3", 100:"num-4", 101:"num-5", 102:"num-6", 103:"num-7", 104:"num-8", 105:"num-9", 106:"num-multiply", 107:"num-plus", 109:"num-minus", 110:"num-period", 111:"num-division", 112:"f1", 113:"f2", 114:"f3", 115:"f4", 116:"f5", 117:"f6", 118:"f7", 119:"f8", 120:"f9", 121:"f10", 122:"f11", 123:"f12", 186:"semicolon", 187:"equals", 189:"dash", 188:",", 190:".", 191:"/", 192:"~", 219:"open-square-bracket", 
220:"\\", 221:"close-square-bracket", 222:"single-quote", 224:"win"};
function Tc(a, b, c, d, e) {
  if(!B && (!D || !E("525"))) {
    return l
  }
  if(A && e) {
    return Uc(a)
  }
  if(e && !d) {
    return p
  }
  ga(b) && (b = Vc(b));
  if(!c && (17 == b || 18 == b || A && 91 == b)) {
    return p
  }
  if(D && d && c) {
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
  if(B && d && b == a) {
    return p
  }
  switch(a) {
    case 13:
      return!(B && G(9));
    case 27:
      return!D
  }
  return Uc(a)
}
function Uc(a) {
  if(48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || D && 0 == a) {
    return l
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
      return l;
    default:
      return p
  }
}
function Vc(a) {
  if(C) {
    a = Wc(a)
  }else {
    if(A && D) {
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
function Wc(a) {
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
;function Xc(a) {
  S.call(this);
  this.Pa = {};
  this.O = {ja:[], time:0};
  this.nd = Ya(Yc);
  this.Zd = Ya(Zc);
  this.Sc = l;
  this.Qc = this.Tc = p;
  this.Nd = l;
  this.Rc = p;
  this.N = a;
  Q(this.N, "keydown", this.sa, p, this);
  A && (C && E("1.8")) && Q(this.N, "keyup", this.qc, p, this);
  cb && !C && (Q(this.N, "keypress", this.rc, p, this), Q(this.N, "keyup", this.sc, p, this))
}
var $c;
x(Xc, S);
var Yc = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19], Zc = "color date datetime datetime-local email month number password search tel text time url week".split(" "), ad = {Nc:"shortcut", Mc:"shortcut_"};
s = Xc.prototype;
s.f = function(a, b) {
  var c = bd, d = this.Pa, e = arguments;
  if(v(e[1])) {
    for(var e = e[1], e = e.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase(), e = e.split(" "), g = [], k, n = 0;k = e[n];n++) {
      var r = k.split("+"), y;
      k = 0;
      for(var w, F = 0;w = r[F];F++) {
        switch(w) {
          case "shift":
            k |= 1;
            continue;
          case "ctrl":
            k |= 2;
            continue;
          case "alt":
            k |= 4;
            continue;
          case "meta":
            k |= 8;
            continue
        }
        y = w;
        if(!$c) {
          r = {};
          w = h;
          for(w in Sc) {
            r[Sc[w]] = w
          }
          $c = r
        }
        y = $c[y];
        break
      }
      g.push({keyCode:y, Ac:k})
    }
    e = g
  }else {
    g = e;
    n = 1;
    u(e[1]) && (g = e[1], n = 0);
    for(e = [];n < g.length;n += 2) {
      e.push({keyCode:g[n], Ac:g[n + 1]})
    }
  }
  c(d, e, a)
};
s.e = function() {
  Xc.c.e.call(this);
  this.Pa = {};
  Mc(this.N, "keydown", this.sa, p, this);
  A && (C && E("1.8")) && Mc(this.N, "keyup", this.qc, p, this);
  cb && !C && (Mc(this.N, "keypress", this.rc, p, this), Mc(this.N, "keyup", this.sc, p, this));
  this.N = m
};
s.qc = function(a) {
  if(224 == a.keyCode) {
    this.zc = l, Rc(function() {
      this.zc = p
    }, 400, this)
  }else {
    var b = a.metaKey || this.zc;
    if((67 == a.keyCode || 88 == a.keyCode || 86 == a.keyCode) && b) {
      a.metaKey = b, this.sa(a)
    }
  }
};
function cd(a) {
  return cb && !C && a.ctrlKey && a.altKey && !a.shiftKey
}
s.rc = function(a) {
  32 < a.keyCode && cd(a) && (this.wc = l)
};
s.sc = function(a) {
  !this.wc && cd(a) && this.sa(a)
};
function bd(a, b, c) {
  var d = b.shift(), d = d.keyCode & 255 | d.Ac << 8, e = a[d];
  e && (c && (0 == b.length || v(e))) && f(Error("Keyboard shortcut conflicts with existing shortcut"));
  b.length ? (e || (e = a[d] = {}), bd(e, b, c)) : a[d] = c
}
function dd(a, b, c, d) {
  c = c || 0;
  return(d = (d || a.Pa)[b[c]]) && !v(d) && 1 < b.length - c ? dd(a, b, c + 1, d) : d
}
s.sa = function(a) {
  var b;
  b = a.keyCode;
  if(16 == b || 17 == b || 18 == b) {
    b = p
  }else {
    var c = a.target, d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName, e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
    b = !d && !e || this.nd[b] || this.Qc ? l : e ? p : this.Nd && (a.altKey || a.ctrlKey || a.metaKey) ? l : "INPUT" == c.tagName && this.Zd[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? this.Rc ? l : 32 != b : p
  }
  if(b) {
    if("keydown" == a.type && cd(a)) {
      this.wc = p
    }else {
      b = (C ? Wc(a.keyCode) : a.keyCode) & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
      var g, k, c = pa();
      this.O.ja.length && 1500 >= c - this.O.time ? g = dd(this, this.O.ja) : this.O.ja.length = 0;
      g = g ? g[b] : this.Pa[b];
      g || (g = this.Pa[b], this.O.ja = []);
      g && v(g) ? k = g : g ? (this.O.ja.push(b), this.O.time = c, C && a.preventDefault()) : this.O.ja.length = 0;
      k && (this.Sc && a.preventDefault(), this.Tc && a.stopPropagation(), g = a.target, b = this.dispatchEvent(new ed(ad.Nc, k, g)), (b &= this.dispatchEvent(new ed(ad.Mc + k, k, g))) || a.preventDefault(), this.O.ja.length = 0)
    }
  }
};
function ed(a, b, c) {
  P.call(this, a, c);
  this.identifier = b
}
x(ed, P);
var fd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), gd = D;
function hd(a, b) {
  if(gd) {
    gd = p;
    var c = t.location;
    if(c) {
      var d = c.href;
      if(d && (d = (d = hd(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        gd = l, f(Error())
      }
    }
  }
  return b.match(fd)[a] || m
}
;function id(a) {
  if("function" == typeof a.Ia) {
    return a.Ia()
  }
  if(v(a)) {
    return a.split("")
  }
  if(fa(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Ua(a)
}
function jd(a) {
  if("function" == typeof a.qa) {
    return a.qa()
  }
  if("function" != typeof a.Ia) {
    if(fa(a) || v(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return Va(a)
  }
}
function kd(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(fa(a) || v(a)) {
      Fa(a, b, c)
    }else {
      for(var d = jd(a), e = id(a), g = e.length, k = 0;k < g;k++) {
        b.call(c, e[k], d && d[k], a)
      }
    }
  }
}
;function ld(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  f(Error("Invalid JSON string: " + a))
}
function md(a) {
  var b = [];
  nd(new od, a, b);
  return b.join("")
}
function od() {
  this.tb = h
}
function nd(a, b, c) {
  switch(typeof b) {
    case "string":
      pd(b, c);
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
      if(b == m) {
        c.push("null");
        break
      }
      if(u(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", g = 0;g < d;g++) {
          c.push(e), e = b[g], nd(a, a.tb ? a.tb.call(b, String(g), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(g in b) {
        Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), pd(g, c), c.push(":"), nd(a, a.tb ? a.tb.call(b, g, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      f(Error("Unknown type: " + typeof b))
  }
}
var qd = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, rd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function pd(a, b) {
  b.push('"', a.replace(rd, function(a) {
    if(a in qd) {
      return qd[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return qd[a] = e + b.toString(16)
  }), '"')
}
;function sd() {
}
sd.prototype.Va = m;
var td;
function ud() {
}
x(ud, sd);
function vd(a) {
  return(a = wd(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function xd(a) {
  var b = {};
  wd(a) && (b[0] = l, b[1] = l);
  return b
}
function wd(a) {
  if(!a.uc && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.uc = d
      }catch(e) {
      }
    }
    f(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.uc
}
td = new ud;
function yd(a, b) {
  this.P = {};
  this.j = [];
  this.$b = this.ma = 0;
  var c = arguments.length;
  if(1 < c) {
    c % 2 && f(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof yd ? (c = a.qa(), d = a.Ia()) : (c = Va(a), d = Ua(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
s = yd.prototype;
s.Ia = function() {
  zd(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.P[this.j[b]])
  }
  return a
};
s.qa = function() {
  zd(this);
  return this.j.concat()
};
s.clear = function() {
  this.P = {};
  this.$b = this.ma = this.j.length = 0
};
s.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.P, a) ? (delete this.P[a], this.ma--, this.$b++, this.j.length > 2 * this.ma && zd(this), l) : p
};
function zd(a) {
  if(a.ma != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      Object.prototype.hasOwnProperty.call(a.P, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.ma != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], Object.prototype.hasOwnProperty.call(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
s.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.P, a) ? this.P[a] : b
};
s.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.P, a) || (this.ma++, this.j.push(a), this.$b++);
  this.P[a] = b
};
s.la = function() {
  return new yd(this)
};
function Ad() {
}
;function Bd(a) {
  S.call(this);
  this.headers = new yd;
  this.Ca = a || m;
  this.R = p;
  this.xb = this.d = m;
  this.yc = this.nb = "";
  this.Ka = 0;
  this.La = "";
  this.aa = this.Lb = this.ib = this.Bb = p;
  this.Ra = 0;
  this.ub = m;
  this.Dc = Cd;
  this.wb = this.ae = p
}
x(Bd, S);
var Cd = "", Dd = /^https?$/i, Ed = ["POST", "PUT"];
s = Bd.prototype;
s.send = function(a, b, c, d) {
  this.d && f(Error("[goog.net.XhrIo] Object is active with another request=" + this.nb + "; newUri=" + a));
  b = b ? b.toUpperCase() : "GET";
  this.nb = a;
  this.La = "";
  this.Ka = 0;
  this.yc = b;
  this.Bb = p;
  this.R = l;
  this.d = this.Ca ? vd(this.Ca) : vd(td);
  this.xb = this.Ca ? this.Ca.Va || (this.Ca.Va = xd(this.Ca)) : td.Va || (td.Va = xd(td));
  this.d.onreadystatechange = na(this.Cc, this);
  try {
    Ad(T(this, "Opening Xhr")), this.Lb = l, this.d.open(b, a, l), this.Lb = p
  }catch(e) {
    Ad(T(this, "Error opening Xhr: " + e.message));
    Fd(this, e);
    return
  }
  a = c || "";
  var g = this.headers.la();
  d && kd(d, function(a, b) {
    g.set(b, a)
  });
  d = Ha(g.qa());
  c = t.FormData && a instanceof t.FormData;
  Ja(Ed, b) && (!d && !c) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  kd(g, function(a, b) {
    this.d.setRequestHeader(b, a)
  }, this);
  this.Dc && (this.d.responseType = this.Dc);
  "withCredentials" in this.d && (this.d.withCredentials = this.ae);
  try {
    Gd(this), 0 < this.Ra && (this.wb = B && E(9) && ga(this.d.timeout) && this.d.ontimeout !== h, Ad(T(this, "Will abort after " + this.Ra + "ms if incomplete, xhr2 " + this.wb)), this.wb ? (this.d.timeout = this.Ra, this.d.ontimeout = na(this.Kc, this)) : this.ub = Rc(this.Kc, this.Ra, this)), Ad(T(this, "Sending request")), this.ib = l, this.d.send(a), this.ib = p
  }catch(k) {
    Ad(T(this, "Send error: " + k.message)), Fd(this, k)
  }
};
function Ia(a) {
  return"content-type" == a.toLowerCase()
}
s.Kc = function() {
  "undefined" != typeof ca && this.d && (this.La = "Timed out after " + this.Ra + "ms, aborting", this.Ka = 8, T(this, this.La), this.dispatchEvent("timeout"), this.abort(8))
};
function Fd(a, b) {
  a.R = p;
  a.d && (a.aa = l, a.d.abort(), a.aa = p);
  a.La = b;
  a.Ka = 5;
  Hd(a);
  Id(a)
}
function Hd(a) {
  a.Bb || (a.Bb = l, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
s.abort = function(a) {
  this.d && this.R && (T(this, "Aborting"), this.R = p, this.aa = l, this.d.abort(), this.aa = p, this.Ka = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Id(this))
};
s.e = function() {
  this.d && (this.R && (this.R = p, this.aa = l, this.d.abort(), this.aa = p), Id(this, l));
  Bd.c.e.call(this)
};
s.Cc = function() {
  this.Za || (!this.Lb && !this.ib && !this.aa ? this.Sd() : Jd(this))
};
s.Sd = function() {
  Jd(this)
};
function Jd(a) {
  if(a.R && "undefined" != typeof ca) {
    if(a.xb[1] && 4 == Kd(a) && 2 == Ld(a)) {
      T(a, "Local request error detected and ignored")
    }else {
      if(a.ib && 4 == Kd(a)) {
        Rc(a.Cc, 0, a)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == Kd(a)) {
          T(a, "Request complete");
          a.R = p;
          try {
            var b = Ld(a), c, d;
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
                  d = l;
                  break a;
                default:
                  d = p
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var g = hd(1, String(a.nb));
                if(!g && self.location) {
                  var k = self.location.protocol, g = k.substr(0, k.length - 1)
                }
                e = !Dd.test(g ? g.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.Ka = 6;
              var n;
              try {
                n = 2 < Kd(a) ? a.d.statusText : ""
              }catch(r) {
                n = ""
              }
              a.La = n + " [" + Ld(a) + "]";
              Hd(a)
            }
          }finally {
            Id(a)
          }
        }
      }
    }
  }
}
function Id(a, b) {
  if(a.d) {
    Gd(a);
    var c = a.d, d = a.xb[0] ? da : m;
    a.d = m;
    a.xb = m;
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
    }
  }
}
function Gd(a) {
  a.d && a.wb && (a.d.ontimeout = m);
  ga(a.ub) && (t.clearTimeout(a.ub), a.ub = m)
}
function Kd(a) {
  return a.d ? a.d.readyState : 0
}
function Ld(a) {
  try {
    return 2 < Kd(a) ? a.d.status : -1
  }catch(b) {
    return-1
  }
}
function T(a, b) {
  return b + " [" + a.yc + " " + a.nb + " " + Ld(a) + "]"
}
;function Md(a, b) {
  return a.dataset ? a.dataset[b] : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
}
;function Nd(a) {
  jc.call(this);
  this.Ib = a;
  this.j = {}
}
x(Nd, jc);
var Od = [];
s = Nd.prototype;
s.i = function(a, b, c, d, e) {
  u(b) || (Od[0] = b, b = Od);
  for(var g = 0;g < b.length;g++) {
    var k = Q(a, b[g], c || this.handleEvent, d || p, e || this.Ib || this);
    if(!k) {
      break
    }
    this.j[k.key] = k
  }
  return this
};
s.ob = function(a, b, c, d, e) {
  a: {
    if(u(b)) {
      for(var g = 0;g < b.length;g++) {
        this.ob(a, b[g], c, d, e)
      }
    }else {
      a = Lc(a, b, c || this.handleEvent, d, e || this.Ib || this);
      if(!a) {
        a = this;
        break a
      }
      this.j[a.key] = a
    }
    a = this
  }
  return a
};
s.vb = function(a, b, c, d, e) {
  if(u(b)) {
    for(var g = 0;g < b.length;g++) {
      this.vb(a, b[g], c, d, e)
    }
  }else {
    c = c || this.handleEvent, e = e || this.Ib || this, c = Gc(c), d = !!d, b = oc(a) ? a.Ha(b, c, d, e) : a ? (a = Ic(a)) ? a.Ha(b, c, d, e) : m : m, b && (R(b), delete this.j[b.key])
  }
  return this
};
s.xa = function() {
  Ta(this.j, R);
  this.j = {}
};
s.e = function() {
  Nd.c.e.call(this);
  this.xa()
};
s.handleEvent = function() {
  f(Error("EventHandler.handleEvent not implemented"))
};
function Pd() {
}
Pd.md = function() {
  return Pd.vc ? Pd.vc : Pd.vc = new Pd
};
Pd.prototype.Pd = 0;
function U(a) {
  S.call(this);
  this.Y = a || J();
  this.fa = Qd
}
x(U, S);
U.prototype.Dd = Pd.md();
var Qd = m;
s = U.prototype;
s.va = m;
s.k = p;
s.b = m;
s.fa = m;
s.Md = m;
s.C = m;
s.r = m;
s.B = m;
s.Lc = p;
function V(a) {
  return a.va || (a.va = ":" + (a.Dd.Pd++).toString(36))
}
s.a = q("b");
s.cb = function() {
  return this.ra || (this.ra = new Nd(this))
};
function Rd(a, b) {
  a == b && f(Error("Unable to set parent component"));
  b && (a.C && a.va && a.C.B && a.va && (a.va in a.C.B && a.C.B[a.va]) && a.C != b) && f(Error("Unable to set parent component"));
  a.C = b;
  U.c.Wb.call(a, b)
}
s.getParent = q("C");
s.Wb = function(a) {
  this.C && this.C != a && f(Error("Method not supported"));
  U.c.Wb.call(this, a)
};
s.M = q("Y");
s.t = function() {
  this.b = this.Y.createElement("div")
};
function Sd(a, b, c) {
  a.k && f(Error("Component already rendered"));
  a.b || a.t();
  b ? b.insertBefore(a.b, c || m) : a.Y.s.body.appendChild(a.b);
  (!a.C || a.C.k) && a.v()
}
function Td(a, b) {
  a.k && f(Error("Component already rendered"));
  if(b && a.ac(b)) {
    a.Lc = l;
    var c = K(b);
    if(!a.Y || a.Y.s != c) {
      a.Y = J(b)
    }
    a.Da(b);
    a.v()
  }else {
    f(Error("Invalid element to decorate"))
  }
}
s.ac = ba(l);
s.Da = function(a) {
  this.b = a
};
s.v = function() {
  this.k = l;
  W(this, function(a) {
    !a.k && a.a() && a.v()
  })
};
s.I = function() {
  W(this, function(a) {
    a.k && a.I()
  });
  this.ra && this.ra.xa();
  this.k = p
};
s.e = function() {
  this.k && this.I();
  this.ra && (this.ra.S(), delete this.ra);
  W(this, function(a) {
    a.S()
  });
  !this.Lc && this.b && Hb(this.b);
  this.C = this.Md = this.b = this.B = this.r = m;
  U.c.e.call(this)
};
s.K = function(a, b, c) {
  a.k && (c || !this.k) && f(Error("Component already rendered"));
  (0 > b || b > Ud(this)) && f(Error("Child component index out of bounds"));
  if(!this.B || !this.r) {
    this.B = {}, this.r = []
  }
  if(a.getParent() == this) {
    var d = V(a);
    this.B[d] = a;
    Ka(this.r, a)
  }else {
    var d = this.B, e = V(a);
    e in d && f(Error('The object already contains the key "' + e + '"'));
    d[e] = a
  }
  Rd(a, this);
  Ma(this.r, b, 0, a);
  a.k && this.k && a.getParent() == this ? (c = this.b, c.insertBefore(a.a(), c.childNodes[b] || m)) : c ? (this.b || this.t(), b = X(this, b + 1), Sd(a, this.b, b ? b.b : m)) : this.k && (!a.k && a.b && a.b.parentNode && 1 == a.b.parentNode.nodeType) && a.v()
};
function Vd(a) {
  a.fa == m && (a.fa = $b(a.k ? a.b : a.Y.s.body));
  return a.fa
}
function Y(a) {
  return!!a.r && 0 != a.r.length
}
function Ud(a) {
  return a.r ? a.r.length : 0
}
function X(a, b) {
  return a.r ? a.r[b] || m : m
}
function W(a, b) {
  a.r && Fa(a.r, b, h)
}
function Wd(a, b) {
  return a.r && b ? Ea(a.r, b) : -1
}
s.removeChild = function(a, b) {
  if(a) {
    var c = v(a) ? a : V(a);
    a = this.B && c ? (c in this.B ? this.B[c] : h) || m : m;
    if(c && a) {
      var d = this.B;
      c in d && delete d[c];
      Ka(this.r, a);
      b && (a.I(), a.b && Hb(a.b));
      Rd(a, m)
    }
  }
  a || f(Error("Child is not in parent component"));
  return a
};
var Xd;
function Yd(a, b) {
  b ? a.setAttribute("role", b) : a.removeAttribute("role")
}
function Z(a, b, c) {
  fa(c) && (c = c.join(" "));
  var d = "aria-" + b;
  "" === c || c == h ? (Xd || (Xd = {atomic:p, autocomplete:"none", dropeffect:"none", haspopup:p, live:"off", multiline:p, multiselectable:p, orientation:"vertical", readonly:p, relevant:"additions text", required:p, sort:"none", busy:p, disabled:p, hidden:p, invalid:"false"}), c = Xd, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}
;var Zd = !!t.DOMTokenList, $d = Zd ? function(a) {
  return a.classList
} : function(a) {
  a = a.className;
  return v(a) && a.match(/\S+/g) || []
}, ae = Zd ? function(a, b) {
  return a.classList.contains(b)
} : function(a, b) {
  return Ja($d(a), b)
}, be = Zd ? function(a, b) {
  a.classList.add(b)
} : function(a, b) {
  ae(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}, ce = Zd ? function(a, b) {
  a.classList.remove(b)
} : function(a, b) {
  ae(a, b) && (a.className = Ga($d(a), function(a) {
    return a != b
  }).join(" "))
};
function de(a, b) {
  U.call(this, b);
  this.G = a || ""
}
x(de, U);
de.prototype.T = m;
de.prototype.Id = 10;
var ee = "placeholder" in document.createElement("input");
s = de.prototype;
s.ta = p;
s.t = function() {
  this.b = this.M().t("input", {type:"text"})
};
s.Da = function(a) {
  de.c.Da.call(this, a);
  this.G || (this.G = a.getAttribute("label") || "");
  var b;
  a: {
    var c = K(a);
    try {
      b = c && c.activeElement;
      break a
    }catch(d) {
    }
    b = m
  }
  b == a && (this.ta = l, a = this.a(), ce(a, this.Ua));
  ee ? this.a().placeholder = this.G : (a = this.a(), Z(a, "label", this.G))
};
s.v = function() {
  de.c.v.call(this);
  this.zb();
  fe(this);
  this.a().Hd = this
};
s.I = function() {
  de.c.I.call(this);
  this.Ya();
  this.a().Hd = m
};
s.zb = function() {
  var a = new Nd(this);
  a.i(this.a(), "focus", this.Ja);
  a.i(this.a(), "blur", this.Gb);
  if(ee) {
    this.l = a
  }else {
    C && a.i(this.a(), ["keypress", "keydown", "keyup"], this.td);
    var b = K(this.a());
    a.i(b ? b.parentWindow || b.defaultView : window, "load", this.Cd);
    this.l = a;
    ge(this)
  }
};
function ge(a) {
  !a.kd && (a.l && a.a().form) && (a.l.i(a.a().form, "submit", a.ud), a.kd = l)
}
s.Ya = function() {
  this.l && (this.l.S(), this.l = m)
};
s.e = function() {
  de.c.e.call(this);
  this.Ya()
};
s.Ua = "label-input-label";
s.Ja = function() {
  this.ta = l;
  var a = this.a();
  ce(a, this.Ua);
  if(!ee && !he(this) && !this.Kb) {
    var b = this, a = function() {
      b.a() && (b.a().value = "")
    };
    B ? Rc(a, 10) : a()
  }
};
s.Gb = function() {
  ee || (this.l.vb(this.a(), "click", this.Ja), this.T = m);
  this.ta = p;
  fe(this)
};
s.td = function(a) {
  27 == a.keyCode && ("keydown" == a.type ? this.T = this.a().value : "keypress" == a.type ? this.a().value = this.T : "keyup" == a.type && (this.T = m), a.preventDefault())
};
s.ud = function() {
  he(this) || (this.a().value = "", Rc(this.od, 10, this))
};
s.od = function() {
  he(this) || (this.a().value = this.G)
};
s.Cd = function() {
  fe(this)
};
s.hasFocus = q("ta");
function he(a) {
  return!!a.a() && "" != a.a().value && a.a().value != a.G
}
s.clear = function() {
  this.a().value = "";
  this.T != m && (this.T = "")
};
function ie(a) {
  return a.T != m ? a.T : he(a) ? a.a().value : ""
}
function fe(a) {
  var b = a.a();
  ee ? a.a().placeholder != a.G && (a.a().placeholder = a.G) : (ge(a), Z(b, "label", a.G));
  he(a) ? (b = a.a(), ce(b, a.Ua)) : (!a.Kb && !a.ta && (b = a.a(), be(b, a.Ua)), ee || Rc(a.Wd, a.Id, a))
}
s.hd = function() {
  this.Kb = p
};
s.Wd = function() {
  this.a() && (!he(this) && !this.ta) && (this.a().value = this.G)
};
function $(a, b, c) {
  U.call(this, c);
  this.p = b || je;
  this.ua = a
}
x($, U);
var ke = {};
s = $.prototype;
s.Vb = p;
s.Ea = p;
s.$d = m;
s.Pc = "";
s.kb = p;
s.Xa = -1;
s.e = function() {
  $.c.e.call(this);
  this.X && (this.X.removeNode(this), this.X = m);
  this.b = m
};
s.jb = function() {
  var a = this.a();
  if(a) {
    var b = le(this);
    b && !b.id && (b.id = V(this) + ".label");
    Yd(a, "treeitem");
    Z(a, "selected", p);
    Z(a, "expanded", p);
    Z(a, "level", this.$());
    b && Z(a, "labelledby", b.id);
    (a = this.eb()) && Yd(a, "presentation");
    (a = this.bb()) && Yd(a, "presentation");
    if(a = me(this)) {
      if(Yd(a, "group"), a.hasChildNodes()) {
        a = Ud(this);
        for(b = 1;b <= a;b++) {
          var c = X(this, b - 1).a();
          Z(c, "setsize", a);
          Z(c, "posinset", b)
        }
      }
    }
  }
};
s.t = function() {
  var a = new qa;
  ne(this, a);
  var b;
  b = this.M().s;
  var c = a.toString(), a = b.createElement("div");
  B ? (a.innerHTML = "<br>" + c, a.removeChild(a.firstChild)) : a.innerHTML = c;
  if(1 == a.childNodes.length) {
    b = a.removeChild(a.firstChild)
  }else {
    for(b = b.createDocumentFragment();a.firstChild;) {
      b.appendChild(a.firstChild)
    }
  }
  this.b = b
};
s.v = function() {
  $.c.v.call(this);
  ke[V(this)] = this;
  this.jb()
};
s.I = function() {
  $.c.I.call(this);
  delete ke[V(this)]
};
s.K = function(a, b) {
  var c = X(this, b - 1), d = X(this, b);
  $.c.K.call(this, a, b);
  a.ea = c;
  a.H = d;
  c ? c.H = a : this.oc = a;
  d ? d.ea = a : this.xc = a;
  var e = this.n();
  e && oe(a, e);
  pe(a, this.$() + 1);
  if(this.a() && (this.Ba(), this.z())) {
    e = me(this);
    a.a() || a.t();
    var g = a.a(), k = d && d.a();
    e.insertBefore(g, k);
    this.k && a.v();
    d || (c ? c.Ba() : (Zb(e, l), this.W(this.z())))
  }
};
s.add = function(a, b) {
  a.getParent() && a.getParent().removeChild(a);
  this.K(a, b ? Wd(this, b) : Ud(this));
  return a
};
s.removeChild = function(a) {
  var b = this.n(), c = b ? b.g : m;
  if(c == a || a.contains(c)) {
    b.hasFocus(), this.select()
  }
  $.c.removeChild.call(this, a);
  this.xc == a && (this.xc = a.ea);
  this.oc == a && (this.oc = a.H);
  a.ea && (a.ea.H = a.H);
  a.H && (a.H.ea = a.ea);
  c = !a.H;
  a.X = m;
  a.Xa = -1;
  if(b && (b.removeNode(this), this.k)) {
    b = me(this);
    if(a.k) {
      var d = a.a();
      b.removeChild(d);
      a.I()
    }
    c && (c = X(this, Ud(this) - 1)) && c.Ba();
    Y(this) || (b.style.display = "none", this.Ba(), this.eb().className = this.ab())
  }
  return a
};
s.remove = $.prototype.removeChild;
s.$ = function() {
  var a = this.Xa;
  0 > a && (a = (a = this.getParent()) ? a.$() + 1 : 0, pe(this, a));
  return a
};
function pe(a, b) {
  if(b != a.Xa) {
    a.Xa = b;
    var c = qe(a);
    if(c) {
      var d = Math.max(0, (a.$() - 1) * a.p.Mb) + "px";
      Vd(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
    }
    W(a, function(a) {
      pe(a, b + 1)
    })
  }
}
s.contains = function(a) {
  for(;a;) {
    if(a == this) {
      return l
    }
    a = a.getParent()
  }
  return p
};
s.Ga = function() {
  var a = [];
  W(this, function(b) {
    a.push(b)
  });
  return a
};
s.select = function() {
  var a = this.n();
  a && re(a, this)
};
function se(a, b) {
  if(a.Vb != b) {
    a.Vb = b;
    te(a);
    var c = a.a();
    c && (Z(c, "selected", b), b && (c = a.n().a(), Z(c, "activedescendant", V(a))))
  }
}
s.z = q("Ea");
s.W = function(a) {
  var b = a != this.Ea;
  if(!b || this.dispatchEvent(a ? "beforeexpand" : "beforecollapse")) {
    var c;
    this.Ea = a;
    c = this.n();
    var d = this.a();
    if(Y(this)) {
      if(!a && (c && this.contains(c.g)) && this.select(), d) {
        if(c = me(this)) {
          if(Zb(c, a), a && this.k && !c.hasChildNodes()) {
            var e = new qa;
            W(this, function(a) {
              ne(a, e)
            });
            c.innerHTML = e.toString();
            W(this, function(a) {
              a.v()
            })
          }
        }
        this.Ba()
      }
    }else {
      (c = me(this)) && Zb(c, p)
    }
    d && (this.eb().className = this.ab(), Z(d, "expanded", a));
    b && this.dispatchEvent(a ? "expand" : "collapse")
  }
};
s.toggle = function() {
  this.W(!this.z())
};
s.expand = function() {
  this.W(l)
};
function ue(a) {
  W(a, function(a) {
    ve(a)
  })
}
function ve(a) {
  ue(a);
  a.expand()
}
s.Tb = function() {
  var a = this.getParent();
  a && (a.W(l), a.Tb())
};
function ne(a, b) {
  var c = a.n(), c = !c.ga || c == a.getParent() && !c.Xb ? a.p.dc : a.p.cc, d = a.z() && Y(a);
  b.append('<div class="', a.p.bd, '" id="', V(a), '">', we(a), '<div class="', c, '" style="', "background-position:" + xe(a) + ";", d ? "" : "display:none;", '">');
  d && W(a, function(a) {
    ne(a, b)
  });
  b.append("</div></div>")
}
function we(a) {
  var b = new qa;
  b.append('<div class="', a.fb(), '" style="padding-', Vd(a) ? "right:" : "left:", Math.max(0, (a.$() - 1) * a.p.Mb), 'px">', a.pc(), '<span style="display:inline-block" class="' + a.ab() + '"></span>', ye(a), "</div>");
  return b.toString()
}
s.fb = function() {
  return this.p.fd + (this.Vb ? " " + this.p.ed : "")
};
function ye(a) {
  var b = a.$d, c = new qa;
  c.append('<span class="', a.p.cd, '"', b ? ' title="' + va(b) + '"' : "", ">", a.ua, "</span>", "<span>", a.Pc, "</span>");
  return c.toString()
}
s.pc = function() {
  return'<span type="expand" style="display:inline-block" class="' + ze(this) + '"></span>'
};
function ze(a) {
  var b = a.n(), c = !b.ga || b == a.getParent() && !b.Xb, d = a.p, e = new qa;
  e.append(d.na, " ", d.Uc, " ");
  if(Y(a)) {
    var g = 0;
    b.Yd && a.kb && (g = a.z() ? 2 : 1);
    c || (g = !a.H ? g + 4 : g + 8);
    switch(g) {
      case 1:
        e.append(d.Yc);
        break;
      case 2:
        e.append(d.Xc);
        break;
      case 4:
        e.append(d.hc);
        break;
      case 5:
        e.append(d.Wc);
        break;
      case 6:
        e.append(d.Vc);
        break;
      case 8:
        e.append(d.ic);
        break;
      case 9:
        e.append(d.$c);
        break;
      case 10:
        e.append(d.Zc);
        break;
      default:
        e.append(d.gc)
    }
  }else {
    c ? e.append(d.gc) : !a.H ? e.append(d.hc) : e.append(d.ic)
  }
  return e.toString()
}
function xe(a) {
  return(!a.H ? "-100" : (a.$() - 1) * a.p.Mb) + "px 0"
}
s.a = function() {
  var a = $.c.a.call(this);
  a || (this.b = a = this.M().a(V(this)));
  return a
};
function qe(a) {
  return(a = a.a()) ? a.firstChild : m
}
s.bb = function() {
  var a = qe(this);
  return a ? a.firstChild : m
};
s.eb = function() {
  var a = qe(this);
  return a ? a.childNodes[1] : m
};
function le(a) {
  return(a = qe(a)) && a.lastChild ? a.lastChild.previousSibling : m
}
function me(a) {
  return(a = a.a()) ? a.lastChild : m
}
function Ae(a) {
  return-1 != a.ua.indexOf("&") ? "document" in t ? Ba(a.ua) : Da(a.ua) : a.ua
}
function Be(a, b) {
  a.ua = b;
  var c = le(a);
  c && (c.innerHTML = b);
  (c = a.n()) && Ce(c.Aa, a)
}
function te(a) {
  var b = qe(a);
  b && (b.className = a.fb())
}
s.Ba = function() {
  var a = this.bb();
  a && (a.className = ze(this));
  if(a = me(this)) {
    a.style.backgroundPosition = xe(this)
  }
};
s.Rd = yc;
function De(a) {
  return!a.z() || !Y(a) ? a : De(X(a, Ud(a) - 1))
}
function Ee(a) {
  if(Y(a) && a.z()) {
    return X(a, 0)
  }
  for(var b = a, c;b != a.n();) {
    c = b.H;
    if(c != m) {
      return c
    }
    b = b.getParent()
  }
  return m
}
function Fe(a) {
  var b = a.ea;
  if(b != m) {
    return De(b)
  }
  b = a.getParent();
  a = a.n();
  return!a.Qa && b == a ? m : b
}
function oe(a, b) {
  a.X != b && (a.X = b, Ce(b.Aa, a), W(a, function(a) {
    oe(a, b)
  }))
}
;function Ge(a, b, c) {
  $.call(this, a, b, c)
}
x(Ge, $);
Ge.prototype.X = m;
Ge.prototype.n = function() {
  if(this.X) {
    return this.X
  }
  var a = this.getParent();
  return a && (a = a.n()) ? (oe(this, a), a) : m
};
Ge.prototype.ab = function() {
  var a = this.z();
  if(a && this.Cb) {
    return this.Cb
  }
  if(!a && this.Jb) {
    return this.Jb
  }
  var b = this.p;
  if(Y(this)) {
    if(a && b.jc) {
      return b.na + " " + b.jc
    }
    if(!a && b.ec) {
      return b.na + " " + b.ec
    }
  }else {
    if(b.lc) {
      return b.na + " " + b.lc
    }
  }
  return""
};
function He(a) {
  this.Q = h;
  this.o = {};
  if(a) {
    var b = jd(a);
    a = id(a);
    for(var c = 0;c < b.length;c++) {
      this.set(b[c], a[c])
    }
  }
}
s = He.prototype;
s.set = function(a, b) {
  Ie(this, a, b, p)
};
s.add = function(a, b) {
  Ie(this, a, b, l)
};
function Ie(a, b, c, d) {
  for(var e = 0;e < b.length;e++) {
    var g = b.charAt(e);
    a.o[g] || (a.o[g] = new He);
    a = a.o[g]
  }
  d && a.Q !== h && f(Error('The collection already contains the key "' + b + '"'));
  a.Q = c
}
s.get = function(a) {
  for(var b = this, c = 0;c < a.length;c++) {
    var d = a.charAt(c);
    if(!b.o[d]) {
      return
    }
    b = b.o[d]
  }
  return b.Q
};
s.Ia = function() {
  var a = [];
  Je(this, a);
  return a
};
function Je(a, b) {
  a.Q !== h && b.push(a.Q);
  for(var c in a.o) {
    Je(a.o[c], b)
  }
}
s.qa = function(a) {
  var b = [];
  if(a) {
    for(var c = this, d = 0;d < a.length;d++) {
      var e = a.charAt(d);
      if(!c.o[e]) {
        return[]
      }
      c = c.o[e]
    }
    Ke(c, a, b)
  }else {
    Ke(this, "", b)
  }
  return b
};
function Ke(a, b, c) {
  a.Q !== h && c.push(b);
  for(var d in a.o) {
    Ke(a.o[d], b + d, c)
  }
}
s.clear = function() {
  this.o = {};
  this.Q = h
};
s.remove = function(a) {
  for(var b = this, c = [], d = 0;d < a.length;d++) {
    var e = a.charAt(d);
    b.o[e] || f(Error('The collection does not have the key "' + a + '"'));
    c.push([b, e]);
    b = b.o[e]
  }
  a = b.Q;
  for(delete b.Q;0 < c.length;) {
    e = c.pop();
    b = e[0];
    e = e[1];
    a: {
      d = h;
      for(d in b.o[e].o) {
        d = p;
        break a
      }
      d = l
    }
    if(d) {
      delete b.o[e]
    }else {
      break
    }
  }
  return a
};
s.la = function() {
  return new He(this)
};
function Le() {
  this.da = new He
}
s = Le.prototype;
s.m = "";
s.Qb = m;
s.qb = m;
s.Ma = 0;
s.wa = 0;
function Ce(a, b) {
  var c = Ae(b);
  if(c && !/^[\s\xa0]*$/.test(c == m ? "" : String(c))) {
    var c = c.toLowerCase(), d = a.da.get(c);
    d ? d.push(b) : a.da.set(c, [b])
  }
}
function Me(a, b) {
  var c = p, d = a.da.qa(b);
  if(d && d.length && (a.wa = 0, a.Ma = 0, c = a.da.get(d[0]), c = Ne(a, c))) {
    a.Qb = d
  }
  return c
}
function Ne(a, b) {
  var c;
  b && (a.wa < b.length && (c = b[a.wa], a.qb = b), c && (c.Tb(), c.select()));
  return!!c
}
s.clear = function() {
  this.m = ""
};
function Oe(a, b) {
  S.call(this);
  a && (this.mb && this.detach(), this.b = a, this.lb = Q(this.b, "keypress", this, b), this.Nb = Q(this.b, "keydown", this.sa, b, this), this.mb = Q(this.b, "keyup", this.yd, b, this))
}
x(Oe, S);
s = Oe.prototype;
s.b = m;
s.lb = m;
s.Nb = m;
s.mb = m;
s.A = -1;
s.U = -1;
s.yb = p;
var Pe = {3:13, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:46, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, Qe = {Up:38, Down:40, Left:37, Right:39, Enter:13, F1:112, F2:113, F3:114, F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":46, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, Re = B || 
D && E("525"), Se = A && C;
s = Oe.prototype;
s.sa = function(a) {
  if(D && (17 == this.A && !a.ctrlKey || 18 == this.A && !a.altKey || A && 91 == this.A && !a.metaKey)) {
    this.U = this.A = -1
  }
  -1 == this.A && (a.ctrlKey && 17 != a.keyCode ? this.A = 17 : a.altKey && 18 != a.keyCode ? this.A = 18 : a.metaKey && 91 != a.keyCode && (this.A = 91));
  Re && !Tc(a.keyCode, this.A, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.U = Vc(a.keyCode), Se && (this.yb = a.altKey))
};
s.yd = function(a) {
  this.U = this.A = -1;
  this.yb = a.altKey
};
s.handleEvent = function(a) {
  var b = a.w, c, d, e = b.altKey;
  B && "keypress" == a.type ? (c = this.U, d = 13 != c && 27 != c ? b.keyCode : 0) : D && "keypress" == a.type ? (c = this.U, d = 0 <= b.charCode && 63232 > b.charCode && Uc(c) ? b.charCode : 0) : hb ? (c = this.U, d = Uc(c) ? b.keyCode : 0) : (c = b.keyCode || this.U, d = b.charCode || 0, Se && (e = this.yb), A && (63 == d && 224 == c) && (c = 191));
  var g = c = Vc(c), k = b.keyIdentifier;
  c ? 63232 <= c && c in Pe ? g = Pe[c] : 25 == c && a.shiftKey && (g = 9) : k && k in Qe && (g = Qe[k]);
  a = g == this.A;
  this.A = g;
  b = new Te(g, d, a, b);
  b.altKey = e;
  this.dispatchEvent(b)
};
s.a = q("b");
s.detach = function() {
  this.lb && (R(this.lb), R(this.Nb), R(this.mb), this.mb = this.Nb = this.lb = m);
  this.b = m;
  this.U = this.A = -1
};
s.e = function() {
  Oe.c.e.call(this);
  this.detach()
};
function Te(a, b, c, d) {
  d && Bc(this, d, h);
  this.type = "key";
  this.keyCode = a;
  this.charCode = b;
  this.repeat = c
}
x(Te, Ac);
function Ue(a) {
  S.call(this);
  this.b = a;
  a = B ? "focusout" : "blur";
  this.Kd = Q(this.b, B ? "focusin" : "focus", this, !B);
  this.Ld = Q(this.b, a, this, !B)
}
x(Ue, S);
Ue.prototype.handleEvent = function(a) {
  var b = new Ac(a.w);
  b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
  this.dispatchEvent(b)
};
Ue.prototype.e = function() {
  Ue.c.e.call(this);
  R(this.Kd);
  R(this.Ld);
  delete this.b
};
function Ve(a, b, c) {
  $.call(this, a, b, c);
  this.Ea = l;
  se(this, l);
  this.g = this;
  this.Aa = new Le;
  if(B) {
    try {
      document.execCommand("BackgroundImageCache", p, l)
    }catch(d) {
    }
  }
}
x(Ve, $);
s = Ve.prototype;
s.Ob = m;
s.Eb = m;
s.Fb = p;
s.jd = m;
s.ga = l;
s.Yd = l;
s.Qa = l;
s.Xb = l;
s.n = function() {
  return this
};
s.$ = ba(0);
s.Tb = aa();
s.Ja = function() {
  this.Fb = l;
  be(this.a(), "focused");
  this.g && this.g.select()
};
s.Gb = function() {
  this.Fb = p;
  ce(this.a(), "focused")
};
s.hasFocus = q("Fb");
s.z = function() {
  return!this.Qa || Ve.c.z.call(this)
};
s.W = function(a) {
  this.Qa ? Ve.c.W.call(this, a) : this.Ea = a
};
s.pc = ba("");
s.eb = function() {
  var a = qe(this);
  return a ? a.firstChild : m
};
s.bb = ba(m);
s.Ba = aa();
s.fb = function() {
  return Ve.c.fb.call(this) + (this.Qa ? "" : " " + this.p.ad)
};
s.ab = function() {
  var a = this.z();
  if(a && this.Cb) {
    return this.Cb
  }
  if(!a && this.Jb) {
    return this.Jb
  }
  var b = this.p;
  return a && b.kc ? b.na + " " + b.kc : !a && b.fc ? b.na + " " + b.fc : ""
};
function re(a, b) {
  if(a.g != b) {
    var c = p;
    a.g && (c = a.g == a.jd, se(a.g, p));
    if(a.g = b) {
      se(b, l), c && b.select()
    }
    a.dispatchEvent("change")
  }
}
function We(a) {
  function b(a) {
    var k = me(a);
    if(k) {
      var n = !d || c == a.getParent() && !e ? a.p.dc : a.p.cc;
      k.className = n;
      if(k = a.bb()) {
        k.className = ze(a)
      }
    }
    W(a, b)
  }
  var c = a, d = c.ga, e = c.Xb;
  b(a)
}
s.jb = function() {
  Ve.c.jb.call(this);
  var a = this.a();
  Yd(a, "tree");
  Z(a, "labelledby", le(this).id)
};
s.v = function() {
  Ve.c.v.call(this);
  var a = this.a();
  a.className = this.p.dd;
  a.setAttribute("hideFocus", "true");
  this.zb();
  this.jb()
};
s.I = function() {
  Ve.c.I.call(this);
  this.Ya()
};
s.zb = function() {
  var a = this.a();
  a.tabIndex = 0;
  var b = this.Ob = new Oe(a), c = this.Eb = new Ue(a);
  this.cb().i(c, "focusout", this.Gb).i(c, "focusin", this.Ja).i(b, "key", this.xd).i(a, "mousedown", this.Hb).i(a, "click", this.Hb).i(a, "dblclick", this.Hb)
};
s.Ya = function() {
  this.Ob.S();
  this.Ob = m;
  this.Eb.S();
  this.Eb = m
};
s.Hb = function(a) {
  var b;
  a: {
    b = m;
    for(var c = a.target;c != m;) {
      if(b = ke[c.id]) {
        break a
      }
      if(c == this.a()) {
        break
      }
      c = c.parentNode
    }
    b = m
  }
  if(b) {
    switch(a.type) {
      case "mousedown":
        "expand" == a.target.getAttribute("type") && Y(b) ? b.kb && b.toggle() : (b.select(), te(b));
        break;
      case "click":
        b.Rd(a);
        break;
      case "dblclick":
        "expand" == a.target.getAttribute("type") && Y(b) || b.kb && b.toggle()
    }
  }
};
s.xd = function(a) {
  var b = p, b = this.Aa, c = p;
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
      if(a.ctrlKey) {
        var c = 40 == a.keyCode ? 1 : -1, d = b.Qb;
        if(d) {
          var e = m, g = p;
          if(b.qb) {
            var k = b.wa + c;
            0 <= k && k < b.qb.length ? (b.wa = k, e = b.qb) : g = l
          }
          e || (k = b.Ma + c, 0 <= k && k < d.length && (b.Ma = k), d.length > b.Ma && (e = b.da.get(d[b.Ma])), e && (e.length && g) && (b.wa = -1 == c ? e.length - 1 : 0));
          Ne(b, e) && (b.Qb = d)
        }
        c = l
      }
      break;
    case 8:
      d = b.m.length - 1;
      c = l;
      0 < d ? (b.m = b.m.substring(0, d), Me(b, b.m)) : 0 == d ? b.m = "" : c = p;
      break;
    case 27:
      b.m = "", c = l
  }
  if(!(b = c)) {
    if(b = this.g) {
      if(b = this.g, c = l, !a.metaKey && !a.ctrlKey) {
        switch(a.keyCode) {
          case 39:
            if(a.altKey) {
              break
            }
            Y(b) && (b.z() ? X(b, 0).select() : b.W(l));
            break;
          case 37:
            if(a.altKey) {
              break
            }
            Y(b) && b.z() && b.kb ? b.W(p) : (d = b.getParent(), e = b.n(), d && (e.Qa || d != e) && d.select());
            break;
          case 40:
            (d = Ee(b)) && d.select();
            break;
          case 38:
            (d = Fe(b)) && d.select();
            break;
          default:
            c = p
        }
        c && (a.preventDefault(), (e = b.n()) && e.Aa.clear());
        b = c
      }else {
        b = h
      }
    }
    if(!b) {
      b = this.Aa;
      c = p;
      if(!a.ctrlKey && !a.altKey && (d = String.fromCharCode(a.charCode || a.keyCode).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.m))) {
        b.m += d, c = Me(b, b.m)
      }
      b = c
    }
  }
  b && a.preventDefault();
  return b
};
s.createNode = function(a) {
  return new Ge(a || "", this.p, this.M())
};
s.removeNode = function(a) {
  var b = this.Aa, c = Ae(a);
  if(c && !/^[\s\xa0]*$/.test(c == m ? "" : String(c))) {
    var c = c.toLowerCase(), d = b.da.get(c);
    d && (Ka(d, a), d.length && b.da.remove(c))
  }
};
var je = {Mb:19, dd:"goog-tree-root goog-tree-item", ad:"goog-tree-hide-root", bd:"goog-tree-item", cc:"goog-tree-children", dc:"goog-tree-children-nolines", fd:"goog-tree-row", cd:"goog-tree-item-label", na:"goog-tree-icon", Uc:"goog-tree-expand-icon", Yc:"goog-tree-expand-icon-plus", Xc:"goog-tree-expand-icon-minus", $c:"goog-tree-expand-icon-tplus", Zc:"goog-tree-expand-icon-tminus", Wc:"goog-tree-expand-icon-lplus", Vc:"goog-tree-expand-icon-lminus", ic:"goog-tree-expand-icon-t", hc:"goog-tree-expand-icon-l", 
gc:"goog-tree-expand-icon-blank", jc:"goog-tree-expanded-folder-icon", ec:"goog-tree-collapsed-folder-icon", lc:"goog-tree-file-icon", kc:"goog-tree-expanded-folder-icon", fc:"goog-tree-collapsed-folder-icon", ed:"selected"};
function Xe(a) {
  S.call(this);
  this.Ta = a || window;
  this.pb = Q(this.Ta, "resize", this.Ad, p, this);
  this.ha = Cb(this.Ta || window)
}
x(Xe, S);
s = Xe.prototype;
s.pb = m;
s.Ta = m;
s.ha = m;
s.e = function() {
  Xe.c.e.call(this);
  this.pb && (R(this.pb), this.pb = m);
  this.ha = this.Ta = m
};
s.Ad = function() {
  var a = Cb(this.Ta || window);
  if(!(a == this.ha || (!a || !this.ha ? 0 : a.width == this.ha.width && a.height == this.ha.height))) {
    this.ha = a, this.dispatchEvent("resize")
  }
};
function Ye() {
  this.F = p;
  var a = L("root");
  this.Zb = Md(a, "username");
  this.dir = Md(a, "dir");
  this.file = Md(a, "file");
  this.fe = {anotations:["hello", "www", ["world", ["a", "b", "c", "d", "E"]], "XXXee"]};
  this.load()
}
s = Ye.prototype;
s.load = function() {
  var a = new Bd;
  Q(a, "complete", function(a) {
    200 != Ld(a.target) ? alert("Sorry, I cant't load this annotation. :(") : (a = a.target, a = a.d ? ld(a.d.responseText) : h, this.data = a, Ze(this, this.data))
  }, p, this);
  a.send("/api_get/" + this.dir + "/" + this.file)
};
function Ze(a, b) {
  var c = Db("div", {id:"container"});
  Lb(c, {Fd:"/img/" + a.dir + "/" + a.file, Zb:a.Zb, dir:a.dir, file:a.file, Qd:a.data.noText, gd:a.data.dontUnderstandLanguage, Bc:a.data.notes, ge:[]});
  Gb(c);
  var c = new U, d = new U;
  Td(new $e(c, d, af), document.getElementById("split-container"));
  bf(a, b.anotations);
  cf(a);
  a.Gc();
  df(a);
  a.startTime = Date.now();
  setInterval(function() {
    var b = Math.floor((Date.now() - a.startTime) / 1E3), c = Math.floor(b / 60), b = Math.floor(c / 60) + "h " + c % 60 + "m " + b % 60 + "s", c = L("timer");
    if("textContent" in c) {
      c.textContent = b
    }else {
      if(3 == c.nodeType) {
        c.data = b
      }else {
        if(c.firstChild && 3 == c.firstChild.nodeType) {
          for(;c.lastChild != c.firstChild;) {
            c.removeChild(c.lastChild)
          }
          c.firstChild.data = b
        }else {
          for(var d;d = c.firstChild;) {
            c.removeChild(d)
          }
          c.appendChild(K(c).createTextNode(String(b)))
        }
      }
    }
  }, 200);
  c = new Xe;
  Q(c, "resize", a.Gc);
  Q(L("anotation-img"), "click", function() {
    Sa(L("anotation-img"), "img-full")
  });
  Q(L("more-options-show"), "click", function() {
    Sa(L("more-options-show"), "hide");
    Sa(L("more-options"), "hide")
  });
  Q(L("save"), "click", a.Ub, p, a);
  Q(L("prev"), "click", a.Ub, p, a);
  Q(L("next"), "click", a.Ub, p, a);
  window.onbeforeunload = function() {
    if(a.F) {
      return"You have unsaved changes. Do you really want to leave this anotation?"
    }
  }
}
function df(a) {
  var b = new Xc(L("split-container"));
  b.f("save", "meta+S");
  b.f("save", "ctrl+S");
  b.f("next", "meta+shift+right");
  b.f("next", "ctrl+shift+right");
  b.f("prev", "meta+shift+left");
  b.f("prev", "ctrl+shift+left");
  Q(b, "shortcut", a.vd, p, a)
}
s.vd = function(a) {
  L(a.identifier).click();
  return p
};
function bf(a, b) {
  var c = new Ve("root", je);
  ef(a, c, b);
  Sd(c, document.getElementById("tree-container"));
  ve(c);
  a.h = c;
  c = new Xc(c.b);
  c.f("ESC", "esc");
  c.f("DELETE", "delete");
  c.f("UP", "meta+up");
  c.f("UP", "ctrl+up");
  c.f("DOWN", "meta+down");
  c.f("DOWN", "ctrl+down");
  c.f("LEFT", "meta+left");
  c.f("LEFT", "ctrl+left");
  c.f("RIGHT", "meta+right");
  c.f("RIGHT", "ctrl+right");
  c.f("CUT", "meta+x");
  c.f("CUT", "ctrl+x");
  c.f("PASTE", "meta+v");
  c.f("PASTE", "ctrl+v");
  c.f("EDIT", "meta+e");
  c.f("EDIT", "ctrl+e");
  Q(c, "shortcut", a.Bd, p, a);
  a.h.cb().i(L("tree-container"), "dblclick", a.mc, p, a)
}
s.mc = function() {
  var a = this.h.g;
  if(0 == a.Ga().length) {
    var b = Ae(a), b = window.prompt("Set text value:", b);
    0 < b.length && Be(a, va(b))
  }
};
s.Bd = function(a) {
  switch(a.identifier) {
    case "EDIT":
      this.mc();
      break;
    case "ESC":
      this.ba.a().focus();
      break;
    case "DELETE":
      this.h.g.getParent() && this.h.g.getParent().removeChild(this.h.g);
      this.F = l;
      break;
    case "UP":
      a = this.h.g;
      if(0 != a.Ga().length) {
        return
      }
      var b = a.getParent();
      if(!Fe(a)) {
        return
      }
      if(Fe(a).getParent() == b) {
        var c = Wd(b, a);
        b.removeChild(a);
        b.K(a, c - 1)
      }else {
        for(c = a;;) {
          c = Fe(c);
          if(!c) {
            return
          }
          if(!X(c, 0)) {
            break
          }
        }
        b = c.getParent();
        if(!b) {
          return
        }
        a.getParent().removeChild(a);
        c = Wd(b, c);
        b.K(a, c + 1)
      }
      re(this.h, a);
      this.F = l;
      break;
    case "DOWN":
      a = this.h.g;
      if(0 != a.Ga().length) {
        return
      }
      b = a.getParent();
      c = Ee(a);
      if(!c) {
        return
      }
      if(c.getParent() == b && !Y(c)) {
        c = Wd(b, a), b.removeChild(a), b.K(a, c + 1)
      }else {
        for(c = a;!(c = Ee(c), !X(c, 0));) {
        }
        b = c.getParent();
        if(!b) {
          return
        }
        c = Wd(b, c);
        a.getParent().removeChild(a);
        b.K(a, c)
      }
      re(this.h, a);
      this.F = l;
      break;
    case "RIGHT":
      a = this.h.g;
      if(Y(a)) {
        return
      }
      c = a.n().createNode(Ae(a));
      Be(a, "&nbsp;&nbsp;&nbsp;&nbsp");
      a.add(c);
      re(this.h, c);
      this.F = l;
      break;
    case "RIGHT_OLD":
      return;
    case "LEFT":
      a = this.h.g;
      b = a.getParent();
      c = b.getParent();
      if(!c) {
        return
      }
      b.removeChild(a);
      c.add(a);
      re(this.h, a);
      this.F = l;
      break;
    case "CUT":
      this.h.g && (this.ka = this.h.g, this.ka.getParent() && this.ka.getParent().remove(this.ka));
      this.F = l;
      break;
    case "PASTE":
      this.h.g && this.ka && (a = this.h.g, X(a, 0) || (a = a.getParent()), a.add(this.ka), this.ka = m), this.F = l
  }
  ve(this.h);
  this.refresh()
};
s.refresh = function() {
  var a = this.h;
  a.ga != p && (a.ga = p, a.k && We(a));
  a = this.h;
  a.ga != l && (a.ga = l, a.k && We(a))
};
function ff(a) {
  for(var b = a.h.g;b.getParent();) {
    b = b.getParent()
  }
  a = gf(a, b);
  return fa(a) ? a : []
}
function gf(a, b) {
  var c = b.Ga();
  if(0 < c.length) {
    var d = [];
    Fa(c, function(a) {
      d.push(gf(this, a))
    }, a);
    return d
  }
  return Ae(b)
}
function ef(a, b, c) {
  Be(b, "&nbsp;&nbsp;&nbsp;&nbsp;");
  if(0 < c.length) {
    for(var d = 0;d < c.length;d++) {
      var e = b.n().createNode("");
      b.add(e);
      fa(c[d]) ? ef(a, e, c[d]) : Be(e, va(c[d]))
    }
  }
}
function cf(a) {
  a.ba = new de;
  var b = a.ba;
  Td(b, L("main-input"));
  var c = he(b);
  b.Kb = l;
  b.a().focus();
  !c && !ee && (b.a().value = b.G);
  b.a().select();
  ee || (b.l && b.l.ob(b.a(), "click", b.Ja), Rc(b.hd, 10, b));
  b = new Xc(b.b);
  b.f("ESC", "esc");
  b.f("ENTER", "enter");
  b.f("CMD_ENTER", "meta+enter");
  b.f("CMD_ENTER", "ctrl+enter");
  Q(b, "shortcut", a.wd, p, a)
}
s.wd = function(a) {
  if("ENTER" == a.identifier) {
    var b = ie(this.ba), b = ua(b);
    "" == b ? alert("Can't add empty string!") : (a = this.h.g, !X(a, 0) && a.getParent() && (a = a.getParent()), b = a.n().createNode(b), a.add(b), this.ba.clear(), this.F = l)
  }else {
    if("CMD_ENTER" == a.identifier) {
      if(b = ie(this.ba), b = ua(b), "" == b) {
        alert("Can't add empty string!")
      }else {
        a = this.h.g;
        !X(a, 0) && a.getParent() && (a = a.getParent());
        var c = a.n().createNode("&nbsp;&nbsp;&nbsp;&nbsp;"), b = a.n().createNode(b);
        a.add(c);
        c.add(b);
        this.ba.clear();
        ve(this.h);
        re(this.h, c);
        this.F = l
      }
    }else {
      this.h.a().focus()
    }
  }
};
s.Gc = function() {
  var a = Cb(window).height, b;
  b = yb("goog-splitpane-first-container");
  b.style.height = Yb(a, l);
  b = yb("goog-splitpane-second-container");
  b.style.height = Yb(a, l);
  b = yb("goog-splitpane-handle");
  b.style.height = Yb(a, l);
  b = L("split-container");
  b.style.height = Yb(a, l)
};
s.Ub = function(a) {
  var b = ie(this.ba), b = ua(b);
  "" != b ? alert("You have nonempty string in input box. Add it into annotation tree or delete it before saving.") : (this.F = p, Zb(L("save-buttons"), p), this.Jd = a.target.id, this.data.anotations = ff(this), this.data.noText = L("noText").checked, this.data.dontUnderstandLanguage = L("dontUnderstandLanguage").checked, this.data.notes = L("notes").value, a = new Bd, Q(a, "complete", function(a) {
    Zb(L("save-buttons"), l);
    if(200 != Ld(a.target)) {
      alert("Sorry, I cant't save that :(")
    }else {
      switch(this.Jd) {
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
  }, p, this), b = this.data, b = md(b), b = encodeURIComponent(String(b)), a.send("/api_save/" + this.dir + "/" + this.file, "POST", b))
};
function hf(a, b, c) {
  S.call(this);
  this.target = a;
  this.handle = b || a;
  this.Pb = c || new M(NaN, NaN, NaN, NaN);
  this.s = K(a);
  this.l = new Nd(this);
  a = oa(mc, this.l);
  this.Na || (this.Na = []);
  this.Na.push(na(a, h));
  Q(this.handle, ["touchstart", "mousedown"], this.Hc, p, this)
}
x(hf, S);
var jf = B || C && E("1.9.3");
s = hf.prototype;
s.clientX = 0;
s.clientY = 0;
s.screenX = 0;
s.screenY = 0;
s.Ic = 0;
s.Jc = 0;
s.oa = 0;
s.pa = 0;
s.nc = l;
s.Z = p;
s.tc = 0;
s.Od = 0;
s.Ed = p;
s.Yb = p;
s.cb = q("l");
s.e = function() {
  hf.c.e.call(this);
  Mc(this.handle, ["touchstart", "mousedown"], this.Hc, p, this);
  this.l.xa();
  jf && this.s.releaseCapture();
  this.handle = this.target = m
};
function kf(a) {
  a.fa === h && (a.fa = $b(a.target));
  return a.fa
}
s.Hc = function(a) {
  var b = "mousedown" == a.type;
  if(this.nc && !this.Z && (!b || (vc ? 0 == a.w.button : "click" == a.type || a.w.button & Cc[0]) && (!D || !A || !a.ctrlKey))) {
    lf(a);
    if(0 == this.tc) {
      if(this.dispatchEvent(new mf("start", this, a.clientX, a.clientY, a))) {
        this.Z = l, a.preventDefault()
      }else {
        return
      }
    }else {
      a.preventDefault()
    }
    var b = this.s, c = b.documentElement, d = !jf;
    this.l.i(b, ["touchmove", "mousemove"], this.zd, d);
    this.l.i(b, ["touchend", "mouseup"], this.$a, d);
    jf ? (c.setCapture(p), this.l.i(c, "losecapture", this.$a)) : this.l.i(b ? b.parentWindow || b.defaultView : window, "blur", this.$a);
    B && this.Ed && this.l.i(b, "dragstart", yc);
    this.Xd && this.l.i(this.Xd, "scroll", this.Td, d);
    this.clientX = this.Ic = a.clientX;
    this.clientY = this.Jc = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    this.Yb ? (a = this.target, b = a.offsetLeft, c = a.offsetParent, !c && "fixed" == O(a, "position") && (c = K(a).documentElement), c ? (C ? (d = dc(c), b += d.left) : G(8) && (d = dc(c), b -= d.left), a = $b(c) ? c.clientWidth - (b + a.offsetWidth) : b) : a = b) : a = this.target.offsetLeft;
    this.oa = a;
    this.pa = this.target.offsetTop;
    this.Rb = Kb(J(this.s));
    this.Od = pa()
  }else {
    this.dispatchEvent("earlycancel")
  }
};
s.$a = function(a, b) {
  this.l.xa();
  jf && this.s.releaseCapture();
  if(this.Z) {
    lf(a);
    this.Z = p;
    var c = nf(this, this.oa), d = of(this, this.pa);
    this.dispatchEvent(new mf("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
  }else {
    this.dispatchEvent("earlycancel")
  }
};
function lf(a) {
  var b = a.type;
  "touchstart" == b || "touchmove" == b ? Bc(a, a.w.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && Bc(a, a.w.changedTouches[0], a.currentTarget)
}
s.zd = function(a) {
  if(this.nc) {
    lf(a);
    var b = (this.Yb && kf(this) ? -1 : 1) * (a.clientX - this.clientX), c = a.clientY - this.clientY;
    this.clientX = a.clientX;
    this.clientY = a.clientY;
    this.screenX = a.screenX;
    this.screenY = a.screenY;
    if(!this.Z) {
      var d = this.Ic - this.clientX, e = this.Jc - this.clientY;
      if(d * d + e * e > this.tc) {
        if(this.dispatchEvent(new mf("start", this, a.clientX, a.clientY, a))) {
          this.Z = l
        }else {
          this.Za || this.$a(a);
          return
        }
      }
    }
    c = pf(this, b, c);
    b = c.x;
    c = c.y;
    this.Z && this.dispatchEvent(new mf("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (qf(this, a, b, c), a.preventDefault())
  }
};
function pf(a, b, c) {
  var d = Kb(J(a.s));
  b += d.x - a.Rb.x;
  c += d.y - a.Rb.y;
  a.Rb = d;
  a.oa += b;
  a.pa += c;
  b = nf(a, a.oa);
  a = of(a, a.pa);
  return new I(b, a)
}
s.Td = function(a) {
  var b = pf(this, 0, 0);
  a.clientX = this.clientX;
  a.clientY = this.clientY;
  qf(this, a, b.x, b.y)
};
function qf(a, b, c, d) {
  a.Yb && kf(a) ? a.target.style.right = c + "px" : a.target.style.left = c + "px";
  a.target.style.top = d + "px";
  a.dispatchEvent(new mf("drag", a, b.clientX, b.clientY, b, c, d))
}
function nf(a, b) {
  var c = a.Pb, d = !isNaN(c.left) ? c.left : m, c = !isNaN(c.width) ? c.width : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function of(a, b) {
  var c = a.Pb, d = !isNaN(c.top) ? c.top : m, c = !isNaN(c.height) ? c.height : 0;
  return Math.min(d != m ? d + c : Infinity, Math.max(d != m ? d : -Infinity, b))
}
function mf(a, b, c, d, e, g, k, n) {
  P.call(this, a);
  this.clientX = c;
  this.clientY = d;
  this.be = e;
  this.left = g !== h ? g : b.oa;
  this.top = k !== h ? k : b.pa;
  this.ee = b;
  this.de = !!n
}
x(mf, P);
function $e(a, b, c, d) {
  U.call(this, d);
  this.Ud = c;
  this.Fa = a;
  this.K(a, Ud(this), h);
  this.Oa = b;
  this.K(b, Ud(this), h);
  this.D = m
}
x($e, U);
s = $e.prototype;
s.ia = m;
s.q = m;
s.za = m;
s.gb = 5;
s.Gd = m;
s.Fc = m;
s.Db = m;
s.bc = l;
s.J = m;
var af = "horizontal";
s = $e.prototype;
s.t = function() {
  var a = this.M(), b = a.t("div", "goog-splitpane-first-container"), c = a.t("div", "goog-splitpane-second-container"), d = a.t("div", "goog-splitpane-handle");
  this.b = a.t("div", "goog-splitpane", b, c, d);
  this.q = b;
  this.za = c;
  this.D = d;
  rf(this);
  sf(this)
};
s.ac = function(a) {
  var b = tf(a, "goog-splitpane-first-container");
  if(!b) {
    return p
  }
  this.q = b;
  b = tf(a, "goog-splitpane-second-container");
  if(!b) {
    return p
  }
  this.za = b;
  a = tf(a, "goog-splitpane-handle");
  if(!a) {
    return p
  }
  this.D = a;
  return l
};
function tf(a, b) {
  for(var c = Ib(a), d = 0;d < c.length;d++) {
    var e = c[d];
    if(ae(e, b)) {
      return e
    }
  }
  return zb(m, b, a)[0]
}
s.Da = function(a) {
  $e.c.Da.call(this, a);
  rf(this);
  a = ac(a);
  a = new H(a.width, a.height);
  bc(this.a(), a);
  this.J && bc(this.J, a);
  uf(this);
  sf(this)
};
function sf(a) {
  var b = a.M();
  a.Fa.a() || a.Fa.t();
  b.appendChild(a.q, a.Fa.a());
  a.Oa.a() || a.Oa.t();
  b.appendChild(a.za, a.Oa.a());
  a.ia = new hf(a.D, a.D);
  a.q.style.position = "absolute";
  a.za.style.position = "absolute";
  a = a.D.style;
  a.position = "absolute";
  a.overflow = "hidden";
  a.zIndex = 2
}
s.v = function() {
  $e.c.v.call(this);
  var a = this.a();
  "static" == O(a, "position") && (a.style.position = "relative");
  this.cb().i(this.D, "dblclick", this.pd).i(this.ia, "start", this.rd).i(this.ia, "drag", this.sd).i(this.ia, "end", this.qd);
  uf(this, this.Gd)
};
function vf(a) {
  return"vertical" == a.Ud
}
function rf(a) {
  vf(a) ? (a.D.style.height = a.gb + "px", be(a.D, "goog-splitpane-handle-vertical")) : (a.D.style.width = a.gb + "px", be(a.D, "goog-splitpane-handle-horizontal"))
}
function wf(a, b) {
  var c = b.left, d = b.top, e, g = C && (A || kb) && E("1.9");
  c instanceof I ? (e = c.x, c = c.y) : (e = c, c = d);
  a.style.left = Yb(e, g);
  a.style.top = Yb(c, g);
  bc(a, new H(Math.max(b.width, 0), Math.max(b.height, 0)))
}
function uf(a, b) {
  var c = ac(a.a()), d = vf(a), e = ga(b) ? b : ga(a.Db) ? a.Db : Math.floor((d ? c.height : c.width) / 2);
  a.Db = e;
  var g, k, n, r, y, w, F;
  d ? (n = d = c.width, r = a.gb, k = c.height - e - r, g = c.width, F = 0 + e, w = 0, y = F + r, c = 0) : (d = e, e = c.height, n = a.gb, r = c.height, g = c.width - d - n, k = c.height, w = 0 + d, F = 0, c = w + n, y = 0);
  wf(a.q, new M(0, 0, d, e));
  "function" == typeof a.Fa.Sb && a.Fa.Sb(new H(d, e));
  wf(a.D, new M(w, F, n, r));
  wf(a.za, new M(c, y, g, k));
  "function" == typeof a.Oa.Sb && a.Oa.Sb(new H(g, k));
  a.dispatchEvent("change")
}
s.rd = function() {
  if(!this.J) {
    var a = "position: relative";
    B && !E("10") && (a += ";background-color: #000;filter: Alpha(Opacity=0)");
    this.J = this.M().t("div", {style:a});
    this.M().appendChild(this.a(), this.J)
  }
  this.J.style.zIndex = 1;
  bc(this.J, ac(this.a()));
  var b = Tb(this.q), c = a = 0, d = b.x, b = b.y, e = ac(this.q), g = ec(this.q), k = ec(this.za);
  vf(this) ? (c = g.height + k.height, b += e.height - g.height) : (a = g.width + k.width, d += e.width - g.width);
  this.ia.Pb = new M(d, b, a, c) || new M(NaN, NaN, NaN, NaN)
};
s.sd = function(a) {
  this.bc && (vf(this) ? uf(this, a.top - Tb(this.q).y) : uf(this, a.left - Tb(this.q).x), this.dispatchEvent("handle_drag"))
};
s.qd = function(a) {
  this.J.style.zIndex = -1;
  this.bc || (vf(this) ? uf(this, a.top - Tb(this.q).y) : uf(this, a.left - Tb(this.q).x));
  this.dispatchEvent("handle_drag_end")
};
s.pd = function() {
  var a;
  a = this.q;
  var b = Wb(this.D);
  a = Wb(a);
  a = new I(b.x - a.x, b.y - a.y);
  var c = ac(this.q), d = ec(this.q);
  (b = vf(this)) ? (c = c.height - d.height, a = a.y) : (c = c.width - d.width, a = a.x);
  c == a ? uf(this, this.Fc) : (this.Fc = b ? ac(this.q).height : ac(this.q).width, uf(this, c));
  this.dispatchEvent("handle_snap")
};
s.e = function() {
  mc(this.ia);
  this.ia = m;
  Hb(this.J);
  this.J = m;
  $e.c.e.call(this)
};
function xf() {
  new Ye
}
var yf = ["app", "start"], zf = t;
!(yf[0] in zf) && zf.execScript && zf.execScript("var " + yf[0]);
for(var Af;yf.length && (Af = yf.shift());) {
  !yf.length && xf !== h ? zf[Af] = xf : zf = zf[Af] ? zf[Af] : zf[Af] = {}
}
;
