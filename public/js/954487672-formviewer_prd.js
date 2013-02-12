var i = null, k = !1, l = this, m = function() {
  var a = document.hasFocus, b = typeof a;
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
}, n = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.a = b.prototype;
  a.prototype = new c
};
var p = function(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, p) : this.stack = Error().stack || "";
  a && (this.message = String(a))
};
n(p, Error);
var q = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
};
var r = function(a, b) {
  b.unshift(a);
  p.call(this, q.apply(i, b));
  b.shift()
};
n(r, p);
var s = function(a, b, c) {
  if(!a) {
    var d = Array.prototype.slice.call(arguments, 2), f = "Assertion failed";
    if(b) {
      var f = f + (": " + b), e = d
    }
    throw new r("" + f, e || []);
  }
};
var t = Array.prototype, u = t.indexOf ? function(a, b, c) {
  s(a.length != i);
  return t.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == i ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if("string" == typeof a) {
    return"string" != typeof b || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
var v, w, x, y, z = function() {
  return l.navigator ? l.navigator.userAgent : i
};
y = x = w = v = k;
var A;
if(A = z()) {
  var B = l.navigator;
  v = 0 == A.indexOf("Opera");
  w = !v && -1 != A.indexOf("MSIE");
  x = !v && -1 != A.indexOf("WebKit");
  y = !v && !x && "Gecko" == B.product
}
var C = w, D = y, E = x, F = function() {
  var a = l.document;
  return a ? a.documentMode : void 0
}, G;
a: {
  var H = "", I;
  if(v && l.opera) {
    var J = l.opera.version, H = "function" == typeof J ? J() : J
  }else {
    if(D ? I = /rv\:([^\);]+)(\)|;)/ : C ? I = /MSIE\s+([^\);]+)(\)|;)/ : E && (I = /WebKit\/(\S+)/), I) {
      var K = I.exec(z()), H = K ? K[1] : ""
    }
  }
  if(C) {
    var L = F();
    if(L > parseFloat(H)) {
      G = String(L);
      break a
    }
  }
  G = H
}
var M = G, N = {}, O = function(a) {
  if(!N[a]) {
    for(var b = 0, c = String(M).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), e = 0;0 == b && e < f;e++) {
      var j = c[e] || "", Y = d[e] || "", Z = RegExp("(\\d*)(\\D*)", "g"), $ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var g = Z.exec(j) || ["", "", ""], h = $.exec(Y) || ["", "", ""];
        if(0 == g[0].length && 0 == h[0].length) {
          break
        }
        b = ((0 == g[1].length ? 0 : parseInt(g[1], 10)) < (0 == h[1].length ? 0 : parseInt(h[1], 10)) ? -1 : (0 == g[1].length ? 0 : parseInt(g[1], 10)) > (0 == h[1].length ? 0 : parseInt(h[1], 10)) ? 1 : 0) || ((0 == g[2].length) < (0 == h[2].length) ? -1 : (0 == g[2].length) > (0 == h[2].length) ? 1 : 0) || (g[2] < h[2] ? -1 : g[2] > h[2] ? 1 : 0)
      }while(0 == b)
    }
    N[a] = 0 <= b
  }
}, P = l.document, aa = !P || !C ? void 0 : F() || ("CSS1Compat" == P.compatMode ? parseInt(M, 10) : 5);
if(D || C) {
  var Q;
  if(Q = C) {
    Q = C && 9 <= aa
  }
  Q || D && O("1.9.1")
}
C && O("9");
var R = function(a, b, c) {
  var d = document;
  c = c || d;
  a = a && "*" != a ? a.toUpperCase() : "";
  if(c.querySelectorAll && c.querySelector && (a || b)) {
    return c.querySelectorAll(a + (b ? "." + b : ""))
  }
  if(b && c.getElementsByClassName) {
    c = c.getElementsByClassName(b);
    if(a) {
      for(var d = {}, f = 0, e = 0, j;j = c[e];e++) {
        a == j.nodeName && (d[f++] = j)
      }
      d.length = f;
      return d
    }
    return c
  }
  c = c.getElementsByTagName(a || "*");
  if(b) {
    d = {};
    for(e = f = 0;j = c[e];e++) {
      a = j.className, "function" == typeof a.split && 0 <= u(a.split(/\s+/), b) && (d[f++] = j)
    }
    d.length = f;
    return d
  }
  return c
};
var S = function(a) {
  for(var b = 0;b < a.length;b++) {
    var c = R("textarea", i, a[b]);
    if(c[0]) {
      return c[0].focus(), !0
    }
    c = R("input", i, a[b]);
    if(c[0]) {
      return c[0].focus(), !0
    }
  }
  return k
}, ba = function() {
  var a = document.getElementById && document.getElementById("ss-submit");
  a && (a.disabled = !0, window.setTimeout(function() {
    a.disabled = k
  }, 5E3))
}, ca = function(a, b) {
  var c = function() {
    /^[\s\xa0]*$/.test(a.value) || (b.checked = !0);
    window.setTimeout(function() {
      a.focus()
    }, 10)
  };
  a.onclick = c;
  a.onkeyup = c;
  b.onclick = function() {
    window.setTimeout(function() {
      b.checked && a.focus()
    }, 10)
  }
}, T = function() {
  var a = function() {
    document.getElementById("ss-form").submit.click()
  }, b = document.getElementById("topSubmitButton");
  b && (b.onclick = a, b.style.display = "");
  if("function" == m() ? document.hasFocus() : 1) {
    a = document.getElementById("ss-form"), S(R("*", "errorbox-bad", a)) || S(R("*", "ss-form-entry", a))
  }
  document.getElementById("ss-form").onsubmit = ba;
  a = R("input", "ss-q-other", void 0);
  for(b = 0;b < a.length;b++) {
    var c = R("input", "ss-q-other-toggle", a[b].parentNode.parentNode)[0];
    ca(a[b], c)
  }
  (a = document.getElementById("pre-populate-url")) && a.select();
  a = document;
  a = a.querySelectorAll && a.querySelector ? a.querySelectorAll(".aria-todo") : a.getElementsByClassName ? a.getElementsByClassName("aria-todo") : R("*", "aria-todo", void 0);
  for(b = 0;b < a.length;b++) {
    c = a[b].getAttribute("aria-hidden"), /^[\s\xa0]*$/.test(c) && a[b].setAttribute("aria-hidden", !0)
  }
}, U = ["_initFormViewer"], V = l;
!(U[0] in V) && V.execScript && V.execScript("var " + U[0]);
for(var W;U.length && (W = U.shift());) {
  var X;
  if(X = !U.length) {
    X = void 0 !== T
  }
  X ? V[W] = T : V = V[W] ? V[W] : V[W] = {}
}
;
