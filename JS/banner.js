window.onload = function() {
  //返回顶部
  var oBtn = document.getElementById('btn');
  //获取页面可视区的高度
  var clientHeight = document.documentElement.clientHeight;
  var timer = null;
  var isTop = true;
  //滚动条滚动时触发
  window.onscroll = function() {
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop >= clientHeight) {
      oBtn.style.display = 'block';
    } else {
      oBtn.style.display = 'none';
    }
    if (!isTop) {
      clearInterval(timer);
    }
    isTop = false;
  }

  oBtn.onclick = function() {
    timer = setInterval(function() { //定时器
      //获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      var ispeed = Math.floor(-osTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
      isTop = true;
     /* console.log(osTop - ispeed);*/
      if (osTop == 0) {
        clearInterval(timer);
      }
    }, 30);
  }

  //banner轮播图
  var bannerWrap = document.getElementById('banner_wrap');
  var banner = document.getElementById('banner');
  var oImg = banner.getElementsByTagName('img')[0];
  var oImgW = oImg.clientWidth;
  var len = oImg.getElementsByTagName('img').length;
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var circle = document.getElementById('circle');
  var aLi = circle.getElementsByTagName('li');

  var num = 0;

  function imgChange() {
    num++;
    if (num == 9) {
      num = 0;
      banner.style.left = -num * oImgW + 'px';
      banner.style.transition = 'all 0s';
      banner.style.webkitTransition = 'all 0s';
      num = 1;
    }
    setTimeout(function() {
      banner.style.left = -num * oImgW + 'px';
      banner.style.transition = 'all 1s';
      banner.style.webkitTransition = 'all 1s';

      aLiActive();
    }, 0);
  }

  function aLiActive() {
    for (var i = 0; i < aLi.length; i++) {
      aLi[i].className = '';
    }
    aLi[num - 1].className = 'active';
  }
  nextBtn.onclick = function() {
    imgChange();

  }

  prevBtn.onclick = function() {
    num--;
    if (num == 0) {
      num = 9;
      banner.style.left = -num * oImgW + 'px';
      banner.style.transition = 'all 0s';
      banner.style.webkitTransition = 'all 0s';
      num = 8;
    }
    setTimeout(function() {
      banner.style.left = -num * oImgW + 'px';
      banner.style.transition = 'all 1s';
      banner.style.webkitTransition = 'all 1s';

      aLiActive();
    }, 0);

  }
  var timer = null;

  function Move() {
    timer = setInterval(function() {
      imgChange();
    }, 2000);
  }

  bannerWrap.onmouseover = function() {
    clearInterval(timer);
  }
  bannerWrap.onmouseout = function() {
    Move();
  }
  Move();

  for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onmouseover = function() {
      num = this.index + 1;

      aLiActive();

      banner.style.left = -num * oImgW + 'px';
      banner.style.transition = 'all 1s';
      banner.style.webkitTransition = 'all 1s';

    }
  }
}
