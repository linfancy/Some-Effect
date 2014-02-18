// 这段代码将在页面载入完成后弹出一个 "Hello World!" 的警告框，但是众所周知，window.onload 的特点是页面元素全部加载完成后才执行，比如页面内有大量的图片之类，当打开网页时，其实相关的 DOM 已经全部加载完成，此时已经可以执行你想要执行的脚本了，可是图片的加载速度要很慢于页面的 HTML，这显然在大多数情况下不是我们想要的。
// jQuery 提供一个 $(document).ready(); 来解决此问题，当页面 DOM 加载完成后，ready() 里的函数便会立即执行，但如果我们在不使用 jQuery 的情况下呢？
// 好了，废话不多说，大家都明白想要什么，以下是来自国外网站的一段代码，功能同等于 jQuery 的 $(document).ready();

// 把这段代码放到你的页面中或者某个导入的脚本中，然后你就可以像下面这样使用了：
// 1
// document.ready(function(){
// 2
//   alert('Document is ready!');
// 3
// });


(function () {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  var fn = [];
  var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  var d = document;
  d.ready = function (f) {
    if (!ie && !wk && d.addEventListener)
      return d.addEventListener('DOMContentLoaded', f, false);
    if (fn.push(f) > 1) return;
    if (ie)
      (function () {
        try { d.documentElement.doScroll('left'); run(); }
        catch (err) { setTimeout(arguments.callee, 0); }
      })();
    else if (wk)
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState))
          clearInterval(t), run();
      }, 0);
  };
})();
