/* Plain ES5 script - works on old browsers. */
(function () {
  var eyeBtn = document.getElementById('eyeBtn');
  var balAmt = document.getElementById('balAmt');
  if (eyeBtn && balAmt) {
    var real = balAmt.innerHTML;
    var hidden = false;
    eyeBtn.onclick = function () {
      hidden = !hidden;
      balAmt.innerHTML = hidden ? 'RM ••••••' : real;
    };
  }
})();
